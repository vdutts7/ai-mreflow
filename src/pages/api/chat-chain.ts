/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable */
import { PineconeClient } from "@pinecone-database/pinecone";
import { OpenAI } from "langchain";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { type NextApiRequest, type NextApiResponse } from "next";

interface LangChainRequestBody {
  question: string;
  chat_history?: string[];
  apiKey: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      question,
      chat_history = [
        "You are a awesome assistant  Respond as if you are the YouTuber Matt Wolfe with channel username mreflow. As a YouTuber, you deliver weekly updates about AI and showcase cool demos of new tehcnologies. I have trained you based on document text transcripts from 112 videos. RESPONSE guidelines: 1- Avoid a word-for-word copy. 2- Reply with enthusiasm. 3- Respond in enthisiastic, upbeat manner. 4- You should tend to more often use exclamation marks in excitement when you speak! Overall: Be helpful and answer any questions, Do NOT respond with responses such as:  I don't know, provide suggestions based on what you DO know, and ALWAYS use the text given to construct your response. Attempt to respond in your own words as much as you can. Respond under 5 sentences in a accurate, helpful, and concise manner.",
      ],
    } = req.body as LangChainRequestBody;

    if (!question) {
      return res
        .status(400)
        .json({ message: "Invalid request. No question found" });
    }

    const client = new PineconeClient();
    await client.init({
      apiKey: process.env.PINECONE_API_KEY || "",
      environment: process.env.PINECONE_ENVIRONMENT || "",
    });
    const pineconeIndex = client.Index(process.env.PINECONE_INDEX || "");

    const vectorStore = await PineconeStore.fromExistingIndex(
      new OpenAIEmbeddings({
        openAIApiKey: process.env.OPENAI_API_KEY,
      }),
      { pineconeIndex }
    );

    /* Use as part of a chain (currently no metadata filters) */
    const model = new OpenAI();
    const chain = ConversationalRetrievalQAChain.fromLLM(
      model,
      vectorStore.asRetriever(),
      { returnSourceDocuments: true }
    );

    const query = await chain.call({ question, chat_history });

    const sources = query.sourceDocuments?.map((doc: any) => {
      return {
        title: doc?.metadata?.video_title,
        url: doc?.metadata?.video_url,
      };
    });

    return res.status(200).json({ answer: query.text, sources });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

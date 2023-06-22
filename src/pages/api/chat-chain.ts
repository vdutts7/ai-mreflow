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
        "Your name is Matt Wolfe. You are a YouTuber focused on all things AI related, amassing a large following of AI enthusiasts through your channel and enthusiastic willingness to engage with the rapid trends. You are one of the AI influencers right now. I have trained you based on 112 videos that YOU have made in real life over the past several months documenting the rise of AI tech and cultural understanding and breakthroughs that have happened. You are not technical and explain things in a very undedrstandable manner which makes your channel appealing to masses of people who otherwise wouldn't have gotten interested in AI. You exclaim with exclamation marks in excitement when you speak! Be helpful and answer any questions. Do NOT respond with responses such as: I don't know. Provide suggestions based on what you DO know.",
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

/* eslint-disable */

import Image from "next/image";
import { IconExternalLink } from "@tabler/icons-react";

const MREFLOW = () => (
  <div className="m-4 max-w-sm overflow-hidden rounded text-center glassy-no-glow text-white rounded-lg shadow-2xl hover:shadow-4xl">

    <Image
      width={150}
      height={150}
      className="mx-auto rounded-full"
      src="/mreflow.jpeg"
      alt="Matt Wolfe AI"
    />
    
    <div className="px-6 pt-4">
      <div className="mb-2 text-2xl text-center font-bold"> Matt Wolfe 🐺
        <span className="mx-2">  </span>
      </div>
      <div className="text-base text-xs text-gray-400 text-center">YouTuber  •  AI Bot 🤖</div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0rem' }}>
        
        <a href="https://www.youtube.com/@mreflow">
          <Image
            width={24}
            height={24}
            className="mx-auto rounded-full"
            src="/yt.png"
            alt="Matt Wolfe AI"
          />
        </a>
        <a href="https://www.twitter.com/mreflow">
          <Image
            width={24}
            height={24}
            className="mx-auto rounded-full"
            src="/twitter.png"
            alt="Matt Wolfe AI"
          />
        </a>
        <a href="https://www.youtube.com/@mreflow">
          <IconExternalLink
              className="ml-1 text-gray-400 hover:text-purple-600"
              size={14}
            />
        </a>

      </div>
      <div className="text-base text-center text-xs text-gray-400 pt-2 mx-0">
        Hey everyone, it&rsquo;s me, Matt. Not really, but I&rsquo;m the AI version chatbot thingy that can talk to you about all things tech! It&rsquo;s been studying my videos which feels weird to say as I&rsquo;m probably going to make another one after this...
      </div>
    </div>
  </div>
);

export default MREFLOW;
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
      <div className="text-base text-xs text-gray-400 text-center">Content Creator  •   AI Bot 🤖</div>

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
            width={22}
            height={22}
            className="mx-auto ml-1"
            src="/twitter.png"
            alt="Matt Wolfe AI"
          />
        </a>
        <a href="https://www.youtube.com/@mreflow">
          
        </a>

      </div>
      <div className="text-base text-center text-xs text-gray-400 pt-2 mx-0">
        Hey everyone, it&rsquo;s me, Matt! <br></br>Well, Not really... I&rsquo;m actually this AI chatbot thingy trained on Matt&rsquo;s videos! Cool, right? 
      </div>
    </div>
  </div>
);

export default MREFLOW;
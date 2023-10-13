/* eslint-disable */
import MREFLOW from "~/components/MREFLOW";
import Chat from "~/components/Chat";
import "react-toastify/dist/ReactToastify.css";
import { IconExternalLink } from "@tabler/icons-react";

const Home = () => {
  return (
    <div>
      <div className="mt-2 text-center text-xs text-gray-500">
        <i>
          Note: bot comments are not real and not associated with Matt Wolfe. This is fiction. Check out <a href="https://ai-mkbhd.vercel.app/" style={{opacity: 0.8 }} className="text-purple-500 hover:font-bold">MKBHD AI</a>
         </i>
      </div>
      <div className="mx-auto mt-2 flex w-full  max-w-7xl flex-col md:flex-row dark2-gradient">
        <div className="flex w-full md:ml-8 flex-row md:w-1/3 md:flex-col">
          <MREFLOW />
        </div>
        <div className="w-full md:w-6/3 mr-8">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Home;


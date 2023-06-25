/* eslint-disable */
import MREFLOW from "~/components/MREFLOW";
import Chat from "~/components/Chat";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <div>
      <div className="mt-2 text-center text-size-10 text-white">
        <i style={{ fontSize: '0.8em', opacity: 0.3 }}>
          Note: bot comments are not real and not associated with Matt Wolfe. This is fiction.
        </i>
      </div>
      <div className="mx-auto mt-2 flex w-full md:ml-16 max-w-7xl flex-col md:flex-row dark2-gradient">
        <div className="flex w-full md:ml-8 flex-row md:w-1/3 md:flex-col">
          <MREFLOW />
        </div>
        <div className="w-full md:w-6/3">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Home;


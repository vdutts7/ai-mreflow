import React from "react";

const Footer = () => {
  return (
    <div className="bottom-0 my-auto text-xs w-full fg1 p-6 text-white">
      <p className="text-center">
        Scripts, backend, UI made by 
        <span className="ml-1">
          <a
            href="https://twitter.com/vdutts7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:font-bold"
          >
            @vdutts7.
          </a>
        </span>
          Access full source code template
          <a href="https://github.com/vdutts7/youtube-gpt" target="_blank" rel="noopener noreferrer" className="text-purple-500 
          hover:font-bold"> here.</a>
      </p>
    </div>
  );
};
export default Footer;

import React from "react";

function Content(props) {
  return (
    <div
      className={`bg-black justify-between w-full flex h-[30rem] p-20 ${
        props.no % 2 === 0 ? " " : "flex-row-reverse"
      }`}
    >
      <div className=" w-1/2  flex flex-col justify-center items-center p-5 ">
        <h1 className="text-5xl font-bold">{props.heading}</h1>
        <p>{props.para}</p>
      </div>
      <div class="relative  mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
        <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white ">
          <video
            autoPlay
            loop
            muted
            className=" h-[140px] md:h-[300px] w-full rounded-xl"
          >
            <source src={props.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Content;

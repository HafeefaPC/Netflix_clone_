import React from "react";

function Hero() {
  return (
    <div className="text-white flex flex-col justify-center items-center gap-6">
      <p className="text-2xl r"> Welcome Back to Netflix</p>
      <h1 className="text-6xl font-bold">
        Unlimited movies, TV shows and more
      </h1>

      <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
        <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white ">
          <video
            autoPlay
            loop
            muted
            className=" h-[140px] md:h-[300px] w-full rounded-xl"
          >
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.         
          </video>
        </div>
      </div>
      <div class="relative mx-auto bg-gray-900  rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
        <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
      </div>
    </div>
  );
}

export default Hero;

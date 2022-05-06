import React from "react";
import { GrCaretNext,GrCaretPrevious } from "react-icons/gr";
import Graphcards from "./GraphCards/Graphcards";
import { useState } from "react";
import Barcharts from "./GraphCards/Barcharts/Barcharts";

export default function Main() {
  const [imgrender, setimgrender] = useState(1);
  const nxtclk = () => {
    if (imgrender < 3) {
      setimgrender(imgrender + 1);
    }
  };
  const prevclk = () => {
    if (imgrender > 1) {
      setimgrender(imgrender - 1);
    }
  };
  const data=[
    {
      heading:"Total Active Users",
      count:2.6,
      ActiveUserCount:18765,
      color:"rgb(115, 187, 153)",
    },
    {
      heading:"Total Installed",
      count:0.2,
      ActiveUserCount:4876,
      color:"rgb(148, 192, 239)",
    },
    {
      heading:"Total Downloads",
      count:-0.1,
      ActiveUserCount:18765,
      color:"rgb(206, 115, 88)",
    }
  ]
  return (
    <>
      <div className="flex gap-12 p-12">
        <div className="bg-green-200 flex justify-around items-center flex-col xl:flex-row w-full rounded-3xl lg:gap-12 xl:justify-around 2xl:right-12">
          <div className="flex flex-col gap-3 justify-center p-3 md:p-12 w-fit">
            <div className="text-xl md:text-3xl font-bold flex flex-col gap-2">
              <div>Welcome back,</div>
              <div>Minimal UI!</div>
            </div>
            <div className="text-gray-500 font-serif ms:text-2xl text-xl">
              <div>If you are going to use a passage of lorem ipsum,you</div>
              <div>need to be sure </div>
            </div>
            <div className="py-3">
              <button className="px-4 py-3 bg-green-600 font-sans font-semibold text-xl text-white rounded-lg">
                Go Now
              </button>
            </div>
          </div>
          <div className="relative flex md:right-12 xl:left-12 md:left-4 2xl:-left-20 left-0 scale-50 lg:scale-100 md:scale-75 md:">
            <div className="w-52 h-52 absolute -left-8 bg-green-300 rounded-full top-4"></div>
            <div className="w-60 h-60 rounded-full relative left-3 bg-green-300"></div>
            <div className="w-52 h-52 rounded-full bg-green-300 absolute left-28 top-4">
              <div className="absolute w-52 right-12 top-3">
                <img src="/MainImages/rg1024-Graphs.svg" alt="none" />
              </div>
              <div className="w-24 relative right-28">
                <img src="/MainImages/img1.svg" alt="none" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 rounded-2xl overflow-hidden relative hidden 2xl:block">
          <div>
            <img
              src="/MainImages/anime_girl_farmer_by_craytm_ddqgqty-fullview.jpg "
              alt="none"
              className="grayscale absolute -z-30 blur-sm"
            />
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between items-center w-full z-20 p-4">
              <div className="flex gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    imgrender === 1 ? "bg-blue-600" : "bg-blue-300"
                  }`}
                ></div>
                <div
                  className={`w-2 h-2 rounded-full ${
                    imgrender === 2 ? "bg-blue-600" : "bg-blue-300"
                  }`}
                ></div>
                <div
                  className={`w-2 h-2 rounded-full ${
                    imgrender === 3 ? "bg-blue-600" : "bg-blue-300"
                  }`}
                ></div>
              </div>
              <div className="flex gap-2">
                <div>
                  <button onClick={prevclk} disabled={imgrender === 1}>
                    <GrCaretPrevious color="white" />
                  </button>
                </div>
                <div>
                  <button onClick={nxtclk} disabled={imgrender === 3}>
                    <GrCaretNext color="white" />
                  </button>
                </div>
              </div>
            </div>
            <div className="pb-6 pl-4">
              <div className="text-lg font-serif font-semibold text-white">
                FEATURED APP
              </div>
              <div className="text-2xl text-white font-serif font-semibold">
                Disney Zombies 2
              </div>
              <div>
                <p className="text-xs text-white font-semibold">
                  Believing These 7 Myths About Event Keeps...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 gap-5 xl:gap-0 xl:justify-evenly justify-center">
        {data.map(({heading,count,ActiveUserCount,color})=>
          <div key={count+1}>
          <Graphcards Heading={heading} Change={count} TotalCount={ActiveUserCount} Color={color}/>
        </div>
        
        )}
      </div>
    </>
  );
}

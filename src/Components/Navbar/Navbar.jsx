// import { Input } from 'postcss';
import {React,useState} from "react";
import TextField from "@mui/material/TextField";
import CountUp from 'react-countup';

export default function Navbar({Profile}) {
  const [notify, setnotify] = useState(112);
  const [searchbox, setsearchbox] = useState(true);
  const [searchtext, setsearchtext] = useState("");
  const inputHandler = (e) => {
    setsearchtext(e.target.value);
  };
  const searchClickHandler=()=>{
      setsearchbox(false);
  }

  const inputBlurHandler = () => {
      if (searchtext.length === 0) setsearchbox(true);
  }
  return (
    <>
      <div>
        <div className="flex items-center justify-end xl:justify-between px-10 mt-4">
            {searchbox?<button onClick={searchClickHandler}>
            <img src="/Navbaricons/search.png" alt="none" className="h-12" />
            </button>:<div className="w-full md:w-3/4 xl:w-1/2">
                    <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    label="Search here"
                    onBlur={inputBlurHandler}
                    className="w-full xl:w-2/4"
                    />
                </div>
            }
            <div className="hidden xl:flex items-center gap-10">
              <button>
                <img src={Profile[0].flagicon} alt="none" className="h-16" />
              </button>
              <div>
                  <button>
                    <span className="flex relative">
                      <img
                        src="/Navbaricons/icons8-notification-50.png"
                        alt="none"
                        className="h-10"
                      />
                      <span className="w-7 h-7 text-xs text-center
                            flex items-center justify-center font-bold absolute -right-2 -top-2  rounded-full bg-red-500 text-white object-cover"
                      >
                          <CountUp end={notify>99? 99 : notify} duration={0.5} />
                          <span>{notify>99 && '+'}</span>
            
                      </span>
                  </span>
                  </button>
              </div>
              <button>
                <img src="/Navbaricons/friends.png" alt="none" className="w-12" />
              </button>
              <button>
                <div className=" object-cover rounded-full">
                  <img
                    src={Profile[0].img}
                    alt="none"
                    className="w-12 h-12 rounded-full"
                  />
                </div>
              </button>
            </div>
          </div>
      </div>
    </>
  );
}

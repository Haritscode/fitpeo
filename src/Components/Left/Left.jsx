import React from "react";
import { useState } from "react";
import { BiTachometer } from "react-icons/bi";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { AiOutlineCalendar,AiOutlineMail } from "react-icons/ai";
import { BsBank } from "react-icons/bs";
import {FaBlogger,FaUserAlt} from "react-icons/fa";
import {BsFillCartFill} from "react-icons/bs";
import Generallst from "./MenuItems/General/General";
import Managementlst from "./MenuItems/Management/Management";

const General = [
  {
    title: "App",
    icon: BiTachometer,
  },
  {
    title: "E-Commerce",
    icon: RiShoppingBag2Fill,
  },
  {
    title: "Analytics",
    icon: SiSimpleanalytics,
  },
  {
    title: "Banking",
    icon: BsBank,
  },
  {
    title: "Booking",
    icon: AiOutlineCalendar,
  },
];
const Management=[
  {
    title: "User1",
    icon: FaUserAlt
  },
  {
    title: "E-Commerce1",
    icon: BsFillCartFill
  },
  {
    title: "Blog1",
    icon: FaBlogger
  }

]
const app=[
  {
    title:"Mail",
    icon:AiOutlineMail
  }
]

export default function Left({Profile}) {
  const [btnclk, setbtnclk] = useState(true);
  const LeftExpandHandler = () => {
    if (btnclk) {
      setbtnclk(false);
    } else {
      setbtnclk(true);
    }
  };
  const [key, setkey] = useState("");
  const selectedbtn=(key)=>{
    setkey(key);
  }
  return (
    <>
      <div className="sm:auto md:w-auto flex flex-col gap-7 lg:w-1/3 xl:w-1/4">
        <div className="flex justify-between items-center px-7 pt-6">
          <img
            src="/Leftbtns/eagle-logo-design-free-logo/free-logobig.jpg"
            alt="none"
            className="w-8 h-8 md:w-20 md:h-20 rounded-full"
          />
          <div className="md:hidden">
            <button onClick={LeftExpandHandler}>
              {btnclk ? (
                <img
                  src="/Leftbtns/button.png"
                  alt="none"
                  className="w-6 h-6 rounded-full"
                />
              ) : (
                <img
                  src="/Leftbtns/rec.png"
                  alt="none"
                  className="w-6 h-6 rounded-full"
                />
              )}
            </button>
          </div>
        </div>
        <div className="flex gap-6 md:p-8 bg-light-gray m-8 rounded-xl p-2 itmes-center md:gap-10">
          <img src="/Navbaricons/wp6950537-yash-hd-wallpapers.jpg" alt="none" className="w-8 h-8 rounded-full md:w-20 md:h-20"/>
          <div className="flex flex-col md:gap-4">
            <h4 className="font-semibold  text-gray-500 text-xs md:text-2xl">Minimal UI</h4>
            <span className="text-light-gray-text font-normal md:text-xl">admin</span>
          </div>

        </div>

        <div className="flex flex-col">
          <div className="text-2xl md:text-4xl font-semibold pl-6 text-gray-600">
            GENERAL
          </div>
          <ul>
            {General.map(({title, icon}) =>
              <li key={title}>
                <Generallst title={title} Icon={icon} itemClickHandler={selectedbtn} Active={title===key}/>
              </li>
            )}
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="text-2xl md:text-4xl font-semibold pl-6 text-gray-600">
            MANAGEMENT
          </div>
          <ul>
            {Management.map(({title, icon}) =>
              <li key={title}>
                <Managementlst title={title} Icon={icon} itemClickHandler={selectedbtn} Active={title===key}/>
              </li>
            )}
          </ul>
        </div>
        <div>
        <div className="text-2xl md:text-4xl font-semibold pl-6 text-gray-600">
            App
          </div>
          <ul>
            {app.map(({title, icon}) =>
              <li key={title}>
                <Generallst title={title} Icon={icon} itemClickHandler={selectedbtn} Active={title===key}/>
              </li>
            )}
          </ul>
        </div>
        <div className="flex w-full justify-center xl:hidden">
          <button>
            <img src={Profile[0].flagicon} alt="none"  className="md:w-32"/>    {/* if user want to change its country*/}
          </button>
        </div>
      </div>
    </>
  );
}

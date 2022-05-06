import { useState, useEffect } from 'react';
import {useMedia} from 'react-use';
export default function General({title,Icon,itemClickHandler,Active}) { 
  const [text_color, settext_color] = useState("white");
  const [bg_color,setbg_color]=useState("white")
  const isWide = useMedia('(min-width: 700px)');

  useEffect(() => {
    if(Active)
    {
      settext_color("green-200")
      setbg_color("bg-lightgreenish")
    }
    else
    {
      settext_color("white")
      setbg_color("white")
    }
  }, [Active])
  return (
    <>
    <div className='flex'>
      <button className={`cursor-pointer p-4 md:p-12 pl-14 ${bg_color} w-full`} onClick={() => itemClickHandler(title)}>
            <div className='flex items-center gap-4 md:gap-16'>
              <Icon color={`${text_color==='green-200'?"green":"black"}`} size={isWide?"2.75rem":"1.25rem"}/>
                <div className={`font-normal text-xs md:text-2xl ${text_color==="green-200"?"text-green-500":"none"} `}>
                    {title}
                </div>
            </div>
  </button>
      <div className={`w-2 ${text_color==='green-200'?"bg-green-700":"none"}`}>
      </div>

    </div>
    </>
  )
}

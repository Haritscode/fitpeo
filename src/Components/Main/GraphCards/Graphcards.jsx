import React from 'react'
import {BsGraphUp,BsGraphDown} from 'react-icons/bs';
import { useState } from 'react';
import useInterval from '../../../utils/use-interval';
import Barcharts from './Barcharts/Barcharts';

export default function Graphcards({Heading,Change,TotalCount,Color}) {

    const [percent, setpercent] = useState(Change);
    const [totalcount,settotalcount]=useState(TotalCount);
    useInterval(()=> settotalcount(totalcount+1), 10000)
  return (
    <>
    <div className='border-4 flex gap-4 p-12 w-fit items-center'>
        <div className='flex flex-col gap-5'>
            <h3 className='text-2xl font-semibold'>{Heading}</h3>
            <div className='flex flex-col gap-5'>
                <div className='flex  gap-5'>
                    <div className={`w-7 h-7 rounded-md flex ${percent>=0?"bg-green-300":"bg-red-300"} items-center justify-center`}>{percent>=0?<BsGraphUp color='green'/>:<BsGraphDown color='red'/>}</div>
                    <div className='text-lg'>{percent>=0?`+${percent}%`:`${percent}%`}</div>
                </div>
                <h3 className='text-3xl font-bold'>
                    {
                        new Intl.NumberFormat('en-IN').format(totalcount)
                    }
                </h3>
            </div>
        </div>
        <div className=''>
            <div className='w-24'>
                <Barcharts Color={Color}/>
            </div>
        </div>
    </div>
    </>
  )
}

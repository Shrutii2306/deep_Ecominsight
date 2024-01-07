import React from 'react'
import command from '../images/command.png'
import mic from '../images/mic.png'

export default function SchedulePost({item}) {
  return (
    <>
        <div className="flex rounded-t-2xl px-10 py-2.5 bg-[#F2F2F3] text-xs font-bold justify-between">
        <div className="flex text-[#3f3f3f]">
        {item.title}
        </div>
        <div>
            <img src={mic} className="h-4 float-right"/>
        </div>
        </div>

        <div className="px-9 py-4">
        <div className="flex flex-col text-[#3f3f3f] py-2">
            <div className="flex justify-between">
                <div className="float-start text-xl">{item.head}</div>
                
            </div>
            
            <div className="font-extrabold text-2xl py-1.5">{item.headtitle}</div>
            <div className="text-xs text-[#3f3f3f]">
                <div className="py-3">{item.body}<br></br>{item.secondPara}</div>
                
                <div>
                    <img src={item.image} className="h-36 my-3"/>
                </div>
            </div>
        </div>
        <hr className=""/>
        <div className="flex flex-row max-w-52 justify-between py-2">
            <button className=" bg-[#F2F2F3] text-[0.7rem] font-semibold text-gray-500 py-2 px-3.5 rounded-xl hover:bg-[#d9d9da]">Reply</button>
            <button className=" bg-[#F2F2F3] text-[0.7rem] font-semibold text-gray-500 py-2 px-3.5 rounded-xl hover:bg-[#d9d9da]"> Forward</button>
            <button className=" bg-[#F2F2F3] text-[0.7rem] font-semibold text-gray-500 py-2 px-3.5 rounded-xl hover:bg-[#d9d9da]">Delete</button>
        </div>
        <div className="flex my-3">
            <img src={command} className="w-2 h-2 mx-1 my-0.5"/><a href='\' className="text-[#afabab] text-[0.6rem]">More actions</a>
        </div>
    </div>
    </>
  )
}

import React from 'react'
import map  from '../images/map.png'
import arrow from '../images/arrow.png'
import command from '../images/command.png'
import location from '../images/location.png'
import mic from '../images/mic.png'
import bullet from '../images/bullet.png'

export default function MapPost({item}) {
  return (
    <>
      <div className="flex rounded-t-2xl px-10 py-2.5 bg-[#F2F2F3] text-xs font-bold justify-between">
        <div className="flex text-[#3f3f3f]">
        <img src={location} className="w-4 mx-1 rounded-r-sm"/>{item.title}<img src={bullet} className="w-1 h-1 my-1.5 mx-1"/>
        <span className="text-gray-400">{item.subtitle}</span>
        </div>
        <div>
            <img src={mic} className="h-4 float-right"/>
        </div>
      </div>
      <div>
        <img src={map} />
        <div className="px-9 py-4">
        <div className="flex flex-col text-[#3f3f3f] py-2">
            <div className="flex justify-between">
                <div className="float-start text-xl">{item.head}</div>
                
            </div>
            
            <div className="font-extrabold text-2xl -my-1">{item.headtitle}</div>
            <div className="text-xs text-[#3f3f3f]">
                <div className="py-3">{item.body}</div>
                <div className="text-[0.66rem] text-gray-400 mb-2">{item.addr1}<br></br>{item.addr2}</div>
            </div>
        </div>
        <hr className=""/>
        <div className="flex flex-row justify-between py-2">
            <button className=" bg-[#F2F2F3] text-[0.7rem] font-semibold text-gray-500 py-2 px-3.5 rounded-xl flex-row hover:bg-[#d9d9da]">
              <div className="flex">
                  <img src={arrow} className="w-3 pt-0.5"/>
                  Get directions                
                </div> 
                <span className="text-[0.5rem] text-gray-400 ml-1 -mt-1">Requires your location</span>
              
              </button>
            <button className=" bg-[#F2F2F3] text-[0.7rem] font-semibold text-gray-500 py-2 px-3.5 rounded-xl hover:bg-[#d9d9da]">See details</button>
            <button className=" bg-[#F2F2F3] text-[0.7rem] font-semibold text-gray-500 py-2 px-3.5 rounded-xl hover:bg-[#d9d9da]">Find more cafes nearby</button>
        </div>
        <div className="flex my-3">
            <img src={command} className="w-2 h-2 mx-1 my-0.5"/><a href='\' className="text-[#afabab] text-[0.6rem]">More actions</a>
        </div>
    </div>
      </div>
    </>
  )
}

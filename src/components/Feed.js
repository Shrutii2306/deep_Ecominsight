import React from 'react'
import image from '../images/image.png'
import map  from '../images/map.png'
import MailPost from './MailPost'
import MapPost from './MapPost'
import SchedulePost from './SchedulePost'
export default function Feed() {

    const feedItems = [
        {
            id:1,
            type :"mail",
            title : "Coffee?",
            subtitle : "Mail from Marisa Lu",
            head : "Marisa Lu",
            headtitle : "Coffee?",
            time : "Just Now",
            body : "Hey Jason,",
            secondPara:"Was wondering if you'd be interested in meeting my team at Philz Coffee at 11 AM today. No pressure if you can't make it, although I think you guys would really get along!",
            from :"Marisa",

        },
        {
            id :2,
            type: "schedule",
            title: "See my availability: today",
            headtitle : "Available until 1 PM",
            body : "Would you like to create an event for",
            secondPara:"Coffee with Marisa at 11 AM?",
            image : image,


        },
        {
            id : 3,
            type: "map",
            title: "Philz Coffee",
            subtitle : "Location",
            image : map,
            headtitle:"Philz Coffee",
            body : "Custom-blended java in a casual setting",
            addr1: "20686 Steven Creek Blvd",
            addr2:"Cupertino CA 95014"

        }
    ]
  return (
    <div className=" px py-5 flex flex-row min-w-[53rem] max-w-[53rem] overflow-x-auto z-10 justify-between  ml-24">
   
        {feedItems.map((item,index) => (
            <div className="border bg-white max-w-[26rem] min-w-[26rem] h-fit
             mx-4 rounded-2xl" key={index}>
            {item.type=="mail" ?
            <MailPost item={item}/> 
            :
            
            <div>{item.type=="schedule"?
                <SchedulePost item={item}/>
            :
            <MapPost item={item}/>
            }</div>
            }
            </div>
        ))}
    </div>
  )
}

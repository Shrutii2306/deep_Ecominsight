import React, { useState } from 'react'
import plus from '../images/plus.png'
import mail from '../images/mail.png'
import messenger from '../images/messenger.png'
import twitter  from '../images/twitter.png'
import bullet from '../images/bullet.png'

export default function Sidebar() {

    const [activeItem, setActiveItem] = useState('');
    const onChangeItem = (id) => {
        setActiveItem(id);
    }
    const menuItems = [
        {
            id: 1,
            title : "New flow",
            detail : "",
            icon : plus
        },
        {
            id: 2,
            title : "Coffee",
            detail : "Marisa Lu",
            icon : mail
        },
        {
            id: 3,
            title : "Feedback",
            detail : "Lindsey Weiss",
            icon : mail
        },
        {
            id: 4,
            title : "Post-grad plans",
            detail : "Evelyn Ma",
            icon : mail
        },
        {
            id: 5,
            title : "Launch Plan",
            detail : "Dennis Jin",
            icon : mail
        },
        {
            id: 6,
            title : "Victoria Wang",
            detail : "",
            icon : messenger
        },
        {
            id: 7,
            title : "Advait Kalakkad",
            detail : "",
            icon : messenger
        },
        {
            id: 8,
            title : "Danny Trinh",
            detail : "",
            icon : twitter
            
        }

    ]
  return (
    <div className="flex flex-col text-xs justify-items-center justify-around my-10 text-[#3f3f3f]">
      
            {menuItems.map((item, index) => (
                <div 
                className={item.id==activeItem? "bg-slate-100 cursor-pointer bg-slate-100/40 rounded-xl p-3 flex w-[15rem] h-10 align-middle my-1": "opacity-40 cursor-pointer p-2 flex flex-row my-1 w-[15rem] " }
                key={index}
                onClick={()=>onChangeItem(item.id)}
                >
                    <div><img src={item.icon} className="w-3 mx-3 my-0.5"/></div>
                    <div className="font-bold">
                    {item.title}
                    </div>
                    <div >
                        {item.detail!="" ? <div className="flex w-max text-gray-400 font-bold"><img src={bullet} className="w-1 my-2 mx-1"/>{item.detail}</div>:null}
                    </div>
                </div>
            ))}
       
    </div>
  )
}

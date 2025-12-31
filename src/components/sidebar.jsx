// import React, { useState,useContext } from 'react'
// import './sidebar.css'
// import { assets } from '../assets/assets'
// import { Context } from '../context/context';

// const Sidebar = () => {

//     const [extend,setextend]= useState(false);
//     const {
//         input,
//         setinput,
//         prevprompt,
//         setprevprompt,
//         showresult,
//         setshowresult,
//         loading,
//         setloading,
//         resultdata,
//         setresultdata,
//         recent,
//         setrecent,
//         onSent,
//         newchat
//       } = useContext(Context);
    
//     const load= async (prompt)=>{
//         setrecent(prompt)
//         await onSent(prompt)
//             }




//   return (
//     <>
//     <div className="sidebar">
//       <div className="top">
//         <img className="menu" onClick={()=>{setextend((prev)=>!prev)}} src={assets.menu_icon} alt="menu" />
//             <div  onClick ={newchat}className="new-chat">
//                 <img className="plus" src={assets.plus_icon} alt="plus" />
//                { extend?<p>New Chat</p>:null}
//             </div>

            
//             {extend?<div className="recent" >
//                 <p className='recnet-title'>recent </p>
//             {    prevprompt.map((item,ind)=>{

//                 return(  <div onClick={()=>{load(item)}} className="recent-entry">
//                     <img src={assets.message_icon} alt="" />
//                     <p>{item.slice(0,18)} .......</p>
//                 </div>)

//             })}
               
//             </div>:null}
//         </div>
    

//         <div className="bottom">
//             <div className="bottom-item recent-entry">
//                 <img src={assets.question_icon} alt="" />
//                 { extend?<p>help</p>:null}
//             </div>
//             <div className="bottom-item recent-entry">
//                 <img src={assets.history_icon} alt="" />
//                 { extend?<p>activity</p>:null}
//             </div>
//             <div className="bottom-item recent-entry">
//                 <img src={assets.setting_icon} alt="" />
//                 { extend?<p>settings</p>:null}
//             </div>

//         </div>

//     </div>
    
//     </>
//   )
// }

// export default Sidebar;

import { useState, useContext } from "react";
import "./sidebar.css";
import { assets } from "../assets/assets";
import { Context } from "../context/context";

export default function Sidebar() {
  const [extend, setextend] = useState(false);
  const { prevprompt, onSent, newchat, setrecent } = useContext(Context);

  const load = async (prompt) => {
    setrecent(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="menu"
          onClick={() => setextend((p) => !p)}
        />

        <div className="new-chat" onClick={newchat}>
          <img src={assets.plus_icon} alt="" />
          {extend && <p>New Chat</p>}
        </div>

        {extend && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevprompt.map((item, i) => (
              <div key={i} className="recent-entry" onClick={() => load(item)}>
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extend && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extend && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extend && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
}



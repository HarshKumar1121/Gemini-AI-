// import React, { useContext } from 'react'
// import  "./main.css" ;
// import { assets } from '../assets/assets';
// import { Context } from '../context/context';

// const Main = () => {

//   const {
//     input,setinput,prevprompt,setprevprompt,showresult,setshowresult,loading,setloading,resultdata,setresultdata,recent,setrecent
// ,onSent}= useContext(Context)
//   return (
    
//     <div className='main'>
//       <div className="nav">
//         <p>gemini</p>
//         <img src={assets.user_icon} alt="" />
//       </div>
//       <div className="main-container">
//         {
//           !showresult?
//           <>
//         <div className="greet">
//           <p><span>Hello , Dev.</span></p>
//           <p>HOw can i help you today?</p>
//         </div>
//       <div className="cards">
//         <div className="card">
//           <p>suggest some beautiful palces for today?</p>
//           <img src={assets.compass_icon} alt="" />
//         </div>
//         <div className="card">
//           <p>suggest some beautiful palces for today?</p>
//           <img src={assets.bulb_icon} alt="" />
//         </div>
//         <div className="card">
//           <p>suggest some beautiful palces for today?</p>
//           <img src={assets.message_icon} alt="" />
//         </div>
//         <div className="card">
//           <p>suggest some beautiful palces for today?</p>
//           <img src={assets.code_icon} alt="" />
//         </div>
//       </div>
//       </>:
//       <div className="result">
//         <div className="result-title">
//           <img src={assets.user_icon} alt="/>
//           <p>{recent}</p>
//         </div>
//         <div className="result-data">
//           <img src={assets.gemini_icon} alt="/>
//           <p dangeroulsysethtml={}></p>
//         </div>
//       </div>
      
//       }

//     </div>
//     <div className="main-bottom">
//       <div className="search-box">
//         <input onChange={(e)=>{setinput(e.target.value)}} value={input} type="text" placeholder='enter a prompt here'></input>
//         <div className="">
//         <img src={assets.gallery_icon} alt="" />
//         <img src={assets.mic_icon} alt="" />
//         <img onClick={(e)=>{onSent()}} src={assets.send_icon} alt="" />
//         </div>
//       </div>
//       <p className='bottom-info'>
//         gemini may display inaccurtae info 

//       </p>


//     </div>
//     </div>
//   )
// }

// export default Main;



// import React, { useContext } from 'react'
// import "./main.css";
// import { assets } from '../assets/assets';
// import { Context } from '../context/context';

// const Main = () => {

//   const {
//     input,
//     setinput,
//     prevprompt,
//     setprevprompt,
//     showresult,
//     setshowresult,
//     loading,
//     setloading,
//     resultdata,
//     setresultdata,
//     recent,
//     setrecent,
//     onSent
//   } = useContext(Context);

//   return (
//     <div className='main'>
//       <div className="nav">
//         <p>gemini</p>
//         <img src={assets.user_icon} alt="" />
//       </div>

//       <div className="main-container">
//         {
//           !showresult ?
//           <>
//             <div className="greet">
//               <p><span>Hello , Dev.</span></p>
//               <p>How can i help you today?</p>
//             </div>

//             <div className="cards">
//               <div className="card">
//                 <p>suggest some beautiful places for today?</p>
//                 <img src={assets.compass_icon} alt="" />
//               </div>
//               <div className="card">
//                 <p>suggest some beautiful places for today?</p>
//                 <img src={assets.bulb_icon} alt="" />
//               </div>
//               <div className="card">
//                 <p>suggest some beautiful places for today?</p>
//                 <img src={assets.message_icon} alt="" />
//               </div>
//               <div className="card">
//                 <p>suggest some beautiful places for today?</p>
//                 <img src={assets.code_icon} alt="" />
//               </div>
//             </div>
//           </>
//           :
//           <div className="result">
//             <div className="result-title">
//               <img src={assets.user_icon} alt="" />
//               <p>{recent}</p>
//             </div>

//             <div className="result-data">
//               <img src={assets.gemini_icon} alt="" />
//               {loading ?
//               <div className="laoder">
//                 <hr></hr>
//                 <hr></hr>
//                 <hr></hr>
//               </div>
//               :<p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
//             }
              

//             </div>
//           </div>
//         }
//       </div>

//       <div className="main-bottom">
//         <div className="search-box">
//           <input
//             onChange={(e) => { setinput(e.target.value) }}
//             value={input}
//             type="text"
//             placeholder='enter a prompt here'
//           />

//           <div>
//             <img src={assets.gallery_icon} alt="" />
//             <img  src={assets.mic_icon} alt="" />
//             {input?
//             <img
//               onClick={() => { onSent() }}
//               src={assets.send_icon}
//               alt=""
//             />:null}
//           </div>
//         </div>

//         <p className='bottom-info'>
//           gemini may display inaccurate info
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Main;

import { useContext } from "react";
import "./main.css";
import { assets } from "../assets/assets";
import { Context } from "../context/context";

export default function Main() {
  const {
    input,
    setinput,
    showresult,
    loading,
    resultdata,
    recent,
    onSent,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showresult ? (
          <>
            <div className="greet">
              <p><span>Hello, Dev.</span></p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div className="card"><p>Suggest some beautiful places</p><img src={assets.compass_icon} alt="" /></div>
              <div className="card"><p>Give me creative ideas</p><img src={assets.bulb_icon} alt="" /></div>
              <div className="card"><p>Help me write a message</p><img src={assets.message_icon} alt="" /></div>
              <div className="card"><p>Help me with code</p><img src={assets.code_icon} alt="" /></div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recent}</p>
            </div>

            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader"><hr /><hr /><hr /></div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultdata }} />
              )}
            </div>
          </div>
        )}
      </div>

      <div className="main-bottom">
        <div className="search-box-container">
          <div className="search-box">
            <input
              value={input}
              onChange={(e) => setinput(e.target.value)}
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input && (
                <img src={assets.send_icon} alt="" onClick={() => onSent()} />
              )}
            </div>
          </div>
        </div>

        <p className="bottom-info">Gemini may display inaccurate info</p>
      </div>
    </div>
  );
}

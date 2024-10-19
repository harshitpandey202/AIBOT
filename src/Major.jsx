import "./Major.css"
import usericon from "./images/user_icon.png"
import compassicon from "./images/compass_icon.png"
import bulbicon from "./images/bulb_icon.png"
import message from "./images/message_icon.png"
import codeicon from "./images/code_icon.png"
import galleryicon from "./images/gallery_icon.png"
import micicon from "./images/mic_icon.png"
import sendicon from "./images/send_icon.png"
import geminiicon from "./images/gemini_icon.png"
import { useContext } from "react"
import { Context } from "./Context"



export default function Major(){


const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)


return (


<div className="Main">

    <div className="nav">
    <p>PROJECT </p>
    <img src={usericon} className=""></img>
    </div>

        <div className="main-container">


            {!showResult
            ?
            <>
             <div className="greet">
            <p><span>Hello, Harshit.</span></p>
            <p> How I can Help Use Today</p>
        </div>
          <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={compassicon} ></img>
            </div>
            <div className="card">
                <p>Brifly summarize this concept urban planning</p>
                <img src={bulbicon} ></img>
            </div>
            <div className="card">
                <p>Brainstorm team bounding activities for our work retreet</p>
                <img src={message} ></img>
            </div>
            <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={codeicon} ></img>
            </div>
          </div>
            </>
            :<div className="result">
                  <div className="result-title">
                    <img src={usericon}></img>
                    <p>{recentPrompt}</p>
                  </div>
                  <div className="result-data">
                    <img src={geminiicon}></img>

                    {loading
                    ?<div className="loader">
                    <hr />
                    <hr />
                    <hr />
                    </div>
                    : <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                   
                  </div>
            </div>
        }
       

<div className="Main-bottom">
    <div className="search-box">
        <input onChange={(e)=>setInput(e.target.value)} value={input}  type="text" placeholder="Enter a prompt here"/>
    
    <div>
    <img src={galleryicon} alt="" />
    <img src={micicon} alt="" />
    <img   onClick={()=>onSent()}   src={sendicon} alt="" />
    </div>
  </div>
  <p className="bottom-info">Gemini may inaccurable info, Including about people, so double-check its reponse. Your privacy and Gemini Apps</p>
  </div>
 </div>
</div>


)



}
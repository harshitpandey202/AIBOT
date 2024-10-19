import "./Sidebar.css"
import menu from "./images/menu_icon.png"
import plusicon from "./images/plus_icon.png"
import messageicon from './images/message_icon.png'
import questionicon from "./images/question_icon.png"
import historyicon from "./images/history_icon.png"
import settingicon from "./images/setting_icon.png"
import { useState } from "react"





export default function Sidebar(){

const [extended,setExtended] = useState(false)



return(

<div className="Sidebar">

<div className="top">
<img onClick={()=>setExtended(prev=>!prev)}      src={menu} className="menu"></img>
<div className="new-chat">
    <img src={plusicon} className="plusicon"></img>
    {extended? <p>New Chat</p> :null}
</div>
{extended?
    <div className="recent">
    <p className="recent-title">Recent</p>
    <div className="recent-entry">
      <img src={messageicon} className="messageicon"></img>
      <p>What is react...</p>
    </div></div>:null


}


</div>


<div className="bottom">

<div className="bottom-item recent-entry">
<img src={questionicon} className="questionicon"></img>
{extended?<p>Help</p>:null}
</div>
<div className="bottom-item recent-entry">
<img src={historyicon} className="historyicon"></img>
{extended?<p>Activity</p>:null}
</div>

<div className="bottom-item recent-entry">
<img src={settingicon} className="settingicon"></img>
{extended?<p>Setting</p>:null}
</div>

</div>




</div>

)}
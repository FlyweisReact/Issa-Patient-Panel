import React from 'react'
import chatting1 from "../img/chatting1.png";
import moment from 'moment/moment';
import {auth} from '../firebase'
import {useAuthState} from "react-firebase-hooks/auth"

function Message({sender ,message,time,profilePicture}) {
    const [user]=useAuthState(auth)
  return (
    <>
    {
        user && <div className={sender===user?.displayName?"chattingdiv":"chattingdiv1"}>

        <img src={profilePicture?profilePicture:chatting1} alt="User" />
        
        <p>{sender.slice(0,8)}</p>
        
        <span style={{paddingLeft:"10px",fontSize:"14px"}}>{message}</span>
        <p >{moment(time).format("LT")}</p>
      </div>
    }

    

            </>
  )

}

export default Message
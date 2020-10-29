import { Avatar } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import './SidebarChat.css'
import db from './firebase';
function SidebarChat({id,name,addnewchat}) {
    const [seed,setSeed]=useState('');
    const [message,setMessage]=useState('')
  useEffect(()=>{
      if(id){
          db.collection('rooms').doc(id).collection('messages').orderBy('timestamps','desc').onSnapshot(snapshot=>(
            setMessage(snapshot.docs.map((doc)=>
            doc.data()))
          ))
      }

  },[id])
    useEffect(() => {
       setSeed(Math.floor(Math.random()*5000))
    }, [])
    const createChat=()=>{
       const roomName=prompt("Please enter name for chat");
       if(roomName){
      db.collection('rooms').add({
          name:roomName
      })
       }
    }
    return !addnewchat ? (
        <Link to={`/rooms/${id}`}>
  <div className="sidebarchat">
             <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
             <div className='sidebarchat_info'>
    <h2>{name}</h2>
    <p>{message[0]?.message}</p>
             </div>
        </div>
        </Link>
      ):(
            <div className="sidebarChat" onClick={createChat}><h2>
                Add new Chat</h2></div>
        )
    
}

export default SidebarChat;

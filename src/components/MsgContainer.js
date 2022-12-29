import  {useEffect, useState} from 'react';
import './msgcontainer.css';

const MsgContainer = ({currentlyChattingWith, messageList, loggedInUserId}) =>{
  const [messages, setMessages] = useState([])
    useEffect(()=>{
        const {id} = currentlyChattingWith;
        
        
        const userMessages = messageList.filter((item, index) => 
            (item.from === id && item.to === loggedInUserId)||(item.from === loggedInUserId && item.to === id))
    
        setMessages(userMessages) 
        

    }, [currentlyChattingWith, messageList] )
   
    return(
        <div id="msgArea">
            {messages.map((item,index) =>
                (
                    <div className="chatMsg" key = {index}>
                                            
                        {/* <div key = {items.id}> */}
                            <p  className={item.from === loggedInUserId ? "sentMsg" : "receivedMsg"}> {item.message} </p>
                        {/* </div> */}
                            
                    </div>
                )
            )}
        </div>
    )
}
export default MsgContainer;

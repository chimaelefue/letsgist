import { useState } from 'react';
import './input.css';

const Input = ({isContactDetailsShown, setMessageList, currentlyChattingWith, loggedInUserId, setUserLastMessage, newMessage, setNewMessage}) =>{
   
   
    
    // setState(value)
    // setState((state) => value)         where
    // setState((state) => [...state, value])   

    
    const handleSubmit = (e) => {
        e.preventDefault()
       const message = {
        from: loggedInUserId,
        to: currentlyChattingWith.id,
        message: newMessage
       }
        setMessageList((messageList) => [...messageList, message])
   
        setNewMessage("");

        setUserLastMessage(message);
      
                                                                                                  
                    
    }
    
    return (
        <form 
        className="inputMsg"
        onSubmit= {(e)=>(
            handleSubmit(e)
        ) }
        >
            <input 
                type="text"  id="userInput" 
                placeholder="Type a message"
                value = {newMessage} 
                onChange = {(e) => (
                    setNewMessage(e.target.value)
                   
                )
                }
            />
            <button type="submit" className= {isContactDetailsShown ? "btnShow" : "btn"} >
                <img 
                src="/right-arrow.png" 
                alt="right-arrow"
                /> 
            </button>
        </form>
    )
}
export default Input;
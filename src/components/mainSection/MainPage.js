import { useState } from 'react';
import './mainPage.css'
import ContactDetails from '../sectionB/ContactDetails';
import ChatArea from './ChatArea';

const MainPage = ({messageList, setMessageList, loggedInUserId, currentlyChattingWith, setUserLastMessage, newMessage, setNewMessage}) =>{

 const [isContactDetailsShown, setIsContactDetailsShown] = useState(false)
    
return(
        <div className="containerMainPage">
           
           <ChatArea 
           currentlyChattingWith = {currentlyChattingWith}
            setIsContactDetailsShown = {setIsContactDetailsShown} 
            isContactDetailsShown= {isContactDetailsShown}
            messageList = {messageList} 
            setMessageList = {setMessageList}
            loggedInUserId = {loggedInUserId}
            setUserLastMessage = {setUserLastMessage}
            newMessage = {newMessage}
            setNewMessage = {setNewMessage}
            /> 

           {isContactDetailsShown 
            &&
            
            <ContactDetails 
            currentlyChattingWith = {currentlyChattingWith}
            setIsContactDetailsShown = {setIsContactDetailsShown}
            />
         }                                                                                 
                 
        </div>
    )
}
export default MainPage;
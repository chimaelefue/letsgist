import MsgContainer from '../MsgContainer';
import Input from '../Input';
import NavBar from '../NavBar';
import './chatarea.css';

const ChatArea = ({currentlyChattingWith, setIsContactDetailsShown, isContactDetailsShown, 
    messageList, setMessageList, loggedInUserId, setUserLastMessage, newMessage, setNewMessage}) =>{
    return(
        <div className= "mainPage">
        <NavBar 
        currentlyChattingWith = {currentlyChattingWith}
        setIsContactDetailsShown= {setIsContactDetailsShown}
        />
        <MsgContainer 
        currentlyChattingWith = {currentlyChattingWith}
        messageList = {messageList} 
        loggedInUserId = {loggedInUserId}
       
       
        
        />
        <Input 
        currentlyChattingWith = {currentlyChattingWith}
        isContactDetailsShown = {isContactDetailsShown}
        newMessage = {newMessage}
        setNewMessage = {setNewMessage}
        setMessageList = {setMessageList}
        loggedInUserId = {loggedInUserId}
        setUserLastMessage = {setUserLastMessage}
        />
        </div>
    )
}
export default ChatArea;

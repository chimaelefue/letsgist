
import DefaultPage from "../mainSection/DefaultPage";
import MainPage from "../mainSection/MainPage";
import './sectionB.css'



const SectionB = ({ currentlyChattingWith, messageList, setMessageList, loggedInUserId, setUserLastMessage, newMessage, setNewMessage}) =>{

   
    

    return(
        <div className ="containerSectionB">
            {currentlyChattingWith 
                ? 
                <MainPage 
                currentlyChattingWith = {currentlyChattingWith}
                
                messageList = {messageList} 
                setMessageList = {setMessageList}
                loggedInUserId = {loggedInUserId}
                setUserLastMessage = {setUserLastMessage}
                newMessage = {newMessage}
                setNewMessage = {setNewMessage}
                />
                :
                <DefaultPage />
                
            }
                                  
        </div>
    )
}
export default SectionB;
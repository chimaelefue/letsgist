import { useState} from 'react';
import './App.css';
import SideBar from './components/layout/SideBar';
import SectionB from './components/sectionB/SectionB';
import { myContact } from './dataset/contacts';
import {myMessages} from './dataset/messages';


function App() {
  const [contactList, setContactList] = useState(myContact)
  const [currentlyChattingWith, setCurrentlyChattingWith] = useState(null)
  const [messageList, setMessageList] = useState(myMessages)
  const [newMessage, setNewMessage] = useState("")
  
  const loggedInUserId = 0; 

  const setUserLastMessage = (newMessage) => {
    const clonedContactList = [...contactList];
    const index = clonedContactList.findIndex(item => item.id === currentlyChattingWith.id)
    clonedContactList[index].lastSentMsg = newMessage.message
    setContactList(clonedContactList)
   
  }
  
  // pseudocode
 // create a function called - setUserLastMessage( newMessage) {
  // clone contactList = const clonedContactList = [...contactList];
  // findIndex the contact where clonedContactList.id = currentlyChattingWith.id
  // set the found clonedContactList[index].lastMessage = newMessage.message
  // update contactList; setContactList(clonedContactList)
//  }

  return (
    <div className="parentContainer">
      
      <SideBar 
      contacts = {contactList}
      setContacts = {setContactList}
      setCurrentlyChattingWith = {setCurrentlyChattingWith}
      currentlyChattingWith = {currentlyChattingWith}
      
      
      />
      <SectionB
      
      currentlyChattingWith = {currentlyChattingWith}
     
      messageList = {messageList}
      setMessageList = {setMessageList}
      loggedInUserId = {loggedInUserId}
      setUserLastMessage = {setUserLastMessage}
      newMessage = {newMessage}
      setNewMessage = {setNewMessage}
      />
        
            
    </div>
  );
}


export default App;


import './sidebar.css';


const SideBar =  ({contacts, setCurrentlyChattingWith}) => {
   
           
    return ( 
        <aside className= "container">

            <div className="avatar"> 
                <div className="avatarImg"> 
                    <img 
                        src = "/chima.jpg"
                        alt = "chima"
                    />
                </div>
                <div className="avatarName">
                    <h3>
                        CHIMA
                    </h3>

                </div>
            </div>

            <div className="contactList">
                {contacts.length > 0 ? 
                    <>
                        { contacts.map((item) =>
                            (
                                <div 
                                className="contact" 
                                key= {item.id} 
                                onClick={()=>{
                                    setCurrentlyChattingWith(item);
                                   
                                }}
                                >
                                    <div className="img">
                                        <img 
                                        src={item.image}
                                        alt={item.name}
                                        />
                                    </div>
                                    <div 
                                    className="contactText"
                                    
                                    >
                                        <h3>{item.name} </h3>
                                        <p>{item.lastSentMsg}</p>
                                    </div>
                                </div>
                            ) 
                         
                            
                        )}
                    </>
                    :
                      <h2>No Contact</h2>
                }
                
                
            </div>

        </aside>
    )
}
export default SideBar;

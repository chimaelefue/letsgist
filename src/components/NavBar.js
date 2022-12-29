import './navbar.css';


const NavBar = ({currentlyChattingWith, setIsContactDetailsShown}) => {
    
    return(
        <nav className="chatBar">
                <>
                    <div className="backArrow">
                        <button
                         className="backBtn"
                         
                        >
                           
                        </button>
                    </div>
                    
                    <div 
                    className="contactInfo"
                    onClick={()=>{
                        setIsContactDetailsShown(true);
                        
                    }}
                    >
                        
                        <div className="img">
                            <img 
                            src={currentlyChattingWith.image}
                            alt={currentlyChattingWith.name}
                            />
                        </div>
                        <div>
                            <p className="contactName">
                                {currentlyChattingWith.name}
                            </p>
                        </div>

                    </div>
                </>

                <ul id="chatOptions">
                    
                    <li>
                        <img 
                        src="/call.png"
                        alt="call"
                        />
                    </li>
                    <li>
                    <img 
                        src="/dots.png"
                        alt="dots"
                        />
                    </li>
                </ul>
            </nav>
    )
}

export default NavBar;
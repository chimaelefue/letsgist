import './contactdetails.css';

const ContactDetails = ({currentlyChattingWith, setIsContactDetailsShown}) => {
    
    return (
        <div className="contactDetails">
            <>
                <button 
                className="closeBtn"
                onClick={()=>{
                    setIsContactDetailsShown(false);
                    
                }}
                >
                    <img 
                    src="/close.png"
                    alt="close"
                    />
                </button>
            </>
            <>
                <div className="infoBar">
                    <div className="detailsImg">
                        <img 
                        src={currentlyChattingWith.image} 
                        alt={currentlyChattingWith.name} 
                        />
                    </div>
    
                    <div className="detailsText">
                        <h3 className="userName"> {currentlyChattingWith.name}</h3>
                        <p className="userNumber">{currentlyChattingWith.pNumber}</p>
                    </div>
                </div>
            </>
        </div>
    )
}
export default ContactDetails;
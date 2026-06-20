import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";


const ShareButtons = ({postUrl, postTitle}: {postUrl: string, postTitle: string}) => {
const icon_size = 24;
    
    return (        
        <div className="share-buttons flex flex-row items-center justify-center gap-2">                     
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`} target="_blank" rel="noopener noreferrer" className="share-button" aria-label="Compartir en Facebook">
                <FaFacebookSquare size={icon_size}/>
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${postUrl}&text=${postTitle}`} target="_blank" rel="noopener noreferrer" className="share-button" aria-label="Compartir en X">
                <FaSquareXTwitter size={icon_size}/>
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}`} target="_blank" rel="noopener noreferrer" className="share-button" aria-label="Compartir en LinkedIn">
                <FaLinkedin size={icon_size}/>
            </a>
            <a href={`https://wa.me/?text=${postTitle} ${postUrl}`} target="_blank" rel="noopener noreferrer" className="share-button" aria-label="Compartir en WhatsApp">
                <FaWhatsappSquare size={icon_size}/>
            </a>
        </div>
        
    );
 
}

export default ShareButtons;
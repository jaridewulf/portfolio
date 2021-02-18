import behance from'../assets/behance.svg';
import github from'../assets/github.svg';
import linkedin from'../assets/linkedin.svg';

const Socials = () => {
    return ( 
        <span className="socials">
            <a className="social-link" href="https://www.behance.net/jaridewulf" target="_blank" rel="noreferrer noopener">
                <img className="social-link-image" src={behance}width="60" height="60" alt="Jari De Wulf - Behance Design Portfolio" /></a>
            <a className="social-link" href="https://github.com/JariDevine" target="_blank" rel="noreferrer noopener">
                <img className="social-link-image" src={github}width="60" height="60" alt="Jari De Wulf - Github Developer Repository" /></a>
            <a className="social-link" href="https://www.linkedin.com/in/jaridewulf/" target="_blank" rel="noreferrer noopener">
                <img className="social-link-image" src={linkedin}width="60" height="60" alt="Jari De Wulf - Front-End Developer Linkedin Profile"/></a>
        </span>
     );
}
 
export default Socials;
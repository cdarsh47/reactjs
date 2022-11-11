import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import fb from '../images/facebook.png';
import spotify from '../images/spotify.png';

export default function Footer(){
    return(
        <div className="footer-section">
            <ul>
                <li className="twit"><a href="#"><img src={twitter} alt="Twitter"/></a></li>
                <li className="fb"><a href="#"><img src={linkedin} alt="Linkedin"/></a></li>
                <li className="insta"><a href="#"><img src={fb} alt="fb"/></a></li>
                <li className="spotify"><a href="#"><img src={spotify} alt="Spotify"/></a></li>
            </ul>
        </div>
    )
}
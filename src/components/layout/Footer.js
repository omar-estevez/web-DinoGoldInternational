import '../styles/Footer.scss';
import image_footer from '../assets/images/Car_hold.jpg';
import { useNavigate } from "react-router-dom";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";

const Footer = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");

        window.location.href = "/";
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <footer>
                <div className='image'>
                    <img src={image_footer} alt='Dino Gold International'></img>
                </div>
                <div className='menu'>
                    <h3>Doormat Navigation</h3>
                    <ul>
                        <li><h4 onClick={() => goToHome()}>Home</h4></li>
                        <li><h4 onClick={() => scrollToSection('about')}>About</h4></li>
                        <li><h4 onClick={() => scrollToSection('services')}>Prices</h4></li>
                        <li><h4 onClick={() => scrollToSection('contact')}>Contact</h4></li>
                    </ul>
                </div>
                <div className='social'>
                    <h3>Social Media</h3>
                    <ul className='social-media'>
                        <li>
                            <TiSocialFacebook className='icon'/>
                        </li>
                        <li>
                            <TiSocialLinkedin className='icon'/>
                        </li>
                        <li>
                            <TiSocialGithub className='icon'/>
                        </li>
                    </ul>
                </div>
            </footer>
            <div className='copyright'>
                <h5>copyright</h5>
            </div>
        </>
    )
}

export default Footer;
import '../styles/Footer.scss';
import image_footer from '../assets/images/van.png';
import { useNavigate } from "react-router-dom";
import { GrInstagram, GrFacebookOption } from "react-icons/gr";
import Counter from '../pages/Counter';

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

    const handleIconClick = (type) => {
        let url = '(https://www.dinogoldinternational.com)';

        switch (type) {
            case 'Facebook':
                url = 'https://www.facebook.com/dinogoldinternational/';
                window.open(url, '_blank');
                break;
            case 'Instagram':
                url = 'https://www.instagram.com/dgi_detailing/';
                window.open(url, '_blank');
                break;
            default:
                break;
        }
    };

    return (
        <>
            <footer>
                <div className='image'>
                    <img src={image_footer} alt='Dino Gold International'></img>
                </div>
                <div className='menu'>
                    <h3>QUICK LINKS</h3>
                    <ul>
                        <li><p onClick={() => goToHome()}>Home</p></li>
                        <li><p onClick={() => scrollToSection('about')}>About</p></li>
                        <li><p onClick={() => scrollToSection('services')}>Services</p></li>
                        <li><p onClick={() => scrollToSection('pricing')}>Pricing</p></li>
                        <li><p onClick={() => scrollToSection('contact')}>Book</p></li>
                    </ul>
                </div>
                <div className='social'>
                    <h3>DGI Detailing</h3>
                    <p>Mobile Car Wash in Houston, TX</p>
                    <h3>Contact</h3>
                    <p>
                        📞 (832) XXX-XXXX
                        📍 Houston, TX
                        💬 Text us to book
                    </p>
                    <h3>Social Media</h3>
                    <ul className='social-media'>
                        <li>
                            <GrFacebookOption className='icon' onClick={() => handleIconClick('Facebook')} />
                        </li>
                        <li>
                            <GrInstagram className='icon' onClick={() => handleIconClick('Instagram')} />
                        </li>
                        {/* <li>
                            <TiSocialGithub className='icon'/>
                        </li> */}
                        <li style={{ display: 'none' }}>
                            <Counter />
                        </li>
                    </ul>

                </div>
            </footer>
            <div className='copyright'>
                <h5>© 2024 DGI Detailing. All Rights Reserved. </h5>
            </div>
        </>
    )
}

export default Footer;
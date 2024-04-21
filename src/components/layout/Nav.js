import '../styles/Nav.scss';
import imageLogo from '../assets/images/Logo_Dino.png';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Nav = () => {

    const navigate = useNavigate();

    const isDesktop = useMediaQuery({ minWidth: 1007 });
    const [scrolled, setScrolled] = useState(false);
    const [isElementVisible, setIsElementVisible] = useState(false);

    const handleMenuClick = () => {
        setIsElementVisible(!isElementVisible);
    };

    const handleScroll = () => {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
        if (scrollPosition > 40) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const goToHome = () => {
        navigate("/");

        window.location.href = "/";
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            handleMenuClick();
        }
    };

    return (
        <>
            <nav className={`nav-container ${scrolled ? 'scrolled' : ''} ${isElementVisible ? 'nav-visible' : ''}`}>
                {!isDesktop && (<div className='logo'>
                    <img src={imageLogo} alt='Logo' />
                </div>)}
                <ul className={`${isElementVisible ? 'visible' : ''}`}>
                    <li><h4 onClick={() => goToHome()}>Home</h4></li>
                    <li><h4 onClick={() => scrollToSection('about')}>About</h4></li>
                    {isDesktop && (<li><img src={imageLogo} alt='Logo' /></li>)}
                    <li><h4 onClick={() => scrollToSection('services')}>Prices</h4></li>
                    <li><h4 onClick={() => scrollToSection('contact')}>Contact</h4></li>
                </ul>
                {!isDesktop && (<TiThMenu className={`icon-menu ${isElementVisible ? 'visible' : ''}`} onClick={handleMenuClick} />)}
                {!isDesktop && (<IoClose className={`icon-menu ${!isElementVisible ? 'visible' : ''}`} onClick={handleMenuClick} />)}
            </nav>
        </>
    )
}

export default Nav;
import '../styles/CallToAction.scss';
import video from '../assets/videos/washing_car_gen.mp4';

const CallToAction = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className='parallax'>
                <div className="parallax-video">
                    <video className="background-video" autoPlay loop muted playsinline>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="background"></div>
                <div className="parallax-content">
                    <h1>Premium Mobile Car Wash in Houston</h1>
                    <p><b>We bring professional car wash service directly to your home or office in Houston</b>
                        <br />✔ Mobile Service
                        <br />✔ Houston Area
                        <br />✔ Professional Equipment
                    </p>
                    <button onClick={() => scrollToSection('pricing')}>BOOK YOUR WASH</button>
                </div>
            </section>
        </>
    )
}

export default CallToAction;
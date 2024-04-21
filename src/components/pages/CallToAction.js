import '../styles/CallToAction.scss';
import video from '../assets/videos/washing_car.mp4';

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
                    <video className="background-video" autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="background"></div>
                <div className="parallax-content">
                    <h1>Welcome to Dino Gold International!</h1>
                    <p><b>“While you rest, we work!”</b> Leave your car in our capable hands, and we’ll make it shine while you relax.</p>
                    <button onClick={() => scrollToSection('services')}>Book Services</button>
                </div>
            </section>
        </>
    )
}

export default CallToAction;
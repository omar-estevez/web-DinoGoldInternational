import '../styles/About.scss';
import image_customer from '../assets/images/setup-equip.png';
import image_entusiast from '../assets/images/about_cars.png';

const About = () => {

    return (
        <>
            <section className='about' id='about'>
                <h2>Our Story</h2>
                <div className='content'>
                    <div className='col1'>
                        <img src={image_entusiast} alt='Car Entusiast DGI' loading="lazy" />
                        <p>We bring professional equipment and high-quality products directly to your home or office so your vehicle gets the care it deserves
                        </p>
                    </div>
                    <div className='col2'>
                        <p>DGI Detailing was created with a simple mission: <br />
                            to provide professional mobile car wash services in Houston that are convenient, reliable, and affordable.</p>
                        <img src={image_customer} alt='Car customer DGI' loading="lazy" />
                    </div>
                </div>

                <p className='phrase'><b>“Driven by Excellence, Defined by Detail.”</b></p>
            </section>
        </>
    )
}

export default About;
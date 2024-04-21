import '../styles/About.scss';
import image_customer from '../assets/images/customer_satisfaction.jpg';
import image_entusiast from '../assets/images/Car_entuasiast.jpg';

const About = () => {

    return (
        <>
            <section className='about' id='about'>
                <h2>Our Story</h2>
                <div className='content'>
                    <div className='col1'>
                        <img src={image_entusiast} alt='Car Entusiast DGI' />
                        <p>We believe in meticulous attention to detail and customer satisfaction</p>
                    </div>
                    <div className='col2'>
                        <p>Founded by car enthusiasts, Dino Gold International combines passion with expertise</p>
                        <img src={image_customer} alt='Car customer DGI' />
                    </div>
                </div>

                <p className='phrase'><b>“Driven by Excellence, Defined by Detail.”</b></p>
            </section>
        </>
    )
}

export default About;
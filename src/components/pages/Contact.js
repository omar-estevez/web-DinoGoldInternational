import '../styles/Contact.scss';
import Form from './Form';

const Contact = () => {

    return (
        <>
            <section className='contact' id='contact'>
                <h2>Get in Touch</h2>
                <div className='content'>
                    <div className='image-container'>
                    </div>
                    <div className='form-container'>
                        <Form/>
                    </div>
                </div>

                <p className='phrase'><b>“Let’s Make Your Car Shine!”</b></p>
            </section>
        </>
    )
}

export default Contact;
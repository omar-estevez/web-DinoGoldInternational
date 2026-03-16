import { ButtonSms } from '../shared/ButtonSms';
import '../styles/Contact.scss';

const Contact = () => {

    // const [response, setResponse] = useState(false);
    // const [formData, setFormData] = useState(null)

    return (
        <>
            <section className='contact' id='contact'>
                <h2>MOBILE CAR WASH IN HOUSTON</h2>
                <div className='content'>
                    <div className='image-container'>
                    </div>
                    {/* <div className='form-container'>
                        {!response && <Form setResponse={setResponse} setFormData={setFormData} />}
                        {response && <ResponseForm formData={formData} />}
                    </div> */}
                    <div className='text-container'>
                        <p><b>Get your car cleaned without leaving home.
                            <br />
                            We come to you anywhere in Houston.</b></p>
                        <ButtonSms text='💬 TEXT US TO BOOK' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
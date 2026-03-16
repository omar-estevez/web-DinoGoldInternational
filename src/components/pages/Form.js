import '../styles/Form.scss';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = ({ setResponse, setFormData }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState('');
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [type_vehicle, setTypeVehicle] = useState("");
    const [type_wash, setTypeWash] = useState("");
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        address: '',
        date: '',
        time: '',
        type_vehicle: '',
        type_wash: ''
    });

    const getIsFormValid = () => {
        return name && email && phone && address && date && time && type_vehicle && type_wash;
    };

    const clearForm = () => {
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setDate("");
        setTime("");
        setTypeVehicle("");
        setTypeWash("");
        setFormErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!name) errors.name = 'Name is required.';
        if (!email) errors.email = 'Email is required.';
        if (!phone) errors.phone = 'Phone is required.';
        if (!address) errors.address = 'Address is required.';
        if (!date) errors.date = 'Date is required.';
        if (!time) errors.time = 'Time is required.';
        if (!type_vehicle) errors.type_vehicle = 'Type of vehicle is required.';
        if (!type_wash) errors.type_wash = 'Type of wash is required.';

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            // Handle form submission logic here
            const formData = createObject(e.target.elements);
            setFormData(formData);
            setResponse(true);

            emailjs.sendForm('service_qqhu0zh', 'template_pz0o6al', e.target, 'nCZ-51fZ_wAd3vvg0')
                .then((result) => {
                    console.log('Email sent successfully:', result.text);
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                });

            clearForm();
        }
    };

    const createObject = (data) => {
        return {
            'Name': data['name']['value'],
            'Email': data['email']['value'],
            'Phone': data['phone']['value'],
            'Address': data['address']['value'],
            'Date': data['res-date']['value'],
            'Time': data['res-time']['value'],
            'Type_Vehicle': type_vehicle,
            'Type_Wash': type_wash
        }
    }

    return (
        <>
            <div className='form'>
                <h3>Booking Form</h3>
                <form className="form-container" onSubmit={handleSubmit}>
                    <fieldset>
                        <div className='Field'>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name='user_name' aria-label="On Click" value={name} onChange={(e) => setName(e.target.value)} required />
                            {formErrors.name && <span className="error">{formErrors.name}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name='user_email' aria-label="On Click" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            {formErrors.email && <span className="error">{formErrors.email}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="phone">Phone</label>
                            <input type="text" id="phone" name='user_phone' aria-label="On Click" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                            {formErrors.phone && <span className="error">{formErrors.phone}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" name='user_address' aria-label="On Click" value={address} onChange={(e) => setAddress(e.target.value)} required />
                            {formErrors.address && <span className="error">{formErrors.address}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="res-date">Choose date</label>
                            <input type="date" id="res-date" name='user_date' aria-label="On Click" value={date} onChange={(e) => setDate(e.target.value)} required />
                            {formErrors.date && <span className="error">{formErrors.date}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="res-time">Choose an hour <br /> <small>Office hours are 8am to 5pm</small></label>
                            <input type="time" id="res-time" name='user_time' aria-label="On Click" min="08:00" max="17:00" value={time} onChange={(e) => setTime(e.target.value)} required />
                            {formErrors.time && <span className="error">{formErrors.time}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="type_vehicle">Type of vehicle</label>
                            <select id="type_vehicle" name='user_vehicle' aria-label="On Click" value={type_vehicle} onChange={(e) => setTypeVehicle(e.target.value)} required>
                                <option></option>
                                <option>Bike</option>
                                <option>2 Door</option>
                                <option>4 Door</option>
                                <option>SUV/Truck</option>
                                <option>Oversized</option>
                                <option>Another</option>
                            </select>
                            {formErrors.type && <span className="error">{formErrors.type}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="type_wash">Package</label>
                            <select id="type_wash" name='user_wash' aria-label="On Click" value={type_wash} onChange={(e) => setTypeWash(e.target.value)} required>
                                <option></option>
                                <option>Basic Wash</option>
                                <option>Deluxe Wash</option>
                            </select>
                            {formErrors.package && <span className="error">{formErrors.package}</span>}
                        </div>
                        <div className='btn'>
                            <button type="submit" disabled={!getIsFormValid()}>Make Your reservation</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default Form;
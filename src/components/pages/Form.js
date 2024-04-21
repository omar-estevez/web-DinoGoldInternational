import '../styles/Form.scss';
import { useState } from 'react';

const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState('');
    const [date, setDate] = useState("");
    const [type_vehicle, setTypeVehicle] = useState("");
    const [type_wash, setTypeWash] = useState("");
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        address: '',
        date: '',
        type_vehicle: '',
        type_wash: ''
    });

    const getIsFormValid = () => {
        return name && email && phone && address && date && type_vehicle && type_wash;
    };

    const clearForm = () => {
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setDate("");
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
        if (!type_vehicle) errors.type_vehicle = 'Type of vehicle is required.';
        if (!type_wash) errors.type_wash = 'Type of wash is required.';

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            // Handle form submission logic here
            // const formData = createObject(e.target.elements);
            // submitForm(formData);
            clearForm();
        }
    };

    /* const createObject = (data) => {
        return { 
            'Name' : data['name']['value'],
            'Email' : data['email']['value'],
            'Phone' : data['phone']['value'],
            'Address' : data['address']['value'],
            'Date' : data['date']['value'],
            'Type_Vehicle' : data['type_vehicle']['value'],
            'Type_Wash' : data['type_wash']['value']
        }
    } */

    return (
        <>
            <div className='form'>
                <h3>Booking Form</h3>
                <form className="form-container" onSubmit={handleSubmit}>
                    <fieldset>
                        <div className='Field'>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" aria-label="On Click" value={name} onChange={(e) => setName(e.target.value)} required />
                            {formErrors.name && <span className="error">{formErrors.name}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" aria-label="On Click" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            {formErrors.email && <span className="error">{formErrors.email}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="phone">Phone</label>
                            <input type="text" id="phone" aria-label="On Click" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                            {formErrors.phone && <span className="error">{formErrors.phone}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" aria-label="On Click" value={address} onChange={(e) => setAddress(e.target.value)} required />
                            {formErrors.address && <span className="error">{formErrors.address}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="res-date">Choose date</label>
                            <input type="date" id="res-date" aria-label="On Click" value={date} onChange={(e) => setDate(e.target.value)} required />
                            {formErrors.date && <span className="error">{formErrors.date}</span>}
                        </div>
                        <div className='Field'>
                            <label htmlFor="type_vehicle">Type of vehicle</label>
                            <select id="type_vehicle" aria-label="On Click" value={type_vehicle} onChange={(e) => setTypeVehicle(e.target.value)} required>
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
                            <select id="type_wash" aria-label="On Click" value={type_wash} onChange={(e) => setTypeWash(e.target.value)} required>
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
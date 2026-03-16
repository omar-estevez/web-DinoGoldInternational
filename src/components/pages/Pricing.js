import '../styles/Pricing.scss';
import React, { useState, useEffect } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import { ButtonSms } from '../shared/ButtonSms';

const Pricing = ({ carTypeList, cardServicesList, aditionalServicesList }) => {

    const [selectedType, setSelectedType] = useState(carTypeList[0]['index']);
    const [cardServices, setCardServices] = useState(cardServicesList);

    useEffect(() => {
        const updatedArray = [...cardServices];
        updatePrices(updatedArray, selectedType);
        setCardServices(updatedArray);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedType]);

    const handleTypeClick = (vehicle) => {
        console.log(vehicle)
        setSelectedType(vehicle);
    };

    const updatePrices = (updatedArray, vehicle) => {
        updatedArray[0]['price'] = carTypeList[vehicle]['price-basic'];
        updatedArray[1]['price'] = carTypeList[vehicle]['price-deluxe'];
        updatedArray[2]['price'] = carTypeList[vehicle]['price-premium'];
    }

    return (
        <>
            <section className='pricing' id='pricing'>
                <h2>OUR MOBILE CAR WASH PRICES</h2>
                <div className='types-container'>
                    <ul>
                        {
                            carTypeList.map((vehicle) =>
                                <li key={vehicle.index} className={selectedType === vehicle.index ? 'selected' : ''} onClick={() => handleTypeClick(vehicle.index)} >
                                    <h4>{vehicle.name}</h4>
                                    <h6>{vehicle.type}</h6>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className='card-container'>
                    {
                        cardServices.map((card, index) =>
                            <div key={index} className='cards'>
                                <div className='card-text'>
                                    <h3>{card.title}</h3>
                                    <p>Starting at {card.price}</p>
                                    <ul>
                                        {
                                            card.list.map((item, index) =>
                                                <li key={index}><FaRegCheckCircle className='check-icon' />   {item}</li>
                                            )
                                        }
                                    </ul>
                                    <ButtonSms text='Book' smsText={card.buttonHref + '%20My%20vehicle%20type%20is:%20' + carTypeList[selectedType]['name']} />
                                    {index === 2 ? <h6>⭐ Most Popular</h6> : ''}
                                </div>
                            </div>
                        )
                    }
                </div>
                <h2>ADDITIONAL SERVICES</h2>
                <div className='card-container'>
                    {
                        aditionalServicesList.map((card, index) =>
                            <div key={index} className='cards'>
                                <div className='card-text'>
                                    <h3>{card.title}</h3>
                                    <p>{card.price}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <p className='phrase'><b>Mobile Service - We Come to You - Professional Equipment</b></p>
            </section>
        </>
    )
}

export default Pricing;
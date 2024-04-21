import '../styles/Pricing.scss';
import React, { useState, useEffect  } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

const Pricing = ({ carTypeList, cardServicesList }) => {

    const [selectedType, setSelectedType] = useState(carTypeList[0]['index']);
    const [cardServices, setCardServices] = useState(cardServicesList);

    useEffect(() => {
        const updatedArray = [...cardServices];
        updatePrices(updatedArray, selectedType);
        setCardServices(updatedArray);
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
            <section className='pricing'>
                <h2>Choose Your Shine</h2>
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
                                    <p>{card.price}</p>
                                    <ul>
                                        {
                                            card.list.map((item, index) =>
                                                <li key={index}><FaRegCheckCircle className='check-icon'/>   {item}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                </div>
                <p className='phrase'><b>“Affordable Luxury for Your Car.”</b></p>
            </section>
        </>
    )
}

export default Pricing;
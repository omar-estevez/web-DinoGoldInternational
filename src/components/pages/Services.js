import React from 'react';
import '../styles/Services.scss';
import cardImageOne from '../assets/images/Exterior_detailing.png';
import cardImageTwo from '../assets/images/Interior_detailing.png';
import cardImageThree from '../assets/images/Paint_Correction.png';
import cardImageFour from '../assets/images/Engine_cleaning.png';

const Services = () => {

    const cards = [{
        'image': cardImageOne,
        'title': 'Exterior Detailing',
        'description': 'From hand washes to ceramic coatings, we protect your car’s beauty.',
    }, {
        'image': cardImageTwo,
        'title': 'Interior Detailing',
        'description': 'Say goodbye to dust, stains, and odors.',
    }, {
        'image': cardImageThree,
        'title': 'Paint Correction',
        'description': 'Revive faded paint and remove scratches.',
    }, {
        'image': cardImageFour,
        'title': 'Engine Bay Cleaning',
        'description': 'Because even engines deserve a spa day.',
    }]

    return (
        <>
            <section className='services' id='services'>
                <h2>Our Services at a Glance</h2>
                <div className='card-container'>
                    {
                        cards.map((card, index) =>
                            <div key={index} className='cards'>
                                <div className="card-image" style={{ backgroundImage: `url(${card.image})` }}
                                ></div>
                                <div className='card-text'>
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <p className='phrase'><b>“Dino Gold: Where Detailing Meets Excellence.”</b></p>
            </section>
        </>
    )
}

export default Services;
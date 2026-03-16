import React from 'react';
import '../styles/Services.scss';
import cardImageOne from '../assets/images/Exterior_wash.png';
import cardImageTwo from '../assets/images/Vacuum_clean.png';
import cardImageThree from '../assets/images/Full_car_wash.png';
import cardImageFour from '../assets/images/add_on.png';

const Services = () => {

    const cards = [{
        'image': cardImageOne,
        'title': 'Mobile Exterior Car Wash',
        'description': 'Professional mobile exterior car wash in Houston including foam wash, pressure rinse, wheel cleaning, tire shine, and microfiber drying to leave your vehicle spotless.',
    }, {
        'image': cardImageTwo,
        'title': 'Interior Vacuum Cleaning',
        'description': 'Interior vacuum cleaning service in Houston including seats, carpets, and floor mats to remove dirt, dust, and debris.',
    }, {
        'image': cardImageThree,
        'title': 'Full Car Wash Service',
        'description': 'Complete mobile car wash service in Houston including exterior wash, wheel cleaning, tire shine, interior vacuum, and dashboard wipe-down.',
    }, {
        'image': cardImageFour,
        'title': 'Car Wash Add-On Services',
        'description': 'Upgrade your mobile car wash in Houston with add-ons like pet hair removal, engine bay rinse, seat wipe-down, and extra cleaning for heavily dirty vehicles.',
    }]

    return (
        <>
            <section className='services' id='services'>
                <h2>OUR MOBILE CAR WASH SERVICES IN HOUSTON</h2>
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
                <p className='phrase'><b>“Dino Gold: Premium Mobile Car Wash Service in Houston”</b></p>
            </section>
        </>
    )
}

export default Services;
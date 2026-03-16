import React, { lazy, Suspense } from 'react';

const AboutComponent = lazy(() => import('./About'));
const CallToActionComponent = lazy(() => import('./CallToAction'));
const ContactComponent = lazy(() => import('./Contact'));
const PricingComponent = lazy(() => import('./Pricing'));
const ServicesComponent = lazy(() => import('./Services'));

const Homepage = () => {

    const carType = [{
        'index': 0,
        'name': 'SEDAN',
        // 'type': 'Kawasaki, Harley',
        'price-basic': '$40',
        'price-deluxe': '$60',
        'price-premium': '$75'
    }, {
        'index': 1,
        'name': 'SUV',
        // 'type': 'Mustang, GT-R',
        'price-basic': '$45',
        'price-deluxe': '$70',
        'price-premium': '$85'
    }, {
        'index': 2,
        'name': 'TRUCK / LARGE SUV',
        // 'type': '5 Series, Tesla',
        'price-basic': '$50',
        'price-deluxe': '$80',
        'price-premium': '$95'
    }];

    const cardsServices = [{
        'title': 'Exterior Wash',
        'list': [
            'Foam Wash',
            'Pressure Rinse',
            'Wheels & Rims Cleaning',
            'Tire Shine',
            'Microfiber Dry',
        ],
        'price': '-',
        'buttonHref': "+1832XXXXXXX?body=Hi,%20I'd%20like%20to%20book%20the%20Exterior%20Wash%20service.%20Location%20in%20Houston:%20_____%20Preferred%20date%20%26%20time:%20_____",
    }, {
        'title': 'Wash + Vacuum',
        'list': [
            'Foam Wash',
            'Wheels & Rims Cleaning',
            'Tire Shine',
            'Drying',
            'Interior Vacuum',
            'Quick Dashboard Wipe'
        ],
        'price': '-',
        'buttonHref': "+1832XXXXXXX?body=Hi,%20I'd%20like%20to%20book%20the%20Wash%20%2B%20Vacuum%20service.%20Location%20in%20Houston:%20_____%20Preferred%20date%20%26%20time:%20_____",
    }, {
        'title': 'Wash + Interior Quick Clean',
        'list': [
            'Foam Wash',
            'Wheels & Rims Cleaning',
            'Tire Shine',
            'Full Interior Vacuum',
            'Dashboard Cleaning',
            'Door & Panel Wipe Down',
            'Interior & Exterior Windows',
        ],
        'price': '-',
        'buttonHref': "+1832XXXXXXX?body=Hi,%20I'd%20like%20to%20book%20the%20Wash%20%2B%20Interior%20Quick%20Clean%20service.%20Location%20in%20Houston:%20_____%20Preferred%20date%20%26%20time:%20_____",
    }];

    const aditionalServices = [{
        'title': 'Pet Hair Removal',
        'price': '$20'
    }, {
        'title': 'Engine Bay Rinse',
        'price': '$25'
    }, {
        'title': 'Heavy Dirt Fee',
        'price': '$10 - 20'
    }];

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <CallToActionComponent />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <ServicesComponent />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <PricingComponent carTypeList={carType} cardServicesList={cardsServices} aditionalServicesList={aditionalServices} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <AboutComponent />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <ContactComponent />
            </Suspense>
        </>
    )
}

export default Homepage;
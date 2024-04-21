// import About from "./About";
import About from "./About";
import CallToAction from "./CallToAction";
import Contact from "./Contact";
import Pricing from "./Pricing";
import Services from "./Services";

const Homepage = () => {

    const carType = [{
        'index': 0,
        'name': 'BIKE',
        'type': 'Kawasaki, Harley',
        'price-basic': '$40',
        'price-deluxe': '$80',
        'price-premium': 'Soon'
    }, {
        'index': 1,
        'name': '2 DOOR',
        'type': 'Mustang, GT-R',
        'price-basic': '$50',
        'price-deluxe': '$100',
        'price-premium': 'Soon'
    }, {
        'index': 2,
        'name': '4 DOOR',
        'type': '5 Series, Tesla',
        'price-basic': '$55',
        'price-deluxe': '$110',
        'price-premium': 'Soon'
    }, {
        'index': 3,
        'name': 'SUV/TRUCK',
        'type': 'RAM 1500, Cayenne',
        'price-basic': '$60',
        'price-deluxe': '$120',
        'price-premium': 'Soon'
    }, {
        'index': 4,
        'name': 'OVERSIZED',
        'type': 'F250, RAM 3500',
        'price-basic': '$65',
        'price-deluxe': '$130',
        'price-premium': 'Soon'
    }, {
        'index': 5,
        'name': 'ANOTHER',
        'type': 'Boats, Planes',
        'price-basic': 'Contact Us',
        'price-deluxe': 'Contact Us',
        'price-premium': 'Soon'
    }];

    const cardsServices = [{
        'title': 'Basic Wash',
        'list': [
            'Foam Bath Pre-Soak',
            'Clean Wheels',
            'Gentle Hand Wash',
            'Vacuum & Dust-Off',
            'Tire Conditioner',
            'Exterior & Interior Glass'
        ],
        'price': '-'
    }, {
        'title': 'Deluxe Wash',
        'list': [
            'Foam Bath Pre-Soak',
            'Deep Clean Wheels',
            'Gentle Hand Wash',
            'Deep Clean Emblems & Badge',
            'Vacuum & Dust-Off',
            'Deep Clean Carpets & Plastics',
            'Tire Conditioner',
            'Exterior & Interior Glass'
        ],
        'price': '-'
    }, {
        'title': 'Premium Ceramic Coating',
        'list': [
            'SOON'
        ],
        'price': '-'
    }];

    return (
        <>
            <CallToAction/>
            <Services/>
            <Pricing carTypeList={carType} cardServicesList={cardsServices}/>
            <About/>
            <Contact/>
        </>
    )
}

export default Homepage;
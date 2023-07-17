import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCards from './InfoCards';

const Infocard = () => {
    const cardData = [
        {
            id:1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00 pm everyday',
            icon:clock,
            bgclass:'bg-gradient-to-r from-secondary to-primary'
        },
        {
            id:2,
            name: 'Our Locations',
            description: 'Open 9.00 am to 5.00 pm everyday',
            icon:marker,
            bgclass:'bg-accent'
        },
        {
            id:3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00 pm everyday',
            icon:phone,
            bgclass:'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8'>
            {/* console.log(cardData) */}
            {
                cardData?.map(card => <InfoCards key={card.id}
                    card={card}>
                    
                </InfoCards>)
            }
        </div>
    );
};

export default Infocard;
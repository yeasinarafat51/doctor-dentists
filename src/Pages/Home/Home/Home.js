import React from 'react';
import Banner from '../Banner/Banner';
import Infocard from '../infocard/Infocard';
import Services from '../Services/Services';
import Care from '../care/Care';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Testtimonial from '../Testtimonial/Testtimonial';
import Contact from '../contact/Contact';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <Infocard></Infocard>
           <Services></Services>
           <Care></Care>
           <MakeAppoinment></MakeAppoinment>
           <Testtimonial></Testtimonial>
           <Contact></Contact>
        </div>
    );
};

export default Home;
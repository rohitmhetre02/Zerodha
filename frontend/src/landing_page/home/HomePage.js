import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Testimonials from './Testimonials'; // New component


import OpenAccount from '../OpenAccount';


function HomePage() {
    return (
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <Testimonials /> {/* New component added */}
        </>

    );
}

export default HomePage;

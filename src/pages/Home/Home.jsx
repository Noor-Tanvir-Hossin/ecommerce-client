import React from 'react';
import Testimonial from './Testimonial';
import Hero from './Hero';
import FeaturedProduct from './FeaturedProduct';
import FAQ from './FAQ';
import ContactSection from './ContactSection';

const Home = () => {
    return (
        <div>
            <Hero/>
        <div className='container mx-auto w-[90%]'>
            <FeaturedProduct></FeaturedProduct>
            <div className='my-7'>
                <Testimonial ></Testimonial>
            </div>
            <FAQ></FAQ>
           <div className='my-7'>
           <ContactSection></ContactSection>
           </div>
        </div>
        </div>
    );
};

export default Home;
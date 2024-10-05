import React from 'react';
import Hero from './Hero/Hero';
import ProductSection from '../ProductSection/ProductSection';

const Home = () => {
    return (
        <div className='space-y-5'>
            <Hero></Hero>
            <ProductSection></ProductSection>
          
        </div>
    );
};

export default Home;
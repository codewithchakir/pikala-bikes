import React from 'react';

const Hero = () => (
    <section className="flex justify-center items-center w-full h-[50vh] md:h-[40vh] bg-orange-600 font-medium text-white relative">
        <img className="w-full h-full object-cover opacity-75" src={'/img/hero-banner.jpg'} alt={''} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
            <h1 className='text-4xl font-bold'>Learn Our Story</h1>
        </div>
  </section>
);
export default Hero;
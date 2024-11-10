import React from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import Image from 'next/image';


const Hero = () => {
  return (
    <section className='-mt-8'>
      <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
          <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
            <h1 
              className='text-5xl lg:text-6xl font-bold leading-relaxed x:leading-loose font-averia'
            >
              Healthy
              <br />
              Fresh <span className='text-secondary'>Fruits!</span>
            </h1>
            <p
              className='text-2xl tracking-wide'
            >
              Order Now For Fresh Healthy Life
            </p>
            <p
              className='text-gray-400'
            >
              Healthy and yummy food for fresh morning breakfast. Eat daily for good health and mind. Order and get 20% off on your first order.
            </p>
            <div
              className='flex justify-center md:justify-start'
            >
              <button className='primary-btn flex items-center gap-2'>
                <IoBagHandleOutline />
                <span>Order Now</span>
              </button>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <Image
            src="/fruit-plate.png"
            alt='Fruit Plate'
            width={350}
            height={350}
            className='w-[350px] md:w-[550px] drop-shadow'
          />
        </div>

        <div className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]'>
          <Image 
            src="/leaf.png"
            alt='Leaf'
            width={350}
            height={350}
            className='w-full md:max-w-[300px]'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

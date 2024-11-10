import React from 'react';
import Image from 'next/image';

function Banner() {
  return (
    <section className="relative py-14">
      <div className="absolute inset-0">
        <Image
          src="/banner-bg.jpg"  
          alt="banner"
          layout="fill"  
          objectFit="cover" 
          className="z-0"
        />
      </div>

      <div className="container relative z-10 flex flex-col md:flex-row items-end justify-end space-y-6 md:space-y-0">
        <div className="flex flex-col justify-center text-left space-y-4 lg:max-w-[400px] text-[#1B5E20] pr-4 md:pr-12">
          <h1 className="text-2xl lg:text-4xl font-bold uppercase text-[#B71C1C] text-shadow-lg border-b-2 border-[#B71C1C] pb-4">
            Explore Our Fruits Collection
          </h1>
          <p className="text-[#1B5E20]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis esse placeat harum aperiam et nihil,
            ea error voluptatum maiores, laudantium excepturi quod? Quam quibusdam, sequi fugiat quos praesentium
            tenetur, deleniti, assumenda utunt corporis!
          </p>
          <p className="text-[#1B5E20]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus exercitationem temporibus labore ea
            aspernatur architecto, reprehenderit quia sequi voluptas accusamus assumenda dolorum eveniet molestias
            error ex, enim harum ipsa doloremque.
          </p>
          <button className="primary-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Banner;

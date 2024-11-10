import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <section className="bg-gradient-to-r from-green-200 to-yellow-200 py-14">
      <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0'>

        <div className='flex flex-col justify-center text-center md:text-left'>
          <div className='space-y-4 lg:max-w-[400px]'>
            <h1 className='text-2xl lg:text-4xl text-green-600 uppercase'>Fresh Fruits, Fresh Start</h1>
            <p className='text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis esse placeat harum aperiam et nihil, ea error voluptatum maiores, laudantium excepturi quod? Quam quibusdam, sequi fugiat quos praesentium tenetur, deleniti, assumenda ut amet beatae dignissimos omnis vero odit reiciendis optio aspernatur necessitatibus earum?
            </p>
            <p className='text-gray-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus exercitationem temporibus labore ea aspernatur architecto, reprehenderit quia sequi voluptas accusamus assumenda dolorum eveniet molestias error ex, enim harum ipsa doloremque.
            </p>
            <button className='bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 shadow-lg transition-all'>
              Learn More
            </button>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <Image
            src='/fruit-plate2.png'
            alt='banner'
            width={150}
            height={150}
            className='w-[300px] md:w-[400px] h-auto object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default Banner

import React from 'react'
import Image from 'next/image'


function banner() {
  return (
    <section>
      <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14'>
        <div className='flex justify-center items-center'>
        <Image
            src='/fruits-splash.png'
            alt='banner'
            width={300}
            height={300}
            className='w-[300px] md:max-w[400px] h-full object-cover'
          />
        </div>
        <div className='flex flex-col justify-center'>
            <div className='text-center md:text-left psace-y-4 lg:max-w-[400px]'>
                <h1 className='text-3xl lg:text-6xl font-bold uppercase'>Brand Info</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis esse placeat harum aperiam et nihil, ea error voluptatum maiores, laudantium excepturi quod? Quam quibusdam, sequi fugiat quos praesentium tenetur, deleniti, assumenda ut amet beatae dignissimos omnis vero odit reiciendis optio aspernatur necessitatibus earum? Itaque minus repudiandae, blanditiis voluptate qui amet cumque distinctio esse suscipit iusto ea laudantium, dolores nesciunt corporis!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus exercitationem temporibus labore ea aspernatur architecto, reprehenderit quia sequi voluptas accusamus assumenda dolorum eveniet molestias error ex, enim harum ipsa doloremque.</p>
                <button className='primary-btn'>Learn More</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default banner

import React from 'react'
import { FaLeaf } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-primary/10 text-white py-12'>
      <div className='container flex justify-between items-center'>
        <div className='text-2xl flex items-center gap-2 font-bold uppercase justify-center md:justify-start'>
          <p className='text-primary'>Fruit</p>
          <p className='text-secondary'>Store</p>
          <FaLeaf className='text-green-500' />
        </div>

        <div className='relative flex items-center w-full md:w-auto'>
          <input
            type="text"
            placeholder="Search for fruits..."
            className='pl-10 pr-4 py-2 rounded-full border-2 border-primary text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-[300px]'
          />
          <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600' />
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import Navbar from './Navbar/page'
import Herosection from './Herosection/page'
import Menu from './Menu/page'
import Banner1 from './Banner1/page'
import Banner2 from './Banner2/page'
import Banner3 from './Banner3/page'
import Footer from './footer/page'

function page() {
  return (
    <>
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Herosection/>
      <Menu/>
      <Banner1/>
      <Banner2/>
      <Banner3/>
      <Footer/>
      </main>
    </>
  )
}

export default page

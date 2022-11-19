import React from 'react'
import Products from '../Components/Products'
const Home = () => {
  return (
    <>
    <div className='hero py-16'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='w-1/2'>
          <h5><em>Are Yor Hungry ?</em> </h5>
          <h1 className='text-4xl md:6 font-bold'>Don't Wait </h1>
          <button className=' px-6 py-2 rounded-full text-white font-bold bg-yellow-500'>Order Now</button>
        </div>
        <div className='w-1/2'>
          <img className='w-4/5' src="./images/pizza.png" alt="pizza" />
        </div>
      </div>
    </div>
    <div>
      <Products />
    </div>
    </>
  )
}

export default Home

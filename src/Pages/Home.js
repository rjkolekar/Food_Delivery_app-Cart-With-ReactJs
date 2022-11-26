import React from 'react'
import Products from '../Components/Products'
const Home = () => {

  

  return (
    <>
    <section className='hero py-16 h-[800px] bg-gray-100  mx-auto'>
      <div className='text-black  flex items-center justify-between p-6'>
        <div className='w-1/2'>
          <img className='w-4/5' src="./images/pizza.png" alt="pizza" />
        </div>
        <div className='flex-col justify-center m-6'>
          <div className='flex items-center'>
            <div className='bg-red-600 w-10 h-[2px]'></div>Are Are Hungry ?
          </div>
          <h1 className='text-4xl'>Dont Worry We Are Here To Serve</h1>
          <button className='mt-4 px-6 py-2 rounded-full text-white font-bold bg-red-600'>Order Now</button>
        </div>
        
      </div>
    </section>
    <div>
      <Products />
    </div>
    </>
  )
}

export default Home

import React from 'react'

const Product = () => {
  return (
    <>
       <div>
            <img src="./images/peproni.png" alt="" />
            <div className="text-center">
            <h2 className="py-2">Havena Special</h2>
            <span className="bg-gray-200 py-1 px-2 text-sm  rounded-full">Small</span>
            </div>

            <div className="flex justify-between">
              <span>Rs 500</span>
              <button className="rounded-full bg-gray-300 px-3 ">Add</button>
            </div>
          </div>
    </>
  )
}

export default Product

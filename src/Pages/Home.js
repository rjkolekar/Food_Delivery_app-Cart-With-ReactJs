import React from "react";
import Products from "../Components/Products";
const Home = () => {
  const style = {
          background : "url('images/866650.jpg') no-repeat",                 
          backgroundRepeat: "noRepeat",  
          backgroundSize: "cover",
          width:"100%",
          height:"600px",
          objectFit: "cover"

  }
  return (

   
  

    <>
      <section className=""  >
        <div style={ style  } className=" " >
          {/* <img src="./images/pizza5.webp" alt="pizza" /> */}
          <div className="text-black  items-center justify-between p-6 ">
            <div className="flex-col justify-center m-6 mt-60">
              <div className="flex items-center text-2xl mb-6">
                <div className="bg-red-600 w-10 h-[2px]"></div>Are Are Hungry
                ?
              </div>
              <h1 className="text-5xl font-bold">
                Dont Worry <br />We Are Here To Serve
              </h1>
              <button className="mt-10 px-6 py-2 rounded-full text-white font-bold bg-red-900">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Products />
      </div>
    </>
  );
};

export default Home;

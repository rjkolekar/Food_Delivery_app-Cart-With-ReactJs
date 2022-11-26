import React, { useState } from "react";

const Admin = () => {
  const [name, setName] = useState({});
  const [price, setPrice] = useState({});
  const [_id, set_Id] = useState({});
  const [size, setSize] = useState({});

  const addProduct = () => {
    const userId = JSON.stringify(localStorage.getItem('user'))
    console.warn(userId);
  };
  // fetch('https://fakestoreapi.com/products',{
  //         method:"POST",
  //         body:JSON.stringify(
  //             {
  //                 title: 'test product',
  //                 price: 13.5,
  //                 description: 'lorem ipsum set',
  //                 image: 'https://i.pravatar.cc',
  //                 category: 'electronic'
  //             }
  //         )
  //     })
  //         .then(res=>res.json())
  //         .then(json=>console.log(json))
  return (
    <div className=" ">
      
        <input
          className="p-2"  
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <input
         className="p-2"  
          type="text"
          placeholder="ID"
          value={_id}
          onChange={(e) => {
            set_Id(e.target.value);
          }}
        />
        <br />
        <input
         className="p-2"  
          type="text"
          placeholder="size"
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />
        <br />
        <input
         className="p-2"  
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />

        <button onClick={addProduct} className="bg-orange-500 rounded-full p-2">
          AddProduct
        </button>
     
    </div>
  );
};

export default Admin;

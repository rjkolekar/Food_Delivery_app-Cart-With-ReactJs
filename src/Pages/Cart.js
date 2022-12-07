import { useContext, useEffect, useState  } from "react";
import { CartContext } from '../CartContext'
import { useNavigate } from "react-router-dom"

const Cart = () => {

  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);
  let navigate = useNavigate();

  useEffect(() => {
      if (!cart.items) {
          return;
      }

    

      fetch('/api/products/cart-items', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ids: Object.keys(cart.items)})
      }).then(res => res.json())
      .then(products => {
          setProducts(products)
    
      })
  }, [cart]);

  const getQty = (productid)=> {
      return cart.items[productid]
  }

  const increment= (productid) =>{
    const existngQty = cart.items[productid]
    const _cart = {...cart }
    _cart.items[productid] = existngQty + 1;
    _cart.totalItems = _cart.totalItems + 1
    setCart(_cart);
  }

  const decrement = (productId) => {
    const existingQty = cart.items[productId];
   if (existingQty === 1) {
        return;
   }
    const _cart = {...cart};
    _cart.items[productId] = existingQty - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
}
    

  return (
    <>
      <div className="mx-auto w-1/2 mt-4">
        <button onClick={() => {navigate(-1)} } className=" font-bold rounded-md bg-red-700 px-3 py-1 text-white">Back </button>
        <div className="pt-8">
          <h1 className="font-bold text-2xl">Your Cart Products </h1>
        </div>

        <ul >

          {
            products.map(product => {
              return(
            <li className="flex mx-auto items-center justify-between" key={product._id}>
              <div>
                <div className="flex mx-auto items-center justify-between">
                <div className=" p-4 flex items-center justify-center">
                  <img src={product.image} alt="" className="w-[70px] h-[50px] border border-spacing-1 "/>
                  <span className="ml-12">{ product.name}</span>
                </div>
                <div className="ml-12 flex mx-auto items-center justify-between text-center " >
                  <button onClick={ ()=> { decrement(product._id)}} className="bg-red-700 rounded-full px-4 text-white">-</button>
                  <span className="ml-2 mr-2">{ getQty( product._id)}</span>
                  <button onClick={()=>{ increment(product._id)} } className="bg-red-700 rounded-full px-4 text-white">+</button>
                </div>
                <div className="ml-16">
                  <span>Rs {product.price}</span>
                  <button className="ml-6 rounded-full bg-red-700 px-2 text-white ">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
              )
            })
          }
          
         
        </ul>
        <hr className="bg-red-300 mt-12" />
        <div className="text-right">
          <h2 className="mr-[80px]">Cart-total:Rs=900</h2>
          <button className="bg-red-700 px-2 rounded-full text-white mr-[80px]">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;

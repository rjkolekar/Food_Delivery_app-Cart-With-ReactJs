import { NavLink } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartContext';

const Navigation = () => {

    const [isActive,setisActive] = useState([])

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 60 ? setisActive(true) : setisActive(false)
        })
    })

    const cartStyle = {
        
        display: 'flex',
        padding: '6px 12px',
        borderRadius: '50px'
      }
    
      const { cart } = useContext(CartContext)
    return (
        <>
            <nav className={ `${ 
                isActive ? 'bg-red-700 text-white fixed': 'bg-red-900 text-white'} items-center justify-between flex w-full`}
                >
            <div className='container flex mx-auto justify-between'>
                <NavLink to="/">
                        <img className='pl-20 h-[55px]' src="./images/Pizza_logo.png" alt="logo" />
                    </NavLink>
                    <ul className='flex items-center'>
                        <li><NavLink to="/">Home</NavLink></li>
                        {/* <li className="ml-6"><NavLink to="/products">Products</NavLink></li> */}
                        <li className="ml-6">
                            <NavLink to="/cart">
                                <div style={cartStyle}> 
                                    <span>{ cart.totalItems ? cart.totalItems : 0 }</span>
                                    {/* <div style={cartStyle}>
                                    <span className='text-white'>{ cart.totalItems ? cart.totalItems : 0 }</span> */} 
                                    <img className="ml-2 text-white" src="/images/cart.png" alt="cart-icon" />
                                </div>
                            </NavLink>
                        </li>
                        {/* <li className='pl-2 '> */}
                           {/* <NavLink to='/admin'>Admin</NavLink> </li> */}
                    </ul>
                    </div>
                    
            </nav>
        </>
    )
}

export default Navigation;

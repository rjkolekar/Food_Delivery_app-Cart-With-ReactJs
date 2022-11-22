import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Navigation = () => {

    const cartStyle = {
        background: '#F59E0D',
        display: 'flex',
        padding: '6px 12px',
        borderRadius: '50px'
      }
    
      const { cart } = useContext(CartContext)
    return (
        <>
            <nav className='container mx-auto flex items-center justify-between p-4'>
                    <NavLink to="/">
                        <img style={{ height: 55 }} src="./images/logo.png" alt="logo" />
                    </NavLink>
                    <ul className='flex items-center'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li className="ml-6"><NavLink to="/products">Products</NavLink></li>
                        <li className="ml-6">
                            <NavLink to="/cart">
                                {/* <div style={cartStyle}> */}
                                    {/* <span>{ cart.totalItems ? cart.totalItems : 0 }</span> */}
                                    <div style={cartStyle}>
                                    <span>{ cart.totalItems ? cart.totalItems : 0 }</span>
                                    <img className="ml-2" src="/images/cart.png" alt="cart-icon" />
                                </div>
                            </NavLink>
                        </li>
                    </ul>
            </nav>
        </>
    )
}

export default Navigation;

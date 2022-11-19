import { NavLink } from 'react-router-dom';


const Navigation = () => {
 

    return (
        <>
            <nav className='container mx-auto flex items-center justify-between p-4'>
                    <NavLink to="/">
                        <img style={{ height: 55 }} src="/images/logo.png" alt="logo" />
                    </NavLink>
                    <ul className='flex items-center'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li className="ml-6"><NavLink to="/products">Products</NavLink></li>
                        <li className="ml-6">
                            <NavLink to="/cart">
                                {/* <div style={cartStyle}> */}
                                    {/* <span>{ cart.totalItems ? cart.totalItems : 0 }</span> */}
                                   
                                    <img className="ml-2 bg-red-600 flex rounded-xl pl-1 pr-2" src="/images/cart.png" alt="cart-icon" />
                                {/* </div> */}
                            </NavLink>
                        </li>
                    </ul>
            </nav>
        </>
    )
}

export default Navigation;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import ProductPage from './Pages/ProductPage';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Navigation from './Components/Navigation';



const App = () => {


    return (
        <>
        <BrowserRouter>
            <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} exact></Route>
                    {/* <Route path="/about" element={About}></Route> */}
                    <Route path="/products" exact element={<ProductPage />}></Route>
                    <Route path="/products/:_id" element={<SingleProduct />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;
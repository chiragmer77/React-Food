import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Checkout from './checkout';

const RoutesConfig = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCartPrice = cart.reduce((total, item) => total + item.itemPrice, 0);
    return (
        <Routes>
            <Route path="/" exact element={
                <Layout totalCartPrice={totalCartPrice} cart={cart}>
                    <Home />
                </Layout>
            } />
            <Route path="/checkout" element={<Layout totalCartPrice={totalCartPrice} cart={cart}> <Checkout /></Layout>} />
            {/* Add more routes as needed */}
        </Routes>
    );
};

export default RoutesConfig;
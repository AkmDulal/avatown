// import react from 'react'
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import './App.css'
import Layout from './Components/Layout';
import Product from './Pages/Product'
import ProductDetails from './Pages/ProductDetails'


function App() {
  return (
    <>
      <Layout>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/product-details/:id" element={<ProductDetails />}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App

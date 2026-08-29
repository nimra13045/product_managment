import React, { useContext, useEffect } from "react";
import '../App.css'
import { productcontext } from "../context/productcontxt";

import Productlist from '../component/productlist'
import Addproduct from './addproduct'
import Viewproduct from './viewproduct'
import { useNavigate } from "react-router-dom";
import {
    saveProducts,
    saveRecord,
    getProducts} from "../data/localstore";

const Home = () => {
  const navigate =useNavigate();
    const{products,setproducts}=useContext(productcontext)

  

useEffect(() => {
    setproducts(getProducts());
}, []);

useEffect(() => {
    saveProducts(products);
}, [products]);

const saveHandler = () => {
  if (products.length === 0) {
    alert("Please add a product first!");
    return;
  }

  const newRecord = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    products: products.map((product) => ({
      ...product,
    })),
  };

  saveRecord(newRecord);

  // Clear current products after saving
  setproducts([]);

  alert("Saved!");
};

  return (
    <div>
       <h1 id='heading1'>Welcome To Product Managment system</h1>
       <Productlist  ></Productlist>
       <Addproduct ></Addproduct>
        <button id="btn2" onClick={() => navigate("/view")}>
  View Item
</button>
<button onClick={saveHandler} id="btn3">
    Save Products
</button>
      
    </div>
  )
}

export default Home

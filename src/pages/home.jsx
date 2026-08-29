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
 console.log("Products before save:", products);
   saveProducts(products);

   saveRecord({
      id: Date.now(),
      date: new Date().toLocaleString(),
      products
   });

   alert("Saved!");
}

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

import React from 'react'
import { useContext } from "react";
import { productcontext } from "../context/productcontxt";
import  '../App.css'
// import Productlist from '../component/productlist';
const Addproduct = () => {
  const { addItem} = useContext(productcontext);
     


  return (
    <div>
         <button onClick={addItem} id='btn1'>+ Add Item</button>
         {/* usememo ,useref ,usecallback,how to send data from child to parent? ,rules of hooks,custom hook ,what is the advantages when function change into hooks? */}
    </div>
  )
}


export default Addproduct

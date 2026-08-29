import React,{useContext} from 'react'

import { productcontext } from '../context/productcontxt';
const Productlist = () => {

const { products,removeProduct,updateproducts } = useContext(productcontext);

   const grandTotal = products.reduce(
    (sum, product) => sum + product.quantity * product.price,
    0.00
);


  return (
   
    <div>
      <table border={1} id='table1'>
        <thead id='head'>
  <tr>
    <th>Item Name</th>
    <th>Quantity</th>
    <th>Price</th>
    <th>Total</th>
    <th>Action</th>
  </tr>
</thead>

<tbody>
  {products.map((product)=>(
    <tr key={product.id}>
      
      <td><input type="text"value={product.name}onChange={(e)=>{updateproducts(product.id,"name",e.target.value)}}/></td>
      <td><input type="number"value={product.quantity}onChange={(e)=>{updateproducts(product.id,"quantity",Number(e.target.value))}}/></td>
      <td><input type="number"value={product.price}onChange={(e)=>{updateproducts(product.id,"price",Number(e.target.value))}}/></td>
      <td>Total : {product.quantity * product.price}</td>
      <td><button onClick={()=>removeProduct(product.id)} style={{backgroundColor:'red',width:'100px',height:'30px'}}>Remove</button></td>
    </tr>
    
    ))}
       </tbody>
      
      
        <tfoot>
  <tr>
    <th colSpan={4}>Grand Total</th>
    <th>{grandTotal}</th>
  </tr>
</tfoot>
      </table>
    </div>
  )
}



export default Productlist

import React, { createContext, useState } from 'react'
export const productcontext =createContext();
const Productcontxt = ({children}) => {
    const[products,setproducts]=useState([])
    // add product
     function addItem(){
        const newproduct={
          id:Date.now() ,
          name : '',
          quantity:1,
          price : 1
        };

        setproducts([...products,newproduct]);
      }
    //   remove product
      const removeProduct = (id) => {
  const updateproduct = products.filter(product=>(product.id !==id ));
  setproducts(updateproduct)
};
// updateproduct
const updateproducts= (id,feild,value)=>{
const upproduct = products.map(product=>{
  if(product.id===id){
    return{
      ...product ,[feild]:value,
    }
  }
  return product;
})
setproducts(upproduct)
}
  return (
    <>
      <productcontext.Provider value={{
  products,
  setproducts,
  removeProduct,
  addItem,
  updateproducts
       }
       }>
      {children}
      </productcontext.Provider>
    </>
  )
}

export default Productcontxt

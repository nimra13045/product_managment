import React, { useState, useEffect } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
const Recorddetail = () => {
const{id}=useParams();
  const [products, setProducts] = useState([]);

  

  const removeSavedProduct = (id) => {

    const updatedProducts = products.filter(
      (item) => item.id !== id
    );

    setProducts(updatedProducts);

    // Update records in localStorage
    const records =
      JSON.parse(localStorage.getItem("records")) || [];

    const updatedRecords = records.map((record) => {

      if (record.id === id) {

        return {
          ...record,
          products: updatedProducts,
        };

      }

      return record;

    });

    localStorage.setItem(
      "records",
      JSON.stringify(updatedRecords)
    );
  };

  

  const [loading, setLoading] = useState(true);

useEffect(() => {
  const records = JSON.parse(localStorage.getItem("records")) || [];

  const record = records.find(
    (item) => String(item.id) === String(id)
  );

  if (record) {
    setProducts(record.products);
  }

  setLoading(false);
}, [id]);

if (loading) {
  return null;
}

if (products.length === 0) {
  return <h2>No Product Found</h2>;
}



  return (
    <div>

      <h2 style={{ margin: "20px" }}>Record Details</h2>

      <table border={1} id="table1">

        <thead id="head">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {products.map((item) => (

            <tr key={item.id}>

              <td>{item.name}</td>

              <td>{item.quantity}</td>

              <td>{item.price}</td>

              <td>{item.quantity * item.price}</td>

              <td>
                <button
                  onClick={() => removeSavedProduct(item.id)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    width: "100px",
                    height: "35px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default Recorddetail;
import React from "react";
import  '../App.css'
import { useNavigate } from "react-router-dom";
const RecordList = ({ records, setRecords }) => {
    const navigate = useNavigate();
const Deleterecord=(id)=>{
const update = records.filter((record)=>(record.id !== id));
setRecords(update);
 localStorage.setItem(
      "records",
      JSON.stringify(update)
    );
}



  return (
    
    <div>

      <h2>Saved Records</h2>

      <table border="1" className="table1">

        <tbody>

          {records.map((record) => (

            <tr key={record.id}>
              <td>{record.date}</td>
              <td>{record.products[0]?.name}</td>
              <td>{record.products.length}</td>
              <td>
               <button className="btn3" onClick={() => navigate(`/detail/${record.id}`)}>View Detail</button>
              </td>
              <td>
               <button className="btn2" onClick={()=>Deleterecord(record.id) }>Delete</button>
              </td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default RecordList;
import RecordList from "../component/recordlist";
import { useEffect, useState } from "react";
import { getRecords } from "../data/localstore";
import Recorddetail from "../component/recorddetail";
function Viewproduct() {

  const [records, setRecords] = useState([]);
const [selectedRecord, setSelectedRecord] = useState(null);
  
  useEffect(() => {
    setRecords(getRecords());
}, []);
  

  return (
    <div>
      <RecordList
        records={records}
        setRecords={setRecords}
         setSelectedRecord={setSelectedRecord}
      />
      {selectedRecord && (
  <Recorddetail selectedRecord={selectedRecord} />
)}
    </div>
  );
}

export default Viewproduct;
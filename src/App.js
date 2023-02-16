import React, { useEffect, useRef } from "react";
import './index.css';
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "fomantic-ui-css/components/table.css";
import "fomantic-ui-css/semantic.css";

import axios from "axios";


const Mahasiswa = () => {
    
  const tableRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
    
      const result = await axios.get("http://10.28.1.86/restapi-oop/objects/data_mhs.php");
      $("#tabel").DataTable({
        destroy: true,
        
        data: result.data,
        columns: [
          { title: "NIM", data: "nim" },
          { title: "Nama", data: "nama" },
          { title: "Jenis Kelamin", data: "jenis_kelamin" },
          { title: "Tempat Lahir", data: "tempat_lahir" },
          { title: "Tanggal Lahir", data: "tanggal_lahir" },
          { title: "Alamat", data: "alamat" }
        ],
      });
    };
    fetchData();
  },)
  
  return (
    <div className="container" >
      <h2>Data Mahasiswa</h2>
      <table className="ui celled table" id="tabel"  ref={tableRef}></table>
    </div>
  )
};

export default Mahasiswa;
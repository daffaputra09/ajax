import React, { Component } from "react";
import './index.css';
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "fomantic-ui-css/components/table.css";
import "fomantic-ui-css/semantic.css";

class App extends Component {
  componentDidMount() {$('#tabel').DataTable({
              destroy: true,
                 serverSide: true,
                 processing: true,
                 lengthMenu: [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],  
              ajax: {
                  url: "http://10.28.1.86/restapi-oop/objects/server_side.php",   
              },
          });
  }

  render() {
      return (  
          <div className="container">
              <h1>Data Mahasiswa</h1>
         
              <table id="tabel" className="ui celled table hover striped">
                  <thead>
                      <tr>
                          <th>NIM</th>
                          <th>Nama</th>
                          <th>Jenis Kelamin</th>
                          <th>Tempat Lahir</th>
                          <th>Tanggal Lahir</th>
                          <th>Alamat</th>
                      </tr>
                  </thead>
                  <tbody>
                  </tbody>
              </table>
          </div>
      )
  }
}


export default App;
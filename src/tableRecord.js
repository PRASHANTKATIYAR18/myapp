import React from 'react';
import './sass/tableRecord.scss';
import {
} from "shards-react";

 class Tablerecord extends React.Component {
  render() {
    const list = this.props.cameraRecord && this.props.cameraRecord.map((data, index) => {
      return <tr key={index} onClick={()=>this.props.onRecordSelect(data.SN)}>
        <td>{data.SN}</td>
        <td>{data.camera_location}</td>
        <td>{data.violation_type}</td>
      </tr>
    })
    return (
      <div>
          <div className="tableRecord">  
          <div> 
           <div className="card p-2 border-0 shadow" style={{ 'height': '482px', 'overflow':'scroll', 'display': 'block','width':'auto'}}>
            <table className="table table-borderless ">
                <thead>
                <tr>
                <th><h2 >Record Number <i className=" px-2 text-warning fas fa-list-ul"></i></h2></th>
                <th><h2>Camera Location<i className=" px-2 text-danger fas fa-map-marker-alt"></i></h2></th>
                <th><h2>Violation Type <i className=" px-2 text-info fas fa-filter"></i></h2></th>
                </tr>
                </thead>
                <tbody >
                  {list}
                </tbody>
            </table>
            </div> 
            </div>
            </div>
            </div>
    );
  }
}
export default Tablerecord;
 
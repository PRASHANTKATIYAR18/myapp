import React from 'react';
import './sass/imageRecord.scss';
import pic1 from'./img/pic1.jpg';
import {
 CardImg, Modal
} from "shards-react";
// import { log } from 'util';
export const ImageRecord = props => {
  // const { open } = props.open; 
  return (
    <div>
      <Modal open={props.open} toggle={props.toggle}>
      <div className="card profileCard p-2 shadow border-0  mt-4">
          <div className="card-img-block border-0 shadow ">
          <CardImg top src={pic1} alt="image" height="300px" />
            {/* <CardImg top src={props.selectedRecord.image} alt="image" height="300px" /> */}
          </div>
         <div className="px-5"> 
          {/* <button type="button" onClick={props.toggle} className="btn text-white btn-sm btn-block"style={{backgroundColor:"darkcyan"}}>Show Image</button> */}
         </div>
         <table className="table table-borderless ">
              <thead>
              <tr>
                <th><h3 >Date: </h3></th>
                <td>{props.selectedRecord.dat}</td>
                <th><h3>Time</h3></th>
                <td><h3>03:00PM </h3></td>
                </tr>
                <tr>
                <th><h3>Violation Type :</h3></th>
                <td>{props.selectedRecord.violation_type}</td>

                </tr>
              </thead>
                <tbody >
                  {/* {list} */}
                </tbody>
            </table>
    		
    </div>
          
        </Modal>
      <div className="imageRecord">
        <div className="card profileCard p-2 shadow border-0  mt-4">
          <div className="card-img-block border-0 shadow ">
            <CardImg top src={pic1} alt="image" height="300px" />
            
            {/* <CardImg top src={props.selectedRecord.image} alt="image" height="300px" /> */}
          </div>
         <div className="px-5"> 
          <button type="button" onClick={props.toggle} className="btn text-white btn-sm btn-block"style={{backgroundColor:"darkcyan"}}>Show Image</button>
         </div>
         <table className="table table-borderless ">
              <thead>
                <tr>
                <th><h3 >Date: </h3></th>
                <td>{props.selectedRecord.dat}</td>
                <th><h3>Time</h3></th>
                <td><h3>03:00PM </h3></td>
                </tr>
                <tr>
                <th><h3>Violation Type :</h3></th>
                <td>{props.selectedRecord.violation_type}</td>

                </tr>
              </thead>
                <tbody>
                  {/* {list} */}
                </tbody>
            </table>
    		
    </div>
  </div>
</div> 
    
  );
}

// module.exports = ImageRecord;
 
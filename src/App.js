import React from 'react';
import './sass/App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import {ImageRecord} from "./ImageRecord";
import Tablerecord from "./tableRecord";
import  Mainavbar from "./navbar";
import Footer from "./footer";

import {
  
} from "shards-react";
import * as service from './service';
import { async } from 'q';
 class Perimeter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
       open: false ,
      cameraRecord:[],
      selectedRecord: {}
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }


  getCameraRecords = async () => {
    try {
      const result = await service.getCameraRecords();
      this.setState({cameraRecord: result, selectedRecord: result[0]},()=>{console.log(this.state.cameraRecord)})
    } catch (error) {
      console.log(error);
    }  
  }

  onRecordSelect = async (id) => {
    try {
    const camerafilter = this.state.cameraRecord.filter(a=>a.SN==id);
    console.log(camerafilter);
    this.setState({
      selectedRecord:camerafilter[0]
    })
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount(){
    try {
      this.getCameraRecords();
    } catch (error) {
      console.log(error);
      
    }
  }


  render() {
    return (
      <div>
        <Mainavbar/>
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-7 p-2">
           <Tablerecord cameraRecord={this.state.cameraRecord} onRecordSelect={this.onRecordSelect} />
          </div>
          <div className="col-md-5 p-2">
           <ImageRecord selectedRecord={this.state.selectedRecord} open={this.state.open} toggle={this.toggle} />
          </div>
        </div>
        </div>
        <Footer/>
     </div>
    );
  }
}
export default Perimeter;
 
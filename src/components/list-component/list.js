import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
class ListOfFlightsDetails extends React.Component{
  constructor(){
 super()
 this.state={depart:"Depart",arrive:"Arrive"}
  }
  render(){
    return(
      <div className="list-component">
     <div>
  <Table responsive="sm">
    <thead>
    <tbody>
      <tr>
        <td><p></p></td>
      </tr>
      <tr>
        <td> {this.state.depart}<h3>1:50p</h3></td>
        <td>{this.state.arrive}<h3>3:35p</h3></td>
        
      </tr>
      <tr>
        <td> {this.state.depart}<h3>2:25p</h3></td>
        <td>{this.state.arrive}<h3>3:50p</h3></td>
        
      </tr>
      <tr>
        <td> {this.state.depart}<h3>4:45p</h3></td>
        <td>{this.state.arrive}<h3>9:50p</h3></td>
        
      </tr>
      <tr>
        <td>
        <p>2:20 HOUR LAYOVER IN MINNEAPOLIS,MN</p>
        </td>
      </tr>
    </tbody>
    </thead>
  </Table>
</div>
      
       
      </div>
    )
  }
}

export default ListOfFlightsDetails;
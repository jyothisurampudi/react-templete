import React from 'react'
import Button from 'react-bootstrap/Button';
class DateToDisplay extends React.Component {   
  constructor() {       
   super();            
    var today = new Date(),          
    date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() ;                      
    this.state = {date: date};
  }
   render(){
    return(
    <div className="date-component">
    <p className="date">{this.state.date}</p>
    <Button className="button1" variant="primary">ONE WAY</Button>{' '}
    <Button className="button1"  variant="outline-primary">ROUNDTRIP</Button>{' '}
     </div>
    )
} }                    
  export default DateToDisplay;
  
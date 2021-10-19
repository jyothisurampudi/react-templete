import React from 'react';
import './App.css';
import DateToDisplay from './components/date-component/date'
import ListOfFlightsDetails from './components/list-component/list';
import Header from './components/header-component/header';
import Temperature from './components/temperature-component/temp';
function App() {
  return (
    <div className="App">
     <Header/>
     <DateToDisplay/>
     <ListOfFlightsDetails/>
     <Temperature/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/TourList';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <TourList />
      </React.Fragment>
    )
  }
}

export default App;

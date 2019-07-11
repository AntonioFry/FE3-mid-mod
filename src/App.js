import React, { Component } from 'react';
import './App.css';
import Reservations from './Reservations';
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: '',
    } 
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(reservations => this.setState({ reservations }))
      .catch(error => this.setState({ error: error.message }))
  }

  addReservation(reservation) {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservation)
    };

    fetch('http://localhost:3001/api/v1/reservations', option)
      .then(res => res.json)
      .then(reservations => this.setState({ reservations }))
      .catch(error => this.setState({ error: error.message }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        {(this.state.reservations) &&
        <Reservations reservations={this.state.reservations}/>  
        }
      </div>
    )
  }
}

export default App;

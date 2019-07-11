import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handelChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitReservation(event) {
    event.preventDefault();
    const { name, date, time, number } = this.state;
    const reservation = { name, date, time, number, id: Date.now() };
    this.props.addReservation(reservation);
  }

  render() {
    return  (
      <form>
        <input
          placeholder='name'
          name='name'
          value={this.state.name}
          onChange={(event) => this.handelChange(event)}
        />
        <input
          placeholder='date'
          name='date'
          value={this.state.date}
          onChange={(event) => this.handelChange(event)}
        />
        <input
          placeholder='time'
          name='time'
          value={this.state.time}
          onChange={(event) => this.handelChange(event)}
        />
        <input
          placeholder='number'
          name='number'
          value={this.state.number}
          onChange={(event) => this.handelChange(event)}
        />
        <button onClick={(event) => this.submitReservation(event)}>Submit</button>
      </form>
    )
  }
}

export default Form;
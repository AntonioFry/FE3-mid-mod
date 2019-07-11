import React from 'react';
import Card from './Card'
import './Reservations.css';

const Reservations = ({ reservations }) => {
  const allReservations = reservations.map(res => {
    return (
      <Card
        id={res.id}
        date={res.date}
        name={res.name}
        time={res.time}
        number={res.number}
      />
    )
  })
  return (
    <div className="resy-container">
      {allReservations}
    </div>
  )
}

export default Reservations;
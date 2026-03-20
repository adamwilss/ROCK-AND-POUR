'use client';
import React from 'react';
import Link from 'next/link';

const events = [
  {
    id: 1,
    bandName: 'Steven and the Holy Heathens',
    date: 'April 10',
    soldOut: false
  },
  {
    id: 2,
    bandName: 'Velvet Thunder',
    date: 'May 15',
    soldOut: false
  },
  {
    id: 3,
    bandName: 'Electric Rebels',
    date: 'June 20',
    soldOut: true
  }
];

export default function Events() {
  return (
    <main className="events-page section">
      <div className="container">
        <h1 className="page-h1">Upcoming Rock & Pour Events</h1>
        <p>Live music and all-inclusive drinks at The Bowdon Rooms. £55 per ticket covers everything.</p>

        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h2>{event.bandName}</h2>
            <p>{event.date}</p>
            {event.soldOut ? <p>Sold Out</p> : <p>Tickets Available</p>}
          </div>
        ))}

        <a href="https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/" target="_blank" rel="noreferrer" className="btn btn-gold btn-large">
          GET YOUR TICKETS
        </a>
      </div>
    </main>
  );
}

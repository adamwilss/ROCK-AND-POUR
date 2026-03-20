'use client';
import React from 'react';
import Link from 'next/link';

export default function TheExperience() {
  return (
    <main className="experience-page section">
      <div className="container">
        {/* Hero */}
        <div className="exp-hero scroll-reveal">
          <h1 className="page-h1">The Rock & Pour Experience</h1>
          <p className="page-subtitle">Every detail designed for an unforgettable night</p>
        </div>

        {/* What to Expect */}
        <section className="exp-section scroll-reveal">
          <h2>What to Expect When You Arrive</h2>
          <p>Walking into Rock & Pour is fundamentally different from a normal night out. There's no entrance anxiety. No "where should we go next?" No budget stress. The entire evening is already designed for you.</p>
          <p>You arrive at The Bowdon Rooms, hand over your £55 ticket, and immediately feel the difference. The energy is electric. A live band is on stage. The bar is fully stocked with premium spirits, beers, and wines. Your friends are all in one place. And you already know exactly what this night will cost you.</p>
        </section>

        {/* The Drinks */}
        <section className="exp-section scroll-reveal">
          <h2>Premium Drinks — All Night, All Included</h2>
          <p>Your ticket covers unlimited premium drinks throughout the entire event. This isn't a venue serving cheap spirits and weak lagers. Every drink is carefully selected:</p>
          <ul className="drinks-list">
            <li><strong>Beers:</strong> Murphy's Irish Stout, Moretti, and rotating craft selections</li>
            <li><strong>Spirits:</strong> Gordon's Gin (0% and regular), premium vodkas, rums, whiskeys, and liqueurs</li>
            <li><strong>Wines:</strong> Red, white, rosé, and sparkling options</li>
            <li><strong>Non-Alcoholic:</strong> Soft drinks and premium mixers</li>
          </ul>
          <p>Explore our <Link href="/premium-selection" className="gold-link">complete drinks selection</Link> to see everything available.</p>
        </section>

        {/* The Band */}
        <section className="exp-section scroll-reveal">
          <h2>Live Bands Playing All Night</h2>
          <p>Rock & Pour features outstanding live musicians performing indie rock, Britpop, 90s classics, and modern sing-alongs. Every band is selected for energy, talent, and their ability to keep the crowd engaged throughout the evening.</p>
          <p>Unlike venue-hopping where you catch 20 minutes of music at each place, here you get a full, immersive musical experience from one incredible live band. The setlist is designed to evolve throughout the night — building energy, hitting the nostalgia points, and creating moments that stick with you long after.</p>
        </section>

        {/* The Atmosphere */}
        <section className="exp-section scroll-reveal">
          <h2>The Atmosphere & Energy</h2>
          <p>The Bowdon Rooms is carefully curated as the perfect venue for this experience. It's intimate enough to feel like your group owns the place, but large enough (300 capacity) to create genuine energy and buzz. Everyone there paid the same price and made the same choice: to commit to one incredible night.</p>
          <p>This shared commitment creates a unique atmosphere. There's no "trying to figure out where to next" energy. No people checking their phones worrying about the bill. Just pure, unapologetic fun. Sing along. Dance. Celebrate with strangers who feel like mates by midnight. This is what a proper night out should feel like.</p>
        </section>

        {/* The Timeline */}
        <section className="exp-section scroll-reveal">
          <h2>A Typical Rock & Pour Timeline</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>7:30 PM — Doors Open</h3>
              <p>Arrive whenever you want. No queues. Grab a drink. Post up. The band starts soon.</p>
            </div>
            <div className="timeline-item">
              <h3>8:00 PM — Band Takes Stage</h3>
              <p>Lights dim. The live band launches into their opening set. Energy immediately cranks up.</p>
            </div>
            <div className="timeline-item">
              <h3>8:00 PM – 11:30 PM — The Experience</h3>
              <p>Non-stop music. Unlimited drinks. Your group stays together all night. No decisions except which drink to grab next.</p>
            </div>
            <div className="timeline-item">
              <h3>11:30 PM — Final Moments</h3>
              <p>The band plays their final songs. You're exhausted, happy, and already planning the next Rock & Pour event.</p>
            </div>
          </div>
        </section>

        {/* Why It's Different */}
        <section className="exp-section scroll-reveal">
          <h2>Why Rock & Pour is Different from a Normal Night Out</h2>
          <p>A typical Manchester night out costs £60–£120+, requires constant decision-making, and leaves you with fragmented memories and financial regret. Rock & Pour flips this entirely:</p>
          <table className="comparison-simple">
            <tbody>
              <tr>
                <td><strong>Normal Night Out</strong></td>
                <td><strong>Rock & Pour</strong></td>
              </tr>
              <tr>
                <td>Multiple venues, getting lost</td>
                <td>One incredible venue, everyone together</td>
              </tr>
              <tr>
                <td>£60–£120+ total spend</td>
                <td>£55 fixed, everything included</td>
              </tr>
              <tr>
                <td>Constantly checking the bill</td>
                <td>Zero money stress</td>
              </tr>
              <tr>
                <td>Hit or miss atmosphere</td>
                <td>Guaranteed energy & live music</td>
              </tr>
              <tr>
                <td>People split up / lost</td>
                <td>Your whole group stays together</td>
              </tr>
              <tr>
                <td>End feeling: "Where did all my money go?"</td>
                <td>End feeling: "That was incredible"</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* How to Prepare */}
        <section className="exp-section scroll-reveal">
          <h2>How to Prepare for Rock & Pour</h2>
          <ul className="prep-list">
            <li><strong>Get your tickets early</strong> — Events sell out fast. <a href="https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/" target="_blank" rel="noreferrer" className="gold-link">Grab tickets on Skiddle</a> or call the box office</li>
            <li><strong>Wear something you can move in</strong> — You'll be dancing, so comfort is key</li>
            <li><strong>Bring your crew</strong> — Rock & Pour is even better with mates</li>
            <li><strong>Arrive early</strong> — Get settled before the band starts, grab your first drink</li>
            <li><strong>Check our house rules</strong> — <Link href="/house-rules" className="gold-link">Learn what's included and venue guidelines</Link></li>
          </ul>
        </section>

        {/* CTA */}
        <section className="exp-cta scroll-reveal text-center">
          <h2>Ready for an Unforgettable Night?</h2>
          <p>Browse upcoming <Link href="/events" className="gold-link">Rock & Pour events</Link> and secure your spot now.</p>
          <a href="https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/" target="_blank" rel="noreferrer" className="btn btn-gold btn-large">
            GET YOUR TICKETS — £55
          </a>
        </section>
      </div>
    </main>
  );
}

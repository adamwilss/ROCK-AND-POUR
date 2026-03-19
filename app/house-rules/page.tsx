import type { Metadata } from "next";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const metadata: Metadata = {
  title: "House Rules | Rock & Pour",
  description: "The Rock & Pour house rules — what's included, how drinks are served, and what to expect on the night.",
  alternates: { canonical: "/house-rules" },
};

export default function HouseRules() {
  return (
    <main className="house-rules-page">
      <section className="house-rules-hero">
        <div className="container text-center">
          <p className="section-overline">Before You Arrive</p>
          <h1 className="house-rules-title">House <span className="gold-text">Rules</span></h1>
          <div className="gold-divider"><span className="gold-diamond" /></div>
          <p className="house-rules-intro">
            Rock &amp; Pour is built on transparency. Here&apos;s exactly how the night works.
          </p>
        </div>
      </section>

      <section className="house-rules-rules section">
        <div className="container">
          <div className="rules-grid">
            <div className="rule-card" style={{ position: 'relative' }}>
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="rule-number">01</div>
              <h3>Wine by the Glass</h3>
              <p>Wine is served by the glass — not by the bottle. This keeps service fair and consistent for everyone in the room.</p>
            </div>
            <div className="rule-card" style={{ position: 'relative' }}>
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="rule-number">02</div>
              <h3>Spirits as Singles</h3>
              <p>All spirits are served as single measures. Doubles and extras are not included in the all-inclusive offer.</p>
            </div>
            <div className="rule-card" style={{ position: 'relative' }}>
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="rule-number">03</div>
              <h3>Shots Not Included</h3>
              <p>Shots are not part of the inclusive offer. They&apos;re available at the bar at an additional cost if you want them.</p>
            </div>
            <div className="rule-card" style={{ position: 'relative' }}>
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="rule-number">04</div>
              <h3>One Ticket. Everything Else Included.</h3>
              <p>Your £55 ticket covers entry, the live band, and unlimited beer, wine, spirits and soft drinks for the duration of the event.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="house-rules-cta section dark-bg">
        <div className="container text-center">
          <h2 className="section-title">Ready to <span className="gold-text">Book?</span></h2>
          <p className="section-subtitle">All the rules, all the value — sorted before you arrive.</p>
          <a href="https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/" target="_blank" rel="noreferrer" className="btn btn-gold btn-large">
            GET YOUR TICKETS — £55
          </a>
          <p className="box-office-link">Or call the box office — <a href="tel:01619268992">0161 926 8992</a> — to save £10</p>
          <p style={{ marginTop: '2rem' }}>
            <a href="/" className="gold-text">← Back to Rock &amp; Pour</a>
          </p>
        </div>
      </section>
    </main>
  );
}

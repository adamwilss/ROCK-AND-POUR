import type { Metadata } from "next";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Beer, Wine, Sparkles, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Premium Selection | Rock & Pour",
  description: "Explore our full range of premium draught beers, wines, spirits and soft drinks — all included in your ticket.",
  alternates: { canonical: "/premium-selection" },
};

export default function PremiumSelection() {
  return (
    <main className="premium-selection-page">
      {/* Premium Drinks Offerings */}
      <section className="drinks section dark-bg">
        <div className="container text-center scroll-reveal">
          <p className="section-overline">All Included</p>
          <h2 className="section-title">The <span className="gold-text">Premium</span> Selection</h2>
          <div className="gold-divider"><span className="gold-diamond" /></div>
          <p className="section-subtitle">Everything in your glass, all night. One price. No bar tab. No compromise.</p>
          <div className="drinks-grid">
            <div className="drink-card scroll-reveal delay-1">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="drink-card-accent" />
              <div className="drink-icon"><Beer size={36} strokeWidth={1.25} /></div>
              <h3>Premium Draught</h3>
              <p>Moretti, Cruz Campo &amp; Murphy&apos;s — poured properly, all night long.</p>
            </div>
            <div className="drink-card scroll-reveal delay-2">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="drink-card-accent" />
              <div className="drink-icon"><Wine size={36} strokeWidth={1.25} /></div>
              <h3>Fine Wines</h3>
              <p>Sauvignon Blanc, quality reds &amp; rosés — proper wines served with care.</p>
            </div>
            <div className="drink-card scroll-reveal delay-3">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="drink-card-accent" />
              <div className="drink-icon"><Sparkles size={36} strokeWidth={1.25} /></div>
              <h3>Prosecco</h3>
              <p>Premium prosecco flowing all evening — because every great night deserves a toast.</p>
            </div>
            <div className="drink-card scroll-reveal delay-4">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="drink-card-accent" />
              <div className="drink-icon"><Flame size={36} strokeWidth={1.25} /></div>
              <h3>Premium Spirits</h3>
              <p>Branded whiskeys, vodkas, brandies &amp; gins — the full top-shelf experience.</p>
            </div>
          </div>
          <p className="drinks-inclusive-note">All of the above — unlimited — included in your single £55 entry ticket.</p>
        </div>
      </section>

      {/* On Tap All Night — Hero Section */}
      <section className="on-tap-hero section dark-bg">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>On Tap <span className="gold-text">All Night</span></h2>
          <div className="on-tap-grid scroll-reveal">
            <div className="on-tap-card on-tap-primary">
              <div className="on-tap-badge">ON TAP ALL NIGHT</div>
              <div className="on-tap-logo-wrapper">
                <img src="/brands/murphys-logo.png" alt="Murphy's Irish Stout" className="on-tap-logo" />
              </div>
              <h3>Murphy&apos;s<br />Neck Oil</h3>
              <p>Fresh, hoppy, all night long</p>
            </div>
            <div className="on-tap-card on-tap-primary">
              <div className="on-tap-badge">ON TAP ALL NIGHT</div>
              <div className="on-tap-logo-wrapper">
                <img src="/brands/moretti-logo.png" alt="Birra Moretti" className="on-tap-logo" />
              </div>
              <h3>Moretti</h3>
              <p>Classic Italian lager, poured cold</p>
            </div>
          </div>
          <p className="on-tap-note scroll-reveal">Plus Damn Lemon, Cruz Campo, Guinness &amp; more on draft</p>
          <div className="on-tap-secondary-row scroll-reveal">
            <div className="on-tap-secondary-card">
              <img src="/brands/beavertown-logo.png" alt="Beavertown Neck Oil" className="on-tap-secondary-logo" />
              <p>Beavertown Neck Oil</p>
            </div>
            <div className="on-tap-secondary-card">
              <img src="/brands/cruzcampo-logo.png" alt="Cruz Campo" className="on-tap-secondary-logo" />
              <p>Cruz Campo</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Drinks Showcase — Scrolling */}
      <section className="drinks-showcase section">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-overline">The Full Bar</p>
            <h2 className="section-title">Every <span className="gold-text">Brand</span> Included</h2>
          </div>
          <div className="drinks-scroll-wrapper">
            <div className="drinks-scroll">
              <div className="drink-badge drink-badge--featured">Murphy&apos;s Neck Oil</div>
              <div className="drink-badge drink-badge--featured">Moretti</div>
              <div className="drink-badge">Damn Lemon</div>
              <div className="drink-badge">Cruz Campo</div>
              <div className="drink-badge">Guinness</div>
              <div className="drink-badge">Guinness Zero</div>
              <div className="drink-badge">Budweiser</div>
              <div className="drink-badge">Corona</div>
              <div className="drink-badge">Stella</div>
              <div className="drink-badge">Peroni Zero</div>
              <div className="drink-badge">Gordon&apos;s 0%</div>
              <div className="drink-badge">Gordon&apos;s Dry</div>
              <div className="drink-badge">White Peach</div>
              <div className="drink-badge">Beefeater</div>
              <div className="drink-badge">Whitley Gin</div>
              <div className="drink-badge">Aperol</div>
              <div className="drink-badge">Disaronno</div>
              <div className="drink-badge">Velvet</div>
              <div className="drink-badge">Malibu</div>
              <div className="drink-badge">Bacardi</div>
              <div className="drink-badge">Havana Club</div>
              <div className="drink-badge">Absolut Citrus</div>
              <div className="drink-badge">Absolut Vanilla</div>
              <div className="drink-badge">Captain Morgan</div>
              <div className="drink-badge">Kraken</div>
              <div className="drink-badge">Jameson</div>
              <div className="drink-badge">Jack Daniels</div>
              <div className="drink-badge">Southern Comfort</div>
              <div className="drink-badge">Kopparberg</div>
              <div className="drink-badge">J2O</div>
              <div className="drink-badge">Fanta</div>
              <div className="drink-badge">Pink Ting</div>
              <div className="drink-badge">Rioja</div>
              <div className="drink-badge">Shiraz</div>
              <div className="drink-badge">Malbec</div>
              <div className="drink-badge">Prosecco</div>
              <div className="drink-badge">Pinot Grigio</div>
              <div className="drink-badge">Chardonnay</div>
              <div className="drink-badge">Rosé</div>
              {/* Duplicate for seamless scroll */}
              <div className="drink-badge drink-badge--featured">Murphy&apos;s Neck Oil</div>
              <div className="drink-badge drink-badge--featured">Moretti</div>
              <div className="drink-badge">Damn Lemon</div>
              <div className="drink-badge">Cruz Campo</div>
              <div className="drink-badge">Guinness</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Back */}
      <section className="premium-cta section dark-bg">
        <div className="container text-center">
          <h2 className="section-title">Ready to Experience <span className="gold-text">It All?</span></h2>
          <a href="https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/" target="_blank" rel="noreferrer" className="btn btn-gold btn-large">
            GET YOUR TICKETS — £55
          </a>
          <p className="box-office-note">Or call the box office and save £10 — <a href="tel:01619268992">0161 926 8992</a></p>
          <p style={{ marginTop: '2rem' }}>
            <a href="/" className="gold-text">← Back to Rock &amp; Pour</a>
          </p>
        </div>
      </section>
    </main>
  );
}

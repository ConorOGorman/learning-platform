import React from 'react'
import '../styles/globals.css'
import Logo from '../components/Logo'
import heroPhoto from '../Images/photo-1756728904482-d29687b9f2a8.avif'
import mechanicPhoto from '../Images/Motorcycle Mechanic .avif'
import facebookImage from '../Images/Facebook Image.png'

export default function LandingPagePartsHub(): JSX.Element {
  return (
    <div className="ph-page">
      {/* NAVBAR */}
      <header className="ph-nav-wrap">
        <div className="ph-nav-inner ph-shell">
          <a href="#top" className="ph-logo-link">
            <div className="ph-logo">
              <div className="ph-logo-mark" aria-hidden>
                <Logo />
              </div>
              <span className="ph-logo-text">PartsHub</span>
            </div>
          </a>
          <nav className="ph-nav-links" aria-label="Primary">
            <a href="#how-it-works">How it works</a>
            <a href="#problems">Why it&apos;s hard today</a>
            <a href="#benefits">What you get</a>
            <a href="#who-it-s-for">Who it&apos;s for</a>
          </nav>
          <div className="ph-nav-cta">
            <a href="#early-access" className="ph-btn ph-btn-primary">
              Get early access
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="ph-section ph-hero" id="top">
          <div className="ph-shell ph-hero-grid">
            <div className="ph-hero-copy">
              <p className="ph-eyebrow">
                Used motorcycle parts, without the guesswork.
              </p>
              <h1>
                Find the right part{' '}
                <span className="ph-accent">first time</span>, from riders and
                breakers you can trust.
              </h1>
              <p className="ph-hero-body">
                PartsHub is a high-trust marketplace for used motorcycle parts.
                Filter by bike, see total price including shipping and fees, and
                pay safely with protection built in.
              </p>
              <div className="ph-hero-actions">
                <a href="#early-access" className="ph-btn ph-btn-primary ph-btn-lg">
                  Get early access
                </a>
                <a href="#how-it-works" className="ph-btn ph-btn-outline ph-btn-lg">
                  Learn more
                </a>
              </div>
              <p className="ph-hero-footnote">
                Launching first in the EU &amp; UK. Designed for DIY riders,
                garages, and breakers.
              </p>
            </div>
            <div className="ph-hero-visual">
              <img
                src={heroPhoto}
                alt="Two riders on a blue motorcycle on the road"
                className="ph-hero-image"
              />
            </div>
          </div>
        </section>

        {/* PAIN → RELIEF SECTION (Branch-style dark band with image + copy) */}
        <section className="ph-section ph-section-problems" id="problems">
          <div className="ph-shell ph-problems-grid">
            <div className="ph-problems-image">
              <img
                src={facebookImage}
                alt="Screenshot of Facebook posts about buying motorcycle parts"
                className="ph-problems-image-img"
              />
            </div>
            <div className="ph-problems-copy">
              <div className="ph-section-header ph-section-header-tight">
                <p className="ph-eyebrow">Why riders need something better</p>
                <h2>The current way to buy used parts wastes time and trust.</h2>
                <p className="ph-lead">
                  Facebook groups, forums, and random marketplaces are “good
                  enough” until you need a rare, expensive, or safety-critical
                  part. Then the cracks start to show.
                </p>
              </div>
              <div className="ph-problems-list">
                <article className="ph-problem">
                  <h3>Endless searching &amp; messaging</h3>
                  <p>
                    Riders spend days jumping between groups, eBay, and forums,
                    sending the same &quot;still available?&quot; and &quot;will
                    this fit my bike?&quot; messages over and over.
                  </p>
                  <p className="ph-problem-meta">
                    Verified in 20+ interviews across EU, UK, and Vietnam.
                  </p>
                </article>
                <article className="ph-problem">
                  <h3>Unclear fitment and hidden costs</h3>
                  <p>
                    Listings often lack part numbers, decent photos, or
                    compatibility info. Shipping, fees, and taxes are rarely
                    clear up front, so “cheap” parts become expensive fast.
                  </p>
                  <p className="ph-problem-meta">
                    Fitment, shipping, and total price were top 3 pains
                    reported.
                  </p>
                </article>
                <article className="ph-problem">
                  <h3>Low buyer protection, high risk</h3>
                  <p>
                    Informal payments and weak refund options mean that if a
                    seller disappears or the part is wrong, you eat the loss.
                    That&apos;s fine for a mirror, not for a €600 ECU.
                  </p>
                  <p className="ph-problem-meta">
                    Riders said they would pay a small fee for built-in
                    protection.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="ph-section" id="how-it-works">
          <div className="ph-shell">
            <div className="ph-section-header">
              <p className="ph-eyebrow">How PartsHub works</p>
              <h2>
                From &quot;I think this fits&quot; to verified, protected
                purchases.
              </h2>
              <p className="ph-lead">
                PartsHub combines compatibility filters, transparent pricing, and
                escrow-style transactions so you know exactly what you are
                buying, who you are buying from, and what it will really cost.
              </p>
            </div>
            <div className="ph-diff-row">
              <article className="ph-diff-item">
                <h3>Step 1 · Filter by your exact bike</h3>
                <p>
                  Enter your bike (make, model, year) once. We show only
                  compatible listings, with part numbers and community-verified
                  fitment where available.
                </p>
              </article>
              <article className="ph-diff-item">
                <h3>Step 2 · See total to-your-door price</h3>
                <p>
                  Each listing displays a clear cost breakdown: part price,
                  taxes, insured shipping, and fees. No hidden surprises at
                  checkout or in chat.
                </p>
              </article>
              <article className="ph-diff-item">
                <h3>Step 3 · Pay with built-in protection</h3>
                <p>
                  Payments are held in escrow until you confirm the part arrived
                  as described. If something goes wrong, you&apos;re covered by
                  our dispute and refund flow.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* WHAT'S IN IT FOR THE USER (Branch-style difference row) */}
        <section className="ph-section ph-section-benefits" id="benefits">
          <div className="ph-shell">
            <div className="ph-section-header">
              <p className="ph-eyebrow">What&apos;s in it for you</p>
              <h2>Less time chasing parts. More time riding.</h2>
              <p className="ph-lead">
                Whether you&apos;re keeping a 90s tourer alive or flipping
                bikes on weekends, PartsHub is built to remove uncertainty, not
                the human side of the community.
              </p>
            </div>
            <div className="ph-diff-row">
              <article className="ph-diff-item">
                <h3>Save hours per part</h3>
                <p>
                  No more bouncing between groups and apps. Save searches, set
                  alerts, and let verified sellers come to you when the right
                  parts appear.
                </p>
              </article>
              <article className="ph-diff-item">
                <h3>Buy and sell with confidence</h3>
                <p>
                  Trust scores, reviews, and ID-verified sellers reduce risk on
                  big-ticket items. Good actors stand out. Bad actors don&apos;t
                  last.
                </p>
              </article>
              <article className="ph-diff-item">
                <h3>Support reuse, not landfill</h3>
                <p>
                  Every safe used part that finds a second life keeps one more
                  bike on the road and one less component in the scrap pile.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="ph-section" id="who-it-s-for">
          <div className="ph-shell ph-two-col">
            <div>
              <div className="ph-section-header ph-section-header-tight">
                <p className="ph-eyebrow">Who PartsHub is for</p>
                <h2>Designed around three core user groups.</h2>
                <p className="ph-lead">
                  We started by interviewing DIY riders, garages, and private
                  sellers across EU, UK, and beyond. PartsHub combines what they
                  all asked for.
                </p>
              </div>
              <ul className="ph-list">
                <li>
                  <h3>DIY riders</h3>
                  <p>
                    Need trustworthy parts and clear fitment at a fair price.
                    They value time saved much more than saving the last €5.
                  </p>
                </li>
                <li>
                  <h3>Workshops &amp; garages</h3>
                  <p>
                    Care about reliability, invoices, and predictable delivery
                    times. PartsHub gives them a structured place to source and
                    offload stock.
                  </p>
                </li>
                <li>
                  <h3>Breakers &amp; private sellers</h3>
                  <p>
                    Want to turn spares into cash quickly without dealing with
                    tire-kickers or scams. Verified listings and escrow make
                    serious buyers easier to spot.
                  </p>
                </li>
              </ul>
            </div>
            <div className="ph-two-col-visual">
              <img
                src={mechanicPhoto}
                alt="Motorcycle mechanic working on a bike"
                className="ph-two-col-image"
              />
            </div>
          </div>
        </section>

        {/* EARLY ACCESS FORM */}
        <section className="ph-section ph-section-alt" id="early-access">
          <div className="ph-shell ph-cta-grid">
            <div>
              <p className="ph-eyebrow">Get on the shortlist</p>
              <h2>Be the first to test PartsHub in your country.</h2>
              <p className="ph-lead">
                We&apos;re starting with a closed beta focused on EU &amp; UK.
                Tell us who you are and how you buy/sell parts, and we&apos;ll
                follow up with a tailored invite.
              </p>
              <ul className="ph-list ph-list-check">
                <li>Priority access to the private beta.</li>
                <li>Quarterly progress updates and feature sneak peeks.</li>
                <li>Direct line to the team to influence what we build.</li>
              </ul>
            </div>
            <form
              className="ph-form"
              action="https://formspree.io/f/xangawoy"
              method="POST"
            >
              <div className="ph-form-row">
                <div className="ph-field">
                  <label htmlFor="firstName">First name</label>
                  <input id="firstName" name="firstName" placeholder="Alex" />
                </div>
                <div className="ph-field">
                  <label htmlFor="lastName">Last name</label>
                  <input id="lastName" name="lastName" placeholder="Jansen" />
                </div>
              </div>
              <div className="ph-form-row">
                <div className="ph-field">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              <div className="ph-form-row">
                <div className="ph-field">
                  <label htmlFor="country">Country</label>
                  <select id="country" name="country" defaultValue="">
                    <option value="" disabled>
                      Select your country
                    </option>
                    <option value="nl">Netherlands</option>
                    <option value="ie">Ireland</option>
                    <option value="uk">United Kingdom</option>
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
                    <option value="other-eu">Other EU country</option>
                    <option value="other">Outside EU / UK</option>
                  </select>
                </div>
                <div className="ph-field">
                  <label htmlFor="userType">You are a…</label>
                  <select id="userType" name="userType" defaultValue="">
                    <option value="" disabled>
                      Choose one
                    </option>
                    <option value="diy">DIY rider</option>
                    <option value="garage">Garage / workshop</option>
                    <option value="breaker">Breaker / dismantler</option>
                    <option value="dealer">Dealer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="ph-form-row">
                <div className="ph-field">
                  <label htmlFor="useCase">
                    What would you use PartsHub for?
                  </label>
                  <textarea
                    id="useCase"
                    name="useCase"
                    rows={3}
                    placeholder="Keeping a 1998 CB750 alive, sourcing rare adventure parts, clearing out garage stock…"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="ph-btn ph-btn-primary ph-btn-lg ph-form-submit"
              >
                Request early access
              </button>
              <p className="ph-form-footnote">
                No spam. We&apos;ll only contact you about PartsHub and you can
                opt out anytime.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="ph-footer">
        <div className="ph-shell ph-footer-inner">
          <div className="ph-footer-brand">
            <a href="#top" className="ph-logo-link">
              <div className="ph-logo">
                <div className="ph-logo-mark" aria-hidden>
                  <Logo />
                </div>
                <span className="ph-logo-text">PartsHub</span>
              </div>
            </a>
            <p>
              A high-trust marketplace for used motorcycle parts. Built by
              riders who hate wasting time chasing parts as much as you do.
            </p>
          </div>
          <div className="ph-footer-columns">
            <div>
              <h3>Product</h3>
              <ul>
                <li>
                  <a href="#how-it-works">How it works</a>
                </li>
                <li>
                  <a href="#benefits">Benefits</a>
                </li>
                <li>
                  <a href="#who-it-s-for">Who it&apos;s for</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#early-access">Early access</a>
                </li>
                <li>
                  <a href="#top">Back to top</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Connect</h3>
              <ul>
                <li>
                  <a href="mailto:infopartshub25@gmail.com">infopartshub25@gmail.com</a>
                </li>
                <li>Instagram: PartsHub.25</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ph-footer-bottom">
          <div className="ph-shell ph-footer-bottom-inner">
            <p>
              © {new Date().getFullYear()} PartsHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

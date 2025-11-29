import React, {useState} from 'react'

export default function TopNav(): JSX.Element{
  const [open, setOpen] = useState(false)

  return (
    <header className="top-nav" role="banner">
      <div className="site-container top-nav-inner">
        <div style={{display:'flex',alignItems:'center',gap:18}}>
          <div className="logo">PartsHub</div>
        </div>

        <nav aria-label="Main navigation" className="nav-links">
          <a href="#how">How it works</a>
          <a href="#why">Why PartsHub</a>
          <a href="#sellers">For sellers</a>
          <a href="#contact">Contact</a>
        </nav>

        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <button className="cta-btn" aria-label="Get Early Access">Get Early Access</button>
          <button
            className="mobile-menu-button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={()=>setOpen(v=>!v)}
            title="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu panel */}
      <div
        id="mobile-menu"
        className="mobile-menu"
        style={{display: open ? 'block' : 'none', borderTop:'1px solid rgba(15,23,42,0.04)'}}
        aria-hidden={!open}
      >
        <div className="site-container" style={{paddingTop:12,paddingBottom:12,display:'flex',flexDirection:'column',gap:12}}>
          <a href="#how" tabIndex={open ? 0 : -1}>How it works</a>
          <a href="#why" tabIndex={open ? 0 : -1}>Why PartsHub</a>
          <a href="#sellers" tabIndex={open ? 0 : -1}>For sellers</a>
          <a href="#contact" tabIndex={open ? 0 : -1}>Contact</a>
        </div>
      </div>
    </header>
  )
}

import React from 'react'
import uploadIcon from '../../assets/upload-icon.svg'

export default function HeroSection(): JSX.Element{
  return (
    <section aria-labelledby="hero-heading" className="hero-grid">
      <div className="hero-left">
        <p style={{color:'var(--muted)',fontWeight:600,letterSpacing:0.6}}>Used motorcycle parts, done right.</p>
        <h1 id="hero-heading">Find verified parts that actually fit your bike.</h1>
        <p style={{color:'var(--muted)',maxWidth:640}}>PartsHub helps riders, garages and DIY mechanics find verified, compatible used motorcycle parts with transparent total pricing and buyer protection.</p>
        <div style={{display:'flex',gap:12,marginTop:20}}>
          <button className="cta-btn">Join Early Access</button>
          <button className="cta-ghost">How it works</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="placeholder-card" style={{height:320}}>
          <div style={{textAlign:'center'}}>
            <img src={uploadIcon} alt="upload icon" style={{width:56,height:56,opacity:0.95}} />
            <div style={{marginTop:10,color:'var(--muted)'}}>Hero image – rider &amp; bike</div>
          </div>
        </div>
      </div>
    </section>
  )
}

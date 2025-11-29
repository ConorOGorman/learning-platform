import React from 'react'

const BENEFITS = [
  {title:'Guaranteed fitment', body:'Only see parts that match your bike model and year.'},
  {title:'Buyer protection', body:'Funds are held securely until you confirm the part.'},
  {title:'Transparent total price', body:'See part + taxes + insured shipping up front.'},
  {title:'Built for riders & garages', body:'Designed around real-world parts workflows.'}
]

export default function BenefitsSection(): JSX.Element{
  return (
    <section aria-labelledby="benefits-heading" style={{marginTop:48}}>
      <p style={{color:'var(--muted)',fontWeight:600}}>Why PartsHub</p>
      <h2 id="benefits-heading">What’s in it for you</h2>
      <div className="benefit-grid">
        {BENEFITS.map(b => (
          <div className="benefit-item" key={b.title}>
            <div className="benefit-icon" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <div>
              <div style={{fontWeight:700}}>{b.title}</div>
              <div style={{color:'var(--muted)',marginTop:6}}>{b.body}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

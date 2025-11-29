import React from 'react'

const STEPS = [
  {title:'Enter your bike details', body:'Tell us the model, year and variant.'},
  {title:'Browse verified parts', body:'See parts with full price breakdown.'},
  {title:'Pay & track delivery', body:'Secure payment and insured shipping.'}
]

export default function HowItWorksSection(): JSX.Element{
  return (
    <section aria-labelledby="how-heading" style={{marginTop:48}}>
      <p style={{color:'var(--muted)',fontWeight:600}}>How it works</p>
      <h2 id="how-heading">Simple 3-step process</h2>
      <div className="steps">
        {STEPS.map((s, idx) => (
          <div className="step" key={s.title}>
            <div className="step-badge">{idx+1}</div>
            <div>
              <div style={{fontWeight:700}}>{s.title}</div>
              <div style={{color:'var(--muted)',marginTop:6}}>{s.body}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

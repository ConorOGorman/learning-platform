import React from 'react'

type Part = {
  id: string
  title: string
  bike: string
  condition: string
  price: string
}

const SAMPLE: Part[] = [
  {id:'1', title:'Honda CB750 Exhaust', bike:'Honda CB750 (1978)', condition:'Good — 12k miles', price:'$120'},
  {id:'2', title:'Yamaha XS650 Carburettor', bike:'Yamaha XS650 (1976)', condition:'Refurbished', price:'$95'},
  {id:'3', title:'Triumph Bonneville Seat', bike:'Triumph Bonneville (2005)', condition:'Used — minor scuffs', price:'$140'}
]

export default function LatestPartsSection(): JSX.Element{
  return (
    <section aria-labelledby="latest-heading" style={{marginTop:40}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <div>
          <h2 id="latest-heading" style={{margin:0}}>Latest parts from trusted sellers</h2>
          <div style={{marginTop:6,color:'var(--muted)'}}>Quick UI mock of recent listings.</div>
        </div>
        <div className="filters-row" aria-hidden>
          <div className="pill">Popular</div>
          <div className="pill">New</div>
          <div className="pill">Near you</div>
        </div>
      </div>

      <div className="card-grid">
        {SAMPLE.map(p => (
          <article key={p.id} className="part-card" aria-labelledby={`part-${p.id}`}>
            <div className="part-thumb" role="img" aria-label="Part image placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 5 17 10"/><line x1="12" y1="5" x2="12" y2="19"/></svg>
            </div>
            <div>
              <div id={`part-${p.id}`} className="part-title">{p.title}</div>
              <div className="part-meta">{p.bike} • {p.condition}</div>
            </div>
            <div className="part-actions">
              <div className="part-price">{p.price}</div>
              <button className="cta-ghost" aria-label={`View details for ${p.title}`}>View details</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

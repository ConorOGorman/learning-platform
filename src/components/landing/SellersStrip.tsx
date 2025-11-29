import React from 'react'

export default function SellersStrip(): JSX.Element{
  return (
    <section aria-labelledby="sellers-heading" style={{marginTop:48}}>
      <div className="sellers-strip">
        <div>
          <div id="sellers-heading" style={{fontWeight:700}}>For garages & breakers</div>
          <div className="sellers-list">
            <div>Faster, more reliable buyers.</div>
            <div>Clear listing standards.</div>
            <div>Bulk listing support.</div>
          </div>
        </div>
        <div>
          <button className="cta-ghost">Register as seller</button>
        </div>
      </div>
    </section>
  )
}

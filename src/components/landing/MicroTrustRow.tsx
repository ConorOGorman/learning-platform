import React from 'react'

const CHIPS = ['Buyer protection','Verified sellers','Secure payments','Insured shipping']

export default function MicroTrustRow(): JSX.Element{
  return (
    <div className="micro-trust" role="list" aria-label="Trust badges">
      {CHIPS.map(c=> (
        <div key={c} className="micro-chip" role="listitem">{c}</div>
      ))}
    </div>
  )
}

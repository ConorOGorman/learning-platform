import React from 'react'

export default function Footer(): JSX.Element{
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-container footer-grid">
        <div className="footer-col">
          <div style={{fontWeight:700}}>PartsHub</div>
          <div style={{color:'var(--muted)',marginTop:8}}>Trusted used motorcycle parts</div>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul style={{listStyle:'none',padding:0,margin:0,color:'var(--muted)'}}>
            <li>About</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <ul style={{listStyle:'none',padding:0,margin:0,color:'var(--muted)'}}>
            <li>FAQ</li>
            <li>How it works</li>
            <li>For sellers</li>
          </ul>
        </div>
      </div>

      <div style={{borderTop:'1px solid rgba(255,255,255,0.02)',marginTop:24,paddingTop:18}}>
        <div className="site-container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{color:'var(--muted)'}}>© {new Date().getFullYear()} PartsHub</div>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div style={{color:'var(--muted)',fontSize:13}}> <a href="/privacy" style={{color:'var(--muted)',textDecoration:'underline'}}>Privacy</a></div>
            <div className="social-row">
              <div style={{width:28,height:28,borderRadius:6,background:'rgba(15,23,42,0.03)'}} aria-hidden />
              <div style={{width:28,height:28,borderRadius:6,background:'rgba(15,23,42,0.03)'}} aria-hidden />
              <div style={{width:28,height:28,borderRadius:6,background:'rgba(15,23,42,0.03)'}} aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

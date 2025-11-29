import React from 'react'

export default function FinalCtaSection(): JSX.Element{
  return (
    <section aria-labelledby="final-cta-heading" style={{marginTop:48}}>
      <div className="final-cta">
        <div style={{flex:1}}>
          <h2 id="final-cta-heading">Be the first to get the right part</h2>
          <div style={{color:'var(--muted)',marginTop:8}}>Join the early access list for first-wave invites and discounts.</div>
        </div>

        <form
          className="final-form"
          onSubmit={(e)=>{
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const fd = new FormData(form);
            const data = Object.fromEntries(fd as any);
            const email = (data as any).email || '';
            const live = document.getElementById('form-status');
            const emailValid = /\S+@\S+\.\S+/.test(String(email));
            if(!emailValid){
              if(live) live.textContent = 'Please enter a valid email address.';
              const err = document.getElementById('form-error');
              if(err) err.removeAttribute('hidden');
              return;
            }
            if(live) live.textContent = 'Thanks — we\'ll be in touch!';
            form.reset();
          }}
        >
          <label htmlFor="firstName" className="sr-only">First name</label>
          <input id="firstName" name="firstName" placeholder="First name" aria-label="First name" />

          <label htmlFor="email" className="sr-only">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" aria-label="Email" required />

          <label htmlFor="country" className="sr-only">Country</label>
          <select id="country" name="country" aria-label="Country">
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="AU">Australia</option>
          </select>

          <button className="cta-btn" type="submit">Get Early Access</button>
          <div id="form-error" role="alert" style={{color:'#b91c1c',marginTop:8,display:'block'}} hidden>There was an error with your submission.</div>
          <div id="form-status" aria-live="polite" style={{color:'var(--muted)',marginTop:8}} />
        </form>
      </div>
    </section>
  )
}

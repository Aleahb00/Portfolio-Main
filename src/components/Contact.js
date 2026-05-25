'use client'
import { useState } from 'react'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle')

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')
        const res = await fetch('https://formspree.io/f/xwvzrqqd', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        })
        if (res.ok) {
            setStatus('success')
            setForm({ name: '', email: '', message: '' })
        } else {
            setStatus('error')
        }
    }

    return (
        <section id="contact">
            <div className="container">
                <span className="section-label reveal">Let's connect</span>
                <h2 className="section-title reveal">Early in the journey. Eager to contribute.</h2>
                <p className="section-subtitle reveal" style={{color: 'rgba(232,213,183,0.6)', marginTop: '10px'}}>Whether you have a project that needs building, an opportunity worth exploring, or just want to connect — I'm always open to a conversation.</p>

                <div className="contact-grid reveal">
                <form onSubmit={handleSubmit}>
                    <div className="contact-form-group">
                    <label className="contact-label">Name</label>
                    <input type="text" name="name" className="contact-input" placeholder="Your name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="contact-form-group">
                    <label className="contact-label">Email</label>
                    <input type="email" name="email" className="contact-input" placeholder="hello@you.com" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="contact-form-group">
                    <label className="contact-label">Message</label>
                    <textarea name="message" className="contact-input" placeholder="Tell me about your project..." value={form.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="btn-primary" style={{marginTop: '8px', width: '100%'}} disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending...' : 'Send Message ✦'}
                    </button>
                    {status === 'success' && <p style={{marginTop: '12px', color: '#a8c5a0', fontSize: '14px'}}>Message sent! I'll get back to you soon.</p>}
                    {status === 'error' && <p style={{marginTop: '12px', color: '#c57a7a', fontSize: '14px'}}>Something went wrong. Try emailing me directly.</p>}
                </form>

                <div className="contact-socials">
                    <h4>Find me here 👋</h4>
                    <p>I'm actively looking for opportunities and always happy to connect. Reach out anywhere that's easiest for you.</p>
                    <div className="social-links">
                    <a className="social-link" href="https://github.com/aleahb00" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon">🐙</div>
                        <div>
                        <div style={{fontWeight: '600', fontSize: '14px'}}>GitHub</div>
                        <div style={{fontSize: '12px', color: 'rgba(232,213,183,0.45)'}}>@Aleahb00</div>
                        </div>
                    </a>
                    <a className="social-link" href="https://www.linkedin.com/in/aleah-bean-831a6432b/" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon">💼</div>
                        <div>
                        <div style={{fontWeight: '600', fontSize: '14px'}}>LinkedIn</div>
                        <div style={{fontSize: '12px', color: 'rgba(232,213,183,0.45)'}}>Aleah Bean</div>
                        </div>
                    </a>
                    <a className="social-link" href="/Aleah_Bean.Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon">📄</div>
                        <div>
                        <div style={{fontWeight: '600', fontSize: '14px'}}>Resume</div>
                        <div style={{fontSize: '12px', color: 'rgba(232,213,183,0.45)'}}>Aleah Bean</div>
                        </div>
                    </a>
                    <a className="social-link" href="mailto:aleahb2824@gmail.com">
                        <div className="social-icon">✉️</div>
                        <div>
                        <div style={{fontWeight: '600', fontSize: '14px'}}>Email</div>
                        <div style={{fontSize: '12px', color: 'rgba(232,213,183,0.45)'}}>aleahb2824@gmail.com</div>
                        </div>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

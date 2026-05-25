'use client'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const close = () => setIsOpen(false)

    return (
        <nav id="navbar">
            <div className="nav-logo">Aleah<span>.</span></div>

            <button
                className={`nav-hamburger${isOpen ? ' open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <span /><span /><span />
            </button>

            <ul className={`nav-links${isOpen ? ' nav-open' : ''}`}>
                <li><a href="#about" onClick={close}>About</a></li>
                <li><a href="#skills" onClick={close}>Skills</a></li>
                <li><a href="#projects" onClick={close}>Work</a></li>
                <li><a href="#experience" onClick={close}>Journey</a></li>
                <li><a href="#contact" className="nav-cta" onClick={close}>Let's Talk</a></li>
            </ul>
        </nav>
    )
}

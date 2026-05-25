export default function Navbar() {
    return (
        <nav id="navbar">
            <div className="nav-logo">Aleah<span>.</span></div>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Work</a></li>
                <li><a href="#experience">Journey</a></li>
                <li><a href="#contact" className="nav-cta">Let's Talk</a></li>
            </ul>
        </nav>
    )
}
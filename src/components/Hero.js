export default function Hero() {
	return (
		<section id="hero">
            <div className="hero-orb orb1"></div>
            <div className="hero-orb orb2"></div>
            <div className="hero-orb orb3"></div>
            <div className="float-shape shape1"></div>
            <div className="float-shape shape2"></div>
            <div className="float-shape shape3"></div>

            <div className="hero-content">
                <div className="hero-badge">✦ Available for new projects</div>
                <h1 className="hero-name">Aleah <span className="accent">Bean</span></h1>
                <p className="hero-tagline">
                    Full-stack developer building real things while learning everything<br />
                    one project at a time.
                </p>
                <div className="hero-buttons">
                <a href="#projects" className="btn-primary">View My Work →</a>
                <a href="#contact" className="btn-outline">Get In Touch</a>
                </div>
            </div>

            <div className="hero-scroll">
                <div className="scroll-line"></div>
                <span>scroll</span>
            </div>
            </section>
	)
}

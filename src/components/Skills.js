export default function Skills() {
	return (
		<section id="skills">
            <div className="container">
                <span className="section-label reveal">Tech stack</span>
                <h2 className="section-title reveal">Tools of the trade</h2>
                <div className="warm-divider reveal"></div>

                <div className="skills-grid reveal">
                <div className="skill-category">
                    <div className="skill-cat-icon">🎨</div>
                    <div className="skill-cat-name">Frontend</div>
                    <div className="skill-pills">
                    <span className="skill-pill">React</span>
                    <span className="skill-pill">Next.js</span>
                    <span className="skill-pill">HTML</span>
                    <span className="skill-pill">CSS</span>
                    </div>
                </div>
                <div className="skill-category">
                    <div className="skill-cat-icon">⚙️</div>
                    <div className="skill-cat-name">Backend</div>
                    <div className="skill-pills">
                    <span className="skill-pill">Python</span>
                    <span className="skill-pill">Java</span>
                    <span className="skill-pill">PostgreSQL</span>
                    <span className="skill-pill">MongoDB</span>
                    <span className="skill-pill">SQLite</span>
                    <span className="skill-pill">Node.js</span>
                    </div>
                </div>
                {/* <div className="skill-category">
                    <div className="skill-cat-icon">🗄️</div>
                    <div className="skill-cat-name">Databases</div>
                    <div className="skill-pills">
                    <span className="skill-pill">PostgreSQL</span>
                    <span className="skill-pill">MongoDB</span>
                    <span className="skill-pill">SQLite</span>
                    </div>
                </div> */}
                {/* <div className="skill-category">
                    <div className="skill-cat-icon">☁️</div>
                    <div className="skill-cat-name">DevOps / Cloud</div>
                    <div className="skill-pills">
                    <span className="skill-pill">Docker</span>
                    <span className="skill-pill">Vercel</span>
                    </div>
                </div> */}
                <div className="skill-category">
                    <div className="skill-cat-icon">🔧</div>
                    <div className="skill-cat-name">Tools & Frameworks</div>
                    <div className="skill-pills">
                    <span className="skill-pill">Figma</span>
                    <span className="skill-pill">Git</span>
                    <span className="skill-pill">VS Code</span>
                    <span className="skill-pill">Canva</span>
                    <span className="skill-pill">Vercel</span>
                    <span className="skill-pill">Django</span>
                    <span className="skill-pill">Spring Boot</span>
                    </div>
                </div>
                </div>
            </div>
        </section>
	)
}

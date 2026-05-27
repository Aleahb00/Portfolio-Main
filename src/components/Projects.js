'use client'
import { useState } from 'react'

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all')

    const cardStyle = (cats) =>
        activeFilter === 'all' || cats.includes(activeFilter)
            ? {}
            : { opacity: '0.2', transform: 'scale(0.97)' }

    const projects = [ 
        {
            title: 'Esthetician Portfolio',
            desc: 'A mock portfolio for an esthetician who offers braid styling and nail services — small-business style site with a polished layout, animated details, service information, and a simple gallery.',
            stack: ['React', 'Vite', 'Node.js'],
            tags: ['frontend', 'ui/ux'],
            liveDemo: 'https://aleahb00.github.io/esthetician-portfolio/',
            github: 'https://github.com/Aleahb00/esthetician-portfolio.git'
        },
        {
            title: 'PawCare',
            desc: 'A pet care platform to make pet management easier for owners — Featuring pet profiles, vet appointment management, vaccination records, and a community forum.',
            stack: ['Django', 'SQLite', 'Vercel'],
            tags: ['fullstack'],
            liveDemo: 'https://pawcare-site.up.railway.app/',
            github: 'https://github.com/Aleahb00/PawCare.git'
        },
        {
            title: 'Volunteer Tracking',
            desc: 'Full-stack Django volunteer tracking system for ER Assist — enabling user submitted work forms with an admin interface to manage, analyze, and export data supporting FEMA grant reporting during the 2026 ice storm response.',
            stack: ['Django', 'SQLite', 'Vercel'],
            tags: ['fullstack'],
            liveDemo: 'null',
            github: 'https://github.com/Aleahb00/VolunteerTracking.git'
        }
    ]

    return (
        <section id="projects">
            <div className="container">
                <span className="section-label reveal">Selected work</span>
                <h2 className="section-title reveal">Projects</h2>
                <div className="warm-divider reveal"></div>

                <div className="filter-tabs reveal" id="filterTabs">
                <button className={`filter-tab${activeFilter === 'all' ? ' active' : ''}`} onClick={() => setActiveFilter('all')}>All</button>
                <button className={`filter-tab${activeFilter === 'fullstack' ? ' active' : ''}`} onClick={() => setActiveFilter('fullstack')}>Full Stack</button>
                <button className={`filter-tab${activeFilter === 'frontend' ? ' active' : ''}`} onClick={() => setActiveFilter('frontend')}>Frontend</button>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card reveal" data-cat={project.tags.join(' ')} style={cardStyle(project.tags.join(' '))}>
                            <div className={`project-preview project-preview-${index + 1}`}>
                                <div className="project-preview-mock">
                                    <div className="mock-window">
                                        <div className="mock-toolbar"><div className="mock-dot d1"></div><div className="mock-dot d2"></div><div className="mock-dot d3"></div></div>
                                        <div className="mock-bar w80"></div>
                                        <div className="mock-bar w90"></div>
                                        <div className="mock-bar w60"></div>
                                        <div className="mock-bar w80"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-tag">{project.tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1)).join(' ✦ ')}</div>
                            <div className="project-body">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                                <div className="project-stack">
                                    {project.stack.map((tech, idx) => (
                                        <span key={idx} className="stack-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.liveDemo && project.liveDemo !== 'null' && (
                                        <a className="project-link link-dark" href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo →</a>
                                    )}
                                    {project.github && project.github !== 'null' && (
                                        <a className="project-link link-outline" href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>  
    )
}

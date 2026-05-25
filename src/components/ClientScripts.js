'use client'
import { useEffect } from 'react'

export default function ClientScripts() {
    useEffect(() => {
        const glow = document.getElementById('mouse-glow')
        if (glow) {
            const onMove = (e) => {
                glow.style.left = e.clientX + 'px'
                glow.style.top = e.clientY + 'px'
            }
            document.addEventListener('mousemove', onMove)
            return () => document.removeEventListener('mousemove', onMove)
        }
    }, [])

    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal')
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((e, i) => {
                if (e.isIntersecting) {
                    setTimeout(() => e.target.classList.add('visible'), i * 60)
                    observer.unobserve(e.target)
                }
            })
        }, { threshold: 0.1 })
        reveals.forEach((r) => observer.observe(r))
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]')
        const onClick = (e) => {
            e.preventDefault()
            const target = document.querySelector(e.currentTarget.getAttribute('href'))
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        links.forEach((link) => link.addEventListener('click', onClick))
        return () => links.forEach((link) => link.removeEventListener('click', onClick))
    }, [])

    return null
}

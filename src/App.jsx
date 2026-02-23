import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Palette, ShoppingBag, Sparkles, Eye, Brush, Layers, ChevronDown } from 'lucide-react'
import heroAnimation from '../animation.mp4'

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════════
   NAVBAR — "The Floating Island"
   ═══════════════════════════════════════════════ */
function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(navRef.current, {
                y: -80,
                opacity: 0,
                duration: 1.2,
                delay: 0.5,
                ease: 'power3.out',
            })
        })
        return () => ctx.revert()
    }, [])

    return (
        <nav
            ref={navRef}
            className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 px-8 md:px-10 py-4 flex items-center gap-6 md:gap-10 transition-all duration-700 ${scrolled
                ? 'bg-obsidian/70 backdrop-blur-xl border border-white/10 shadow-2xl'
                : 'bg-transparent border border-transparent'
                }`}
            style={{ borderRadius: '3rem' }}
        >
            <a href="#hero" className="font-drama italic text-xl text-champagne tracking-wide hover-lift inline-block">
                Flo M
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wider whitespace-nowrap">
                <a href="#univers" className="hover:text-champagne transition-colors hover-lift inline-block">Univers</a>
                <a href="#demarche" className="hover:text-champagne transition-colors hover-lift inline-block">Démarche</a>
                <a href="#processus" className="hover:text-champagne transition-colors hover-lift inline-block">Processus</a>
                <a href="#explorer" className="hover:text-champagne transition-colors hover-lift inline-block">Explorer</a>
            </div>
            <a
                href="https://floplasticienne.wixsite.com/flom?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic bg-champagne text-obsidian px-5 py-2 text-sm font-semibold tracking-wide flex items-center gap-2"
                style={{ borderRadius: '2rem' }}
            >
                <span className="btn-bg bg-ivory"></span>
                <span className="flex items-center gap-2">Galerie <ArrowUpRight size={14} /></span>
            </a>
        </nav>
    )
}

/* ═══════════════════════════════════════════════
   HERO — "The Opening Shot"
   ═══════════════════════════════════════════════ */
function Hero() {
    const heroRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.8 })
            tl.from('.hero-line-1', { y: 60, opacity: 0, duration: 1, ease: 'power3.out' })
                .from('.hero-line-2', { y: 60, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
                .from('.hero-sub', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
                .from('.hero-cta', { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, '-=0.4')
                .from('.hero-scroll', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2')
        }, heroRef)
        return () => ctx.revert()
    }, [])

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative w-full flex items-end overflow-hidden"
            style={{ minHeight: '100svh' }}
        >
            {/* Background Animation */}
            <div className="absolute inset-0 bg-black">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain object-center"
                >
                    <source src={heroAnimation} type="video/mp4" />
                </video>
                <img
                    src="/hero-flom.jpg"
                    alt="Flo M — Plasticienne"
                    className="hidden"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/65 to-obsidian/35" />
            </div>

            {/* Content */}
            <div ref={contentRef} className="relative z-10 w-full px-6 md:px-16 pt-32 pb-16 md:pb-24 max-w-6xl">
                <h1 className="mb-6" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.7)' }}>
                    <span className="hero-line-1 block font-heading font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight text-ivory">
                        L'art est une
                    </span>
                    <span className="hero-line-2 block font-drama italic text-5xl md:text-7xl lg:text-[8rem] leading-[0.95] text-champagne mt-2">
                        Florence Megardon
                    </span>
                </h1>
                <p className="hero-sub text-ivory/60 text-base md:text-lg max-w-xl font-light leading-relaxed mb-10">
                    Plasticienne — exploratrice de matières, de couleurs et de sensations.
                    Découvrez ses œuvres en galerie ou acquérez une pièce unique en boutique.
                </p>
                <div className="flex flex-wrap gap-4 mb-24 md:mb-32">
                    <a
                        href="https://floplasticienne.wixsite.com/flom?lang=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-cta btn-magnetic bg-champagne text-obsidian px-8 py-4 text-sm font-semibold tracking-widest uppercase flex items-center gap-3"
                        style={{ borderRadius: '2rem' }}
                    >
                        <span className="btn-bg bg-ivory"></span>
                        <span className="flex items-center gap-3"><Palette size={18} /> Découvrir la Galerie</span>
                    </a>
                    <a
                        href="https://flo-m.sumupstore.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-cta btn-magnetic border border-champagne/40 text-champagne px-8 py-4 text-sm font-semibold tracking-widest uppercase flex items-center gap-3 hover:border-champagne/80"
                        style={{ borderRadius: '2rem' }}
                    >
                        <span className="btn-bg bg-champagne/10"></span>
                        <span className="flex items-center gap-3"><ShoppingBag size={18} /> Boutique en Ligne</span>
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/30">
                    <span className="text-xs font-mono tracking-widest uppercase">Défiler</span>
                    <ChevronDown size={16} className="animate-bounce" />
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════
   FEATURES — "Interactive Functional Artifacts"
   ═══════════════════════════════════════════════ */

/* Card 1 — Diagnostic Shuffler: Art Mediums */
function ShufflerCard() {
    const [order, setOrder] = useState([0, 1, 2])

    useEffect(() => {
        const interval = setInterval(() => {
            setOrder(prev => {
                const next = [...prev]
                next.unshift(next.pop())
                return next
            })
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const mediums = [
        { label: 'Acrylique & Techniques mixtes', color: '#C9A84C' },
        { label: 'Sculpture & Volume', color: '#7B8794' },
        { label: 'Collage & Assemblage', color: '#A67C52' },
    ]

    return (
        <div className="bg-obsidian border border-white/10 p-8 card-rounded flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
                <Brush size={18} className="text-champagne" />
                <h3 className="font-heading font-bold text-lg">Médiums Artistiques</h3>
            </div>
            <p className="text-ivory/50 text-sm mb-8 font-light">Un voyage à travers les matières et les textures.</p>
            <div className="relative h-44 flex-1">
                {order.map((idx, i) => (
                    <div
                        key={idx}
                        className="absolute left-0 right-0 px-5 py-4 border border-white/10 bg-slate/80 backdrop-blur-sm"
                        style={{
                            borderRadius: '1.2rem',
                            top: `${i * 28}px`,
                            zIndex: 3 - i,
                            opacity: 1 - i * 0.2,
                            transform: `scale(${1 - i * 0.04})`,
                            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            borderLeftColor: mediums[idx].color,
                            borderLeftWidth: '3px',
                        }}
                    >
                        <span className="font-mono text-xs text-ivory/40">0{idx + 1}</span>
                        <p className="text-ivory text-sm font-medium mt-1">{mediums[idx].label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* Card 2 — Telemetry Typewriter: Artist Statement */
function TypewriterCard() {
    const [text, setText] = useState('')
    const [lineIdx, setLineIdx] = useState(0)

    const lines = [
        'Chaque toile raconte une histoire silencieuse...',
        'La matière parle quand on sait l\'écouter.',
        'Créer, c\'est donner forme à l\'invisible.',
        'L\'art est un dialogue entre l\'âme et le monde.',
        'Les couleurs sont mes mots, les textures ma voix.',
    ]

    useEffect(() => {
        let charIdx = 0
        let currentLine = lineIdx % lines.length
        let typing = true

        const interval = setInterval(() => {
            if (typing) {
                if (charIdx <= lines[currentLine].length) {
                    setText(lines[currentLine].slice(0, charIdx))
                    charIdx++
                } else {
                    typing = false
                    setTimeout(() => {
                        setLineIdx(prev => prev + 1)
                        charIdx = 0
                        typing = true
                    }, 2000)
                }
            }
        }, 50)

        return () => clearInterval(interval)
    }, [lineIdx])

    return (
        <div className="bg-obsidian border border-white/10 p-8 card-rounded flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-champagne pulse-dot" />
                    <span className="font-mono text-xs text-champagne/70 tracking-wider uppercase">Paroles d'artiste</span>
                </div>
            </div>
            <p className="text-ivory/50 text-sm mb-6 font-light">Les pensées qui guident chaque création.</p>
            <div className="bg-slate/40 p-5 flex-1 font-mono text-sm leading-relaxed" style={{ borderRadius: '1rem' }}>
                <span className="text-champagne/30">{'>'} </span>
                <span className="text-ivory/90">{text}</span>
                <span className="cursor-blink text-champagne ml-0.5">▎</span>
            </div>
        </div>
    )
}

/* Card 3 — Cursor Protocol: Creative Calendar */
function SchedulerCard() {
    const [activeDay, setActiveDay] = useState(-1)
    const [cursorPos, setCursorPos] = useState({ x: -30, y: -30 })
    const [showCursor, setShowCursor] = useState(false)

    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    useEffect(() => {
        const sequence = async () => {
            setShowCursor(true)
            // Move cursor to a random day
            const targetDay = Math.floor(Math.random() * 7)
            const xPos = 20 + targetDay * 38

            setCursorPos({ x: xPos, y: 40 })
            await new Promise(r => setTimeout(r, 800))

            setActiveDay(targetDay)
            await new Promise(r => setTimeout(r, 600))

            // Move to "save"
            setCursorPos({ x: 120, y: 90 })
            await new Promise(r => setTimeout(r, 1000))

            setShowCursor(false)
            await new Promise(r => setTimeout(r, 1500))
            setActiveDay(-1)
        }

        const interval = setInterval(sequence, 5000)
        sequence()
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-obsidian border border-white/10 p-8 card-rounded flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
                <Layers size={18} className="text-champagne" />
                <h3 className="font-heading font-bold text-lg">Atelier & Expos</h3>
            </div>
            <p className="text-ivory/50 text-sm mb-6 font-light">Un rythme créatif en perpétuel mouvement.</p>
            <div className="relative bg-slate/40 p-5 flex-1" style={{ borderRadius: '1rem' }}>
                {/* Days */}
                <div className="flex gap-2 mb-4">
                    {days.map((day, i) => (
                        <div
                            key={i}
                            className={`w-8 h-8 flex items-center justify-center text-xs font-mono transition-all duration-300 ${activeDay === i
                                ? 'bg-champagne text-obsidian scale-95'
                                : 'bg-white/5 text-ivory/40'
                                }`}
                            style={{ borderRadius: '0.5rem' }}
                        >
                            {day}
                        </div>
                    ))}
                </div>

                {/* Save button */}
                <div className="bg-champagne/10 border border-champagne/20 px-4 py-1.5 inline-block text-xs font-mono text-champagne/60" style={{ borderRadius: '1rem' }}>
                    Enregistrer
                </div>

                {/* Animated cursor */}
                {showCursor && (
                    <svg
                        className="absolute pointer-events-none transition-all duration-700 ease-out"
                        style={{ left: cursorPos.x, top: cursorPos.y, width: 20, height: 24 }}
                        viewBox="0 0 20 24"
                        fill="none"
                    >
                        <path d="M1 1L1 18L5.5 14L9.5 22L12.5 20.5L8.5 12.5L14 11L1 1Z" fill="#C9A84C" stroke="#0D0D12" strokeWidth="1" />
                    </svg>
                )}
            </div>
        </div>
    )
}

function Features() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section id="univers" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
            <div className="mb-16">
                <span className="font-mono text-xs text-champagne/60 tracking-[0.3em] uppercase">Univers Artistique</span>
                <h2 className="font-heading font-bold text-3xl md:text-5xl mt-4 tracking-tight">
                    Un monde de <span className="font-drama italic text-champagne">matières</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="feature-card"><ShufflerCard /></div>
                <div className="feature-card"><TypewriterCard /></div>
                <div className="feature-card"><SchedulerCard /></div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════
   PHILOSOPHY — "The Manifesto"
   ═══════════════════════════════════════════════ */
function Philosophy() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.philo-line', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 65%',
                },
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section
            id="demarche"
            ref={sectionRef}
            className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden"
            style={{ backgroundColor: '#111118' }}
        >
            {/* Parallax texture */}
            <div className="absolute inset-0 opacity-10">
                <img
                    src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&q=80"
                    alt="Texture"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="philo-line mb-8">
                    <span className="font-mono text-xs text-champagne/50 tracking-[0.3em] uppercase">Démarche</span>
                </div>
                <p className="philo-line text-ivory/40 text-xl md:text-2xl font-light leading-relaxed mb-8">
                    La plupart des artistes cherchent la perfection technique,
                    <br />la maîtrise absolue de leur médium.
                </p>
                <p className="philo-line text-3xl md:text-5xl lg:text-6xl leading-tight">
                    <span className="font-heading font-bold text-ivory">Flo M cherche </span>
                    <span className="font-drama italic text-champagne">l'émotion</span>
                    <span className="font-heading font-bold text-ivory"> brute,</span>
                    <br />
                    <span className="font-heading font-bold text-ivory">celle qui </span>
                    <span className="font-drama italic text-champagne">transforme</span>
                    <span className="font-heading font-bold text-ivory"> le regard.</span>
                </p>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════
   PROTOCOL — "Sticky Stacking Archive"
   ═══════════════════════════════════════════════ */
function Protocol() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card')
            cards.forEach((card, i) => {
                if (i < cards.length - 1) {
                    ScrollTrigger.create({
                        trigger: card,
                        start: 'top 10%',
                        endTrigger: cards[i + 1],
                        end: 'top 10%',
                        pin: true,
                        pinSpacing: false,
                        onUpdate: (self) => {
                            gsap.to(card, {
                                scale: 1 - self.progress * 0.08,
                                filter: `blur(${self.progress * 10}px)`,
                                opacity: 1 - self.progress * 0.4,
                                duration: 0.3,
                            })
                        },
                    })
                }
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    const steps = [
        {
            num: '01',
            title: 'Inspiration',
            desc: 'Observer, ressentir, capturer l\'essence du moment. Chaque création naît d\'une émotion, d\'un fragment de lumière, d\'un souvenir.',
            animation: 'rotate',
        },
        {
            num: '02',
            title: 'Création',
            desc: 'Les mains façonnent la matière. L\'acrylique rencontre le collage, les textures se superposent, les couleurs dialoguent.',
            animation: 'scan',
        },
        {
            num: '03',
            title: 'Partage',
            desc: 'L\'œuvre prend vie dans le regard de l\'autre. Expositions, galerie en ligne, boutique — chaque pièce trouve sa destination.',
            animation: 'pulse',
        },
    ]

    return (
        <section id="processus" ref={sectionRef} className="py-12">
            {steps.map((step, i) => (
                <div
                    key={i}
                    className="protocol-card min-h-screen flex items-center justify-center px-6 md:px-16"
                    style={{ backgroundColor: i % 2 === 0 ? '#0D0D12' : '#111118' }}
                >
                    <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                            <span className="font-mono text-champagne/50 text-sm tracking-widest">{step.num}</span>
                            <h3 className="font-heading font-bold text-4xl md:text-6xl mt-3 mb-6 tracking-tight">{step.title}</h3>
                            <p className="text-ivory/50 text-lg font-light leading-relaxed max-w-md">{step.desc}</p>
                        </div>

                        {/* Animation */}
                        <div className="flex items-center justify-center">
                            {step.animation === 'rotate' && (
                                <div className="slow-rotate" style={{ width: 240, height: 240 }}>
                                    <svg viewBox="0 0 240 240" fill="none" className="w-full h-full">
                                        <circle cx="120" cy="120" r="100" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
                                        <circle cx="120" cy="120" r="70" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5" />
                                        <circle cx="120" cy="120" r="40" stroke="#C9A84C" strokeWidth="1" opacity="0.7" />
                                        {[0, 60, 120, 180, 240, 300].map(angle => {
                                            const rad = (angle * Math.PI) / 180
                                            return (
                                                <line
                                                    key={angle}
                                                    x1={120 + Math.cos(rad) * 40}
                                                    y1={120 + Math.sin(rad) * 40}
                                                    x2={120 + Math.cos(rad) * 100}
                                                    y2={120 + Math.sin(rad) * 100}
                                                    stroke="#C9A84C"
                                                    strokeWidth="0.5"
                                                    opacity="0.3"
                                                />
                                            )
                                        })}
                                        <circle cx="120" cy="20" r="4" fill="#C9A84C" opacity="0.8" />
                                        <circle cx="120" cy="220" r="4" fill="#C9A84C" opacity="0.4" />
                                    </svg>
                                </div>
                            )}
                            {step.animation === 'scan' && (
                                <div className="relative" style={{ width: 240, height: 240 }}>
                                    <svg viewBox="0 0 240 240" className="w-full h-full">
                                        {/* Grid of dots */}
                                        {Array.from({ length: 8 }).map((_, row) =>
                                            Array.from({ length: 8 }).map((_, col) => (
                                                <circle
                                                    key={`${row}-${col}`}
                                                    cx={30 + col * 26}
                                                    cy={30 + row * 26}
                                                    r="2"
                                                    fill="#C9A84C"
                                                    opacity="0.15"
                                                />
                                            ))
                                        )}
                                    </svg>
                                    {/* Scan line */}
                                    <div
                                        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent scan-line"
                                        style={{ top: '50%' }}
                                    />
                                </div>
                            )}
                            {step.animation === 'pulse' && (
                                <svg viewBox="0 0 300 120" className="w-full max-w-[300px]" style={{ height: 120 }}>
                                    <path
                                        d="M0,60 Q30,60 40,60 T60,60 80,60 Q90,60 100,20 Q110,100 120,60 Q130,60 140,60 T160,60 180,60 Q190,60 200,30 Q210,90 220,60 Q230,60 240,60 T260,60 280,60 300,60"
                                        stroke="#C9A84C"
                                        strokeWidth="2"
                                        fill="none"
                                        opacity="0.8"
                                        strokeDasharray="600"
                                        strokeDashoffset="600"
                                    >
                                        <animate
                                            attributeName="stroke-dashoffset"
                                            from="600"
                                            to="0"
                                            dur="3s"
                                            repeatCount="indefinite"
                                        />
                                    </path>
                                    <path
                                        d="M0,60 Q30,60 40,60 T60,60 80,60 Q90,60 100,20 Q110,100 120,60 Q130,60 140,60 T160,60 180,60 Q190,60 200,30 Q210,90 220,60 Q230,60 240,60 T260,60 280,60 300,60"
                                        stroke="#C9A84C"
                                        strokeWidth="6"
                                        fill="none"
                                        opacity="0.1"
                                        strokeDasharray="600"
                                        strokeDashoffset="600"
                                    >
                                        <animate
                                            attributeName="stroke-dashoffset"
                                            from="600"
                                            to="0"
                                            dur="3s"
                                            repeatCount="indefinite"
                                        />
                                    </path>
                                </svg>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

/* ═══════════════════════════════════════════════
   CTA — "Explorer" (replaces pricing)
   ═══════════════════════════════════════════════ */
function Explorer() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.explorer-card', {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section id="explorer" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-16 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <span className="font-mono text-xs text-champagne/60 tracking-[0.3em] uppercase">Explorer</span>
                <h2 className="font-heading font-bold text-3xl md:text-5xl mt-4 tracking-tight">
                    Entrez dans <span className="font-drama italic text-champagne">l'univers</span>
                </h2>
                <p className="text-ivory/40 mt-4 text-lg font-light max-w-xl mx-auto">
                    Deux espaces pour découvrir et acquérir les œuvres de Flo M.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Gallery Card */}
                <a
                    href="https://floplasticienne.wixsite.com/flom?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="explorer-card group relative overflow-hidden border border-white/10 p-10 md:p-14 flex flex-col justify-between hover:border-champagne/30 transition-all duration-500"
                    style={{ borderRadius: '2.5rem', minHeight: '380px' }}
                >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <img
                            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80"
                            alt="Gallery"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-obsidian/80" />
                    </div>

                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-full bg-champagne/10 border border-champagne/20 flex items-center justify-center mb-8 group-hover:bg-champagne/20 transition-colors">
                            <Eye size={28} className="text-champagne" />
                        </div>
                        <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3">Galerie</h3>
                        <p className="text-ivory/40 font-light leading-relaxed">
                            Explorez l'intégralité des collections — peintures, sculptures, et œuvres mixtes.
                            Un voyage visuel à travers des années de création.
                        </p>
                    </div>

                    <div className="relative z-10 flex items-center gap-3 mt-8 text-champagne font-medium group-hover:gap-5 transition-all">
                        <span className="text-sm tracking-wider uppercase">Visiter la galerie</span>
                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                </a>

                {/* Boutique Card */}
                <a
                    href="https://flo-m.sumupstore.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="explorer-card group relative overflow-hidden bg-champagne text-obsidian border border-champagne p-10 md:p-14 flex flex-col justify-between hover:shadow-2xl hover:shadow-champagne/20 transition-all duration-500"
                    style={{ borderRadius: '2.5rem', minHeight: '380px' }}
                >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <img
                            src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80"
                            alt="Boutique"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-champagne/85" />
                    </div>

                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-full bg-obsidian/10 border border-obsidian/10 flex items-center justify-center mb-8 group-hover:bg-obsidian/20 transition-colors">
                            <ShoppingBag size={28} className="text-obsidian" />
                        </div>
                        <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3">Boutique</h3>
                        <p className="text-obsidian/60 font-light leading-relaxed">
                            Acquérez des pièces originales, des tirages et des créations uniques.
                            Chaque achat soutient directement l'artiste.
                        </p>
                    </div>

                    <div className="relative z-10 flex items-center gap-3 mt-8 text-obsidian font-medium group-hover:gap-5 transition-all">
                        <span className="text-sm tracking-wider uppercase">Accéder à la boutique</span>
                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                </a>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════ */
function Footer() {
    return (
        <footer
            className="bg-obsidian border-t border-white/5 px-6 md:px-16 py-16 md:py-20"
            style={{ borderRadius: '4rem 4rem 0 0', marginTop: '-2rem' }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h4 className="font-drama italic text-3xl text-champagne mb-4">Flo M</h4>
                        <p className="text-ivory/40 font-light text-sm leading-relaxed max-w-sm">
                            Plasticienne & artiste visuelle — exploratrice de matières, de couleurs et de sensations.
                            Basée en France, inspirée par le monde.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h5 className="font-mono text-xs text-champagne/50 tracking-widest uppercase mb-4">Navigation</h5>
                        <ul className="space-y-3 text-sm text-ivory/40 font-light">
                            <li><a href="#univers" className="hover:text-champagne transition-colors hover-lift inline-block">Univers</a></li>
                            <li><a href="#demarche" className="hover:text-champagne transition-colors hover-lift inline-block">Démarche</a></li>
                            <li><a href="#processus" className="hover:text-champagne transition-colors hover-lift inline-block">Processus</a></li>
                            <li><a href="#explorer" className="hover:text-champagne transition-colors hover-lift inline-block">Explorer</a></li>
                        </ul>
                    </div>

                    {/* External */}
                    <div>
                        <h5 className="font-mono text-xs text-champagne/50 tracking-widest uppercase mb-4">Liens</h5>
                        <ul className="space-y-3 text-sm text-ivory/40 font-light">
                            <li>
                                <a
                                    href="https://floplasticienne.wixsite.com/flom?lang=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-champagne transition-colors hover-lift inline-flex items-center gap-2"
                                >
                                    Galerie <ArrowUpRight size={12} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://flo-m.sumupstore.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-champagne transition-colors hover-lift inline-flex items-center gap-2"
                                >
                                    Boutique <ArrowUpRight size={12} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-ivory/20 text-xs font-mono">
                        © {new Date().getFullYear()} Flo M — Tous droits réservés
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
                        <span className="font-mono text-xs text-ivory/20 tracking-wider">Site opérationnel</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

/* ═══════════════════════════════════════════════
   APP
   ═══════════════════════════════════════════════ */
export default function App() {
    return (
        <div className="bg-obsidian min-h-screen">
            <Navbar />
            <Hero />
            <Features />
            <Philosophy />
            <Protocol />
            <Explorer />
            <Footer />
        </div>
    )
}

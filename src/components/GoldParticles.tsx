'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  radius: number
  opacity: number
  speedY: number
  speedX: number
  color: string
  blur: number
  life: number
  maxLife: number
}

const COLORS = [
  'rgba(201,168,76,',
  'rgba(232,200,118,',
  'rgba(240,208,96,',
  'rgba(180,140,50,',
  'rgba(255,220,100,',
]

function makeParticle(width: number, height: number, fromBottom = false): Particle {
  const maxLife = 180 + Math.random() * 240
  return {
    x: Math.random() * width,
    y: fromBottom ? height + Math.random() * 100 : Math.random() * height,
    radius: 4 + Math.random() * 28,
    opacity: 0,
    speedY: -(0.2 + Math.random() * 0.5),
    speedX: (Math.random() - 0.5) * 0.3,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    blur: 8 + Math.random() * 20,
    life: 0,
    maxLife,
  }
}

export default function GoldParticles({ count = 55 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: Particle[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < count; i++) {
      particles.push(makeParticle(canvas.width, canvas.height))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.life++
        p.x += p.speedX
        p.y += p.speedY

        const progress = p.life / p.maxLife
        if (progress < 0.2) {
          p.opacity = progress / 0.2
        } else if (progress > 0.7) {
          p.opacity = 1 - (progress - 0.7) / 0.3
        } else {
          p.opacity = 1
        }
        p.opacity *= 0.55

        if (p.life >= p.maxLife || p.y < -p.radius * 2) {
          particles[i] = makeParticle(canvas.width, canvas.height, true)
          continue
        }

        ctx.save()
        ctx.filter = `blur(${p.blur}px)`
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius)
        grad.addColorStop(0, `${p.color}${p.opacity})`)
        grad.addColorStop(1, `${p.color}0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
        ctx.restore()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

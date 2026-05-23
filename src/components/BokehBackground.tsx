'use client'

import { useEffect, useRef } from 'react'

interface Orb {
  baseX: number
  baseY: number
  radius: number
  r: number; g: number; b: number
  baseOpacity: number
  driftAmpX: number
  driftAmpY: number
  driftSpeedX: number
  driftSpeedY: number
  phaseX: number
  phaseY: number
  breathAmp: number
  breathSpeed: number
  breathPhase: number
  blur: number
}

// Cream / white / warm-yellow orbs that sit beautifully on a golden background
const ORB_COLORS: [number, number, number][] = [
  [255, 255, 230], // warm white
  [255, 248, 195], // cream yellow
  [255, 235, 150], // light gold
  [255, 250, 210], // pale cream
  [240, 210, 120], // warm amber highlight
]

function rand(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function buildOrbs(w: number, h: number): Orb[] {
  const orbs: Orb[] = []

  // 5 large anchor orbs — the big dreamy blobs visible in the Wix screenshot
  const anchors: [number, number, number, number][] = [
    [0.05, 0.60, 280, 0.28],
    [0.82, 0.40, 320, 0.22],
    [0.55, 0.85, 350, 0.18],
    [0.90, 0.10, 240, 0.20],
    [0.30, 0.15, 200, 0.16],
  ]
  anchors.forEach(([fx, fy, r, op]) => {
    const [rc, g, b] = pick(ORB_COLORS)
    orbs.push({
      baseX: fx * w, baseY: fy * h,
      radius: r, r: rc, g, b,
      baseOpacity: op,
      driftAmpX: rand(25, 60), driftAmpY: rand(20, 45),
      driftSpeedX: rand(0.0006, 0.0014), driftSpeedY: rand(0.0005, 0.0012),
      phaseX: rand(0, Math.PI * 2), phaseY: rand(0, Math.PI * 2),
      breathAmp: rand(0.04, 0.09), breathSpeed: rand(0.001, 0.002),
      breathPhase: rand(0, Math.PI * 2),
      blur: rand(55, 100),
    })
  })

  // 14 medium floating orbs — rapid drift
  for (let i = 0; i < 14; i++) {
    const [rc, g, b] = pick(ORB_COLORS)
    orbs.push({
      baseX: rand(0, w), baseY: rand(0, h),
      radius: rand(40, 130), r: rc, g, b,
      baseOpacity: rand(0.22, 0.48),
      driftAmpX: rand(50, 120), driftAmpY: rand(40, 100),
      driftSpeedX: rand(0.001, 0.003), driftSpeedY: rand(0.0008, 0.0025),
      phaseX: rand(0, Math.PI * 2), phaseY: rand(0, Math.PI * 2),
      breathAmp: rand(0.08, 0.18), breathSpeed: rand(0.002, 0.005),
      breathPhase: rand(0, Math.PI * 2),
      blur: rand(15, 45),
    })
  }

  // 16 small bright sparkle bubbles — fast and lively
  for (let i = 0; i < 16; i++) {
    const [rc, g, b] = pick(ORB_COLORS)
    orbs.push({
      baseX: rand(0, w), baseY: rand(0, h),
      radius: rand(6, 28), r: rc, g, b,
      baseOpacity: rand(0.55, 0.90),
      driftAmpX: rand(70, 160), driftAmpY: rand(60, 140),
      driftSpeedX: rand(0.002, 0.006), driftSpeedY: rand(0.0018, 0.005),
      phaseX: rand(0, Math.PI * 2), phaseY: rand(0, Math.PI * 2),
      breathAmp: rand(0.15, 0.35), breathSpeed: rand(0.004, 0.010),
      breathPhase: rand(0, Math.PI * 2),
      blur: rand(2, 10),
    })
  }

  return orbs
}

export default function BokehBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let orbs: Orb[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      orbs = buildOrbs(canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = (t: number) => {
      const { width: w, height: h } = canvas

      // Warm golden background — matches the Wix hero
      const bg = ctx.createLinearGradient(0, 0, w, h)
      bg.addColorStop(0,   '#B8780A')
      bg.addColorStop(0.35,'#C9920E')
      bg.addColorStop(0.65,'#D9AE30')
      bg.addColorStop(1,   '#F0DC90')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)

      // Silky wave sheen across the top (like the Wix fabric texture)
      const sheen = ctx.createLinearGradient(0, 0, w, h * 0.45)
      sheen.addColorStop(0,   'rgba(255,240,160,0.28)')
      sheen.addColorStop(0.5, 'rgba(255,220,100,0.10)')
      sheen.addColorStop(1,   'rgba(255,220,100,0)')
      ctx.fillStyle = sheen
      ctx.fillRect(0, 0, w, h * 0.45)

      for (const orb of orbs) {
        const x = orb.baseX + Math.sin(t * orb.driftSpeedX + orb.phaseX) * orb.driftAmpX
        const y = orb.baseY + Math.sin(t * orb.driftSpeedY + orb.phaseY) * orb.driftAmpY
        const opacity = Math.max(0, orb.baseOpacity + Math.sin(t * orb.breathSpeed + orb.breathPhase) * orb.breathAmp)

        ctx.save()
        ctx.filter = `blur(${orb.blur}px)`
        const grad = ctx.createRadialGradient(x, y, 0, x, y, orb.radius)
        grad.addColorStop(0,   `rgba(${orb.r},${orb.g},${orb.b},${opacity})`)
        grad.addColorStop(0.45,`rgba(${orb.r},${orb.g},${orb.b},${opacity * 0.5})`)
        grad.addColorStop(1,   `rgba(${orb.r},${orb.g},${orb.b},0)`)
        ctx.beginPath()
        ctx.arc(x, y, orb.radius, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
        ctx.restore()
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  )
}

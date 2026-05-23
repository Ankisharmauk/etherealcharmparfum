'use client'

import { useEffect, useRef } from 'react'

interface Orb {
  baseX: number
  baseY: number
  radius: number
  color: [number, number, number]
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

const PALETTE: [number, number, number][] = [
  [193, 128,  68],  // #c18044
  [212, 160,  23],  // #D4A017
  [245, 200,  66],  // #F5C842
  [232, 201, 154],  // #E8C99A
  [107,  63,  26],  // #6B3F1A
]

function rand(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function buildOrbs(w: number, h: number): Orb[] {
  const orbs: Orb[] = []

  // 4 hero anchor orbs — enormous, barely move, set the scene
  const anchors: [number, number, number, number][] = [
    [0.08, 0.55, 340, 0.22],
    [0.88, 0.35, 300, 0.18],
    [0.50, 0.80, 380, 0.14],
    [0.72, 0.10, 260, 0.16],
  ]
  anchors.forEach(([fx, fy, r, op]) => {
    orbs.push({
      baseX: fx * w,
      baseY: fy * h,
      radius: r,
      color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
      baseOpacity: op,
      driftAmpX: rand(20, 50),
      driftAmpY: rand(15, 35),
      driftSpeedX: rand(0.00012, 0.00025),
      driftSpeedY: rand(0.00010, 0.00022),
      phaseX: rand(0, Math.PI * 2),
      phaseY: rand(0, Math.PI * 2),
      breathAmp: rand(0.04, 0.08),
      breathSpeed: rand(0.0004, 0.0009),
      breathPhase: rand(0, Math.PI * 2),
      blur: rand(60, 110),
    })
  })

  // 10 mid-sized floating orbs
  for (let i = 0; i < 10; i++) {
    orbs.push({
      baseX: rand(0, w),
      baseY: rand(0, h),
      radius: rand(60, 160),
      color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
      baseOpacity: rand(0.18, 0.38),
      driftAmpX: rand(40, 100),
      driftAmpY: rand(30, 80),
      driftSpeedX: rand(0.00018, 0.0005),
      driftSpeedY: rand(0.00015, 0.00045),
      phaseX: rand(0, Math.PI * 2),
      phaseY: rand(0, Math.PI * 2),
      breathAmp: rand(0.06, 0.14),
      breathSpeed: rand(0.0007, 0.0018),
      breathPhase: rand(0, Math.PI * 2),
      blur: rand(20, 55),
    })
  }

  // 8 small bright accent sparks
  for (let i = 0; i < 8; i++) {
    orbs.push({
      baseX: rand(0, w),
      baseY: rand(0, h),
      radius: rand(12, 40),
      color: PALETTE[1 + Math.floor(Math.random() * 3)], // brighter range
      baseOpacity: rand(0.40, 0.70),
      driftAmpX: rand(60, 130),
      driftAmpY: rand(50, 110),
      driftSpeedX: rand(0.00025, 0.0007),
      driftSpeedY: rand(0.00020, 0.0006),
      phaseX: rand(0, Math.PI * 2),
      phaseY: rand(0, Math.PI * 2),
      breathAmp: rand(0.12, 0.28),
      breathSpeed: rand(0.001, 0.003),
      breathPhase: rand(0, Math.PI * 2),
      blur: rand(6, 18),
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

      // Warm dark base
      ctx.clearRect(0, 0, w, h)
      const bg = ctx.createLinearGradient(0, 0, w, h)
      bg.addColorStop(0, '#1A0800')
      bg.addColorStop(0.5, '#1F0D02')
      bg.addColorStop(1, '#150600')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)

      for (const orb of orbs) {
        const x = orb.baseX + Math.sin(t * orb.driftSpeedX + orb.phaseX) * orb.driftAmpX
        const y = orb.baseY + Math.sin(t * orb.driftSpeedY + orb.phaseY) * orb.driftAmpY
        const opacity = Math.max(0, orb.baseOpacity + Math.sin(t * orb.breathSpeed + orb.breathPhase) * orb.breathAmp)

        const [r, g, b] = orb.color
        ctx.save()
        ctx.filter = `blur(${orb.blur}px)`
        const grad = ctx.createRadialGradient(x, y, 0, x, y, orb.radius)
        grad.addColorStop(0,   `rgba(${r},${g},${b},${opacity})`)
        grad.addColorStop(0.4, `rgba(${r},${g},${b},${opacity * 0.55})`)
        grad.addColorStop(1,   `rgba(${r},${g},${b},0)`)
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

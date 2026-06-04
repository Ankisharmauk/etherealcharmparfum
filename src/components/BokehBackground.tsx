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

// Golden / amber orb palette — matches the Wix bokeh video exactly
const GOLDEN_COLORS: [number, number, number][] = [
  [255, 215,  70], // bright gold
  [255, 200,  45], // warm amber-gold
  [255, 228, 110], // light golden-yellow
  [255, 185,  30], // deep amber
  [255, 240, 140], // pale golden
]

// Edge orbs: large, near-white cream (the big circles at left/right in the screenshot)
const CREAM_COLORS: [number, number, number][] = [
  [255, 245, 210], // warm cream
  [255, 252, 225], // near-white
  [255, 238, 190], // ivory cream
]

function rand(min: number, max: number) { return min + Math.random() * (max - min) }
function pick<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)] }

function buildOrbs(w: number, h: number): Orb[] {
  const orbs: Orb[] = []

  // Two large cream circles at the left/right edges — clearly visible in the screenshot
  const edgeOrbs: [number, number, number, number][] = [
    [-0.08, 0.52, 380, 0.55],  // large left-edge, partially off-screen
    [ 1.06, 0.48, 400, 0.60],  // large right-edge, partially off-screen
  ]
  edgeOrbs.forEach(([fx, fy, r, op]) => {
    const [rc, g, b] = pick(CREAM_COLORS)
    orbs.push({
      baseX: fx * w, baseY: fy * h,
      radius: r, r: rc, g, b,
      baseOpacity: op,
      driftAmpX: rand(10, 20), driftAmpY: rand(12, 25),
      driftSpeedX: rand(0.00025, 0.00055), driftSpeedY: rand(0.00020, 0.00050),
      phaseX: rand(0, Math.PI * 2), phaseY: rand(0, Math.PI * 2),
      breathAmp: rand(0.03, 0.06), breathSpeed: rand(0.0007, 0.0013),
      breathPhase: rand(0, Math.PI * 2),
      blur: rand(55, 80),
    })
  })

  // Medium-large golden orbs scattered throughout
  const midAnchors: [number, number, number, number][] = [
    [0.20, 0.30, 190, 0.52],
    [0.70, 0.65, 210, 0.48],
    [0.45, 0.80, 175, 0.44],
    [0.85, 0.20, 160, 0.50],
    [0.10, 0.75, 145, 0.46],
  ]
  midAnchors.forEach(([fx, fy, r, op]) => {
    const [rc, g, b] = pick(GOLDEN_COLORS)
    orbs.push({
      baseX: fx * w, baseY: fy * h,
      radius: r, r: rc, g, b,
      baseOpacity: op,
      driftAmpX: rand(25, 55), driftAmpY: rand(20, 45),
      driftSpeedX: rand(0.0006, 0.0014), driftSpeedY: rand(0.0005, 0.0012),
      phaseX: rand(0, Math.PI * 2), phaseY: rand(0, Math.PI * 2),
      breathAmp: rand(0.05, 0.10), breathSpeed: rand(0.0010, 0.0020),
      breathPhase: rand(0, Math.PI * 2),
      blur: rand(28, 52),
    })
  })

  // Small golden bokeh orbs — the mid-size glowing circles throughout
  for (let i = 0; i < 14; i++) {
    const [rc, g, b] = pick(GOLDEN_COLORS)
    orbs.push({
      baseX: rand(0, w), baseY: rand(0, h),
      radius: rand(35, 90), r: rc, g, b,
      baseOpacity: rand(0.40, 0.70),
      driftAmpX: rand(35, 80), driftAmpY: rand(28, 65),
      driftSpeedX: rand(0.0010, 0.0022), driftSpeedY: rand(0.0008, 0.0018),
      phaseX: rand(0, Math.PI * 2), phaseY: rand(0, Math.PI * 2),
      breathAmp: rand(0.08, 0.16), breathSpeed: rand(0.002, 0.004),
      breathPhase: rand(0, Math.PI * 2),
      blur: rand(12, 30),
    })
  }

  // Tiny bright sparkle points — the glinting lights scattered all over
  for (let i = 0; i < 30; i++) {
    const [rc, g, b] = pick(GOLDEN_COLORS)
    orbs.push({
      baseX: rand(0, w), baseY: rand(0, h),
      radius: rand(5, 20), r: rc, g, b,
      baseOpacity: rand(0.60, 1.0),
      driftAmpX: rand(20, 60), driftAmpY: rand(18, 50),
      driftSpeedX: rand(0.002, 0.006), driftSpeedY: rand(0.0018, 0.005),
      phaseX: rand(0, Math.PI * 2), phaseY: rand(0, Math.PI * 2),
      breathAmp: rand(0.20, 0.45), breathSpeed: rand(0.005, 0.014),
      breathPhase: rand(0, Math.PI * 2),
      blur: rand(1, 6),
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

      // Rich warm amber-gold base — matching the Wix hero background colour
      const bg = ctx.createLinearGradient(0, 0, w, h)
      bg.addColorStop(0,    '#B87808')   // deep amber top-left
      bg.addColorStop(0.25, '#C88E10')   // warm amber
      bg.addColorStop(0.55, '#DBA818')   // golden mid
      bg.addColorStop(0.80, '#C89010')   // warm amber again
      bg.addColorStop(1,    '#A86C08')   // deep amber bottom-right
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)

      // Central glow — the bright golden highlight visible in the centre of the Wix hero
      const glow = ctx.createRadialGradient(w * 0.58, h * 0.42, 0, w * 0.58, h * 0.42, w * 0.45)
      glow.addColorStop(0,   'rgba(255, 230, 80, 0.38)')
      glow.addColorStop(0.5, 'rgba(255, 210, 40, 0.14)')
      glow.addColorStop(1,   'rgba(255, 190, 0, 0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, w, h)

      for (const orb of orbs) {
        const x = orb.baseX + Math.sin(t * orb.driftSpeedX + orb.phaseX) * orb.driftAmpX
        const y = orb.baseY + Math.sin(t * orb.driftSpeedY + orb.phaseY) * orb.driftAmpY
        const opacity = Math.max(0, orb.baseOpacity + Math.sin(t * orb.breathSpeed + orb.breathPhase) * orb.breathAmp)

        ctx.save()
        ctx.filter = `blur(${orb.blur}px)`
        const grad = ctx.createRadialGradient(x, y, 0, x, y, orb.radius)
        grad.addColorStop(0,    `rgba(${orb.r},${orb.g},${orb.b},${opacity})`)
        grad.addColorStop(0.35, `rgba(${orb.r},${orb.g},${orb.b},${opacity * 0.55})`)
        grad.addColorStop(0.70, `rgba(${orb.r},${orb.g},${orb.b},${opacity * 0.15})`)
        grad.addColorStop(1,    `rgba(${orb.r},${orb.g},${orb.b},0)`)
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

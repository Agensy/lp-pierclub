// Based on canvas-confetti library
// This is a simplified version for our use case

interface ConfettiOptions {
  particleCount?: number
  angle?: number
  spread?: number
  startVelocity?: number
  decay?: number
  gravity?: number
  drift?: number
  ticks?: number
  colors?: string[]
  shapes?: ("square" | "circle")[]
  scalar?: number
  zIndex?: number
  disableForReducedMotion?: boolean
  origin?: {
    x?: number
    y?: number
  }
}

const defaultColors = ["#D9C38E", "#0A1A2F", "#ffffff", "#f44336", "#2196f3"]

function randomPhysics(angle: number, spread: number, startVelocity: number, random: () => number) {
  const radAngle = angle * (Math.PI / 180)
  const radSpread = spread * (Math.PI / 180)

  return {
    x: 0,
    y: 0,
    wobble: random() * 10,
    wobbleSpeed: 0.1 + random() * 0.1,
    velocity: startVelocity * 0.5 + random() * startVelocity,
    angle2D: -radAngle + (0.5 * radSpread - random() * radSpread),
    tiltAngle: random() * Math.PI,
    tiltAngleSpeed: 0.1 + random() * 0.3,
  }
}

export function confetti(options: ConfettiOptions = {}) {
  if (typeof window === "undefined") return null

  const {
    particleCount = 50,
    angle = 90,
    spread = 45,
    startVelocity = 45,
    decay = 0.9,
    gravity = 1,
    drift = 0,
    ticks = 200,
    colors = defaultColors,
    shapes = ["square", "circle"],
    scalar = 1,
    zIndex = 100,
    disableForReducedMotion = false,
    origin = { x: 0.5, y: 0.3 },
  } = options

  // Check for reduced motion preference
  if (disableForReducedMotion && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null
  }

  const canvas = document.createElement("canvas")
  canvas.style.position = "fixed"
  canvas.style.top = "0"
  canvas.style.left = "0"
  canvas.style.pointerEvents = "none"
  canvas.style.zIndex = String(zIndex)
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  document.body.appendChild(canvas)

  const context = canvas.getContext("2d")
  if (!context) {
    document.body.removeChild(canvas)
    return null
  }

  const random = Math.random

  const particles: any[] = []
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      color: colors[Math.floor(random() * colors.length)],
      shape: shapes[Math.floor(random() * shapes.length)],
      ...randomPhysics(angle, spread, startVelocity, random),
      x: origin.x,
      y: origin.y,
    })
  }

  let tick = 0
  const totalTicks = ticks

  function update() {
    tick += 1
    context.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((particle, i) => {
      particle.x += Math.cos(particle.angle2D) * particle.velocity + drift
      particle.y += Math.sin(particle.angle2D) * particle.velocity + gravity
      particle.wobble += particle.wobbleSpeed
      particle.velocity *= decay
      particle.tiltAngle += particle.tiltAngleSpeed

      const progress = 1 - tick / totalTicks
      const wobbleX = particle.x + 10 * Math.cos(particle.wobble)
      const wobbleY = particle.y + 10 * Math.sin(particle.wobble)
      const size = 7 * scalar * progress

      context.fillStyle = particle.color
      context.beginPath()

      if (particle.shape === "circle") {
        context.ellipse(wobbleX, wobbleY, size, size, particle.tiltAngle, 0, Math.PI * 2)
      } else {
        context.save()
        context.translate(wobbleX, wobbleY)
        context.rotate(particle.tiltAngle)
        context.rect(-size / 2, -size / 2, size, size)
        context.restore()
      }

      context.fill()
    })

    if (tick < totalTicks) {
      requestAnimationFrame(update)
    } else {
      document.body.removeChild(canvas)
    }
  }

  requestAnimationFrame(update)

  return {
    canvas,
    cleanup: () => {
      if (canvas.parentElement) {
        document.body.removeChild(canvas)
      }
    },
  }
}

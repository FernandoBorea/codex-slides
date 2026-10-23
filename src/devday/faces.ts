/** DevDay's character grammar: a circle and two geometric eyes. No fonts or bitmaps. */
export const FACE_PALETTE = {
  blue: '#0066ff', green: '#00b449', orange: '#ff7900',
  purple: '#9146ff', gray: '#dededc', charcoal: '#272725',
} as const

export type FaceExpression = 'squeeze' | 'curious' | 'plus' | 'sleepy' | 'spark' | 'happy' | 'wink'
export type FaceConfig = {
  color: string
  expression: FaceExpression
  /** Degrees around the face center; the outer silhouette remains a perfect circle. */
  rotation?: number
  eyeScale?: number
  /** Normalized eye position. Extremes intentionally let the eyes cross the circle edge. */
  gaze?: { x: number; y: number }
}

export const FACE_PRESETS: Record<FaceExpression, FaceConfig> = {
  squeeze: { color: FACE_PALETTE.blue, expression: 'squeeze', eyeScale: 1, gaze: { x: 0, y: 0 } },
  curious: { color: FACE_PALETTE.purple, expression: 'curious', eyeScale: 1.12, gaze: { x: -.2, y: .04 } },
  plus: { color: FACE_PALETTE.green, expression: 'plus', eyeScale: .88, gaze: { x: .42, y: .4 } },
  sleepy: { color: FACE_PALETTE.orange, expression: 'sleepy', eyeScale: .85, gaze: { x: .3, y: .68 } },
  spark: { color: FACE_PALETTE.gray, expression: 'spark', eyeScale: .88, gaze: { x: -.1, y: -.02 } },
  happy: { color: FACE_PALETTE.charcoal, expression: 'happy', eyeScale: .9, rotation: 12, gaze: { x: .32, y: -.35 } },
  wink: { color: FACE_PALETTE.purple, expression: 'wink', eyeScale: .88, rotation: -15, gaze: { x: -.07, y: -.23 } },
}

type ShapeAttributes = Record<string, string | number>
export type FaceShape = { tag: 'path' | 'ellipse' | 'rect' | 'circle'; attrs: ShapeAttributes }
/** `transform` is the full eye placement; `gaze` (SVG units) and `pose` split it so the eyes can be animated. */
export type FaceScene = { color: string; ink: string; transform: string; gaze: { x: number; y: number }; pose: string; eyes: FaceShape[] }

const expressions = Object.keys(FACE_PRESETS) as FaceExpression[]
const finite = (value: unknown, fallback: number, min: number, max: number) =>
  typeof value === 'number' && Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback
const round = (value: number) => Number(value.toFixed(3))
const path = (d: string, width = 5): FaceShape => ({ tag: 'path', attrs: { d, fill: 'none', stroke: 'currentColor', strokeWidth: width, strokeLinecap: 'butt', strokeLinejoin: 'miter' } })
const oval = (cx: number, rx = 8.6, ry = 13): FaceShape => ({ tag: 'ellipse', attrs: { cx, cy: 50, rx, ry, fill: 'none', stroke: 'currentColor', strokeWidth: 4.4 } })

/** Shared scene used by the React component and standalone SVG export. */
export function faceScene(config: FaceConfig): FaceScene {
  const expression = expressions.includes(config.expression) ? config.expression : 'squeeze'
  const color = /^#[\da-f]{3}(?:[\da-f]{3})?$/i.test(config.color) ? config.color : FACE_PALETTE.blue
  const rotation = round(finite(config.rotation, 0, -360, 360))
  const scale = round(finite(config.eyeScale, 1, .35, 1.8))
  const x = round(50 + finite(config.gaze?.x, 0, -1, 1) * 32)
  const y = round(50 + finite(config.gaze?.y, 0, -1, 1) * 32)
  let eyes: FaceShape[]
  switch (expression) {
    case 'curious': eyes = [oval(29), oval(71)]; break
    case 'plus': eyes = [path('M29 39V61M18 50H40M71 39V61M60 50H82', 5.4)]; break
    case 'sleepy': eyes = [{ tag: 'rect', attrs: { x: 18, y: 47.5, width: 20, height: 5.5 } }, { tag: 'rect', attrs: { x: 62, y: 47.5, width: 20, height: 5.5 } }]; break
    case 'spark': eyes = [path('M29 39V61M19.5 44.5L38.5 55.5M19.5 55.5L38.5 44.5M71 39V61M61.5 44.5L80.5 55.5M61.5 55.5L80.5 44.5', 4.8)]; break
    case 'happy': eyes = [path('M21 57L29 40L37 57M63 57L71 40L79 57', 4.2)]; break
    case 'wink': eyes = [oval(29, 7.5, 10), path('M80 41L63 50L80 59', 5.5)]; break
    default: eyes = [path('M18 40L39 50L18 60M82 40L61 50L82 60', 5.8)]
  }
  const ink = color.toLowerCase() === FACE_PALETTE.charcoal ? '#ffffff' : '#0b0b0a'
  return { color, ink, transform: `translate(${x} ${y}) rotate(${rotation}) scale(${scale}) translate(-50 -50)`, gaze: { x: round(x - 50), y: round(y - 50) }, pose: `translate(50 50) rotate(${rotation}) scale(${scale}) translate(-50 -50)`, eyes }
}

/** Seeded variety is identical on the server, in React, and when exported. */
export function createFace(seed: number): FaceConfig {
  let state = (Number.isFinite(seed) ? Math.trunc(seed) : 0) >>> 0
  const next = () => {
    state += 0x6D2B79F5
    let value = state
    value = Math.imul(value ^ value >>> 15, value | 1)
    value ^= value + Math.imul(value ^ value >>> 7, value | 61)
    return ((value ^ value >>> 14) >>> 0) / 4294967296
  }
  const preset = FACE_PRESETS[expressions[Math.floor(next() * expressions.length)]]
  return {
    ...preset,
    rotation: round((preset.rotation || 0) + (next() - .5) * 28),
    eyeScale: round((preset.eyeScale || 1) * (.92 + next() * .16)),
    gaze: { x: round((preset.gaze?.x || 0) + (next() - .5) * .3), y: round((preset.gaze?.y || 0) + (next() - .5) * .3) },
  }
}

export const faceClipId = (prefix: string) => `face-${prefix.replace(/[^a-zA-Z0-9_-]/g, '_')}-clip`
const escape = (value: string | number) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[character]!)
const attribute = (name: string) => name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
export const shapeToSvg = ({ tag, attrs }: FaceShape) => `<${tag} ${Object.entries(attrs).map(([key, value]) => `${attribute(key)}="${escape(value)}"`).join(' ')}/>`

/** Set idPrefix when composing multiple SVG exports inline. Standalone files need no options. */
export function faceToSvg(config: FaceConfig, options: { idPrefix?: string; label?: string } = {}): string {
  const scene = faceScene(config)
  const id = faceClipId(options.idPrefix || 'export')
  const title = options.label ? `<title>${escape(options.label)}</title>` : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" ${options.label ? 'role="img"' : 'aria-hidden="true"'}>${title}<defs><clipPath id="${id}"><circle cx="50" cy="50" r="50"/></clipPath></defs><circle cx="50" cy="50" r="50" fill="${scene.color}"/><g clip-path="url(#${id})"><g transform="${scene.transform}" fill="${scene.ink}" color="${scene.ink}">${scene.eyes.map(shapeToSvg).join('')}</g></g></svg>`
}

export type MarkKind = 'question' | 'heart' | 'exclaim' | 'asterisk'
export function markShapes(kind: MarkKind): FaceShape[] {
  switch (kind) {
    case 'heart': return [path('M39 28L9 49L39 70', 5.5), path('M54 23C84 4 97 37 72 47C104 52 92 85 54 76', 5.5)]
    case 'exclaim': return [path('M24 17L25 65M49 17L50 65M74 17L75 65', 6), ...[25, 50, 75].map((cx): FaceShape => ({ tag: 'circle', attrs: { cx, cy: 80, r: 4.5 } }))]
    case 'asterisk': return [path('M50 9V91M11 28L89 72M11 72L89 28', 8)]
    default: return [path('M28 29C28 7 77 5 77 30C77 49 50 44 50 65', 7), { tag: 'circle', attrs: { cx: 50, cy: 84, r: 4.8 } }]
  }
}

export function markToSvg(kind: MarkKind, color: string = FACE_PALETTE.blue): string {
  const safeColor = /^#[\da-f]{3}(?:[\da-f]{3})?$/i.test(color) ? color : FACE_PALETTE.blue
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" fill="${safeColor}" color="${safeColor}" aria-hidden="true">${markShapes(kind).map(shapeToSvg).join('')}</svg>`
}

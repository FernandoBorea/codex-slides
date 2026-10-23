import { createElement, useId } from 'react'
import type { CSSProperties } from 'react'
import { FACE_PALETTE, faceClipId, faceScene, markShapes } from './faces'
import type { FaceConfig, FaceShape, MarkKind } from './faces'

type VectorProps = { className?: string; style?: CSSProperties; label?: string }
export type FaceProps = VectorProps & { config: FaceConfig }
const shape = (node: FaceShape, index: number) => createElement(node.tag, { ...node.attrs, key: index })

/** Deliberately motion-free: the surrounding scene owns movement and reduced-motion behavior. */
export function Face({ config, className, style, label }: FaceProps) {
  const id = faceClipId(useId())
  const titleId = `${id}-title`
  const scene = faceScene(config)
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" className={className} style={style} role={label ? 'img' : undefined} aria-labelledby={label ? titleId : undefined} aria-hidden={label ? undefined : true} focusable="false">
      {label && <title id={titleId}>{label}</title>}
      <defs><clipPath id={id}><circle cx="50" cy="50" r="50" /></clipPath></defs>
      <circle cx="50" cy="50" r="50" fill={scene.color} />
      <g clipPath={`url(#${id})`}><g transform={scene.transform} fill={scene.ink} color={scene.ink}>{scene.eyes.map(shape)}</g></g>
    </svg>
  )
}

export function Mark({ kind, color = FACE_PALETTE.blue, className, style, label }: VectorProps & { kind: MarkKind; color?: string }) {
  const titleId = `mark-${useId()}`
  return <svg viewBox="0 0 100 100" width="100%" height="100%" fill={color} color={color} className={className} style={style} role={label ? 'img' : undefined} aria-labelledby={label ? titleId : undefined} aria-hidden={label ? undefined : true} focusable="false">{label && <title id={titleId}>{label}</title>}{markShapes(kind).map(shape)}</svg>
}

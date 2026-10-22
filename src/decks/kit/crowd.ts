import { FACE_PALETTE, FACE_PRESETS, type FaceConfig, type FaceExpression, type MarkKind } from "../../devday/faces";

/**
 * The DevDay holding-screen crowd, in slide units: x/y are the center and
 * `size` the diameter, all in cqw (the slide is 100cqw × 56.25cqw).
 */
export type CrowdFace = { x: number; y: number; size: number; face: FaceConfig };
export type CrowdMark = { x: number; y: number; size: number; kind: MarkKind; color: string };

const { blue, green, orange, purple, gray, charcoal } = FACE_PALETTE;
const f = (x: number, y: number, size: number, expression: FaceExpression, color: string, rotation = 0, gaze?: { x: number; y: number }): CrowdFace => ({
  x, y, size,
  face: { ...FACE_PRESETS[expression], color, rotation: (FACE_PRESETS[expression].rotation ?? 0) + rotation, ...(gaze && { gaze }) },
});

export const coverCrowd: CrowdFace[] = [
  f(4.2, 3.5, 10, "sleepy", orange, -8, { x: 0.1, y: 0.45 }),
  f(13.7, 1.7, 7, "spark", gray, 0, { x: 0.15, y: 0.1 }),
  f(24.8, 3.7, 11.7, "curious", blue, 0, { x: 0.05, y: 0.35 }),
  f(40.6, 0.5, 7.5, "happy", charcoal),
  f(36.8, 10.6, 14.5, "spark", gray, 0, { x: 0.1, y: -0.3 }),
  f(48.8, 5.7, 10, "sleepy", orange, 6, { x: -0.25, y: 0.55 }),
  f(57.1, 7.4, 4.6, "plus", green, 0, { x: 0.2, y: -0.3 }),
  f(62.5, 0.5, 9, "squeeze", blue),
  f(72.4, 2.6, 5, "curious", purple, 0, { x: 0.05, y: -0.3 }),
  f(83.9, 2, 15, "wink", green, 0, { x: 0.1, y: 0.4 }),
  f(98, 5.5, 11.5, "squeeze", blue, 0, { x: -0.35, y: 0 }),
  f(6.3, 10.9, 3.6, "curious", charcoal, 0, { x: -0.1, y: 0 }),
  f(14.7, 10.6, 5, "wink", purple, 0, { x: -0.3, y: -0.05 }),
  f(65.6, 10.7, 7, "spark", gray, 0, { x: 0, y: 0 }),
  f(75.8, 12.9, 11, "sleepy", orange, 0, { x: 0, y: 0.75 }),
  f(88, 12.6, 7.5, "happy", charcoal, 0, { x: 0.1, y: -0.2 }),
  f(3, 21.8, 15, "plus", green, 0, { x: 0.25, y: 0.3 }),
  f(13.6, 17, 4.6, "plus", green, 0, { x: 0.2, y: -0.3 }),
  f(23.1, 16.5, 7.5, "happy", charcoal, 0, { x: 0.15, y: -0.1 }),
  f(17.3, 25, 10, "sleepy", orange, 0, { x: 0, y: -0.55 }),
  f(27.5, 26.7, 7, "spark", gray, 0, { x: 0, y: 0 }),
  f(30.6, 20, 5, "plus", green, 0, { x: 0.25, y: 0.1 }),
  f(38.8, 24.1, 10, "sleepy", blue, 0, { x: 0, y: -0.85 }),
  f(47.6, 26.8, 5, "curious", purple, 0, { x: 0.1, y: -0.2 }),
  f(58.5, 21.2, 16, "happy", charcoal, -12, { x: 0, y: 0 }),
  f(65.3, 30.6, 5, "sleepy", orange, 0, { x: 0, y: -0.85 }),
  f(72.8, 26.1, 10, "plus", green, 0, { x: -0.1, y: -0.45 }),
  f(86.4, 20, 5, "wink", purple, 0, { x: -0.3, y: 0 }),
  f(98.5, 22.8, 14.5, "spark", gray, 0, { x: -0.25, y: -0.35 }),
];

export const coverMarks: CrowdMark[] = [
  { x: 8.9, y: 9.3, size: 2.2, kind: "heart", color: charcoal },
  { x: 60.5, y: 5, size: 2.4, kind: "exclaim", color: green },
  { x: 16.8, y: 14.6, size: 2.4, kind: "exclaim", color: green },
  { x: 46.3, y: 19.2, size: 4.4, kind: "heart", color: blue },
  { x: 79.8, y: 20.6, size: 2.2, kind: "asterisk", color: green },
  { x: 78.4, y: 22.9, size: 2.2, kind: "asterisk", color: green },
  { x: 81.3, y: 23, size: 2.2, kind: "asterisk", color: green },
];

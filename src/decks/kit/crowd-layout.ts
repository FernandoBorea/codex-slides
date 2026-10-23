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

type Point = { x: number; y: number };

/** Points the eyes from `from` toward `to`, so a crowd can look at a title or a speaker. */
export function lookAt(face: FaceConfig, from: Point, to: Point, strength = 0.55): FaceConfig {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy) || 1;
  return { ...face, gaze: { x: Number(((dx / length) * strength).toFixed(3)), y: Number(((dy / length) * strength).toFixed(3)) } };
}

/** Companions for a speaker's face: every palette color but the speaker's own. */
function companions(speaker: FaceConfig) {
  const pool: { expression: FaceExpression; color: string }[] = [
    { expression: "curious", color: purple },
    { expression: "plus", color: green },
    { expression: "sleepy", color: orange },
    { expression: "spark", color: gray },
    { expression: "squeeze", color: blue },
    { expression: "happy", color: charcoal },
    { expression: "wink", color: orange },
  ];
  return pool.filter((item) => item.color.toLowerCase() !== speaker.color.toLowerCase());
}

/**
 * Talk cover: the speaker's face, large, with a few smaller faces around it
 * looking at it, and a couple of marks. Lives on the right half of the slide.
 */
export function speakerCluster(speaker: FaceConfig): { faces: CrowdFace[]; marks: CrowdMark[] } {
  const center = { x: 79, y: 25 };
  const others = companions(speaker);
  const spots = [
    { x: 61.5, y: 10.5, size: 7 },
    { x: 95.5, y: 6.5, size: 10 },
    { x: 62.5, y: 37, size: 9.5 },
    { x: 98, y: 40, size: 13 },
    { x: 74, y: 46.5, size: 5.5 },
  ];
  const faces = spots.map((spot, index) => {
    const pick = others[index % others.length];
    const base = { ...FACE_PRESETS[pick.expression], color: pick.color };
    return { ...spot, face: lookAt(base, spot, center, 0.6) };
  });
  return {
    faces: [...faces, { ...center, size: 24, face: { ...speaker, gaze: { x: 0, y: 0.08 } } }],
    marks: [
      { x: 67.5, y: 6.5, size: 3.2, kind: "heart", color: blue },
      { x: 91.5, y: 15, size: 2.6, kind: "exclaim", color: green },
      { x: 57, y: 24, size: 2.2, kind: "asterisk", color: green },
    ],
  };
}

/** Closing: a row of faces along the bottom edge, all looking at `target`. */
export function closingCrowd(target: Point): CrowdFace[] {
  const row: { x: number; size: number; expression: FaceExpression; color: string }[] = [
    { x: 4, size: 12, expression: "plus", color: green },
    { x: 15, size: 9, expression: "curious", color: purple },
    { x: 26, size: 13, expression: "sleepy", color: orange },
    { x: 38, size: 8, expression: "spark", color: gray },
    { x: 49, size: 14, expression: "squeeze", color: blue },
    { x: 61, size: 9, expression: "happy", color: charcoal },
    { x: 72, size: 12, expression: "wink", color: green },
    { x: 84, size: 9.5, expression: "curious", color: orange },
    { x: 95, size: 13, expression: "spark", color: gray },
  ];
  return row.map(({ x, size, expression, color }, index) => {
    const spot = { x, y: 56.25 - size * 0.18 + (index % 2) * 1.2 };
    return { ...spot, size, face: lookAt({ ...FACE_PRESETS[expression], color }, spot, target, 0.7) };
  });
}

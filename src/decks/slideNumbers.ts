/** Session metadata keeps its original order, including sessions from older decks. */
export function getFirstSlideNumber(slides: readonly { slug: string }[]): 0 | 1 {
  return slides[0]?.slug === "espera" ? 0 : 1;
}

export function formatSlideNumber(index: number, firstSlideNumber: 0 | 1 = 1) {
  return String(index + firstSlideNumber).padStart(2, "0");
}

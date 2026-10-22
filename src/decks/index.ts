import type { Deck } from "./types";
import { eventDeck } from "./devday/deck";
import { talkDecks } from "./talks";

export type { Deck, SlideDefinition } from "./types";

// The event opening first, then the talks in agenda order (src/decks/talks.ts).
// Keep slugs and question IDs stable so a fork can use the same live backend.
export const decks: Deck[] = [eventDeck, ...talkDecks];

export function findDeck(slug: string): Deck | undefined {
  return decks.find((deck) => deck.slug === slug);
}

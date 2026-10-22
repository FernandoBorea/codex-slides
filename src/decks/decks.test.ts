import { describe, expect, it } from "vitest";
import { decks } from ".";
import { talkDecks } from "./talks";

describe("DevDay decks", () => {
  it("opens with the event deck followed by the six talks", () => {
    expect(decks[0].slug).toBe("devday-exchange-san-salvador");
    expect(talkDecks).toHaveLength(6);
    expect(new Set(talkDecks.map((deck) => deck.speaker?.id)).size).toBe(6);
  });

  it("keeps deck slugs, slide slugs and question ids unique", () => {
    expect(new Set(decks.map((deck) => deck.slug)).size).toBe(decks.length);
    const questionIds = decks.flatMap((deck) =>
      deck.slides.flatMap((slide) => (slide.question ? [slide.question.id] : [])),
    );
    expect(new Set(questionIds).size).toBe(questionIds.length);
    for (const deck of decks) {
      const slugs = deck.slides.map((slide) => slide.slug);
      expect(new Set(slugs).size, deck.slug).toBe(slugs.length);
    }
  });

  it("starts every deck with the shared 00 cover and ends talks with questions", () => {
    for (const deck of decks) {
      expect(deck.firstSlideNumber).toBe(0);
      expect(deck.slides[0].slug).toBe("espera");
      expect(deck.slides[0].question).toBeUndefined();
    }
    for (const deck of talkDecks) {
      expect(deck.slides.at(-1)?.slug).toBe("preguntas");
    }
  });
});

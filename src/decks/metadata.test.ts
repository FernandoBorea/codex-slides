import { describe, expect, it } from "vitest";
import { slideMetadata } from "./metadata";
import type { SlideDefinition } from "./types";

describe("session metadata", () => {
  it("excludes moderator notes, local motion and components from audience metadata", () => {
    const slide: SlideDefinition = {
      slug: "welcome",
      title: "Welcome",
      kicker: "01",
      guide: { intro: "Hello", sections: [{ title: "Start", body: "Here" }] },
      component: () => null,
      ambientMotion: true,
      speakerNotes: {
        script: "Private moderator cue",
        timing: "1:00",
        interaction: "Open the poll after the example",
      },
      question: {
        id: "first",
        prompt: "Ready?",
        type: "single",
        options: [
          { id: "yes", label: "Yes" },
          { id: "no", label: "No" },
        ],
      },
    };
    const [metadata] = slideMetadata([slide]);
    expect(Object.keys(metadata).sort()).toEqual([
      "guide",
      "kicker",
      "question",
      "slug",
      "title",
    ]);
    expect(structuredClone(metadata)).toEqual(metadata);
    expect(metadata.question).toEqual(slide.question);
    expect(metadata.guide).toEqual(slide.guide);
    expect(metadata).not.toHaveProperty("speakerNotes");
    expect(JSON.stringify(metadata)).not.toContain("Private moderator cue");
    expect(slide.ambientMotion).toBe(true);
  });

  it("does not insert undefined question fields into sessions", () => {
    const [metadata] = slideMetadata([
      {
        slug: "plain",
        title: "Plain",
        kicker: "02",
        guide: { intro: "Listen" },
        component: () => null,
      },
    ]);
    expect(metadata).not.toHaveProperty("question");
    expect(JSON.parse(JSON.stringify(metadata))).toEqual(metadata);
  });
});

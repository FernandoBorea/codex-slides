import { describe, expect, it } from "vitest";
import { publicSessionUrl } from "./publicSessionUrl";

describe("audience sharing destination", () => {
  it("keeps local sessions on their storage origin even with production and LAN settings", () => {
    expect(
      publicSessionUrl("a123456789abcdef", {
        mode: "local",
        origin: "http://localhost:4173",
        publicUrl: "https://slides.example.com",
        lanHost: "192.168.1.5",
      }),
    ).toBe("http://localhost:4173/join/a123456789abcdef");
  });

  it("uses the configured public origin for remote sharing without carrying query parameters", () => {
    expect(
      publicSessionUrl("a123456789abcdef", {
        mode: "convex",
        origin: "http://localhost:4173",
        publicUrl: "https://slides.example.com/settings?debug=1#preview",
        lanHost: "192.168.1.5",
      }),
    ).toBe("https://slides.example.com/join/a123456789abcdef");
  });

  it("makes a development URL accessible on the LAN while retaining its port", () => {
    expect(
      publicSessionUrl("a123456789abcdef", {
        mode: "convex",
        origin: "http://localhost:4173",
        lanHost: "192.168.1.5",
      }),
    ).toBe("http://192.168.1.5:4173/join/a123456789abcdef");
  });

  it.each([
    "not a URL",
    "javascript:alert(1)",
    "https://user:secret@example.com",
  ])("does not share unsafe or malformed configured URLs: %s", (publicUrl) => {
    expect(
      publicSessionUrl("a123456789abcdef", {
        mode: "convex",
        origin: "https://slides.example.com",
        publicUrl,
      }),
    ).toBe("https://slides.example.com/join/a123456789abcdef");
  });

  it("does not replace an already-public host with a development network address", () => {
    expect(
      publicSessionUrl("a123456789abcdef", {
        mode: "convex",
        origin: "https://slides.example.com",
        lanHost: "192.168.1.5",
      }),
    ).toBe("https://slides.example.com/join/a123456789abcdef");
  });
});

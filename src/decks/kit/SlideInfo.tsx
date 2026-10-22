import { createContext, useContext, type ComponentType } from "react";
import type { Speaker } from "../../devday/speakers";

/** Where a slide sits in its deck; SlideFrame reads it to draw the footer. */
export type SlideInfo = {
  deckTitle: string;
  speaker?: Speaker;
  /** "03" */
  number: string;
  /** "09": the last numbered slide (the 00 cover is not counted). */
  total: string;
};

const SlideInfoContext = createContext<SlideInfo | null>(null);

export function useSlideInfo() {
  return useContext(SlideInfoContext);
}

/** Wraps a slide once, at module level, so its component reference stays stable. */
export function withSlideInfo(Component: ComponentType, info: SlideInfo): ComponentType {
  function SlideWithInfo() {
    return (
      <SlideInfoContext.Provider value={info}>
        <Component />
      </SlideInfoContext.Provider>
    );
  }
  SlideWithInfo.displayName = `Slide(${Component.displayName ?? Component.name ?? "anon"})`;
  return SlideWithInfo;
}

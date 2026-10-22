import { solOAstraDeck } from "./sol-o-astra/deck";
import { dotsDeck } from "./dots/deck";
import { agentsApiDeck } from "./agents-api/deck";
import { decisionsApiDeck } from "./decisions-api/deck";
import { codexCloudDeck } from "./codex-en-la-nube/deck";
import { notionCodexDeck } from "./notion-codex/deck";

/** Agenda order. The event deck and the library both read it. */
export const talkDecks = [
  solOAstraDeck,
  dotsDeck,
  agentsApiDeck,
  decisionsApiDeck,
  codexCloudDeck,
  notionCodexDeck,
];

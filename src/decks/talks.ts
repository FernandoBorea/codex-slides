import { codexCloudDeck } from "./codex-en-la-nube/deck";
import { notionCodexDeck } from "./notion-codex/deck";
import { videoCodexDeck } from "./video-con-codex/deck";
import { dotsDeck } from "./dots/deck";
import { agentsApiDeck } from "./agents-api/deck";
import { decisionsApiDeck } from "./decisions-api/deck";

/** The event agenda and library share this order. */
export const talkDecks = [codexCloudDeck, notionCodexDeck, videoCodexDeck, dotsDeck, agentsApiDeck, decisionsApiDeck];

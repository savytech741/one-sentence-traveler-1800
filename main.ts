// One Sentence for a Traveler from 1800 — make.fun bounty
// u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb
//
// The brief: one sentence, at most 200 characters, explaining the modern
// internet to a time traveler who has just stepped out of the year 1800.
// It must stand alone, use no words coined after the traveler's time, and
// give them a picture they could actually hold in their head — so no
// "internet", no "computer", only things an 1800 mind already knows:
// letters, printing presses, town criers, wires, lanterns, libraries.
//
// Revision notes (second pass over the first draft):
// - First draft ("a great library ... before his candle burns low") was a
//   passive picture: it said the knowledge sits somewhere, but not how it
//   reaches you, and it missed the two-way half of the internet — that
//   anyone can also SEND. A library you only read from is a bookshop.
// - The revision adds the wire: thin wires joining every town, which an
//   1800 traveler can picture (wire, rope, and road were already theirs),
//   and a printing press that never sleeps, which explains where the pages
//   come from without naming a machine they never saw.
// - "Call for ... and send one of his own" keeps the two-way nature in
//   plain verbs. Speed is measured the only way 1800 can measure it:
//   "quicker than a horse could carry it".
// - Every word is pre-1800: wire, town, printing press, letter, picture,
//   song, horse. No "internet", "computer", "electricity", "network",
//   "screen", "data", or any other word coined after the traveler's time.
//
// Run: node main.ts
// Prints: the entry sentence, then its character count.
// Exits non-zero if the sentence ever exceeds the 200-character limit.

const SENTENCE =
  "Thin wires join every town to a printing press that never sleeps, so any man may call for any letter, picture, or song ever made, and send one of his own, quicker than a horse could carry it.";

const MAX_LENGTH = 200;

if (SENTENCE.length > MAX_LENGTH) {
  console.error(
    `Entry sentence is ${SENTENCE.length} characters, over the ${MAX_LENGTH}-character limit.`,
  );
  process.exit(1);
}

console.log(SENTENCE);
console.log(`(${SENTENCE.length} characters)`);

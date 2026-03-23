export interface Fallacy {
  id: string;
  name: string;
  basePts: number;
  explanation: string;
  example: string;
  judgeAction: string;
  escalates: boolean;
  tiered?: number[];
  category: string;
}

export const fallacies: Fallacy[] = [
  // ── RULEBOOK CORE (Supervive aut Mori EX) ──────────────────────────────
  {
    id: "AD", name: "Ad Hominem", basePts: 25, category: "RULEBOOK",
    explanation: "Instead of attacking the ARGUMENT, they attack the PERSON making it. They go after your character, past, looks, or background to make you look bad — not to prove you're wrong.",
    example: "\"You failed your last debate, so nothing you say today matters.\" — None of that disproves your point.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "SM", name: "Straw Man", basePts: 25, category: "RULEBOOK",
    explanation: "They twist or exaggerate what you said into a fake, easier-to-attack version of your argument — then defeat THAT instead of what you actually said.",
    example: "You say: \"We should have some safety rules.\" They respond: \"So you want the government to control everything we do?\" — That's not what you said.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "RH", name: "Red Herring", basePts: 10, category: "RULEBOOK",
    explanation: "They change the subject by introducing something completely unrelated, hoping you'll get distracted and forget the original point that was hurting them.",
    example: "Debate is about policy X. They say: \"But what about the economy in general?\" — Totally unrelated, designed to steer away from the real issue.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "FD", name: "False Dilemma", basePts: 10, category: "RULEBOOK",
    explanation: "They pretend there are only TWO choices when there are actually many more. By forcing a fake either/or, they make one option look like the only alternative to something bad.",
    example: "\"Either you support this policy completely, or you don't care about people.\" — There are obviously many positions in between.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "SS", name: "Slippery Slope", basePts: 10, category: "RULEBOOK",
    explanation: "They claim that one small action will automatically lead to a series of extreme consequences — but provide no proof that each step in that chain will actually happen.",
    example: "\"If we allow this minor thing, eventually everything will collapse into chaos.\" — They skipped all the steps in between.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "CR", name: "Circular Reasoning", basePts: 10, category: "RULEBOOK",
    explanation: "Their conclusion is secretly hidden inside their own premise. They're using the thing they need to PROVE as if it were already proven — the argument goes in a circle.",
    example: "\"This is the truth because it's true.\" or \"The book is right because the book says it's right.\"",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "HG", name: "Hasty Generalization", basePts: 10, category: "RULEBOOK",
    explanation: "They draw a sweeping conclusion about a large group based on a tiny, unrepresentative sample. One or two cases don't prove a universal rule.",
    example: "\"I met two people from that city who were rude, so everyone from there must be rude.\"",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "AOA", name: "Appeal to Authority", basePts: 10, category: "RULEBOOK",
    explanation: "They say something is true simply because an important or famous person said it — without providing actual evidence or logic. The authority's reputation replaces real proof.",
    example: "\"A celebrity said this supplement works, so it must be true.\" — Celebrity status doesn't make medical claims valid.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "AE", name: "Appeal to Emotion", basePts: 10, category: "RULEBOOK",
    explanation: "They try to win by making you feel a strong emotion — fear, guilt, sadness, outrage — instead of giving you logical reasons or evidence to support their claim.",
    example: "\"Think of the children who will suffer if you disagree with me!\" — Emotional manipulation, not an argument.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "BW", name: "Bandwagon", basePts: 10, category: "RULEBOOK",
    explanation: "They argue something is true or correct simply because a lot of people believe it or do it. Popularity is not the same as truth.",
    example: "\"Millions of people believe this, so it has to be right.\" — The majority has been wrong many times in history.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "AI", name: "Appeal to Ignorance", basePts: 10, category: "RULEBOOK",
    explanation: "They claim something must be true because nobody has proven it FALSE — or claim something is false because nobody has proven it TRUE. Absence of proof is not proof of absence.",
    example: "\"No one has disproved my theory, so it must be correct.\" — The burden of proof lies with the person making the claim.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "TQ", name: "Tu Quoque", basePts: 10, category: "RULEBOOK",
    explanation: "Instead of addressing your criticism, they deflect by pointing out that YOU or someone on your side does the same thing. Even if true, this doesn't make their original action correct.",
    example: "\"You're criticizing me for being late, but YOU were late last week!\" — That doesn't make being late okay.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "FC", name: "False Cause", basePts: 10, category: "RULEBOOK",
    explanation: "They assume that because one thing happened BEFORE another, the first thing must have CAUSED the second. Sequence does not equal causation.",
    example: "\"Crime went up after the new mayor took office, so the mayor caused the crime increase.\" — Many other factors could be responsible.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "NS", name: "Non Sequitur", basePts: 10, category: "RULEBOOK",
    explanation: "Their conclusion simply does not follow logically from their premises. There's a disconnect — the reasoning jumps to a conclusion that the evidence doesn't support.",
    example: "\"She's a great athlete, therefore she would make an excellent politician.\" — Athletic skill has no logical connection to governing ability.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "GG", name: "Gish Gallop", basePts: 10, category: "RULEBOOK",
    explanation: "They rapidly fire off a huge number of weak arguments, half-truths, and claims — too many to address in the time available. The goal is to overwhelm, not to be right. Volume replaces quality.",
    example: "Listing 15 vague objections in 30 seconds — even if each one is wrong, you can't address them all fast enough.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "NTS", name: "No True Scotsman", basePts: 10, category: "RULEBOOK",
    explanation: "When a counterexample threatens their generalization, they redefine the group to exclude it — so their claim can never be falsified. It's an unfalsifiable moving of the goalposts.",
    example: "\"No real fan would ever do that.\" — When shown a fan who did: \"Well then they weren't a REAL fan.\"",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "MG", name: "Middle Ground", basePts: 10, category: "RULEBOOK",
    explanation: "They assume that the truth must lie somewhere between two extreme positions — but the truth doesn't always split down the middle. Sometimes one side is simply correct.",
    example: "\"One person says the earth is flat, one says it's round — the truth must be somewhere in between.\" — No, it isn't.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "FF", name: "Fallacy Fallacy", basePts: 10, category: "RULEBOOK",
    explanation: "They assume that because an argument contains a logical fallacy, the conclusion must be WRONG. But a flawed argument can still lead to a true conclusion — you need separate evidence to disprove the claim itself.",
    example: "\"Your argument for why the sky is blue used a fallacy, therefore the sky is not blue.\" — The sky is still blue.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "BQ", name: "Begging the Question", basePts: 10, category: "RULEBOOK",
    explanation: "The conclusion they're trying to prove is already assumed to be true inside one of their premises. They haven't actually proven anything — they've just restated the assumption in different words.",
    example: "\"We know God exists because the holy text says so, and the holy text is true because God wrote it.\"",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "FA", name: "False Analogy", basePts: 10, category: "RULEBOOK",
    explanation: "They compare two things as if they are similar when they are actually different in the ways that matter most. The analogy breaks down under scrutiny.",
    example: "\"Running a country is like running a business — so a CEO would make the best president.\" — The two roles have fundamentally different goals, constraints, and accountability.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "FN", name: "Fallacy of Nothingness", basePts: 10, category: "RULEBOOK",
    explanation: "The speaker is just reading from a prepared script and not actually engaging with the debate. They cannot respond to challenges because they're reciting, not thinking. There's no real intellectual presence.",
    example: "Debater reads their notes word-for-word and when questioned, freezes — because they have no actual understanding of what they're saying.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "EI", name: "Failed to Expand", basePts: 10, category: "RULEBOOK",
    explanation: "They make a claim but cannot explain, elaborate, or defend it when pressed. If you can't explain WHY something is true, you don't actually have an argument — you have a statement.",
    example: "\"This policy is clearly the best.\" Judge: \"Why?\" Debater: \"...It just is.\" — No reasoning provided.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "DDC", name: "Dead Discussion Condition", basePts: 5, category: "RULEBOOK",
    explanation: "The debater goes silent, refuses to respond, or shuts down after being challenged. Silence is not a defense. Refusing to engage kills the debate and earns escalating penalties.",
    example: "Judge challenges a claim. Debater says nothing, looks away, or simply says \"I have nothing more to say\" — conversation over.",
    judgeAction: "Tiered penalty: -5 first offense / -10 second / -15 third+.", escalates: true, tiered: [5, 10, 15],
  },

  // ── FORMAL LOGIC ────────────────────────────────────────────────────────
  {
    id: "FM-AC", name: "Affirming the Consequent", basePts: 15, category: "FORMAL",
    explanation: "They see that a RESULT is present and assume the cause must also be present. Just because the result can come from one cause doesn't mean it always does — other causes exist.",
    example: "\"If it rains, the street gets wet. The street is wet — so it must have rained.\" But a sprinkler could have done it.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "FM-DA", name: "Denying the Antecedent", basePts: 15, category: "FORMAL",
    explanation: "They assume that if the cause is absent, the effect must be absent too. But the effect could have been produced by a different cause entirely.",
    example: "\"If it rains, the street is wet. It didn't rain — so the street must be dry.\" But the street cleaner was just there.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "FM-AD", name: "Affirming a Disjunct", basePts: 15, category: "FORMAL",
    explanation: "When two options are presented as OR choices, they assume that confirming one automatically rules out the other — but both could be true at the same time.",
    example: "\"You're either smart OR hardworking. You're smart — so you must not be hardworking.\" Someone can clearly be both.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "FM-UDM", name: "Undistributed Middle", basePts: 15, category: "FORMAL",
    explanation: "Two things share a common trait, so they conclude the two things must be the same. But sharing one feature doesn't make things identical.",
    example: "\"All dogs are mammals. All cats are mammals. Therefore dogs are cats.\" — The shared trait (mammal) doesn't connect them to each other.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "FM-4TM", name: "Fallacy of Four Terms", basePts: 15, category: "FORMAL",
    explanation: "A logical syllogism should have exactly THREE terms. When a word is used in two different meanings across the argument, it secretly introduces a fourth term — breaking the logic.",
    example: "\"Nothing is better than happiness. A sandwich is better than nothing. Therefore a sandwich is better than happiness.\" — 'Nothing' means two different things.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "FM-EXI", name: "Existential Fallacy", basePts: 15, category: "FORMAL",
    explanation: "They draw a conclusion that implies something exists when their premises are only about abstract categories — and never established that anything in those categories actually exists.",
    example: "\"All dragons breathe fire. Some dragons are friendly. Therefore friendly, fire-breathing things exist.\" — But dragons don't exist at all.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "FM-IFE", name: "Illicit Exclusive", basePts: 15, category: "FORMAL",
    explanation: "They treat an OR statement as if only ONE option can ever be true, when in reality both options can be true simultaneously.",
    example: "\"You can be book-smart OR street-smart.\" — In reality, many people are both.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "FM-MMP", name: "Modus Ponens Abuse", basePts: 15, category: "FORMAL",
    explanation: "They chain together a series of IF-THEN statements incorrectly, making an invalid logical leap appear to follow naturally from the premises.",
    example: "Building a chain of conditionals where an early link is invalid, but the conclusion is presented as if the whole chain is airtight.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "FM-MMT", name: "Modus Tollens Abuse", basePts: 15, category: "FORMAL",
    explanation: "Valid logic says: if NOT the result, then NOT the cause. They abuse this by reversing it — claiming that if not the cause, then not the result (which is the Denying the Antecedent error).",
    example: "Confusing which direction the conditional runs, then treating the reversed version as equally valid.",
    judgeAction: "Flag and deduct.", escalates: true,
  },

  // ── RELEVANCE & ATTACK ─────────────────────────────────────────────────
  {
    id: "RH-STR", name: "Straw Man (Extended)", basePts: 10, category: "RELEVANCE",
    explanation: "A more elaborate version of the Straw Man — they build a detailed but distorted caricature of your position, adding things you never said, then tear down their own invention.",
    example: "You support modest reforms. They say: \"My opponent wants to completely destroy the system and start from scratch.\" — Completely fabricated.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "RH-WHT", name: "Whataboutism", basePts: 10, category: "RELEVANCE",
    explanation: "When confronted with a problem, they deflect entirely by pointing to a DIFFERENT problem — usually one involving you or your side. It's a distraction, not a defense.",
    example: "\"You're criticizing our environmental record? What about the pollution YOUR side caused ten years ago?\" — Two wrongs don't make a right.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "RH-POI", name: "Poisoning the Well", basePts: 10, category: "RELEVANCE",
    explanation: "Before you even get to speak, they plant negative information about you in the audience's mind — so anything you say will be received with suspicion. Pre-emptive character assassination.",
    example: "\"Before my opponent speaks, you should know they have been wrong about this topic before.\" — Designed to make the audience distrust you before hearing your argument.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "RH-GUI", name: "Guilt by Association", basePts: 10, category: "RELEVANCE",
    explanation: "They discredit your idea not by addressing it, but by pointing out that a disliked, discredited, or hated group also holds that view. The idea itself isn't addressed.",
    example: "\"That's what extremists believe too, so you're agreeing with extremists.\" — Even if someone bad shares your view, it doesn't make your view wrong.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "RH-TON", name: "Tone Policing", basePts: 10, category: "RELEVANCE",
    explanation: "Instead of engaging with your ARGUMENT, they focus on HOW you said it — your tone, emotion, or delivery — as a way to dismiss what you said without actually rebutting it.",
    example: "\"I'd take your point seriously if you weren't so passionate about it.\" — The validity of an argument is independent of the speaker's emotional state.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "RH-GEN", name: "Genetic Fallacy", basePts: 10, category: "RELEVANCE",
    explanation: "They dismiss your argument based on where it came from — the source, the origin, or who first said it — rather than evaluating the argument on its own merits.",
    example: "\"That research came from a biased institution, so we can ignore it entirely.\" — Even biased sources can produce valid data that deserves engagement.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "RH-ABS", name: "Argumentum ad Absurdum", basePts: 10, category: "RELEVANCE",
    explanation: "They take your argument to a ridiculous extreme that you never intended, then mock the absurd extreme as if that's what you actually meant. Different from a legitimate reductio ad absurdum.",
    example: "\"You want stricter food safety? So you want every meal inspected by a government official standing in your kitchen?\" — A wild exaggeration of a reasonable position.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "RH-BCK", name: "Bulverism", basePts: 10, category: "RELEVANCE",
    explanation: "They skip past WHETHER you're wrong and jump straight to EXPLAINING why you believe something false — as if your error were already established. They assume the conclusion, then psychoanalyze you.",
    example: "\"You only believe that because of how you were raised\" — said without ever actually proving you're wrong.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },

  // ── APPEALS ────────────────────────────────────────────────────────────
  {
    id: "AP-NAT", name: "Appeal to Nature", basePts: 10, category: "APPEALS",
    explanation: "They argue something is good or right simply because it is 'natural' — as if nature automatically equals good. Many natural things are harmful; many unnatural things save lives.",
    example: "\"This medicine is bad because it's synthetic. You should use this plant instead — it's natural.\" — Arsenic is natural too.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "AP-PIT", name: "Appeal to Pity", basePts: 10, category: "APPEALS",
    explanation: "They try to make you feel so sorry for them or their cause that you agree out of compassion rather than logic. Pity is manipulated as a substitute for evidence.",
    example: "\"I've worked so hard for so long on this — surely you can see things my way.\" — Hard work doesn't make an argument correct.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "AP-TRD", name: "Appeal to Tradition", basePts: 10, category: "APPEALS",
    explanation: "They justify something purely because it's old or 'how it's always been done.' Longevity is not evidence of correctness — many terrible things have long traditions.",
    example: "\"We've always done it this way, so we should keep doing it.\" — History is full of traditions we've rightfully abandoned.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "AP-RID", name: "Appeal to Ridicule", basePts: 10, category: "APPEALS",
    explanation: "They mock your argument instead of engaging with it — making it sound laughable or silly so the audience won't take it seriously, without providing any actual counter-argument.",
    example: "\"Ha! That's the most ridiculous thing I've ever heard in a debate.\" — Laughter replaces logic.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "AP-FRC", name: "Appeal to Force", basePts: 10, category: "APPEALS",
    explanation: "They use implied or explicit threats to get you to agree rather than providing reasoning. Agreement through coercion or fear is not intellectual victory.",
    example: "\"You'd better agree with me — there are consequences for people who don't.\" — Threats are not arguments.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "AP-CON", name: "Appeal to Consequences", basePts: 10, category: "APPEALS",
    explanation: "They argue that something MUST be true because believing it is false would lead to bad outcomes — or that it MUST be false because the truth would be inconvenient. Consequences don't determine facts.",
    example: "\"If that theory were true, it would be devastating — so it simply can't be true.\" — Reality doesn't care what's convenient.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "AP-NOV", name: "Appeal to Novelty", basePts: 10, category: "APPEALS",
    explanation: "They claim something is better simply because it is newer or more modern — as if being new automatically makes it an improvement. New is not automatically better.",
    example: "\"This is the latest approach, so it must be superior to what came before.\" — Many new ideas turn out to be worse than their predecessors.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "AP-WEA", name: "Appeal to Wealth", basePts: 10, category: "APPEALS",
    explanation: "They use their financial success or high status as proof that their reasoning is sound. Being rich or successful does not make someone's arguments correct.",
    example: "\"I've built a billion-dollar company — trust me, I understand how this works.\" — Wealth is not a logic credential.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "AP-POV", name: "Appeal to Poverty", basePts: 10, category: "APPEALS",
    explanation: "They argue their position has more moral weight because it comes from a less privileged background, or dismiss others' views because they are wealthy. The merit of an argument is independent of economic status.",
    example: "\"You can't understand this issue — you've never struggled financially.\" — Background doesn't make logic right or wrong.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },

  // ── DATA & CAUSAL ──────────────────────────────────────────────────────
  {
    id: "DT-CP", name: "Cherry Picking", basePts: 10, category: "DATA",
    explanation: "They selectively present only the evidence that supports their view while completely ignoring the much larger body of evidence that contradicts it. The selected data is real — the omission is the deception.",
    example: "Citing the one study that supports them while ignoring the 20 studies that don't. The full picture tells a very different story.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "CS-PH", name: "Post Hoc", basePts: 10, category: "DATA",
    explanation: "They assume that because event B happened AFTER event A, event A must have caused event B. Timing is not causation — two things can happen in sequence by pure coincidence.",
    example: "\"I wore my lucky socks and we won the game — the socks caused the win.\" — Or the team just played better.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "CS-CC", name: "Correlation/Causation", basePts: 10, category: "DATA",
    explanation: "Two things rise and fall together — so they assume one must be CAUSING the other. But both could be caused by a third factor, or the correlation could be pure coincidence.",
    example: "\"Ice cream sales and drowning rates both increase in summer. Ice cream causes drowning.\" — Both are actually caused by hot weather.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "DT-GAM", name: "Gambler's Fallacy", basePts: 10, category: "DATA",
    explanation: "They believe that past random events affect future independent random events. Each event is independent — previous outcomes have zero influence on what comes next.",
    example: "\"It's come up heads 7 times in a row — tails is definitely due next.\" — A fair coin has no memory.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "DT-SRV", name: "Survivorship Bias", basePts: 10, category: "DATA",
    explanation: "They only look at the successful cases that 'survived' to be visible — completely ignoring the far larger number of failures that didn't make it. This creates a distorted, overly optimistic picture.",
    example: "\"Successful entrepreneurs all dropped out of college.\" — We don't count the millions who dropped out and failed.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "DT-ANK", name: "Anchoring Bias", basePts: 10, category: "DATA",
    explanation: "The first number or piece of information presented acts as an 'anchor' that skews all subsequent judgments. Even when irrelevant, the anchor pulls reasoning toward it.",
    example: "A product is listed at $1,000 then 'discounted' to $600. The $1,000 anchor makes $600 feel like a deal, even if $600 is overpriced.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "DT-CON", name: "Confirmation Bias", basePts: 10, category: "DATA",
    explanation: "They only look for, cite, and remember information that confirms what they already believe — and unconsciously ignore or dismiss everything that challenges it.",
    example: "Only citing studies that agree with their position while saying \"there's no evidence\" against them — because they never looked for it.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "DT-SPL", name: "Small Sample Size", basePts: 10, category: "DATA",
    explanation: "They draw sweeping conclusions from a group so small it cannot possibly represent the larger population. Small samples are easily distorted by random variation.",
    example: "\"I surveyed 8 people and they all agreed — clearly this is the majority view.\" — 8 people cannot represent millions.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "DT-ECF", name: "Ecological Fallacy", basePts: 10, category: "DATA",
    explanation: "They take statistics about a GROUP and apply them to conclusions about INDIVIDUALS within that group. What's true on average for a population tells you nothing definite about any specific person.",
    example: "\"The neighborhood voted 70% for X — so your neighbor definitely voted for X.\" — Individual behavior doesn't mirror group statistics.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "DT-MCN", name: "McNamara Fallacy", basePts: 10, category: "DATA",
    explanation: "They only consider factors that can be easily measured with numbers, completely ignoring important factors that can't be quantified. If it can't be counted, it gets treated as if it doesn't exist.",
    example: "Judging the success of a school entirely by test scores — ignoring creativity, mental health, social development, and critical thinking.",
    judgeAction: "Flag and deduct.", escalates: true,
  },

  // ── LOGICAL TRAPS ─────────────────────────────────────────────────────
  {
    id: "IF-GOA", name: "Moving Goalposts", basePts: 25, category: "TRAPS",
    explanation: "Every time you satisfy their demand for proof, they invent a new, higher requirement instead of acknowledging you've met the standard. The bar keeps moving so they never have to admit they were wrong.",
    example: "\"Prove it happened.\" You prove it. \"Prove it happened more than once.\" You prove it. \"Prove the motive.\" — The standard keeps shifting.",
    judgeAction: "Severe deduction — escalates rapidly.", escalates: true,
  },
  {
    id: "IF-LOD", name: "Loaded Question", basePts: 10, category: "TRAPS",
    explanation: "They ask a question that contains a hidden assumption — so any direct answer makes you appear to accept something you never agreed to. There's no safe way to answer without pushing back on the premise first.",
    example: "\"Have you stopped being dishonest?\" — Saying yes implies you were dishonest before. Saying no implies you're still dishonest now.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "IF-NIR", name: "Nirvana Fallacy", basePts: 10, category: "TRAPS",
    explanation: "They reject a realistic solution by comparing it to a perfect, ideal solution that doesn't exist. Because nothing is perfect, nothing ever gets done. The enemy of good is perfect.",
    example: "\"This plan won't solve every single case of the problem — so there's no point implementing it at all.\"",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "AM-EQV", name: "Equivocation", basePts: 10, category: "TRAPS",
    explanation: "They use the same word in two different senses within the same argument, exploiting the ambiguity to make a deceptive logical leap. The word shifts meaning between premise and conclusion.",
    example: "\"A feather is light. Light is not dark. Therefore a feather is not dark.\" — 'Light' means weight in one place, illumination in another.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "IF-AMP", name: "Amphiboly", basePts: 10, category: "TRAPS",
    explanation: "An ambiguous grammatical structure allows a statement to be interpreted in two completely different ways — and they exploit whichever interpretation is convenient.",
    example: "\"I saw the man with binoculars.\" — Did YOU use binoculars to see him, or was HE the one holding binoculars?",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "IF-DIV", name: "Fallacy of Division", basePts: 10, category: "TRAPS",
    explanation: "Because the WHOLE has a certain property, they assume every PART must also have that property. What's true of the group isn't necessarily true of each individual member.",
    example: "\"This team is the best in the league — so every single player on it must be the best at their position.\" — Team success depends on how parts work together, not individual supremacy.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "IF-COM", name: "Fallacy of Composition", basePts: 10, category: "TRAPS",
    explanation: "Because each PART has a certain property, they assume the WHOLE must have it too. What's true of individual members isn't automatically true of the group they form.",
    example: "\"Every player on this team is the best at their position — so this team must be unbeatable.\" — Great individual parts don't always combine into a great team.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "IF-SPE", name: "Special Pleading", basePts: 15, category: "TRAPS",
    explanation: "They apply a rule to everyone else but then invent a special exception for themselves or their side — without any logical justification for why the exception should exist.",
    example: "\"Lying is always wrong — but when WE do it, it's for a greater purpose.\" — The rule either applies to everyone or you need a real justification for the exception.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "IF-REI", name: "Reification", basePts: 10, category: "TRAPS",
    explanation: "They treat an abstract concept as if it were a concrete, physical thing that can act, want, or decide. Abstract ideas don't have agency — people do.",
    example: "\"History demands this.\" \"Society wants change.\" — History and society are concepts; they don't make demands or have wants.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "IF-DEF", name: "Definist Fallacy", basePts: 10, category: "TRAPS",
    explanation: "They define a key term in a way that is specifically designed to guarantee their conclusion is true — the definition does the arguing for them before the debate even begins.",
    example: "Redefining 'success' to mean exactly what their approach achieved — so by definition, their approach was successful.",
    judgeAction: "Flag and deduct.", escalates: true,
  },

  // ── STATISTICAL ────────────────────────────────────────────────────────
  {
    id: "ST-BAY", name: "Base Rate Neglect", basePts: 15, category: "STATS",
    explanation: "They ignore how RARE something is when evaluating evidence about it. If a condition is very rare, even a highly accurate test will produce mostly false positives — but they ignore the rarity entirely.",
    example: "A disease affects 1 in 10,000 people. A test is 99% accurate. A positive test still more likely means you DON'T have the disease — but they say \"99% accurate means you have it.\"",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "ST-REG", name: "Regression Fallacy", basePts: 10, category: "STATS",
    explanation: "Extreme performances naturally tend back toward average over time — that's just statistics. They mistake this natural regression for a caused effect.",
    example: "A student scores unusually high, then gets praised, then scores normally — they conclude the praise 'caused' the decline. It was just regression to the mean.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "ST-PRO", name: "Prosecutor's Fallacy", basePts: 15, category: "STATS",
    explanation: "They confuse two different conditional probabilities — the chance of the evidence given innocence vs. the chance of innocence given the evidence. This makes weak evidence sound like near-certain proof of guilt.",
    example: "\"There's only a 1-in-a-million chance this match is coincidental — so the defendant is almost certainly guilty.\" — This ignores population size and other factors.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "ST-OVR", name: "Overfitting", basePts: 10, category: "STATS",
    explanation: "They construct an explanation so specifically tailored to the existing data that it explains nothing beyond it — and would fail completely with any new data. Complexity is mistaken for accuracy.",
    example: "A theory with 15 special exceptions and conditions that perfectly explains past events but can't predict anything new. It describes but doesn't explain.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "ST-PLD", name: "Plurality Fallacy", basePts: 10, category: "STATS",
    explanation: "They treat whichever option got the most votes — even if it's only a small fraction of the total — as if it represents a majority or dominant consensus.",
    example: "Option A gets 34%, B gets 33%, C gets 33%. They say: \"Option A won — it's what the people want.\" — Two-thirds voted against it.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "ST-AVG", name: "Misleading Average", basePts: 10, category: "STATS",
    explanation: "They use the MEAN (mathematical average) to represent a group when the distribution is heavily skewed — making the 'average' number mislead rather than inform.",
    example: "5 people earn $20k each, and 1 person earns $1 million. The 'average' income is ~$183k — but 5 out of 6 people earn far less than that.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "ST-VIV", name: "Vividness Bias", basePts: 10, category: "STATS",
    explanation: "A single vivid, emotional, personal story is given more weight than large-scale statistical data — because dramatic anecdotes feel more 'real' than numbers, even when the numbers are far more reliable.",
    example: "Dismissing a study of 10,000 people because they personally know someone whose experience was the opposite.",
    judgeAction: "Flag and deduct.", escalates: true,
  },

  // ── LANGUAGE & RHETORIC ────────────────────────────────────────────────
  {
    id: "LG-AMB", name: "Ambiguity", basePts: 10, category: "LANGUAGE",
    explanation: "They deliberately use vague, undefined language so their claim is impossible to pin down or disprove. If the key terms could mean anything, the argument means nothing.",
    example: "\"We support fairness and common sense solutions.\" — What does 'fairness' mean? What is 'common sense'? Undefined terms that can't be challenged.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "LG-DOG", name: "Dogmatism", basePts: 15, category: "LANGUAGE",
    explanation: "They assert their position as an absolute truth that is beyond question or debate — without providing justification. Refusing to engage with challenges is intellectual surrender dressed as confidence.",
    example: "\"This is simply true, and I won't debate it.\" — Then you're not debating, you're declaring.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "LG-EUP", name: "Euphemism Treadmill", basePts: 10, category: "LANGUAGE",
    explanation: "They rename a concept with softer language to avoid the stigma of the old label — but without actually changing the underlying thing being described. The word changes; the reality doesn't.",
    example: "Rebranding a policy that failed under its old name with new terminology — hoping nobody notices it's the same approach.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "LG-PEJ", name: "Pejorative Language", basePts: 10, category: "LANGUAGE",
    explanation: "They use emotionally loaded, negative words to describe your position or people — not to make an argument, but to bias the audience's perception before any logic is applied.",
    example: "Calling a policy 'extremist,' 'radical,' or 'dangerous' without explaining why — the label does the work instead of an actual argument.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "LG-MEN", name: "Mentioning Fallacy", basePts: 5, category: "LANGUAGE",
    explanation: "They raise a damaging or irrelevant idea — then immediately say they're NOT raising it — so the idea still plants itself in the audience's mind without them being accountable for arguing it.",
    example: "\"I'm not saying my opponent is dishonest — I just think that's worth considering.\" — They just said the thing they said they weren't saying.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "LG-SLT", name: "Sloganeering", basePts: 10, category: "LANGUAGE",
    explanation: "They substitute a catchy, memorable phrase for an actual argument — hoping the emotional resonance of the slogan does the persuasive work that logic should do.",
    example: "Repeating a campaign phrase instead of explaining their position's evidence or logic. The slogan is the argument.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "LG-INT", name: "Intentional Vagueness", basePts: 10, category: "LANGUAGE",
    explanation: "Key terms in their argument are left deliberately undefined — making the claim impossible to test or falsify. You can't disprove something that doesn't commit to any specific meaning.",
    example: "\"Some people believe this is a problem.\" — Which people? How many? What problem exactly? Vagueness as a shield.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "LG-EMP", name: "Empty Rhetoric", basePts: 10, category: "LANGUAGE",
    explanation: "They speak with great eloquence and passion — but when you analyze the actual content, nothing concrete or falsifiable has been claimed. Style masking the absence of substance.",
    example: "A speech full of grand words about hope, future, and progress — with no specific claims, evidence, or proposals. Sounds good, says nothing.",
    judgeAction: "Flag and deduct.", escalates: true,
  },

  // ── ETHICAL & STRUCTURAL ───────────────────────────────────────────────
  {
    id: "ET-MOB", name: "Mob Appeal", basePts: 10, category: "ETHICAL",
    explanation: "They try to win by stirring up the emotions of a crowd rather than presenting logical arguments. They're performing for the audience's feelings, not their reason.",
    example: "Using chants, emotional appeals, and crowd energy to 'win' an argument — even though the crowd's emotional reaction proves nothing about the truth of the claim.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "ET-SCA", name: "Scapegoating", basePts: 15, category: "ETHICAL",
    explanation: "They blame a specific group — usually a minority or outgroup — for complex problems, without providing evidence that the group is actually responsible. It provides a simple villain for complex issues.",
    example: "Blaming an entire demographic for economic problems without data showing that group is actually the cause.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "ET-WTW", name: "Wishful Thinking", basePts: 10, category: "ETHICAL",
    explanation: "They believe something is true primarily because they WANT it to be true — allowing desire to override evidence and critical thinking. Hope replaces analysis.",
    example: "\"This plan will definitely work — imagine how great things will be if it does!\" — Optimism about outcomes is not evidence of viability.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "ET-FTH", name: "False Equivalence", basePts: 10, category: "ETHICAL",
    explanation: "They treat two fundamentally unequal things as if they were equally valid, equally extreme, or equally supported — creating a false balance between positions that are not actually comparable.",
    example: "\"Both sides have extremists.\" — Used to draw a moral equivalence between two groups that may be vastly different in scale, evidence, or behavior.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "ET-CON", name: "Continuum Fallacy", basePts: 10, category: "ETHICAL",
    explanation: "Because there is no perfectly sharp dividing line between two things, they argue the distinction itself doesn't exist. But the absence of a bright line doesn't mean there's no difference between extremes.",
    example: "\"You can't define exactly when childhood ends and adulthood begins — so the distinction is meaningless.\" — Dawn and dusk exist even though no one second marks the change.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "ET-MOR", name: "Moralistic Fallacy", basePts: 10, category: "ETHICAL",
    explanation: "They conclude that something IS a certain way based on what they believe it OUGHT to be. Moral preferences don't determine factual reality.",
    example: "\"People should be equal, therefore all human abilities must be equally distributed.\" — What we wish were true doesn't make it true.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "ET-NAT", name: "Naturalistic Fallacy", basePts: 10, category: "ETHICAL",
    explanation: "They move from an IS to an OUGHT — concluding that because something happens naturally, it is therefore morally good or right. Natural processes are morally neutral.",
    example: "\"Competition and aggression evolved naturally in humans — so they are moral and should be embraced.\" — Disease also evolved naturally.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "ET-OPE", name: "Open Question Fallacy", basePts: 10, category: "ETHICAL",
    explanation: "They refuse to ever accept a resolution to a question by insisting it can always be questioned further — using endless skepticism as a way to never accept any conclusion.",
    example: "\"Even if all the evidence points to X, we can always ask whether X is really true.\" — Used to avoid ever reaching a conclusion.",
    judgeAction: "Flag and deduct.", escalates: true,
  },

  // ── COGNITIVE DISTORTIONS ──────────────────────────────────────────────
  {
    id: "CD-BLK", name: "Black & White Thinking", basePts: 10, category: "COGNITIVE",
    explanation: "They see only two extreme options — perfect success or total failure, completely good or completely bad — ignoring the vast spectrum of nuance and gradation that exists between extremes.",
    example: "\"If you're not fully with us, you're against us.\" — There are many positions between full support and active opposition.",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "CD-OVR", name: "Overgeneralization", basePts: 10, category: "COGNITIVE",
    explanation: "From a single event or a small number of cases, they draw a sweeping rule that applies to all cases forever. One data point becomes a universal law.",
    example: "\"This approach failed once — clearly it can never work under any circumstances.\"",
    judgeAction: "Immediate deduction. Escalate if repeated.", escalates: true,
  },
  {
    id: "CD-MIN", name: "Minimization", basePts: 10, category: "COGNITIVE",
    explanation: "They deliberately downplay the significance of damaging evidence or a serious problem — making it seem much smaller or less important than it actually is.",
    example: "\"Yes, there were some flaws in the study, but they're minor and don't really affect the conclusions.\" — When in fact those flaws may be fundamental.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "CD-MAG", name: "Magnification", basePts: 10, category: "COGNITIVE",
    explanation: "They inflate the importance of a piece of evidence or a single incident far beyond what is warranted — making something minor seem like it changes everything.",
    example: "\"This one data point changes the entire picture entirely!\" — One point in a dataset of thousands.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "CD-PER", name: "Personalization", basePts: 10, category: "COGNITIVE",
    explanation: "They take personal credit or blame for outcomes that are not primarily caused by them — making debates about their personal identity rather than the actual evidence and arguments.",
    example: "Turning a policy debate into a personal identity contest — \"This is about who I am\" rather than what the evidence shows.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "CD-MND", name: "Mind Reading", basePts: 10, category: "COGNITIVE",
    explanation: "They claim to know what you or others are REALLY thinking, intending, or feeling — without any evidence. They assert private mental states as facts.",
    example: "\"I know what you actually meant by that.\" or \"They only support this policy because they're afraid.\" — No evidence of internal mental states provided.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
  {
    id: "CD-FOR", name: "Fortune Telling", basePts: 10, category: "COGNITIVE",
    explanation: "They state predictions about future negative outcomes as if they were certainties, without evidence that those outcomes are actually inevitable — and use this fake certainty to argue against action.",
    example: "\"If we go with that approach, I can tell you right now it will definitely fail.\" — Future outcomes are not known with certainty.",
    judgeAction: "Flag and deduct.", escalates: true,
  },
];

export const categories = ["ALL", "RULEBOOK", "FORMAL", "RELEVANCE", "APPEALS", "DATA", "TRAPS", "STATS", "LANGUAGE", "ETHICAL", "COGNITIVE"];

export const coreRules = [
  "All debaters start at 0.",
  "Only deductions are applied.",
  "Judges may interrupt at any time.",
  "All claims must be defended when challenged.",
  "Silence or refusal is penalized.",
  "Repeated fallacies increase deduction severity.",
  "Reading without engagement is penalized.",
  "Debate is dynamic; arguments must evolve.",
];

export const philosophy = `Supervive aut Mori EX is a zero-based elimination debate system. All participants begin at zero. There are no positive points. Only deductions exist. The goal is survival through logical integrity.\n\nArguments are treated as structures. Weak structures collapse under pressure. Strong structures endure. This system measures not how well you speak, but how well your reasoning survives scrutiny.`;

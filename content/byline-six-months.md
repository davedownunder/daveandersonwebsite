# You have six months

**Standfirst:** *Marketing is about to lose more jobs, faster, than any function in the company. Not to a reorg — to five people with production access. Dave Anderson, CMO at PointFive, has the commit history.*

---

This week I built a complete marketing program in about twenty minutes. A webinar, its landing page, a guide, a blog post — and, at the technical core of it, the top five AI optimisations the whole campaign is about.

I am not qualified to write those five optimisations. That is the part worth stopping on.

The rest I could have done slowly and badly on my own: the topic, the story arc, the page, the copy, the branding. The technical substance is a different category. It needs somebody who genuinely knows how AI workloads get optimised — the kind of subject-matter expert whose calendar sets your launch date, because you book a week of calls and then wait on a review cycle. I do not have that knowledge and never have. I now have work that carries it anyway, grounded in our own systems rather than in something a model remembered.

Conventionally that program is two to three weeks and five people minimum — ideate, write, design, build, and someone to run the schedule keeping the other four in sync — plus the SME who actually sets the timeline. There were no meetings. No planning session. No developer. No creative round. Nobody waiting on an expert. One person, one session, and a set of agents with access to every system that holds our numbers. I was building the webinar slides while writing this.

I want to be precise about what that means, because "AI made me faster" is the most boring sentence in marketing right now and it is not what happened. Speed is the least interesting part. The ceiling moved from *how fast can I produce* to *what do I actually know* — and then that ceiling moved too.

## The number

My team is five people. We have production access to our own website. Since January we have merged 108 pull requests to production — from marketing, not engineering — across 249 live pages, with fourteen systems of record wired directly into the working session.

I keep a ledger of the big pieces of work, with the conventional headcount and duration I would have quoted for each one after twenty years of running these functions, set against what it actually took. Six tracked projects. Conventionally: 1,313 person-days. Actually spent: 31.75.

That is a factor of **41**. A 4,035% improvement in marketing efficiency.

You are entitled to think my conventional estimates are generous. So halve them. Halve every single one. It is still 20.7× — a 1,968% improvement. Cut them to a third and it is still nearly 14×.

There is no version of this arithmetic that lands anywhere near the 10 or 20% efficiency gain the industry is comfortable talking about. The gap between those two numbers is the story, and it is the reason I think most marketers have about six months.

## The number I would actually lead with

One more figure, and it is the one I would put first if I were trying to convince a sceptic rather than sell a headline.

Of the 275 commits my marketing team has made to production this year, 103 are mine. **172 belong to Andrew Brown, who runs growth.** He out-commits me by two thirds.

I could have left that out. It is the single most useful fact I have, because it kills the easiest objection to everything above: that this is one enthusiast with an expensive hobby, a CMO with a side project and a flattering spreadsheet. It is not. It is a way of working that transferred to the person sitting next to me, and the person sitting next to me is better at it than I am.

That is also the reason I think this is a six-month problem rather than a five-year one. If it only worked for the guy who likes it, you could wait it out.

## Why "using AI" is not the same thing

Almost every marketer I meet is using AI. Almost none of them are AI-native, and the difference is not enthusiasm or prompt quality. It is write access.

An assistant that drafts copy saves you an hour. An agent that reads the warehouse, builds the page, opens the pull request and then measures what happened replaces a workflow. One of those makes you slightly faster at your existing job. The other removes the job as it is currently constructed.

Which means the skill that matters is not "being good at AI." It is working like an engineer. Version control. A source of truth. Grounding before generating. Freezing a dataset before anyone writes a word against it. Shipping a commit instead of circulating a draft. I did not learn any of that from a marketing playbook, and I do not think you can fake it from the outside.

The uncomfortable corollary: this is not a story about tools levelling the playing field. It is a story about a small number of people in every marketing organisation becoming dramatically more valuable, and the rest becoming difficult to justify. I have written the org chart. We do not need five brand designers. We need one, with AI. Not five operations people — one. Not a web team, an SEO agency, a paid agency, a marketing ops function and an analyst — one growth person with agents.

Multiply that across a marketing department and you are not looking at a productivity gain. You are looking at a budget line that halves, twice, and does not come back. Both people and programs.

So: you are either excellent with AI, or you are out of a job. I do not know how to say that more gently, and I have stopped trying, because every marketer I say it gently to hears "carry on."

## The part nobody is ready for

Here is what I did not expect, and it is the reason I am not writing a triumphalist piece.

Running this way, I could not tell you exactly how many agents are working on my behalf. Somewhere near a hundred. Not a hundred sessions — a hundred running things, doing work against live systems while I am doing something else.

And the imprecision is the point. This whole piece argues for counted numbers over estimated ones, and I cannot put a firm number on my own agent count. Nobody handed me a budget for it. Nobody approved it. There is no cost centre, no owner of record, no dashboard where a CFO could see what any of it costs or whether it is worth it.

I run marketing for a company whose entire product is finding the waste in cloud spend, so I recognise the shape of this immediately. It is 2013 and someone just discovered they can spin up EC2 instances on a credit card. The productivity was real. The bill, three years later, was also real, and by then nobody could remember who started what or why.

Agent sprawl is the next cloud bill. It will arrive faster, because there is no procurement gate in front of it — any competent marketer can start ten agents this afternoon and no one will notice until the invoice does something interesting. The organisations that get through this will be the ones that put visibility, control and budgeting around agent capacity *before* the capacity becomes the problem, not after.

That is not a reason to slow down. It is a reason to instrument.

## What I would do on Monday

Stop evaluating AI tools. Start giving your best marketer write access to something that matters, and see what comes back. If nothing comes back, you have learned something important about your team. If a merged pull request comes back, you have found the person your department should be rebuilt around.

Then count your agents. If you cannot say how many are running, who owns them, and what they cost, you do not have an AI strategy. You have an unmetered utility and a very good quarter.

I have published the full working record — the ledger, the counts, the method and the four things it does not solve — at **daveanderson.com.au/ai-native**. It is counted from git history and session records, not self-reported, and it includes the parts that went badly. There is one entry I would draw your attention to before you copy any of this: *build capacity outran data quality*. Two weeks from research paper to full launch program was deliverable. Fact-checking it in two weeks was not.

Speed does not remove the bottleneck. It moves it somewhere you were not looking.

You have six months to find out where.

---

*Dave Anderson is CMO at PointFive. He hosts the podcast Tech Seeking Human and is a Saxton-listed keynote speaker. Word count: ~1,080.*

---

## Editor's notes — sourcing

*Not for publication. Provided so a fact-checker can verify every figure.*

| Claim | Source | Status |
|---|---|---|
| 108 merged pull requests to production | git history, PointFive site repo | Counted |
| 249 live pages, 275 commits, 14 systems wired, 5 people | git history + session records | Counted |
| 275 commits split 172 Andrew Brown / 103 Dave | git history, by author | Counted |
| 1,313 conventional person-days vs 31.75 actual | Compression ledger, `daveanderson.com.au/ai-native` | Conventional column is Dave's estimate and labelled as such; actual column is counted |
| 41.4× / 4,035%; 20.7× at half the estimates | Arithmetic on the above | Derived — method published |
| Event registrations +1,450%, all form submissions +382%, demo requests +167% | HubSpot, Q1 monthly average vs Apr–Jul monthly average | Counted |
| Unique visitors +123%, search impressions +119% | GA4 + Search Console, January vs July | Counted |
| 5,680 system-of-record calls, 18,995 actions | Session transcripts, **Dave's sessions only** — pulled from one laptop, so they are one operator's log and are labelled that way on the site. Excludes 3,858 browser-verification calls, which are checking not evidence | Counted, single-operator |
| "Close to a hundred agents" | **NEEDS SOURCE — see below** | Unverified |
| 20-minute program vs 2–3 weeks / 5 people + an SME | **NEEDS SOURCE — see below** | Dave's account; not yet in the ledger |

### Two figures to nail down before this goes out

1. **The agent count.** The piece says "close to a hundred." The AI-native page separately reports *131 subagents run in parallel*. Those are different measures and a fact-checker will find both. Define which is which — distinct standing agents versus in-session spawns — and give the 30-day window. Then the sentence can be exact instead of hedged, which is much stronger.

2. **The twenty-minute program.** This is the lede, so it will get the most scrutiny. It needs a session timestamp, the merged PR, and a one-line statement of the conventional comparison, then it should be added to the published ledger as a seventh row. At 5 people × 2 weeks against 20 minutes it is a **1,200×** compression — an order of magnitude above anything else on the ledger, which is exactly why it needs the receipt attached.

3. **The five optimisations must be named.** Right now the piece says "the top five AI optimisations" and that phrase is doing all the work while carrying no information. An editor will ask what they are, and so will every technical reader — and the SME argument only lands if the reader can see that the content is genuinely specialist. Name all five, in the piece, as a list. It is the difference between "AI wrote my campaign" and "AI wrote the part of my campaign I am not qualified to write."'

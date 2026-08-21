import type { WPPost } from "@/lib/content";

/**
 * Posts authored natively on this site, as opposed to those imported from
 * the old WordPress export in wp-content.json. New writing goes here.
 *
 * Shape matches WPPost so listings, cards and /blog/[slug] work unchanged.
 * `content` is trusted HTML authored in this repo — it renders through the
 * same `prose` styles as imported posts.
 */
export const nativePosts: WPPost[] = [
  {
    title: "You have six months",
    slug: "you-have-six-months",
    date: "2026-08-21 08:00:00",
    categories: ["Blog: Marketing", "Technology"],
    tags: ["AI", "Marketing", "Agents", "Leadership", "PointFive"],
    featured_image_id: "",
    featured_image_url: "/Dave.jpeg",
    type: "post",
    excerpt:
      "1,313 conventional person-days of marketing work, delivered in 31.75. That is 41x. Halve every one of my estimates and it is still 21x. Here is what that does to your org chart.",
    content: `
<p class="lead">Two weeks ago I built a complete marketing program in under ten minutes. Not a brief for a program. Not a deck describing one. The program.</p>

<p>The topic, the story arc, the landing page, the registration form, the email copy, the ad copy, the social sequence, the branding. Live, on our production site, behind a merged pull request with my name on it.</p>

<p>Conventionally that is two to three weeks and five people minimum &mdash; someone to ideate, someone to write, someone to design, someone to build it, someone to run the schedule keeping the other four in sync. There were no meetings. No planning session. No developer. No creative round. One person, one session, and a set of agents with access to every system that holds our numbers.</p>

<p>I want to be precise about what that means, because &ldquo;AI made me faster&rdquo; is the most boring sentence in marketing right now, and it is not what happened.</p>

<h2>The number</h2>

<p>My team is five people. We have production access to our own website. Since January we have merged <strong>108 pull requests to production</strong> &mdash; from marketing, not engineering &mdash; across 249 live pages, with fourteen systems of record wired into the working session.</p>

<p>I keep a ledger of the significant work, with the conventional headcount and duration I would have quoted after twenty years of running these functions, set against what it actually took. Six tracked projects. Conventionally: <strong>1,313 person-days</strong>. Actually spent: <strong>31.75</strong>.</p>

<p>That is a factor of <strong>41</strong>.</p>

<blockquote><strong>The stress test:</strong> you are entitled to think my conventional estimates are generous. So halve them. Halve every single one and it is still 20.7&times;. Cut them to a third and it is still nearly 14&times;. There is no version of this arithmetic that lands anywhere near the 10 or 20% gain the industry is comfortable talking about.</blockquote>

<p>The gap between those two numbers is the story, and it is why I think most marketers have about six months.</p>

<h2>The number I would actually lead with</h2>

<p>One more figure, and it is the one I would put first if I were trying to convince a sceptic rather than sell a headline.</p>

<p>Of the 275 commits my marketing team has made to production this year, 103 are mine. <strong>172 belong to Andrew Brown, who runs growth.</strong> He out-commits me by two thirds.</p>

<p>I could have left that out. It is the most useful fact I have, because it kills the easiest objection to everything above: that this is one enthusiast with an expensive hobby, a CMO with a side project and a flattering spreadsheet. It is not. It is a way of working that transferred to the person sitting next to me, and he is better at it than I am.</p>

<p>That is also why this is a six-month problem rather than a five-year one. If it only worked for the person who enjoys it, you could wait it out.</p>

<h2>Using AI is not the same as being AI-native</h2>

<p>Almost every marketer I meet is using AI. Almost none of them are AI-native, and the difference is not enthusiasm or prompt quality. It is <strong>write access</strong>.</p>

<p>An assistant that drafts copy saves you an hour. An agent that reads the warehouse, builds the page, opens the pull request and then measures what happened replaces a workflow. One of those makes you slightly faster at your existing job. The other removes the job as it is currently constructed.</p>

<p>So the skill that matters is not being good at AI. It is <strong>working like an engineer</strong>. Version control. A single source of truth. Grounding before generating. Freezing a dataset before anyone writes a word against it. Shipping a commit instead of circulating a draft. None of that comes from a marketing playbook, and I do not think it can be faked from the outside.</p>

<p>The uncomfortable corollary: this is not a story about tools levelling the playing field. It is a story about a small number of people in every marketing organisation becoming dramatically more valuable, and the rest becoming difficult to justify.</p>

<p>I have written the org chart. We do not need five brand designers. We need one, with AI. Not five operations people &mdash; one. Not a web team, an SEO agency, a paid agency, a marketing ops function and an analyst &mdash; one growth person with agents. Multiply that across a department and you are not looking at a productivity gain. You are looking at a budget line that halves, twice, and does not come back. Both people and programs.</p>

<p>You are either excellent with AI, or you are out of a job. I have stopped saying that gently, because every marketer I say it gently to hears &ldquo;carry on.&rdquo;</p>

<h2>The part nobody is ready for</h2>

<p>Here is what I did not expect, and the reason this is not a triumphalist post.</p>

<p>Running this way, I am operating close to a hundred agents. Not a hundred sessions &mdash; a hundred running things, doing work on my behalf, against live systems. Nobody handed me a budget for that. Nobody approved it. There is no cost centre, no owner of record, no dashboard where a CFO can see what any of it costs or whether it is worth it.</p>

<p>I run marketing for a company whose entire product is finding the waste in cloud spend, so I recognise this shape immediately. It is 2013 and someone just discovered they can spin up instances on a credit card. The productivity was real. The bill, three years later, was also real &mdash; and by then nobody could remember who started what, or why.</p>

<p><strong>Agent sprawl is the next cloud bill.</strong> It will arrive faster, because there is no procurement gate in front of it. Any competent marketer can start ten agents this afternoon and nobody will notice until the invoice does something interesting. The organisations that come through this will be the ones that put visibility, control and budgeting around agent capacity <em>before</em> the capacity becomes the problem.</p>

<p>That is not a reason to slow down. It is a reason to instrument.</p>

<h2>What I would do on Monday</h2>

<p>Stop evaluating AI tools. Give your best marketer write access to something that matters, and see what comes back. If nothing comes back, you have learned something important about your team. If a merged pull request comes back, you have found the person your department should be rebuilt around.</p>

<p>Then count your agents. If you cannot say how many are running, who owns them, and what they cost, you do not have an AI strategy. You have an unmetered utility and a very good quarter.</p>

<p>One caveat before you copy any of this, and it is the entry on my own list I would most want you to read: <strong>build capacity outran data quality</strong>. Two weeks from research paper to full launch program was deliverable. Fact-checking it in two weeks was not. Speed does not remove the bottleneck. It moves it somewhere you were not looking.</p>

<p>You have six months to find out where.</p>

<p><em>The argument, with the full arithmetic: <a href="/six-months">daveanderson.com.au/six-months</a>. The complete working record &mdash; the ledger, the counts, the method and the four things it does not solve, all counted from git history rather than self-reported: <a href="/ai-native">daveanderson.com.au/ai-native</a>.</em></p>
`,
  },
  {
    title: "How to be a better marketer in the AI era",
    slug: "better-marketer-in-the-ai-era",
    date: "2026-08-13 09:00:00",
    categories: ["Blog: Marketing"],
    tags: ["AI", "Marketing", "Leadership", "PointFive"],
    featured_image_id: "",
    featured_image_url: "/Dave.jpeg",
    type: "post",
    excerpt:
      "My advice for marketers in the AI era, from a conversation Mattia Santin wrote up — seven things I actually do differently.",
    content: `
<p class="lead">AI does not automatically create better marketing. It gives good marketers more leverage.</p>

<p>That was the thread running through a conversation I had with <strong>Mattia Santin</strong> &mdash; CMO at Hotjar, SVP Marketing at Contentsquare, and someone I worked alongside during my years there. He kept pushing on the same question: everyone says AI changes marketing, but what actually changes on a Tuesday, inside a real team, with real targets? He wrote the conversation up afterwards.</p>

<p>What follows is my side of it &mdash; my advice for marketers, in the words I used with him. Seven things I genuinely do differently running an AI-native marketing team at PointFive.</p>

<p>Each comes with a filter: the question I actually ask myself to know whether we're living up to it, rather than just nodding along to it.</p>

<h2>1. Hire for curiosity, not just technical depth</h2>

<p>AI can bridge most technical gaps now. What it cannot do is keep asking better questions. I hire for inquisitiveness and creativity, for the people who finish a project and immediately ask <em>what else it makes possible</em>.</p>

<blockquote><strong>The filter:</strong> Would this person keep experimenting without being told to?</blockquote>

<h2>2. Start with a clear business objective</h2>

<p>AI makes it easy to do too many things at once. Start with the outcome and work backwards. AI is not the goal. <strong>Growth is.</strong> My current test is simple: does this generate sourced demos, or just vanity metrics?</p>

<blockquote><strong>The filter:</strong> Which business number does this move?</blockquote>

<h2>3. Experiment constantly</h2>

<p>My team can build pages, test SEO ideas, spin up demos and produce content without waiting on specialist queues. AI should not just make the old workflow cheaper. It should <strong>multiply the experiments you run</strong>, and the learning that comes with them.</p>

<blockquote><strong>The filter:</strong> Are we running more experiments than we did last quarter?</blockquote>

<h2>4. Speed is a competitive advantage</h2>

<p>Just do it. Ship, make mistakes, learn, keep moving. An 80 percent solution live today teaches you more than a perfect one shipped in three weeks. <strong>Learning velocity beats polish.</strong></p>

<blockquote><strong>The filter:</strong> Ship. Learn. Adjust. Repeat.</blockquote>

<h2>5. Enable everyone, then share what works</h2>

<p>When someone on the team discovers a useful AI workflow, we teach it to everyone immediately. AI knowledge should never live with one designated &ldquo;AI person&rdquo;. The compounding happens when <strong>the whole team applies the same capability to different problems</strong>.</p>

<blockquote><strong>The filter:</strong> Who else needs to know this by Friday?</blockquote>

<h2>6. Connect AI to the data that makes you different</h2>

<p>Generic models have generic knowledge. The step change came from connecting AI to product data, customer questions, CRM records and real sales conversations. <strong>Proprietary knowledge creates better marketing.</strong> Messy data just creates messy answers faster.</p>

<blockquote><strong>The filter:</strong> Is our actual advantage connected, and can we trust it?</blockquote>

<h2>7. Culture is the prerequisite for everything above</h2>

<p>The first six only work when people have permission to experiment, connect tools, publish quickly and learn from mistakes. Without access and trust, AI just makes existing processes slightly faster. <strong>Autonomy is what turns it into an advantage.</strong></p>

<blockquote><strong>The filter:</strong> Do people have permission to actually ship?</blockquote>

<h2>The takeaway</h2>

<p>AI does not automatically create better marketing. It gives good marketers more leverage. The teams that win will combine:</p>

<ul>
<li>Curious people</li>
<li>Clear business goals</li>
<li>Fast, constant experimentation</li>
<li>Proprietary data, connected and trusted</li>
<li>A culture with permission to ship</li>
</ul>

<p>Which of the seven is your team missing? Tell me &mdash; the pushback is usually more useful than the agreement. That is roughly how the conversation with Mattia went, which is why it was worth writing down.</p>

<p>More on marketing, AI and the humans in between on <a href="https://techseekinghuman.ai">Tech Seeking Human</a>.</p>
`.trim(),
  },
];

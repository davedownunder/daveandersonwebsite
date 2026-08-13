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
    title: "How to be a better marketer in the AI era",
    slug: "better-marketer-in-the-ai-era",
    date: "2026-08-13 09:00:00",
    categories: ["Blog: Marketing"],
    tags: ["AI", "Marketing", "Leadership", "PointFive"],
    featured_image_id: "",
    type: "post",
    excerpt:
      "AI does not automatically create better marketing. It gives good marketers more leverage. Seven things I actually do differently.",
    content: `
<p class="lead">AI does not automatically create better marketing. It gives good marketers more leverage. Here is what I actually do differently, running an AI-native marketing team at PointFive.</p>

<p>Each of these comes with a filter &mdash; the question I actually ask myself to know whether we're living up to it, rather than just agreeing with it in a slide.</p>

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

<p>Which of the seven is your team missing? Tell me &mdash; the pushback is usually more useful than the agreement.</p>

<p>More on marketing, AI and the humans in between on <a href="https://techseekinghuman.ai">Tech Seeking Human</a>.</p>
`.trim(),
  },
];

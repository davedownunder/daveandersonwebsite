import Link from "next/link";
import PostCard from "@/components/PostCard";
import ShopTag from "@/components/ShopTag";
import TickRule from "@/components/TickRule";
import { getAllPosts } from "@/lib/content";

const podcastGuests = [
  {
    name: "Magic Johnson",
    image:
      "https://i0.wp.com/daveandersononline.com/wp-content/uploads/2021/02/cropped-cropped-cropped-cropped-aaa052f0-b98c-452e-b59a-02c4f0566eeb-1-1.jpg",
    href: "https://youtu.be/VTIEc07ycZI",
  },
  {
    name: "Marc Randolph",
    image:
      "https://i0.wp.com/daveandersononline.com/wp-content/uploads/2021/02/cropped-cropped-cropped-cropped-cropped-cropped-image-e1634694692472.png",
    href: "https://youtu.be/0LoGTmr4s3k",
  },
  {
    name: "Hannah Fry",
    image:
      "https://i0.wp.com/daveandersononline.com/wp-content/uploads/2022/05/cropped-hannah-fry.jpeg",
    href: "https://youtu.be/hqEtaOHpjIQ",
  },
  {
    name: "Baratunde Thurston",
    image:
      "https://i0.wp.com/daveandersononline.com/wp-content/uploads/2022/02/cropped-cropped-nyt_likeabossbaratunde10.jpeg",
    href: "https://youtu.be/q6tWVFwA-EQ",
  },
  {
    name: "Adam Cheyer",
    image:
      "https://i0.wp.com/daveandersononline.com/wp-content/uploads/2021/10/cropped-cropped-adam_cheyer.jpeg",
    href: "https://youtu.be/dezsoPQsVCE",
  },
  {
    name: "Gene Kim",
    image:
      "https://i0.wp.com/daveandersononline.com/wp-content/uploads/2022/05/cropped-Gene-Kim.jpeg",
    href: "https://youtu.be/bCjsaJ3c_3A",
  },
];

const speakingClients = [
  "CBA",
  "NAB",
  "Telstra",
  "Contentsquare",
  "Qualtrics",
  "Forrester",
  "Red Hat Summit",
  "AWS re:Invent",
  "Lloyds",
  "Dynatrace",
  "Shoptalk",
  "CX Summit",
  "Gartner",
  "Mobile World Congress",
];

const mediaLogos = [
  "Fast Company",
  "BBC",
  "Fox News",
  "Mashable",
  "Sky Business",
  "Domain",
  "IT Pro",
];

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-20 md:pt-20 md:pb-28">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <ShopTag>CMO · PointFive</ShopTag>
            <ShopTag>Keynote Speaker</ShopTag>
            <ShopTag>Podcaster</ShopTag>
          </div>
          <h1 className="font-serif font-light text-5xl md:text-7xl leading-[1.02] tracking-tight text-ink max-w-5xl">
            Explaining hard technology in{" "}
            <span className="italic text-brass">plain language</span>,
            on stages and in headphones.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
            I&rsquo;m Dave Anderson &mdash; CMO at{" "}
            <span className="text-ink font-medium">PointFive</span>, a keynote
            speaker represented by{" "}
            <a
              href="https://www.saxton.com.au/speakers/dave-anderson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brass hover:underline underline-offset-4"
            >
              Saxton
            </a>
            , and the host of{" "}
            <Link href="/podcasts" className="text-brass hover:underline underline-offset-4">
              Tech Seeking Human
            </Link>
            . In my other life I make records, and cabinets.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://www.saxton.com.au/speakers/dave-anderson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-kraft hover:bg-brass hover:text-ink transition-colors font-medium px-6 py-3 rounded-full text-sm"
            >
              Book a keynote via Saxton
              <span aria-hidden>→</span>
            </a>
            <Link
              href="/podcasts"
              className="inline-flex items-center gap-2 border border-rule hover:border-brass hover:text-brass text-ink-soft transition-colors font-medium px-6 py-3 rounded-full text-sm"
            >
              Listen to the podcast
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-rule hover:border-brass hover:text-brass text-ink-soft transition-colors font-medium px-6 py-3 rounded-full text-sm"
            >
              About Dave
            </Link>
          </div>
          <TickRule className="mt-16 opacity-50" />
        </div>
      </section>

      {/* Three practices */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="eyebrow">Three practices</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light mt-4 leading-tight">
                One throughline: stories worth paying attention to.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-lg text-ink-soft leading-relaxed">
              <p>
                By day I run marketing at{" "}
                <span className="text-ink font-medium">PointFive</span> &mdash; a
                category-defining company at the crossroads of AI and cloud
                cost. Before that: CMO for Dynatrace APAC through the NYSE
                IPO, AI evangelist at DataRobot, and two decades helping
                technical companies find a human voice.
              </p>
              <p>
                On stage that shows up as keynotes for CBA, NAB, Telstra,
                Forrester, Red Hat Summit and AWS re:Invent &mdash; booked
                through{" "}
                <a
                  href="https://www.saxton.com.au/speakers/dave-anderson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brass hover:underline underline-offset-4"
                >
                  Saxton
                </a>
                . In headphones it&rsquo;s{" "}
                <em>Tech Seeking Human</em>, and the audio biography{" "}
                <em>Stuart MacGill: Twisted</em>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule mt-14 border border-rule rounded-md overflow-hidden">
            {[
              {
                num: "01",
                title: "Speaking",
                desc: "Keynotes, MC and event content. Represented in Australia by Saxton Speakers Bureau.",
                href: "/speaking",
              },
              {
                num: "02",
                title: "Podcasts",
                desc: "Host of Tech Seeking Human. Producer of Stuart MacGill: Twisted.",
                href: "/podcasts",
              },
              {
                num: "03",
                title: "Music",
                desc: "Two albums. Wish It All Away (2009) and These Lies That Divide Us (2023).",
                href: "/music",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-kraft hover:bg-kraft-alt transition-colors p-8 group flex flex-col"
              >
                <p className="font-mono text-xs tracking-widest uppercase text-brass-dark">
                  {item.num}
                </p>
                <h3 className="font-serif text-2xl font-medium mt-4 group-hover:text-brass transition-colors">
                  {item.title}
                </h3>
                <p className="text-ink-soft text-sm mt-3 leading-relaxed flex-1">
                  {item.desc}
                </p>
                <span className="text-brass text-sm mt-6 inline-flex items-center gap-1">
                  Explore <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking clients strip */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
            <div>
              <p className="eyebrow mb-3">Recent stages</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
                A partial list of who&rsquo;s put me on stage.
              </h2>
            </div>
            <Link
              href="/speaking"
              className="text-brass font-medium text-sm hover:underline underline-offset-4"
            >
              Full list & stories →
            </Link>
          </div>
          <TickRule className="opacity-50 mb-8" />
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-3 font-serif text-lg text-ink">
            {speakingClients.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span className="text-brass mt-1.5 text-xs">▪</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured conversations */}
      <section className="border-b border-rule bg-kraft-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow mb-3">Tech Seeking Human</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
                Featured conversations.
              </h2>
            </div>
            <Link
              href="/podcasts"
              className="text-brass font-medium text-sm hover:underline underline-offset-4"
            >
              See all episodes →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {podcastGuests.map((guest) => (
              <a
                key={guest.name}
                href={guest.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="aspect-square overflow-hidden rounded-md border border-rule bg-kraft">
                  <img
                    src={guest.image}
                    alt={guest.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <p className="font-serif text-sm mt-3 text-ink group-hover:text-brass transition-colors">
                  {guest.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <p className="eyebrow text-center mb-8">Featured in</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {mediaLogos.map((logo) => (
              <span
                key={logo}
                className="font-serif text-xl text-ink-muted"
              >
                {logo}
              </span>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/media"
              className="text-brass text-sm hover:underline underline-offset-4"
            >
              Read the coverage →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest writing */}
      {recentPosts.length > 0 && (
        <section className="border-b border-rule">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-24">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <p className="eyebrow mb-3">Writing</p>
                <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight">
                  Recent essays and posts.
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-brass font-medium text-sm hover:underline underline-offset-4"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <PostCard key={post.slug} post={post} basePath="/blog" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="contact" className="bg-ink text-kraft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="eyebrow" style={{ color: "#c7a35a" }}>
                Get in touch
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 leading-[1.1] text-kraft">
                Two doors: Saxton for keynotes, email for the rest.
              </h2>
            </div>
            <div className="md:col-span-7 md:pl-8 space-y-6 text-lg leading-relaxed text-kraft/80">
              <p>
                For confirmed dates and fees on a keynote or MC job, Saxton
                handles bookings. For podcast appearances, sponsors for{" "}
                <em>Twisted</em>, PointFive-related enquiries or just a hello
                — email works.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://www.saxton.com.au/speakers/dave-anderson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brass text-ink hover:bg-brass-dark hover:text-kraft transition-colors font-medium px-6 py-3 rounded-full text-sm"
                >
                  Book via Saxton →
                </a>
                <a
                  href="mailto:daveando@gmail.com"
                  className="inline-flex items-center gap-2 border border-kraft/30 hover:border-brass hover:text-brass transition-colors font-medium px-6 py-3 rounded-full text-sm"
                >
                  daveando@gmail.com
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-kraft/30 hover:border-brass hover:text-brass transition-colors font-medium px-6 py-3 rounded-full text-sm"
                >
                  Contact page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

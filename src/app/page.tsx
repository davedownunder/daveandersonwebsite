import Link from "next/link";
import PostCard from "@/components/PostCard";
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
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
          <p className="eyebrow mb-6">
            Speaker · Host · Musician · Marketer
          </p>
          <h1 className="font-serif font-light text-5xl md:text-7xl leading-[1.05] tracking-tight text-ink max-w-4xl">
            Storytelling at the{" "}
            <span className="italic text-accent">intersection</span> of
            technology and the human experience.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl">
            I&apos;m Dave Anderson — a keynote speaker, MC, podcast host and
            tech marketing executive based in Melbourne. I help ambitious
            companies tell their story, and I spend my spare time interviewing
            remarkable people about how technology is reshaping what it means
            to be human.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 bg-ink text-cream hover:bg-accent transition-colors font-medium px-6 py-3 rounded-full text-sm"
            >
              Book Dave to speak
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/podcasts"
              className="inline-flex items-center gap-2 border border-rule hover:border-accent hover:text-accent text-ink-soft transition-colors font-medium px-6 py-3 rounded-full text-sm"
            >
              Listen to the podcast
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <p className="eyebrow">About</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light mt-4 leading-tight">
                A career built at the edge of marketing and technology.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5 text-lg text-ink-soft leading-relaxed">
              <p>
                Dave has spent two decades inside some of the most innovative
                technology companies in the world — most recently leading
                marketing for Dynatrace across Asia Pacific through an IPO and
                beyond. He&apos;s equally comfortable on a main stage in front
                of three thousand people, behind a microphone, or writing songs
                in his home studio.
              </p>
              <p>
                His work has been featured by{" "}
                <span className="text-ink">Fast Company</span>,{" "}
                <span className="text-ink">the BBC</span>,{" "}
                <span className="text-ink">Fox News</span> and{" "}
                <span className="text-ink">Mashable</span>. He hosts{" "}
                <em>Tech Seeking Human</em>, a long-form podcast with guests
                including Magic Johnson, Marc Randolph, Baratunde Thurston and
                Hannah Fry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-24">
          <p className="eyebrow mb-3">What I do</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
            Four practices. One throughline: stories worth paying attention to.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-rule mt-12 border border-rule rounded-lg overflow-hidden">
            {[
              {
                num: "01",
                title: "Keynotes & MC",
                desc: "Mainstage keynotes and MC work for technology conferences, customer events and industry forums.",
                href: "/events/keynotes",
              },
              {
                num: "02",
                title: "Podcasts",
                desc: "Host of Tech Seeking Human and producer of Stuart MacGill: Twisted, a cricket biography series.",
                href: "/podcasts",
              },
              {
                num: "03",
                title: "Music",
                desc: "Singer-songwriter. Two albums released; These Lies That Divide Us is out now on all platforms.",
                href: "/music",
              },
              {
                num: "04",
                title: "Video & Storytelling",
                desc: "Customer stories, product films and event content. Including the 646k-view See the Magic.",
                href: "/events/video-storytelling",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-cream hover:bg-cream-alt transition-colors p-8 group flex flex-col"
              >
                <p className="font-serif text-sm text-accent">{item.num}</p>
                <h3 className="font-serif text-2xl font-medium mt-4 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-ink-muted text-sm mt-3 leading-relaxed flex-1">
                  {item.desc}
                </p>
                <span className="text-accent text-sm mt-6 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured conversations */}
      <section className="border-b border-rule bg-cream-alt">
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
              className="text-accent font-medium text-sm hover:underline underline-offset-4"
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
                <div className="aspect-square overflow-hidden rounded-md border border-rule bg-paper">
                  <img
                    src={guest.image}
                    alt={guest.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <p className="font-serif text-sm mt-3 text-ink group-hover:text-accent transition-colors">
                  {guest.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <p className="eyebrow text-center mb-8">
            Featured in
          </p>
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
                className="text-accent font-medium text-sm hover:underline underline-offset-4"
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
      <section id="contact" className="bg-ink text-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="eyebrow" style={{ color: "#e5a68e" }}>
                Get in touch
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 leading-[1.1] text-cream">
                Have an event, a conversation, or a story to tell?
              </h2>
            </div>
            <div className="md:col-span-7 md:pl-8 space-y-6 text-lg leading-relaxed text-cream/80">
              <p>
                For keynote, MC and event bookings, podcast appearances,
                sponsorships for <em>Stuart MacGill: Twisted</em>, or a simple
                hello — email is the best way to reach me.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="mailto:daveando@gmail.com"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-cream transition-colors font-medium px-6 py-3 rounded-full text-sm"
                >
                  daveando@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/daveanderson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-cream/30 hover:border-accent hover:text-accent transition-colors font-medium px-6 py-3 rounded-full text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

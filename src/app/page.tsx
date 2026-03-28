import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/content";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#692e5e] to-[#1a1a2e] text-white py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight">
            Tech, Music, Podcasts
            <br />
            <span className="text-[#36b2d1]">& Storytelling</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Keynote speaker, MC, podcast host, musician, and tech marketing
            executive based in Melbourne, Australia.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 bg-[#36b2d1] hover:bg-[#2a8fa8] text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Book Dave
            </Link>
            <Link
              href="/podcasts"
              className="inline-flex items-center gap-2 border-2 border-white hover:border-[#36b2d1] hover:text-[#36b2d1] text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Listen to the Podcast
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
              About <span className="text-[#692e5e]">Dave</span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Dave Anderson is a marketing leader turned keynote speaker,
              podcast host, and content creator. With years of experience at
              Dynatrace and in the SaaS industry, Dave brings a unique blend of
              tech expertise and storytelling to every stage, screen, and
              microphone.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold uppercase text-center mb-12">
            What I <span className="text-[#692e5e]">Do</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Keynotes & MC",
                desc: "Engaging keynote presentations and MC services for corporate events and conferences.",
                href: "/events/keynotes",
              },
              {
                title: "Podcasts",
                desc: "Tech Seeking Human - long-form interviews exploring the human side of technology.",
                href: "/podcasts",
              },
              {
                title: "Music",
                desc: "Singer-songwriter exploring the intersection of creativity and technology.",
                href: "/music",
              },
              {
                title: "Video & Content",
                desc: "Video storytelling and content creation for brands and events.",
                href: "/events/video-storytelling",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center group"
              >
                <h3 className="font-heading text-xl font-bold group-hover:text-[#692e5e] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      {recentPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading text-3xl font-bold uppercase">
                Latest <span className="text-[#692e5e]">Posts</span>
              </h2>
              <Link
                href="/blog"
                className="text-[#692e5e] font-semibold hover:underline"
              >
                View All →
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
    </>
  );
}

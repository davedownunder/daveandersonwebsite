import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Podcasts",
  description: "Tech Seeking Human podcast - hosted by Dave Anderson.",
};

export default function PodcastsPage() {
  const page = getPageBySlug("podcasts");

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold uppercase mb-4">
          <span className="text-[#692e5e]">Podcasts</span>
        </h1>

        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d2d4e] text-white rounded-lg p-8 md:p-12 mb-12">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Tech Seeking Human
          </h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl">
            Long-form interviews exploring the human side of technology. From
            AI pioneers to Olympic athletes, discover the stories behind the
            innovation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.youtube.com/@techseekinghuman"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#36b2d1] hover:bg-[#2a8fa8] text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://podcasts.apple.com/au/podcast/tech-seeking-human/id1534682009"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:border-[#36b2d1] hover:text-[#36b2d1] font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Apple Podcasts
            </a>
            <a
              href="https://open.spotify.com/show/0ycSRgl5JOmFCR0MvRqMjW"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:border-[#36b2d1] hover:text-[#36b2d1] font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Spotify
            </a>
          </div>
        </div>

        {page && (
          <div
            className="prose prose-lg max-w-none prose-headings:font-heading prose-a:text-[#692e5e]"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        )}
      </div>
    </section>
  );
}

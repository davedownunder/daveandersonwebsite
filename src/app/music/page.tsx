import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Music",
  description: "Dave Anderson's music - singer, songwriter, and performer.",
};

export default function MusicPage() {
  const page = getPageBySlug("music") || getPageBySlug("music-2");

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold uppercase mb-4">
          <span className="text-[#692e5e]">Music</span>
        </h1>

        <div className="bg-gradient-to-br from-[#692e5e] to-[#4e1f47] text-white rounded-lg p-8 md:p-12 mb-12">
          <h2 className="font-heading text-3xl font-bold mb-4">
            These Lies That Divide Us
          </h2>
          <p className="text-gray-200 text-lg mb-6 max-w-2xl">
            Dave&apos;s debut album, blending rock, storytelling, and raw emotion.
            Available on all major streaming platforms.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://open.spotify.com/artist/dave-anderson"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#36b2d1] hover:bg-[#2a8fa8] text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Spotify
            </a>
            <a
              href="https://music.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:border-[#36b2d1] hover:text-[#36b2d1] font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Apple Music
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

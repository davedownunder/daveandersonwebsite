import type { Metadata } from "next";
import Link from "next/link";
import { getPageBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Keynotes, event content, and video storytelling by Dave Anderson.",
};

export default function EventsPage() {
  const keynotes = getPageBySlug("keynotes");

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold uppercase mb-4">
          Events & <span className="text-[#692e5e]">Speaking</span>
        </h1>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Dave is available for keynote presentations, MC duties, and event
          content creation. Bringing energy, insight, and storytelling to every
          stage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            href="/events/keynotes"
            className="bg-gradient-to-br from-[#692e5e] to-[#4e1f47] text-white rounded-lg p-8 hover:shadow-lg transition-shadow"
          >
            <h2 className="font-heading text-2xl font-bold mb-3">Keynotes</h2>
            <p className="text-gray-200 text-sm">
              Engaging presentations on technology, AI, and the future of work.
            </p>
          </Link>
          <Link
            href="/events/content"
            className="bg-gradient-to-br from-[#36b2d1] to-[#2a8fa8] text-white rounded-lg p-8 hover:shadow-lg transition-shadow"
          >
            <h2 className="font-heading text-2xl font-bold mb-3">Event Content</h2>
            <p className="text-gray-100 text-sm">
              Professional content creation and coverage for conferences and events.
            </p>
          </Link>
          <Link
            href="/events/video-storytelling"
            className="bg-gradient-to-br from-[#1a1a2e] to-[#2d2d4e] text-white rounded-lg p-8 hover:shadow-lg transition-shadow"
          >
            <h2 className="font-heading text-2xl font-bold mb-3">Video Storytelling</h2>
            <p className="text-gray-300 text-sm">
              Compelling video narratives that bring brands and stories to life.
            </p>
          </Link>
        </div>

        {keynotes && (
          <div className="mt-16">
            <div
              className="prose prose-lg max-w-none prose-headings:font-heading prose-a:text-[#692e5e]"
              dangerouslySetInnerHTML={{ __html: keynotes.content }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

import Link from "next/link";
import TickRule from "./TickRule";

export default function Footer() {
  return (
    <footer className="bg-kraft-alt border-t border-rule mt-auto">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-12 pb-16">
        <TickRule className="mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl font-medium text-ink"
            >
              Dave Anderson
            </Link>
            <p className="text-ink-soft text-sm mt-4 leading-relaxed max-w-sm">
              CMO at PointFive, the AI Efficiency OS. Saxton-listed keynote
              speaker. Host of <em>Tech Seeking Human</em>.
              Musician and Peloton ambassador. Australian, based in Boston.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Work</p>
            <nav className="space-y-2">
              <Link href="/speaking" className="block text-sm text-ink-soft hover:text-brass transition-colors">Keynotes</Link>
              <Link href="/media" className="block text-sm text-ink-soft hover:text-brass transition-colors">Media</Link>
              <Link href="/about" className="block text-sm text-ink-soft hover:text-brass transition-colors">About</Link>
            </nav>
          </div>

          <div>
            <p className="eyebrow mb-4">Creative</p>
            <nav className="space-y-2">
              <Link href="/podcasts" className="block text-sm text-ink-soft hover:text-brass transition-colors">Podcasts</Link>
              <Link href="/music" className="block text-sm text-ink-soft hover:text-brass transition-colors">Music</Link>
              <Link href="/blog" className="block text-sm text-ink-soft hover:text-brass transition-colors">Writing</Link>
              <Link href="/passions" className="block text-sm text-ink-soft hover:text-brass transition-colors">Passions</Link>
            </nav>
          </div>

          <div>
            <p className="eyebrow mb-4">Connect</p>
            <div className="space-y-2">
              <Link href="/contact" className="block text-sm text-ink-soft hover:text-brass transition-colors">Contact</Link>
              <a href="https://www.saxton.com.au/speakers/dave-anderson" target="_blank" rel="noopener noreferrer" className="block text-sm text-ink-soft hover:text-brass transition-colors">Saxton Speakers</a>
              <a href="https://www.linkedin.com/in/daveando" target="_blank" rel="noopener noreferrer" className="block text-sm text-ink-soft hover:text-brass transition-colors">LinkedIn</a>
              <a href="https://open.spotify.com/show/0yrGPFIScz9aok2qwzsVVt" target="_blank" rel="noopener noreferrer" className="block text-sm text-ink-soft hover:text-brass transition-colors">Spotify</a>
            </div>
          </div>
        </div>

        <div className="border-t border-rule-soft mt-12 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-ink-muted font-mono tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Dave Anderson
          </p>
          <p className="text-xs text-ink-muted font-mono tracking-wider uppercase">
            Boston · Melbourne · Made in the workshop
          </p>
        </div>
      </div>
    </footer>
  );
}

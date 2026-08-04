import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cream-alt border-t border-rule mt-auto">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">
          <div>
            <Link
              href="/"
              className="font-serif text-2xl font-medium text-ink"
            >
              Dave Anderson
            </Link>
            <p className="text-ink-muted text-sm mt-4 leading-relaxed max-w-sm">
              Keynote speaker, MC, podcast host, musician, and tech marketing
              executive. Based in Melbourne.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Work</p>
            <nav className="space-y-2">
              <Link
                href="/events/keynotes"
                className="block text-sm text-ink-soft hover:text-accent transition-colors"
              >
                Keynotes
              </Link>
              <Link
                href="/events/video-storytelling"
                className="block text-sm text-ink-soft hover:text-accent transition-colors"
              >
                Video
              </Link>
              <Link
                href="/media"
                className="block text-sm text-ink-soft hover:text-accent transition-colors"
              >
                Media
              </Link>
            </nav>
          </div>

          <div>
            <p className="eyebrow mb-4">Creative</p>
            <nav className="space-y-2">
              <Link
                href="/podcasts"
                className="block text-sm text-ink-soft hover:text-accent transition-colors"
              >
                Podcasts
              </Link>
              <Link
                href="/music"
                className="block text-sm text-ink-soft hover:text-accent transition-colors"
              >
                Music
              </Link>
              <Link
                href="/blog"
                className="block text-sm text-ink-soft hover:text-accent transition-colors"
              >
                Writing
              </Link>
            </nav>
          </div>

          <div>
            <p className="eyebrow mb-4">Connect</p>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/daveanderson"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-ink-soft hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@techseekinghuman"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-ink-soft hover:text-accent transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://open.spotify.com/show/0yrGPFIScz9aok2qwzsVVt"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-ink-soft hover:text-accent transition-colors"
              >
                Spotify
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-rule mt-12 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} Dave Anderson.
          </p>
          <p className="text-xs text-ink-muted">
            Made in Melbourne.
          </p>
        </div>
      </div>
    </footer>
  );
}

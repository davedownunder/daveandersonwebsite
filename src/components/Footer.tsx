import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-lg font-bold uppercase mb-4">
              Dave <span className="text-[#36b2d1]">Anderson</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Keynote speaker, MC, podcast host, musician, and tech marketing
              executive based in Melbourne, Australia.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase mb-4">Navigate</h4>
            <nav className="space-y-2">
              <Link href="/events" className="block text-sm text-gray-400 hover:text-[#36b2d1]">
                Events
              </Link>
              <Link href="/media" className="block text-sm text-gray-400 hover:text-[#36b2d1]">
                Media
              </Link>
              <Link href="/podcasts" className="block text-sm text-gray-400 hover:text-[#36b2d1]">
                Podcasts
              </Link>
              <Link href="/music" className="block text-sm text-gray-400 hover:text-[#36b2d1]">
                Music
              </Link>
              <Link href="/blog" className="block text-sm text-gray-400 hover:text-[#36b2d1]">
                Blog
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase mb-4">Connect</h4>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/daveanderson"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-400 hover:text-[#36b2d1]"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@techseekinghuman"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-400 hover:text-[#36b2d1]"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/daveanderson"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-400 hover:text-[#36b2d1]"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Dave Anderson. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

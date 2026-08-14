import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ShopTag from "@/components/ShopTag";
import TickRule from "@/components/TickRule";
import VideoLightbox from "@/components/VideoLightbox";

export const metadata: Metadata = {
  title: "Podcasts",
  description:
    "Tech Seeking Human — 41 episodes of long-form interviews at the intersection of technology and humanity, hosted by Dave Anderson.",
};

// Cover art and episode count come from the Apple Podcasts catalogue
// (itunes.apple.com/lookup?id=1571011755), which is the show's own feed.
const ARTWORK =
  "https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/6d/d7/1f/6dd71fa0-9d72-3ae9-3e91-cbcca168f9b3/mza_15991958063469105468.png/1200x1200bb.jpg";

const EPISODE_COUNT = 41;

const listen = [
  { label: "Spotify", href: "https://open.spotify.com/show/0yrGPFIScz9aok2qwzsVVt" },
  { label: "Apple Podcasts", href: "https://podcasts.apple.com/au/podcast/tech-seeking-human/id1571011755" },
  { label: "YouTube", href: "https://www.youtube.com/@techseekinghuman" },
  { label: "techseekinghuman.ai", href: "https://techseekinghuman.ai" },
];

// Guests with a known single-video id open in a lightbox; the rest link out.
const guests = [
  {
    name: "Magic Johnson",
    role: "NBA legend, entrepreneur",
    image:
      "https://i0.wp.com/daveandersononline.com/wp-content/uploads/2021/02/cropped-cropped-cropped-cropped-aaa052f0-b98c-452e-b59a-02c4f0566eeb-1-1.jpg",
    videoId: "VTIEc07ycZI",
  },
  {
    name: "Marc Randolph",
    role: "Netflix co-founder",
    image:
      "https://i0.wp.com/daveandersononline.com/wp-content/uploads/2021/02/cropped-cropped-cropped-cropped-cropped-cropped-image-e1634694692472.png",
    videoId: "0LoGTmr4s3k",
  },
  {
    name: "Hannah Fry",
    role: "Mathematician, broadcaster",
    image:
      "https://i0.wp.com/daveandersononline.com/wp-content/uploads/2022/05/cropped-hannah-fry.jpeg",
    videoId: "hqEtaOHpjIQ",
  },
  {
    name: "Baratunde Thurston",
    role: "Writer, host",
    image:
      "https://i0.wp.com/daveandersononline.com/wp-content/uploads/2022/02/cropped-cropped-nyt_likeabossbaratunde10.jpeg",
    href: "https://www.youtube.com/@techseekinghuman/search?query=Baratunde",
  },
  {
    name: "Adam Cheyer",
    role: "Siri co-founder",
    image:
      "https://i0.wp.com/daveandersononline.com/wp-content/uploads/2021/10/cropped-cropped-adam_cheyer.jpeg",
    videoId: "dezsoPQsVCE",
  },
  {
    name: "Gene Kim",
    role: "Author, DevOps researcher",
    image:
      "https://i0.wp.com/daveandersononline.com/wp-content/uploads/2022/05/cropped-Gene-Kim.jpeg",
    videoId: "bCjsaJ3c_3A",
  },
  {
    name: "Tricia Wang",
    role: "Tech ethnographer",
    image:
      "https://i0.wp.com/daveandersononline.com/wp-content/uploads/2022/05/cropped-preview_tricia-wang.jpeg",
    videoId: "O_pPucSljYI",
  },
  {
    name: "Max Tegmark",
    role: "MIT physicist, Future of Life Institute",
    image: "https://techseekinghuman.ai/wp-content/uploads/2021/03/maxtegmark.jpg",
    href: "https://techseekinghuman.ai/podcasts/episode-2-max-tegmark",
  },
];

function GuestTile({ guest }: { guest: (typeof guests)[number] }) {
  const inner = (
    <>
      <div className="aspect-square overflow-hidden rounded-md border border-rule bg-kraft-alt">
        <img
          src={guest.image}
          alt={guest.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>
      <p className="font-serif text-base mt-3 text-ink group-hover:text-brass transition-colors">
        {guest.name}
      </p>
      <p className="text-ink-muted text-xs mt-0.5 leading-snug">{guest.role}</p>
    </>
  );

  if (guest.videoId) {
    return (
      <VideoLightbox videoId={guest.videoId} title={`${guest.name} on Tech Seeking Human`}>
        {inner}
      </VideoLightbox>
    );
  }

  return (
    <a
      href={guest.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      {inner}
    </a>
  );
}

export default function PodcastsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Podcasts"
        title={
          <>
            Long-form conversations with{" "}
            <span className="italic text-brass">remarkable people</span>.
          </>
        }
        lede="Tech Seeking Human — interviews at the intersection of technology and humanity. Currently focused on the economics of the token: how AI usage is priced, measured and optimised as it becomes the unit of work."
      />

      {/* Show card */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="border border-rule bg-kraft-soft rounded-md p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
              <div className="md:col-span-4">
                <div className="aspect-square overflow-hidden rounded-md border border-rule bg-kraft-alt max-w-xs mx-auto md:max-w-none">
                  <img
                    src={ARTWORK}
                    alt="Tech Seeking Human cover art"
                    width={1200}
                    height={1200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-8">
                <ShopTag>Hosted by Dave</ShopTag>
                <h2 className="font-serif text-4xl md:text-5xl font-light mt-5 leading-tight text-ink">
                  Tech Seeking Human
                </h2>
                <p className="mt-5 text-ink-soft leading-relaxed text-lg">
                  {EPISODE_COUNT} episodes and counting, with guests including
                  Magic Johnson, Marc Randolph, Hannah Fry, Adam Cheyer, Gene
                  Kim, Tricia Wang and Max Tegmark.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {listen.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-ink text-kraft hover:bg-brass hover:text-ink transition-colors font-medium px-4 py-2 rounded-full text-xs"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="border-b border-rule bg-ink text-kraft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { big: `${EPISODE_COUNT}`, small: "episodes published" },
              { big: "Since 2021", small: "still going" },
              { big: "Long-form", small: "no soundbites" },
              { big: "Tokens", small: "the current obsession" },
            ].map((s) => (
              <div key={s.small} className="text-left md:text-center">
                <p className="font-serif text-4xl md:text-5xl font-light text-kraft leading-none">
                  {s.big}
                </p>
                <p className="mt-2 text-sm text-kraft/70 font-mono uppercase tracking-widest">
                  {s.small}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guests */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <p className="eyebrow mb-3">Featured conversations</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
            A cross-section of the guest roster.
          </h2>
          <TickRule className="mt-8 mb-10 opacity-50" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {guests.map((guest) => (
              <GuestTile key={guest.name} guest={guest} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Come on the show</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
              Building something at the edge of AI and the human side of tech?
            </h2>
          </div>
          <a
            href="mailto:daveando@gmail.com"
            className="inline-flex items-center gap-2 bg-ink text-kraft hover:bg-brass hover:text-ink transition-colors font-medium px-6 py-3 rounded-full text-sm shrink-0"
          >
            Pitch an episode →
          </a>
        </div>
      </section>
    </>
  );
}

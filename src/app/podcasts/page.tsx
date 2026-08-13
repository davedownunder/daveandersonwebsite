import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ShopTag from "@/components/ShopTag";
import { getPageBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Podcasts",
  description: "Tech Seeking Human — long-form interviews at the intersection of technology and humanity, hosted by Dave Anderson.",
};

const guests = [
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
  {
    name: "Tricia Wang",
    image:
      "https://i0.wp.com/daveandersononline.com/wp-content/uploads/2022/05/cropped-preview_tricia-wang.jpeg",
    href: "https://youtu.be/O_pPucSljYI",
  },
  {
    name: "Libby Trickett",
    image:
      "https://i0.wp.com/daveandersononline.com/wp-content/uploads/2022/03/cropped-cropped-Tech-Seeking-Human-Thumbnail.jpg",
    href: "https://youtu.be/q6tWVFwA-EQ",
  },
];

export default function PodcastsPage() {
  const page = getPageBySlug("podcasts");

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
        lede="Host of Tech Seeking Human — long-form interviews at the intersection of technology and humanity."
      />

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="border border-rule bg-kraft-soft rounded-md p-8 md:p-12">
            <ShopTag>Hosted</ShopTag>
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-5 leading-tight text-ink">
              Tech Seeking Human
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed max-w-2xl text-lg">
              Guests include Magic Johnson, Marc Randolph, Baratunde Thurston,
              Hannah Fry, Adam Cheyer, Gene Kim, Tricia Wang and Libby
              Trickett. New episodes drop wherever you listen.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                { label: "Spotify", href: "https://open.spotify.com/show/0yrGPFIScz9aok2qwzsVVt" },
                { label: "Apple Podcasts", href: "https://podcasts.apple.com/au/podcast/tech-seeking-human/id1571011755" },
                { label: "YouTube", href: "https://www.youtube.com/channel/UCIMxTvRKb6tJqvlzesZHFuA" },
                { label: "techseekinghuman.ai", href: "http://techseekinghuman.ai" },
              ].map((l) => (
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
      </section>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <p className="eyebrow mb-4">Featured conversations</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl leading-tight">
            A cross-section of the guest roster.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {guests.map((guest) => (
              <a
                key={guest.name}
                href={guest.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {page && page.content && (
        <section>
          <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
            <div
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-a:text-brass prose-strong:text-ink"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </div>
        </section>
      )}
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "My Passions" };

export default function PassionsPage() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold uppercase mb-12">
          My <span className="text-[#692e5e]">Passions</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/passions/travel" className="bg-gradient-to-br from-[#36b2d1] to-[#2a8fa8] text-white rounded-lg p-12 hover:shadow-lg transition-shadow">
            <h2 className="font-heading text-3xl font-bold mb-3">Travel Blog</h2>
            <p className="text-gray-100">Adventures and stories from around the world.</p>
          </Link>
          <Link href="/passions/peloton" className="bg-gradient-to-br from-[#692e5e] to-[#4e1f47] text-white rounded-lg p-12 hover:shadow-lg transition-shadow">
            <h2 className="font-heading text-3xl font-bold mb-3">Peloton Ambassador</h2>
            <p className="text-gray-200">Fitness, community, and the Peloton journey.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

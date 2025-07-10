// app/components/GetStartedSection.tsx
import Link from "next/link";

export default function GetStartedSection() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-20 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        Get started today
      </h2>
      <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
        We look forward to serving the needs of used car dealers across the
        Philippines and helping them thrive in this dynamic market.
      </p>
      <Link
        href="/"
        className="inline-block bg-purple-900 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition"
      >
        Inquire now
      </Link>
    </section>
  );
}

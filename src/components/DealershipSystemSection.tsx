// app/components/DealershipSystemSection.tsx
import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const features = [
  {
    title: "Inventory Management:",
    description:
      "Track all details about your cars and sales in one place — from car details to buyers. All you need is now in one place."
  },
  {
    title: "Marketing Tools:",
    description:
      "Promote your cars across all platforms. Write marketing text and upload to Facebook Marketplace, Groups, Pages and Instagram with a single click of a button."
  },
  {
    title: "Market Insights (Coming Soon):",
    description:
      "Get insights on prices and volumes for all cars in the market by combining data from multiple sources with one click."
  }
];

export default function DealershipSystemSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-24 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text column (first on mobile, first on desktop) */}
        <div className="order-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Dealership Management System
          </h2>
          <p className="text-gray-600 mb-8">
            OneLot’s digital platform was built with the single goal to help
            used car dealers operate their business more efficiently.
          </p>

          <ul className="space-y-6 mb-8">
            {features.map((f) => (
              <li key={f.title} className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 text-purple-900 flex-shrink-0 mt-1" />
                <div>
                  <strong className="font-medium text-gray-900">
                    {f.title}
                  </strong>{" "}
                  <span className="text-gray-600">{f.description}</span>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-gray-500 mb-6">
            Sign up for OneLot’s dealer platform today, and make managing your
            cars easier.
          </p>
          <Link
            href="/explore"
            className="inline-block bg-purple-900 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition"
          >
            Explore now&nbsp;→
          </Link>
        </div>

        {/* Image column (second on mobile, second on desktop) */}
        <div className="order-2 w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/data.png"
            alt="Dealership Management System screenshot"
            width={800}
            height={500}
            className="object-cover w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

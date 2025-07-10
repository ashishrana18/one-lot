// app/components/FinancingSection.tsx
import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function FinancingSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image: put second on mobile, first on lg */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
          <Image
            src="/image.png"
            alt="Car Financing dashboard"
            width={800}
            height={500}
            loading="lazy"
            className="object-cover w-full h-auto"
          />
        </div>

        {/* Text: put first on mobile, second on lg */}
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Car Financing
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Dealer Loans
          </h3>
          <p className="text-gray-600 mb-4">
            OneLot’s working capital loans allow car dealers to buy more cars
            and capitalize on purchase opportunities you would otherwise have
            missed. We transfer the money to your account within 6 hours.
          </p>
          <ul className="space-y-3 mb-6 border-t border-b border-gray-300 p-6">
            {[
              "Interest as low as 1.5% per month with daily calculation of interest",
              "Financing up to 70% of the vehicle purchase",
              "Financing period up to 90 days with flexible repayment schedule at any point"
            ].map((text) => (
              <li key={text} className="flex items-start gap-2">
                <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-700">{text}</span>
              </li>
            ))}
          </ul>
          <p className="lg:mb-6 mb-8  text-lg text-gray-400">Use OneLot's Financing solution today, grow the number of cars in your lot and increase your profits.</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-purple-900 text-white rounded-lg hover:bg-primary/90 transition"
          >
            View Loans&nbsp;→
          </Link>
        </div>
      </div>
    </section>
  );
}

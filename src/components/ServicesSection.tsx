// app/components/ServicesSection.tsx
import Link from "next/link";
import {
  CurrencyDollarIcon,
  MegaphoneIcon
} from "@heroicons/react/24/solid";

export default function ServicesSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to grow your business
          </h2>
          <p className="text-gray-600 mb-6">
            OneLot is your trusted lending and financing partner, exclusively
            tailored for used car dealerships. We also offer digital tools for
            streamlined operations and growth of your dealership.
          </p>
          <Link
            href="/learn-more"
            className="inline-flex items-center text-purple-900 font-medium hover:underline"
          >
            Learn more&nbsp;→
          </Link>
        </div>

        {/* Right features list */}
        <div className="space-y-8 border-b border-t border-gray-200 pt-8 pb-8">
          {/* Dealer Loans */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <CurrencyDollarIcon className="h-8 w-8 text-teal-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Dealer Loans</h3>
              <p className="text-teal-400 mb-1">
                Accelerate your growth with tailored loan solutions
              </p>
              <p className="text-gray-600">
                Get comprehensive car financing solutions, unlock the potential
                of your dealership and take it to new heights.
              </p>
            </div>
          </div>

          {/* Dealership Management System */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <MegaphoneIcon className="h-8 w-8 text-purple-900" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Dealership Management System
              </h3>
              <p className="text-purple-900 mb-1">
                Enhance Efficiency and Sales with free digital tools for car
                dealerships
              </p>
              <p className="text-gray-600">
                OneLot offers a suite of powerful digital tools designed to
                optimize your dealership's operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

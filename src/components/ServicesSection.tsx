// components/ServicesSection.tsx
import React from "react";
import Link from "next/link";
import { CurrencyDollarIcon, MegaphoneIcon } from "@heroicons/react/24/solid";

export interface Service {
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Dealer Loans",
    tagline: "Accelerate your growth with tailored loan solutions",
    description:
      "Get comprehensive car financing solutions, unlock the potential of your dealership and take it to new heights.",
    icon: <CurrencyDollarIcon className="h-8 w-8 text-teal-500" />
  },
  {
    title: "Dealership Management System",
    tagline:
      "Enhance Efficiency and Sales with free digital tools for car dealerships",
    description:
      "OneLot offers a suite of powerful digital tools designed to optimize your dealership's operations.",
    icon: <MegaphoneIcon className="h-8 w-8 text-purple-900" />
  }
];

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
        <div className="space-y-8 border-t border-b border-gray-200 py-8">
          {services.map((service) => (
            <div key={service.title} className="flex items-start gap-4">
              <div className="flex-shrink-0">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-purple-900 mb-1 text-sm">
                  {service.tagline}
                </p>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

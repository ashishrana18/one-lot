// app/components/WhyChooseUs.tsx
import {
  LockClosedIcon,
  BoltIcon,
  HandThumbUpIcon,
  TruckIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";

const features = [
  {
    title: "Trust",
    description:
      "Regulated by Securities and Exchange Commission (SEC) Philippines",
    icon: <LockClosedIcon className="h-6 w-6 text-purple-900" />
  },
  {
    title: "High Amount",
    description:
      "Get the highest loan amounts compared to other banks and lenders",
    icon: <CurrencyDollarIcon className="h-6 w-6 text-purple-900" />
  },
  {
    title: "Fast",
    description: "Get the money within a few hours on the same day",
    icon: <BoltIcon className="h-6 w-6 text-purple-900" />
  },
  {
    title: "Flexible",
    description: "Loans are tailored to your needs",
    icon: <TruckIcon className="h-6 w-6 text-purple-900" />
  },
  {
    title: "Easy",
    description:
      "Run through an easy process and get your first loans within days",
    icon: <HandThumbUpIcon className="h-6 w-6 text-purple-900" />
  }
];

export default function WhyChooseUs() {
  return (
    <>
      {/* Why OneLot Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
            Why OneLot?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 p-6 text-center rounded-lg shadow-sm"
              >
                <div className="w-10 h-10 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Testimonials
          </h2>
          <Image
            src="/avatar.jpg"
            alt="Mark Vergel"
            width={60}
            height={60}
            className="rounded-full mx-auto mb-4"
          />
          <p className="text-xl font-medium text-gray-800 mb-4">
            “The service of OneLot is top notch, they act fast and can provide
            dealers with the funds they need, when they need it.”
          </p>
          <p className="text-sm font-semibold text-gray-800">
            Mark Vergel de Dios{" "}
            <span className="text-gray-500">Owner, MVD Auto Works</span>
          </p>

          <div className="flex justify-center items-center space-x-4 mt-6 text-gray-500">
            <button
              aria-label="Previous"
              className="hover:text-purple-900 transition"
            >
              &larr;
            </button>
            <button
              aria-label="Next"
              className="hover:text-purple-900 transition"
            >
              &rarr;
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

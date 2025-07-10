// app/components/FaqSection.tsx
"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

const FAQS = [
  {
    question: "How do I apply for a loan?",
    answer: `OneLot onboarding is easy and straightforward. Simply complete our online application form, upload the required documents (proof of identity, proof of dealership), and submit. We typically review and approve applications within 2–3 business days. 
See full requirements for details.`
  },
  {
    question: "What are the interest rates offered?",
    answer: `We offer competitive interest rates starting as low as 1.5% per month, calculated daily on the outstanding balance. Your exact rate depends on your credit profile and financing amount.`
  },
  {
    question: "What kind of vehicles can I upload?",
    answer: `You can upload any used passenger cars and light commercial vehicles that meet our age and condition criteria. Before listing, ensure your vehicle has a valid registration and is in roadworthy condition.`
  },
  {
    question: "How can I keep track of potential buyers?",
    answer: `Our platform provides a built‑in lead management dashboard. You’ll see who’s viewed your listings, message interested buyers directly, and schedule test drives—all from one place.`
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="px-4 md:px-8 sm:mx-4 lg:px-16 py-16 bg-gray-50 text-gray-800">
      <h2 className="text-3xl font-extrabold text-center mb-8">
        Frequently asked questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {FAQS.map((faq, i) => (
          <div key={faq.question} className="border-b last:border-none">
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center py-4 focus:outline-none"
            >
              <span className="text-left flex items-center gap-2">
                <span className="inline-block text-purple-900 w-7 h-7 flex items-center justify-center mx-2 sm:mx-4">
                  <HiOutlineQuestionMarkCircle className="w-5 h-5" />
                </span>
                <span className={openIndex === i ? "font-bold" : "font-medium"}>
                  {faq.question}
                </span>
              </span>
              <ChevronDownIcon
                className={`h-6 w-6 text-gray-500 transform transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="pb-4 text-gray-600 space-y-2">
                {faq.answer.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="/faqs"
          className="inline-block px-6 py-3 bg-purple-900 text-white rounded-lg hover:bg-purple-800 transition"
        >
          See all&nbsp;→
        </a>
      </div>
    </section>
  );
}

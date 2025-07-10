// components/StayConnectedCarousel.tsx
import React from "react";
import Card, { CardProps } from "./Card";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

// Dummy data array
const posts: CardProps[] = [
  {
    avatarText: "OL",
    title: "OneLot",
    date: "October 30",
    localeIcon: "🌐",
    contentLines: [
      "Efficiency never looked so good – introducing the fuel-efficient.",
      "Sign-up OneLot’s dealer platform today, and your cars easier"
    ],
    image: {
      src: "/1.png",
      alt: "Suzuki Jimny post"
    }
  },
  {
    avatarText: "OL",
    title: "OneLot",
    date: "October 28",
    localeIcon: "🌐",
    contentLines: [
      "Adventure awaits in the rugged yet refined Honda Civic.",
      "Join OneLot’s community for exclusive offers"
    ],
    image: {
      src: "/2.png",
      alt: "Honda Civic post"
    }
  },
  {
    avatarText: "OL",
    title: "OneLot",
    date: "October 28",
    localeIcon: "🌐",
    contentLines: [
      "Adventure awaits in the rugged yet refined Honda Civic.",
      "Join OneLot’s community for exclusive offers"
    ],
    image: {
      src: "/6.png",
      alt: "Honda Civic post"
    }
  },
  {
    avatarText: "OL",
    title: "OneLot",
    date: "October 26",
    localeIcon: "🌐",
    contentLines: [
      "Luxury meets performance in the exquisite Lexus UX.",
      "Discover more on our dealer platform"
    ],
    image: {
      src: "/3.png",
      alt: "Lexus UX post"
    }
  },
  {
    avatarText: "OL",
    title: "OneLot",
    date: "October 24",
    localeIcon: "🌐",
    contentLines: [
      "Rev up your dreams with high-performance vehicles.",
      "Check out our latest lineup from our company, OneLot"
    ],
    image: {
      src: "/4.png",
      alt: "Honda Accord post"
    }
  },
  {
    avatarText: "OL",
    title: "OneLot",
    date: "October 22",
    localeIcon: "🌐",
    contentLines: [
      "Drive in style with the Toyota Fortuner.",
      "Sign up now for early access, avail perks and exclusive offers"
    ],
    image: {
      src: "/5.png",
      alt: "Toyota Fortuner post"
    }
  }
];

const Carousel: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      {/* Header */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Stay connected
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Follow OneLot on our Facebook and Instagram page and stay up to date
          with our most recent offers, updates and new product features
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2 border border-gray-800 rounded-lg text-gray-800 hover:bg-gray-100 transition"
          >
            <FaFacebookF className="w-5 h-5" />
            Follow us on Facebook
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2 border border-gray-800 rounded-lg text-gray-800 hover:bg-gray-100 transition"
          >
            <FaInstagram className="w-5 h-5" />
            Follow us on Instagram
          </a>
        </div>
      </div>

      {/* Carousel */}
      <div className="flex overflow-x-auto space-x-4 px-8 snap-x snap-proximity scroll-pl-10 scroll-pr-12 scrollbar-hide">
        {posts.map((item, idx) => (
          <div key={idx} className="mx-2 first:ml-8">
            <Card {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;

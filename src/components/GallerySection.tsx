// app/components/GallerySection.tsx
import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 items-center">
        {/* Left: Dashboard UI */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/dashboard.png"
            alt="Dashboard UI preview"
            width={1200}
            height={800}
            className="object-cover"
          />
        </div>
        {/* Right: Regulator Badge */}
        <div className="flex flex-col space-y-6 items-center text-center">
          <div className="w-48">
            <Image
              src="/sec.png"
              alt="Securities and Exchange Commission Philippines"
              width={192}
              height={192}
              className="object-contain"
            />
          </div>
          <p className="text-gray-500 text-sm">
            OneLot’s operations are fully regulated and compliant with the
            Securities and Exchange Commission of the Philippines.
          </p>
        </div>
      </div>
    </section>
  );
}

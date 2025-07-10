import Image from "next/image";

export default function Card() {
  return (
    <div className="max-w-xl mx-auto border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 p-4">
        <div className="w-10 h-10 bg-purple-900 text-white font-bold rounded-full flex items-center justify-center">
          OL
        </div>
        <div className="flex-1">
          <p className="font-semibold text-gray-800">OneLot</p>
          <p className="text-sm text-gray-500">October 30 · 🌐</p>
        </div>
        <div className="text-gray-400 cursor-pointer text-lg">⋯</div>
      </div>

      {/* Content */}
      <div className="px-4 text-gray-800 mb-4 space-y-2">
        <p>Efficiency never looked so good – introducing the fuel-efficient.</p>
        <p>
          Sign-up OneLot’s dealer platform today, and your cars easier <br />
          <a href="https://one-lot.com/" className="text-purple-900 underline">
            https://one-lot.com/
          </a>
        </p>
      </div>

      {/* Image */}
      <div className="w-full h-auto">
        <Image
          src="/post-car.jpg"
          alt="Suzuki Jimny post"
          width={800}
          height={600}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}

// components/Card.tsx
import Image from "next/image";
import React from "react";

export interface CardProps {
  avatarText: string;
  title: string;
  date: string;
  localeIcon: string;
  contentLines: string[];
  link?: string;
  image: {
    src: string;
    alt: string;
  };
}

const Card: React.FC<CardProps> = ({
  avatarText,
  title,
  date,
  localeIcon,
  contentLines,
  link,
  image
}) => {
  return (
    <div className="w-64 flex-shrink-0 flex flex-col border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white snap-start">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="w-10 h-10 bg-purple-900 text-white font-bold rounded-full flex items-center justify-center flex-shrink-0">
          {avatarText}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-gray-800 text-sm truncate">
            {title}
          </p>
          <div className="flex items-center text-xs text-gray-500">
            <span>{date}</span>
            <span className="mx-1">·</span>
            <span>{localeIcon}</span>
          </div>
        </div>
        <div className="text-gray-400 cursor-pointer text-lg">⋯</div>
      </div>

      {/* Content */}
      <div className="px-4 py-2 text-gray-800 flex-1 space-y-1">
        {contentLines.map((line, i) => (
          <p key={i} className="text-sm leading-snug">
            {line}
          </p>
        ))}
        {link && (
          <p className="mt-1">
            <a
              href={link}
              className="text-purple-900 underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link}
            </a>
          </p>
        )}
      </div>

      {/* Image */}
      <div className="h-40 w-full relative">
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Card;

"use client";

import { ImageItem } from "@/types";
import { useAuthStore } from "@/store/auth-store";

interface Props {
  images: ImageItem[];
}

export default function ImageGrid({ images }: Props) {
  const { isLoggedIn } = useAuthStore();

  const visibleImages = isLoggedIn ? images : images.slice(0, 3);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {visibleImages.map((image, idx) => (
          <img
            key={idx}
            src={image.url}
            alt="Gallery Image"
            className="w-full h-72 object-cover hover:scale-105 transition duration-300"
          />
        ))}
      </div>

      {!isLoggedIn && images.length > 3 && (
        <p className="mt-4 text-sm text-gray-500">Login to view all images.</p>
      )}
    </>
  );
}

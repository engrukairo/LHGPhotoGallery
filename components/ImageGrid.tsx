"use client";

import { useState } from "react";
import { ImageItem } from "@/types";
import { useAuthStore } from "@/store/auth-store";
import GalleryLightbox from "./GalleryLightbox";

interface Props {
  images: ImageItem[];
}

export default function ImageGrid({ images }: Props) {
  const { isLoggedIn } = useAuthStore();

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const visibleImages = isLoggedIn ? images : images.slice(0, 3);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {visibleImages.map((image, idx) => (
          <button
            key={image.id}
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img
              src={image.url}
              alt="Gallery Image"
              className="w-full h-72 object-cover hover:scale-105 transition duration-300"
            />
          </button>
        ))}
      </div>

      {!isLoggedIn && images.length > 3 && (
        <p className="mt-4 text-sm text-gray-500">Login to view all images.</p>
      )}

      <GalleryLightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={visibleImages.map((img) => ({
          src: img.url,
        }))}
      />
    </>
  );
}

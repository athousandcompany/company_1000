"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrevious();
    },
    [isOpen, onClose, onNext, onPrevious]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Navigation */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </>
      )}

      {/* Image */}
      <div className="w-full h-full flex items-center justify-center p-12">
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex]}
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => {
                const diff = index - currentIndex;
                if (diff > 0) {
                  for (let i = 0; i < diff; i++) onNext();
                } else {
                  for (let i = 0; i < Math.abs(diff); i++) onPrevious();
                }
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex ? "bg-white scale-125" : "bg-white/30"
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

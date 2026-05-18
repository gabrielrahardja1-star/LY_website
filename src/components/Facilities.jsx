'use client';

// TODO: Replace Figma asset URLs with permanent hosted images before deploying
import { useState } from 'react';
import Image from 'next/image';

function ArrowButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
      className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e86500] flex items-center justify-center hover:bg-[#c45e00] transition-colors shadow-md"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        {direction === 'left' ? (
          <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

const facilityImages = [
  { src: '/images/facility-6.jpg', alt: 'Consultation room' },
  { src: '/images/facility-2.jpg', alt: 'Play therapy room' },
  { src: '/images/facility-3.jpg', alt: 'Play therapy room wide view' },
  { src: '/images/facility-4.jpg', alt: 'Sensory integration room' },
  { src: '/images/facility-5.jpg', alt: 'Climbing wall' },
  { src: '/images/facility-1.jpg', alt: 'Swing equipment close-up' },
];

const VISIBLE = 3;

export default function Facilities() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + facilityImages.length) % facilityImages.length);
  const next = () => setIndex((i) => (i + 1) % facilityImages.length);

  const visible = Array.from({ length: VISIBLE }, (_, i) => facilityImages[(index + i) % facilityImages.length]);

  return (
    <section id="facilities" className="bg-[#604f94] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-[family-name:var(--font-montserrat)] font-extrabold text-white text-center mb-12"
          style={{ fontSize: '48px' }}
        >
          Our Facilities
        </h2>
        <div className="flex items-center gap-4">
          <ArrowButton direction="left" onClick={prev} />
          <div className="flex gap-5 flex-1 overflow-hidden">
            {visible.map((img, i) => (
              <div key={`${img.src}-${i}`} className="relative flex-1 h-64 rounded-2xl overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <ArrowButton direction="right" onClick={next} />
        </div>
      </div>
    </section>
  );
}

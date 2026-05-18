'use client';

// TODO: Replace Figma asset URLs with permanent hosted images before deploying
import { useState } from 'react';
import Image from 'next/image';

const CARDS_VISIBLE = 3;

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

function ServiceCard({ card }) {
  const includesItems = card.includes ? card.includes.split(' · ') : [];

  return (
    <div className="flex flex-col bg-[#fef9f0] rounded-2xl overflow-hidden flex-1 min-w-0">
      <div className="relative w-full h-52 flex-shrink-0">
        <Image
          src={card.image}
          alt={card.title}
          fill
          unoptimized
          className="object-cover"
        />
      </div>
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex gap-2 flex-wrap">
          {card.badges.map((b) => (
            <span
              key={b}
              className="text-xs font-[family-name:var(--font-montserrat)] font-semibold border border-[#734424] text-[#734424] rounded-full px-3 py-1"
            >
              {b}
            </span>
          ))}
        </div>
        <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-[#734424] leading-tight text-xl">
          {card.title}
        </h3>
        <p className="font-[family-name:var(--font-montserrat)] text-[#734424] text-sm leading-relaxed">
          {card.description}
        </p>
        {includesItems.length > 0 && (
          <div>
            <p className="font-[family-name:var(--font-montserrat)] font-bold text-[#734424] text-sm mb-1">
              Includes:
            </p>
            <ul className="flex flex-col gap-0.5">
              {includesItems.map((item) => (
                <li
                  key={item}
                  className="font-[family-name:var(--font-montserrat)] text-[#734424] text-sm flex items-start gap-1.5"
                >
                  <span className="mt-1 flex-shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-auto pt-4">
          <a
            href={`https://wa.me/6285186055162?text=${card.waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#c45e00] text-white font-[family-name:var(--font-montserrat)] font-extrabold rounded-full px-8 py-3 text-base hover:bg-[#a85200] transition-colors w-full"
          >
            Book Now!
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ServicesCarousel({ id, subtitle, cards, darkTheme }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length);
  const next = () => setIndex((i) => (i + 1) % cards.length);

  const visibleCards = Array.from({ length: CARDS_VISIBLE }, (_, i) => cards[(index + i) % cards.length]);

  return (
    <section
      id={id}
      className={`py-20 px-6 ${darkTheme ? 'bg-[#604f94]' : 'bg-[#f5f5f5]'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className={`font-[family-name:var(--font-montserrat)] font-extrabold ${darkTheme ? 'text-white' : 'text-[#e86500]'}`}
            style={{ fontSize: '48px' }}
          >
            Our Services
          </h2>
          <p
            className={`font-[family-name:var(--font-montserrat)] font-bold ${darkTheme ? 'text-white' : 'text-[#e86500]'}`}
            style={{ fontSize: '28px' }}
          >
            {subtitle}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <ArrowButton direction="left" onClick={prev} />
          <div className="flex gap-5 flex-1 overflow-hidden">
            {visibleCards.map((card, i) => (
              <ServiceCard key={`${card.title}-${index + i}`} card={card} />
            ))}
          </div>
          <ArrowButton direction="right" onClick={next} />
        </div>
      </div>
    </section>
  );
}

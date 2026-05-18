'use client';

import { useState } from 'react';

const testimonials = [
  {
    name: 'Mom "B"',
    service: 'Terapi Okupasi',
    quote:
      'Di The Light Years berbeda dengan tempat terapi lainnya, Coachnya sangat komunikatif penyampaian laporan tiap terapi sangat sistematis dan mudah di mengerti agar bisa diterapkan dirumah juga. Syukur Alhamdulillah, anak saya sudah ada kemajuan komunikasi nya semakin lancar dan nyambung. Oleh sebab itu saya percayakan terapi anak saya untuk continue di The Light Years. Semoga The Light Years semakin sukses ❤️',
  },
  {
    name: 'Mom Aro',
    service: 'Observasi anak',
    quote:
      'Kami berkonsultasi dengan psikolog dari The Light Years karena kami sebagai orangtua merasa sepertinya ada yang tidak baik-baik saja dengan perkembangan bahasa Aro. Setelah berkonsultasi dan juga dilakukan observasi, kami merasa hasil observasi nya detail dan saran-sarannya membuat kami sebagai orangtua mengetahui bagaimana kami bisa membantu Aro dalam perkembangan bahasa nya. Terima kasih banyak The Light Years! Sukses selalu untuk The Light Years!',
  },
  {
    name: 'Mom Astrid',
    service: 'Konsultasi',
    quote:
      "Thank you The Light Years, because now we understand our son better and we know we're on the right path. The counselor explained everything with empathy and clarity. Our son seemed to enjoy his time and felt comfortable during the session, which means a lot to us as parents.",
  },
];

const VISIBLE = 3;

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

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const visible = Array.from({ length: VISIBLE }, (_, i) => testimonials[(index + i) % testimonials.length]);

  return (
    <section id="testimonials" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-[family-name:var(--font-montserrat)] font-extrabold text-[#604f94] text-center mb-12"
          style={{ fontSize: '48px' }}
        >
          What People Say About Us?
        </h2>
        <div className="flex items-center gap-4">
          <ArrowButton direction="left" onClick={prev} />
          <div className="flex gap-5 flex-1 overflow-hidden">
            {visible.map((t, i) => (
              <div
                key={`${t.name}-${index + i}`}
                className="flex-1 bg-[#f5f5f5] rounded-2xl p-6 flex flex-col gap-3"
              >
                <p className="font-[family-name:var(--font-montserrat)] font-bold text-[#604f94] text-base">
                  {t.name}
                </p>
                <p className="font-[family-name:var(--font-montserrat)] text-[#e86500] text-sm italic">
                  {t.service}
                </p>
                <p className="font-[family-name:var(--font-inter)] text-gray-700 text-sm leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
          <ArrowButton direction="right" onClick={next} />
        </div>
      </div>
    </section>
  );
}

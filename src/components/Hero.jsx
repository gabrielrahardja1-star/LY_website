import Image from 'next/image';

// TODO: Replace Figma asset URLs with permanent hosted images before deploying
export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[800px] flex items-center">
      <Image
        src="/images/hero-bg.png"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16">
        <h1
          className="font-[family-name:var(--font-montserrat)] font-extrabold text-white leading-tight mb-6"
          style={{ fontSize: '64px' }}
        >
          Supporting growth at every stage of life
        </h1>
        <p
          className="font-[family-name:var(--font-inter)] text-white/75 mb-10"
          style={{ fontSize: '24px' }}
        >
          Therapy, Counselling, and Assessment for Children, Teens, and Adults
        </p>
        <a
          href="https://wa.me/6285186055162?text=Hi%2C%20I%27d%20like%20to%20make%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#e86500] text-white font-[family-name:var(--font-montserrat)] font-extrabold text-lg px-10 py-4 rounded-full border border-black hover:bg-[#d05800] transition-colors"
        >
          Make an Appointment Now!
        </a>
      </div>
    </section>
  );
}

import Image from 'next/image';

// TODO: Replace Figma asset URLs with permanent hosted images before deploying
const items = [
  {
    image: '/images/whatwedo/seminar.jpg',
    title: 'Seminar & Workshops',
    description:
      'We host regular seminars and workshops for parents, educators, and the community on child development and mental health topics.',
  },
  {
    image: '/images/whatwedo/community.jpg',
    title: 'Community Event',
    description:
      'We actively participate in and organize community events to raise awareness around child development and psychological well-being.',
  },
  {
    image: '/images/whatwedo/baby-class.jpg',
    title: 'Baby Class & Playing Class',
    description:
      'Structured play-based classes designed to support the physical, cognitive, and social development of babies and toddlers.',
  },
  {
    image: '/images/whatwedo/school.jpg',
    title: 'School Collaboration',
    description:
      'We partner with schools to provide on-site psychological support, teacher training, and student assessments through TKS & Minat Bakat programs.',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-[family-name:var(--font-montserrat)] font-extrabold text-[#e86500] text-center mb-12"
          style={{ fontSize: '48px' }}
        >
          What We Do?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative w-full h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-inter)] font-medium text-2xl text-[#3a2e69] mb-2">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[#828282] text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

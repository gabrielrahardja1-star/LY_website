import Image from 'next/image';

// TODO: Replace Figma asset URLs with permanent hosted images before deploying
const features = [
  {
    icon: 'https://www.figma.com/api/mcp/asset/037d6aef-24ec-49a3-b98c-1f4036862574',
    title: 'Licensed Professionals',
    description:
      'Each session is conducted by an experienced psychologist or therapist with a license in their respective field',
  },
  {
    icon: 'https://www.figma.com/api/mcp/asset/62f5cfba-228d-4350-b385-4817934147f4',
    title: 'Bilingual Services',
    description:
      'Sessions can be administered using English or Bahasa Indonesia with no added cost',
  },
  {
    icon: 'https://www.figma.com/api/mcp/asset/ee43cd2b-5438-4bb3-8d5c-d87defde4fa0',
    title: 'School Environment',
    description:
      'Services are held in a school environment, ensuring the safety and comfort of your children',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-[family-name:var(--font-montserrat)] font-extrabold text-[#e86500] text-center mb-12"
          style={{ fontSize: '48px' }}
        >
          Why Choose Us?
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left features */}
          <div className="flex flex-col gap-10 flex-1">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-5">
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={64}
                  height={64}
                  unoptimized
                  className="flex-shrink-0 object-contain"
                />
                <div>
                  <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-[#3a2e69] text-xl mb-1">
                    {f.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-gray-600 text-base">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Center image — links to What We Do section */}
          <a href="#what-we-do" className="flex-shrink-0 group">
            <Image
              src="/images/mascot.png"
              alt="What We Do"
              width={420}
              height={480}
              className="object-contain group-hover:opacity-90 transition-opacity"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

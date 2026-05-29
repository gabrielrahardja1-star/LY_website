import Image from 'next/image';

// TODO: Replace Figma asset URLs with permanent hosted images before deploying
const team = [
  {
    avatar: '/images/team/octavia.jpg',
    role: 'Head of\nPsychological Interventions',
    name: 'Octavia Fitri Prasantami,',
    credential: 'M.Psi., Psikolog',
  },
  {
    avatar: '/images/team/desi.png',
    role: 'Psychologist',
    name: 'Ni Ketut Desi Ariani,',
    credential: 'M.Psi., Psikolog',
  },
  {
    avatar: '/images/team/septiaryani.png',
    role: 'Play Therapist',
    name: 'Ni Ketut Septiaryani, S.IP,',
    credential: 'M. KESOS',
    note: '*Certified Therapist',
  },
  {
    avatar: '/images/team/adinda.png',
    role: 'Occupational Therapist',
    name: 'Adinda Cyntia Yunica,',
    credential: 'A.Md., O.T',
  },
  {
    avatar: '/images/team/utami.png',
    role: 'Occupational Therapist',
    name: 'Utami Rahayu',
    credential: 'Amd. OT',
  },
  {
    avatar: '/images/team/rimadina.png',
    role: 'Occupational Therapist',
    name: 'Rimadina Zifaati Choiriah,',
    credential: 'S.Tr. Kes',
  },
  {
    avatar: '/images/team/inggar.png',
    role: 'Speech Therapist',
    name: 'Inggar Rospita Sanatri,',
    credential: 'A.Md., Kes',
  },
];

function Star({ size = 32 }) {
  return (
    <Image src="/images/star.png" alt="" width={size} height={size} className="object-contain" />
  );
}

function TeamCard({ member }) {
  return (
    <div className="flex flex-col items-center text-center w-48">
      <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <p className="font-[family-name:var(--font-montserrat)] font-semibold text-[#ffd972] text-sm leading-snug mb-1 whitespace-pre-line">
        {member.role}
      </p>
      <p className="font-[family-name:var(--font-montserrat)] font-bold text-white text-base leading-snug">
        {member.name}
      </p>
      <p className="font-[family-name:var(--font-montserrat)] font-bold text-white text-base leading-snug">
        {member.credential}
      </p>
      {member.note && (
        <p className="font-[family-name:var(--font-montserrat)] text-white/60 text-xs mt-1">
          {member.note}
        </p>
      )}
    </div>
  );
}

export default function MeetTheTeam() {
  const row1 = team.slice(0, 2);
  const row2 = team.slice(2, 5);
  const row3 = team.slice(5, 7);

  return (
    <section id="meet-the-team" className="bg-[#604f94] py-20 px-6">
      <div className="max-w-4xl mx-auto relative">
        <h2
          className="font-[family-name:var(--font-montserrat)] font-extrabold text-white text-center mb-16"
          style={{ fontSize: '48px' }}
        >
          Meet Our Team
        </h2>

        {/* Row 1 — 2 members */}
        <div className="relative flex justify-center gap-24 mb-14">
          {/* Decorative stars row 1 */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <Star size={36} />
          </div>
          <div className="absolute right-4 top-4">
            <Star size={28} />
          </div>
          <div className="absolute right-0 top-1/2">
            <Star size={44} />
          </div>
          {row1.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>

        {/* Row 2 — 3 members */}
        <div className="flex justify-center gap-16 mb-14">
          {row2.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>

        {/* Row 3 — 2 members */}
        <div className="relative flex justify-center gap-24">
          {/* Decorative stars row 3 */}
          <div className="absolute left-2 top-0">
            <Star size={44} />
          </div>
          <div className="absolute right-0 bottom-4">
            <Star size={32} />
          </div>
          {row3.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

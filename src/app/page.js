// TODO: Replace Figma asset URLs with permanent hosted images before deploying
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesCarousel from '@/components/ServicesCarousel';
import Facilities from '@/components/Facilities';
import MeetTheTeam from '@/components/MeetTheTeam';
import WhatWeDo from '@/components/WhatWeDo';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const childrenCards = [
  {
    title: 'IQ Test',
    image: 'https://www.figma.com/api/mcp/asset/f80c3a61-2f27-408e-8122-da863263212b',
    badges: ['Offline', 'Online'],
    description: 'Evaluates the cognitive abilities across various domains for teens and adults',
    includes: '1.5 hours - 2 hours · Report and consultation',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20an%20IQ%20Test%20session',
  },
  {
    title: 'School Readiness Test',
    image: 'https://www.figma.com/api/mcp/asset/ce63a103-f9d4-4c3c-87c3-1ad1f5b5edd7',
    badges: ['Offline', 'Online'],
    description: "Assesses a child's development to determine their readiness to transition from Kindergarten to Primary 1",
    includes: '60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20School%20Readiness%20Test%20session',
  },
  {
    title: 'Play Therapy',
    image: 'https://www.figma.com/api/mcp/asset/b864a2da-2a50-47f1-b8eb-4b0f31520da6',
    badges: ['Offline', 'Online'],
    description: 'Aims to resolve emotional and behavioural difficulties, and process traumatic experiences through play-based activities',
    includes: '60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Play%20Therapy%20session',
  },
  {
    title: 'Speech Therapy',
    image: 'https://www.figma.com/api/mcp/asset/869c4d5f-2901-40f5-ab7e-c93203adf17b',
    badges: ['Offline', 'Online'],
    description: 'Supports the development of speech, language, and communication skills',
    includes: '60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Speech%20Therapy%20session',
  },
  {
    title: 'Behaviour Therapy',
    image: 'https://www.figma.com/api/mcp/asset/82d5d663-fe43-4f8b-8cc2-edff22409378',
    badges: ['Offline', 'Online'],
    description: 'Focuses on changing unhealthy behaviours and promoting emotional regulation',
    includes: '60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Behaviour%20Therapy%20session',
  },
  {
    title: 'Occupational Therapy',
    image: 'https://www.figma.com/api/mcp/asset/86dff934-cc5b-4ea4-8128-e6b404a01b88',
    badges: ['Offline', 'Online'],
    description: 'Focuses on building essential skills used for daily activities',
    includes: '60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20an%20Occupational%20Therapy%20session',
  },
  {
    title: 'Sensory Integration Therapy',
    image: 'https://www.figma.com/api/mcp/asset/b5f940b2-72ad-4e4c-a5c5-915c3876e40b',
    badges: ['Offline', 'Online'],
    description: 'Helps children to better process and regulate environmental stimuli (Touch, sound, light)',
    includes: '60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Sensory%20Integration%20Therapy%20session',
  },
  {
    title: 'Learning Disorder Diagnosis',
    image: 'https://www.figma.com/api/mcp/asset/4cc4bb3d-24f7-4c83-ab6d-c72756fff360',
    badges: ['Offline', 'Online'],
    description: 'Helps children to identify specific cognitive deficits (Reading, writing, or math)',
    includes: '60 min/session · Daily and monthly report · Report based on assessment · Treatment Plan',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Learning%20Disorder%20Diagnosis%20session',
  },
  {
    title: 'Consultation',
    image: 'https://www.figma.com/api/mcp/asset/f80c3a61-2f27-408e-8122-da863263212b',
    badges: ['Offline', 'Online'],
    description: "Identifies the child's initial needs and parent's concerns with a psychologist",
    includes: '60 min/session · Screening + Observation · Report based on assessment · Treatment Plan',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Consultation%20session',
  },
  {
    title: 'Developmental Screening',
    image: 'https://www.figma.com/api/mcp/asset/ce63a103-f9d4-4c3c-87c3-1ad1f5b5edd7',
    badges: ['Offline'],
    description: "Assesses the child's general abilities and challenges in relation to their developmental stage",
    includes: '60 min/session · Interview with parents · Report based on assessment · Treatment plan',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Developmental%20Screening%20session',
  },
  {
    title: 'Developmental Disorder Diagnosis',
    image: 'https://www.figma.com/api/mcp/asset/b864a2da-2a50-47f1-b8eb-4b0f31520da6',
    badges: ['Offline', 'Online'],
    description: 'Assesses the presence of developmental disorders (Autism, ADHD, and others)',
    includes: '60 min/session · Interview with parents · Report based on assessment · Treatment plan',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Developmental%20Disorder%20Diagnosis%20session',
  },
];

const teensAdultsCards = [
  {
    title: 'IQ Test',
    image: 'https://www.figma.com/api/mcp/asset/f80c3a61-2f27-408e-8122-da863263212b',
    badges: ['Offline', 'Online'],
    description: 'Evaluates the cognitive abilities across various domains for teens and adults',
    includes: '1.5 hours - 2 hours · Report and consultation',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20an%20IQ%20Test%20(Teens%20%26%20Adults)%20session',
  },
  {
    title: 'Mental Health Check Up',
    image: 'https://www.figma.com/api/mcp/asset/ce63a103-f9d4-4c3c-87c3-1ad1f5b5edd7',
    badges: ['Offline', 'Online'],
    description: 'Comprehensive evaluation of your emotional and psychological well-being',
    includes: 'Survey questionnaire · Report and consultation',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Mental%20Health%20Check%20Up%20session',
  },
  {
    title: 'Anxiety Screening',
    image: 'https://www.figma.com/api/mcp/asset/86dff934-cc5b-4ea4-8128-e6b404a01b88',
    badges: ['Offline', 'Online'],
    description: 'Identify individuals at risk for anxiety, including the severity of symptoms',
    includes: 'Survey questionnaire · Report and consultation',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20an%20Anxiety%20Screening%20session',
  },
  {
    title: 'ADHD Screening',
    image: 'https://www.figma.com/api/mcp/asset/b5f940b2-72ad-4e4c-a5c5-915c3876e40b',
    badges: ['Offline', 'Online'],
    description: 'Identify behaviours of inattention, impulsivity, and hyperactivity',
    includes: 'Survey questionnaire · Report and consultation',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20an%20ADHD%20Screening%20session',
  },
  {
    title: 'Depression Screening',
    image: 'https://www.figma.com/api/mcp/asset/4cc4bb3d-24f7-4c83-ab6d-c72756fff360',
    badges: ['Offline', 'Online'],
    description: 'Identify individuals at risk for depression, including the severity of symptoms',
    includes: 'Survey questionnaire · Report and consultation',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Depression%20Screening%20session',
  },
  {
    title: 'Counselling',
    image: 'https://www.figma.com/api/mcp/asset/f80c3a61-2f27-408e-8122-da863263212b',
    badges: ['Offline', 'Online'],
    description: 'Individual counselling conducted by a psychologist',
    includes: '60 min/session',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Counselling%20session',
  },
  {
    title: 'Couple Counselling',
    image: 'https://www.figma.com/api/mcp/asset/82d5d663-fe43-4f8b-8cc2-edff22409378',
    badges: ['Offline', 'Online'],
    description: 'Counselling for couples conducted by a psychologist',
    includes: '60 min/session',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Couple%20Counselling%20session',
  },
  {
    title: 'Family Counselling',
    image: 'https://www.figma.com/api/mcp/asset/869c4d5f-2901-40f5-ab7e-c93203adf17b',
    badges: ['Offline', 'Online'],
    description: 'Counselling for family members conducted by a psychologist',
    includes: '60 min/session',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Family%20Counselling%20session',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <ServicesCarousel
          id="services-children"
          subtitle="Children"
          cards={childrenCards}
          darkTheme={false}
        />
        <ServicesCarousel
          id="services-teens-adults"
          subtitle="Teens & Adults"
          cards={teensAdultsCards}
          darkTheme={true}
        />
        <Facilities />
        <MeetTheTeam />
        <WhatWeDo />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

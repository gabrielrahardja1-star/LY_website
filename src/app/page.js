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
    image: '/images/services/children/iq-test.png',
    badges: ['Offline', 'Online'],
    description: 'Evaluates the cognitive abilities across various domains for teens and adults',
    includes: '1.5 hours - 2 hours · Report and consultation',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20an%20IQ%20Test%20session',
  },
  {
    title: 'School Readiness Test',
    image: '/images/services/children/school-readiness.png',
    badges: ['Offline', 'Online'],
    description: "Assesses a child's development to determine their readiness to transition from Kindergarten to Primary 1",
    includes: '60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20School%20Readiness%20Test%20session',
  },
  {
    title: 'Play Therapy',
    image: '/images/services/children/play-therapy.png',
    badges: ['Offline', 'Online'],
    description: 'Aims to resolve emotional and behavioural difficulties, and process traumatic experiences through play-based activities',
    includes: '60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Play%20Therapy%20session',
  },
  {
    title: 'Speech Therapy',
    image: '/images/services/children/speech-therapy.png',
    badges: ['Offline', 'Online'],
    description: 'Supports the development of speech, language, and communication skills',
    includes: '60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Speech%20Therapy%20session',
  },
  {
    title: 'Behaviour Therapy',
    image: '/images/services/children/behaviour-therapy.png',
    badges: ['Offline', 'Online'],
    description: 'Focuses on changing unhealthy behaviours and promoting emotional regulation',
    includes: '60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Behaviour%20Therapy%20session',
  },
  {
    title: 'Occupational Therapy',
    image: '/images/services/children/occupational-therapy.png',
    badges: ['Offline', 'Online'],
    description: 'Focuses on building essential skills used for daily activities',
    includes: '60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20an%20Occupational%20Therapy%20session',
  },
  {
    title: 'Sensory Integration Therapy',
    image: '/images/services/children/sensory-integration.png',
    badges: ['Offline', 'Online'],
    description: 'Helps children to better process and regulate environmental stimuli (Touch, sound, light)',
    includes: '60 min/session · Daily and monthly report · Evaluation of treatment plan every 3 months of therapy',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Sensory%20Integration%20Therapy%20session',
  },
  {
    title: 'Learning Disorder Diagnosis',
    image: '/images/services/children/learning-disorder.png',
    badges: ['Offline', 'Online'],
    description: 'Helps children to identify specific cognitive deficits (Reading, writing, or math)',
    includes: '60 min/session · Daily and monthly report · Report based on assessment · Treatment Plan',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Learning%20Disorder%20Diagnosis%20session',
  },
  {
    title: 'Consultation',
    image: '/images/services/children/consultation.jpg',
    badges: ['Offline', 'Online'],
    description: "Identifies the child's initial needs and parent's concerns with a psychologist",
    includes: '60 min/session · Screening + Observation · Report based on assessment · Treatment Plan',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Consultation%20session',
  },
  {
    title: 'Developmental Screening',
    image: '/images/services/children/developmental-screening.png',
    badges: ['Offline'],
    description: "Assesses the child's general abilities and challenges in relation to their developmental stage",
    includes: '60 min/session · Interview with parents · Report based on assessment · Treatment plan',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Developmental%20Screening%20session',
  },
  {
    title: 'Developmental Disorder Diagnosis',
    image: '/images/services/children/developmental-disorder.png',
    badges: ['Offline', 'Online'],
    description: 'Assesses the presence of developmental disorders (Autism, ADHD, and others)',
    includes: '60 min/session · Interview with parents · Report based on assessment · Treatment plan',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Developmental%20Disorder%20Diagnosis%20session',
  },
];

const teensAdultsCards = [
  {
    title: 'IQ Test',
    image: '/images/services/teens/iq-test.png',
    badges: ['Offline', 'Online'],
    description: 'Evaluates the cognitive abilities across various domains for teens and adults',
    includes: '1.5 hours - 2 hours · Report and consultation',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20an%20IQ%20Test%20(Teens%20%26%20Adults)%20session',
  },
  {
    title: 'Mental Health Check Up',
    image: '/images/services/teens/mental-health.png',
    badges: ['Offline', 'Online'],
    description: 'Comprehensive evaluation of your emotional and psychological well-being',
    includes: 'Survey questionnaire · Report and consultation',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Mental%20Health%20Check%20Up%20session',
  },
  {
    title: 'Anxiety Screening',
    image: '/images/services/teens/anxiety.png',
    badges: ['Offline', 'Online'],
    description: 'Identify individuals at risk for anxiety, including the severity of symptoms',
    includes: 'Survey questionnaire · Report and consultation',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20an%20Anxiety%20Screening%20session',
  },
  {
    title: 'ADHD Screening',
    image: '/images/services/teens/adhd.png',
    badges: ['Offline', 'Online'],
    description: 'Identify behaviours of inattention, impulsivity, and hyperactivity',
    includes: 'Survey questionnaire · Report and consultation',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20an%20ADHD%20Screening%20session',
  },
  {
    title: 'Depression Screening',
    image: '/images/services/teens/depression.jpg',
    badges: ['Offline', 'Online'],
    description: 'Identify individuals at risk for depression, including the severity of symptoms',
    includes: 'Survey questionnaire · Report and consultation',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Depression%20Screening%20session',
  },
  {
    title: 'Counselling',
    image: '/images/services/teens/counselling.png',
    badges: ['Offline', 'Online'],
    description: 'Individual counselling conducted by a psychologist',
    includes: '60 min/session',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Counselling%20session',
  },
  {
    title: 'Couple Counselling',
    image: '/images/services/teens/couple-counselling.png',
    badges: ['Offline', 'Online'],
    description: 'Counselling for couples conducted by a psychologist',
    includes: '60 min/session',
    waText: 'Hi%2C%20I%27d%20like%20to%20book%20a%20Couple%20Counselling%20session',
  },
  {
    title: 'Family Counselling',
    image: '/images/services/teens/family-counselling.jpg',
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

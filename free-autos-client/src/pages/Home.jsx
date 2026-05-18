import Hero from '../components/Hero';
import HomeFeatures from '../components/HomeFeatures';

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <HomeFeatures />
    </main>
  );
}
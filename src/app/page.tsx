
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { TechStack } from '@/components/sections/TechStack';
import { Projects } from '@/components/sections/Projects';
import { Architecture } from '@/components/sections/Architecture';
import { Experience } from '@/components/sections/Experience';
import { GitHubActivity } from '@/components/sections/GitHubActivity';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Architecture />
      <Experience />
      <GitHubActivity />
      <Contact />
      <Footer />
    </main>
  );
}

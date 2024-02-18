import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen mt-20 flex-col bg-[#121212]">
      <Navbar></Navbar>
      <div className="container mx-auto py-4 px-12">
      <HeroSection/>
      <AboutSection/>
      </div>
    </main>
  );
}

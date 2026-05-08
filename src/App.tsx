import React, { useRef } from 'react';
import { Hero3D } from './components/Hero3D';
import { Gallery3D } from './components/Gallery3D';
import { motion, useScroll, useTransform } from 'motion/react';
import { Camera, MapPin, Mail, Instagram, ArrowRight } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 lg:px-12 mix-blend-difference">
      <div className="flex items-center space-x-2 text-white">
        <Camera className="w-6 h-6" />
        <span className="font-display font-medium text-lg tracking-wider uppercase">Lens 3D</span>
      </div>
      <div className="hidden md:flex items-center space-x-8 text-white/80 text-sm tracking-widest uppercase font-medium">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
      <button className="md:hidden text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <Hero3D />
      
      <div className="z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter"
        >
          CAPTURE<br />THE <span className="text-white/50 italic font-light">MOMENT</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 text-lg sm:text-xl text-white/60 font-light max-w-lg"
        >
          We blend perspective, light, and dimension to tell your story in a unique way.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40text-sm tracking-widest uppercase"
      >
        <span className="mb-2 text-xs">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-16">
        <div className="lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl lg:text-6xl font-medium tracking-tight mb-8"
          >
            Not just photography.<br />It's world building.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-white/60 text-lg font-light leading-relaxed max-w-xl"
          >
            <p>
              Based in the heart of the creative district, Lens 3D Studio is a collective of visionary photographers, 3D artists, and creative directors.
            </p>
            <p>
              We don't simply capture what's there; we create environments and conceptual realities. Using state-of-the-art camera equipment alongside interactive digital spaces, our work transcends traditional prints.
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="mt-12"
          >
            <a href="#services" className="inline-flex items-center space-x-2 text-sm uppercase tracking-widest font-medium group text-white">
              <span>View our services</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
        
        <div className="lg:w-1/2 w-full">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1 }}
             className="aspect-[4/5] bg-neutral-900 rounded-sm overflow-hidden"
           >
             <img 
               src="https://picsum.photos/seed/studio/800/1000" 
               alt="Studio Setup" 
               className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
             />
           </motion.div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#0a0a0a] text-white py-12">
      <div className="px-6 lg:px-12 mb-12 flex justify-between items-end">
        <h2 className="font-display text-4xl lg:text-5xl font-medium tracking-tight">
          Selected<br/>Works
        </h2>
        <p className="text-white/50 text-sm tracking-widest uppercase hidden md:block">Drag to explore</p>
      </div>
      
      {/* 3D Gallery Container */}
      <div className="w-full h-[60vh] md:h-[75vh] lg:h-[80vh] relative">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <Gallery3D />
      </div>
    </section>
  );
}

const servicesList = [
  {
    title: "Editorial & Fashion",
    description: "High-end conceptual photography for brands, magazines, and designers. We construct elaborate sets to match your vision."
  },
  {
    title: "Product & 3D Interactive",
    description: "Immersive product showcases blending macro photography with interactive 3D web experiences to elevate your commerce."
  },
  {
    title: "Portraiture",
    description: "Intimate and striking personal portraits using dramatic lighting techniques and unique spatial compositions."
  }
];

function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 px-6 lg:px-12 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl lg:text-5xl font-medium tracking-tight mb-20 text-center">
          Our Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {servicesList.map((service, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: idx * 0.2 }}
               className="group border-t border-white/10 pt-8"
             >
               <h3 className="font-display text-2xl font-medium mb-4 group-hover:text-white/80 transition-colors">
                 {service.title}
               </h3>
               <p className="text-white/50 font-light leading-relaxed">
                 {service.description}
               </p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
        <div className="lg:col-span-2">
          <h2 className="font-display text-5xl lg:text-7xl font-bold tracking-tighter mb-6">
            Let's created<br/>something <span className="text-white/40 italic">unreal.</span>
          </h2>
          <a href="mailto:hello@lens3d.studio" className="text-xl font-light hover:text-white/60 transition-colors">
            hello@lens3d.studio
          </a>
        </div>
        
        <div>
          <h4 className="text-sm tracking-widest uppercase font-medium mb-6 text-white/40">Studio</h4>
          <ul className="space-y-4 text-white/80 font-light">
            <li className="flex items-start space-x-3">
               <MapPin className="w-5 h-5 mt-0.5 opacity-50" />
               <span>120 Creative Ave, Suite 3D<br/>Los Angeles, CA 90012</span>
            </li>
            <li className="flex items-center space-x-3">
               <Mail className="w-5 h-5 opacity-50" />
               <span>+1 (310) 555-0199</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm tracking-widest uppercase font-medium mb-6 text-white/40">Socials</h4>
          <ul className="space-y-4 text-white/80 font-light flex flex-col">
            <a href="#" className="flex items-center space-x-3 hover:text-white transition-colors">
              <Instagram className="w-5 h-5 opacity-50" />
              <span>Instagram</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-white transition-colors">
              {/* x/twitter icon */}
              <svg className="w-5 h-5 opacity-50 fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              <span>Twitter</span>
            </a>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-light text-white/30">
        <p>&copy; {new Date().getFullYear()} Lens 3D Studio. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white/60">Privacy Policy</a>
          <a href="#" className="hover:text-white/60">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

'use strict';

import React, { useState, useEffect } from 'react';

export default function App() {
  // Navigation active state tracker for mobile accessibility layouts
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor screen scrolls to dynamically add 3D glass blur layers to navigation header bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Quick action function to manage smooth transitions when navigation links are clicked
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden antialiased selection:bg-orange-500 selection:text-black">
      
      {/* ==================== 1. FIXED GLASSMORPHIC NAVIGATION BAR ==================== */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 p-5 ${
        scrolled 
          ? 'backdrop-blur-2xl bg-black/60 border-b border-white/5 py-4 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={(e) => handleLinkClick(e, 'home')}>
            <span className="font-black text-xl md:text-2xl tracking-tighter uppercase transition-colors">
              FREEDOM <span className="text-orange-500 group-hover:text-orange-400 transition-colors">MUSIQ</span>
            </span>
          </div>

          {/* Desktop Links View Layout */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-orange-500 transition-colors">Biography</a>
            <a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')} className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-orange-500 transition-colors">Career Timeline</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-orange-400 transition-colors">Expertise</a>
            <a href="#music" onClick={(e) => handleLinkClick(e, 'music')} className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-orange-400 transition-colors">Spotlight Release</a>
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, 'contact')} 
              className="bg-orange-500 text-black px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              Secure Booking
            </a>
          </div>

          {/* Mobile Hamburger Layout Action Trigger Toggle button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
            aria-label="Toggle navigation drawer menu layouts"
          >
            <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Dropdown Drawer overlay Panel */}
        <div className={`fixed inset-0 min-h-screen w-full bg-black/95 backdrop-blur-2xl transition-all duration-500 z-40 md:hidden flex flex-col items-center justify-center p-6 space-y-8 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-lg font-black tracking-widest uppercase text-gray-300 hover:text-orange-500 transition-colors">Biography</a>
          <a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')} className="text-lg font-black tracking-widest uppercase text-gray-300 hover:text-orange-500 transition-colors">Career Timeline</a>
          <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="text-lg font-black tracking-widest uppercase text-gray-300 hover:text-orange-400 transition-colors">Expertise</a>
          <a href="#music" onClick={(e) => handleLinkClick(e, 'music')} className="text-lg font-black tracking-widest uppercase text-gray-300 hover:text-orange-400 transition-colors">Spotlight Release</a>
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, 'contact')} 
            className="bg-orange-500 text-black px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-orange-600 transition-all text-center w-full max-w-xs shadow-xl shadow-orange-500/20"
          >
            Secure Booking
          </a>
        </div>
      </nav>

      {/* ==================== 2. IMMERSIVE HERO HUB COMPONENT ==================== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-24"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5,5,5,0.7), rgba(5,5,5,0.98)), url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[#050505]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-12 gap-12 items-center py-12">
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
              <p className="uppercase tracking-[0.25em] text-orange-400 text-[10px] font-black">
                South African Artist • Actor • Motivational Speaker
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
              Freedom <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600">MusiQ</span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl font-medium">
              Bringing profound authenticity and emotional depth to screen, stage, and community space. 
              A dynamic creative force blending rich musical composition with impactful storytelling.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="px-8 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-black font-black tracking-wide text-sm shadow-2xl shadow-orange-500/20 block text-center transition-all hover:-translate-y-1 active:translate-y-0">
                Contact &amp; Bookings
              </a>

              <a href="#music" onClick={(e) => handleLinkClick(e, 'music')} className="px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/5 text-white font-bold text-sm block text-center transition-all hover:border-white/20">
                View Feature Project
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm md:max-w-md w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 aspect-[4/5] w-full">
                <img
                  src="31a22e3d-9c47-4ae6-9b4e-b09f5a73426b.png"
                  alt="Freedom MusiQ Portrait"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-102"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
              </div>

              <div className="absolute -bottom-5 -right-3 bg-zinc-900/90 backdrop-blur-xl border border-white/10 text-white px-6 py-4 rounded-2xl shadow-2xl max-w-xs">
                <p className="text-[9px] uppercase tracking-widest font-black text-orange-500 mb-1">
                  Spotlight Track
                </p>
                <h3 className="text-lg font-black tracking-tight uppercase line-clamp-1">Enhlizweni</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. OFFICIAL DETAILED BIOGRAPHY ==================== */}
      <section id="about" className="py-32 px-6 bg-[#090909] border-t border-white/5 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest">Artist Profile &amp; Legacy</p>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-none">
                Simphiwe Freedom <br/><span className="text-orange-500">Maphumulo</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed text-base md:text-lg font-medium">
              <p>
                Simphiwe Freedom Maphumulo, widely known in the entertainment landscape as <span className="text-white font-bold">Freedom MusiQ</span>, 
                is a multifaceted South African artist whose creative talents encompass acting, singing, vocal coaching, songwriting, and motivational speaking. 
                Born on January 1, 1992, in Ntuzuma, KwaZulu-Natal, Freedom discovered a profound passion for performance arts early in life.
              </p>

              <p>
                He structured and refined his performance technique at the prestigious <span className="text-white font-bold">Ekhaya Multi Art Centre</span>, 
                successfully completing intensive Performing Arts qualification tracks in 2015. Through his rich voice and compelling stage presence, he brings a layered realism and emotional truth to every setting.
              </p>

              <p>
                Beyond the stage and screen, Freedom is the visionary founder behind <span className="text-orange-400 font-semibold">“It’s in the Music”</span>, a nationwide project that brings creative arts development and motivational speaking keynotes directly to school assemblies. Through this project, he inspires young minds to embrace discipline, build focus, and commit to their dreams.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-white/5 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-sm group hover:border-orange-500/20 transition-all duration-300">
                <h3 className="text-4xl font-black text-orange-500 mb-2 tracking-tight">10+</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold leading-tight">
                  Years Crafting The Art
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-sm group hover:border-orange-500/20 transition-all duration-300">
                <h3 className="text-4xl font-black text-orange-500 mb-2 tracking-tight">3</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold leading-tight">
                  Creative Industry Fields
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-sm group hover:border-orange-500/20 transition-all duration-300">
                <h3 className="text-4xl font-black text-orange-500 mb-2 tracking-tight">KZN</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold leading-tight">
                  Ntuzuma Native Origin
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-sm group hover:border-orange-500/20 transition-all duration-300">
                <h3 className="text-4xl font-black text-orange-500 mb-2 tracking-tight">100%</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold leading-tight">
                  Independent Vision
                </p>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
              <p className="text-xs font-semibold text-gray-300">
                “Guided by a core foundation of adaptability, creativity, and leadership keys.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. SCREEN & MUSIC CAREER TIMELINE ==================== */}
      <section id="experience" className="py-32 px-6 bg-[#050505] border-t border-white/5 scroll-mt-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-20">
            <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-1">Production Track Record</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Career History Timeline</h2>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
            
            {/* Timeline Row 1 */}
            <div className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-orange-500 group-hover:bg-orange-500 transition-colors duration-300"></div>
              <div className="absolute hidden md:block -left-36 top-1 text-right w-24">
                <span className="text-xs font-mono font-black text-orange-400 bg-orange-500/10 px-2 py-1 rounded">2023 - 2025</span>
              </div>
              <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all">
                <span className="inline-block md:hidden text-[10px] font-mono text-orange-400 font-bold mb-1">2023 - 2025</span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Umkhokha: The Curse</h3>
                <p className="text-xs text-orange-400 font-bold uppercase tracking-wider mt-0.5">Rhythm World Production</p>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                  Featured as a prominent Actor and Singer inside the hit national television drama series, delivering rich vocal depth and authentic performance textures.
                </p>
              </div>
            </div>

            {/* Timeline Row 2 */}
            <div className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-orange-500 group-hover:bg-orange-500 transition-colors duration-300"></div>
              <div className="absolute hidden md:block -left-36 top-1 text-right w-24">
                <span className="text-xs font-mono font-black text-orange-400 bg-orange-500/10 px-2 py-1 rounded">2022</span>
              </div>
              <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all">
                <span className="inline-block md:hidden text-[10px] font-mono text-orange-400 font-bold mb-1">2022</span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Uzalo Prison Arc (Season 8)</h3>
                <p className="text-xs text-orange-400 font-bold uppercase tracking-wider mt-0.5">Stained Glass Production</p>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                  Collaborated within the complex prison choir redemption story arc as an Actor and Singer, anchoring cinematic scenes with traditional choral integrity.
                </p>
              </div>
            </div>

            {/* Timeline Row 3 */}
            <div className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-white/10 group-hover:border-orange-500 transition-colors duration-300"></div>
              <div className="absolute hidden md:block -left-36 top-1 text-right w-24">
                <span className="text-xs font-mono font-black text-gray-400 bg-white/5 px-2 py-1 rounded">Affiliation</span>
              </div>
              <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all">
                <span className="inline-block md:hidden text-[10px] font-mono text-gray-400 font-bold mb-1">Choir Collaboration</span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">The Amajudiya Choir</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-0.5">Cultural Choral Collective</p>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                  Active involvement creating musical arrangements that bridge cultural expressions and expand emotional connectivity across diverse audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. EXPERTISE & CORE PILLARS ==================== */}
      <section id="services" className="py-32 px-6 bg-[#090909] border-t border-white/5 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-xl mx-auto mb-20">
            <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-1">Professional Dimensions</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">What Freedom MusiQ Does</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#050505] border border-white/5 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-500 shadow-xl group">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl mb-6 group-hover:bg-orange-500 group-hover:text-black transition-all duration-500">🎤</div>
              <h3 className="text-xl font-black mb-3 text-white tracking-tight uppercase">Music &amp; Composition</h3>
              <p className="text-gray-400 leading-relaxed text-sm font-medium">
                Live performance delivery, studio production vocal arrangement, professional songwriting, and vocal coaching. Specializing in deeply resonant structural melodies.
              </p>
            </div>

            <div className="bg-[#050505] border border-white/5 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-500 shadow-xl group">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl mb-6 group-hover:bg-orange-500 group-hover:text-black transition-all duration-500">🎬</div>
              <h3 className="text-xl font-black mb-3 text-white tracking-tight uppercase">Dramatic Acting</h3>
              <p className="text-gray-400 leading-relaxed text-sm font-medium">
                Professional screen character execution, casting calls, and performance delivery across television network scripts, films, and live theater runs.
              </p>
            </div>

            <div className="bg-[#050505] border border-white/5 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-500 shadow-xl group">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl mb-6 group-hover:bg-orange-500 group-hover:text-black transition-all duration-500">🧠</div>
              <h3 className="text-xl font-black mb-3 text-white tracking-tight uppercase">Youth Motivation</h3>
              <p className="text-gray-400 leading-relaxed text-sm font-medium">
                Visionary leader behind the impactful school program network <span className="text-white font-semibold">"It's in the Music"</span>, fostering discipline, focus, and mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. SPOTLIGHT RELEASE HUB ==================== */}
      <section id="music" className="py-32 px-6 bg-[#050505] border-t border-white/5 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-xl mx-auto mb-20">
            <p className="uppercase tracking-[0.3em] text-orange-500 text-xs font-black mb-2">
              Featured Track Center
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">ENHLIZWENI</h2>
            <p className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed font-medium">
              A profound creative piece navigating themes of unconditional love, internal self-healing, and structural resilience of the human heart.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all duration-700"></div>
                <img
                  src="31a22e3d-9c47-4ae6-9b4e-b09f5a73426b.png"
                  alt="Enhlizweni Track Art Cover"
                  className="rounded-3xl shadow-2xl border border-white/5 relative w-full object-cover aspect-square transition-all duration-700"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="bg-zinc-900/30 border border-white/5 p-8 rounded-3xl backdrop-blur-md space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Official Collaboration</span>
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight uppercase">
                  Freedom MusiQ x Gabriel Youngstar
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base font-medium">
                  A high-impact single highlighting a rich layer of traditional South African narrative art, emotional vocal performance engineering, and deep cinematic composition structures.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="px-3 py-3 rounded-xl bg-zinc-900 border border-white/5 text-white font-bold text-center text-xs hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all uppercase tracking-wider">
                  Spotify
                </a>
                <a href="https://apple.com/music" target="_blank" rel="noopener noreferrer" className="px-3 py-3 rounded-xl bg-zinc-900 border border-white/5 text-white font-bold text-center text-xs hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all uppercase tracking-wider">
                  Apple Music
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="px-3 py-3 rounded-xl bg-zinc-900 border border-white/5 text-white font-bold text-center text-xs hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all uppercase tracking-wider">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. SECURE CONTACT & BOOKINGS PANEL ==================== */}
      <section id="contact" className="py-32 px-6 bg-[#090909] border-t border-white/5 scroll-mt-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-2">
            <p className="uppercase tracking-[0.4em] text-orange-500 text-[10px] font-black">
              Direct Media &amp; Promoter Channels
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
              Let’s Inspire Together
            </h2>
          </div>

          <p className="text-gray-400 max-w-md mx-auto text-sm font-medium leading-relaxed">
            Reach out directly to arrange dates for corporate engagements, television/cinematic casting schedules, musical sets, or motivational schools programs.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-6 text-left">
            <a 
              href="tel:+27822141434" 
              className="bg-[#050505] hover:bg-black rounded-2xl p-6 border border-white/5 hover:border-orange-500/30 shadow-2xl transition-all duration-300 block group hover:-translate-y-1"
            >
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-2 group-hover:text-orange-500 transition-colors">Voice / Cellular Line</h3>
              <p className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-orange-400 transition-colors">082 214 1434</p>
              <span className="text-[10px] text-gray-500 font-medium block mt-2">Available for urgent programmatic casting dials →</span>
            </a>

            <a 
              href="mailto:freedommusic4@gmail.com" 
              className="bg-[#050505] hover:bg-black rounded-2xl p-6 border border-white/5 hover:border-orange-500/30 shadow-2xl transition-all duration-300 block group hover:-translate-y-1"
            >
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-2 group-hover:text-orange-500 transition-colors">Direct Electronic Dispatch</h3>
              <p className="text-base md:text-lg font-black tracking-tight text-white break-all group-hover:text-orange-400 transition-colors">freedommusic4@gmail.com</p>
              <span className="text-[10px] text-gray-500 font-medium block mt-2">Monitored for corporate bookings and riders →</span>
            </a>
          </div>

          <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] font-mono tracking-widest uppercase text-gray-600 font-black gap-4">
            <div>© 2026 Freedom MusiQ • Standalone Creative Identity Hub • All Rights Reserved</div>
            <div>Built by Niipseedadust</div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use strict';

import React, { useState, useEffect } from 'react';

export default function App() {
  // UI States for interaction layers
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scrolling to append glassmorphism aesthetics dynamically
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth local anchor scroll function
  const handleAnchorScroll = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const destination = document.getElementById(targetId);
    if (destination) {
      destination.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060606] text-white font-sans overflow-x-hidden antialiased selection:bg-orange-500 selection:text-black">
      
      {/* ==================== 1. NAVIGATION BAR ==================== */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 p-5 ${
        scrolled 
          ? 'backdrop-blur-2xl bg-black/75 border-b border-white/5 py-4 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={(e) => handleAnchorScroll(e, 'hero')}>
            <span className="font-black text-xl md:text-2xl tracking-tighter uppercase">
              FREEDOM <span className="text-orange-500 group-hover:text-orange-400 transition-colors">MUSIQ</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" onClick={(e) => handleAnchorScroll(e, 'about')} className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-orange-500 transition-colors">Bio</a>
            <a href="#timeline" onClick={(e) => handleAnchorScroll(e, 'timeline')} className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-orange-500 transition-colors">History</a>
            <a href="#pillars" onClick={(e) => handleAnchorScroll(e, 'pillars')} className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-orange-500 transition-colors">Expertise</a>
            <a href="#project" onClick={(e) => handleAnchorScroll(e, 'project')} className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-orange-500 transition-colors">Spotlight</a>
            <a 
              href="#booking" 
              onClick={(e) => handleAnchorScroll(e, 'booking')} 
              className="bg-orange-500 text-black px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              Inquiries
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
            aria-label="Toggle Navigation Menu"
          >
            <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        <div className={`fixed inset-0 min-h-screen w-full bg-black/98 backdrop-blur-3xl transition-all duration-500 z-40 md:hidden flex flex-col items-center justify-center p-6 space-y-8 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          <a href="#about" onClick={(e) => handleAnchorScroll(e, 'about')} className="text-xl font-black tracking-widest uppercase text-gray-300 hover:text-orange-500">Bio</a>
          <a href="#timeline" onClick={(e) => handleAnchorScroll(e, 'timeline')} className="text-xl font-black tracking-widest uppercase text-gray-300 hover:text-orange-500">History</a>
          <a href="#pillars" onClick={(e) => handleAnchorScroll(e, 'pillars')} className="text-xl font-black tracking-widest uppercase text-gray-300 hover:text-orange-500">Expertise</a>
          <a href="#project" onClick={(e) => handleAnchorScroll(e, 'project')} className="text-xl font-black tracking-widest uppercase text-gray-300 hover:text-orange-500">Spotlight</a>
          <a 
            href="#booking" 
            onClick={(e) => handleAnchorScroll(e, 'booking')} 
            className="bg-orange-500 text-black px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-orange-600 transition-all text-center w-full max-w-xs shadow-xl"
          >
            Inquiries
          </a>
        </div>
      </nav>

      {/* ==================== 2. HERO SHOWCASE ==================== */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-24"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(6,6,6,0.65), rgba(6,6,6,0.98)), url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#060606]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-12 gap-12 items-center py-12">
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
              <p className="uppercase tracking-[0.25em] text-orange-400 text-[10px] font-black">
                Actor • Singer • Vocal Coach • Songwriter
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
              Freedom <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600">MusiQ</span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl font-medium">
              Bringing striking authenticity and profound emotional depth to national screen scripts, traditional vocal choir configurations, and youth mentoring circuits.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#booking" onClick={(e) => handleAnchorScroll(e, 'booking')} className="px-8 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-black font-black tracking-wide text-sm shadow-2xl shadow-orange-500/20 block text-center transition-all hover:-translate-y-1 active:translate-y-0">
                Bookings & Dials
              </a>
              <a href="#project" onClick={(e) => handleAnchorScroll(e, 'project')} className="px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/5 text-white font-bold text-sm block text-center transition-all hover:border-white/20">
                Latest Release
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 aspect-square w-full">
                <img
                  src="31a22e3d-9c47-4ae6-9b4e-b09f5a73426b.png"
                  alt="Freedom MusiQ Master Portrait"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-5 -right-3 bg-zinc-900/95 backdrop-blur-xl border border-white/10 text-white px-6 py-4 rounded-2xl shadow-2xl max-w-xs">
                <p className="text-[9px] uppercase tracking-widest font-black text-orange-500 mb-1">Featured Title</p>
                <h3 className="text-lg font-black tracking-tight uppercase line-clamp-1">Enhlizweni</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. BIOGRAPHY HUB ==================== */}
      <section id="about" className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest">The Profile Profile</p>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-none">
                Simphiwe Freedom <br/><span className="text-orange-500">Maphumulo</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed text-base md:text-lg font-medium">
              <p>
                Simphiwe Freedom Maphumulo, widely recognized under his artistic moniker <span className="text-white font-bold">Freedom MusiQ</span>, is a seasoned Durban-born actor, singer, vocal coach, and composer. Rooted natively in Ntuzuma, KwaZulu-Natal, his perspective on multi-art performance execution began early.
              </p>
              <p>
                He structured his craft professionally at the <span className="text-white font-semibold">Ekhaya Multi-Art Centre</span>, completing his comprehensive Performing Arts specialization curriculum across the 2015 layout track. His footprint includes creating narrative texture on premier South African broadcasting networks and collaborating with cultural choir standard installations.
              </p>
              <p>
                Driven by a mandate of high-grade discipline and structural focus, Freedom is also the architect behind the schools seminar rollout <span className="text-orange-400 font-semibold">“It’s in the Music”</span>—using performance installation methods to inspire and pivot younger minds across the region toward clear life visions.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-white/5 rounded-3xl p-8 shadow-2xl space-y-6">
            <h3 className="text-xs font-black tracking-widest uppercase text-gray-400 border-b border-white/5 pb-2">Core Competencies</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="text-xl">🎬</span>
                <h4 className="text-white font-black uppercase text-xs mt-2">Directing</h4>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="text-xl">🎼</span>
                <h4 className="text-white font-black uppercase text-xs mt-2">Composing</h4>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="text-xl">🗣️</span>
                <h4 className="text-white font-black uppercase text-xs mt-2">Vocal Coaching</h4>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="text-xl">🚗</span>
                <h4 className="text-white font-black uppercase text-xs mt-2">Driving Code</h4>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-orange-500/5 border border-orange-500/10 flex flex-col justify-center">
              <p className="text-[10px] uppercase font-mono font-black text-orange-400">Native Residence Info</p>
              <p className="text-sm text-gray-300 font-semibold mt-1">269 Mnyamathi Road, Ntuzuma Township, 4359</p>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== 4. PROFESSIONAL PRODUCTION TIMELINE ==================== */}
      <section id="timeline" className="py-32 px-6 bg-[#060606] border-t border-white/5 scroll-mt-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-20">
            <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-1">Validated Screen & Choral History</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Experience Records</h2>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
            
            {/* Timeline Segment 1 */}
            <div className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#060606] border-2 border-orange-500 group-hover:bg-orange-500 transition-colors duration-300"></div>
              <div className="absolute hidden md:block -left-36 top-1 text-right w-24">
                <span className="text-xs font-mono font-black text-orange-400 bg-orange-500/10 px-2 py-1 rounded">2023 - 2025</span>
              </div>
              <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all">
                <span className="inline-block md:hidden text-[10px] font-mono text-orange-400 font-bold mb-1">Jan 2023 - Dec 2025</span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Umkhokha: The Curse</h3>
                <p className="text-xs text-orange-400 font-bold uppercase tracking-wider mt-0.5">Rhythm World Production</p>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                  Engaged across multi-season schedules as a featured Actor and Studio Singer, weaving rich acoustic texture and heavy presence into the programmatic structure.
                </p>
              </div>
            </div>

            {/* Timeline Segment 2 */}
            <div className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#060606] border-2 border-orange-500 group-hover:bg-orange-500 transition-colors duration-300"></div>
              <div className="absolute hidden md:block -left-36 top-1 text-right w-24">
                <span className="text-xs font-mono font-black text-orange-400 bg-orange-500/10 px-2 py-1 rounded">2022</span>
              </div>
              <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all">
                <span className="inline-block md:hidden text-[10px] font-mono text-orange-400 font-bold mb-1">Mar 2022 - Aug 2022</span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Uzalo (Season 8 Prison Arc)</h3>
                <p className="text-xs text-orange-400 font-bold uppercase tracking-wider mt-0.5">Stained Glass Production</p>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                  Executed intensive roles inside the designated prison choir redemption timeline layout, delivering raw vocal setups and distinct narrative realism.
                </p>
              </div>
            </div>

            {/* Timeline Segment 3 */}
            <div className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#060606] border-2 border-white/10 group-hover:border-orange-500 transition-colors duration-300"></div>
              <div className="absolute hidden md:block -left-36 top-1 text-right w-24">
                <span className="text-xs font-mono font-black text-gray-500 bg-white/5 px-2 py-1 rounded">Training</span>
              </div>
              <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all">
                <span className="inline-block md:hidden text-[10px] font-mono text-gray-400 font-bold mb-1">Jan 2015 - Dec 2015</span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Performing Arts Qualification</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-0.5">Ekhaya Multi-Art Centre</p>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                  Completed structural academic performance methods, covering foundational execution lines across casting directions, choral breath handling, and script work.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 5. EXPERTISE PILLARS ==================== */}
      <section id="pillars" className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-xl mx-auto mb-20">
            <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-1">Creative Verticals</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Core Architecture</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#060606] border border-white/5 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-500 shadow-xl group">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl mb-6 group-hover:bg-orange-500 group-hover:text-black transition-all duration-500">🎵</div>
              <h3 className="text-xl font-black mb-3 text-white tracking-tight uppercase">Vocal & Composition</h3>
              <p className="text-gray-400 leading-relaxed text-sm font-medium">
                Deep studio arrangement setups, professional vocal alignment, songwriting, and specialized choir alignment. Also includes tracking arrangements with the Amajudiya Choir network.
              </p>
            </div>

            <div className="bg-[#060606] border border-white/5 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-500 shadow-xl group">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl mb-6 group-hover:bg-orange-500 group-hover:text-black transition-all duration-500">🎭</div>
              <h3 className="text-xl font-black mb-3 text-white tracking-tight uppercase">Cinematic Acting</h3>
              <p className="text-gray-400 leading-relaxed text-sm font-medium">
                High-end dramatic interpretation, script reads, set-ready execution, and casting directional oversight suited for modern national television ecosystems and film blocks.
              </p>
            </div>

            <div className="bg-[#060606] border border-white/5 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-500 shadow-xl group">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl mb-6 group-hover:bg-orange-500 group-hover:text-black transition-all duration-500">🎓</div>
              <h3 className="text-xl font-black mb-3 text-white tracking-tight uppercase">Youth Development</h3>
              <p className="text-gray-400 leading-relaxed text-sm font-medium">
                Mentoring structures powered by <span className="text-white font-semibold">"It's in the Music"</span>. Bringing high-grade motivational addresses to academic environments across the province to build focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. SPOTLIGHT SINGLE HUB ==================== */}
      <section id="project" className="py-32 px-6 bg-[#060606] border-t border-white/5 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-xl mx-auto mb-20">
            <p className="uppercase tracking-[0.3em] text-orange-500 text-xs font-black mb-2">Project Media Spotlight</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">ENHLIZWENI</h2>
            <p className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed font-medium">
              An evocative release layout parsing themes of emotional transparency, inner recovery loops, and the resilience of human devotion.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-20 group-hover:opacity-35 transition-all duration-700"></div>
                <img
                  src="31a22e3d-9c47-4ae6-9b4e-b09f5a73426b.png"
                  alt="Enhlizweni Official Release Cover Layout"
                  className="rounded-3xl shadow-2xl border border-white/5 relative w-full object-cover aspect-square"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="bg-zinc-900/30 border border-white/5 p-8 rounded-3xl backdrop-blur-md space-y-4">
                <span className="text-[10px] font-mono bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Production Catalog Install</span>
                <h3 className="text-2xl font-black text-white tracking-tight uppercase">Freedom MusiQ x Gabriel Youngstar</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base font-medium">
                  A high-impact independent release that pairs traditional South African vocal layers with modern studio engineering principles.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 font-mono">
                <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="px-3 py-3 rounded-xl bg-zinc-900 border border-white/5 text-white font-bold text-center text-[10px] hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all uppercase tracking-wider">Spotify</a>
                <a href="https://apple.com/music" target="_blank" rel="noopener noreferrer" className="px-3 py-3 rounded-xl bg-zinc-900 border border-white/5 text-white font-bold text-center text-[10px] hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all uppercase tracking-wider">Apple</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="px-3 py-3 rounded-xl bg-zinc-900 border border-white/5 text-white font-bold text-center text-[10px] hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all uppercase tracking-wider">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. CONTACT & INQUIRIES PANEL ==================== */}
      <section id="booking" className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5 scroll-mt-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-2">
            <p className="uppercase tracking-[0.4em] text-orange-500 text-[10px] font-black">Direct Representative Communications</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Secure Your Dates</h2>
          </div>

          <p className="text-gray-400 max-w-md mx-auto text-sm font-medium leading-relaxed">
            Reach out directly for corporate events, casting sessions, music arrangements, vocal tracking, or high school motivational assemblies.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-4 text-left">
            <a 
              href="tel:+27822141434" 
              className="bg-[#060606] rounded-2xl p-6 border border-white/5 hover:border-orange-500/30 transition-all duration-300 block group hover:-translate-y-1"
            >
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-2 group-hover:text-orange-500 transition-colors">Direct Voice Routing</h3>
              <p className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-orange-400 transition-colors">082 214 1434</p>
              <span className="text-[10px] text-gray-500 font-medium block mt-2">Available for urgent casting updates →</span>
            </a>

            <a 
              href="mailto:freedommusic4@gmail.com" 
              className="bg-[#060606] rounded-2xl p-6 border border-white/5 hover:border-orange-500/30 transition-all duration-300 block group hover:-translate-y-1"
            >
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-2 group-hover:text-orange-500 transition-colors">Secure Email Inbox</h3>
              <p className="text-base md:text-lg font-black tracking-tight text-white break-all group-hover:text-orange-400 transition-colors">freedommusic4@gmail.com</p>
              <span className="text-[10px] text-gray-500 font-medium block mt-2">Monitored for scheduling and bookings →</span>
            </a>
          </div>

          {/* Social Handle Badge Routing */}
          <div className="flex justify-center pt-4">
            <a 
              href="https://instagram.com/freedom_musiq031" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all text-xs font-mono font-bold text-gray-300 hover:text-white"
            >
              <span>📸</span> @freedom_musiq031
            </a>
          </div>

          {/* Footer Metadata */}
          <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] font-mono tracking-widest uppercase text-gray-600 font-black gap-4">
            <div>© 2026 Freedom MusiQ • Standalone Artist Identity Hub • All Rights Reserved</div>
            <div>Built by Soul Dust Records</div>
          </div>
        </div>
      </section>
    </div>
  );
}

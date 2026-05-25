import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Settings, ShieldCheck, Puzzle, Lightbulb, Search, Facebook, Twitter, Youtube, CheckCircle } from 'lucide-react';
import { usePassages } from '../context/PassagesContext';
import { cn } from '../lib/utils';

const slides = [
  {
    title: "Explore the Platform",
    step: "STEP 1",
    desc: "Visit the website and get familiar with how it works. Read the instructions to understand each section and how the tools support your learning.",
    image: "/step1-bg.jpeg"
  },
  {
    title: "Try the Features",
    step: "STEP 2",
    desc: "Explore the Features section and test the tools in demo mode. Experience how each feature works before starting real practice.",
    image: "/step2-bg.jpeg"
  },
  {
    title: "Start Practicing",
    step: "STEP 3",
    desc: "Go to the Practice section and train with IELTS reading passages across various topics, enhanced by smart tools to improve your performance.",
    image: "/step3-bg.jpeg"
  }
];

const features = [
  {
    title: 'Word-Limit Guardian',
    description: 'Track your word limit in real time and avoid costly mistakes.',
    icon: ShieldCheck,
    color: 'text-emerald-500 bg-emerald-500/10',
    image: '/feature-wlm.jpeg'
  },
  {
    title: 'Grammar-Gap Predictor',
    description: 'Predict the correct word type before reading to boost accuracy.',
    icon: Puzzle,
    color: 'text-indigo-500 bg-indigo-500/10',
    image: '/feature-gg.jpeg'
  },
  {
    title: 'Synonym Review',
    description: 'Connect keywords with synonyms to improve comprehension.',
    icon: Search,
    color: 'text-amber-500 bg-amber-500/10',
    image: '/feature-syn.jpeg'
  },
  {
    title: 'The Distractor Spotlight',
    description: 'Identify and understand traps to choose the right answers.',
    icon: Lightbulb,
    color: 'text-rose-500 bg-rose-500/10',
    image: '/feature-dis.jpeg'
  }
];

export default function Dashboard() {
  const { passages } = usePassages();
  const navigate = useNavigate();
  const firstPassageId = passages.length > 0 ? passages[0].id : null;

  // --- Slider Logic ---
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleStartPracticing = () => {
    if (firstPassageId) {
      navigate(`/practice/${firstPassageId}`);
    } else {
      alert("No practice tests available yet. Please create one in Admin area.");
    }
  };

  const handleAdminClick = () => {
    const pwd = window.prompt("Security Check:\nPlease enter the admin password:");
    if (pwd === "admin123") {
      navigate('/admin');
    } else if (pwd !== null) {
      alert("Incorrect password!");
    }
  };

  // --- Horizontal Scroll Logic ---
  const scrollParentRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollParentRef.current || !scrollContainerRef.current) return;
      
      const scrollTop = window.scrollY;
      const rect = scrollParentRef.current.getBoundingClientRect();
      const elementTop = scrollTop + rect.top;
      
      const parentHeight = scrollParentRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      const startScroll = elementTop;
      const endScroll = elementTop + parentHeight - viewportHeight;
      
      if (scrollTop >= startScroll && scrollTop <= endScroll) {
        let percentage = ((scrollTop - startScroll) / (endScroll - startScroll)) * 100;
        percentage = Math.max(0, Math.min(percentage, 100));
        
        // Calculate max translation based on container width
        const totalWidth = scrollContainerRef.current.scrollWidth;
        const maxTranslate = totalWidth - window.innerWidth + window.innerWidth * 0.2; // Extra padding
        
        setTranslateX(-(maxTranslate * (percentage / 100)));
      } else if (scrollTop < startScroll) {
        setTranslateX(0);
      } else if (scrollTop > endScroll) {
        // Ensure it stops at max scroll
        const totalWidth = scrollContainerRef.current.scrollWidth;
        const maxTranslate = totalWidth - window.innerWidth + window.innerWidth * 0.2;
        setTranslateX(-maxTranslate);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-[70px] bg-white/95 backdrop-blur-md shadow-sm z-50 flex items-center px-6 md:px-10">
        <div className="flex-1">
          <Link to="/" className="text-2xl font-black text-[#007cba] tracking-tighter" style={{ fontFamily: '"Ibarra Real Nova", serif' }}>
            ReadNFill
          </Link>
        </div>
        
        <nav className="flex items-center justify-center gap-8 md:gap-12">
          <Link to="/" className="text-sm font-bold text-[#007cba] tracking-wide hover:text-[#005a87] transition-colors uppercase">
            Home
          </Link>
          <Link to="/features" className="text-sm font-bold text-slate-600 tracking-wide hover:text-[#007cba] transition-colors uppercase">
            Feature
          </Link>
          <Link to="/practice" className="text-sm font-bold text-slate-600 tracking-wide hover:text-[#007cba] transition-colors uppercase">
            Practice
          </Link>
        </nav>

        <div className="flex-1 flex justify-end">
          <button 
            onClick={handleAdminClick}
            className="flex items-center gap-2 px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-full transition-all"
          >
            <Settings className="w-4 h-4" />
            <span className="hidden sm:inline">Admin</span>
          </button>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white mt-12 animate-fade-in flex flex-col items-center">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tight mb-8" style={{ fontFamily: '"Ibarra Real Nova", serif' }}>
            ReadNFill
          </h1>
          <button 
            onClick={handleStartPracticing}
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-all text-sm md:text-lg uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95"
          >
            Welcome to our website
          </button>
        </div>
      </section>

      {/* 2. Interactive Slider Section */}
      <section className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-black flex items-center">
        {/* Background images crossfade */}
        {slides.map((slide, index) => (
          <img 
            key={index}
            src={slide.image} 
            className={cn(
              "absolute inset-0 w-full h-full object-cover blur-lg transition-all duration-1000 ease-in-out",
              currentSlide === index ? "opacity-30 scale-110" : "opacity-0 scale-100"
            )}
            alt=""
          />
        ))}
        
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          
          {/* Left Text Block */}
          <div className="flex-1 text-white flex flex-col items-start gap-8 w-full">
            <div className="text-4xl md:text-6xl font-bold font-serif overflow-hidden h-20 relative w-full">
               {slides.map((slide, index) => (
                 <div 
                   key={index} 
                   className={cn(
                     "absolute w-full transition-transform duration-700 ease-out",
                     currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                   )}
                 >
                   {slide.title}
                 </div>
               ))}
            </div>
            
            <div className="flex items-center gap-4">
               {slides.map((_, idx) => (
                 <button 
                   key={idx}
                   onClick={() => setCurrentSlide(idx)}
                   className={cn(
                     "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 font-bold",
                     currentSlide === idx ? "border-white bg-white text-black scale-110" : "border-white/40 text-white/60 hover:border-white hover:text-white"
                   )}
                 >
                   {idx + 1}
                 </button>
               ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="flex-1 w-full max-w-lg bg-white/10 backdrop-blur-xl rounded-[2rem] p-8 border border-white/20 text-white shadow-2xl">
            <div className="relative h-48 md:h-64 overflow-hidden rounded-2xl mb-8">
              {slides.map((slide, index) => (
                <img 
                  key={index}
                  src={slide.image} 
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-transform duration-1000",
                    currentSlide === index ? "opacity-100 scale-100" : "opacity-0 scale-110"
                  )}
                  alt=""
                />
              ))}
            </div>
            <div className="relative min-h-[140px]">
               {slides.map((slide, index) => (
                 <div 
                   key={index} 
                   className={cn(
                     "absolute inset-0 transition-all duration-500",
                     currentSlide === index ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none translate-x-8"
                   )}
                 >
                   <h3 className="text-2xl font-bold mb-3 text-white tracking-wide">{slide.step}</h3>
                   <p className="text-slate-200 leading-relaxed text-base md:text-lg">
                     {slide.desc}
                   </p>
                 </div>
               ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* 3. Horizontal Scroll Section */}
      <section ref={scrollParentRef} className="h-[400vh] relative bg-[#0f172a]">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-inner">
          <div 
            ref={scrollContainerRef}
            className="flex gap-12 md:gap-24 px-[10vw] items-center transition-transform duration-[50ms] ease-linear will-change-transform"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {/* Intro Panel */}
            <div className="w-[85vw] md:w-[45vw] flex-shrink-0 flex flex-col justify-center gap-8 pl-4 md:pl-0">
               <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">Our Core Feature</h2>
               <p className="text-2xl md:text-4xl font-light text-slate-300 leading-snug">Everything you need to master Reading test faster and smarter.</p>
            </div>

            {/* Feature Panels */}
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx} 
                  className="w-[85vw] md:w-[35vw] aspect-[4/3] flex-shrink-0 rounded-[2.5rem] bg-slate-900 border border-slate-700/50 p-10 flex flex-col justify-between relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 shadow-2xl"
                >
                  {/* Image Background */}
                  <img 
                    src={feature.image} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700 ease-out" 
                  />
                  {/* Dark Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 transition-opacity group-hover:opacity-80"></div>
                  
                  <div className="absolute top-8 right-8 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs uppercase tracking-widest font-bold border border-white/20 text-white z-10">
                    Practice
                  </div>
                  
                  <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center mb-6 relative z-10 backdrop-blur-md border border-white/10", feature.color)}>
                    <Icon className="w-10 h-10" />
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-md">{feature.title}</h3>
                    <p className="text-lg md:text-xl text-slate-200 leading-relaxed drop-shadow">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-8">
          <h2 className="text-2xl font-serif font-bold text-slate-800 mb-2">ReadNFill</h2>
          <div className="flex gap-4">
            <a href="#" className="w-14 h-14 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-1 transition-all">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="w-14 h-14 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:-translate-y-1 transition-all">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="w-14 h-14 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white hover:border-red-600 hover:-translate-y-1 transition-all">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="w-14 h-14 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-sky-600 hover:text-white hover:border-sky-600 hover:-translate-y-1 transition-all">
              <CheckCircle className="w-6 h-6" /> 
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-4">© 2026 ReadNFill. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

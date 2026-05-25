import { Link, useNavigate } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { usePassages } from '../context/PassagesContext';

const SectionHeader = ({ title }: { title: string }) => (
  <div className="mt-16 mb-8 text-center">
    <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase" style={{ fontFamily: '"Ibarra Real Nova", serif' }}>{title}</h2>
    <div className="w-16 h-1 bg-[#007cba] mx-auto mt-4 rounded-full"></div>
  </div>
);

const Card = ({ title, desc, image, onClick }: { title: string, desc: string, image: string, onClick: () => void }) => (
  <div className="group relative overflow-hidden rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,124,186,0.3)] transition-all duration-500 flex flex-col justify-end h-[340px] md:h-[400px]">
    {/* Background Image with Zoom Effect */}
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    
    {/* Dark Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 transition-opacity duration-500 group-hover:opacity-90"></div>
    
    {/* Content */}
    <div className="relative z-10 translate-y-8 transition-transform duration-500 group-hover:translate-y-0 flex flex-col items-center text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">{title}</h3>
      <p className="text-slate-300 mb-6 text-sm md:text-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">{desc}</p>
      <button onClick={onClick} className="w-fit bg-white text-slate-900 group-hover:bg-[#007cba] group-hover:text-white px-7 py-2.5 rounded-full font-bold transition-all duration-300 shadow-sm text-sm mx-auto">
        Let's Start
      </button>
    </div>
  </div>
);

export default function PracticeMenu() {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    const pwd = window.prompt("Security Check:\nPlease enter the admin password:");
    if (pwd === "admin123") {
      navigate('/admin');
    } else if (pwd !== null) {
      alert("Incorrect password!");
    }
  };

  const handleStart = (id: string) => {
    navigate(`/practice/${id}`);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans pb-24">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-[70px] bg-white/95 backdrop-blur-md shadow-sm z-50 flex items-center px-6 md:px-10">
        <div className="flex-1">
          <Link to="/" className="text-2xl font-black text-[#007cba] tracking-tighter" style={{ fontFamily: '"Ibarra Real Nova", serif' }}>
            ReadNFill
          </Link>
        </div>
        
        <nav className="flex items-center justify-center gap-8 md:gap-12">
          <Link to="/" className="text-sm font-bold text-slate-600 tracking-wide hover:text-[#007cba] transition-colors uppercase">
            Home
          </Link>
          <Link to="/features" className="text-sm font-bold text-slate-600 tracking-wide hover:text-[#007cba] transition-colors uppercase">
            Feature
          </Link>
          <Link to="/practice" className="text-sm font-bold text-[#007cba] tracking-wide hover:text-[#005a87] transition-colors uppercase">
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

      <div className="max-w-7xl mx-auto px-6 pt-32">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4">
          <h1 className="text-5xl md:text-6xl font-black text-[#007cba] mb-6" style={{ fontFamily: '"Ibarra Real Nova", serif' }}>Practice Library</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Select a topic below to start improving your reading comprehension and grammar skills.</p>
        </div>

        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          {/* EATING HABITS */}
          <section>
            <SectionHeader title="Eating Habits" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card 
                title="Daily Nutrition Essentials" 
                desc="This passage talks about healthy eating habits, such as having breakfast, drinking water, and choosing good snacks." 
                image="/practice-bg-1.png"
                onClick={() => handleStart('p1')} 
              />
              <Card 
                title="The Benefits Of Home Cooking" 
                desc="This passage explains why cooking at home is good for your health and money, and how to save time when cooking." 
                image="/practice-bg-2.png"
                onClick={() => handleStart('p2')} 
              />
              <Card 
                title="The Fast Food Industry" 
                desc="This passage discusses fast food and its effects on health, and how some companies are trying to make healthier food." 
                image="/practice-bg-3.png"
                onClick={() => handleStart('p3')} 
              />
            </div>
          </section>

          {/* TRAVELING */}
          <section>
            <SectionHeader title="Traveling" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card 
                title="Countryside Rail Journeys" 
                desc="This passage describes traveling by train in the countryside and what you should prepare for the trip." 
                image="/practice-bg-4.png"
                onClick={() => handleStart('p4')} 
              />
              <Card 
                title="Sustainable Eco-Tourism" 
                desc="This passage explains eco-tourism and how it helps local people and protects the environment." 
                image="/practice-bg-5.png"
                onClick={() => handleStart('p5')} 
              />
              <Card 
                title="International Trip Preparation" 
                desc="This passage gives tips on how to prepare for an international trip, like documents, money, and insurance." 
                image="/practice-bg-6.png"
                onClick={() => handleStart('p6')} 
              />
            </div>
          </section>

          {/* TECHNOLOGY IN DAILY LIFE */}
          <section>
            <SectionHeader title="Technology In Daily Life" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card 
                title="The Impact of Smartphones" 
                desc="This passage talks about how smartphones help us communicate but can also affect our health." 
                image="/practice-bg-7.png"
                onClick={() => handleStart('p7')} 
              />
              <Card 
                title="The Growth of E-Learning" 
                desc="This passage explains online learning, its benefits, and what you need to study online." 
                image="/practice-bg-8.png"
                onClick={() => handleStart('p8')} 
              />
              <Card 
                title="Social Media Dynamics" 
                desc="This passage describes how social media changes communication and the risks of sharing personal information." 
                image="/practice-bg-9.png"
                onClick={() => handleStart('p9')} 
              />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

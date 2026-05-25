import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Info, X, AlertTriangle, Menu } from 'lucide-react';

/* --- Constants & Data --- */
const trapData = {
  ex1: {
    trap1: { badge: 'SUBJECT MATCH TRAP', text: <span><strong>Modern scientists</strong> are the active human agents who analyze and solve problems, they are not structural crops that can be physically wiped out or destroyed by biological diseases.</span> },
    trap2: { badge: 'CORRECT GAP ELEMENT', text: <span><strong>Entire crops</strong> perfectly matches the context. The text states that plant diseases completely destroy entire crops within a single week.</span> }
  },
  ex2: {
    trap1: { badge: 'CAUSE & EFFECT TRAP', text: <span><strong>Eco projects</strong> are defensive solutions launched subsequently by local governments to fight hazards, not the direct geological phenomenon triggered immediately by global warming.</span> },
    trap2: { badge: 'CORRECT GAP ELEMENT', text: <span><strong>Extreme weather</strong> accurately fulfills the semantic dependency. Hot global warming directly causes severe extreme weather patterns like heavy storms.</span> }
  }
};

const grammarData = {
  g3: { answer: 'Adverb', explain: <span>The blank comes after the verb <strong>"completed"</strong>. Therefore, an adverb is needed to describe how the action happened.</span> },
  g4: { answer: 'Noun', explain: <span>The blank comes after the adjective <strong>"serious"</strong>. Therefore, a noun is required.</span> }
};

const synonymExplainData = {
  syn1: { correctAnswer: 'scientists', explain: <span>In the passage, <strong>"scientists"</strong> are referred to as the actors allocating resources to bio-engineering robust sub-species. This directly maps to the meaning of <strong>"researchers"</strong>.</span> },
  syn2: { correctAnswer: 'survive', explain: <span>The passage mentions alternative breeds inherently structured to fully <strong>"survive"</strong> and flourish under volatile terms. <strong>"Survive"</strong> shares the identical semantic context with <strong>"withstand"</strong>.</span> }
};

export default function Features() {
  const [activeView, setActiveView] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  /* --- Word-Limit Guardian State --- */
  const [wlgModal, setWlgModal] = useState<{ isOpen: boolean, max: number, count: number, q: number } | null>(null);
  
  const useWordLimit = (max: number, target: string, qIndex: number) => {
    const [val, setVal] = useState('');
    const [modalShown, setModalShown] = useState(false);
    
    const count = val.trim() ? val.trim().split(/\s+/).length : 0;
    const isOver = count > max;
    const isCorrect = val.toLowerCase().trim() === target.toLowerCase();
    
    useEffect(() => {
      if (isOver && !modalShown) {
        setWlgModal({ isOpen: true, max, count, q: qIndex });
        setModalShown(true);
      } else if (!isOver) {
        setModalShown(false);
      }
    }, [isOver, count, max, qIndex, modalShown]);

    return { val, setVal, isOver, isCorrect, count, max };
  };

  const wlg1 = useWordLimit(3, 'a lightning strike', 1);
  const wlg2 = useWordLimit(2, 'poor preparation', 2);

  /* --- Grammar-Gap Predictor State --- */
  const [g3State, setG3State] = useState<{ selected: string, isCorrect: boolean } | null>(null);
  const [g4State, setG4State] = useState<{ selected: string, isCorrect: boolean } | null>(null);

  /* --- Synonym Review State --- */
  const [syn1State, setSyn1State] = useState<{ selected: string, isCorrect: boolean } | null>(null);
  const [syn2State, setSyn2State] = useState<{ selected: string, isCorrect: boolean } | null>(null);

  /* --- Distractor Spotlight State --- */
  const [ds1, setDs1] = useState<{ input: string, checked: boolean, correct: boolean, activeTrap: 'trap1' | 'trap2' | null }>({ input: '', checked: false, correct: false, activeTrap: null });
  const [ds2, setDs2] = useState<{ input: string, checked: boolean, correct: boolean, activeTrap: 'trap1' | 'trap2' | null }>({ input: '', checked: false, correct: false, activeTrap: null });

  const handleDsCheck = (id: 'ds1' | 'ds2', target: string) => {
    const state = id === 'ds1' ? ds1 : ds2;
    const setter = id === 'ds1' ? setDs1 : setDs2;
    const isCorrect = state.input.toLowerCase().trim() === target;
    setter(prev => ({ ...prev, checked: true, correct: isCorrect, activeTrap: null }));
  };

  return (
    <div className="bg-[#f0f2f5] min-h-screen text-[#2d3748] font-sans flex flex-col pt-24">
      
      {/* 1. Modal */}
      {wlgModal?.isOpen && (
        <div className="fixed inset-0 bg-black/40 z-[2000] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md text-center shadow-[0_15px_35px_rgba(0,0,0,0.15)] border-t-8 border-[#f57c00] animate-in zoom-in-95 duration-300 relative">
            <button onClick={() => setWlgModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>
            <div className="w-14 h-14 bg-[#fff8f0] rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-[#ffe8cc]">
              <AlertTriangle className="w-7 h-7 text-[#f57c00]" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Word Limit Exceeded!</h3>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Question {wlgModal.q} allows a maximum of <strong>{wlgModal.max} words</strong>.<br/>
              Your current answer has {wlgModal.count}.
            </p>
            <button onClick={() => setWlgModal(null)} className="w-full bg-[#f57c00] hover:bg-[#e65100] text-white font-bold py-3.5 rounded-xl shadow-[0_4px_12px_rgba(245,124,0,0.2)] hover:shadow-[0_6px_15px_rgba(245,124,0,0.3)] transition-all">
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-[70px] bg-white/95 backdrop-blur-md shadow-sm z-[1001] flex items-center px-6 md:px-10">
        <div className="flex-1 flex items-center gap-4">
          <Link to="/" className="text-2xl font-black text-[#007cba] tracking-tighter hidden md:block" style={{ fontFamily: '"Ibarra Real Nova", serif' }}>
            ReadNFill
          </Link>
          <button 
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
              if (activeView === 'home') setActiveView('feature1');
            }}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#007cba] font-bold rounded-lg transition-all border border-[#007cba]/10"
          >
            <Menu className="w-5 h-5" />
            <span className="hidden sm:inline">Select Feature</span>
          </button>
        </div>
        
        <nav className="flex items-center justify-center gap-8 md:gap-12">
          <Link to="/" className="text-sm font-bold text-slate-600 tracking-wide hover:text-[#007cba] transition-colors uppercase">
            Home
          </Link>
          <Link to="/features" className="text-sm font-bold text-[#007cba] tracking-wide hover:text-[#005a87] transition-colors uppercase">
            Feature
          </Link>
          <Link to="/practice" className="text-sm font-bold text-slate-600 tracking-wide hover:text-[#007cba] transition-colors uppercase">
            Practice
          </Link>
        </nav>

        <div className="flex-1"></div>
      </header>

      {/* 3. Main Wrapper */}
      <div className="flex flex-1 relative">
        
        {/* Sidebar */}
        <aside className={cn(
          "w-[290px] bg-white border-r border-slate-200 fixed top-0 bottom-0 pt-24 z-[999] p-5 overflow-y-auto transition-all duration-300 ease-in-out shadow-2xl md:shadow-none",
          sidebarOpen ? "left-0" : "-left-[290px]"
        )}>
          <h3 className="text-lg text-[#007cba] font-bold pb-2 border-b-2 border-slate-100 mb-4">Feature Directory</h3>
          <ul className="space-y-3">
            {[
              { id: 'feature1', name: 'Word-Limit Guardian' },
              { id: 'feature2', name: 'Grammar-Gap Predictor' },
              { id: 'feature3', name: 'Synonym Review' },
              { id: 'feature4', name: 'The Distractor Spotlight' }
            ].map(f => (
              <li key={f.id}>
                <button
                  onClick={() => { setActiveView(f.id); setSidebarOpen(false); }}
                  className={cn(
                    "w-full text-left p-3.5 rounded-xl border transition-all duration-200",
                    activeView === f.id ? "bg-sky-50 border-[#007cba] shadow-sm translate-x-1" : "bg-slate-50 border-slate-200 hover:bg-sky-50 hover:border-[#007cba]/50 hover:translate-x-1"
                  )}
                >
                  <h4 className="font-semibold text-slate-800 text-sm m-0">{f.name}</h4>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Area */}
        <main className={cn(
          "flex-1 p-6 md:p-10 transition-all duration-300 ease-in-out w-full mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-60px)]",
          sidebarOpen ? "lg:ml-[290px]" : "ml-0"
        )}>
          
          {/* Welcome View (Empty State) */}
          {activeView === 'home' && (
            <div className="opacity-0"></div>
          )}

          {/* Feature 1: Word-Limit Guardian */}
          {activeView === 'feature1' && (
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 w-full max-w-4xl animate-in fade-in zoom-in-95 duration-500">
              <h2 className="text-2xl font-bold text-[#007cba] mb-2">Word-Limit Guardian</h2>
              <p className="text-sm text-slate-500 mb-6">Read the short text below, then type your answers.</p>
              
              <div className="bg-white border border-slate-300 rounded-xl p-5 text-[15px] leading-relaxed text-slate-700 mb-8 max-h-[250px] overflow-y-auto">
                <strong>Reading Passage:</strong><br/>
                Yesterday, a big fire happened in the local forest. The police found out that <strong>a lightning strike</strong> caused the fire during a sudden storm. On the same day, many young students failed their school test. The teacher said they failed because of <strong>poor preparation</strong>, as most of them spent too much time playing video games instead of studying.
              </div>

              {/* Q1 */}
              <div className={cn("mb-6 pb-6 border-b border-slate-100", wlg1.isOver && "text-[#f57c00]")}>
                <label className="block font-semibold mb-3">Q1. What caused the fire in the forest? (NO MORE THAN THREE WORDS)</label>
                <input 
                  type="text" 
                  value={wlg1.val}
                  onChange={e => wlg1.setVal(e.target.value)}
                  placeholder="Type your answer..."
                  className={cn(
                    "w-full p-3 border-2 rounded-lg text-base transition-colors focus:outline-none focus:border-[#007cba]",
                    wlg1.isOver ? "border-[#f57c00] bg-[#fffbf5] text-[#f57c00]" : 
                    (wlg1.val && wlg1.isCorrect) ? "border-green-600 bg-green-50 text-green-800" :
                    (wlg1.val && !wlg1.isCorrect) ? "border-red-600 bg-red-50 text-red-800" : "border-slate-200"
                  )}
                />
                {wlg1.val && (
                  <div className={cn("text-sm font-semibold mt-2", wlg1.isOver ? "text-[#f57c00]" : wlg1.isCorrect ? "text-green-700" : "text-red-600")}>
                    {wlg1.isOver ? `⚠️ Maximum 3 words only` : wlg1.isCorrect ? '✅ Correct answer from the text passage!' : '❌ Incorrect answer. Please look at the text passage again.'}
                  </div>
                )}
              </div>

              {/* Q2 */}
              <div className={cn("mb-6 pb-6 border-b border-slate-100", wlg2.isOver && "text-[#f57c00]")}>
                <label className="block font-semibold mb-3">Q2. The young students failed the test because of ________. (NO MORE THAN TWO WORDS)</label>
                <input 
                  type="text" 
                  value={wlg2.val}
                  onChange={e => wlg2.setVal(e.target.value)}
                  placeholder="Type your answer..."
                  className={cn(
                    "w-full p-3 border-2 rounded-lg text-base transition-colors focus:outline-none focus:border-[#007cba]",
                    wlg2.isOver ? "border-[#f57c00] bg-[#fffbf5] text-[#f57c00]" : 
                    (wlg2.val && wlg2.isCorrect) ? "border-green-600 bg-green-50 text-green-800" :
                    (wlg2.val && !wlg2.isCorrect) ? "border-red-600 bg-red-50 text-red-800" : "border-slate-200"
                  )}
                />
                {wlg2.val && (
                  <div className={cn("text-sm font-semibold mt-2", wlg2.isOver ? "text-[#f57c00]" : wlg2.isCorrect ? "text-green-700" : "text-red-600")}>
                    {wlg2.isOver ? `⚠️ Maximum 2 words only` : wlg2.isCorrect ? '✅ Correct answer from the text passage!' : '❌ Incorrect answer. Please look at the text passage again.'}
                  </div>
                )}
              </div>

              <div className="mt-4 p-3 bg-sky-50 border-l-4 border-[#007cba] text-[13px] text-sky-900">
                <strong>Tip:</strong> Always read the instructions carefully (e.g., MAX TWO WORDS) so you do not lose points.
              </div>
              <button onClick={() => setActiveView('home')} className="mt-8 px-5 py-3 bg-slate-500 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors">Back to Dashboard</button>
            </div>
          )}

          {/* Feature 2: Grammar-Gap Predictor */}
          {activeView === 'feature2' && (
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 w-full max-w-4xl animate-in fade-in zoom-in-95 duration-500">
              <h2 className="text-2xl font-bold text-[#007cba] mb-2">Grammar-Gap Predictor</h2>
              <p className="text-sm text-slate-500 mb-6">Read the text and choose the correct type of word to fill in the blank.</p>
              
              {/* Q1 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-7 shadow-sm">
                <div className="bg-slate-50 border-l-4 border-[#007cba] p-4 rounded-lg leading-relaxed text-slate-700 mb-5">
                  The company completed the project very ______, so the manager decided to give everyone a bonus.
                </div>
                <p className="font-bold text-slate-800 mb-4">Q1. Which type of word should fill the blank?</p>
                <div className="flex flex-wrap gap-3">
                  {['Noun', 'Adverb', 'Verb', 'Adjective'].map(opt => (
                    <button 
                      key={opt}
                      disabled={g3State !== null}
                      onClick={() => setG3State({ selected: opt, isCorrect: opt === grammarData.g3.answer })}
                      className={cn(
                        "px-5 py-2.5 rounded-lg border bg-white font-semibold transition-all",
                        g3State === null ? "border-slate-300 hover:bg-sky-50 hover:border-[#007cba] cursor-pointer" :
                        (opt === grammarData.g3.answer) ? "bg-green-100 border-green-600 text-green-800" :
                        (opt === g3State?.selected) ? "bg-red-50 border-red-600 text-red-800" : "opacity-50 cursor-not-allowed border-slate-200"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {g3State && (
                  <div className="mt-5 bg-slate-50 border-l-4 border-[#007cba] p-5 rounded-xl animate-in fade-in zoom-in-95">
                    <div className="text-lg font-bold mb-2">{g3State.isCorrect ? '✅ Correct Answer' : '❌ Incorrect Answer'}</div>
                    <div className="text-[15px] text-slate-600 leading-relaxed">
                      {!g3State.isCorrect && <><strong className="text-slate-900">Correct Answer:</strong> {grammarData.g3.answer}<br/><br/></>}
                      {grammarData.g3.explain}
                    </div>
                  </div>
                )}
              </div>

              {/* Q2 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-7 shadow-sm">
                <div className="bg-slate-50 border-l-4 border-[#007cba] p-4 rounded-lg leading-relaxed text-slate-700 mb-5">
                  The sudden increase in population created many serious ______ for the local transportation system.
                </div>
                <p className="font-bold text-slate-800 mb-4">Q2. Which type of word should fill the blank?</p>
                <div className="flex flex-wrap gap-3">
                  {['Adverb', 'Verb', 'Noun', 'Adjective'].map(opt => (
                    <button 
                      key={opt}
                      disabled={g4State !== null}
                      onClick={() => setG4State({ selected: opt, isCorrect: opt === grammarData.g4.answer })}
                      className={cn(
                        "px-5 py-2.5 rounded-lg border bg-white font-semibold transition-all",
                        g4State === null ? "border-slate-300 hover:bg-sky-50 hover:border-[#007cba] cursor-pointer" :
                        (opt === grammarData.g4.answer) ? "bg-green-100 border-green-600 text-green-800" :
                        (opt === g4State?.selected) ? "bg-red-50 border-red-600 text-red-800" : "opacity-50 cursor-not-allowed border-slate-200"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {g4State && (
                  <div className="mt-5 bg-slate-50 border-l-4 border-[#007cba] p-5 rounded-xl animate-in fade-in zoom-in-95">
                    <div className="text-lg font-bold mb-2">{g4State.isCorrect ? '✅ Correct Answer' : '❌ Incorrect Answer'}</div>
                    <div className="text-[15px] text-slate-600 leading-relaxed">
                      {!g4State.isCorrect && <><strong className="text-slate-900">Correct Answer:</strong> {grammarData.g4.answer}<br/><br/></>}
                      {grammarData.g4.explain}
                    </div>
                  </div>
                )}
              </div>

              <button onClick={() => setActiveView('home')} className="mt-4 px-5 py-3 bg-slate-500 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors">Back to Dashboard</button>
            </div>
          )}

          {/* Feature 3: Synonym Review */}
          {activeView === 'feature3' && (
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 w-full max-w-4xl animate-in fade-in zoom-in-95 duration-500">
              <h2 className="text-2xl font-bold text-[#007cba] mb-2">Synonym Review</h2>
              <p className="text-sm text-slate-500 mb-6">Read the text and choose the correct synonym card corresponding to the question keyword.</p>
              
              <div className="bg-white border border-slate-300 rounded-xl p-5 text-[15px] leading-relaxed text-slate-700 mb-6 max-h-[400px] overflow-y-auto">
                <strong>Reading Passage:</strong><br/>
                The global coffee industry is currently facing unprecedented vulnerabilities due to rapid environmental shifts. In equatorial regions, changing agricultural parameters and unexpected proliferations of crop diseases can swiftly devastate yields within single harvest cycles. To fight this existential threat, modern <strong>scientists</strong> are now allocating extensive resources to bio-engineering robust sub-species of botanical vegetation. They are working tirelessly on creating strong alternative breeds of coffee trees that are inherently structured to fully <strong>survive</strong> and flourish even under highly volatile and difficult weather conditions.
              </div>

              {/* Q1 */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-5">
                <p className="font-semibold m-0 leading-relaxed text-slate-800">Q1. Keyword from question: <span className="text-[#007cba] italic">"researchers"</span></p>
                <div className="flex gap-4 mt-4">
                  {['scientists', 'pests'].map(opt => (
                    <button 
                      key={opt}
                      disabled={syn1State !== null}
                      onClick={() => setSyn1State({ selected: opt, isCorrect: opt === synonymExplainData.syn1.correctAnswer })}
                      className={cn(
                        "flex-1 py-3.5 border rounded-lg font-semibold text-slate-700 transition-all",
                        syn1State === null ? "bg-white border-slate-300 hover:bg-slate-50 hover:border-slate-400" :
                        (opt === synonymExplainData.syn1.correctAnswer) ? "bg-green-100 border-green-600 text-green-800" :
                        (opt === syn1State?.selected) ? "bg-red-50 border-red-600 text-red-800" : "bg-white border-slate-200 opacity-90 cursor-not-allowed"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {syn1State && (
                  <div className="mt-5 bg-slate-50 border-l-4 border-[#007cba] p-5 rounded-xl animate-in fade-in zoom-in-95">
                    <div className="text-lg font-bold mb-2">{syn1State.isCorrect ? '✅ Correct Answer' : '❌ Incorrect Answer'}</div>
                    <div className="text-[14.5px] text-slate-600 leading-relaxed">
                      {!syn1State.isCorrect && <><strong className="text-slate-900">Correct Answer:</strong> {synonymExplainData.syn1.correctAnswer}<br/><br/></>}
                      {synonymExplainData.syn1.explain}
                    </div>
                  </div>
                )}
              </div>

              {/* Q2 */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
                <p className="font-semibold m-0 leading-relaxed text-slate-800">Q2. Keyword from question: <span className="text-[#007cba] italic">"withstand"</span></p>
                <div className="flex gap-4 mt-4">
                  {['perish', 'survive'].map(opt => (
                    <button 
                      key={opt}
                      disabled={syn2State !== null}
                      onClick={() => setSyn2State({ selected: opt, isCorrect: opt === synonymExplainData.syn2.correctAnswer })}
                      className={cn(
                        "flex-1 py-3.5 border rounded-lg font-semibold text-slate-700 transition-all",
                        syn2State === null ? "bg-white border-slate-300 hover:bg-slate-50 hover:border-slate-400" :
                        (opt === synonymExplainData.syn2.correctAnswer) ? "bg-green-100 border-green-600 text-green-800" :
                        (opt === syn2State?.selected) ? "bg-red-50 border-red-600 text-red-800" : "bg-white border-slate-200 opacity-90 cursor-not-allowed"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {syn2State && (
                  <div className="mt-5 bg-slate-50 border-l-4 border-[#007cba] p-5 rounded-xl animate-in fade-in zoom-in-95">
                    <div className="text-lg font-bold mb-2">{syn2State.isCorrect ? '✅ Correct Answer' : '❌ Incorrect Answer'}</div>
                    <div className="text-[14.5px] text-slate-600 leading-relaxed">
                      {!syn2State.isCorrect && <><strong className="text-slate-900">Correct Answer:</strong> {synonymExplainData.syn2.correctAnswer}<br/><br/></>}
                      {synonymExplainData.syn2.explain}
                    </div>
                  </div>
                )}
              </div>

              <button onClick={() => setActiveView('home')} className="px-5 py-3 bg-slate-500 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors">Back to Dashboard</button>
            </div>
          )}

          {/* Feature 4: The Distractor Spotlight */}
          {activeView === 'feature4' && (
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 w-full max-w-4xl animate-in fade-in zoom-in-95 duration-500">
              <h2 className="text-2xl font-bold text-[#007cba] mb-2">The Distractor Spotlight</h2>
              <p className="text-sm text-slate-500 mb-6">Type the correct answer from the text passage into the blank fields, then click the <strong>Check Answer</strong> button to verify.</p>
              
              <div className="bg-white border border-slate-300 rounded-xl p-5 text-[15px] leading-relaxed text-slate-700 mb-8 max-h-[250px] overflow-y-auto">
                <strong>Reading Passage:</strong><br/>
                Today, coffee is a massive global enterprise. However, changing weather and unexpected plant diseases can completely destroy <strong>entire crops</strong> in a single week. To fight this threat, modern scientists are now creating strong new types of coffee trees. Similarly, in other areas, hot global warming is causing severe <strong>extreme weather</strong> like heavy storms, forcing local governments to support eco projects.
              </div>

              {/* Q1 */}
              <div className="mb-10">
                <div className="bg-white p-5 border border-slate-200 rounded-xl text-slate-800 font-semibold leading-relaxed mb-4">
                  📋 Q1: Agricultural entities are constantly vulnerable to diseases that can wipe out{' '}
                  <input 
                    type="text" 
                    value={ds1.input}
                    onChange={e => {
                      setDs1({ input: e.target.value, checked: false, correct: false, activeTrap: null });
                    }}
                    placeholder="Type answer..." 
                    className={cn(
                      "w-[180px] inline-block px-3 py-1.5 text-[15px] font-bold text-center transition-all bg-slate-50 rounded-t focus:outline-none",
                      !ds1.checked ? "text-[#007cba] border-b-2 border-dashed border-[#007cba] focus:bg-sky-50 focus:border-solid" :
                      ds1.correct ? "bg-green-50 border-b-2 border-solid border-green-600 text-green-800" : "bg-red-50 border-b-2 border-solid border-red-600 text-red-800"
                    )}
                  />{' '}
                  within a very limited timeframe.
                </div>
                <button 
                  onClick={() => handleDsCheck('ds1', 'entire crops')}
                  className="px-5 py-2 text-sm font-semibold text-white bg-[#007cba] hover:bg-[#005a87] rounded-md transition-colors"
                >
                  Check Answer
                </button>
                
                {ds1.checked && ds1.input === '' && (
                  <div className="mt-3 text-[13.5px] font-bold text-[#f57c00]">⚠️ Please type your answer before checking.</div>
                )}
                {ds1.checked && ds1.input !== '' && ds1.correct && (
                  <div className="mt-3 text-[13.5px] font-bold text-green-800">✅ Excellent! Correct answer directly extracted from text.</div>
                )}
                {ds1.checked && ds1.input !== '' && !ds1.correct && (
                  <div className="mt-3 text-[13.5px] font-bold text-red-700 animate-in fade-in">
                    ❌ Incorrect answer. Analysis portal activated below to debug reading traps.
                    
                    <div className="bg-white border border-slate-200 rounded-xl p-6 mt-4 shadow-sm">
                      <div className="text-sm font-semibold text-red-600 mb-4 flex items-center gap-2 border-b-2 border-red-600 pb-2 w-fit">
                        📌 Traps Deconstruction
                      </div>
                      <div className="bg-orange-50 border border-orange-100 p-3 text-sm text-orange-700 rounded-lg mb-5 font-medium">
                        Your input matches a common reading distractor! Click on the options below to explore the trap structure:
                      </div>
                      <div className="flex flex-wrap gap-3 mb-5">
                        <button 
                          onClick={() => setDs1(p => ({ ...p, activeTrap: 'trap1' }))}
                          className={cn("px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all shadow-sm", ds1.activeTrap === 'trap1' ? "bg-red-100 border-2 border-red-300 text-red-800 shadow-[0_0_0_3px_rgba(220,38,38,0.1)]" : "bg-red-50 border border-red-100 text-red-800 hover:bg-red-100 hover:border-red-300")}
                        >
                          modern scientists ❌
                        </button>
                        <button 
                          onClick={() => setDs1(p => ({ ...p, activeTrap: 'trap2' }))}
                          className={cn("px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all shadow-sm", ds1.activeTrap === 'trap2' ? "bg-red-100 border-2 border-red-300 text-red-800 shadow-[0_0_0_3px_rgba(220,38,38,0.1)]" : "bg-red-50 border border-red-100 text-red-800 hover:bg-red-100 hover:border-red-300")}
                        >
                          entire crops ⚠️
                        </button>
                      </div>

                      {ds1.activeTrap && (
                        <div className="bg-slate-50 border border-slate-200 border-l-4 border-l-red-600 rounded-r-xl p-5 flex gap-4 items-start animate-in fade-in">
                          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <Info className="w-3.5 h-3.5 text-red-600" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-[15px] font-bold text-slate-800">Trap type:</span>
                              <span className="bg-red-100 text-red-700 text-[11px] font-bold uppercase px-2 py-1 rounded">
                                {trapData.ex1[ds1.activeTrap].badge}
                              </span>
                            </div>
                            <div className="text-sm text-slate-600 font-medium leading-relaxed">
                              {trapData.ex1[ds1.activeTrap].text}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Q2 */}
              <div className="mb-4">
                <div className="bg-white p-5 border border-slate-200 rounded-xl text-slate-800 font-semibold leading-relaxed mb-4">
                  📋 Q2: Global climate fluctuations directly trigger intense{' '}
                  <input 
                    type="text" 
                    value={ds2.input}
                    onChange={e => {
                      setDs2({ input: e.target.value, checked: false, correct: false, activeTrap: null });
                    }}
                    placeholder="Type answer..." 
                    className={cn(
                      "w-[180px] inline-block px-3 py-1.5 text-[15px] font-bold text-center transition-all bg-slate-50 rounded-t focus:outline-none",
                      !ds2.checked ? "text-[#007cba] border-b-2 border-dashed border-[#007cba] focus:bg-sky-50 focus:border-solid" :
                      ds2.correct ? "bg-green-50 border-b-2 border-solid border-green-600 text-green-800" : "bg-red-50 border-b-2 border-solid border-red-600 text-red-800"
                    )}
                  />{' '}
                  which in turn challenges urban transport and local funding allocation.
                </div>
                <button 
                  onClick={() => handleDsCheck('ds2', 'extreme weather')}
                  className="px-5 py-2 text-sm font-semibold text-white bg-[#007cba] hover:bg-[#005a87] rounded-md transition-colors"
                >
                  Check Answer
                </button>
                
                {ds2.checked && ds2.input === '' && (
                  <div className="mt-3 text-[13.5px] font-bold text-[#f57c00]">⚠️ Please type your answer before checking.</div>
                )}
                {ds2.checked && ds2.input !== '' && ds2.correct && (
                  <div className="mt-3 text-[13.5px] font-bold text-green-800">✅ Excellent! Correct answer directly extracted from text.</div>
                )}
                {ds2.checked && ds2.input !== '' && !ds2.correct && (
                  <div className="mt-3 text-[13.5px] font-bold text-red-700 animate-in fade-in">
                    ❌ Incorrect answer. Analysis portal activated below to debug reading traps.
                    
                    <div className="bg-white border border-slate-200 rounded-xl p-6 mt-4 shadow-sm">
                      <div className="text-sm font-semibold text-red-600 mb-4 flex items-center gap-2 border-b-2 border-red-600 pb-2 w-fit">
                        📌 Traps Deconstruction
                      </div>
                      <div className="bg-orange-50 border border-orange-100 p-3 text-sm text-orange-700 rounded-lg mb-5 font-medium">
                        Your input matches a common reading distractor! Click on the options below to explore the trap structure:
                      </div>
                      <div className="flex flex-wrap gap-3 mb-5">
                        <button 
                          onClick={() => setDs2(p => ({ ...p, activeTrap: 'trap1' }))}
                          className={cn("px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all shadow-sm", ds2.activeTrap === 'trap1' ? "bg-red-100 border-2 border-red-300 text-red-800 shadow-[0_0_0_3px_rgba(220,38,38,0.1)]" : "bg-red-50 border border-red-100 text-red-800 hover:bg-red-100 hover:border-red-300")}
                        >
                          eco projects ❌
                        </button>
                        <button 
                          onClick={() => setDs2(p => ({ ...p, activeTrap: 'trap2' }))}
                          className={cn("px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all shadow-sm", ds2.activeTrap === 'trap2' ? "bg-red-100 border-2 border-red-300 text-red-800 shadow-[0_0_0_3px_rgba(220,38,38,0.1)]" : "bg-red-50 border border-red-100 text-red-800 hover:bg-red-100 hover:border-red-300")}
                        >
                          extreme weather ⚠️
                        </button>
                      </div>

                      {ds2.activeTrap && (
                        <div className="bg-slate-50 border border-slate-200 border-l-4 border-l-red-600 rounded-r-xl p-5 flex gap-4 items-start animate-in fade-in">
                          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <Info className="w-3.5 h-3.5 text-red-600" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-[15px] font-bold text-slate-800">Trap type:</span>
                              <span className="bg-red-100 text-red-700 text-[11px] font-bold uppercase px-2 py-1 rounded">
                                {trapData.ex2[ds2.activeTrap].badge}
                              </span>
                            </div>
                            <div className="text-sm text-slate-600 font-medium leading-relaxed">
                              {trapData.ex2[ds2.activeTrap].text}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <button onClick={() => setActiveView('home')} className="mt-8 px-5 py-3 bg-slate-500 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors">Back to Dashboard</button>
            </div>
          )}

          <footer className="mt-16 text-center text-slate-400 text-[0.85rem]">
            <p>© 2026 ReadnFill Project - Faculty of Foreign Languages - TDTU</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

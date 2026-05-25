import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Practice from './pages/Practice';
import Admin from './pages/Admin';
import Features from './pages/Features';
import PracticeMenu from './pages/PracticeMenu';
import { ThemeProvider } from './context/ThemeContext';
import { PassagesProvider } from './context/PassagesContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <PassagesProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/features" element={<Features />} />
              <Route path="/practice" element={<PracticeMenu />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/practice/:id" element={<Practice />} />
            </Routes>
          </Layout>
        </PassagesProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;

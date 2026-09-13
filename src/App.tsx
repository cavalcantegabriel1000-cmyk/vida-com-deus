import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { Devotions } from '@/pages/Devotions';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-dark-950">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/devocoes" element={<Devotions />} />
            {/* TODO: Add more routes */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

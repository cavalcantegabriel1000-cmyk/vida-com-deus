import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark-950 border-b border-dark-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-spirit-gold p-2 rounded-lg">
              <Heart className="w-6 h-6 text-dark-950 fill-current" />
            </div>
            <span className="text-xl font-serif font-bold text-white hidden sm:inline">
              Vida com Deus
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-dark-300 hover:text-spirit-gold transition-colors"
            >
              Início
            </Link>
            <Link
              to="/devocoes"
              className="text-dark-300 hover:text-spirit-gold transition-colors"
            >
              Devoções
            </Link>
            <Link
              to="/oracoes"
              className="text-dark-300 hover:text-spirit-gold transition-colors"
            >
              Orações
            </Link>
            <Link
              to="/biblia"
              className="text-dark-300 hover:text-spirit-gold transition-colors"
            >
              Bíblia
            </Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/perfil"
              className="text-dark-300 hover:text-white transition-colors"
            >
              Perfil
            </Link>
            <button className="bg-spirit-gold text-dark-950 px-4 py-2 rounded-lg font-medium hover:bg-spirit-silver transition-colors">
              Sair
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              to="/"
              className="text-dark-300 hover:text-spirit-gold transition-colors"
            >
              Início
            </Link>
            <Link
              to="/devocoes"
              className="text-dark-300 hover:text-spirit-gold transition-colors"
            >
              Devoções
            </Link>
            <Link
              to="/oracoes"
              className="text-dark-300 hover:text-spirit-gold transition-colors"
            >
              Orações
            </Link>
            <Link
              to="/biblia"
              className="text-dark-300 hover:text-spirit-gold transition-colors"
            >
              Bíblia
            </Link>
            <Link
              to="/perfil"
              className="text-dark-300 hover:text-spirit-gold transition-colors"
            >
              Perfil
            </Link>
            <button className="bg-spirit-gold text-dark-950 px-4 py-2 rounded-lg font-medium hover:bg-spirit-silver transition-colors w-full">
              Sair
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

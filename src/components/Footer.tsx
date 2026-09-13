import { Heart, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-dark-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-spirit-gold p-2 rounded-lg">
                <Heart className="w-5 h-5 text-dark-950 fill-current" />
              </div>
              <span className="font-serif font-bold text-white">Vida com Deus</span>
            </Link>
            <p className="text-dark-400 text-sm">
              Conectando você com Deus através de devoções, orações e reflexões diárias.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-dark-400 text-sm">
              <li>
                <Link to="/" className="hover:text-spirit-gold transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/devocoes" className="hover:text-spirit-gold transition-colors">
                  Devoções
                </Link>
              </li>
              <li>
                <Link to="/oracoes" className="hover:text-spirit-gold transition-colors">
                  Orações
                </Link>
              </li>
              <li>
                <Link to="/biblia" className="hover:text-spirit-gold transition-colors">
                  Bíblia
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4">Recursos</h4>
            <ul className="space-y-2 text-dark-400 text-sm">
              <li>
                <Link to="/sobre" className="hover:text-spirit-gold transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="hover:text-spirit-gold transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="hover:text-spirit-gold transition-colors">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-spirit-gold transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-dark-400 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>contato@vidacomdeus.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-dark-400 text-sm">
            <p>&copy; {currentYear} Vida com Deus. Todos os direitos reservados.</p>
            <p>Feito com <Heart size={14} className="inline text-spirit-gold fill-current" /> para a comunidade cristã</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

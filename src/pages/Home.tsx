import { Link } from 'react-router-dom';
import { Flame, BookOpen, Heart, Zap } from 'lucide-react';
import { DevotionCard } from '@/components/DevotionCard';
import { useDevotionStore } from '@/store/useDevotionStore';

export const Home = () => {
  const { devotions } = useDevotionStore();
  const dailyDevotion = devotions[0]; // Mock daily devotion

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-dark-900 to-dark-950 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Bem-vindo ao <span className="text-spirit-gold">Vida com Deus</span>
            </h1>
            <p className="text-dark-300 text-lg mb-8">
              Explore devoções diárias, orações inspiradoras e reflexões espirituais para fortalecer sua fé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/devocoes"
                className="bg-spirit-gold text-dark-950 px-8 py-3 rounded-lg font-medium hover:bg-spirit-silver transition-colors"
              >
                Começar Agora
              </Link>
              <Link
                to="/sobre"
                className="border border-spirit-gold text-spirit-gold px-8 py-3 rounded-lg font-medium hover:bg-spirit-gold hover:text-dark-950 transition-colors"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Devotion */}
      {dailyDevotion && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Flame className="w-6 h-6 text-spirit-gold" />
              <h2 className="text-2xl font-serif font-bold text-white">Devoção de Hoje</h2>
            </div>
            <DevotionCard devotion={dailyDevotion} />
          </div>
        </section>
      )}

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">
          Recursos Principais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: BookOpen,
              title: 'Devoções Diárias',
              description: 'Mensagens inspiradoras para fortalecer sua fé todos os dias',
            },
            {
              icon: Heart,
              title: 'Orações',
              description: 'Coletânea de orações para diferentes momentos e necessidades',
            },
            {
              icon: BookOpen,
              title: 'Bíblia',
              description: 'Acesso a versículos bíblicos e reflexões espirituais',
            },
            {
              icon: Zap,
              title: 'Seu Progresso',
              description: 'Acompanhe seu crescimento espiritual diariamente',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-dark-900 border border-dark-800 rounded-lg p-6 hover:border-spirit-gold transition-colors group"
            >
              <div className="bg-dark-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-spirit-gold group-hover:text-dark-950 transition-colors">
                <feature.icon size={24} className="text-spirit-gold group-hover:text-dark-950" />
              </div>
              <h3 className="font-serif font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-dark-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Devotions */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-serif font-bold text-white">Devoções Recentes</h2>
          <Link to="/devocoes" className="text-spirit-gold hover:text-spirit-silver transition-colors">
            Ver Todas →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devotions.slice(0, 3).map((devotion) => (
            <DevotionCard key={devotion.id} devotion={devotion} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-dark-900 to-dark-800 border border-dark-700 rounded-lg container mx-auto px-4 py-12 my-16">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Pronto para sua jornada espiritual?
          </h2>
          <p className="text-dark-300 mb-8 max-w-2xl mx-auto">
            Junte-se a nossa comunidade e comece a explorar devoções, orações e reflexões que vão transformar sua vida espiritual.
          </p>
          <Link
            to="/devocoes"
            className="inline-block bg-spirit-gold text-dark-950 px-8 py-3 rounded-lg font-medium hover:bg-spirit-silver transition-colors"
          >
            Explorar Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

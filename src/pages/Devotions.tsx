import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { DevotionCard } from '@/components/DevotionCard';
import { useDevotionStore } from '@/store/useDevotionStore';

export const Devotions = () => {
  const { devotions } = useDevotionStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'morning', label: '🌅 Manhã' },
    { id: 'evening', label: '🌙 Noite' },
    { id: 'prayer', label: '🙏 Oração' },
    { id: 'reflection', label: '✨ Reflexão' },
  ];

  const filteredDevotions = devotions.filter((devotion) => {
    const matchesCategory = selectedCategory === 'all' || devotion.category === selectedCategory;
    const matchesSearch =
      devotion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      devotion.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-dark-950 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Devoções</h1>
          <p className="text-dark-300 max-w-2xl">
            Explore nossa coleção de devoções inspiradoras para fortalecer sua fé e espírito.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-dark-900 border border-dark-800 rounded-lg p-4 mb-8">
          <div className="flex items-center gap-3">
            <Search className="text-dark-500" size={20} />
            <input
              type="text"
              placeholder="Buscar devoções..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-dark-500 outline-none"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-spirit-gold" />
            <span className="text-white font-medium">Categorias</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-spirit-gold text-dark-950'
                    : 'bg-dark-900 text-dark-300 border border-dark-800 hover:border-spirit-gold'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {filteredDevotions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDevotions.map((devotion) => (
              <DevotionCard key={devotion.id} devotion={devotion} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-dark-400 mb-4">Nenhuma devoção encontrada.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-spirit-gold hover:text-spirit-silver transition-colors"
            >
              Limpar filtros
            </button>
          </div>
        )}

        {/* Results Count */}
        <div className="mt-8 text-center text-dark-400 text-sm">
          Mostrando {filteredDevotions.length} de {devotions.length} devoções
        </div>
      </div>
    </div>
  );
};

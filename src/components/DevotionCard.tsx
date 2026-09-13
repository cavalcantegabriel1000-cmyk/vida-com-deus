import { Devotion } from '@/types';
import { Bookmark, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DevotionCardProps {
  devotion: Devotion;
}

export const DevotionCard = ({ devotion }: DevotionCardProps) => {
  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      morning: '🌅 Manhã',
      evening: '🌙 Noite',
      prayer: '🙏 Oração',
      reflection: '✨ Reflexão',
    };
    return labels[category] || category;
  };

  return (
    <Link to={`/devocoes/${devotion.id}`}>
      <div className="bg-dark-900 border border-dark-800 rounded-lg p-6 hover:border-spirit-gold transition-all hover:shadow-lg hover:shadow-spirit-gold/20 cursor-pointer group">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-dark-800 text-spirit-gold text-xs font-medium rounded-full mb-2 group-hover:bg-spirit-gold group-hover:text-dark-950 transition-colors">
              {getCategoryLabel(devotion.category)}
            </span>
            <h3 className="text-xl font-serif font-bold text-white group-hover:text-spirit-gold transition-colors">
              {devotion.title}
            </h3>
          </div>
          <button className="text-dark-400 hover:text-spirit-gold transition-colors">
            <Bookmark size={20} />
          </button>
        </div>

        {/* Content Preview */}
        <p className="text-dark-300 text-sm mb-4 line-clamp-3">
          {devotion.content}
        </p>

        {/* Verse */}
        {devotion.verse && (
          <div className="bg-dark-800 border-l-2 border-spirit-gold px-4 py-2 mb-4 rounded">
            <p className="text-spirit-gold text-sm italic">{devotion.verse}</p>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between text-dark-400 text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User size={16} />
              <span>{devotion.author}</span>
            </div>
            {devotion.duration && (
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{devotion.duration} min</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

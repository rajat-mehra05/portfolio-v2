import React from 'react';
import { trackEvent } from 'lib/analytics';

interface VaultCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const VaultCard: React.FC<VaultCardProps> = ({
  title,
  description,
  image,
  link
}) => {
  const handleClick = () => {
    trackEvent('Clicked vault card', { title });
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className="group cursor-pointer rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Visit ${title}`}
    >
      <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VaultCard;


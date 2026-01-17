import { useCallback, memo } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { trackEvent } from 'lib/analytics';

interface BlogPostCardProps {
  title: string;
  slug: string;
  gradient: string;
}

const BlogPostCard = memo(function BlogPostCard({
  title,
  slug,
  gradient
}: BlogPostCardProps) {
  const handleClick = useCallback(() => {
    trackEvent('Clicked on blog post', { title, slug });
  }, [title, slug]);

  return (
    <Link
      href={`/blog/${slug}`}
      onClick={handleClick}
      className={cn(
        ' animate-scale',
        'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1',
        gradient
      )}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
        </div>
        <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
          <span className="font-medium align-baseline capsize">
            Read More
          </span>
        </div>
      </div>
    </Link>
  );
});

export default BlogPostCard;

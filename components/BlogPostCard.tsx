import Link from 'next/link';
import useSWR from 'swr';
import cn from 'classnames';

import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import { trackEvent } from 'lib/analytics';

export default function BlogPostCard({ title, slug, gradient }) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a
        onClick={() =>
          trackEvent('Clicked on blog post', {
            title,
            slug
          })
        }
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
      </a>
    </Link>
  );
}

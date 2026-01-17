import { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { trackEvent } from 'lib/analytics';

export default function BookCard({
  book
}: {
  book: { title: string; cover: string; author: string; slug: string };
}) {
  const handleClick = useCallback(() => {
    trackEvent('Clicked book card', { title: book.title });
  }, [book.title]);

  return (
    <Link
      href={`/books/${book.slug}`}
      onClick={handleClick}
      className="flex flex-col items-center justify-between border border-gray-200 dark:border-gray-800 rounded p-4"
    >
      <div className="mr-4 flex-shrink-0">
        <span className="flex w-[80px] relative mb-4 rounded-md shadow-xl overflow-hidden">
          <Image
            alt={book.title}
            src={`/logos/book-covers/${book.cover}`}
            width={80}
            height={120}
            className="w-full"
          />
        </span>
      </div>
      <div>
        <h4 className="text-lg font-bold">{book.title}</h4>
        <p className="mt-1">{book.author}</p>
      </div>
    </Link>
  );
}

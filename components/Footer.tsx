import Link from 'next/link';
import Image from 'next/image';

import clsx from 'clsx';
import React from 'react';
import { trackEvent } from 'lib/analytics';
import CurrentVisitorLocation from './CurrentVisitor';

export const ExternalLink = ({
  href,
  children,
  className
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <a
    onClick={() =>
      trackEvent('Clicked external link', {
        href
      })
    }
    className={clsx(
      'text-gray-500 hover:text-gray-600 transition cursor-newtab',
      className
    )}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

type Props = {
  location?: {
    city?: string;
    country?: string;
  };
};

export default function Footer(props: Props) {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2">
        <div className="flex flex-col space-y-4">
          <Link href="/" className="text-gray-500 hover:text-gray-600 transition">
            Home
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://x.com/_rajat_mehra_">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://linkedin.com/in/rajat-mehra-">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://github.com/rajat-mehra05">
            GitHub
          </ExternalLink>
        </div>
      </div>
      <CurrentVisitorLocation
        country={props?.location?.country ?? 'Unknown'}
        city={props?.location?.city ?? 'Unknown'}
      />
    </footer>
  );
}

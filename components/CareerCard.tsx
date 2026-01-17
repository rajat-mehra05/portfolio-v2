import { memo } from 'react';
import Image from 'next/image';
import { Career } from 'data/work/career';
import { ExternalLink } from './Footer';

type Props = {
  career: Career;
  last: boolean;
};

const CareerCard = memo(function CareerCard({
  career: { title, description, time, type, url, logo },
  last
}: Props) {
  return (
    <li className=" border border-gray-200 my-5 dark:border-gray-800 p-4 rounded-lg animate-scale">
      <div className="relative">
        {!last && (
          <span
            className="hidden md:block absolute top-4 left-3 md:left-5 h-full w-0.5 bg-accent"
            aria-hidden="true"
          />
        )}
        <div className="relative flex-col md:flex md:flex-row items-start md:space-x-3">
          <Image
            className="items-center justify-center mb-4 rounded-full md:flex"
            src={logo}
            alt={`${type} logo`}
            width={40}
            height={40}
          />
          <div className="w-full">
            <div className="flex-col items-center justify-between">
              <ExternalLink
                href={url}
                className="flex flex-col md:flex-row space-y-1 md:space-y-0"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-gray-200">
                  {type}
                </span>
              </ExternalLink>
              <p className="text-gray-500 text-sm mt-2 md:mt-0">{title}</p>
            </div>
            <p className="text-sm text-secondary text-gray-500">{time}</p>
            <p className="mb-1.5 mt-2 prose text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
});

export default CareerCard;

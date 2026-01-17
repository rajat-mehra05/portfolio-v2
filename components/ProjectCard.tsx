import React, { useCallback, memo } from 'react';
import {
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript
} from 'react-icons/si';
import cn from 'classnames';
import Link from 'next/link';
import { trackEvent } from 'lib/analytics';

const STACK_TO_ICON = {
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  typescript: SiTypescript,
  graphql: SiGraphql,
  mongodb: SiMongodb,
  posgresql: SiPostgresql
} as const;

interface ProjectCardProps {
  title: string;
  description: string;
  stack: Array<keyof typeof STACK_TO_ICON>;
  href: string;
  projectLogo: any;
  brandColor: string;
}

const ProjectCard = memo(function ProjectCard({
  title,
  description,
  href,
  projectLogo,
  stack,
  brandColor
}: ProjectCardProps) {
  const Logo = projectLogo;

  const handleClick = useCallback(() => {
    trackEvent('Clicked project card', { title });
  }, [title]);

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="mb-4 block w-full animate-scale"
      aria-label={title}
    >
      <div className="flex items-center justify-between border border-gray-200 dark:border-gray-800 rounded p-4">
        <div className="flex items-center">
          <div
            className={cn(
              ' ml-2 mr-4 !bg-opacity-10 bg-yellow-700 p-2 rounded-full'
            )}
          >
            <span className="sr-only">{title}</span>
            <Logo
              className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
              style={{ color: brandColor }}
            />
          </div>
          <div>
            <div className="flex space-x-2">
              <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {title}
              </h4>
            </div>
            <p className="leading-5 text-gray-700 dark:text-gray-300 ">
              {description}
            </p>
            <div className="flex flex-wrap mt-2 gap-2">
              {stack.map((stackItem) => {
                const Icon = STACK_TO_ICON[stackItem];
                return (
                  <span
                    key={stackItem}
                    className="inline-flex items-center py-1 text-xs font-semibold text-gray-600 dark:text-gray-300"
                  >
                    <span className="mr-1">
                      <Icon className="h-4 w-4" />
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
});

export default ProjectCard;

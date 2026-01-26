import { useCallback } from 'react';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript
} from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import ProjectCard from 'components/ProjectCard';
import { SocialMedia } from 'components/Icons';
import { Career, career } from 'data/work/career';
import CareerCard from 'components/CareerCard';
import { ExternalLink } from 'components/Footer';
import clsx from 'clsx';
import { trackEvent } from 'lib/analytics';
import { getCurrentVisitorLocation } from 'lib/location';

export default function Home({ location }) {
  const handleBlogCTAClick = useCallback(() => {
    trackEvent('Clicked all blog CTA', {});
  }, []);

  const handleProjectsCTAClick = useCallback(() => {
    trackEvent('Clicked all projects CTA', {});
  }, []);
  const redGradient =
    'bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-transparent bg-clip-text';
  return (
    <Container location={location}>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-6">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Hi, I'm Rajat!
            </h1>
            <div className="space-y-3 mt-2">
              <span className="inline-flex">
                <div className="text-gray-600 dark:text-gray-400 text-lg flex items-center">
                  <div className="flex items-center">
                    <p>
                      I work at{' '}
                      <ExternalLink
                        className="relative inline-flex items-center shrink-0 text-gray-900 dark:text-gray-200"
                        href={'https://wednesday.is'}
                      >
                        Wednesday Solutions
                      </ExternalLink>{' '}
                      as a software engineer.
                    </p>
                  </div>
                </div>
              </span>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                I have a passion for{' '}
                <span
                  className={clsx(
                    redGradient,
                    'transition-transform duration-500 ease-in-out hover:duration-300'
                  )}
                >
                  building scalable applications,{' '}
                </span>
                <span>specializing in </span> {'\n'}
                <span
                  className={clsx(
                    'bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-green-500',
                    'after:bg-gradient-to-r'
                  )}
                >
                  modern web technologies{' '}
                </span>
                and{' '}
                <span className="group relative">
                  <span
                    className={clsx(
                      'absolute -inset-0',
                      'bg-gradient-to-r from-blue-500 to-purple-400',
                      'rounded-lg opacity-20 blur group-hover:opacity-40 group-hover:blur-md',
                      'animate-tilt transition-all duration-300 ease-in-out'
                    )}
                  ></span>
                  <span className="relative bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
                    AI-powered solutions.
                  </span>
                </span>{' '}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                I care deeply about{' '}
                <span
                  className={clsx(
                    'bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent dark:from-pink-400 dark:to-orange-300',
                    'transition-transform duration-500 ease-in-out hover:duration-300'
                  )}
                >
                  accessibility
                </span>{' '}
                and believe great design should include{' '}
                <span
                  className={clsx(
                    'group relative transition-all duration-300 ease-in-out'
                  )}
                >
                  <span
                    className={clsx(
                      'absolute -inset-0',
                      'bg-gradient-to-r from-blue-500 to-green-400',
                      'rounded-lg opacity-20 blur group-hover:opacity-40 group-hover:blur-md',
                      'animate-tilt'
                    )}
                  ></span>
                  <span className="relative bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
                    everyone
                  </span>
                </span>
                . When I’m not coding, I’m usually{' '}
                <span
                  className={clsx(
                    'bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent dark:from-yellow-400 dark:to-amber-300',
                    'transition-transform duration-500 ease-in-out hover:duration-300'
                  )}
                >
                  playing outdoor games
                </span>
                , tackling a{' '}
                <span
                  className={clsx(
                    'bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-indigo-400',
                    'transition-transform duration-500 ease-in-out hover:duration-300'
                  )}
                >
                  Wordle
                </span>
                , or heading out on a{' '}
                <span
                  className={clsx(
                    'group relative transition-all duration-300 ease-in-out'
                  )}
                >
                  <span
                    className={clsx(
                      'absolute -inset-0',
                      'bg-gradient-to-r from-green-500 to-teal-400',
                      'rounded-lg opacity-20 blur group-hover:opacity-40 group-hover:blur-md',
                      'animate-tilt'
                    )}
                  ></span>
                  <span className="relative bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
                    trek
                  </span>
                </span>
                .
              </p>
            </div>

            <div className="mt-3 text-gray-600 dark:text-gray-400 mb-16 ">
              <div>My favorite tech &nbsp;</div>
              <div className="mt-2">
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiTypescript color={'#007acc'} />
                  <p>TypeScript</p>
                </div>
                &nbsp;
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiReact color={'#61DBFB'} />
                  <p>React</p>
                </div>
                &nbsp;
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiNextdotjs className="text-black dark:text-white" />
                  <p>Next.js</p>
                </div>
                &nbsp;
              </div>
            </div>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              src="/avatar.jpg"
              alt="Your handsome developer"
              width={176}
              height={176}
              className="aspect-1 rounded-full object-cover object-top pointer-events-none"
            />
          </div>
        </div>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          From the blog
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="Building Inclusive Web Experiences"
            slug="web-accessibility"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
          <BlogPostCard
            title="High Order Functions and Arrays in JavaScript"
            slug="javascript-array-methods-every-developer-should-know"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="bind(), call(), and apply() in JavaScript"
            slug="javascript-bind-call-apply-methods"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
        </div>
        <Link
          href="/blog"
          onClick={handleBlogCTAClick}
          className="group mt-8 text-gray-600 dark:text-gray-400 hover:text-gray-600 transition ease-in-out duration-200"
        >
          Explore all blogs{' '}
          <span
            aria-hidden="true"
            className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
          >
            →
          </span>
        </Link>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Projects
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I created a few projects to learn more about the technologies I use.
          You can check them out here. Let me know what you think!
        </p>
        <motion.ul className="w-full">
          <ProjectCard
            href="/projects/youtube-transcript-api"
            title="YouTube Transcript API"
            brandColor={'#0EA5E9'}
            projectLogo={SocialMedia}
            stack={['react', 'nextjs', 'typescript']}
            description="A lightweight JS/TS library for extracting YouTube transcripts. No API keys required."
          />
          <ProjectCard
            href="/projects/website-highlight-saver"
            title="Website Highlight Saver"
            brandColor={'#4F46E5'}
            projectLogo={SocialMedia}
            stack={['typescript', 'nodejs', 'react']}
            description="A Chrome extension for highlighting webpage text, saving locally, and generating AI summaries."
          />
          <ProjectCard
            href="/projects/hackerpedia"
            title="HackerPedia"
            brandColor={'#FF6600'}
            projectLogo={SocialMedia}
            stack={['react']}
            description="A modern Hacker News interface with real-time feeds, infinite scroll, nested comments, and dark mode."
          />
        </motion.ul>
        <Link
          href="/projects"
          onClick={handleProjectsCTAClick}
          className="group text-gray-600 dark:text-gray-400 hover:text-gray-600 transition ease-in-out duration-200"
        >
          See all projects{' '}
          <span
            aria-hidden="true"
            className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
          >
            →
          </span>
        </Link>
        <div>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Work Experience
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            My work experience so far.
          </p>
          <ul className="w-full ">
            {career.map((c: Career, index) => (
              <CareerCard
                key={c.title}
                last={index === career.length - 1}
                career={c}
              />
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export const getServerSideProps = getCurrentVisitorLocation;

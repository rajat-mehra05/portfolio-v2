import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import ProsCard from 'components/ProsCard';
import ConsCard from 'components/ConsCard';
import Step from 'components/Step';
import ImageWithTheme from 'components/ImageWithTheme';
import SplitImage from 'components/SplitImage';
import { Split } from 'components/SplitImage';
import { BlurImage } from 'components/BlurImage';
import { MdOutlineReplay } from 'react-icons/md';

import React, { useRef, useState } from 'react';
import clsx from 'clsx';

const LightBoxImage = dynamic(
  () => import('./LightboxImage').then((mod) => mod.LightBoxImage),
  { ssr: false }
);

import { KbdIcon } from './KBar/KBarFooter';

export function Pre(props: React.ComponentPropsWithRef<'pre'>) {
  return (
    <pre {...props}>
      {props.children}
      <style jsx>{`
        pre {
          position: relative;
          border-radius: 8px;
        }
      `}</style>
    </pre>
  );
}

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
  return (
    <Image alt={props.alt} className="rounded-lg overflow-hidden" {...props} />
  );
}

function Code(props: React.ComponentProps<'code'>) {
  const language = props.className?.includes('language')
    ? props.className.replace('language-', '').replace(' code-highlight', '')
    : null;
  return (
    <code {...props}>
      <span className={clsx('inline-block', language && 'mt-5')}>
        {language && (
          <div className="absolute top-0 mb-10 px-3 py-1 bg-gray-800 text-white border border-t-0 border-gray-600 rounded-b-md left-0">
            <span className="font-medium select-none ">{language}</span>
          </div>
        )}
        {props.children}
      </span>
    </code>
  );
}

type VideoPlayerProps = {
  videoPath: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoPath }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="w-full rounded-md"
        src={videoPath}
        style={{ marginBottom: '-5px' }}
        autoPlay
        muted
        playsInline
        controls={false}
        onEnded={handleVideoEnd}
      />

      {!isPlaying && (
        <button
          onClick={handleReplay}
          className="gap-1 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold"
        >
          <MdOutlineReplay /> Replay
        </button>
      )}
    </div>
  );
};

const HIGHLIGHT_COLORS = {
  pink: 'from-rose-500 via-pink-500 to-purple-500',
  blue: 'from-blue-500 to-purple-400',
  green: 'from-green-500 to-blue-600',
  emerald: 'from-emerald-500 to-teal-500',
  orange: 'from-pink-500 to-orange-400',
  amber: 'from-amber-500 to-yellow-400',
  indigo: 'from-indigo-500 to-purple-500',
  cyan: 'from-blue-400 via-cyan-400 to-green-500'
} as const;

type HighlightColor = keyof typeof HIGHLIGHT_COLORS;

function Highlight({
  children,
  color = 'blue'
}: {
  children: React.ReactNode;
  color?: HighlightColor;
}) {
  const gradient = HIGHLIGHT_COLORS[color] || HIGHLIGHT_COLORS.blue;
  return (
    <span
      className={clsx(
        'bg-gradient-to-r bg-clip-text text-transparent',
        gradient
      )}
    >
      {children}
    </span>
  );
}

const MDXComponents = {
  Image: RoundedImage,
  ImageWithTheme,
  a: CustomLink,
  ConsCard,
  ProsCard,
  Step,
  code: Code,
  SplitImage,
  Split,
  LightBoxImage,
  BlurImage,
  pre: Pre,

  VideoPlayer,
  KbdIcon,
  Highlight
};

export default MDXComponents;

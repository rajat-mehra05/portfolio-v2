import type { Action } from 'kbar';
import router from 'next/router';

import {
  HiOutlineCollection,
  HiOutlineDesktopComputer,
  HiOutlinePencil,
  HiOutlineSparkles,
  HiOutlineTerminal,
  HiOutlineArchive
} from 'react-icons/hi';

import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const SECTIONS = {
  blogs: 'Blogs',
  projects: 'Projects',
  dashboard: 'Dashboard',
  home: 'Home',
  tweets: 'Tweets',
  goto: 'Go to',
  general: 'General',
  socials: 'Socials'
};

export const actions: Array<Action> = [
  {
    id: 'blog',
    name: 'Writing',
    shortcut: ['b'],
    keywords: 'writing words blogs publications',
    perform: () => router.push('/blog'),
    section: SECTIONS.goto,
    subtitle: 'My thoughts on software engineering and React.JS',
    icon: HiOutlinePencil
  },
  {
    id: 'projects',
    name: 'Projects',
    shortcut: ['p'],
    keywords: 'creating projects',
    perform: () => router.push('/projects'),
    section: SECTIONS.goto,
    subtitle: 'Showcase of my projects I build over the last year.',
    icon: HiOutlineSparkles
  },
  {
    id: 'vault',
    name: 'Vault',
    shortcut: ['v'],
    keywords: 'vault tools resources',
    perform: () => router.push('/vault'),
    section: SECTIONS.goto,
    subtitle: 'Valuable tools and resources I have come across.',
    icon: HiOutlineArchive
  },

  {
    id: 'social-github',
    name: 'GitHub',
    keywords: 'github',
    perform: () => window.open('https://github.com/rajat-mehra05', '_blank'),
    section: SECTIONS.socials,
    icon: AiOutlineGithub
  },
  {
    id: 'social-linkedin',
    name: 'LinkedIn',
    keywords: 'linkedin',
    perform: () => window.open('https://www.linkedin.com/in/rajat-mehra05', '_blank'),
    section: SECTIONS.socials,
    icon: AiOutlineLinkedin
  },
  {
    id: 'social-twitter',
    name: 'Twitter',
    keywords: 'twitter',
    perform: () => window.open('https://x.com/_rajat_mehra_', '_blank'),
    section: SECTIONS.socials,
    icon: AiOutlineTwitter
  }
];

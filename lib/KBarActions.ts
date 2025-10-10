import type { Action } from 'kbar';
import router from 'next/router';

import {
  HiOutlineCollection,
  HiOutlineDesktopComputer,
  HiOutlinePencil,
  HiOutlineSparkles,
  HiOutlineTerminal
} from 'react-icons/hi';

import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';

const SECTIONS = {
  blogs: 'Blogs',
  projects: 'Projects',
  dashboard: 'Dashboard',
  home: 'Home',
  uses: 'Uses',
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
    id: 'uses',
    name: 'Uses',
    shortcut: ['u'],
    keywords: 'uses laptop phone wfh setup pc',
    perform: () => router.push('/uses'),
    section: SECTIONS.goto,
    subtitle: 'Gear that I use that make me productive',
    icon: HiOutlineDesktopComputer
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
    id: 'social-twitter',
    name: 'Twitter',
    keywords: 'twitter',
    perform: () => window.open('https://twitter.com/rajat_mehra05', '_blank'),
    section: SECTIONS.socials,
    icon: AiOutlineTwitter
  }
];

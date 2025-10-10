export type Career = {
  title: string;
  description: string;
  time: string;
  type: string;
  url: string;
  logo: string;
};

import { differenceInYears, differenceInMonths, subYears } from 'date-fns';

function calculateDifference(startDate: Date, endDate: Date) {
  let years = differenceInYears(endDate, startDate);
  let months = differenceInMonths(subYears(endDate, years), startDate);

  return `${years} years ${months} months`;
}

export const career: Array<Career> = [
  {
    title: 'Wednesday Solutions',
    description:
      'I work as a Software Engineer at Wednesday Solutions, Pune. I have migrated Next.js marketplaces from CSR to SSG, built component libraries with micro-frontends, integrated SDKs for real-time dashboards, and engineered AI-powered automation tools including Slack bots and sentiment analysis workflows.',

    time: `Sep 2022 - Sep 2025 • Full time • ${calculateDifference(
      new Date('2022-09-01'),
      new Date('2025-09-01')
    )}`,
    type: 'Software Engineer',
    url: 'https://wednesday-solutions.com/',
    logo: '/static/images/wednesday.jpeg'
  },
  {
    title: 'Crypto Owl',
    description:
      'During my tenure at Crypto Owl, I developed UI for 3 crypto websites, enhancing user experience and supporting product launches. I also built analytics dashboards for monitoring cryptocurrency performance, attracting 10K monthly users.',

    time: 'Feb 2022 - Apr 2022 • 3 months',
    type: 'Software Engineer',
    url: 'https://cryptoowl.com/',
    logo: '/static/images/cryptoOwl.jpeg'
  }
];

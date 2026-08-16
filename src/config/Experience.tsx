import AWS from '@/components/technologies/AWS';
import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    company: 'XpertLab Technologies Private Limited',
    position: 'Full Stack Developer Intern',
    location: 'Junagadh, India',
    image: '/company/XpertLab-Private-Limited.webp',
    description: [
      'Developed full-stack features for enterprise SaaS clients, focusing on modular high-performance architectures and scalable layouts.',
      'Architected Next.js App Router endpoints with server components delivering millisecond responsive visual endpoints.',
      'Designed relational database scaling integrations using PostgreSQL components and Prisma ORM configurations for strictly typed data streams.',
      'Engineered real-time bidirectional messaging pathways using Socket.IO streams supporting high-throughput concurrency streams.',
      'Assisted backend deployments integrating clean pipeline sets on AWS environments upholding standard enterprise operational workflows.',
    ],
    startDate: 'March 2026',
    endDate: 'April 2026',
    isCurrent: false,
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'NestJs',
        href: 'https://nestjs.com/',
        icon: <NestJs />,
      },
      {
        name: 'Prisma',
        href: 'https://www.prisma.io/',
        icon: <Prisma />,
      },
      {
        name: 'SocketIo',
        href: 'https://socket.io/',
        icon: <SocketIo />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'MongoDB',
        href: 'https://mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
    ],
    website: 'https://xpertlab.com/',
    // github: 'https://www.linkedin.com/company/xpertlab/',
    linkedin: 'https://www.linkedin.com/company/xpertlab/',
  },
];

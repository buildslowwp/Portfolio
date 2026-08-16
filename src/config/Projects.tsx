import AWS from '@/components/technologies/AWS';
import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'AlertWise',
    description:
      'Disaster Preparedness & Learning Platform loaded with interactive Assessments and robust Alert ready systems.',
    image: {
      light: '/project/alertwise-light.webp',
      dark: '/project/alertwise-dark.webp',
    },
    link: 'https://alertwise.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      {
        name: 'Clerk',
        icon: (
          <img
            src="https://cdn.simpleicons.org/clerk/000000"
            alt="Clerk"
            className="size-full dark:invert"
            key="clerk"
          />
        ),
      },
    ],
    github: 'https://github.com/Pujan Ratanpara/alertwise',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/alertwise',
    isWorking: true,
  },
  {
    title: 'Learnix',
    description:
      'A full-featured enterprise learning management system built with Next.js 15, Stream.io WebRTC, and Stripe payments.',
    image: {
      light: '/project/learnix-light.webp',
      dark: '/project/learnix-dark.webp',
    },
    link: 'https://learnix-tawny.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'AWS S3', icon: <AWS key="aws" /> },
      {
        name: 'Stripe',
        icon: (
          <img
            src="https://cdn.simpleicons.org/stripe/000000"
            alt="Stripe"
            className="size-full dark:invert"
            key="stripe"
          />
        ),
      },
      // { name: 'Stream.io', icon: <img src="https://api.iconify.design/lucide:satellite-dish.svg?color=black" alt="Stream.io" className="size-full dark:invert" key="stream" /> },
      {
        name: 'Clerk',
        icon: (
          <img
            src="https://cdn.simpleicons.org/clerk/000000"
            alt="Clerk"
            className="size-full dark:invert"
            key="clerk"
          />
        ),
      },
    ],
    github: 'https://github.com/Pujan Ratanpara/learnix',
    live: 'https://learnix-tawny.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/learnix',
    isWorking: true,
  },
  {
    title: 'Notiva',
    description:
      'Modern, collaborative note-taking with real-time editing and beautiful markdown support.',
    image: {
      light: '/project/notiva-light.webp',
      dark: '/project/notiva-dark.webp',
    },
    link: 'https://notiva-olive.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      // { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
      {
        name: 'Drizzle ORM',
        icon: (
          <img
            src="https://cdn.simpleicons.org/drizzle/000000"
            alt="Drizzle"
            className="size-full dark:invert"
            key="drizzle"
          />
        ),
      },
    ],
    github: 'https://github.com/Pujan Ratanpara/notiva',
    live: 'https://notiva-olive.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/notiva',
    isWorking: true,
  },
  {
    title: 'OrbitEvent',
    description:
      'AI-Powered Event Management Platform with tickets generation and QR check-in.',
    image: {
      light: '/project/orbitevent-light.webp',
      dark: '/project/orbitevent-dark.webp',
    },
    link: 'https://orbitevent.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      {
        name: 'Stripe',
        icon: (
          <img
            src="https://cdn.simpleicons.org/stripe/000000"
            alt="Stripe"
            className="size-full dark:invert"
            key="stripe"
          />
        ),
      },
      {
        name: 'Clerk',
        icon: (
          <img
            src="https://cdn.simpleicons.org/clerk/000000"
            alt="Clerk"
            className="size-full dark:invert"
            key="clerk"
          />
        ),
      },
    ],
    github: 'https://github.com/Pujan Ratanpara/orbit-event',
    live: 'https://orbit-event-zeta.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/orbitevent',
    isWorking: true,
  },
  {
    title: 'SyntaxShot',
    description:
      'A beautiful, feature-rich tool for creating stunning code snippets and browser mockups.',
    image: '/project/syntaxshot.webp',
    link: 'https://syntaxshot.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      {
        name: 'Zustand',
        icon: (
          <img
            src="https://api.iconify.design/vscode-icons:file-type-zustand.svg"
            alt="Zustand"
            className="size-full"
            key="zustand"
          />
        ),
      },
    ],
    github: 'https://github.com/Pujan Ratanpara/syntaxshot',
    live: 'https://screenshoot-studio.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/syntaxshot',
    isWorking: true,
  },
];

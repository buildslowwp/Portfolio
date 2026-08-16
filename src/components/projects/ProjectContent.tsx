import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ProjectCaseStudyFrontmatter } from '@/types/project';
import rehypeHighlight from '@shikijs/rehype';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

import Github from '../svgs/Github';
import Website from '../svgs/Website';
import { ProjectComponents } from './ProjectComponents';

const getTechColor = (tech: string) => {
  const normalized = tech.toLowerCase();
  const baseClass =
    'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider border border-zinc-800/80 bg-zinc-900/90 hover:bg-zinc-800/60 transition-all duration-200 shadow-sm';

  if (normalized.includes('next.js') || normalized.includes('nextjs')) {
    return `${baseClass} text-blue-400`;
  }
  if (normalized.includes('react')) {
    return `${baseClass} text-cyan-400`;
  }
  if (normalized.includes('tailwind')) {
    return `${baseClass} text-sky-400`;
  }
  if (normalized.includes('express')) {
    return `${baseClass} text-green-400`;
  }
  if (normalized.includes('typescript')) {
    return `${baseClass} text-blue-500`;
  }
  if (normalized.includes('mongodb')) {
    return `${baseClass} text-emerald-400`;
  }
  if (normalized.includes('aws') || normalized.includes('s3')) {
    return `${baseClass} text-orange-400`;
  }
  if (normalized.includes('clerk')) {
    return `${baseClass} text-purple-400`;
  }
  if (normalized.includes('stripe')) {
    return `${baseClass} text-indigo-400`;
  }
  if (normalized.includes('shadcn')) {
    return `${baseClass} text-zinc-300`;
  }
  if (normalized.includes('drizzle')) {
    return `${baseClass} text-lime-400`;
  }
  if (normalized.includes('node')) {
    return `${baseClass} text-emerald-500`;
  }

  return `${baseClass} text-zinc-400`;
};

interface ProjectContentProps {
  frontmatter: ProjectCaseStudyFrontmatter;
  content: string;
}

export function ProjectContent({ frontmatter, content }: ProjectContentProps) {
  const { title, description, image, technologies, github, live, status } =
    frontmatter;

  const statusVariant =
    status === 'completed'
      ? 'default'
      : status === 'in-progress'
        ? 'secondary'
        : 'outline';

  return (
    <article className="mx-auto max-w-4xl">
      {/* Hero Section */}
      <header className="mb-8 space-y-6">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          {typeof image === 'object' ? (
            <>
              <Image
                src={image.light}
                alt={title}
                fill
                className="object-cover dark:hidden"
                priority
              />
              <Image
                src={image.dark}
                alt={title}
                fill
                className="hidden object-cover dark:block"
                priority
              />
            </>
          ) : (
            <Image
              src={image as string}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>

        <div className="space-y-4">
          {/* Project Status and Technologies */}
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={statusVariant} className="text-sm">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
            {technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{technologies.length - 3} more
              </Badge>
            )}
          </div>

          <h1 className="text-4xl leading-tight font-bold lg:text-5xl">
            {title}
          </h1>

          <p className="text-muted-foreground text-xl">{description}</p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {live && (
              <Button asChild>
                <Link
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Website className="size-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {github && (
              <Button variant="outline" asChild>
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="size-4" />
                  Source Code
                </Link>
              </Button>
            )}
          </div>
        </div>

        <Separator />
      </header>

      {/* Technology Stack */}
      <div className="mb-8">
        <div className="bg-muted/20 rounded-lg border p-4">
          <h3 className="mb-3 text-lg font-semibold">Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <div key={tech} className={getTechColor(tech)}>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote
          source={content}
          components={ProjectComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypeHighlight,
                  {
                    theme: 'github-dark',
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}

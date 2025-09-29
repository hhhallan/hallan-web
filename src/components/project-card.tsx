import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Project } from '@/types/project';
import { GithubIcon, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Badge } from './ui/badge';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const {
    name,
    miniDescription,
    type,
    client,
    color,
    technologies,
    slug,
    showOnHomepage,
    disabled,
    webUrl,
    githubUrl,
    image,
  } = project;

  const techNames = Array.isArray(technologies)
    ? technologies
        .map((tech: any) => (typeof tech === 'string' ? tech : tech.tech))
        .filter((tech: any): tech is string => !!tech)
    : [];

  return (
    <Card
      className={cn(
        'flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg',
        disabled && 'hidden'
      )}
    >
      <Link
        href={webUrl || '#'}
        className={cn('block cursor-pointer', className)}
        target="_blank"
      >
        <div
          className="relative h-40 w-full rounded-t-md overflow-hidden"
          style={{ backgroundColor: color }}
        >
          <div className="flex items-center justify-center p-3">
            <div className="overflow-hidden rounded-t-sm">
              <Image
                src={image!.url}
                alt={name}
                className="h-auto w-full object-cover object-top"
                width={1200}
                height={1200}
              />
            </div>
          </div>
        </div>
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{name}</CardTitle>
          <span className="font-sans text-xs">{type}</span>
          <div className="hidden font-sans text-xs underline print:visible"></div>
          <ReactMarkdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {miniDescription}
          </ReactMarkdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {techNames.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {techNames.map(tech => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tech}
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        <div className="flex flex-row flex-wrap items-start gap-1">
          {webUrl && (
            <Link href={webUrl} target="_blank">
              <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                <Globe className="size-3" />
                <span>Website</span>
              </Badge>
            </Link>
          )}

          {githubUrl && (
            <Link href={githubUrl} target="_blank">
              <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                <GithubIcon className="size-3" />
                <span>Source</span>
              </Badge>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

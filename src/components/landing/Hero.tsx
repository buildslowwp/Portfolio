import { heroConfig, skillComponents, socialLinks } from '@/config/Hero';
import { parseTemplate } from '@/lib/hero';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import Skill from '../common/Skill';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

export default function Hero() {
  const { name, title, avatar, skills, description, buttons } = heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === 'skill' && 'skill' in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <span key={part.key} className="mx-1 inline-flex align-middle">
            <Skill name={part.skill.name} href={part.skill.href}>
              <SkillComponent />
            </Skill>
          </span>
        );
      } else if (part.type === 'bold' && 'text' in part) {
        return (
          <b key={part.key} className="text-primary font-medium">
            {part.text}
          </b>
        );
      } else if (part.type === 'text' && 'text' in part) {
        return <span key={part.key}>{part.text}</span>;
      }
      return null;
    });
  };

  return (
    <Container className="mx-auto max-w-5xl">
      {/* Image */}
      <Image
        src={avatar}
        alt="hero"
        width={112}
        height={112}
        className="size-28 rounded-full bg-[#A3B3FF] transition-transform duration-300 hover:scale-105 dark:bg-[#FFA1AD]"
      />

      <div className="mt-10 flex flex-col gap-3">
        <h1 className="font-archivo text-4xl font-extrabold tracking-tight text-pretty md:text-5xl">
          Hi, I&apos;m {name} — <span className="text-secondary">{title}</span>
        </h1>

        <p className="mt-4 text-base leading-relaxed text-pretty text-neutral-500 md:text-lg">
          {renderDescription()}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex gap-4">
        {buttons.map((button, index) => {
          const IconComponent =
            buttonIcons[button.icon as keyof typeof buttonIcons];
          return (
            <Button
              key={index}
              variant={button.variant as 'outline' | 'default'}
              className={cn(
                'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg',
                button.variant === 'outline' && 'inset-shadow-indigo-500',
                button.variant === 'default' && 'inset-shadow-indigo-500',
              )}
            >
              {IconComponent && <IconComponent />}
              <Link href={button.href}>{button.text}</Link>
            </Button>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="mt-10 flex gap-3">
        {socialLinks.map((link) => (
          <Tooltip key={link.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                key={link.name}
                className="text-secondary hover:text-foreground flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="size-6">{link.icon}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Container>
  );
}

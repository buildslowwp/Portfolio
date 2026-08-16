import React from 'react';

interface SectionHeadingProps {
  subHeading: string;
  heading: string;
}

export default function SectionHeading({
  subHeading,
  heading,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="text-secondary text-xs font-semibold tracking-widest uppercase">
        {subHeading}
      </p>
      <h2 className="font-archivo mt-1 text-3xl font-bold tracking-tight">
        {heading}
      </h2>
    </div>
  );
}

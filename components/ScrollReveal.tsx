'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  as?: 'section' | 'div';
  id?: string;
}

export default function ScrollReveal({
  children,
  className = '',
  as: Tag = 'div',
  id,
}: ScrollRevealProps) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <Tag
      id={id}
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

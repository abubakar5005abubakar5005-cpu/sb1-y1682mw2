import * as React from 'react';
import { cn } from '@/lib/utils';

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-[24px] border border-royal-border/50 bg-[rgba(23,9,16,0.8)] p-5 shadow-royal backdrop-blur-xl',
        className,
      )}
      {...props}
    />
  );
}

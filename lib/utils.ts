import * as React from 'react';
import { cn } from '@/lib/utils';

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-full border border-royal-border/60 bg-[rgba(255,255,255,0.02)] px-4 text-sm text-royal-ivory outline-none transition-all placeholder:text-royal-muted/80 focus:border-royal-goldLight focus:ring-2 focus:ring-royal-gold/30',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

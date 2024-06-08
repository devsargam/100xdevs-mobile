import { VariantProps, cva } from 'class-variance-authority';
import { Text as RNText, TextProps } from 'react-native';

import { cn } from '@/lib/cn';
import { createContext, useContext } from 'react';

const textVariants = cva('text-foreground', {
  variants: {
    variant: {
      default: 'text-foreground',
      primary: 'text-primary',
      'primary-lite': 'text-primary-foreground',
      secondary: 'text-secondary-foreground',
      muted: 'text-muted',
      accent: 'text-accent',
      destructive: 'text-destructive',
      'muted-lite': 'text-muted-foreground',
      'accent-lite': 'text-accent-foreground',
      'destructive-lite': 'text-destructive-foreground',
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

const TextClassContext = createContext<string | undefined>(undefined);

function Text({
  className,
  variant,
  size,
  ...props
}: TextProps & VariantProps<typeof textVariants>) {
  const textClassName = useContext(TextClassContext);
  return (
    <RNText
      className={cn(textVariants({ variant, size }), textClassName, className)}
      {...props}
    />
  );
}

export { Text, TextClassContext, textVariants };

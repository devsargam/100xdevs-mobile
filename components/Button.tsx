import { VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Pressable, PressableProps, View } from 'react-native';

import { cn } from '@/lib/cn';

const buttonVariants = cva(
  'flex items-center justify-center rounded transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        secondary: 'bg-secondary',
        muted: 'bg-muted',
        accent: 'bg-accent',
        destructive: 'bg-destructive',
        outline: 'bg-transparent border-2 border-primary',
        'outline-secondary': 'bg-transparent border-2 border-secondary',
        'outline-destructive': 'bg-transparent border-2 border-destructive',
        ghosted: 'bg-transparent',
      },
      size: {
        default: 'min-h-12 py-3.5 px-5',
        sm: 'min-h-9 py-2.5 px-3.5',
        lg: 'min-h-16 py-4 px-7',
        icon: 'aspect-square',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends PressableProps,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<View, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <View>
        <Pressable
          ref={ref}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        />
      </View>
    );
  }
);

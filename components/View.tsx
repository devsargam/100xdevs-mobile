import { VariantProps, cva } from "class-variance-authority";
import { createContext, useContext } from "react";
import { View as RNView, ViewProps } from "react-native";

import { cn } from "@/lib/cn";

const viewVariants = cva("text-foreground", {
  variants: {
    variant: {
      default: "",
      body: "bg-background",
      primary: "bg-primary",
      secondary: "bg-secondary",
      muted: "bg-muted",
      accent: "bg-accent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const ViewClassContext = createContext<string | undefined>(undefined);

function View({
  className,
  variant,
  ...props
}: ViewProps & VariantProps<typeof viewVariants>) {
  const viewClassName = useContext(ViewClassContext);
  return (
    <RNView
      className={cn(viewVariants({ variant }), viewClassName, className)}
      {...props}
    />
  );
}

export { View, ViewClassContext, viewVariants };

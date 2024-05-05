import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border hover:bg-brandDarker border-brand hover:border-brandDarker bg-brand rounded-[20px] text-white",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border hover:ring-1 hover:ring-black hover:brightness-95 border-gray-700 bg-accent rounded-[20px]",
        outlineBrand:
          "border hover:ring-1 hover:ring-brandDarker border-brand hover:border-brandDarker bg-transparent rounded-[20px] text-brand hover:text-brandDarker hover:bg-blue-300/20",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        showMore:
          "bg-accent text-muted-foreground hover:brightness-95 hover:text-black rounded-t-none rounded-b-lg w-full border-t",
        icon: "bg-transparent text-foreground hover:bg-black/5 aspect-square rounded-full",
        none: "",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "min-h-8 px-4",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

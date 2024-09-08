import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Define the button variants using CVA (class variance authority)
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-red-700 bg-zinc-800 hover:bg-zinc-700 text-red-700",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-5 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Create the Button component
const Button = ({ className, variant, size, asChild = false, ...props }) => {
  const Comp = asChild ? Slot : motion.button;

  return (
    <Comp
      whileHover={{ scale: 1.05 }} // Smooth pop animation on hover
      whileTap={{ scale: 0.95 }}   // Slight tap animation
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} // Spread both HTML and motion props
    />
  );
};

Button.displayName = "Button";

export { Button, buttonVariants };

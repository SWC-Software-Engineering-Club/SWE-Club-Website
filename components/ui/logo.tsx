import React, { useContext } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ThemeContext } from "@/components/theme-provider"; // Adjust the path accordingly

interface LogoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof logoVariants> {
  imagePath?: string;
  altText: string;
}

const logoVariants = cva("inline-block", {
  variants: {
    size: {
      default: "h-16 w-16", // Default size
      small: "h-10 w-10",
      large: "h-24 w-24",
    },
    rounded: {
      default: "rounded-full", // Default rounded shape
      square: "rounded-none",
    },
  },
  defaultVariants: {
    size: "default",
    rounded: "default",
  },
});

const Logo: React.FC<LogoProps> = ({
  className,
  size,
  rounded,
  imagePath,
  altText,
  ...props
}) => {
  return (
    <div className={cn(logoVariants({ size, rounded, className }))} {...props}>
      <img
        src="/logo-dark.png"
        alt={altText}
        className="w-full h-full object-cover rounded-full hidden dark:block"
      />
      <img
        src="/logo-light.png"
        alt={altText}
        className="w-full h-full object-cover rounded-full dark:hidden"
      />
    </div>
  );
};

export default Logo;

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

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
    <Link href="/">
      <div
        className={cn(logoVariants({ size, rounded, className }))}
        {...props}
      >
        <Image
          src="/logo-dark.png"
          alt={altText}
          className="w-full h-full object-cover rounded-full hidden dark:block"
          width={50}
          height={50}
        />
        <Image
          src="/logo-light.png"
          alt={altText}
          className="w-full h-full object-cover rounded-full dark:hidden"
          width={50}
          height={50}
        />
      </div>
    </Link>
  );
};

export default Logo;

import type { ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = {
  primary:
    "inline-flex text-preset-8 md:text-preset-8-desktop gap-150 border-b-3 uppercase border-white/0 hover:border-white/50",
  dotIndicator:
    "w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full bg-white/17 hover:bg-white/50",
  numberIndicator:
    "flex items-center justify-center text-preset-4 text-white h-1000 w-1000 rounded-full border-1 border-white/25 hover:border-white/100",
} as const;

type ButtonVariant = keyof typeof buttonVariants;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  className?: string;
  children?: ReactNode;
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`cursor-pointer ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

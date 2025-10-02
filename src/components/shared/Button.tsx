import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const button = tv({
  base: "px-4 py-2 rounded-lg font-medium focus:outline-none transition flex items-center gap-2 cursor-pointer font-raleway",
  variants: {
    variant: {
      primary:
        "bg-primary border-[1px] border-primary text-white hover:opacity-80",
      secondary: "bg-white border-[1px] hover:bg-black hover:text-white",
    },
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge([className || "", button({ variant, size })])}
      {...props}
    />
  );
};

export default Button;

import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

export default function Button({
  children,
  variant = "secondary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary: `
      bg-black
      text-white
      hover:opacity-80
    `,
    secondary: `
      bg-[#E5E5E5]
      text-black
      hover:opacity-80
    `,
    outline: `
      bg-transparent
      border
      border-black
      text-black
      hover:bg-black
      hover:text-white
    `,
  };

  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        h-[62px]
        px-10
        rounded-[20px]
        text-sm
        font-bold
        transition-all
        duration-200
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
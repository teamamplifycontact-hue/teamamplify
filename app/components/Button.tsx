import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export default function Button({
  children,
  className,
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        `
        inline-flex
        items-center
        justify-center
        h-[62px]
        px-10
        rounded-[20px]
        bg-[#E5E5E5]
        text-sm
        font-bold
        transition-opacity
        hover:opacity-80
        disabled:opacity-50
        disabled:cursor-not-allowed
        `,
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
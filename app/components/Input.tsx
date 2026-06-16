import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type BaseProps = {
  label: string;
  required?: boolean;
  error?: string;
};

type InputProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & {
    textarea?: false;
  };

type TextareaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    textarea: true;
  };

type Props = InputProps | TextareaProps;

export default function Input({
  label,
  required,
  error,
  textarea,
  ...props
}: Props) {
  const borderClass = error
    ? "border-red-500"
    : "border-[#BDBDBD]";

  return (
    <div className="w-full flex flex-col">
  <div className="flex flex-col gap-3">
    <label className="text-sm font-bold">
      {label}
      {required && (
        <span className="ml-1 text-red-500">*</span>
      )}
    </label>

    {textarea ? (
      <textarea
        {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        className={`
          w-full
          min-h-32
          rounded-[18px]
          border
          ${borderClass}
          bg-transparent
          px-5
          py-4
          outline-none
          resize-none
        `}
      />
    ) : (
      <input
        {...(props as InputHTMLAttributes<HTMLInputElement>)}
        className={`
          w-full
          h-[33px]
          rounded-[18px]
          border
          ${borderClass}
          bg-transparent
          px-5
          outline-none
        `}
      />
    )}
  </div>

  {error && (
    <p className="text-sm text-red-500">
      {error}
    </p>
  )}
</div>
  );
}
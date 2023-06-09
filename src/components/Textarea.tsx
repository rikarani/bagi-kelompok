import { forwardRef, useId } from "react";

type TextareaProps = {
  label: string;
  placeholder: string;
  baris: number;
  className: string;
  value?: string;
  readonly?: boolean;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ label, placeholder, baris, className, value, readonly = false }, ref) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id} className="text-lg font-semibold">
        {label}
      </label>
      <textarea placeholder={placeholder} value={value} id={id} rows={baris} ref={ref} className={className} readOnly={readonly}></textarea>
    </div>
  );
});

export default Textarea;

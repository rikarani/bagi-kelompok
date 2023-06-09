import { forwardRef, useId } from "react";

type TextareaProps = {
  labelText: string;
  baris: number;
  className: string;
  innerText?: string;
  readonly?: boolean;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ baris, labelText, className, innerText, readonly = false }, ref) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id} className="text-lg font-semibold">
        {labelText}
      </label>
      <textarea value={innerText} id={id} rows={baris} ref={ref} className={className} readOnly={readonly}></textarea>
    </div>
  );
});

export default Textarea;

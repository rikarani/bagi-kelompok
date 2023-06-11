import { forwardRef, useId } from "react";
import { TextareaProps } from "../interfaces/interfaces";

// * React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ label, placeholder, baris = 3, value, readonly = false, resize = true }, ref) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id} className="text-lg font-semibold">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        id={id}
        rows={baris}
        ref={ref}
        className={`form-textarea mt-0.5 box-border w-full ${resize ? "resize-y" : "resize-none"} rounded border-black px-1 py-0.5 focus:border-transparent focus:ring-1 focus:ring-black`}
        readOnly={readonly}
        required={true}
      ></textarea>
    </div>
  );
});

export default Textarea;

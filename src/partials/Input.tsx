import { forwardRef } from "react";

interface InputProps {
  label: string;
  placeholder: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, placeholder }, ref) => {
  return (
    <div className="sm:w-1/2">
      <label htmlFor="inputBanyakAnggota" className="text-lg font-semibold">
        {label}
      </label>
      <input placeholder={placeholder} className="form-input mb-2 box-border w-full resize-y rounded border-black px-4 py-2 focus:border-transparent focus:ring-1 focus:ring-black" ref={ref} id="inputBanyakAnggota" type="number" />
    </div>
  );
});

export default Input;

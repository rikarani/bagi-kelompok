import { forwardRef } from "react";

type InputProps = {
  labelText: string;
  placeholderText: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ labelText, placeholderText }, ref) => {
  return (
    <div>
      <label htmlFor="inputBanyakAnggota" className="text-lg font-semibold">
        {labelText}
      </label>
      <input placeholder={placeholderText} className="form-input mb-2 box-border w-full resize-y rounded border-black px-1 py-0.5 focus:border-transparent focus:ring-1 focus:ring-black" ref={ref} id="inputBanyakAnggota" type="number" />
    </div>
  );
});

export default Input;

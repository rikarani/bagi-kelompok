import { forwardRef } from "react";

type InputProps = {
  text: string;
  className: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ text, className }, ref) => {
  return (
    <div>
      <label htmlFor="inputBanyakAnggota" className="text-lg font-semibold">
        {text}
      </label>
      <input className={className} ref={ref} id="inputBanyakAnggota" type="number" />
    </div>
  );
});

export default Input;

import React from "react";
import { ButtonProps } from "../interfaces/interfaces";

function Button({ text, onClick }: ButtonProps): React.JSX.Element {
  return (
    <button onClick={onClick} className="mb-2 w-full self-end rounded bg-slate-500 px-4 py-2 text-slate-100 hover:bg-slate-600 sm:w-1/2">
      {text}
    </button>
  );
}

export default Button;

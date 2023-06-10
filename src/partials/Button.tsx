import React from "react";

interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ text, onClick }: ButtonProps): React.JSX.Element {
  return (
    <button onClick={onClick} className="mb-2 w-full self-end rounded-lg bg-slate-500 px-4 py-2 text-slate-100 hover:bg-slate-600 sm:w-1/2">
      {text}
    </button>
  );
}

export default Button;

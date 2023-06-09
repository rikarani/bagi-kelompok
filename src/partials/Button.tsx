import React from "react";

type ButtonProps = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({ text, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="rounded-lg bg-slate-500 px-4 py-2 text-slate-100 hover:bg-slate-600">
      {text}
    </button>
  );
}

export default Button;

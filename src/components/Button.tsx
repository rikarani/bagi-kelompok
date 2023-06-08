type ButtonProps = {
  text: string;
};

function Button({ text }: ButtonProps) {
  return (
    <button onClick={() => alert("Selamat, Aplikasi Gagal")} className="rounded-lg bg-cyan-300 px-4 py-2 hover:bg-cyan-400">
      {text}
    </button>
  );
}

export default Button;

import React, { useRef } from "react";
import Textarea from "../partials/Textarea";
import Input from "../partials/Input";
import Button from "../partials/Button";
import Hasil from "./Hasil";
import Summary from "./Summary";

// type Test = never[] | string[] | string[][] | string | undefined;

function Main(): React.JSX.Element {
  // const [data, setData] = useState<Test>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const testData: string[][] = [
    ["Andi", "Ikbal", "Furqon"],
    ["Jaka", "Adi", "Baskara"],
    ["Ucok", "Ali", "Baba"],
    ["Kurniawan", "Ahmad", "Edo"],
    ["Ica", "Tasya", "Rizki"],
  ];

  return (
    <div className="divide-y-2 divide-black rounded bg-slate-500/40 px-2 py-1">
      <div className="mb-1 divide-y-2 divide-black">
        {/* Inputan */}
        <div className="w-full">
          <Textarea ref={textareaRef} baris={5} label="Masukkan Nama Semua Orang" placeholder="cth: Adit, Ujang, Ucok, Ucup, Budi" />

          <div className="sm:flex sm:gap-2">
            <Input ref={inputRef} label="Jumlah Anggota per Kelompok" placeholder="cth: 3" />
            <Button onClick={() => alert("Selamat, Aplikasi Gagal")} text="Test" />
          </div>
        </div>
        {/* Inputan */}

        {/* Hasil */}
        <div>
          <Hasil sourceData={testData} />
        </div>
        {/* Hasil */}
      </div>

      {/* Summary */}
      <div>
        <Summary sourceData={testData} />
      </div>
      {/* Summary */}
    </div>
  );
}

export default Main;

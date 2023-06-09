import { useRef } from "react";
import Usage from "./Usage";
import Textarea from "../partials/Textarea";
import Input from "../partials/Input";
import Button from "../partials/Button";

function Main(): JSX.Element {
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
    <div className="w-full divide-y-2 divide-black px-2 py-1">
      {/* Cara Pakai */}
      <Usage />
      {/* Cara Pakai */}

      <div>
        <div className="mt-2 flex divide-x-2 divide-black rounded bg-slate-500/40 px-2 py-1">
          {/* Inputan */}
          <div className="mr-2 w-1/2">
            <div className=" flex w-full flex-col">
              <Textarea baris={5} label="Masukkan Nama Semua Orang" placeholder="cth: Adit, Ujang, Ucok, Ucup, Budi" ref={textareaRef} />

              <Input ref={inputRef} label="Jumlah Anggota per Kelompok" placeholder="cth: 3" />
              <Button onClick={() => alert("Selamat, Aplikasi Gagal")} text="gaskan" />
            </div>
          </div>
          {/* Inputan */}

          {/* Hasil */}
          <div>
            <div className="ml-2">
              <h6 className="text-lg font-semibold">Hasil Pembagian Kelompok</h6>
              <div className="grid grid-cols-3 gap-2">
                {testData.map((data: string[], index: number) => {
                  const member: string = data.join(" ").replace(/\s+/g, "\n");

                  return (
                    <div key={index}>
                      <Textarea value={member} label={`Kelompok ${index + 1}`} baris={3} readonly={true} resize={false} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Hasil */}
        </div>
      </div>
    </div>
  );
}

export default Main;

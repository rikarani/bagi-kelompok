import { useContext, useRef } from "react";
import { KelompokContext, CombinationContext } from "../context/contexts";
import { chunkify, kombinasi } from "../utils/util";
import Textarea from "../partials/Textarea";
import Input from "../partials/Input";
import Button from "../partials/Button";

function Inputan(): React.JSX.Element {
  const { setDataKelompok } = useContext(KelompokContext);
  const { setDataKombinasi } = useContext(CombinationContext);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    if (textareaRef.current !== null && inputRef.current !== null) {
      const data: string = textareaRef.current.value;
      const size: number = parseInt(inputRef.current.value);

      const isTextAreaValid: boolean = textareaRef.current.checkValidity();
      const isInputValid: boolean = textareaRef.current.checkValidity();

      if (isTextAreaValid && isInputValid) {
        setDataKelompok(chunkify(data, size));
        setDataKombinasi(kombinasi(data, size));
      }
    }
  }

  return (
    <div className="w-full">
      <Textarea ref={textareaRef} label="Masukkan Nama Semua Orang" placeholder="cth: Adit, Ujang, Ucok, Ucup, Budi" />

      <div className="sm:flex sm:gap-2">
        <Input ref={inputRef} label="Jumlah Anggota per Kelompok" placeholder="cth: 3" />
        <Button onClick={handleClick} text="Generate" />
      </div>
    </div>
  );
}

export default Inputan;

import { useContext } from "react";
import { KelompokContext } from "../context/contexts";
import Textarea from "../partials/Textarea";
interface HasilProps {
  sourceData: string[][];
}

function Hasil({ sourceData }: HasilProps): React.JSX.Element {
  const { dataKelompok } = useContext(KelompokContext);

  const baris: number = dataKelompok[0]?.length;

  return (
    <>
      <h6 className="text-lg font-semibold">Hasil Pembagian Kelompok</h6>
      <div className="grid grid-cols-3 gap-2">
        {sourceData.map((data: string[], index: number) => {
          const member: string = data.join(" ").replace(/\s+/g, "\n");

          return <Textarea key={index} value={member} label={`Kelompok ${index + 1}`} baris={baris} readonly={true} resize={false} />;
        })}
      </div>
    </>
  );
}
export default Hasil;

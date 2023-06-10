import React from "react";
import Textarea from "../partials/Textarea";

interface HasilProps {
  sourceData: string[][];
}

function Hasil({ sourceData }: HasilProps): React.JSX.Element {
  return (
    <div className="sm:ml-2">
      <h6 className="text-lg font-semibold">Hasil Pembagian Kelompok</h6>
      <div className="grid grid-cols-3 gap-2">
        {sourceData.map((data: string[], index: number) => {
          const member: string = data.join(" ").replace(/\s+/g, "\n");

          return <Textarea key={index} value={member} label={`Kelompok ${index + 1}`} baris={3} readonly={true} resize={false} />;
        })}
      </div>
    </div>
  );
}
export default Hasil;

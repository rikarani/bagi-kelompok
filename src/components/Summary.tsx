import React, { useContext } from "react";
import { KelompokContext, CombinationContext } from "../context/contexts";

function Summary(): React.JSX.Element {
  const { dataKelompok } = useContext(KelompokContext);
  const { dataKombinasi } = useContext(CombinationContext);

  const tester: number = dataKelompok[0]?.length;

  return (
    <details>
      <summary className="cursor-pointer text-lg font-semibold">{dataKombinasi.length <= 1 ? "Tidak Ada " : `Ada ${dataKombinasi.length} `} Kombinasi</summary>
      <div className={`${tester >= 4 ? `flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3` : `grid grid-cols-2 sm:grid-cols-3`}`}>
        {dataKombinasi.map((item: string[], idx: number) => {
          const isMatch: boolean = dataKelompok.some((subArray) => subArray.length === item.length && subArray.every((value) => item.includes(value)));

          return (
            <span key={idx} className={isMatch ? "text-lg font-semibold" : ""}>
              {JSON.stringify(item)}
            </span>
          );
        })}
      </div>
    </details>
  );
}

export default Summary;

import { useState } from "react";
import { KelompokContext, CombinationContext } from "../context/contexts";
import { useIsFirstRender } from "usehooks-ts";
import Hasil from "./Hasil";
import Summary from "./Summary";
import Inputan from "./Inputan";

function Main(): React.JSX.Element {
  const firstRender: boolean = useIsFirstRender();
  const [dataKelompok, setDataKelompok] = useState<never[] | string[][]>([]);
  const [dataKombinasi, setDataKombinasi] = useState<never[] | string[][]>([]);

  return (
    <div className="mt-4 divide-y-2 divide-black rounded bg-slate-500/40 px-2 py-1">
      <CombinationContext.Provider value={{ dataKombinasi, setDataKombinasi }}>
        <KelompokContext.Provider value={{ dataKelompok, setDataKelompok }}>
          <div className="mb-1 divide-y-2 divide-black">
            <Inputan />

            <div className={firstRender ? "hidden" : "block"}>
              <Hasil sourceData={dataKelompok} />
            </div>
          </div>

          <div className={firstRender ? "hidden" : "block"}>
            <Summary />
          </div>
        </KelompokContext.Provider>
      </CombinationContext.Provider>
    </div>
  );
}

export default Main;

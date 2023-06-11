import { createContext } from "react";
import { KelompokContextInterface, CombinationContextInterface } from "../interfaces/interfaces";

// * React.Context<KelompokContextInterface>
const KelompokContext = createContext<KelompokContextInterface>({
  dataKelompok: [],
  setDataKelompok: () => {},
});

// * React.Context<CombinationContextInterface>
const CombinationContext = createContext<CombinationContextInterface>({
  dataKombinasi: [[]],
  setDataKombinasi: () => {},
});

export { KelompokContext, CombinationContext };

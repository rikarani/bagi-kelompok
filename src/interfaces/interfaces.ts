import React, { SetStateAction } from "react";

// * Context Interfaces
interface KelompokContextInterface {
  dataKelompok: never[] | string[][];
  setDataKelompok: React.Dispatch<SetStateAction<never[] | string[][]>>;
}

interface CombinationContextInterface {
  dataKombinasi: never[] | string[][];
  setDataKombinasi: React.Dispatch<SetStateAction<never[] | string[][]>>;
}

// * Props Interfaces
interface TextareaProps {
  label: string;
  baris?: number;
  placeholder?: string;
  resize?: boolean;
  value?: string;
  readonly?: boolean;
}

interface InputProps {
  label: string;
  placeholder: string;
}

interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export type { KelompokContextInterface, CombinationContextInterface };
export type { TextareaProps, InputProps, ButtonProps };

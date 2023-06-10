import React from "react";
import { IconContext } from "react-icons/lib/esm/iconContext";
import { BsGithub } from "react-icons/bs";
import Usage from "./Usage";

function Header(): React.JSX.Element {
  return (
    <div className="px-2 py-1">
      <div className="flex items-center gap-2">
        <IconContext.Provider value={{ size: "3.5rem" }}>
          <a href="https://github.com/rikarani/bagi-kelompok" target="_blank">
            <BsGithub />
          </a>
        </IconContext.Provider>
        <div>
          <h1 className="text-2xl font-semibold">Bagi Kelompok</h1>
          <h2>Projek UAS Mata Kuliah Probabilitas dan Statistik</h2>
        </div>
      </div>
      <div className="mt-2">
        <Usage />
      </div>
    </div>
  );
}

export default Header;

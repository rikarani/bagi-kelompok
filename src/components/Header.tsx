import React from "react";
import { IconContext } from "react-icons/lib/esm/iconContext";
import { BsGithub } from "react-icons/bs";

function Header(): React.JSX.Element {
  return (
    <div className="flex items-center gap-2 px-2 py-1">
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
  );
}

export default Header;

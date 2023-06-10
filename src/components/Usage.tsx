import React from "react";
interface UsagesInterface {
  id: number;
  desc: string;
}

function Usage(): React.JSX.Element {
  const usages: UsagesInterface[] = [
    {
      id: 1,
      desc: "Masukkan Nama (pisahkan dengan enter, spasi, atau koma)",
    },
    {
      id: 2,
      desc: "Masukkan Banyaknya Anggota per Kelompok (minimal 2)",
    },
    {
      id: 3,
      desc: "Tekan Tombol Generate buat bikin kelompok",
    },
  ];

  return (
    <>
      <h6 className="text-lg font-semibold">Cara Pakai</h6>
      <ol className="flex list-inside list-decimal flex-col gap-1.5">
        {usages.map((usage) => {
          return <li key={usage.id}>{usage.desc}</li>;
        })}
      </ol>
    </>
  );
}

export default Usage;

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
      desc: "Tekan Tombol Generate buat bikin kelompok (tombol bisa di-klik berkali-kali untuk mendapatkan hasil yang berbeda)",
    },
  ];

  return (
    <div>
      <h6 className="text-lg font-semibold">Cara Pake</h6>
      <ol className="flex list-inside list-decimal flex-col gap-1.5 last:mb-1">
        {usages.map((usage) => {
          return <li key={usage.id}>{usage.desc}</li>;
        })}
      </ol>
    </div>
  );
}

export default Usage;

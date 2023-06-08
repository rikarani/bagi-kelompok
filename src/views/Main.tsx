import Button from "../components/Button";

type UsageType = {
  id: number;
  rule: string;
};

function Main(): JSX.Element {
  const usages: UsageType[] = [
    {
      id: 1,
      rule: "Masukkan Nama (dipisahkan dengan enter, spasi, atau koma)",
    },
    {
      id: 2,
      rule: "Masukkan Banyaknya Anggota per Kelompok (minimal 2)",
    },
    {
      id: 3,
      rule: "Tekan Tombol Generate buat bikin kelompok (tombol bisa di-klik berkali-kali untuk mendapatkan hasil yang berbeda)",
    },
  ];

  return (
    <div className="px-2 py-1">
      <ol className="flex list-inside list-decimal flex-col gap-2.5">
        {usages.map((usage) => {
          return <li key={usage.id}>{usage.rule}</li>;
        })}
      </ol>
      <Button text="gaskan" />
    </div>
  );
}

export default Main;

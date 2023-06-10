interface SummaryProps {
  sourceData: string[][];
}

function Summary({ sourceData }: SummaryProps) {
  return (
    <details>
      <summary className="cursor-pointer text-lg font-semibold">Ini Summary</summary>
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {sourceData.map((item, index) => {
          const comb = `[${item.join(" ").replace(/\s+/g, ", ")}]`;

          return <span key={index}>{comb}</span>;
        })}
      </div>
    </details>
  );
}

export default Summary;

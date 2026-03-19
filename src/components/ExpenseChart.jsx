import { PieChart, Pie, Cell, Tooltip, LabelList } from "recharts";
import formatRupiah from "../utils/formatRupiah";

export default function ExpenseChart({ data }) {
  const COLORS = [
    "#0b4695",
    "#0f5fc9",
    "#317bdf",
    "#639be5",
    "#95baea",
    "#ccdcf0",
  ];

  if (data.length === 0) {
    return <p>Tidak ada data</p>;
  }

  const total = data.reduce((a, b) => a + b.value, 0);

  return (
    <div className="flex flex-col items-center">
      <PieChart width={240} height={270}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={50}
          outerRadius={110}
        >
          <LabelList
            fill="white"
            fontWeight="bold"
            position="inside"
            valueAccessor={(_, index) => {
              if (!data[index]) return "";
              const percent = data[index].value / total;
              if (percent < 0.05) return "";

              return `${(percent * 100).toFixed(0)}%`;
            }}
          />
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
              className="hover:grayscale cursor-pointer"
            />
          ))}
        </Pie>

        <Tooltip
          formatter={(value, name) => [`${formatRupiah(value)}`, name]}
        />
      </PieChart>

      <div className="grid grid-cols-3 gap-x-5 mt-4 w-full space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />

              <span className="text-sm">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

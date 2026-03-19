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
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={40}
          outerRadius={100}
        >
          <LabelList
            fill="white"
            fontWeight="bold"
            position="inside"
            valueAccessor={(_, index) => {
              const item = data[index];
              const percent = item.value / total;

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

      <div className="grid sm:grid-cols-2 sm:gap-x-20 mt-4 w-75 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />

              <span className="text-sm">{item.name}</span>
            </div>

            <span className="text-sm font-semibold">
              {((item.value / total) * 100).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

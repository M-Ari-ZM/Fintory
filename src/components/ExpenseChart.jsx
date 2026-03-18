import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function ExpenseChart({ data }) {
  const COLORS = [
    "#ef4444",
    "#f97316",
    "#facc15",
    "#22c55e",
    "#3b82f6",
    "#a855f7",
  ];

  if (data.length === 0) {
    return <p>Tidak ada data</p>;
  }

  const total = data.reduce((a, b) => a + b.value, 0);

  return (
    <div className="flex flex-col items-center">
      <PieChart width={300} height={250}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={100}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>

      <div className="grid sm:grid-cols-2 sm:gap-x-20 mt-4 w-full space-y-2">
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

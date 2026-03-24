import { SlidersHorizontal } from "lucide-react";

export default function FilterSelect({ value, onChange }) {
  return (
    <div className="relative w-full">
      <SlidersHorizontal
        className="absolute left-3 top-3 text-gray-400"
        size={16}
      />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-gray-100 border border-gray-300 p-2 pl-9 w-full rounded-md appearance-none"
      >
        <option value="all">Semua</option>
        <option value="income">Pemasukan</option>
        <option value="expense">Pengeluaran</option>
      </select>
    </div>
  );
}

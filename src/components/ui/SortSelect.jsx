import { ArrowUpWideNarrow } from "lucide-react";

export default function SortSelect({ value, onChange }) {
  return (
    <div className="relative w-full">
      <ArrowUpWideNarrow
        className="absolute left-3 top-3 text-gray-400"
        size={16}
      />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-gray-100 border border-gray-300 p-2 pl-9 w-full rounded-md appearance-none"
      >
        <option value="latest">Terbaru</option>
        <option value="oldest">Terlama</option>
        <option value="highest">Jumlah Tertinggi</option>
        <option value="lowest">Jumlah Terendah</option>
      </select>
    </div>
  );
}

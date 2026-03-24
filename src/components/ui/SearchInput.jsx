import { Search } from "lucide-react";

export default function SearchInput({ value, onChange }) {
  return (
    <div className="relative mt-2">
      <Search className="absolute left-3 top-3 text-gray-400" size={16} />
      <input
        type="text"
        placeholder="Cari transaksi..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-100 border border-gray-300 p-2 pl-9 rounded-md"
      />
    </div>
  );
}

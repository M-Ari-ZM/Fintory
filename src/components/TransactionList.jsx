import { useState } from "react";
import {
  Pencil,
  Trash,
  Search,
  SlidersHorizontal,
  ArrowUpWideNarrow,
  RotateCcw,
} from "lucide-react";
import formatDate from "../utils/formatDate";
import formatRupiah from "../utils/formatRupiah";

export default function TransactionList({ transactions, onDelete, onEdit }) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  let filtered = [...transactions];

  //   SEARCH
  filtered = filtered.filter((t) =>
    t.desc.toLowerCase().includes(search.toLowerCase()),
  );

  //   FILTER
  if (typeFilter !== "all") {
    filtered = filtered.filter((t) => t.type === typeFilter);
  }

  //   SORT
  filtered.sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(a.date) - new Date(b.date);
    }

    if (sortBy === "oldest") {
      return new Date(b.date) - new Date(a.date);
    }

    if (sortBy === "highest") {
      return a.amount - b.amount;
    }

    if (sortBy === "lowest") {
      return b.amount - a.amount;
    }

    return 0;
  });

  const isFiltered = typeFilter !== "all" || sortBy !== "latest";

  function handleReset() {
    setTypeFilter("all");
    setSortBy("latest");
  }

  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4 hover:shadow-md hover:-translate-y-1 transition space-y-2">
      <div className="sm:flex sm:justify-between">
        <h2 className="font-bold mb-3">Transaksi</h2>

        {/* FILTER */}
        <div className="flex gap-2">
          {isFiltered && (
            <button
              onClick={handleReset}
              className="bg-gray-100 text-red-600 border border-red-300 p-2 rounded-md"
            >
              <RotateCcw />
            </button>
          )}

          <div className="relative w-full">
            <SlidersHorizontal
              className="absolute left-3 top-3/10 text-gray-400"
              size={16}
            />
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-gray-100 border border-gray-300 p-2 pl-9 w-full rounded-md appearance-none"
            >
              <option value="all">Semua</option>
              <option value="income">Pemasukan</option>
              <option value="expense">Pengeluaran</option>
            </select>
          </div>

          <div className="relative w-full">
            <ArrowUpWideNarrow
              className="absolute left-3 top-3/10 text-gray-400"
              size={16}
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-100 border border-gray-300 p-2 pl-9 w-full rounded-md appearance-none"
            >
              <option value="latest">Terbaru</option>
              <option value="oldest">Terlama</option>
              <option value="highest">Jumlah Tertinggi</option>
              <option value="lowest">Jumlah Terendah</option>
            </select>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="relative">
        <Search className="absolute left-3 top-3/10 text-gray-400" size={16} />
        <input
          type="text"
          placeholder="Cari transaksi..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-100 border border-gray-300 p-2 pl-9 rounded-md"
        />
      </div>

      <div className="max-h-113 space-y-3 overflow-y-scroll">
        {filtered.length === 0 && (
          <p className="text-center">Belum ada transaksi</p>
        )}

        {filtered.reverse().map((t) => (
          <div
            key={t.id}
            className={
              t.type === "income"
                ? "sm:flex border border-gray-300 bg-green-50 my-3 justify-between rounded-md p-4"
                : "sm:flex border border-gray-300 bg-red-50 my-3 justify-between rounded-md p-4"
            }
          >
            <div className="flex justify-between sm:justify-between w-full  sm:mr-4 sm:pr-3 sm:border-r-2 sm:border-gray-300">
              <div>
                <p className="text-lg">{t.desc}</p>
                <p className="text-xs text-gray-500">{formatDate(t.date)}</p>
              </div>
              <span
                className={
                  t.type === "income"
                    ? "text-green-600 text-lg sm:text-2xl font-bold"
                    : "text-red-600 text-lg sm:text-2xl font-bold"
                }
              >
                {formatRupiah(t.amount)}
              </span>
            </div>

            <div className="flex gap-2 justify-end mt-2 sm:mt-0">
              <button
                onClick={() => onEdit(t)}
                className="text-blue-500 justify-items-center bg-blue-200 w-11 h-11 rounded-md"
              >
                <Pencil />
              </button>

              <button
                onClick={() => {
                  if (confirm("Yakin ingin menghapus?")) {
                    onDelete(t.id);
                  }
                }}
                className="text-red-500 justify-items-center bg-red-200 w-11 h-11 rounded-md"
              >
                <Trash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

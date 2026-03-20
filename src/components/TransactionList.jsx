import { useState } from "react";

export default function TransactionList({ transactions }) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  let filtered = [...transactions];

  filtered = filtered.filter((t) =>
    t.desc.toLowerCase().includes(search.toLowerCase()),
  );

  if (typeFilter !== "all") {
    filtered = filtered.filter((t) => t.type === typeFilter);
  }

  filtered.sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.date) - new Date(a.date);
    }

    if (sortBy === "oldest") {
      return new Date(a.date) - new Date(b.date);
    }

    if (sortBy === "highest") {
      return b.amount - a.amount;
    }

    if (sortBy === "lowest") {
      return a.amount - b.amount;
    }

    return 0;
  });

  return (
    <div className="bg-white p-4 rounded-xl border space-y-4">
      {/* SEARCH */}
      <input
        type="text"
        placeholder="Cari transaksi..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-2 rounded"
      />

      {/* FILTER */}
      <div className="flex gap-2 flex-wrap">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">Semua</option>
          <option value="income">Pemasukan</option>
          <option value="expense">Pengeluaran</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="latest">Terbaru</option>
          <option value="oldest">Terlama</option>
          <option value="highest">Jumlah Tertinggi</option>
          <option value="lowest">Jumlah Terendah</option>
        </select>
      </div>
      <div className="space-y-3">
        {filtered.length === 0 && (
          <p className="text-gray-500">Tidak ada transaksi</p>
        )}

        {filtered.map((t) => (
          <div
            key={t.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <p className="font-medium">{t.desc}</p>
              <p className="text-xs text-gray-500">
                {new Date(t.date).toLocaleDateString("id-ID")}
              </p>
            </div>

            <span
              className={
                t.type === "income" ? "text-green-600" : "text-red-600"
              }
            >
              Rp {t.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

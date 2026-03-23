import { useEffect, useState } from "react";

export default function TransactionModal({
  open,
  onClose,
  onSubmit,
  editData,
}) {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editData) {
      setType(editData.type);
      setAmount(editData.amount);
      setDesc(editData.desc);
      setDate(editData.date.slice(0, 10));
    } else {
      setType("");
      setAmount("");
      setDesc("");
      setDate("");
    }
  }, [editData]);

  useEffect(() => {
    if (open && !editData) {
      setType("income");
      setDate(new Date().toISOString().split("T")[0]);
    }
  }, [open, editData]);

  if (!open) return null;

  function submit(e) {
    e.preventDefault();

    const data = {
      id: editData?.id || Date.now(),
      type,
      amount: Number(amount),
      desc,
      date: date,
    };
    onSubmit(data);

    setAmount("");
    setDesc("");
    setDate("");

    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl w-150">
        <h2 className="text-xl font-bold">
          {editData ? "Edit Transaksi" : "Tambah Transaksi"}
        </h2>
        <p className="mb-4 text-sm text-gray-500">
          {editData
            ? "Ubah transaksi pemasukan atau pengeluaran yang ada"
            : "Catat transaksi pemasukan atau pengeluaran baru"}
        </p>

        <form onSubmit={submit} className="space-y-4">
          <div className="flex gap-5 justify-center bg-gray-100 p-1 rounded-md text-gray-500">
            <button
              type="button"
              onClick={() => setType("income")}
              className={
                type === "income"
                  ? "text-black bg-white w-full shadow py-1 rounded-md transition"
                  : "w-full transition"
              }
            >
              Pemasukan
            </button>

            <button
              type="button"
              onClick={() => setType("expense")}
              className={
                type === "expense"
                  ? "text-black bg-white w-full shadow py-1 rounded-md transition"
                  : "w-full transition"
              }
            >
              Pengeluaran
            </button>
          </div>

          <legend className="relative">
            <label>Jumlah</label>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              Rp
            </span>
            <input
              type="number"
              placeholder="0,00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-gray-100 border border-gray-300 p-2 pl-9 pr-3 rounded-md"
              required
            />
            <span className="text-sm text-gray-500">
              Masukkan jumlah transaksi
            </span>
          </legend>

          <legend>
            <label>Deskripsi</label>
            <input
              placeholder="contoh: Kopi, Gaji, Belanja"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full bg-gray-100 border border-gray-300 p-2 px-3 rounded-md"
              required
            />
            <span className="text-sm text-gray-500">
              Deskripsi singkat tentang transaksi
            </span>
          </legend>

          <legend>
            <label>Tanggal</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-gray-100 border border-gray-300 p-2 px-3 rounded-md"
              required
            />
            <span className="text-sm text-gray-500">
              Kapan transaksi ini terjadi?
            </span>
          </legend>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 bg-gray-100 rounded"
            >
              Batal
            </button>

            <button
              type="submit"
              className="px-3 py-2 bg-teal-700 text-white rounded"
            >
              {editData ? "Update" : "Tambah"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

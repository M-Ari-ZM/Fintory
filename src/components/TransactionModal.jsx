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

  useEffect(() => {
    if (editData) {
      setType(editData.type);
      setAmount(editData.amount);
      setDesc(editData.desc);
    }
  }, [editData]);

  if (!open) return null;

  function submit(e) {
    e.preventDefault();

    const data = {
      id: editData?.id || Date.now(),
      type,
      amount: Number(amount),
      desc,
      date: editData?.date || new Date(),
    };
    onSubmit(data);

    setAmount("");
    setDesc("");

    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl w-100">
        <h2 className="text-xl font-bold mb-4">Tambah Transaksi</h2>

        <form onSubmit={submit} className="space-y-4">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setType("income")}
              className={type === "income" ? "font-bold" : ""}
            >
              Pemasukan
            </button>

            <button
              type="button"
              onClick={() => setType("expense")}
              className={type === "expense" ? "font-bold" : ""}
            >
              Pengeluaran
            </button>
          </div>

          <input
            type="number"
            placeholder="Jumlah"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <input
            placeholder="Deskripsi"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 bg-gray-200 rounded"
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

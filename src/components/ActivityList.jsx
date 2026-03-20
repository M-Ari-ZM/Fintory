import formatDate from "../utils/formatDate";
import formatRupiah from "../utils/formatRupiah";

export default function ActivityList({ transactions, onDelete, onEdit }) {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4 hover:shadow-md hover:-translate-y-1 transition">
      <h2 className="font-bold mb-3">Aktivitas Terbaru</h2>

      {transactions.length === 0 && (
        <p className="text-center">Belum ada transaksi</p>
      )}

      {transactions
        .slice(-5)
        .reverse()
        .map((t) => (
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

            <div className="flex gap-2 justify-end">
              <button
                onClick={() => onEdit(t)}
                className="text-blue-500 bg-blue-200 w-18 h-11 rounded-md"
              >
                Edit
              </button>

              <button
                onClick={() => {
                  if (confirm("Yakin ingin menghapus?")) {
                    onDelete(t.id);
                  }
                }}
                className="text-red-500 bg-red-200 w-18 h-11 rounded-md"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

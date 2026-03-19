import formatDate from "../utils/formatDate";
import formatRupiah from "../utils/formatRupiah";

export default function ActivityList({ transactions }) {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4 hover:shadow-md hover:-translate-y-1 transition">
      <h2 className="font-bold mb-3">Aktivitas Terbaru</h2>

      {transactions.length === 0 && <p>Belum ada transaksi</p>}

      {transactions
        .slice(-5)
        .reverse()
        .map((t) => (
          <div
            key={t.id}
            className="flex border border-gray-300 my-3 justify-between rounded-md p-4"
          >
            <div className="flex">
              <span
                className={
                  t.type === "income"
                    ? "bg-green-500 p-5 w-fit mr-5 rounded-full"
                    : "bg-red-500 p-5 w-fit mr-5 rounded-full"
                }
              ></span>

              <div>
                <p>{t.desc}</p>
                <p className="text-xs text-gray-500">{formatDate(t.date)}</p>
              </div>
            </div>

            <span
              className={
                t.type === "income"
                  ? "text-green-600 text-2xl font-bold"
                  : "text-red-600 text-2xl font-bold"
              }
            >
              {formatRupiah(t.amount)}
            </span>
          </div>
        ))}
    </div>
  );
}

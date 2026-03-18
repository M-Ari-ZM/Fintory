import formatDate from "../utils/formatDate";
import formatRupiah from "../utils/formatRupiah";

export default function ActivityList({ transactions }) {
  const grouped = transactions.reduce((acc, t) => {
    const dateKey = new Date(t.date).toDateString();

    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }

    acc[dateKey].push(t);

    return acc;
  }, {});

  const sortedDates = Object.keys(grouped).sort(
    (a, b) => new Date(b) - new Date(a),
  );

  return (
    <div className="border rounded-xl p-4">
      <h2 className="font-bold mb-3">Aktivitas Terbaru</h2>

      {sortedDates.length === 0 && <p>Belum ada transaksi</p>}

      {sortedDates.map((date) => (
        <div key={date} className=" border-b mb-4">
          <p className="text-sm font-semibold text-gray-500">
            {formatDate(date)}
          </p>

          {grouped[date].map((t) => (
            <div key={t.id} className="flex justify-between py-1">
              <span>{t.desc}</span>

              <span
                className={
                  t.type === "income" ? "text-green-600" : "text-red-600"
                }
              >
                {formatRupiah(t.amount)}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

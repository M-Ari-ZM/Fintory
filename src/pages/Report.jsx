import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import FilterByTimeSelect from "../components/ui/FilterByTimeSelect";
import MonthlyChart from "../components/MonthlyChart";
import ExpenseChart from "../components/ExpenseChart";
import Footer from "../components/Footer";
import useTransactions from "../hooks/useTransactions";
import { filterByTime } from "../utils/filterByTime";
import { calculateSummary } from "../utils/calculateSummary";
import { generateExpenseChartData } from "../utils/expenseChart";
import { generateMonthlyChartData } from "../utils/monthlyChart";
import { cardsDataReport } from "../utils/cardsData";

export default function Dashboard() {
  const [timeFilter, setTimeFilter] = useState("all");
  const [chartType, setChartType] = useState("bar");
  const { transactions } = useTransactions();
  const filteredTransactionsByTime = filterByTime(transactions, timeFilter);
  const { income, expense, balance } = calculateSummary(
    filteredTransactionsByTime,
  );
  const monthlyData = generateMonthlyChartData(filteredTransactionsByTime);
  const expenseData = generateExpenseChartData(filteredTransactionsByTime);

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Laporan • Fintory</title>
      </Helmet>

      <Navbar />
      <div className="p-8 space-y-6">
        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold">Laporan Keuangan</h1>
          <p className="text-gray-500">Analisis performa keuangan Anda.</p>
        </div>

        {/* FILTER */}
        <FilterByTimeSelect value={timeFilter} onChange={setTimeFilter} />

        {/* CARDS */}
        <DashboardCards
          income={income}
          expense={expense}
          balance={balance}
          cardsData={cardsDataReport}
        />

        {/* CONTENT */}
        <div className="bg-white border border-gray-300 p-4 rounded-xl hover:shadow-md hover:-translate-y-1 transition">
          <div className="gap-2 bg-gray-200 p-1 rounded-lg w-fit mb-5">
            <button
              onClick={() => setChartType("bar")}
              className={`px-3 py-1 rounded ${
                chartType === "bar"
                  ? "bg-white shadow transition"
                  : "text-gray-500"
              }`}
            >
              Bulanan
            </button>

            <button
              onClick={() => setChartType("pie")}
              className={`px-3 py-1 rounded ${
                chartType === "pie"
                  ? "bg-white shadow transition"
                  : "text-gray-500"
              }`}
            >
              Kategori
            </button>
          </div>

          {/* CHART */}
          {chartType === "bar" ? (
            <div>
              <h2 className="font-bold">Pemasukan & Pengeluaran Bulanan</h2>
              <p className="text-gray-500 text-sm mb-4">
                Perbandingan pemasukan dan pengeluaran per bulan
              </p>

              <MonthlyChart data={monthlyData} />
            </div>
          ) : (
            <div>
              <h2 className="font-bold">Pengeluaran Berdasarkan Deskripsi</h2>
              <p className="text-gray-500 text-sm mb-4">
                Distribusi pengeluaran Anda berdasarkan jenis transaksi
              </p>

              <div className="justify-items-center">
                <ExpenseChart
                  data={expenseData}
                  pieChartStyle={`sm:flex gap-10 items-center`}
                  legendChartStyle={`grid gap-y-5 mt-4 sm:mt-0 place-items-center`}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

import { useState } from "react";
import { Helmet } from "react-helmet";
import { BadgePlus } from "lucide-react";
import Navbar from "../components/Navbar";
import TransactionModal from "../components/TransactionModal";
import DashboardCards from "../components/DashboardCards";
import ActivityList from "../components/ActivityList";
import TransactionList from "../components/TransactionList";
import ExpenseChart from "../components/ExpenseChart";
import Footer from "../components/Footer";
import useTransactions from "../hooks/useTransactions";
import { filterTransactions } from "../utils/filterTransactions";
import { calculateSummary } from "../utils/calculateSummary";
import { generateExpenseChartData } from "../utils/expenseChart";
import { cardsDataHome } from "../utils/cardsData";

export default function Dashboard() {
  const [editData, setEditData] = useState(null);
  const [filter, setFilter] = useState("month");
  const [showModal, setShowModal] = useState(false);
  const { transactions, addTransaction, deleteTransaction, updateTransaction } =
    useTransactions();
  const filteredTransactions = filterTransactions(transactions, filter);
  const { income, expense, balance } = calculateSummary(filteredTransactions);
  const chartData = generateExpenseChartData(filteredTransactions);

  function handleSubmit(data) {
    if (editData) {
      updateTransaction(data);
    } else {
      addTransaction(data);
    }

    setEditData(null);
  }

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Dashboard • Fintory</title>
      </Helmet>

      <Navbar />
      <div className="p-8 space-y-6">
        {/* HEADER */}
        <div className="sm:flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-500">Pantau kesehatan keuangan Anda.</p>
          </div>

          <button
            onClick={() => {
              (setShowModal(true), setEditData(null));
            }}
            className="flex items-center gap-2 bg-blue-200 mt-5 w-full py-3 px-5 rounded-xl hover:scale-105 transition sm:mt-0 sm:w-fit cursor-pointer"
          >
            <BadgePlus color="#000000" /> Tambah Transaksi
          </button>
        </div>

        {/* FILTER */}
        <div className="flex justify-self-center sm:justify-self-end gap-2 bg-gray-200 p-1 rounded-lg w-fit">
          {["day", "week", "month", "year"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded ${
                filter === f ? "bg-white shadow transition" : "text-gray-500"
              }`}
            >
              {f === "day" && "Hari"}
              {f === "week" && "Minggu"}
              {f === "month" && "Bulan"}
              {f === "year" && "Tahun"}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <DashboardCards
          income={income}
          expense={expense}
          balance={balance}
          cardsData={cardsDataHome}
        />

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* CHART */}
          <div className="bg-white border border-gray-300 p-4 rounded-xl hover:shadow-md hover:-translate-y-1 transition">
            <h2 className="font-bold mb-4">Rincian Pengeluaran</h2>

            <div className="justify-self-center">
              <ExpenseChart
                data={chartData}
                radiusNumber={50}
                legendChartStyle={`grid grid-cols-3 gap-x-5 mt-4 w-full space-y-2`}
              />
            </div>
          </div>

          {/* ACTIVITY */}
          <ActivityList
            transactions={filteredTransactions}
            onDelete={deleteTransaction}
            onEdit={setEditData}
          />
        </div>

        <TransactionList
          transactions={filteredTransactions}
          onDelete={deleteTransaction}
          onEdit={setEditData}
        />

        {/* MODAL */}
        <TransactionModal
          open={showModal || !!editData}
          onClose={() => {
            setShowModal(false);
            setEditData(null);
          }}
          onSubmit={handleSubmit}
          editData={editData}
        />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TransactionModal from "../components/TransactionModal";
import DashboardCards from "../components/DashboardCards";
import ActivityList from "../components/ActivityList";
import ExpenseChart from "../components/ExpenseChart";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("month");

  // Load dari localStorage
  useEffect(() => {
    const data = localStorage.getItem("transactions");
    if (data) {
      setTransactions(JSON.parse(data));
    }
  }, []);

  // Simpan ke localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  function addTransaction(data) {
    const newTransaction = {
      id: Date.now(),
      ...data,
    };

    setTransactions((prev) => [...prev, newTransaction]);
  }

  const now = new Date();

  const filteredTransactions = transactions.filter((t) => {
    const date = new Date(t.date);

    // DAY
    if (filter === "day") {
      return date.toDateString() === now.toDateString();
    }

    // WEEK
    if (filter === "week") {
      const weekAgo = new Date();
      weekAgo.setDate(now.getDate() - 7);
      return date >= weekAgo;
    }

    // MONTH
    if (filter === "month") {
      return (
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
      );
    }

    // YEAR
    if (filter === "year") {
      return date.getFullYear() === now.getFullYear();
    }

    return true;
  });

  // HITUNG TOTAL
  const income = filteredTransactions
    .filter((t) => t.type === "income")
    .reduce((a, t) => a + t.amount, 0);

  const expense = filteredTransactions
    .filter((t) => t.type === "expense")
    .reduce((a, t) => a + t.amount, 0);

  const balance = income - expense;

  // DATA UNTUK CHART
  const expenseDataRaw = filteredTransactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => {
      const existing = acc.find((i) => i.name === curr.desc);

      if (existing) {
        existing.value += curr.amount;
      } else {
        acc.push({ name: curr.desc, value: curr.amount });
      }

      return acc;
    }, []);

  const sortedExpenses = expenseDataRaw.sort((a, b) => b.value - a.value);
  const topFiveExpenses = sortedExpenses.slice(0, 5);
  const others = sortedExpenses.slice(5);

  if (others.length > 0) {
    const totalOthers = others.reduce((a, b) => a + b.value, 0);

    topFiveExpenses.push({
      name: "Lainnya",
      value: totalOthers,
    });
  }

  return (
    <div>
      <Navbar />
      <div className="p-8 space-y-6">
        {/* HEADER */}
        <div className="sm:flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-500">Pantau keuangan anda</p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-200 mt-5 w-full py-3 rounded-xl hover:scale-105 transition sm:mt-0 sm:w-fit sm:px-5"
          >
            + Tambah Transaksi
          </button>
        </div>

        {/* FILTER */}
        <div className="flex justify-self-end gap-2 bg-gray-200 p-1 rounded-lg w-fit">
          {["day", "week", "month", "year"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded ${
                filter === f ? "bg-white shadow" : ""
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
        <DashboardCards income={income} expense={expense} balance={balance} />

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* CHART */}
          <div className="border p-4 rounded-xl">
            <h2 className="font-bold mb-4">Rincian Pengeluaran</h2>

            <div className="justify-self-center">
              <ExpenseChart data={topFiveExpenses} />
            </div>
          </div>

          {/* AKTIVITAS */}
          <ActivityList transactions={filteredTransactions} />
        </div>

        {/* MODAL */}
        <TransactionModal
          open={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={addTransaction}
        />
      </div>
    </div>
  );
}

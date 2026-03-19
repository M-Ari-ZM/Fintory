import { useState, useEffect } from "react";

export default function useTransactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("transactions");
    if (data) {
      setTransactions(JSON.parse(data));
    }
  }, []);

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

  function deleteTransaction(id) {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }

  function updateTransaction(updated) {
    setTransactions((prev) =>
      prev.map((t) => (t.id === updated.id ? updated : t)),
    );
  }

  return {
    transactions,
    addTransaction,
    deleteTransaction,
    updateTransaction,
  };
}

import { useState, useMemo } from "react";
import { logicList } from "../utils/logicList";

export default function useLogicList(transactions) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  const filteredTransactions = useMemo(
    () => logicList(transactions, { search, typeFilter, sortBy }),
    [transactions, search, typeFilter, sortBy],
  );

  const isFiltered = typeFilter !== "all" || sortBy !== "latest";

  function handleReset() {
    setSearch("");
    setTypeFilter("all");
    setSortBy("latest");
  }

  return {
    search,
    setSearch,
    typeFilter,
    setTypeFilter,
    sortBy,
    setSortBy,
    filteredTransactions,
    isFiltered,
    handleReset,
  };
}

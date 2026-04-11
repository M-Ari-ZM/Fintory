import useLogicList from "../hooks/useLogicList";
import List from "./ui/List";
import SearchInput from "./ui/SearchInput";
import ResetButton from "./ui/ResetButton";
import FilterSelect from "./ui/FilterSelect";
import SortSelect from "./ui/SortSelect";

export default function TransactionList({ transactions, onDelete, onEdit }) {
  const {
    search,
    setSearch,
    typeFilter,
    setTypeFilter,
    sortBy,
    setSortBy,
    filteredTransactions,
    isFiltered,
    handleReset,
  } = useLogicList(transactions);

  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4 hover:shadow-md hover:-translate-y-1 transition space-y-2">
      <div className="sm:flex sm:justify-between">
        <h2 className="font-bold mb-3">Transaksi</h2>

        {/* FILTER */}
        <div className="flex gap-2">
          {isFiltered && <ResetButton onClick={handleReset} />}

          <FilterSelect value={typeFilter} onChange={setTypeFilter} />

          <SortSelect value={sortBy} onChange={setSortBy} />
        </div>
      </div>

      {/* SEARCH */}
      <SearchInput value={search} onChange={setSearch} />

      <div className="max-h-113 space-y-3 overflow-y-scroll">
        {filteredTransactions.length === 0 ? (
          <p className="text-center">Belum ada transaksi</p>
        ) : (
          filteredTransactions
            .reverse()
            .map((t) => (
              <List
                key={t.id}
                transaction={t}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))
        )}
      </div>
    </div>
  );
}

export function logicList(data, { search, typeFilter, sortBy }) {
  let result = [...data];

  result = result.filter((t) =>
    t.desc.toLowerCase().includes(search.toLowerCase()),
  );

  if (typeFilter !== "all") {
    result = result.filter((t) => t.type === typeFilter);
  }

  result.sort((a, b) => {
    if (sortBy === "latest") return new Date(a.date) - new Date(b.date);
    if (sortBy === "oldest") return new Date(b.date) - new Date(a.date);
    if (sortBy === "highest") return a.amount - b.amount;
    if (sortBy === "lowest") return b.amount - a.amount;
    return 0;
  });

  return result;
}

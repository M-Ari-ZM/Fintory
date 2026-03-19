export function generateExpenseChartData(transactions) {
  const raw = transactions
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

  const sorted = raw.sort((a, b) => b.value - a.value);

  const topFiveExpense = sorted.slice(0, 5);
  const others = sorted.slice(5);

  if (others.length > 0) {
    const totalOthers = others.reduce((a, b) => a + b.value, 0);

    topFiveExpense.push({
      name: "Lainnya",
      value: totalOthers,
    });
  }

  return topFiveExpense;
}

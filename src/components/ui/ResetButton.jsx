import { RotateCcw } from "lucide-react";

export default function ResetButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-100 text-red-600 border border-red-300 p-2 rounded-md"
    >
      <RotateCcw />
    </button>
  );
}

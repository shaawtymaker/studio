"use client";
import { categories } from "@/lib/data";

function ExpenseCategorization() {
  return (
    <div className="p-4 rounded-md border border-solid">
      <h2 className="mb-2">Expense Categories</h2>
      <ul className="p-4">
        {categories.map((category) => (
          <li className="mb-2" key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseCategorization;

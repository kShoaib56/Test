"use client";
import { useState } from "react";
import { Download, Calendar, Filter } from "lucide-react";
import { Button } from "../../components/ui/button";

const categories = ["All", "Product A", "Product B", "Product C", "Product D"];
const data = [
  { id: 1, date: "2024-06-01", category: "Product A", sales: 1200, users: 320 },
  { id: 2, date: "2024-06-02", category: "Product B", sales: 950, users: 210 },
  { id: 3, date: "2024-06-03", category: "Product C", sales: 1800, users: 450 },
  { id: 4, date: "2024-06-04", category: "Product D", sales: 700, users: 110 },
  { id: 5, date: "2024-06-05", category: "Product A", sales: 1500, users: 350 },
];

export const DetailedReportView = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dateRange, setDateRange] = useState({ from: "2024-06-01", to: "2024-06-05" });

  const filteredData = data.filter(
    (row) =>
      (selectedCategory === "All" || row.category === selectedCategory) &&
      row.date >= dateRange.from &&
      row.date <= dateRange.to
  );

  const handleExport = (type: "csv" | "pdf") => {
    // For demo, just alert. In real app, implement export logic.
    alert(`Exporting as ${type.toUpperCase()}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex gap-2 items-center">
          <Filter className="w-5 h-5 text-[#4A90E2]" />
          <select
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <Calendar className="w-5 h-5 text-[#4A90E2] ml-4" />
          <input
            type="date"
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
            value={dateRange.from}
            onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
            style={{ fontFamily: 'Roboto, sans-serif' }}
          />
          <span className="mx-2 text-[#333]">to</span>
          <input
            type="date"
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
            value={dateRange.to}
            onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
            style={{ fontFamily: 'Roboto, sans-serif' }}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => handleExport("csv")}
            className="flex items-center gap-1 text-[#4A90E2] border-[#4A90E2] hover:bg-[#EAF3FB]">
            <Download className="w-4 h-4" /> CSV
          </Button>
          <Button variant="outline" onClick={() => handleExport("pdf")}
            className="flex items-center gap-1 text-[#F5A623] border-[#F5A623] hover:bg-[#FFF6E8]">
            <Download className="w-4 h-4" /> PDF
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
          <thead>
            <tr className="bg-[#F7F7F7] text-[#333]">
              <th className="py-2 px-4 text-left font-semibold">Date</th>
              <th className="py-2 px-4 text-left font-semibold">Category</th>
              <th className="py-2 px-4 text-left font-semibold">Sales</th>
              <th className="py-2 px-4 text-left font-semibold">Active Users</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-4 text-center text-gray-400">No data for selected filters.</td>
              </tr>
            ) : (
              filteredData.map((row) => (
                <tr key={row.id} className="border-b last:border-b-0">
                  <td className="py-2 px-4">{row.date}</td>
                  <td className="py-2 px-4">{row.category}</td>
                  <td className="py-2 px-4">${row.sales.toLocaleString()}</td>
                  <td className="py-2 px-4">{row.users}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

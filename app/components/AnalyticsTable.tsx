import { FC } from "react";

const data = [
  { id: 1, name: "Product A", sales: 1200, users: 320, growth: "8%" },
  { id: 2, name: "Product B", sales: 950, users: 210, growth: "5%" },
  { id: 3, name: "Product C", sales: 1800, users: 450, growth: "12%" },
  { id: 4, name: "Product D", sales: 700, users: 110, growth: "2%" },
];

export const AnalyticsTable: FC = () => (
  <div className="bg-white rounded-lg shadow-sm p-6 overflow-x-auto">
    <h3 className="font-bold text-[#333] mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 18 }}>Detailed Analytics</h3>
    <table className="min-w-full text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <thead>
        <tr className="bg-[#F7F7F7] text-[#333]">
          <th className="py-2 px-4 text-left font-semibold">Product</th>
          <th className="py-2 px-4 text-left font-semibold">Sales</th>
          <th className="py-2 px-4 text-left font-semibold">Active Users</th>
          <th className="py-2 px-4 text-left font-semibold">Growth</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="border-b last:border-b-0">
            <td className="py-2 px-4">{row.name}</td>
            <td className="py-2 px-4">${row.sales.toLocaleString()}</td>
            <td className="py-2 px-4">{row.users}</td>
            <td className="py-2 px-4">{row.growth}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

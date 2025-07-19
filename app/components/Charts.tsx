import { FC } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";

const lineData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4780 },
  { name: "May", sales: 5890 },
  { name: "Jun", sales: 4390 },
  { name: "Jul", sales: 6490 },
];

const barData = [
  { name: "Product A", users: 2400 },
  { name: "Product B", users: 1398 },
  { name: "Product C", users: 9800 },
  { name: "Product D", users: 3908 },
];

export const Charts: FC = () => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="font-bold text-[#333] mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 18 }}>Sales Trend</h3>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={lineData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontFamily: 'Roboto, sans-serif', fontSize: 12 }} />
          <YAxis tick={{ fontFamily: 'Roboto, sans-serif', fontSize: 12 }} />
          <Tooltip contentStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: 13 }} />
          <Line type="monotone" dataKey="sales" stroke="#4A90E2" strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="font-bold text-[#333] mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 18 }}>Active Users by Product</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={barData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontFamily: 'Roboto, sans-serif', fontSize: 12 }} />
          <YAxis tick={{ fontFamily: 'Roboto, sans-serif', fontSize: 12 }} />
          <Tooltip contentStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: 13 }} />
          <Legend wrapperStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: 13 }} />
          <Bar dataKey="users" fill="#50E3C2" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </section>
);

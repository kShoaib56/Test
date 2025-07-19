import { FC } from "react";
import { TrendingUp, Users, DollarSign } from "lucide-react";

const metrics = [
  {
    label: "Total Sales",
    value: "$24,500",
    icon: <DollarSign className="w-6 h-6 text-[#50E3C2]" />,
    bg: "bg-[#E6F9F5]",
  },
  {
    label: "Active Users",
    value: "1,320",
    icon: <Users className="w-6 h-6 text-[#4A90E2]" />,
    bg: "bg-[#EAF3FB]",
  },
  {
    label: "Growth",
    value: "+12.4%",
    icon: <TrendingUp className="w-6 h-6 text-[#F5A623]" />,
    bg: "bg-[#FFF6E8]",
  },
];

export const KeyMetrics: FC = () => (
  <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
    {metrics.map((metric) => (
      <div
        key={metric.label}
        className={`flex items-center gap-4 rounded-lg shadow-sm p-6 ${metric.bg}`}
      >
        <div className="flex-shrink-0">{metric.icon}</div>
        <div>
          <div className="text-lg font-bold text-[#333]" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 18 }}>{metric.value}</div>
          <div className="text-xs text-[#666] mt-1" style={{ fontFamily: 'Roboto, sans-serif' }}>{metric.label}</div>
        </div>
      </div>
    ))}
  </section>
);

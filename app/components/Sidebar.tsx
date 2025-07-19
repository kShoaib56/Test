import { FC } from "react";
import { BarChart2, FileText, Settings } from "lucide-react";
import Link from "next/link";

export const Sidebar: FC = () => (
  <aside className="hidden md:flex flex-col w-56 h-full bg-white border-r border-gray-200 py-8 px-4 gap-6">
    <nav className="flex flex-col gap-4">
      <Link href="/" className="flex items-center gap-2 text-[#333] hover:text-[#4A90E2] font-medium transition-colors" style={{ fontFamily: 'Roboto, sans-serif', fontSize: 16 }}>
        <BarChart2 className="w-5 h-5" /> Dashboard
      </Link>
      <Link href="/reports" className="flex items-center gap-2 text-[#333] hover:text-[#4A90E2] font-medium transition-colors" style={{ fontFamily: 'Roboto, sans-serif', fontSize: 16 }}>
        <FileText className="w-5 h-5" /> Reports
      </Link>
      <Link href="/settings" className="flex items-center gap-2 text-[#333] hover:text-[#4A90E2] font-medium transition-colors" style={{ fontFamily: 'Roboto, sans-serif', fontSize: 16 }}>
        <Settings className="w-5 h-5" /> Settings
      </Link>
    </nav>
  </aside>
);
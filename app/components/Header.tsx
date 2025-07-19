import { FC } from "react";
import { BarChart2, Settings, FileText } from "lucide-react";
import Link from "next/link";

export const Header: FC = () => (
  <header className="w-full bg-white shadow-sm flex items-center justify-between px-6 py-4">
    <div className="flex items-center gap-3">
      <div className="text-2xl font-bold text-[#4A90E2] tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <span role="img" aria-label="logo">📊</span> Reportly
      </div>
    </div>
    <nav className="flex gap-6">
      <Link href="/" className="flex items-center gap-1 text-[#333] hover:text-[#4A90E2] font-medium transition-colors" style={{ fontFamily: 'Roboto, sans-serif', fontSize: 16 }}>
        <BarChart2 className="w-5 h-5" /> Dashboard
      </Link>
      <Link href="/reports" className="flex items-center gap-1 text-[#333] hover:text-[#4A90E2] font-medium transition-colors" style={{ fontFamily: 'Roboto, sans-serif', fontSize: 16 }}>
        <FileText className="w-5 h-5" /> Reports
      </Link>
      <Link href="/settings" className="flex items-center gap-1 text-[#333] hover:text-[#4A90E2] font-medium transition-colors" style={{ fontFamily: 'Roboto, sans-serif', fontSize: 16 }}>
        <Settings className="w-5 h-5" /> Settings
      </Link>
    </nav>
  </header>
);
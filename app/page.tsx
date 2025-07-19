import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { KeyMetrics } from "./components/KeyMetrics";
import { Charts } from "./components/Charts";
import { AnalyticsTable } from "./components/AnalyticsTable";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F7]">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 md:p-10">
          <h1 className="font-bold text-[#333] mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 24 }}>Dashboard Overview</h1>
          <KeyMetrics />
          <Charts />
          <AnalyticsTable />
        </main>
      </div>
      <Footer />
    </div>
  );
}

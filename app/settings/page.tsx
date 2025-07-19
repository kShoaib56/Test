"use client";
import { useState } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { Sun, Moon } from "lucide-react";
import { Switch } from "../../components/ui/switch";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "min-h-screen flex flex-col bg-[#222]" : "min-h-screen flex flex-col bg-[#F7F7F7]"}>
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 md:p-10">
          <h1 className={darkMode ? "font-bold text-white mb-6" : "font-bold text-[#333] mb-6"} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 24 }}>Settings</h1>
          <section className="bg-white dark:bg-[#333] rounded-lg shadow-sm p-6 max-w-lg">
            <div className="flex items-center gap-4 mb-6">
              <Sun className={darkMode ? "w-5 h-5 text-gray-400" : "w-5 h-5 text-[#4A90E2]"} />
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
              <Moon className={darkMode ? "w-5 h-5 text-[#F5A623]" : "w-5 h-5 text-gray-400"} />
              <span className={darkMode ? "text-white" : "text-[#333]"} style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14 }}>Dark Mode</span>
            </div>
            <div className={darkMode ? "text-gray-300" : "text-[#333]"} style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14 }}>
              <p>Customize your dashboard preferences. (More settings coming soon!)</p>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

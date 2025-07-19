import { FC } from "react";

export const Footer: FC = () => (
  <footer className="w-full bg-white border-t border-gray-200 py-4 px-6 text-center text-xs text-[#333]" style={{ fontFamily: 'Roboto, sans-serif' }}>
    © {new Date().getFullYear()} Reportly. All rights reserved.
  </footer>
);
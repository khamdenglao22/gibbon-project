"use client";

import Footer from "@/components/footer";
import NavHeader from "@/components/NavHeader";

export default function MainLayout({ children }) {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      {/* Header */}
      <NavHeader />

      {/* Page Content */}
      {children}

      {/* Footer */}
      <Footer />
    </div>
  );
}

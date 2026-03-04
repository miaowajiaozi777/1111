import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Create from "./components/Create";
import BottomNav from "./components/BottomNav";

type Page = "home" | "community" | "create" | "profile" | "detail";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedScentId, setSelectedScentId] = useState<number | null>(null);

  const handleNavigate = (page: string, id?: number) => {
    setCurrentPage(page as Page);
    if (id) {
      setSelectedScentId(id);
    }
  };

  const handleBack = () => {
    setCurrentPage("home");
    setSelectedScentId(null);
  };

  return (
    <div className="max-w-md mx-auto bg-bg-warm min-h-screen relative overflow-hidden shadow-2xl shadow-black/10">
      <AnimatePresence mode="wait">
        {currentPage === "home" && (
          <Home key="home" onNavigate={handleNavigate} />
        )}
        {currentPage === "detail" && (
          <Detail key="detail" onBack={handleBack} />
        )}
        {currentPage === "create" && <Create key="create" />}
        {/* Placeholder for other tabs */}
        {(currentPage === "community" || currentPage === "profile") && (
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center min-h-screen text-text-muted"
          >
            <p>开发中...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show BottomNav only on main tabs */}
      {currentPage !== "detail" && (
        <BottomNav
          activeTab={currentPage as any}
          onChange={(tab) => handleNavigate(tab)}
        />
      )}
    </div>
  );
}

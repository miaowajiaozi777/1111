import React from "react";
import { Home, Compass, PlusCircle, User } from "lucide-react";

type Tab = "home" | "community" | "create" | "profile";

interface BottomNavProps {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
}

export default function BottomNav({ activeTab, onChange }: BottomNavProps) {
  const tabs = [
    { id: "home", icon: Home, label: "首页" },
    { id: "community", icon: Compass, label: "社区" },
    { id: "create", icon: PlusCircle, label: "创作" },
    { id: "profile", icon: User, label: "我的" },
  ] as const;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-8 pt-4 bg-gradient-to-t from-bg-warm via-bg-warm/90 to-transparent max-w-md mx-auto">
      <div className="glass-panel rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-black/5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                isActive
                  ? "text-primary-green scale-110"
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              <Icon
                className="w-5 h-5"
                strokeWidth={isActive ? 2.5 : 2}
                fill={isActive ? "currentColor" : "none"}
                fillOpacity={isActive ? 0.2 : 0}
              />
              <span
                className={`text-[10px] font-medium ${isActive ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

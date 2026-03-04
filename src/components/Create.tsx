import React, { useState } from "react";
import { Sparkles, SlidersHorizontal, Plus, Save } from "lucide-react";
import { motion } from "motion/react";

export default function Create() {
  const [topNote, setTopNote] = useState(30);
  const [midNote, setMidNote] = useState(50);
  const [baseNote, setBaseNote] = useState(20);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="pb-24 pt-12 px-5 min-h-screen"
    >
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-medium tracking-wide">创作气味</h1>
        <button className="flex items-center gap-2 text-sm font-medium text-primary-green bg-primary-green/10 px-4 py-2 rounded-full hover:bg-primary-green/20 transition-colors">
          <Save className="w-4 h-4" />
          保存
        </button>
      </header>

      {/* AI Recommendation Panel */}
      <div className="glass-panel rounded-[24px] p-6 mb-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-sunset/10 rounded-full blur-3xl -mr-10 -mt-10" />
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-sunset/20 to-accent-sunset/5 flex items-center justify-center text-accent-sunset">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-text-main">AI 推荐配方</h3>
            <p className="text-xs text-text-muted">基于您的喜好生成</p>
          </div>
        </div>
        <p className="text-sm text-text-main/80 leading-relaxed mb-5 relative z-10">
          尝试混合清新的柑橘前调与温暖的木质后调，营造出一种“夏日黄昏”的氛围。
        </p>
        <button className="w-full py-3 rounded-[16px] bg-white/60 border border-white/50 text-sm font-medium text-text-main hover:bg-white/80 transition-colors relative z-10">
          一键应用配方
        </button>
      </div>

      {/* Modular Control Panel */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-medium text-text-main flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-text-muted" />
            配方调节
          </h3>
          <span className="text-xs text-text-muted font-mono bg-white/50 px-2 py-1 rounded-md">
            {topNote + midNote + baseNote}% / 100%
          </span>
        </div>

        <div className="space-y-6">
          {/* Top Note Slider */}
          <div className="glass-panel rounded-[20px] p-5">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-green" />
                <span className="text-sm font-medium">前调 (Top)</span>
              </div>
              <span className="text-sm font-mono text-primary-green">
                {topNote}%
              </span>
            </div>
            <div className="relative h-1.5 bg-black/5 rounded-full overflow-hidden mb-4">
              <div
                className="absolute top-0 left-0 h-full bg-primary-green rounded-full"
                style={{ width: `${topNote}%` }}
              />
              <input
                type="range"
                min="0"
                max="100"
                value={topNote}
                onChange={(e) => setTopNote(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <button className="flex items-center gap-2 text-xs text-text-muted hover:text-primary-green transition-colors">
              <Plus className="w-3 h-3" /> 添加香料
            </button>
          </div>

          {/* Mid Note Slider */}
          <div className="glass-panel rounded-[20px] p-5">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-blue" />
                <span className="text-sm font-medium">中调 (Heart)</span>
              </div>
              <span className="text-sm font-mono text-primary-blue">
                {midNote}%
              </span>
            </div>
            <div className="relative h-1.5 bg-black/5 rounded-full overflow-hidden mb-4">
              <div
                className="absolute top-0 left-0 h-full bg-primary-blue rounded-full"
                style={{ width: `${midNote}%` }}
              />
              <input
                type="range"
                min="0"
                max="100"
                value={midNote}
                onChange={(e) => setMidNote(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <button className="flex items-center gap-2 text-xs text-text-muted hover:text-primary-blue transition-colors">
              <Plus className="w-3 h-3" /> 添加香料
            </button>
          </div>

          {/* Base Note Slider */}
          <div className="glass-panel rounded-[20px] p-5">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-sunset" />
                <span className="text-sm font-medium">后调 (Base)</span>
              </div>
              <span className="text-sm font-mono text-accent-sunset">
                {baseNote}%
              </span>
            </div>
            <div className="relative h-1.5 bg-black/5 rounded-full overflow-hidden mb-4">
              <div
                className="absolute top-0 left-0 h-full bg-accent-sunset rounded-full"
                style={{ width: `${baseNote}%` }}
              />
              <input
                type="range"
                min="0"
                max="100"
                value={baseNote}
                onChange={(e) => setBaseNote(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <button className="flex items-center gap-2 text-xs text-text-muted hover:text-accent-sunset transition-colors">
              <Plus className="w-3 h-3" /> 添加香料
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

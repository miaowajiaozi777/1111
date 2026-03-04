import React, { useState } from "react";
import { Play, Pause, Wind, ChevronLeft, Share2, Heart } from "lucide-react";
import { motion } from "motion/react";

interface DetailProps {
  onBack: () => void;
}

const Detail: React.FC<DetailProps> = ({ onBack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [intensity, setIntensity] = useState(65);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen pb-24 relative bg-bg-warm"
    >
      {/* Top visual area */}
      <div className="relative h-[45vh] w-full overflow-hidden rounded-b-[32px] shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-green/20 to-bg-warm z-10" />
        <img
          src="https://picsum.photos/seed/forest/800/800"
          alt="雨后松林"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />

        {/* Top Nav */}
        <div className="absolute top-12 left-0 right-0 px-5 flex justify-between items-center z-20">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-text-main hover:bg-white/40 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2} />
          </button>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-text-main hover:bg-white/40 transition-colors">
              <Share2 className="w-4 h-4" strokeWidth={2} />
            </button>
            <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-text-main hover:bg-white/40 transition-colors">
              <Heart className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-6 relative z-20">
        <div className="glass-panel rounded-[24px] p-6 mb-6">
          <div className="flex justify-between items-end mb-2">
            <h1 className="text-2xl font-medium tracking-wide">雨后松林</h1>
            <span className="text-xs text-text-muted bg-white/50 px-3 py-1 rounded-full">
              冥想
            </span>
          </div>
          <p className="text-sm text-text-muted mb-6">@ForestWalker</p>

          <div className="flex gap-6 text-sm text-text-muted mb-8">
            <div className="flex flex-col">
              <span className="font-medium text-text-main">1,205</span>
              <span className="text-[11px]">点赞</span>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-text-main">84</span>
              <span className="text-[11px]">评论</span>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-text-main">3.2k</span>
              <span className="text-[11px]">播放</span>
            </div>
          </div>

          {/* Main Action */}
          <div className="flex gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex-1 py-4 rounded-[20px] flex items-center justify-center gap-2 transition-all duration-300 ${
                isPlaying
                  ? "bg-primary-green text-white shadow-lg shadow-primary-green/20"
                  : "bg-white text-text-main border border-white/50 shadow-sm"
              }`}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" fill="currentColor" />
              ) : (
                <Play className="w-5 h-5" fill="currentColor" />
              )}
              <span className="font-medium">
                {isPlaying ? "播放中..." : "播放气味"}
              </span>
            </button>
            <button className="w-14 rounded-[20px] bg-white border border-white/50 shadow-sm flex items-center justify-center text-primary-blue hover:bg-primary-blue/5 transition-colors">
              <Wind className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Intensity Slider */}
        <div className="mb-8 px-2">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-text-main/80">
              扩散浓度
            </span>
            <span className="text-sm font-mono text-primary-green">
              {intensity}%
            </span>
          </div>
          <div className="relative h-2 bg-white/50 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-green/60 to-primary-green rounded-full"
              style={{ width: `${intensity}%` }}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Scent Structure */}
        <div>
          <h3 className="text-sm font-medium text-text-main/80 mb-4 px-2">
            气味结构
          </h3>
          <div className="space-y-3">
            {[
              {
                label: "前调",
                notes: "佛手柑 / 晨露",
                color: "bg-primary-green/10 text-primary-green",
              },
              {
                label: "中调",
                notes: "雪松 / 湿润泥土",
                color: "bg-primary-blue/10 text-primary-blue",
              },
              {
                label: "后调",
                notes: "檀香 / 橡木苔",
                color: "bg-accent-sunset/10 text-accent-sunset",
              },
            ].map((layer, i) => (
              <div
                key={i}
                className="glass-panel rounded-[16px] p-4 flex items-center gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-medium ${layer.color}`}
                >
                  {layer.label}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-main">
                    {layer.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Detail;

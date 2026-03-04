import React from "react";
import { Search, Heart, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const SCENT_DATA = [
  {
    id: 1,
    title: "雨后松林",
    author: "@ForestWalker",
    likes: 1205,
    comments: 84,
    image: "https://picsum.photos/seed/forest/400/500",
    color: "rgba(44, 76, 59, 0.15)",
  },
  {
    id: 2,
    title: "海岛晨曦",
    author: "@OceanBreeze",
    likes: 3420,
    comments: 215,
    image: "https://picsum.photos/seed/ocean/400/500",
    color: "rgba(59, 92, 125, 0.15)",
  },
  {
    id: 3,
    title: "午后红茶",
    author: "@TeaLover",
    likes: 890,
    comments: 42,
    image: "https://picsum.photos/seed/tea/400/500",
    color: "rgba(226, 125, 96, 0.15)",
  },
  {
    id: 4,
    title: "雪山之巅",
    author: "@SnowPeak",
    likes: 2100,
    comments: 156,
    image: "https://picsum.photos/seed/snow/400/500",
    color: "rgba(200, 210, 220, 0.15)",
  },
];

const TRENDING_TAGS = ["助眠", "冥想", "工作专注", "雨天", "咖啡馆"];

interface HomeProps {
  onNavigate: (page: string, id?: number) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="pb-24 pt-12 px-5 min-h-screen"
    >
      <header className="mb-6">
        <h1 className="text-2xl font-medium tracking-wide mb-6">气味社区</h1>

        <div className="relative mb-5">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-text-muted" strokeWidth={1.5} />
          </div>
          <input
            type="text"
            placeholder="搜索气味配方、场景、用户…"
            className="w-full glass-panel rounded-full py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary-green/30 transition-all placeholder:text-text-muted/70"
          />
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {TRENDING_TAGS.map((tag) => (
            <button
              key={tag}
              className="whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium bg-white/40 border border-white/50 text-text-main/80 hover:bg-white/60 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </header>

      <div className="columns-2 gap-4 space-y-4">
        {SCENT_DATA.map((scent, index) => (
          <motion.div
            key={scent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onClick={() => onNavigate("detail", scent.id)}
            className="break-inside-avoid glass-panel rounded-[20px] overflow-hidden cursor-pointer group relative"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at 50% 0%, ${scent.color}, transparent 70%)`,
              }}
            />
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                src={scent.image}
                alt={scent.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
            </div>
            <div className="p-4 relative z-10">
              <h3 className="font-medium text-[15px] mb-1">{scent.title}</h3>
              <p className="text-xs text-text-muted mb-3">{scent.author}</p>
              <div className="flex items-center gap-3 text-[11px] text-text-muted">
                <div className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5" strokeWidth={2} />
                  <span>{scent.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5" strokeWidth={2} />
                  <span>{scent.comments}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;

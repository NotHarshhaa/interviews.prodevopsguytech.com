export default function GridLayoutVisual() {
  return (
    <div className="w-[calc(100%-2rem)] h-[calc(100%-4rem)] mx-auto mt-auto mb-4 grid grid-cols-[repeat(2,var(--size))] grid-rows-[repeat(3,var(--size))] gap-3 sm:grid-cols-[repeat(3,var(--size))] sm:grid-rows-[repeat(2,var(--size))]">
      <div className="bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 dark:to-transparent group-hover:from-cyan-500/20 dark:group-hover:from-cyan-400/10 group-hover:to-pink-500/5 dark:group-hover:to-pink-400/5 duration-500 col-span-2 row-span-1 overflow-hidden rounded-xl sm:col-span-1 sm:row-span-2 border border-black/10 dark:border-white/10 group-hover:border-cyan-400/30 backdrop-blur-sm grid place-items-center transform hover:scale-[1.02] transition-all shadow-lg shadow-cyan-500/5">
        <div className="absolute inset-0 bg-grid-dots-current opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      </div>
      
      <div className="relative sm:rounded-xl group-hover:bg-gradient-to-br group-hover:from-pink-500/10 group-hover:to-cyan-500/5 dark:group-hover:from-pink-400/5 dark:group-hover:to-cyan-400/5 duration-500 border border-black/10 dark:border-white/10 group-hover:border-pink-400/30 backdrop-blur-sm grid place-items-center transform hover:scale-[1.02] transition-all shadow-lg shadow-pink-500/5">
        <div className="absolute inset-0 bg-grid-dots-current opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      </div>
      
      <div className="relative border border-black/10 dark:border-white/10 group-hover:border-cyan-400/30 group-hover:bg-gradient-to-br group-hover:from-cyan-500/10 group-hover:to-pink-500/5 dark:group-hover:from-cyan-400/5 dark:group-hover:to-pink-400/5 duration-500 rounded-xl backdrop-blur-sm transform hover:scale-[1.02] transition-all shadow-lg shadow-cyan-500/5">
        <div className="absolute inset-0 bg-grid-dots-current opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      </div>
      
      <div className="relative col-span-2 overflow-hidden group-hover:bg-gradient-to-br group-hover:from-pink-500/10 group-hover:to-cyan-500/5 dark:group-hover:from-pink-400/5 dark:group-hover:to-cyan-400/5 duration-500 rounded-xl border border-black/10 dark:border-white/10 group-hover:border-pink-400/30 backdrop-blur-sm transform hover:scale-[1.02] transition-all shadow-lg shadow-pink-500/5">
        <div className="absolute inset-0 bg-grid-dots-current opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      </div>
    </div>
  );
}
export default function GridLayoutVisual() {
  return (
    <div className="w-[calc(100%-2rem)] h-[calc(100%-4rem)] mx-auto mt-auto mb-4 grid grid-cols-[repeat(2,var(--size))] grid-rows-[repeat(3,var(--size))] gap-4 sm:grid-cols-[repeat(3,var(--size))] sm:grid-rows-[repeat(2,var(--size))]">
      <div className="bg-gradient-to-br from-black/5 via-transparent to-transparent dark:from-white/5 dark:via-transparent dark:to-transparent group-hover:from-cyan-500/20 group-hover:via-cyan-400/10 group-hover:to-transparent dark:group-hover:from-cyan-400/10 dark:group-hover:via-cyan-300/5 dark:group-hover:to-transparent duration-500 col-span-2 row-span-1 overflow-hidden rounded-2xl sm:col-span-1 sm:row-span-2 border border-black/10 dark:border-white/10 group-hover:border-cyan-400/30 backdrop-blur-sm grid place-items-center transform hover:scale-[1.03] hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl shadow-cyan-500/5 hover:shadow-cyan-500/10">
        <div className="absolute inset-0 bg-grid-dots-current opacity-5 group-hover:opacity-10 transition-opacity"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/5 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      <div className="relative sm:rounded-2xl group-hover:bg-gradient-to-br group-hover:from-pink-500/15 group-hover:via-pink-400/10 group-hover:to-transparent dark:group-hover:from-pink-400/10 dark:group-hover:via-pink-300/5 dark:group-hover:to-transparent duration-500 border border-black/10 dark:border-white/10 group-hover:border-pink-400/30 backdrop-blur-sm grid place-items-center transform hover:scale-[1.03] hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl shadow-pink-500/5 hover:shadow-pink-500/10">
        <div className="absolute inset-0 bg-grid-dots-current opacity-5 group-hover:opacity-10 transition-opacity"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/5 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      <div className="relative border border-black/10 dark:border-white/10 group-hover:border-cyan-400/30 group-hover:bg-gradient-to-br group-hover:from-cyan-500/15 group-hover:via-cyan-400/10 group-hover:to-transparent dark:group-hover:from-cyan-400/10 dark:group-hover:via-cyan-300/5 dark:group-hover:to-transparent duration-500 rounded-2xl backdrop-blur-sm transform hover:scale-[1.03] hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl shadow-cyan-500/5 hover:shadow-cyan-500/10">
        <div className="absolute inset-0 bg-grid-dots-current opacity-5 group-hover:opacity-10 transition-opacity"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/5 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      <div className="relative col-span-2 overflow-hidden group-hover:bg-gradient-to-br group-hover:from-pink-500/15 group-hover:via-pink-400/10 group-hover:to-transparent dark:group-hover:from-pink-400/10 dark:group-hover:via-pink-300/5 dark:group-hover:to-transparent duration-500 rounded-2xl border border-black/10 dark:border-white/10 group-hover:border-pink-400/30 backdrop-blur-sm transform hover:scale-[1.03] hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl shadow-pink-500/5 hover:shadow-pink-500/10">
        <div className="absolute inset-0 bg-grid-dots-current opacity-5 group-hover:opacity-10 transition-opacity"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/5 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  );
}
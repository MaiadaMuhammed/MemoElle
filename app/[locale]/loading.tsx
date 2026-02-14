export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#fdf8f6] z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* اللوجو بينبض */}
        <div className="w-16 h-16 border-2 border-[#eaddd7] border-t-[#38221f] rounded-full animate-spin" />
        <span className="font-serif text-[#38221f] animate-pulse text-lg tracking-widest">
          MemoElle
        </span>
      </div>
    </div>
  );
}
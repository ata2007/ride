export default function MapPlaceholder({ className = "" }) {
  return (
    <div className={`rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-orange-100 p-6 text-center ${className} animate-fade-in-up`}>
      <div className="h-64 md:h-80 rounded-xl bg-white/80 border border-orange-200 grid place-items-center text-orange-500 text-xl font-semibold animate-pulse-glow">
        Map preview placeholder
      </div>
    </div>
  );
}

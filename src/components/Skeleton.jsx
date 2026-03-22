export default function Skeleton({ className = "", count = 1 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className={`animate-pulse bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-lg ${className}`}
        />
      ))}
    </>
  );
}

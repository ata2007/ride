export default function Card({ children, className = "", variant = "default" }) {
  const variants = {
    default: "bg-white border border-orange-100 rounded-2xl shadow-sm hover:shadow-md",
    glass: "bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl",
    elevated: "bg-white rounded-2xl shadow-lg hover:shadow-xl",
  };

  return (
    <div className={`${variants[variant]} transition-all duration-200 ${className}`}>
      {children}
    </div>
  );
}

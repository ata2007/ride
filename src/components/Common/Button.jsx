export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  disabled = false,
  className = "",
  ...props 
}) {
  const baseStyles = "font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600 disabled:bg-orange-300",
    secondary: "bg-white text-orange-600 border border-orange-300 hover:bg-orange-50 disabled:opacity-50",
    ghost: "text-slate-700 hover:bg-slate-100 disabled:opacity-50",
    danger: "bg-red-500 text-white hover:bg-red-600 disabled:bg-red-300",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

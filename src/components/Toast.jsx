import { AlertCircle, CheckCircle, Info, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Toast({ message, type = "info", duration = 3000, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  const styles = {
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
    warning: "bg-amber-50 border-amber-200 text-amber-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
  };

  const icons = {
    success: <CheckCircle size={18} />,
    error: <AlertCircle size={18} />,
    warning: <AlertCircle size={18} />,
    info: <Info size={18} />,
  };

  return (
    <div className={`fixed top-4 right-4 p-4 rounded-lg border flex items-start gap-3 max-w-sm shadow-lg ${styles[type]} z-50 animate-slide-in`}>
      {icons[type]}
      <div className="flex-1">
        <p className="font-semibold text-sm">{message}</p>
      </div>
      <button onClick={() => setVisible(false)} className="flex-shrink-0">
        <X size={16} />
      </button>
    </div>
  );
}

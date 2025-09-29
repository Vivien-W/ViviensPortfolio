import { useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 2200); // lädt 2,2 Sekunden

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white text-black flex flex-col items-center justify-center">
      <p className="text-stone-600 font-bold mb-8">Portfolio Loading...</p>

      {/* Lade-Kreis */}
      <div className="w-13 h-13 border-4 border-stone-800 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

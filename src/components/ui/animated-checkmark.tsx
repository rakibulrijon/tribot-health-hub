import { useState, useEffect } from "react";

interface AnimatedCheckmarkProps {
  isVisible: boolean;
  onComplete?: () => void;
}

const AnimatedCheckmark = ({ isVisible, onComplete }: AnimatedCheckmarkProps) => {
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowCheck(true);
      const timer = setTimeout(() => {
        onComplete?.();
      }, 2000); // Animation completes after 2 seconds
      
      return () => clearTimeout(timer);
    } else {
      setShowCheck(false);
    }
  }, [isVisible, onComplete]);

  if (!showCheck) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-300">
      <div className="bg-white rounded-full p-8 shadow-2xl animate-in zoom-in duration-500">
        <div className="relative">
          {/* Animated Circle */}
          <div className="w-20 h-20 border-4 border-green-500 rounded-full animate-[draw-circle_0.6s_ease-out] relative">
            {/* Animated Checkmark */}
            <svg
              className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M9 12l2 2 4-4"
                className="text-green-500 animate-[draw-check_0.6s_ease-out_0.3s_both]"
                style={{
                  strokeDasharray: '12',
                  strokeDashoffset: '12',
                }}
              />
            </svg>
          </div>
          
          {/* Success Text */}
          <div className="text-center mt-4 animate-in slide-in-from-bottom-2 duration-500 delay-700">
            <h3 className="text-xl font-semibold text-green-600 mb-1">Message Sent!</h3>
            <p className="text-gray-600 text-sm">We'll get back to you soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCheckmark;

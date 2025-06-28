'use client';

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

interface SuccessAlertProps {
  show: boolean;
  onClose: () => void;
  message?: string;
  duration?: number;
}

export default function SuccessAlert({ 
  show, 
  onClose, 
  message = "Data berhasil diupload!", 
  duration = 3000 
}: SuccessAlertProps) {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
    
    if (show) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, onClose, duration]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-8 right-8 z-50"
        >
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[250px]">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                repeat: 1,
                repeatType: "reverse"
              }}
            >
              <CheckCircle2 size={28} className="text-white" />
            </motion.div>
            <div>
              <p className="font-semibold">Sukses!</p>
              <p className="text-sm">{message}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
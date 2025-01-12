'use client';

import { motion } from "framer-motion";

export default function UserSkeleton() {
  return (
    <div className="space-y-3">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className={`flex flex-row rounded-lg justify-between ${
            index % 2 === 0 ? "bg-slate-100" : "bg-white"
          }`}
        >
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-b from-slate-200 to-slate-300 overflow-hidden"
                animate={{
                  backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: "linear-gradient(to bottom, #e2e8f0, #cbd5e1)",
                  backgroundSize: "200% 200%",
                }}
              />
              <motion.div
                className="w-32 h-6 bg-gradient-to-b from-slate-200 to-slate-300 rounded overflow-hidden"
                animate={{
                  backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                style={{
                  background: "linear-gradient(to bottom, #e2e8f0, #cbd5e1)",
                  backgroundSize: "200% 200%",
                }}
              />
            </div>
            <motion.div
              className="w-24 h-6 bg-gradient-to-b from-slate-200 to-slate-300 rounded overflow-hidden"
              animate={{
                backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              style={{
                background: "linear-gradient(to bottom, #e2e8f0, #cbd5e1)",
                backgroundSize: "200% 200%",
              }}
            />
            <motion.div
              className="w-16 h-6 bg-gradient-to-b from-slate-200 to-slate-300 rounded overflow-hidden"
              animate={{
                backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
              style={{
                background: "linear-gradient(to bottom, #e2e8f0, #cbd5e1)",
                backgroundSize: "200% 200%",
              }}
            />
          </div>
          <div className="bg-white flex gap-4 px-4">
            <motion.div
              className="h-[64px] w-32 md:min-w-[150px] lg:min-w-[170px] bg-gradient-to-b from-gray-200 to-gray-300 rounded overflow-hidden"
              animate={{
                backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              style={{
                background: "linear-gradient(to bottom, #e2e8f0, #cbd5e1)",
                backgroundSize: "200% 200%",
              }}
            />
            <motion.div
              className="h-[64px] w-32 md:min-w-[150px] lg:min-w-[170px] bg-gradient-to-b from-[#c16f6f4d] to-[#c16f6f80] rounded overflow-hidden"
              animate={{
                backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              style={{
                background: "linear-gradient(to bottom, #c16f6f4d, #c16f6f80)",
                backgroundSize: "200% 200%",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

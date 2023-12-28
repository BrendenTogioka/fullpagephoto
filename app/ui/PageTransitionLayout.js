"use client";
import { motion, AnimatePresence } from "framer-motion";

import { useRouter } from "next/router";

export default function PageTransitionLayout({ children }) {
  //   const router = useRouter();

  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        // key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        variants={{
          initialState: {
            opacity: 0,
            // x: 100,
          },
          animateState: {
            opacity: 1,
            x: 0,
          },
          exitState: {
            opacity: 0,
          },
        }}
        className="min-h-screen w-full" // Feel free to add your classes here
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

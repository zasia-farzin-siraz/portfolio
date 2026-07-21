import { motion } from "framer-motion";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#0F0B16]" />

      {/* Pink Glow */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-10 h-80 w-80 rounded-full bg-pink-300/20 blur-[120px]"
      />

      {/* Lavender Glow */}
      <motion.div
        animate={{
          x: [0, -100, 70, 0],
          y: [0, 60, -80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 h-[420px] w-[420px] rounded-full bg-violet-300/20 blur-[140px]"
      />

      {/* Small Glow */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-56 w-56 rounded-full bg-pink-200/20 blur-[90px]"
      />
    </div>
  );
}

export default Background;
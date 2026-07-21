import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="
      fixed
      inset-0
      z-[99999]
      flex
      flex-col
      items-center
      justify-center
      bg-[#FFF7F5]
      "
    >
      <h1
        className="
        pixel-title
        text-5xl
        text-[#8A6EA9]
        mb-10
        "
      >
        ZFS.
      </h1>

      <p className="mb-6 text-lg font-semibold text-[#6E5C82]">
        Loading Portfolio...
      </p>

      <div className="flex gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="
            h-5
            w-5
            border-2
            border-[#BCA7DB]
            bg-[#F8DDE3]
            "
            initial={{ opacity: 0.2 }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              delay: i * 0.12,
              repeat: Infinity,
              duration: 1,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const IntroSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section
      ref={ref}
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* ✅ Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* ✅ Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="text-center px-6 max-w-5xl relative z-10 text-white"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="label-uppercase mb-8"
        >
          Since 1981
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="heading-xl mb-6"
        >
          Quality that
          <br />
         <span className="text-secondary font-luxury">
  Speaks
</span>



        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="body-lg max-w-2xl mx-auto"
        >
          Where tradition meets excellence in every grain
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="label-uppercase text-xs">
              Scroll to explore
            </span>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-12 bg-gradient-to-b from-white to-transparent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IntroSection;

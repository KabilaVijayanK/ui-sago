import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import farmLandscape from "@/assets/farm-landscape.jpg";

const TapiocaHighlight = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src={farmLandscape}
          alt="Tapioca Farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="container-editorial relative z-10 py-32">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="label-uppercase text-cream/60 mb-8"
          >
            At the heart of our operations
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="heading-lg text-cream mb-8"
          >
            Tapioca
            <br />
            <span className="text-secondary font-luxury">and its finished products</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="body-lg text-cream/70"
          >
            We work closely with farmers, processors, and buyers across regions 
            to ensure the highest quality tapioca products reach every market.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TapiocaHighlight;
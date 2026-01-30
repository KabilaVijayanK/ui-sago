import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroUltra = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // smoother parallax
  const textY = useTransform(scrollYProgress,[0,1],[0,-60]);
  const cardY = useTransform(scrollYProgress,[0,1],[0,-40]);

  // SCROLL 3D ROTATION
const logoRotateY = useTransform(scrollYProgress,[0,1],[-25,25]);
const logoRotateX = useTransform(scrollYProgress,[0,1],[10,-10]);
const logoScale = useTransform(scrollYProgress,[0,1],[1,1.15]);
const logoY = useTransform(scrollYProgress,[0,1],[0,-80]);

  return (
    <section
      ref={ref}
      className="relative min-h-[110vh] overflow-hidden bg-[#120b07]"
    >

      {/* 🔥 LIGHT BLOBS */}
      <motion.div
        animate={{ x:[0,60,0], y:[0,30,0] }}
        transition={{ duration:22, repeat:Infinity, ease:"linear" }}
        className="
          absolute -top-40 -left-40
          w-[600px] h-[600px]
          bg-gradient-to-r from-[#c08a5b]/40 to-[#8b5e34]/20
          blur-[120px] rounded-full
        "
      />

      <motion.div
        animate={{ x:[0,-40,0], y:[0,-30,0] }}
        transition={{ duration:26, repeat:Infinity, ease:"linear" }}
        className="
          absolute top-1/2 right-0
          w-[650px] h-[650px]
          bg-gradient-to-r from-[#8b5e34]/30 to-[#c08a5b]/10
          blur-[140px] rounded-full
        "
      />

      {/* CENTER GLOW */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_40%_50%,rgba(192,138,91,0.18),transparent_60%)]
      "/>

      {/* VIGNETTE */}
      <div className="
        absolute inset-0
        bg-gradient-to-b
        from-black/60 via-transparent to-black/80
      "/>

      {/* 🏆 CONTENT */}
      <motion.div
        style={{ y:textY }}
        className="
          relative z-20
          flex flex-col
          justify-center
          pt-40
          px-16
          max-w-6xl
        "
      >
        <p className="text-[#c08a5b] tracking-[6px] text-sm mb-6">
          SINCE 1965
        </p>

        <h1 className="
          text-[clamp(70px,9vw,120px)]
          font-serif font-semibold
          text-transparent bg-clip-text
          bg-gradient-to-r
          from-[#f5d6a3]
          via-[#c08a5b]
          to-[#8b5e34]
          drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]
          mb-6
        ">
          SAGOSERVE
        </h1>

        <p className="text-[#e6d3c2] text-xl max-w-xl mb-12">
          Your Trusted Source for Quality Sago and Starch
        </p>

        <div className="flex gap-6">
          <button className="
            bg-gradient-to-r from-[#8b5e34] to-[#c08a5b]
            px-10 py-4 rounded-xl
            text-white font-semibold
            shadow-[0_0_30px_rgba(192,138,91,0.4)]
            hover:scale-105 transition
          ">
            Explore Products →
          </button>

          <button className="
            border border-[#c08a5b]/40
            px-10 py-4 rounded-xl
            text-[#d2a679]
            hover:bg-[#c08a5b]/10 transition
          ">
            View Auctions
          </button>
        </div>
      </motion.div>
      {/* 🎥 CINEMATIC 3D LOGO */}
<motion.img
  src="/logo.png"
  alt="Sagoserve"

  style={{
    rotateY: useTransform(scrollYProgress,[0,1],[-20,20]),
    rotateX: useTransform(scrollYProgress,[0,1],[10,-10]),
    scale: useTransform(scrollYProgress,[0,1],[1,1.15]),
    y: useTransform(scrollYProgress,[0,1],[0,-40]),
  }}
  

  className="
    absolute right-20 top-28
    w-[380px]

    opacity-20
    mix-blend-soft-light
    grayscale
    contrast-125

    blur-[0.5px]
    pointer-events-none
  "
/>

      {/* 💎 GLASS CARD */}
      <motion.div
        style={{ y:cardY }}
        className="
          absolute
          right-24
          top-[40%]
          z-20
        "
      >
        <div className="
          bg-gradient-to-br from-[#2a1a12]/70 to-[#1a0f08]/60
          backdrop-blur-xl
          border border-[#c08a5b]/20
          rounded-3xl p-6 w-[320px]
          text-[#f5e6d8] space-y-5
          shadow-[0_0_50px_rgba(192,138,91,0.15)]
        ">
          <p className="text-sm text-[#d2b49c]">Daily Rate</p>

          <p className="text-4xl font-semibold text-[#c08a5b]">
            ₹12,800
          </p>

          <p className="text-[#bfa58f] text-sm">
            Per Quintal · Updated Today
          </p>

          <div className="border-t border-[#c08a5b]/20 pt-4">
            <p>Live Market</p>
            <p className="text-[#bfa58f] text-sm">
              1,200+ Active Members
            </p>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default HeroUltra;

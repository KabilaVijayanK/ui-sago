import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

import sagoTexture from "@/assets/sago-texture.jpg";
import starchProduct from "@/assets/starch-product.jpg";
import brokenSago from "@/assets/broken-sago.jpg";

const products = [
  { image: sagoTexture, title: "Sago" },
  { image: starchProduct, title: "Tapioca Starch" },
  { image: brokenSago, title: "Broken Sago" },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const ProductsSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-[#f8f6f2] to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-amber-600 text-sm mb-4">
            Our Collection
          </p>

          <h2 className="text-5xl font-semibold text-gray-900">
            Our Products
          </h2>
        </div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-14"
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={card}
              whileHover={{ y: -12 }}
              className="group relative"
            >

              {/* IMAGE CARD */}
              <div className="relative overflow-hidden rounded-3xl shadow-xl">

                <img
                  src={product.image}
                  className="w-full h-[460px] object-cover 
                  group-hover:scale-110 transition duration-700"
                />

                {/* DARK FADE */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"/>

                {/* FLOATING GLASS PANEL */}
                <div className="
                  absolute bottom-6 left-6 right-6
                  bg-white/80 backdrop-blur-md
                  border border-white/40
                  rounded-2xl p-6
                  shadow-lg
                  translate-y-6 group-hover:translate-y-0
                  transition duration-500
                ">

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {product.title}
                  </h3>

                  <button className="flex items-center gap-2 
                  text-amber-600 uppercase text-xs tracking-wider font-medium">
                    Explore More
                    <ArrowRight size={16}/>
                  </button>

                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProductsSection;

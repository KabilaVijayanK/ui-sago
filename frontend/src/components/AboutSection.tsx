import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import warehouseImg from "@/assets/warehouse.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-cinematic">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-floating">
              <img
                src={warehouseImg}
                alt="SAGOSERVE Warehouse"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-secondary rounded-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="label-uppercase text-secondary mb-6 block">About Us</span>
            
            <h2 className="heading-lg text-foreground mb-8">
              Sagoserve
              <br />
              <span className="text-muted-foreground">A Gift to Tapioca Industry</span>
            </h2>

            <div className="space-y-6 text-muted-foreground body-md">
              <p>
                Formed to solve marketing issues faced by starch and sago manufacturers, 
                SAGOSERVE has been the cornerstone of the tapioca industry since 1981.
              </p>
              <p>
                We provide fair pricing through an organized auction system, backed by 
                government support, ensuring every stakeholder benefits from transparent 
                and efficient operations.
              </p>
            </div>

            <motion.button
              whileHover={{ x: 5 }}
              className="btn-luxury-outline rounded-full mt-10 group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
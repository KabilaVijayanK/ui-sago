import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, FlaskConical, Building2, Warehouse, FileText, Leaf } from "lucide-react";

const services = [
  { icon: Users, title: "Members", description: "Supporting our cooperative family" },
  { icon: FlaskConical, title: "Laboratory", description: "Quality testing & certification" },
  { icon: Building2, title: "Merchant", description: "Trading & commerce support" },
  { icon: Warehouse, title: "Warehouse", description: "Secure storage facilities" },
  { icon: FileText, title: "Tender", description: "Transparent bidding process" },
  { icon: Leaf, title: "Tapioca", description: "Farm to factory solutions" },
];

const tags = [
  "Connecting Farmers & Processors",
  "Transparent Marketing & Auction Support",
  "Empowering Manufacturers & Traders",
];

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="services" ref={containerRef} className="section-cinematic overflow-hidden">
      <div className="container-editorial mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-uppercase text-secondary block mb-4"
        >
          What We Do
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-lg text-foreground"
        >
          Services We Offer
        </motion.h2>
      </div>

      {/* Horizontal Scroll Services */}
      <div className="relative">
        <motion.div
          style={{ x }}
          className="flex gap-6 px-6 md:px-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[300px] md:w-[350px] card-floating hover-lift group"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="heading-sm text-foreground mb-3">{service.title}</h3>
              <p className="body-md text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tags */}
      <div className="container-editorial mt-20">
        <div className="flex flex-wrap gap-4 justify-center">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="px-6 py-3 rounded-full border border-border text-sm text-muted-foreground"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
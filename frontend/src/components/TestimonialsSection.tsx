import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SAGOSERVE has transformed how we do business. The transparency and fair pricing have been game-changers for our factory.",
    author: "Rajesh Kumar",
    role: "Sago Manufacturer",
  },
  {
    quote:
      "Being a member for 15 years, I've witnessed the growth and positive impact on our farming community.",
    author: "Lakshmi Devi",
    role: "Tapioca Farmer",
  },
  {
    quote:
      "The auction system is incredibly efficient. We always get the best quality products at fair market prices.",
    author: "Mohammed Farooq",
    role: "Starch Trader",
  },
  {
    quote:
      "Quality testing facilities give us confidence in every transaction we make.",
    author: "Sunita Patel",
    role: "Processing Unit Owner",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-primary">
      <div className="container-editorial">

        {/* TITLE */}
        <div className="text-center mb-24">
          <span className="label-uppercase text-primary-foreground/60">
            Testimonials
          </span>

          <h2 className="heading-lg text-primary-foreground mt-4">
            What Our Members Say
          </h2>
        </div>

        {/* ZIG ZAG GRID */}
        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-24">

          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}

              // 👉 ZIG ZAG MAGIC
              className={`
                max-w-md
                ${i % 2 === 1 ? "lg:mt-20" : ""}
              `}
            >
              <Quote className="w-8 h-8 text-primary-foreground/20 mb-4" />

              <p className="text-lg italic text-primary-foreground/90 mb-5">
                "{t.quote}"
              </p>

              <div>
                <p className="font-medium text-primary-foreground">
                  {t.author}
                </p>

                <p className="text-sm text-primary-foreground/60">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

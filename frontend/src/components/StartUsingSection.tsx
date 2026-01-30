import { motion } from "framer-motion";
import { UserPlus, Radio, ShoppingBag, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Register",
    desc: "Create your SAGOSERVE account",
  },
  {
    icon: Radio,
    title: "Live Auctions",
    desc: "Bid transparently in real time",
  },
  {
    icon: ShoppingBag,
    title: "Buy Products",
    desc: "Access premium sago & starch",
  },
];

const StartUsingSection = () => {
  return (
    <section className="py-32 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE (Editorial) */}
        <motion.div
          initial={{ opacity:0, x:-40 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true }}
        >
          <span className="uppercase tracking-[4px] text-amber-700 text-sm">
            Get Started
          </span>

          <h2 className="text-6xl font-serif mt-6 mb-8 text-gray-900 leading-tight">
            Trade smarter with  
            <span className="text-amber-700"> SAGOSERVE</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-md mb-10">
            A simple 3-step journey to access India’s most trusted
            sago marketplace.
          </p>

          <button className="bg-amber-700 text-white px-8 py-4 rounded-xl flex gap-3 items-center hover:bg-amber-800 transition">
            Start Now <ArrowRight size={18}/>
          </button>
        </motion.div>

        {/* RIGHT SIDE (Stack Cards) */}
        <div className="space-y-6">

          {steps.map((s,i)=>(
            <motion.div
              key={i}
              initial={{ opacity:0, x:60 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ delay:i*0.2 }}
              viewport={{ once:true }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition flex items-center gap-6 group"
            >

              <div className="w-16 h-16 rounded-xl bg-amber-700/10 flex items-center justify-center">
                <s.icon className="w-8 h-8 text-amber-700"/>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-1">
                  {s.title}
                </h3>
                <p className="text-gray-600">
                  {s.desc}
                </p>
              </div>

              <ArrowRight className="ml-auto text-gray-400 group-hover:text-amber-700 transition"/>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StartUsingSection;

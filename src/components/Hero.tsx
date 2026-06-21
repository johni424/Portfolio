import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <span className="font-mono text-[12px] uppercase tracking-[0.4em] text-[#0891B2]">
              A Digital Architect Studio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[64px] md:text-[96px] leading-[0.9] italic mb-8 font-heading text-white"
          >
            Crafting <span className="text-[#06B6D4]">Digital</span><br/>Experiences.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/80 text-[18px] mb-10 max-w-lg mx-auto font-light leading-relaxed"
          >
            Specializing in high-performance blockchain interfaces and immersive brand storytelling for tech entrepreneurs.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#work" className="btn-primary w-full sm:w-auto px-8 py-3 flex items-center justify-center gap-2">
              Explore Our Work
            </a>
            <a href="#services" className="btn-secondary w-full sm:w-auto px-8 py-3 flex items-center justify-center">
              Our Services
            </a>
          </motion.div>
        </motion.div>

        {/* Abstract metrics / stats at the bottom of hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-12"
        >
          {[
            { metric: '$300M+', desc: 'Funding raised by clients' },
            { metric: '60+', desc: 'Design awards won' },
            { metric: '100M+', desc: 'Active daily users' },
            { metric: '24%', desc: 'Avg conversion increase' },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="font-heading font-bold text-3xl md:text-4xl text-white mb-2">{stat.metric}</div>
              <div className="text-sm font-mono text-gray-500">{stat.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

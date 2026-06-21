import { motion } from 'motion/react';
import { Target, Layers, Layout, Code2 } from 'lucide-react';

const services = [
  {
    title: 'Brand Strategy',
    description: 'We establish comprehensive product-market fit hypotheses, validate them, and visualise in the most creative ways.',
    icon: Target,
  },
  {
    title: 'Brand Visual',
    description: 'We create brand materials that speak of your values non-verbally and complement your offering to the market.',
    icon: Layers,
  },
  {
    title: 'UI/UX Design',
    description: 'We research deeply, validate thoroughly, and design intuitive interfaces that attract and retain users.',
    icon: Layout,
  },
  {
    title: 'Development',
    description: 'We take care of your product’s implementation, assuring the most efficient usage of time and resources.',
    icon: Code2,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 md:flex justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Innovate with us</h2>
            <p className="text-gray-400 text-lg">
              Whether you need a full-scale IT partner to define the roadmap or a vendor for particular tasks, we got you covered from concept to launch.
            </p>
          </div>
          <div className="hidden md:block w-px h-16 bg-brand-primary opacity-50 relative anim-border-beam" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 group relative overflow-hidden ${
                index % 2 === 0 ? 'hover:border-[#0891B2]/30' : 'hover:border-[#06B6D4]/30'
              }`}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} />
                </div>
                <h3 className="text-2xl font-heading mb-4 text-white">{service.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm max-w-md">
                  {service.description}
                </p>
              </div>
              <div className={`absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500 ${
                index % 2 === 0 ? 'bg-[#0891B2]' : 'bg-[#06B6D4]'
              }`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

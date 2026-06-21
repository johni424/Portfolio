import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    title: 'Brainforest',
    category: 'AI Productivity Platform',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1600&h=900',
    description: 'Transformed the AI learning platform through comprehensive brand identity and intuitive UX/UI design.',
  },
  {
    title: 'Stable0x',
    category: 'DeFi protocol',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600&h=900',
    description: 'Helped establish credibility in competitive DeFi, attracting early adopters with a bold new website.',
  },
  {
    title: 'Fitonist',
    category: 'Mobile Fitness App',
    image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1600&h=900',
    description: 'Enhanced user engagement and sign-ups with a cohesive brand identity and gamified mobile design.',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 bg-brand-bg relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-heading font-medium mb-4 italic leading-tight text-white">Case <span className="text-[#0891B2]">Studies</span>.</h2>
            <p className="text-white/60 text-lg font-light max-w-xl">
              We focus primarily on your product’s funding & business success. We research deeply, validate thoroughly, and launch confidently.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors group font-mono text-xs uppercase tracking-widest">
            View all projects
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((project, idx) => {
            const colors = ['bg-[#0891B2]', 'bg-[#06B6D4]', 'bg-[#059669]'];
            const hoverBorders = ['hover:border-[#0891B2]/30', 'hover:border-[#06B6D4]/30', 'hover:border-[#059669]/30'];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`group relative bg-[#1A1A1A] border border-white/5 p-8 transition-all ${hoverBorders[idx % 3]} cursor-pointer flex flex-col`}
              >
                <div className="flex justify-between items-start mb-8 z-10 relative">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                    0{idx + 1} / CASE STUDY
                  </span>
                  <div className={`w-2 h-2 rounded-full ${colors[idx % 3].replace('bg-', 'bg-')}`}></div>
                </div>

                <div className="relative overflow-hidden mb-8 aspect-[4/3] bg-black/50 z-10 w-full mx-auto">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <div className="z-10 relative mt-auto">
                  <h3 className="text-2xl font-heading mb-2 font-medium text-white">{project.title}</h3>
                  <p className="text-sm text-white/50 mb-0">
                    {project.description}
                  </p>
                </div>

                <div className={`absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500 ${colors[idx % 3]}`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

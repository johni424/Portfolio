import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="glass-panel rounded-2xl p-8 md:p-16 border border-white/10 anim-border-beam relative">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-[64px] font-heading font-medium mb-6 italic leading-[1.1] text-white">
                  Let's craft something <span className="text-brand-primary not-italic">extraordinary.</span>
                </h2>
                <p className="text-white/60 text-[18px] mb-8 font-light max-w-md">
                  Have an ambitious project in mind? We'd love to help you bring it to life with precision and creativity.
                </p>
                
                <div className="flex flex-col gap-6 font-mono text-sm">
                  <div className="flex items-center gap-4 text-white/70">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                      <Mail size={16} className="text-brand-primary" />
                    </div>
                    <a href="mailto:hello@primora.io" className="hover:text-brand-primary transition-colors">
                      hello@primora.io
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-white/70">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                      <MapPin size={16} className="text-brand-primary" />
                    </div>
                    <span>Lewes, USA — Operating Globally</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/70">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      placeholder="Jane Doe"
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/70">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      placeholder="jane@company.com"
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 mt-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    placeholder="Tell us about your project goals..."
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-4 mt-4 font-semibold flex items-center justify-center gap-2 group">
                  Send Message
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

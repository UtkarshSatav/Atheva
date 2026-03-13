"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as unknown as any }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function UpcomingProperties() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden border-t border-border-subtle">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                    className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
                    {...fadeInUp}
                >
                    <span className="text-primary-gold text-xs font-bold tracking-[0.25em] uppercase mb-4 border-b border-primary-gold/30 pb-2">
                        Expanding Our Horizons
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-text-main leading-tight mb-6">
                        Upcoming <span className="italic text-primary-dark">Destinations</span>
                    </h2>
                    <p className="text-text-muted text-lg font-light leading-relaxed">
                        ATHEVA brings its signature luxury hospitality to the tranquil mountains. Discover our upcoming holistic retreat and lakeside resort experiences.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                >
                    {/* Property 1: Bhimtal */}
                    <motion.div variants={fadeInUp} className="group cursor-pointer">
                        <Link href="/destinations/bhimtal">
                            <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-6 shadow-lg border border-border-subtle">
                                <img 
                                    src="/prop-lansdowne.png" 
                                    alt="Atheva, Bhimtal" 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <h3 className="text-white font-serif text-3xl font-medium drop-shadow-md">Atheva</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-primary-gold mb-3">
                                <span className="material-symbols-outlined text-lg">location_on</span>
                                <span className="text-xs uppercase tracking-widest font-bold">Bhimtal, Uttarakhand</span>
                            </div>
                            <p className="text-text-muted font-light leading-relaxed line-clamp-3">
                                A serene lakeside sanctuary offering holistic wellness, luxurious cottage accommodations, and unparalleled views of the pristine Bhimtal lake. Reconnect with nature in absolute comfort.
                            </p>
                        </Link>
                    </motion.div>

                    {/* Property 2: Lansdowne */}
                    <motion.div variants={fadeInUp} className="group cursor-pointer">
                        <Link href="/destinations/lansdowne">
                            <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-6 shadow-lg border border-border-subtle">
                                <img 
                                    src="/Create_a_cinimatic_image_in_4k_quality_using_the_i_delpmaspu.png" 
                                    alt="Atheva, Lansdowne" 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <h3 className="text-white font-serif text-3xl font-medium drop-shadow-md">Atheva</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-primary-gold mb-3">
                                <span className="material-symbols-outlined text-lg">location_on</span>
                                <span className="text-xs uppercase tracking-widest font-bold">Lansdowne, Uttarakhand</span>
                            </div>
                            <p className="text-text-muted font-light leading-relaxed line-clamp-3">
                                Elevate your senses at our exclusive mountain retreat. Nestled amongst dense pine forests, experience heritage luxury, cool mountain breezes, and panoramic Himalayan vistas.
                            </p>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

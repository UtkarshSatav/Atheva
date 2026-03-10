"use client";

import { motion } from "framer-motion";
import UpcomingProperties from "@/components/UpcomingProperties";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function BhimtalPage() {
    return (
        <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-white">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img 
                        src="/lansdowne-5.jpeg" 
                        alt="ATHEVA Bhimtal" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-20 text-center px-6">
                    <motion.h1 
                        className="font-serif text-5xl md:text-7xl text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        ATHEVA Bhimtal
                    </motion.h1>
                    <p className="text-white/90 text-lg md:text-xl font-light tracking-widest uppercase">A Lakeside Retreat in the Kumaon Hills</p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div {...fadeInUp}>
                        <h2 className="font-serif text-4xl text-text-main mb-8">A Destination to Relax and Reconnect</h2>
                        <p className="text-text-muted text-lg font-light leading-relaxed mb-6">
                            Nestled amidst the tranquil landscapes of Uttarakhand, ATHEVA Bhimtal is envisioned as a boutique hospitality destination offering guests a peaceful retreat close to nature.
                        </p>
                        <p className="text-text-muted text-lg font-light leading-relaxed mb-8">
                            Located near the scenic Bhimtal Lake, this property combines the charm of the mountains with the warmth of Indian hospitality. Surrounded by hills, fresh mountain air, and beautiful landscapes, the property offers a calm environment perfect for relaxation and meaningful experiences.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <span className="material-symbols-outlined text-primary-gold">landscape</span>
                                <span className="text-sm font-bold uppercase tracking-wider">Scenic Views</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="material-symbols-outlined text-primary-gold">waves</span>
                                <span className="text-sm font-bold uppercase tracking-wider">Lakeside</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="rounded-sm overflow-hidden shadow-2xl aspect-[4/3]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <img 
                            src="/lansdowne-6.jpeg" 
                            alt="Bhimtal Resort View" 
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Experiences Section */}
            <section className="py-24 px-6 md:px-12 bg-background-offwhite">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-serif text-4xl text-center mb-16">Experiences at ATHEVA Bhimtal</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Boutique Mountain Stay",
                                desc: "Elegant 32 Rooms and Cottages designed to offer comfort and breath-taking views of the surrounding hills.",
                                icon: "hotel"
                            },
                            {
                                title: "Destination Celebrations",
                                desc: "A beautiful venue for weddings, family gatherings, and special celebrations in a serene setting.",
                                icon: "favorite"
                            },
                            {
                                title: "Nature Retreats",
                                desc: "A peaceful environment ideal for weekend getaways and relaxation.",
                                icon: "forest"
                            }
                        ].map((exp, i) => (
                            <div key={i} className="bg-white p-10 rounded-sm border border-border-subtle hover:shadow-xl transition-all">
                                <span className="material-symbols-outlined text-primary-gold text-4xl mb-6">{exp.icon}</span>
                                <h3 className="font-serif text-2xl mb-4">{exp.title}</h3>
                                <p className="text-text-muted font-light text-sm leading-relaxed">{exp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Discovery Section */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
                <h2 className="font-serif text-4xl mb-8">Discover the Beauty of Bhimtal</h2>
                <p className="text-text-muted text-lg font-light max-w-3xl mx-auto leading-relaxed">
                    Bhimtal is one of the most beautiful destinations in the Kumaon region, known for its scenic lake, peaceful surroundings, and charming hill town atmosphere. ATHEVA Bhimtal offers visitors an opportunity to experience this beauty while enjoying warm and welcoming hospitality.
                </p>
            </section>

            <UpcomingProperties />
        </div>
    );
}

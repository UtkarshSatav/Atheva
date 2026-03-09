"use client";

import { motion } from "framer-motion";
import UpcomingProperties from "@/components/UpcomingProperties";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function LansdownePage() {
    return (
        <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-white">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDymQx_o-WJ7SBegaTFGei8Yf-b5B-dbfAYYhFn434nW2QVwSl3g3Y9XZTezgrNuvdd6dRLl8hlx336U-ChJ5GxTel8anDsv6_hPSYLlhNloxFDRbsPbYevKSdDQ_KZQy4kuy2HWlZFwnpRx5tH7mBJASXOvkubonNZ0AW0QsDZ7gKDIggOXLv-m6yULaecyBY3S6g7lwVIlACTUMnt9i-3zGw0ak6qta9B52qkpW4JBgQoxUzZuBng6t0l4cGF3ZFzD55z-KeYsl11" 
                        alt="ATHEVA Lansdowne" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-20 text-center px-6">
                    <motion.h1 
                        className="font-serif text-5xl md:text-7xl text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        ATHEVA Lansdowne
                    </motion.h1>
                    <p className="text-white/90 text-lg md:text-xl font-light tracking-widest uppercase">A Forest Retreat in the Garhwal Hills</p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div {...fadeInUp}>
                        <h2 className="font-serif text-4xl text-text-main mb-8">A Destination Surrounded by Nature</h2>
                        <p className="text-text-muted text-lg font-light leading-relaxed mb-6">
                            Located in the serene hill station of Lansdowne, ATHEVA Lansdowne is designed as a boutique destination surrounded by the natural beauty of Uttarakhand’s forests and mountains.
                        </p>
                        <p className="text-text-muted text-lg font-light leading-relaxed mb-8">
                            Known for its peaceful environment and breath-taking landscapes, Lansdowne offers the perfect setting for guests seeking relaxation and rejuvenation. ATHEVA Lansdowne is envisioned as a tranquil retreat where guests can experience the quiet charm of the hills while enjoying thoughtful hospitality.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <span className="material-symbols-outlined text-primary-gold">park</span>
                                <span className="text-sm font-bold uppercase tracking-wider">Forest Retreat</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="material-symbols-outlined text-primary-gold">filter_hdr</span>
                                <span className="text-sm font-bold uppercase tracking-wider">Mountain Views</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="rounded-sm overflow-hidden shadow-2xl aspect-[4/3]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDymQx_o-WJ7SBegaTFGei8Yf-b5B-dbfAYYhFn434nW2QVwSl3g3Y9XZTezgrNuvdd6dRLl8hlx336U-ChJ5GxTel8anDsv6_hPSYLlhNloxFDRbsPbYevKSdDQ_KZQy4kuy2HWlZFwnpRx5tH7mBJASXOvkubonNZ0AW0QsDZ7gKDIggOXLv-m6yULaecyBY3S6g7lwVIlACTUMnt9i-3zGw0ak6qta9B52qkpW4JBgQoxUzZuBng6t0l4cGF3ZFzD55z-KeYsl11" 
                            alt="Lansdowne Scenery" 
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Experiences Section */}
            <section className="py-24 px-6 md:px-12 bg-background-offwhite">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-serif text-4xl text-center mb-16">Experiences at ATHEVA Lansdowne</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Boutique Forest Stay",
                                desc: "Comfortable accommodations designed to blend naturally with the surrounding landscape.",
                                icon: "cabin"
                            },
                            {
                                title: "Destination Weddings",
                                desc: "A unique venue for weddings and celebrations in the scenic beauty of the mountains.",
                                icon: "favorite"
                            },
                            {
                                title: "Corporate Retreats",
                                desc: "An ideal setting for team retreats, leadership meetings, and offsite gatherings.",
                                icon: "groups"
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
                <h2 className="font-serif text-4xl mb-8">Discover the Charm of Lansdowne</h2>
                <p className="text-text-muted text-lg font-light max-w-3xl mx-auto leading-relaxed">
                    Lansdowne is one of Uttarakhand’s most peaceful hill stations, known for its pine forests, scenic viewpoints, and calm atmosphere. ATHEVA Lansdowne offers guests a chance to experience the beauty of this destination while enjoying the warmth of Athithi + Seva hospitality.
                </p>
            </section>

            <UpcomingProperties />
        </div>
    );
}

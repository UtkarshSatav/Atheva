"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UpcomingProperties from "@/components/UpcomingProperties";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const PROPERTY_IMAGES = [
    { src: "/lansdowne-3.jpeg", alt: "Red Roof Resort — Resort overview with cottages and mountains" },
    { src: "/lansdowne-4.jpeg", alt: "Red Roof Resort — Building exterior and corridor" },
    { src: "/lansdowne-1.jpeg", alt: "Red Roof Resort — Mountain walkway view" },
    { src: "/lansdowne-2.jpeg", alt: "Red Roof Resort — Building exterior with seating" },
    { src: "/lansdowne-6.jpeg", alt: "Red Roof Resort — Wide resort panoramic view" },
    { src: "/lansdowne-9.jpeg", alt: "Red Roof Resort — Aerial view of green roof cottages" },
    { src: "/lansdowne-12.jpeg", alt: "Red Roof Resort — Garden lawn with mountain backdrop" },
    { src: "/lansdowne-7.jpeg", alt: "Red Roof Resort — Stunning night view" },
    { src: "/lansdowne-8.jpeg", alt: "Red Roof Resort — Night view with colorful lights" },
    { src: "/lansdowne-11.jpeg", alt: "Red Roof Resort — Night distant panoramic" },
    { src: "/lansdowne-5.jpeg", alt: "Red Roof Resort — Full resort view" },
    { src: "/lansdowne-10.jpeg", alt: "Red Roof Resort — Night close-up" },
    { src: "/lansdowne-13.jpeg", alt: "Red Roof Resort — Night wide view" },
];

export default function LansdownePage() {
    const [lightbox, setLightbox] = useState<number | null>(null);

    return (
        <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-white">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img 
                        src="/lansdowne-3.jpeg" 
                        alt="ATHEVA Lansdowne — Red Roof Resort" 
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
                    <p className="text-white/90 text-lg md:text-xl font-light tracking-widest uppercase">Red Roof Resort — A Forest Retreat in the Garhwal Hills</p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div {...fadeInUp}>
                        <h2 className="font-serif text-4xl text-text-main mb-8">A Destination Surrounded by Nature</h2>
                        <p className="text-text-muted text-lg font-light leading-relaxed mb-6">
                            Located in the serene hill station of Lansdowne, ATHEVA Lansdowne — Red Roof Resort is designed as a boutique destination surrounded by the natural beauty of Uttarakhand's forests and mountains.
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
                            src="/lansdowne-4.jpeg" 
                            alt="Red Roof Resort Lansdowne — Resort View" 
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
                                icon: "cabin",
                                image: "/lansdowne-2.jpeg"
                            },
                            {
                                title: "Destination Weddings",
                                desc: "A unique venue for weddings and celebrations in the scenic beauty of the mountains.",
                                icon: "favorite",
                                image: "/lansdowne-12.jpeg"
                            },
                            {
                                title: "Corporate Retreats",
                                desc: "An ideal setting for team retreats, leadership meetings, and offsite gatherings.",
                                icon: "groups",
                                image: "/lansdowne-6.jpeg"
                            }
                        ].map((exp, i) => (
                            <div key={i} className="bg-white rounded-sm border border-border-subtle hover:shadow-xl transition-all overflow-hidden group">
                                <div className="aspect-[16/9] overflow-hidden">
                                    <img 
                                        src={exp.image} 
                                        alt={exp.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-8">
                                    <span className="material-symbols-outlined text-primary-gold text-4xl mb-6">{exp.icon}</span>
                                    <h3 className="font-serif text-2xl mb-4">{exp.title}</h3>
                                    <p className="text-text-muted font-light text-sm leading-relaxed">{exp.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Property Gallery Section */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <motion.div className="text-center mb-16" {...fadeInUp}>
                    <span className="text-primary-gold text-xs font-bold tracking-[0.25em] uppercase mb-4 border-b border-primary-gold/30 pb-2 inline-block">
                        Red Roof Resort
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-text-main mt-4">Property Gallery</h2>
                    <p className="text-text-muted text-lg font-light mt-4 max-w-2xl mx-auto">
                        Explore the beauty of Red Roof Resort, Lansdowne — signed under the ATHEVA brand.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {PROPERTY_IMAGES.map((img, i) => (
                        <motion.div 
                            key={i}
                            className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            onClick={() => setLightbox(i)}
                        >
                            <img 
                                src={img.src} 
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="material-symbols-outlined text-white text-3xl drop-shadow-lg">zoom_in</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox !== null && (
                    <motion.div 
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightbox(null)}
                    >
                        <motion.img 
                            src={PROPERTY_IMAGES[lightbox].src}
                            alt={PROPERTY_IMAGES[lightbox].alt}
                            className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button 
                            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                            onClick={() => setLightbox(null)}
                        >
                            <span className="material-symbols-outlined text-4xl">close</span>
                        </button>
                        {lightbox > 0 && (
                            <button 
                                className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
                            >
                                <span className="material-symbols-outlined text-5xl">chevron_left</span>
                            </button>
                        )}
                        {lightbox < PROPERTY_IMAGES.length - 1 && (
                            <button 
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
                            >
                                <span className="material-symbols-outlined text-5xl">chevron_right</span>
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Discovery Section */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center bg-background-offwhite">
                <h2 className="font-serif text-4xl mb-8">Discover the Charm of Lansdowne</h2>
                <p className="text-text-muted text-lg font-light max-w-3xl mx-auto leading-relaxed">
                    Lansdowne is one of Uttarakhand's most peaceful hill stations, known for its pine forests, scenic viewpoints, and calm atmosphere. ATHEVA Lansdowne offers guests a chance to experience the beauty of this destination while enjoying the warmth of Athithi + Seva hospitality.
                </p>
            </section>

            <UpcomingProperties />
        </div>
    );
}

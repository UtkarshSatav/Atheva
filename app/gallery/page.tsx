"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const GALLERY_IMAGES = [
    { src: "/lansdowne-3.jpeg", alt: "Red Roof Resort — Resort overview with cottages and mountains", category: "Lansdowne" },
    { src: "/lansdowne-7.jpeg", alt: "Red Roof Resort — Stunning night panoramic view", category: "Lansdowne" },
    { src: "/lansdowne-4.jpeg", alt: "Red Roof Resort — Building exterior and corridor", category: "Lansdowne" },
    { src: "/lansdowne-9.jpeg", alt: "Red Roof Resort — Aerial view of green roof cottages", category: "Lansdowne" },
    { src: "/lansdowne-1.jpeg", alt: "Red Roof Resort — Mountain walkway view", category: "Lansdowne" },
    { src: "/lansdowne-12.jpeg", alt: "Red Roof Resort — Garden lawn with mountain backdrop", category: "Lansdowne" },
    { src: "/lansdowne-5.jpeg", alt: "Red Roof Resort — Full resort view", category: "Lansdowne" },
    { src: "/lansdowne-6.jpeg", alt: "Red Roof Resort — Wide resort panoramic view", category: "Lansdowne" },
    { src: "/lansdowne-2.jpeg", alt: "Red Roof Resort — Building exterior with seating", category: "Lansdowne" },
    { src: "/lansdowne-8.jpeg", alt: "Red Roof Resort — Night view with colorful lights", category: "Lansdowne" },
    { src: "/lansdowne-11.jpeg", alt: "Red Roof Resort — Night distant panoramic", category: "Lansdowne" },
    { src: "/lansdowne-10.jpeg", alt: "Red Roof Resort — Night close-up", category: "Lansdowne" },
    { src: "/lansdowne-13.jpeg", alt: "Red Roof Resort — Night wide view", category: "Lansdowne" },
];

export default function GalleryPage() {
    const [lightbox, setLightbox] = useState<number | null>(null);

    return (
        <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-background-offwhite">
            {/* Hero Header */}
            <div className="relative w-full h-[40vh] min-h-[300px]">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img src="/lansdowne-7.jpeg" alt="ATHEVA Gallery" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pt-20">
                    <motion.h1 
                        className="font-serif text-5xl md:text-7xl text-white mb-4 drop-shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Gallery
                    </motion.h1>
                    <p className="text-white/80 text-lg font-light tracking-widest uppercase">Discover the ATHEVA Experience</p>
                </div>
            </div>

            <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
                {/* Masonry-style Gallery */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {GALLERY_IMAGES.map((img, i) => (
                        <motion.div 
                            key={i}
                            className="relative rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer group break-inside-avoid"
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="whileInView"
                            onClick={() => setLightbox(i)}
                        >
                            <img 
                                src={img.src} 
                                alt={img.alt} 
                                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-white text-xs font-bold tracking-widest uppercase">{img.category}</span>
                            </div>
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
                            src={GALLERY_IMAGES[lightbox].src}
                            alt={GALLERY_IMAGES[lightbox].alt}
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
                        {lightbox < GALLERY_IMAGES.length - 1 && (
                            <button 
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
                            >
                                <span className="material-symbols-outlined text-5xl">chevron_right</span>
                            </button>
                        )}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                            {lightbox + 1} / {GALLERY_IMAGES.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

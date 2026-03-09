"use client";

import { motion } from "framer-motion";
import UpcomingProperties from "@/components/UpcomingProperties";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function PartnerPage() {
    return (
        <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCxFs6UlYnBlNvQA-BkqHTGD6QvYfT8nxGIkNzeLwu22HqKALeXjCTQ4AnQqGsPVLiPKg8H_ZL875_EMjAGJrLE4xW_oq8R2Ihm-DfiypSzvXQrHxMfMtP0nR-0YSND_y9aRPg5EuuNQRBa0V958i2US79zjm4uJ5zeaeWJydOkd_0B_oausxS-lxxW2mEngJ7LO0vIZOOEuV0EtOqlUE9hZ2kVUOMaEydPkNvojyAg7IJLNsYUuxPnsSihDsHZbdiavJo6txaNGZ_" 
                        alt="Partner With Us" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-20 text-center px-6">
                    <motion.h1 
                        className="font-serif text-5xl md:text-7xl text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Partner With Us
                    </motion.h1>
                    <p className="text-white/90 text-lg md:text-xl font-light tracking-widest uppercase">Building Hospitality Destinations Together</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Resort Development */}
                    <motion.div {...fadeInUp} className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary-gold text-4xl">domain</span>
                            <h2 className="font-serif text-4xl text-text-main">Resort Development</h2>
                        </div>
                        <p className="text-text-muted text-lg font-light leading-relaxed">
                            ATHEVA is expanding across scenic and culturally rich destinations in India. We collaborate with developers, resort owners, and landowners to create boutique hospitality destinations that combine beautiful locations with meaningful guest experiences.
                        </p>
                        <p className="text-text-muted text-lg font-light leading-relaxed">
                            Our development model focuses on creating destination properties that attract travelers, wedding events, and retreats throughout the year.
                        </p>
                    </motion.div>

                    {/* Landowner Partnerships */}
                    <motion.div {...fadeInUp} className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary-gold text-4xl">handshake</span>
                            <h2 className="font-serif text-4xl text-text-main">Landowner Partnerships</h2>
                        </div>
                        <p className="text-text-muted text-lg font-light leading-relaxed">
                            If you own land or a property in a tourism or scenic destination, ATHEVA offers an opportunity to develop a boutique hospitality retreat through strategic partnership.
                        </p>
                        <div className="bg-background-offwhite p-8 rounded-sm border border-border-subtle mt-4">
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Ideal Locations Include:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light">
                                <li className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary-gold text-sm">check_circle</span>
                                    Hill stations
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary-gold text-sm">check_circle</span>
                                    Lakeside destinations
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary-gold text-sm">check_circle</span>
                                    Forest retreats
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary-gold text-sm">check_circle</span>
                                    Cultural tourism destinations
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-background-offwhite border-y border-border-subtle text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-serif text-4xl mb-6">Transform Your Property Into a Destination</h2>
                    <p className="text-text-muted text-lg font-light mb-10 leading-relaxed">
                        Through collaboration with ATHEVA, landowners can transform their property into a destination that attracts guests seeking memorable travel experiences.
                    </p>
                    <button className="bg-primary-gold hover:bg-primary-dark text-white px-12 py-4 rounded-sm text-sm font-bold uppercase tracking-widest transition-all shadow-xl">
                        Contact Our Development Team
                    </button>
                </div>
            </section>

            <UpcomingProperties />
        </div>
    );
}

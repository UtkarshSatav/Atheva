"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as unknown as any }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ExperiencesPage() {
    return (
        <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <Image
                        src="/v2-7.jpeg"
                        alt="Atheva Experiences"
                        fill
                        className="object-fill"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/60 z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.5)_100%)] z-10" />
                </motion.div>
                <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl flex flex-col items-center gap-8 mt-20">
                    <motion.span 
                        className="inline-block py-2 px-6 border-y border-white/60 text-white text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Premium Hospitality
                    </motion.span>
                    <motion.h1 
                        className="text-white font-serif text-6xl md:text-8xl font-medium leading-[0.9] tracking-tight drop-shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Curated <span className="italic text-primary-light font-light">Moments</span>, <br />
                        Lasting <span className="italic text-primary-light font-light">Memories</span>
                    </motion.h1>
                    <motion.p 
                        className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl drop-shadow-md tracking-wide"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Every experience at ATHEVA reflects the philosophy of Athithi + Seva, ensuring that every guest is treated with care and sincerity.
                    </motion.p>
                    <motion.div 
                        className="mt-8 flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <button className="h-14 px-10 bg-white hover:bg-neutral-50 text-text-main font-bold uppercase tracking-widest text-xs transition-all shadow-xl flex items-center justify-center gap-2 group border border-white">
                            Start Planning
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform text-primary-gold">
                                arrow_forward
                            </span>
                        </button>
                        <button className="h-14 px-10 bg-black/20 hover:bg-black/40 text-white border border-white/30 font-bold uppercase tracking-widest text-xs backdrop-blur-md transition-all flex items-center justify-center">
                            View Gallery
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-24 px-4 sm:px-10 lg:px-20 bg-background-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="container mx-auto relative z-10">
                    <motion.div 
                        className="flex flex-col items-center text-center mb-20 gap-4"
                        {...fadeInUp}
                    >
                        <h2 className="text-primary-gold font-bold text-xs tracking-[0.25em] uppercase border-b border-primary-gold/30 pb-2">
                            Our Expertise
                        </h2>
                        <h3 className="text-text-main text-4xl md:text-6xl font-serif italic">Curated Services</h3>
                        <p className="text-text-muted max-w-xl text-lg font-light leading-relaxed">
                            We don't just host events; we craft experiences. Explore our specialized services tailored to elevate
                            every occasion.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Boutique Stays",
                                subtitle: "A Stay That Feels Personal",
                                desc: "ATHEVA destinations are designed as boutique hospitality retreats, offering guests an experience that feels both intimate and memorable. Unlike large hotels, ATHEVA properties focus on personalized hospitality, peaceful environments, and thoughtfully designed spaces.",
                                icon: "hotel",
                                img: "/Screenshot 2026-03-13 at 5.15.32 PM.png"
                            },
                            {
                                title: "Weddings & Celebrations",
                                subtitle: "Celebrate Life's Most Meaningful Moments",
                                desc: "ATHEVA destinations are designed to host beautiful and memorable celebrations. From destination weddings to family gatherings, each property offers elegant venues and warm hospitality that create unforgettable moments.",
                                icon: "favorite",
                                img: "/Weeding.png"
                            },
                            {
                                title: "Corporate Retreats",
                                subtitle: "Where Ideas and Inspiration Meet",
                                desc: "ATHEVA destinations offer a peaceful environment that is ideal for corporate retreats, leadership gatherings, and team offsite events. Away from the distractions of city life, guests can focus on collaboration and reflection.",
                                icon: "groups",
                                img: "/Corporate.png"
                            }
                        ].map((exp, i) => (
                            <motion.div 
                                key={i}
                                className="group bg-white rounded-sm overflow-hidden border border-border-subtle hover:shadow-2xl transition-all duration-500"
                                {...fadeInUp}
                            >
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="material-symbols-outlined text-primary-gold text-2xl">{exp.icon}</span>
                                        <h4 className="text-primary-gold text-[10px] font-bold uppercase tracking-[0.2em]">{exp.subtitle}</h4>
                                    </div>
                                    <h3 className="font-serif text-2xl text-text-main mb-4">{exp.title}</h3>
                                    <p className="text-text-muted text-sm font-light leading-relaxed mb-6">{exp.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experiences Detail Section */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="space-y-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp}>
                            <h3 className="font-serif text-3xl mb-6 italic text-primary-gold">Boutique Stays</h3>
                            <ul className="space-y-4 text-text-muted text-lg font-light list-disc pl-6 leading-relaxed">
                                <li>Comfortable and elegant rooms</li>
                                <li>Scenic natural surroundings</li>
                                <li>Relaxed and peaceful environments</li>
                                <li>Personalized guest service</li>
                            </ul>
                        </motion.div>
                        <motion.div {...fadeInUp} className="bg-background-offwhite p-12 rounded-sm border border-border-subtle">
                             <h3 className="font-serif text-3xl mb-6 italic text-primary-gold">Weddings & Celebrations</h3>
                             <p className="text-text-muted text-lg font-light leading-relaxed mb-6">
                                ATHEVA provides the perfect setting for destination weddings, engagement ceremonies, family celebrations, and cultural gatherings.
                             </p>
                        </motion.div>
                    </div>

                    <motion.div 
                        className="bg-text-main text-white p-16 rounded-sm text-center"
                        {...fadeInUp}
                    >
                        <h3 className="font-serif text-4xl mb-8">Corporate Retreats</h3>
                        <p className="text-white/70 text-xl font-light max-w-4xl mx-auto leading-relaxed mb-12">
                            ATHEVA creates an environment where professionals can reconnect, recharge, and return with renewed inspiration.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { title: "Quiet Surroundings", icon: "nature_people" },
                                { title: "Meeting Spaces", icon: "meeting_room" },
                                { title: "Accommodations", icon: "hotel" },
                                { title: "Team Bonding", icon: "groups" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-3">
                                    <span className="material-symbols-outlined text-primary-gold text-3xl">{item.icon}</span>
                                    <span className="text-xs font-bold uppercase tracking-widest">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}

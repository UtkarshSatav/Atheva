"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import UpcomingProperties from "@/components/UpcomingProperties";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
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

const CORE_VALUES = [
    {
        title: "Unparalleled Luxury",
        desc: "We define luxury not just by opulent surroundings, but by the thoughtful anticipation of our guests' every need.",
        icon: "diamond"
    },
    {
        title: "Curated Experiences",
        desc: "Every event and stay is a bespoke journey, tailored to create lasting memories that are uniquely yours.",
        icon: "hotel_class"
    },
    {
        title: "Flawless Service",
        desc: "Our dedicated team operates with precision, warmth, and an unwavering commitment to excellence.",
        icon: "handshake"
    },
    {
        title: "Timeless Elegance",
        desc: "From architecture to interior design, we blend classic sophistication with modern comforts seamlessly.",
        icon: "architecture"
    }
];


export default function AboutPage() {
    return (
        <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-background-offwhite pb-24">
            {/* Hero Header */}
            <div className="relative w-full h-[50vh] min-h-[400px]">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.4)_100%)] z-10" />
                    <Image
                        src="/v2-3.jpeg"
                        alt="Atheva Resort Grand Entrance"
                        fill
                        className="object-cover object-bottom-right scale-[1.1] origin-bottom-right"
                        priority
                    />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pt-20 px-4">
                    <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary-gold text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase border-b border-primary-gold/50 pb-1 px-4 inline-block mb-6 bg-black/30 backdrop-blur-sm rounded-sm">
                            The Philosophy
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white drop-shadow-md">Athithi + Seva</h1>
                    </motion.div>
                </div>
            </div>

            {/* Our Story Section */}
            <section className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        className="flex flex-col gap-8"
                        {...fadeInUp}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <span className="h-px w-16 bg-primary-gold"></span>
                            <span className="text-primary-dark text-xs font-bold tracking-[0.25em] uppercase">The Vision</span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl text-text-main leading-tight">
                            Crafting Memories <br /> <span className="italic text-primary-gold">Since Inception</span>
                        </h2>
                        <div className="space-y-6 text-text-muted text-lg font-light leading-relaxed">
                            <p>
                                ATHEVA is a hospitality concept rooted in the timeless Indian philosophy of “Athithi + Seva” — the belief that every guest deserves heartfelt care and service.
                            </p>
                            <p>
                                The name ATHEVA brings together two powerful ideas: <strong>Athithi</strong> (The Guest) and <strong>Seva</strong> (Selfless Service). Together, they represent a hospitality philosophy where guests are welcomed with warmth, respect, and genuine care.
                            </p>
                            <p>
                                At ATHEVA, hospitality goes beyond providing a place to stay. It is about creating an environment where guests feel valued, comfortable, and connected to the spirit of Indian culture and traditions.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="relative w-full aspect-square md:aspect-[4/3] rounded-sm overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image 
                            src="/v2-1.jpeg" 
                            alt="Atheva Historic Architecture" 
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 px-6 md:px-12 bg-background-offwhite">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        className="text-center max-w-3xl mx-auto mb-16"
                        {...fadeInUp}
                    >
                        <span className="text-primary-dark text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
                            Our Philosophy
                        </span>
                        <h2 className="font-serif text-4xl py-2 md:text-5xl text-text-main leading-tight">Hospitality Rooted in Indian Tradition</h2>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                title: "Athithi - The Guest",
                                desc: "Indian culture has long embraced the belief of 'Athithi Devo Bhava', meaning the guest is treated with the same reverence as a divine presence.",
                                icon: "person"
                            },
                            {
                                title: "Seva - Selfless Service",
                                desc: "The foundation of our hospitality philosophy where every interaction reflects a commitment to graceful hospitality and thoughtful care.",
                                icon: "volunteer_activism"
                            },
                            {
                                title: "Meaningful Hospitality",
                                desc: "Blends modern comfort with Indian warmth to create spaces that feel both welcoming and authentic.",
                                icon: "favorite"
                            },
                            {
                                title: "Cultural Connection",
                                desc: "Every element is thoughtfully crafted to offer guests a sense of belonging and connection to Indian traditions.",
                                icon: "temple_hindu"
                            }
                        ].map((value, i) => (
                            <motion.div 
                                key={i}
                                variants={fadeInUp}
                                className="bg-white p-8 rounded-sm shadow-sm border border-border-subtle hover:border-primary-gold/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
                            >
                                <div className="w-14 h-14 rounded-full bg-background-offwhite flex items-center justify-center border border-primary-gold/20 mb-6 group-hover:bg-primary-gold group-hover:text-white transition-colors text-primary-gold">
                                    <span className="material-symbols-outlined text-2xl font-light">{value.icon}</span>
                                </div>
                                <h3 className="font-serif text-xl text-text-main mb-3">{value.title}</h3>
                                <p className="text-text-muted font-light text-sm leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* Upcoming Properties (reused component) */}
            <UpcomingProperties />

            {/* Final CTA */}
            <section className="py-24 px-6 bg-text-main text-white text-center relative overflow-hidden">
                <Image
                    src="/v2-2.jpeg"
                    alt="Atheva Footer Background"
                    fill
                    className="object-cover opacity-10"
                />
                <motion.div 
                    className="max-w-3xl mx-auto relative z-10"
                    {...fadeInUp}
                >
                    <h2 className="font-serif text-4xl md:text-5xl mb-6">Experience Atheva</h2>
                    <p className="text-white/70 mb-10 text-lg font-light max-w-2xl mx-auto">
                        We invite you to discover the pinnacle of hospitality. Connect with our reservations team to begin planning your stay or bespoke event.
                    </p>
                    <Link href="/book" className="inline-block bg-primary-gold hover:bg-white hover:text-text-main text-white px-10 py-4 rounded-sm text-sm font-bold uppercase tracking-widest transition-all">
                        Book Your Experience
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}

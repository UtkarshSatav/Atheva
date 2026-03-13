"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${scrolled
                    ? "bg-white/90 backdrop-blur-md border-accent-gold/10 shadow-sm h-20"
                    : "bg-transparent border-transparent h-24"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <div className="flex-1 flex justify-start">
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className={`relative w-10 h-10 transition-transform duration-500 group-hover:scale-110 ${scrolled ? "text-primary-gold" : "text-white"}`}>
                            <svg 
                                viewBox="0 0 200 200" 
                                className="w-full h-full fill-none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M100 10C70 40 40 45 25 80C15 105 30 130 50 140L50 160C30 150 20 130 20 100C20 60 60 35 100 10C140 35 180 60 180 100C180 130 170 150 150 160L150 140C170 130 185 105 175 80C160 45 130 40 100 10" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M100 55C75 75 60 80 60 100C60 120 75 135 100 155C125 135 140 120 140 100C140 80 125 75 100 55" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <polygon points="100,75 115,90 100,105 85,90" stroke="currentColor" stroke-width="8" fill="none"/>
                                <polygon points="100,82 108,90 100,98 92,90" fill="currentColor"/>
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={`font-serif text-2xl font-bold tracking-widest leading-none ${scrolled ? "text-text-main" : "text-white"}`}>
                                ATHEVA
                            </h1>
                            <span className={`text-[10px] uppercase tracking-[0.4em] leading-none mt-1.5 ${scrolled ? "text-accent-bronze" : "text-white/80"}`}>
                                by Chowk
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="hidden lg:flex flex-[3] items-center justify-center gap-6">
                    {[
                        { label: "Home", href: "/" },
                        { label: "About ATHEVA", href: "/about" },
                        { label: "Experiences", href: "/experiences" },
                        { label: "Partner With Us", href: "/partner" },
                        { label: "Gallery", href: "/gallery" },
                        { label: "Contact", href: "/contact" }
                    ].map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link 
                                href={item.href}
                                className={`text-xs font-medium tracking-[0.15em] uppercase transition-colors whitespace-nowrap
                                    ${scrolled ? "text-text-main hover:text-primary-gold" : "text-white/90 hover:text-white"}`}
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="flex-1 flex justify-end items-center gap-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Link href="/book" className={`hidden lg:flex px-8 py-3 rounded-sm text-xs font-bold tracking-widest uppercase transition-all shadow-md whitespace-nowrap
                        ${scrolled 
                            ? "bg-primary-gold text-white hover:bg-primary-dark" 
                            : "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
                        }`}
                    >
                        Book Now
                    </Link>
                    <button className={`lg:hidden ${scrolled ? "text-text-main" : "text-white"}`}>
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </motion.div>
            </div>
        </motion.header>
    );
}

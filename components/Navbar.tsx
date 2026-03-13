"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";

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
                        <div className={`relative w-8 h-10 transition-transform duration-500 group-hover:scale-110 ${scrolled ? "text-primary-gold" : "text-white"}`}>
                            <Logo className="w-full h-full fill-none" />
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

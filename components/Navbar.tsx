"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on resize if screen becomes desktop-sized
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const menuItems = [
        { label: "Home", href: "/" },
        { label: "About ATHEVA", href: "/about" },
        { label: "Experiences", href: "/experiences" },
        { label: "Partner With Us", href: "/partner" },
        { label: "Gallery", href: "/gallery" },
        { label: "Contact", href: "/contact" }
    ];

    return (
        <>
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
                        {menuItems.map((item, index) => (
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
                        <button 
                            onClick={() => setIsMenuOpen(true)}
                            className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors ${scrolled ? "text-text-main" : "text-white"} hover:bg-white/10`}
                        >
                            <span className="material-symbols-outlined text-2xl">menu</span>
                        </button>
                    </motion.div>
                </div>
            </motion.header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[100] bg-white lg:hidden"
                    >
                        <div className="flex flex-col h-full bg-[#F9F8F6]">
                            <div className="p-6 flex items-center justify-between border-b border-accent-gold/10 bg-white shadow-sm">
                                <Link href="/" className="flex items-center gap-4" onClick={() => setIsMenuOpen(false)}>
                                    <div className="relative w-8 h-10 text-primary-gold">
                                        <Logo className="w-full h-full fill-none" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="font-serif text-2xl font-bold tracking-widest leading-none text-text-main">
                                            ATHEVA
                                        </h2>
                                        <span className="text-[10px] uppercase tracking-[0.4em] leading-none mt-1.5 text-accent-bronze">
                                            by Chowk
                                        </span>
                                    </div>
                                </Link>
                                <button 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-gold/5 text-text-main hover:bg-accent-gold/10 transition-colors"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto px-8 py-16 flex flex-col justify-center">
                                <nav className="flex flex-col gap-8">
                                    {menuItems.map((item, index) => (
                                        <motion.div
                                            key={item.label}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                                        >
                                            <Link 
                                                href={item.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="group flex items-end gap-5"
                                            >
                                                <span className="text-xs text-accent-bronze font-medium mb-2 opacity-40 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                                                <span className="text-5xl font-serif font-medium tracking-tight text-text-main group-hover:text-primary-gold transition-all group-hover:translate-x-3">
                                                    {item.label}
                                                </span>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                            </div>

                            <div className="p-8 border-t border-accent-gold/10 bg-white">
                                <Link 
                                    href="/book" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full block text-center py-5 bg-primary-gold text-white text-xs font-bold tracking-[0.25em] uppercase rounded-sm shadow-xl hover:bg-primary-dark transition-all active:scale-[0.98]"
                                >
                                    Book Your Stay
                                </Link>
                                <div className="mt-8 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-accent-bronze font-bold">
                                    <span className="hover:text-primary-gold cursor-pointer transition-colors">Instagram</span>
                                    <span className="hover:text-primary-gold cursor-pointer transition-colors">Facebook</span>
                                    <span className="hover:text-primary-gold cursor-pointer transition-colors">Contact</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}


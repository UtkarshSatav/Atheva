"use client";

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
        <header
            className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${scrolled
                    ? "bg-white/90 backdrop-blur-md border-accent-gold/10 shadow-sm h-20"
                    : "bg-transparent border-transparent h-24"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <span className={`material-symbols-outlined text-3xl transition-transform duration-500 group-hover:rotate-180 ${scrolled ? "text-primary-gold" : "text-white"}`}>
                        diamond
                    </span>
                    <div className="flex flex-col">
                        <h1 className={`font-cinzel text-xl font-bold tracking-widest leading-none ${scrolled ? "text-text-main" : "text-white"}`}>
                            ATHEVA
                        </h1>
                        <span className={`text-[10px] uppercase tracking-[0.3em] leading-none mt-1 ${scrolled ? "text-accent-bronze" : "text-white/80"}`}>
                            by Chowk
                        </span>
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-10">
                    {[
                        { name: "Home", href: "/" },
                        { name: "About", href: "/#about" },
                        { name: "Venues", href: "/venues" },
                        { name: "Experiences", href: "/experiences" },
                        { name: "Contact", href: "/contact" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium transition-colors tracking-wide hover:text-primary-gold ${scrolled ? "text-text-muted" : "text-white/90"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <button
                        className={`hidden md:flex bg-primary-gold hover:bg-primary-dark text-white px-7 py-3 rounded-sm text-sm font-bold tracking-widest uppercase transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5`}
                    >
                        Book Now
                    </button>
                    <button className={`md:hidden ${scrolled ? "text-text-main" : "text-white"}`}>
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

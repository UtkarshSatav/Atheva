"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as unknown as any }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Footer() {
    return (
        <footer className="footer-bg text-white pt-20 pb-10 px-6 border-t border-primary-gold/20 overflow-hidden" style={{ background: "var(--text-main)" }}>
            <motion.div 
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
            >
                <motion.div className="col-span-1 md:col-span-1" variants={fadeInUp}>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="material-symbols-outlined text-primary-gold text-3xl">diamond</span>
                        <h2 className="font-cinzel text-xl font-bold text-white tracking-widest">ATHEVA</h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                        Hospitality Inspired by Athithi + Seva. Rooted in timeless Indian philosophy, ATHEVA blends modern comfort with traditional warmth.
                    </p>
                    <div className="flex gap-5">
                        <motion.a whileHover={{ scale: 1.2, color: "var(--primary-gold)" }} className="text-gray-400 transition-colors" href="https://www.facebook.com/profile.php?id=61586878500352" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                            <span className="sr-only">Facebook</span>
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: "var(--primary-gold)" }} className="text-gray-400 transition-colors" href="https://www.instagram.com/arenaabychowk/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                            <span className="sr-only">Instagram</span>
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: "var(--primary-gold)" }} className="text-gray-400 transition-colors" href="https://www.linkedin.com/showcase/arenaabychowk/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                            <span className="sr-only">LinkedIn</span>
                        </motion.a>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <h3 className="text-white font-bold uppercase tracking-widest mb-8 text-xs border-b border-white/10 pb-2 inline-block">
                        Explore
                    </h3>
                    <ul className="flex flex-col gap-4">
                        <li><Link className="text-gray-400 hover:text-primary-gold transition-colors text-sm font-light tracking-wide" href="/about">About Us</Link></li>
                        <li><Link className="text-gray-400 hover:text-primary-gold transition-colors text-sm font-light tracking-wide" href="/destinations">Destinations</Link></li>
                        <li><Link className="text-gray-400 hover:text-primary-gold transition-colors text-sm font-light tracking-wide" href="/experiences">Experiences</Link></li>
                        <li><Link className="text-gray-400 hover:text-primary-gold transition-colors text-sm font-light tracking-wide" href="/partner">Partner With Us</Link></li>
                        <li><Link className="text-gray-400 hover:text-primary-gold transition-colors text-sm font-light tracking-wide" href="/gallery">Gallery</Link></li>
                    </ul>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <h3 className="text-white font-bold uppercase tracking-widest mb-8 text-xs border-b border-white/10 pb-2 inline-block">
                        Contact
                    </h3>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-start gap-3 text-gray-400 text-sm font-light">
                            <span className="material-symbols-outlined text-base mt-0.5 text-primary-gold">location_on</span>
                            WZ-24/1 FF Left Side, <br />Mukharjee Park, <br />New Delhi – 110018
                        </li>
                        <li className="flex items-center gap-3 text-gray-400 text-sm font-light">
                            <span className="material-symbols-outlined text-base text-primary-gold">mail</span>
                            info@chowk.co.in
                        </li>
                        <li className="flex items-center gap-3 text-gray-400 text-sm font-light">
                            <span className="material-symbols-outlined text-base text-primary-gold">public</span>
                            www.chowk.co.in
                        </li>
                    </ul>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <h3 className="text-white font-bold uppercase tracking-widest mb-8 text-xs border-b border-white/10 pb-2 inline-block">
                        Newsletter
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 font-light">Subscribe to receive exclusive offers and event inspiration.</p>
                    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="bg-white/5 border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-primary-gold text-sm placeholder:text-gray-600 transition-colors"
                            placeholder="Your email address"
                            type="email"
                        />
                        <button
                            className="bg-white/10 hover:bg-primary-gold text-white py-3 px-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors border border-white/10 hover:border-primary-gold"
                            type="submit"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </motion.div>
            <motion.div 
                className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <p className="text-gray-500 text-xs tracking-wide">© 2025 ATHEVA by CHOWK. All rights reserved.</p>
                <div className="flex gap-8">
                    <Link className="text-gray-500 hover:text-white transition-colors text-xs tracking-wide" href="/privacy">Privacy Policy</Link>
                    <Link className="text-gray-500 hover:text-white transition-colors text-xs tracking-wide" href="/terms">Terms of Service</Link>
                </div>
            </motion.div>
        </footer>
    );
}

"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-text-main text-white pt-20 pb-10 px-6 border-t border-primary-gold/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="material-symbols-outlined text-primary-gold text-3xl">diamond</span>
                        <h2 className="font-cinzel text-xl font-bold text-white tracking-widest">ATHEVA</h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                        A sanctuary of luxury and elegance for your most cherished moments. Experience the exceptional.
                    </p>
                    <div className="flex gap-5">
                        <a className="text-gray-400 hover:text-primary-gold transition-colors transform hover:scale-110 duration-300" href="#">
                            <span className="material-symbols-outlined">thumb_up</span>
                        </a>
                        <a className="text-gray-400 hover:text-primary-gold transition-colors transform hover:scale-110 duration-300" href="#">
                            <span className="material-symbols-outlined">photo_camera</span>
                        </a>
                        <a className="text-gray-400 hover:text-primary-gold transition-colors transform hover:scale-110 duration-300" href="#">
                            <span className="material-symbols-outlined">public</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-bold uppercase tracking-widest mb-8 text-xs border-b border-white/10 pb-2 inline-block">
                        Explore
                    </h3>
                    <ul className="flex flex-col gap-4">
                        <li><Link className="text-gray-400 hover:text-primary-gold transition-colors text-sm font-light tracking-wide" href="/#about">About Us</Link></li>
                        <li><Link className="text-gray-400 hover:text-primary-gold transition-colors text-sm font-light tracking-wide" href="/venues">Our Venues</Link></li>
                        <li><Link className="text-gray-400 hover:text-primary-gold transition-colors text-sm font-light tracking-wide" href="/experiences">Services</Link></li>
                        <li><Link className="text-gray-400 hover:text-primary-gold transition-colors text-sm font-light tracking-wide" href="/gallery">Gallery</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold uppercase tracking-widest mb-8 text-xs border-b border-white/10 pb-2 inline-block">
                        Contact
                    </h3>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-start gap-3 text-gray-400 text-sm font-light">
                            <span className="material-symbols-outlined text-base mt-0.5 text-primary-gold">location_on</span>
                            123 Luxury Ave, <br />Metropolis City, NY 10012
                        </li>
                        <li className="flex items-center gap-3 text-gray-400 text-sm font-light">
                            <span className="material-symbols-outlined text-base text-primary-gold">call</span>
                            +1 (555) 123-4567
                        </li>
                        <li className="flex items-center gap-3 text-gray-400 text-sm font-light">
                            <span className="material-symbols-outlined text-base text-primary-gold">mail</span>
                            concierge@atheva.com
                        </li>
                    </ul>
                </div>
                <div>
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
                </div>
            </div>
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-xs tracking-wide">© 2024 ATHEVA by Chowk. All rights reserved.</p>
                <div className="flex gap-8">
                    <Link className="text-gray-500 hover:text-white transition-colors text-xs tracking-wide" href="/privacy">Privacy Policy</Link>
                    <Link className="text-gray-500 hover:text-white transition-colors text-xs tracking-wide" href="/terms">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}

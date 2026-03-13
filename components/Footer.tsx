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
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-8 h-10 text-primary-gold">
                            <svg 
                                viewBox="0 0 117 148" 
                                className="w-full h-full fill-none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M24.4989 86.2035L24.581 83.2046L18.5833 83.0403L18.5011 86.0392L21.5 86.1213L24.4989 86.2035ZM48.5 12.1213L50.0791 14.6721L50.2246 14.582L50.3589 14.476L48.5 12.1213ZM38 18.6213L39.5031 21.2176L39.5414 21.1954L39.5791 21.1721L38 18.6213ZM28.5 24.1213L26.9969 21.525L26.8426 21.6144L26.7 21.7213L28.5 24.1213ZM20.5 30.1213L18.7 27.7213L18.4847 27.8828L18.3016 28.08L20.5 30.1213ZM14 37.1213L11.8016 35.08L11.5596 35.3406L11.3853 35.6505L14 37.1213ZM9.5 45.1213L6.88527 43.6505L6.59074 44.1741L6.52055 44.7708L9.5 45.1213ZM8.5 53.6213L5.52055 53.2708L5.4749 53.6588L5.53015 54.0456L8.5 53.6213ZM9.5 60.6213L6.53015 61.0456L6.60561 61.5738L6.85859 62.0436L9.5 60.6213ZM13 67.1213L10.3586 68.5436L10.4104 68.6398L10.469 68.7319L13 67.1213ZM16.5 72.6213L13.969 74.2319L14.282 74.7237L14.7563 75.0625L16.5 72.6213ZM23.5 77.6213L21.7563 80.0625L21.7956 80.0906L21.8359 80.1175L23.5 77.6213ZM29.5 81.6213L27.8359 84.1175L27.8953 84.1571L27.9565 84.1938L29.5 81.6213ZM37 86.1213L38.8997 83.7995L38.7307 83.6612L38.5435 83.5488L37 86.1213ZM42.5 90.6213L44.7902 88.6835L44.6125 88.4736L44.3997 88.2995L42.5 90.6213ZM48 97.1213L50.4962 95.4572L50.401 95.3145L50.2902 95.1835L48 97.1213ZM52 103.121L54.6414 101.699L54.5745 101.575L54.4962 101.457L52 103.121ZM55.5 109.621L58.3252 108.612L58.2489 108.399L58.1414 108.199L55.5 109.621ZM57.8214 116.121L60.6467 115.112L54.8681 116.649L57.8214 116.121ZM58 117.121L55.0467 117.649L56.9911 128.538L60.815 118.158L58 117.121ZM61.5 107.621L58.7815 106.353L58.7284 106.466L58.685 106.584L61.5 107.621ZM65 100.121L62.7423 98.1458L62.4617 98.4665L62.2815 98.8527L65 100.121ZM72 92.1213L70.0794 89.8167L69.8979 89.968L69.7423 90.1458L72 92.1213ZM78 87.1213L76.3894 84.5903L76.2272 84.6936L76.0794 84.8167L78 87.1213ZM83.5 83.6213L85.1106 86.1523L85.1528 86.1255L85.1941 86.0972L83.5 83.6213ZM93 77.1213L94.6941 79.5972L94.9242 79.4398L95.1213 79.2426L93 77.1213ZM102 68.1213L104.121 70.2426L104.405 69.9586L104.605 69.6097L102 68.1213ZM106 61.1213L108.605 62.6097L108.824 62.2263L108.923 61.7959L106 61.1213ZM107.5 54.6213L110.423 55.2959L110.521 54.8702L110.494 54.4342L107.5 54.6213ZM107 46.6213L109.994 46.4342L109.959 45.8739L109.724 45.3641L107 46.6213ZM104 40.1213L106.724 38.8641L106.639 38.6809L106.531 38.5107L104 40.1213ZM100.5 34.6213L103.031 33.0107L102.752 32.5723L102.342 32.2533L100.5 34.6213ZM96 31.1213L97.8418 28.7533L97.8036 28.7236L97.7645 28.6951L96 31.1213ZM85 23.1213L86.7645 20.6951L86.6892 20.6403L86.6106 20.5903L85 23.1213ZM79.5 19.6213L81.1106 17.0903L81.0617 17.0592L81.0116 17.03L79.5 19.6213ZM73.5 16.1213L71.8004 18.5934L71.8922 18.6565L71.9884 18.7127L73.5 16.1213ZM65.5 10.6213L63.6582 12.9894L63.7278 13.0435L63.8004 13.0934L65.5 10.6213ZM61 7.12132L58.8787 9.24264L59.0107 9.37471L59.1582 9.48938L61 7.12132ZM24.5 58.6213L21.6539 57.6726L21.6014 57.8303L21.5666 57.9927L24.5 58.6213ZM25.5 55.6213L23.1574 53.7472L22.8231 54.165L22.6539 54.6726L25.5 55.6213ZM29.5 50.6213L31.8426 52.4954L31.8937 52.4316L31.9412 52.365L29.5 50.6213ZM32 47.1213L29.8787 45L29.7031 45.1756L29.5588 45.3776L32 47.1213ZM34 45.1213L32.1259 42.7787L31.9962 42.8825L31.8787 43L34 45.1213ZM36.5 43.1213L34.7563 40.6801L34.6898 40.7276L34.6259 40.7787L36.5 43.1213ZM40 40.6213L38.4565 38.0488L38.3538 38.1105L38.2563 38.1801L40 40.6213ZM42.5 39.1213L44.0435 41.6938L44.1047 41.6571L44.1641 41.6175L42.5 39.1213ZM47 36.1213L48.6641 38.6175L48.7334 38.5713L48.8 38.5213L47 36.1213ZM49 34.6213L47.4565 32.0488L47.3238 32.1285L47.2 32.2213L49 34.6213ZM51.5 33.1213L53.0435 35.6938L53.1462 35.6322L53.2437 35.5625L51.5 33.1213ZM55 30.6213L53.3359 28.1252L53.2957 28.152L53.2563 28.1801L55 30.6213ZM59.5 27.6213L61.3741 29.9639L57.8359 25.1252L59.5 27.6213ZM57 29.6213L55.1259 27.2787L51.3355 30.311L55.7428 32.3452L57 29.6213ZM63.5 32.6213L64.8416 29.938L64.7997 29.9171L64.7572 29.8974L63.5 32.6213ZM66.5 34.1213L68.1641 31.6252L68.0087 31.5216L64.7572 29.8974L63.5 32.6213ZM66.5 34.1213L68.1641 31.6252L68.0087 31.5216L67.8416 31.438L66.5 34.1213ZM69.5 36.1213L67.8359 38.6175L67.9219 38.6748L68.0116 38.726L69.5 36.1213ZM73 38.1213L74.4884 35.5166L70.9884 33.5166L69.5 36.1213ZM73 38.1213L71.0794 40.426L74.0794 42.926L76 40.6213L77.9206 38.3167L74.9206 35.8167L73 38.1213ZM76 40.6213L74.3359 43.1175L77.3359 45.1175L79 42.6213L80.6641 40.1252L77.6641 38.1252L76 40.6213ZM79 42.6213L77.3359 45.1175L81.8359 48.1175L83.5 45.6213L85.1641 43.1252L80.6641 40.1252L79 42.6213ZM83.5 45.6213L81.1953 47.5419L83.6953 50.5419L86 48.6213L88.3047 46.7008L85.8047 43.7008L83.5 45.6213ZM86 48.6213L83.5588 50.365L88.5588 57.365L91 55.6213L93.4412 53.8776L88.4412 46.8776L86 48.6213ZM91 55.6213L88.1057 56.4107L89.6057 61.9107L92.5 61.1213L95.3943 60.332L93.8943 54.832L91 55.6213ZM92.5 61.1213L89.5408 61.6145L90.5408 67.6145L93.5 67.1213L96.4592 66.6281L95.4592 60.6281L92.5 61.1213ZM93.5 67.1213H90.5V75.1213H93.5H96.5V67.1213H93.5ZM93.5 75.1213H90.5V84.6213H93.5H96.5V75.1213H93.5ZM93.5 84.6213H90.5V89.1213H93.5H96.5V84.6213H93.5ZM93.5 89.1213H90.5V95.1213H93.5H96.5V89.1213H93.5ZM93.5 95.1213H90.5V100.621H93.5H96.5V95.1213H93.5ZM93.5 100.621H90.5V124.121H93.5H96.5V100.621H93.5ZM93.5 124.121H90.5V126.621H93.5H96.5V124.121H93.5ZM93.5 126.621H90.5V129.121H93.5H96.5V126.621H93.5ZM93.5 129.121L90.7146 130.235L91.7146 132.735L94.5 131.621L97.2854 130.507L96.2854 128.007L93.5 129.121ZM94.5 131.621L91.9275 133.165L93.4275 135.665L96 134.121L98.5725 132.578L97.0725 130.078L94.5 131.621ZM96 134.121L93.6 135.921L95.1 137.921L97.5 136.121L99.9 134.321L98.4 132.321L96 134.121ZM97.5 136.121L95.3787 138.243L96.8787 139.743L99 137.621L101.121 135.5L99.6213 134L97.5 136.121ZM99 137.621L96.8787 139.743L98.3787 141.243L100.5 139.121L102.621 137L101.121 135.5L99 137.621ZM100.5 139.121L99.3858 141.907L101.886 142.907L103 140.121L104.114 137.336L101.614 136.336L100.5 139.121ZM103 140.121L101.886 142.907L104.386 143.907L105.5 141.121L106.614 138.336L104.114 137.336L103 140.121ZM105.5 141.121L105.007 144.081L108.007 144.581L108.5 141.621L108.993 138.662L105.993 138.162L105.5 141.121ZM108.5 141.621V144.621H111V141.621V138.621H108.5V141.621ZM111 141.621V144.621H113V141.621V138.621H111V141.621ZM113 141.621V144.621H115V141.621V138.621H113V141.621ZM115 141.621V144.621H117V141.621V138.621H115V141.621ZM117 141.621V138.621H114V141.621V144.621H117V141.621ZM114 141.621H117V133.621H114H111V141.621H114ZM114 133.621H117V126.621H114H111V133.621H114ZM114 126.621L117 126.573L116.5 95.5729L113.5 95.6213L110.5 95.6697L111 126.67L114 126.621ZM113.5 95.6213L116.49 95.3722L115.99 89.3722L113 89.6213L110.01 89.8705L110.51 95.8705L113.5 95.6213ZM113 89.6213L115.683 88.2797L113.683 84.2797L111 85.6213L108.317 86.963L110.317 90.963L113 89.6213ZM111 85.6213L113.605 84.1329L111.605 80.6329L109 82.1213L106.395 83.6097L108.395 87.1097L111 85.6213ZM109 82.1213L111.121 80L108.121 77L106 79.1213L103.879 81.2426L106.879 84.2426L109 82.1213Z" fill="currentColor"/>
                                <path d="M58 58.1213L54 64.6213L58 72.1213L62.5 64.6213L58 58.1213Z" stroke="currentColor" stroke-width="6"/>
                            </svg>
                        </div>
                        <h2 className="font-serif text-2xl font-bold text-white tracking-widest leading-none">ATHEVA</h2>
                    </div>
破                    <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                        The Art of Welcoming. Rooted in timeless Indian philosophy, ATHEVA blends modern comfort with traditional warmth.
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
                            bookings@atheva.in
                        </li>
                        <li className="flex items-center gap-3 text-gray-400 text-sm font-light">
                            <span className="material-symbols-outlined text-base text-primary-gold">public</span>
                            www.atheva.in
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

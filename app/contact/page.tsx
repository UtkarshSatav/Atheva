"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
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

export default function ContactPage() {
    return (
        <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
                <motion.div 
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.4)_100%)] z-10" />
                    <Image
                        src="/v2-1.jpeg"
                        alt="Atheva Contact"
                        fill
                        className="object-cover object-bottom-right scale-[1.1] origin-bottom-right"
                        priority
                    />
                </motion.div>
                <div className="relative z-20 text-center px-6 mt-16">
                    <motion.h1 
                        className="text-white font-serif text-4xl md:text-6xl font-medium drop-shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.div 
                        className="h-1 w-20 bg-primary-gold mx-auto mt-4"
                        initial={{ width: 0 }}
                        animate={{ width: 80 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    ></motion.div>
                </div>
            </section>

            <main className="flex-grow flex justify-center py-16 px-6 md:px-12 lg:px-40 bg-white">
                <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Contact Info */}
                    <div className="flex flex-col gap-10 pt-4">
                        <motion.div 
                            className="space-y-6"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block py-1 px-0 text-primary-gold text-xs font-bold uppercase tracking-[0.2em]">
                                Contact Us
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-text-main leading-[1.1]">
                                Hospitality <br />
                                <span className="italic text-text-muted">The Art of Welcoming</span>
                            </h2>
                            <p className="text-text-muted text-lg font-light leading-relaxed max-w-md">
                                Whether you are planning a stay, a celebration, or exploring partnership opportunities, our team is ready to assist you.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="flex flex-col gap-8 mt-4 border-t border-border-subtle pt-8"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                        >
                            {[
                                { title: "Email", value: "chowk0504@gmail.com", sub: "Online support 24/7", icon: "mail" },
                                { title: "Address", value: "WZ-24/1 FF Left Side, Mukharjee Park", sub: "New Delhi – 110018", icon: "location_on" },
                                { title: "Website", value: "www.atheva.in", sub: "Visit our ecosystem", icon: "public" },
                            ].map((item, i) => (
                                <motion.div 
                                    key={i} 
                                    className="flex items-start gap-6 group"
                                    variants={fadeInUp}
                                >
                                    <div className="flex h-10 w-10 items-center justify-center text-primary-gold transition-colors">
                                        <span className="material-symbols-outlined text-[28px] font-light">{item.icon}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-text-main font-serif text-xl mb-1">{item.title}</h3>
                                        <p className="text-text-muted font-light">{item.value}</p>
                                        <p className="text-text-light text-xs mt-1 uppercase tracking-wider">{item.sub}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Simple Map Placeholder */}
                        <motion.div 
                            className="relative w-full h-56 mt-4 grayscale opacity-80 hover:opacity-100 transition-opacity duration-500 border border-border-subtle bg-background-offwhite flex items-center justify-center"
                            {...fadeInUp}
                        >
                            <span className="text-text-light text-sm">Map View Integrated</span>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div 
                        className="flex flex-col"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-background-offwhite p-8 md:p-12 border border-border-subtle shadow-sm h-full rounded-sm">
                            <div className="mb-10 text-center">
                                <span className="material-symbols-outlined text-primary-gold text-4xl mb-4 text-center block">edit_square</span>
                                <h2 className="text-3xl font-serif text-text-main mb-3">Get in Touch</h2>
                                <p className="text-text-muted font-light mb-8">We would love to hear from you</p>
                            </div>
                            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <label className="flex flex-col gap-2 relative group">
                                        <span className="text-xs font-bold uppercase tracking-widest text-text-muted group-focus-within:text-primary-gold transition-colors">
                                            Full Name
                                        </span>
                                        <input
                                            className="w-full bg-transparent border-b border-text-light/30 rounded-none px-0 py-2 text-text-main placeholder-text-light focus:outline-none focus:border-primary-gold transition-colors text-base font-light"
                                            placeholder="John Doe"
                                            type="text"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2 relative group">
                                        <span className="text-xs font-bold uppercase tracking-widest text-text-muted group-focus-within:text-primary-gold transition-colors">
                                            Email Address
                                        </span>
                                        <input
                                            className="w-full bg-transparent border-b border-text-light/30 rounded-none px-0 py-2 text-text-main placeholder-text-light focus:outline-none focus:border-primary-gold transition-colors text-base font-light"
                                            placeholder="john@example.com"
                                            type="email"
                                        />
                                    </label>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <label className="flex flex-col gap-2 relative group">
                                        <span className="text-xs font-bold uppercase tracking-widest text-text-muted group-focus-within:text-primary-gold transition-colors">
                                            Event Type
                                        </span>
                                        <select className="w-full appearance-none bg-transparent border-b border-text-light/30 rounded-none px-0 py-2 text-text-main focus:outline-none focus:border-primary-gold transition-colors text-base font-light cursor-pointer pr-8">
                                            <option disabled selected value="">
                                                Select Type
                                            </option>
                                            <option value="stay">Boutique Stay</option>
                                            <option value="wedding">Wedding / Celebration</option>
                                            <option value="corporate">Corporate Retreat</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </label>
                                    <label className="flex flex-col gap-2 relative group">
                                        <span className="text-xs font-bold uppercase tracking-widest text-text-muted group-focus-within:text-primary-gold transition-colors">
                                            Preferred Date
                                        </span>
                                        <input
                                            className="w-full bg-transparent border-b border-text-light/30 rounded-none px-0 py-2 text-text-main placeholder-text-light focus:outline-none focus:border-primary-gold transition-colors text-base font-light"
                                            type="date"
                                        />
                                    </label>
                                </div>
                                <label className="flex flex-col gap-2 relative group mt-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-text-muted group-focus-within:text-primary-gold transition-colors">
                                        Message
                                    </span>
                                    <textarea
                                        className="w-full bg-transparent border border-text-light/20 focus:border-primary-gold rounded-none px-4 py-4 text-text-main placeholder-text-light focus:outline-none transition-colors text-base font-light resize-none mt-1"
                                        placeholder="Tell us about your vision..."
                                        rows={4}
                                    ></textarea>
                                </label>
                                <div className="pt-6">
                                    <button
                                        className="w-full bg-primary-gold hover:bg-primary-dark text-white font-bold uppercase tracking-widest text-sm py-4 px-8 rounded-none transition-all duration-300 shadow-sm hover:shadow-md"
                                        type="submit"
                                    >
                                        Send Message
                                    </button>
                                    <p className="text-center text-[10px] uppercase tracking-wider text-text-light mt-6">
                                        By submitting this form, you agree to our <a className="underline hover:text-black" href="#">Privacy Policy</a>.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}

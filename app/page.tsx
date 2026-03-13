"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BookingWidget from "@/components/BookingWidget";
import UpcomingProperties from "@/components/UpcomingProperties";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as unknown as any }
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as unknown as any }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 overflow-hidden"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ originX: 1, originY: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background-offwhite/80 z-10"></div>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.4)_100%)] z-10"></div>
          <Image
            src="/v2-5.jpeg"
            alt="Atheva Hero"
            fill
            className="animate-kenburns brightness-110 saturate-[0.8] object-cover object-bottom-right"
            priority
          />
        </motion.div>
        <div className="relative z-20 text-center max-w-5xl px-6 pt-24 pb-32">
          <motion.div
            className="inline-block border-b border-primary-gold/50 pb-1 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-white text-xs font-bold tracking-[0.3em] uppercase drop-shadow-md">
              Hospitality Inspired by Athithi + Seva
            </span>
          </motion.div>
          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-none mb-8 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            ATHEVA <br />{" "}
            <span className="italic font-light text-white/90 text-4xl md:text-6xl lg:text-7xl block mt-4 whitespace-nowrap">The Art of Welcoming</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8 font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            ATHEVA is a boutique hospitality destination rooted in the timeless Indian philosophy of Athithi + Seva — where every guest is welcomed with warmth and served with genuine care.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="min-w-[220px] bg-primary-gold hover:bg-primary-dark text-white h-14 px-8 rounded-sm text-sm font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-primary-gold">
              Book Your Experience
            </button>
            <button className="min-w-[220px] bg-white/10 hover:bg-white/20 border border-white text-white h-14 px-8 rounded-sm text-sm font-bold uppercase tracking-widest transition-all backdrop-blur-md hover:shadow-lg">
              Explore Our Spaces
            </button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
        >
          <span className="material-symbols-outlined text-4xl font-light">keyboard_arrow_down</span>
        </motion.div>
      </section>

      {/* Booking Widget Floating Over Hero */}
      <div className="relative -mt-16 z-30 px-6">
        <BookingWidget />
      </div>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 bg-white relative mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            className="relative grid grid-cols-2 gap-6"
            {...fadeInUp}
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden translate-y-8 shadow-2xl transition-transform hover:scale-105 duration-700">
              <img
                src="/v2-1.jpeg"
                alt="ATHEVA Lansdowne Resort"
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </div>
            <div className="aspect-[3/4] rounded-sm overflow-hidden -translate-y-8 shadow-2xl transition-transform hover:scale-105 duration-700">
              <img
                src="/v2-2.png"
                alt="ATHEVA Resort Mountain View"
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-16 bg-primary-gold"></span>
              <span className="text-primary-dark text-xs font-bold tracking-[0.25em] uppercase">About Us</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-text-main leading-tight">
              A Destination for <br /> <span className="italic text-primary-gold">Meaningful Hospitality</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed font-light">
              ATHEVA is a hospitality concept rooted in the timeless Indian philosophy of "Athithi + Seva" — the belief that every guest deserves heartfelt care and service.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-6 font-light">
              At ATHEVA, hospitality goes beyond providing a place to stay. It is about creating an environment where guests feel valued, comfortable, and connected to the spirit of Indian culture and traditions.
            </p>
            <a
              className="group inline-flex items-center gap-3 text-text-main font-semibold hover:text-primary-gold transition-colors mt-2"
              href="#"
            >
              <span className="border-b border-text-main/20 group-hover:border-primary-gold pb-1 tracking-wide uppercase text-sm">
                Read Our Story
              </span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 px-6 md:px-12 bg-background-offwhite border-y border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-end gap-8"
            {...fadeInUp}
          >
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl text-text-main mb-6">Our Experiences</h2>
              <p className="text-text-muted text-lg font-light">
                Every experience at ATHEVA reflects the philosophy of Athithi + Seva, ensuring that every guest is treated with care and sincerity.
              </p>
            </div>
            <a
              className="hidden md:flex items-center gap-2 text-primary-gold hover:text-primary-dark transition-colors text-xs font-bold uppercase tracking-widest border-b border-transparent hover:border-primary-gold pb-1"
              href="#"
            >
              View All Services
            </a>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Boutique Stays",
                desc: "Comfortable and elegant rooms designed to offer a stay that feels both memorable and meaningful.",
                icon: "hotel",
                img: "/1.png",
              },
              {
                title: "Weddings & Celebrations",
                desc: "A beautiful venue for life's most meaningful moments, from destination weddings to family gatherings.",
                icon: "favorite",
                img: "/Weeding.png",
              },
              {
                title: "Corporate Retreats",
                desc: "An ideal setting for team retreats and leadership meetings, where ideas and inspiration meet.",
                icon: "business",
                img: "/Corporate.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative bg-white rounded-sm overflow-hidden border border-border-subtle hover:border-primary-gold/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 relative">
                  <div className="absolute -top-6 right-8 bg-primary-gold text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-10 font-bold">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-text-main mb-4 group-hover:text-primary-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-muted mb-8 line-clamp-2 font-light text-sm leading-relaxed">{item.desc}</p>
                  <span className="inline-flex items-center text-xs text-primary-dark uppercase tracking-widest font-bold group-hover:underline decoration-primary-gold/50 underline-offset-4 cursor-pointer">
                    Explore Venue
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-20"
            {...fadeInUp}
          >
            <span className="text-primary-dark text-xs font-bold tracking-[0.25em] uppercase mb-6 block">
              The ATHEVA Standard
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-text-main leading-tight">Hospitality Inspired by Indian Values</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Athithi",
                desc: "The Guest. Indian culture has always placed great importance on welcoming guests with respect and generosity.",
                icon: "person",
              },
              {
                title: "Seva",
                desc: "Selfless Service. We drawing inspiration from this tradition by creating spaces that celebrate community and connection.",
                icon: "volunteer_activism",
              },
              {
                title: "Indian Values",
                desc: "From the warmth of our service to the design of our spaces, every element is crafted to offer a sense of belonging.",
                icon: "temple_hindu",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col items-center text-center p-10 rounded-sm bg-background-offwhite border border-transparent hover:border-primary-gold/20 hover:bg-white transition-all duration-500 group shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-15px_rgba(197,160,89,0.15)]"
              >
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border border-primary-gold/20 mb-8 group-hover:scale-110 transition-transform shadow-md text-primary-gold">
                  <span className="material-symbols-outlined text-4xl font-light">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-text-main mb-4 font-serif">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CHOWK Ecosystem Section */}
      <section className="py-24 px-6 md:px-12 bg-background-offwhite border-y border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl"
              {...fadeInUp}
            >
              <Image
                src="/v2-2.png"
                alt="Atheva Experiences"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="flex flex-col gap-8"
              {...fadeInUp}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-16 bg-primary-gold"></span>
                <span className="text-primary-dark text-xs font-bold tracking-[0.25em] uppercase">Part of the CHOWK Entertainment Ecosystem</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-text-main leading-tight">
                An Integrated Platform for <br /> <span className="italic text-primary-gold">Destination Experiences</span>
              </h2>
              <div className="space-y-6 text-text-muted text-lg font-light leading-relaxed">
                <p>
                  ATHEVA is a hospitality vertical of the CHOWK Entertainment Ecosystem, an integrated platform focused on developing destination experiences across India.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-primary-gold font-bold">CHOWK</span>
                    <span>Creates entertainment and lifestyle hubs</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary-gold font-bold">ARENAA</span>
                    <span>Builds vibrant food and entertainment destinations</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary-gold font-bold">ATHEVA</span>
                    <span>Delivers refined hospitality and celebration experiences</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 md:px-12 bg-background-cream relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#C5A059 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        ></div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 md:order-1 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -top-16 -left-10 text-primary-gold/10 pointer-events-none">
                <span className="material-symbols-outlined text-9xl">format_quote</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-4xl font-serif text-text-main italic leading-relaxed mb-10">
                  "The venue was absolutely breathtaking. The attention to detail and the level of service we received
                  made our gala night unforgettable. ATHEVA truly defines luxury."
                </h3>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-primary-gold/20 overflow-hidden shadow-md ring-2 ring-primary-gold/20 flex items-center justify-center">
                    <span className="text-primary-gold font-serif text-xl font-bold">SJ</span>
                  </div>
                  <div>
                    <p className="text-text-main font-bold text-lg font-serif">Sarah Jenkins</p>
                    <p className="text-primary-dark text-xs uppercase tracking-widest font-semibold">
                      CEO, The Gala Group
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="order-1 md:order-2 h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full max-w-sm aspect-[3/4] md:aspect-square rounded-sm overflow-hidden border-[8px] border-white shadow-2xl hover:rotate-0 transition-transform duration-700">
                <Image
                  src="/lansdowne-6.jpeg"
                  alt="Atheva Resort Guest Experience"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Properties Section */}
      <UpcomingProperties />

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white border-t border-border-subtle relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-light via-primary-gold to-primary-light opacity-30"></div>
        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          {...fadeInUp}
        >
          <h2 className="font-serif text-5xl md:text-6xl text-text-main mb-6">Ready to create memories?</h2>
          <p className="text-text-muted mb-10 text-lg font-light">
            Book your tour today and see why ATHEVA is the city's premier event destination.
          </p>
          <button className="bg-primary-gold hover:bg-primary-dark text-white h-16 px-12 rounded-sm text-sm font-bold tracking-widest transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 uppercase">
            Schedule a Private Tour
          </button>
        </motion.div>
      </section>
    </div>
  );
}

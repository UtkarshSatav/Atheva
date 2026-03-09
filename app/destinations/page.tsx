"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import UpcomingProperties from "@/components/UpcomingProperties";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as unknown as any }
};

const DESTINATIONS = [
    {
        id: "bhimtal",
        name: "ATHEVA Bhimtal",
        desc: "A serene lakeside destination surrounded by the beauty of the Kumaon hills.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmCfOAVvbFJmKjF9m40j5Hp3g7APP5nIXFcvz4kjpQXOxTRYz5cWREjQiwuVe3MRHIaEJ8Lxza-_QoQ31R0_qxs9eDaKfz9s46kiouYs0RBzNaIdDl8UqApw9DoJOXRQKk9UhYAvDOhEu7QWj9sx7wNwmCy2JVUEmW0Wuf2h2fkFlqmQJoMuWtqr1LOzz4e9k9ieTXEMs_50K3ko8l3awi-YRSOeRRekp1J2hP5Ijx2EhEVBm1sbxsPlj3UnaMLGDa3NLHX-dpIJQY",
        link: "/destinations/bhimtal"
    },
    {
        id: "lansdowne",
        name: "ATHEVA Lansdowne",
        desc: "A peaceful retreat nestled within the forests and mountains of Uttarakhand.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDymQx_o-WJ7SBegaTFGei8Yf-b5B-dbfAYYhFn434nW2QVwSl3g3Y9XZTezgrNuvdd6dRLl8hlx336U-ChJ5GxTel8anDsv6_hPSYLlhNloxFDRbsPbYevKSdDQ_KZQy4kuy2HWlZFwnpRx5tH7mBJASXOvkubonNZ0AW0QsDZ7gKDIggOXLv-m6yULaecyBY3S6g7lwVIlACTUMnt9i-3zGw0ak6qta9B52qkpW4JBgQoxUzZuBng6t0l4cGF3ZFzD55z-KeYsl11",
        link: "/destinations/lansdowne"
    }
];

export default function DestinationsPage() {
    return (
        <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-background-offwhite">
            {/* Hero Header */}
            <div className="relative w-full h-[40vh] min-h-[300px]">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmCfOAVvbFJmKjF9m40j5Hp3g7APP5nIXFcvz4kjpQXOxTRYz5cWREjQiwuVe3MRHIaEJ8Lxza-_QoQ31R0_qxs9eDaKfz9s46kiouYs0RBzNaIdDl8UqApw9DoJOXRQKk9UhYAvDOhEu7QWj9sx7wNwmCy2JVUEmW0Wuf2h2fkFlqmQJoMuWtqr1LOzz4e9k9ieTXEMs_50K3ko8l3awi-YRSOeRRekp1J2hP5Ijx2EhEVBm1sbxsPlj3UnaMLGDa3NLHX-dpIJQY')] bg-cover bg-center" />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pt-20">
                    <motion.h1 
                        className="text-4xl md:text-6xl font-serif text-white drop-shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our Destinations
                    </motion.h1>
                    <motion.p 
                        className="text-white/80 mt-4 tracking-widest uppercase text-xs font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Boutique Stays Across India
                    </motion.p>
                </div>
            </div>

            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {DESTINATIONS.map((dest, i) => (
                        <motion.div 
                            key={dest.id}
                            className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border-subtle"
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="whileInView"
                        >
                            <div className="aspect-[16/9] overflow-hidden relative">
                                <img 
                                    src={dest.image} 
                                    alt={dest.name} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                            </div>
                            <div className="p-8">
                                <h3 className="font-serif text-3xl text-text-main mb-4 group-hover:text-primary-gold transition-colors">{dest.name}</h3>
                                <p className="text-text-muted mb-8 font-light leading-relaxed">{dest.desc}</p>
                                <Link 
                                    href={dest.link}
                                    className="inline-flex items-center gap-2 text-primary-gold font-bold uppercase tracking-widest text-xs border-b border-primary-gold/20 pb-1 hover:border-primary-gold transition-all"
                                >
                                    Explore Destination
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <UpcomingProperties />
        </div>
    );
}

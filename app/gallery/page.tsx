"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const GALLERY_IMAGES = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCmCfOAVvbFJmKjF9m40j5Hp3g7APP5nIXFcvz4kjpQXOxTRYz5cWREjQiwuVe3MRHIaEJ8Lxza-_QoQ31R0_qxs9eDaKfz9s46kiouYs0RBzNaIdDl8UqApw9DoJOXRQKk9UhYAvDOhEu7QWj9sx7wNwmCy2JVUEmW0Wuf2h2fkFlqmQJoMuWtqr1LOzz4e9k9ieTXEMs_50K3ko8l3awi-YRSOeRRekp1J2hP5Ijx2EhEVBm1sbxsPlj3UnaMLGDa3NLHX-dpIJQY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDymQx_o-WJ7SBegaTFGei8Yf-b5B-dbfAYYhFn434nW2QVwSl3g3Y9XZTezgrNuvdd6dRLl8hlx336U-ChJ5GxTel8anDsv6_hPSYLlhNloxFDRbsPbYevKSdDQ_KZQy4kuy2HWlZFwnpRx5tH7mBJASXOvkubonNZ0AW0QsDZ7gKDIggOXLv-m6yULaecyBY3S6g7lwVIlACTUMnt9i-3zGw0ak6qta9B52qkpW4JBgQoxUzZuBng6t0l4cGF3ZFzD55z-KeYsl11",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCCxFs6UlYnBlNvQA-BkqHTGD6QvYfT8nxGIkNzeLwu22HqKALeXjCTQ4AnQqGsPVLiPKg8H_ZL875_EMjAGJrLE4xW_oq8R2Ihm-DfiypSzvXQrHxMfMtP0nR-0YSND_y9aRPg5EuuNQRBa0V958i2US79zjm4uJ5zeaeWJydOkd_0B_oausxS-lxxW2mEngJ7LO0vIZOOEuV0EtOqlUE9hZ2kVUOMaEydPkNvojyAg7IJLNsYUuxPnsSihDsHZbdiavJo6txaNGZ_",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAx8osFPriDVOKiMmFHnTyLTNRAzAsQQ5WbWD849Kv2-lA0pVNDwnYzH6MQCi0dvk9v9PN40JE1j0vlEmOj1KjSeVsS8GYVHnCsqYB3vgvX0WCEB5vgt7HhZkM7aVOXdbuz9BqgHsPOQU4j18GEEofqcs15wB31_s4MlhN_P07GGBU3eQA_HpcR4DCyP_PahM1etaQYVoUgvk_4kUkLKoy-QRnFaJrSI6Nke5ZlGKTjZD2OTir099_ltUd9SACWg80cFuK8NRq_Zgqt"
];

export default function GalleryPage() {
    return (
        <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-background-offwhite">
            <div className="pt-32 pb-16 px-6 text-center">
                <motion.h1 
                    className="font-serif text-5xl md:text-7xl text-text-main mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Gallery
                </motion.h1>
                <p className="text-text-muted text-lg font-light tracking-widest uppercase">Discover the ATHEVA Experience</p>
            </div>

            <section className="pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {GALLERY_IMAGES.map((img, i) => (
                        <motion.div 
                            key={i}
                            className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer group"
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="whileInView"
                        >
                            <img 
                                src={img} 
                                alt={`Gallery image ${i + 1}`} 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}

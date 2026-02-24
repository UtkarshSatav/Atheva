import Image from "next/image";

export default function ExperiencesPage() {
    return (
        <div className="relative flex flex-col min-h-screen w-full">
            {/* Hero Section */}
            <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASzcq-Q-IFgvL0VJzCwoAmUYu1tE-h9WzBspt-moDMK1vsXr--8vxWvy3nEPSQhOJuBz8P3o4_BxWn3IiyzCvXXvhARCtLtEA88YZFIPr8Ak8eNHzMkbDnHvCh4Jqo5y8Ri8XyC4s8UjTs3sddmEwzNKByfg3KQ7zqRbiNmWXxmAHh7UvVWc1uiTXi8AJfMhcUKSWV4T6oU1DpYfNFbp_tTO6JBHV-Wjjb35q2mK0u5rjWX_uDOUhTWZbLMF1YUEPphktdHR0dOlq2')",
                    }}
                >
                    <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background-light"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl flex flex-col items-center gap-8 mt-20">
                    <span className="inline-block py-2 px-6 border-y border-white/60 text-white text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-sm">
                        Premium Hospitality
                    </span>
                    <h1 className="text-white font-serif text-6xl md:text-8xl font-medium leading-[0.9] tracking-tight drop-shadow-lg">
                        Curated <span className="italic text-primary-light font-light">Moments</span>, <br />
                        Lasting <span className="italic text-primary-light font-light">Memories</span>
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl drop-shadow-md tracking-wide">
                        Experience the art of hospitality with bespoke planning, exquisite detail, and a touch of gold.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center">
                        <button className="h-14 px-10 bg-white hover:bg-neutral-50 text-text-main font-bold uppercase tracking-widest text-xs transition-all shadow-xl flex items-center justify-center gap-2 group border border-white">
                            Start Planning
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform text-primary-gold">
                                arrow_forward
                            </span>
                        </button>
                        <button className="h-14 px-10 bg-black/20 hover:bg-black/40 text-white border border-white/30 font-bold uppercase tracking-widest text-xs backdrop-blur-md transition-all flex items-center justify-center">
                            View Gallery
                        </button>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-24 px-4 sm:px-10 lg:px-20 bg-background-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col items-center text-center mb-20 gap-4">
                        <h2 className="text-primary-gold font-bold text-xs tracking-[0.25em] uppercase border-b border-primary-gold/30 pb-2">
                            Our Expertise
                        </h2>
                        <h3 className="text-text-main text-4xl md:text-6xl font-serif italic">Curated Services</h3>
                        <p className="text-text-muted max-w-xl text-lg font-light leading-relaxed">
                            We don't just host events; we craft experiences. Explore our specialized services tailored to elevate
                            every occasion.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                        <div className="group relative md:col-span-2 lg:col-span-8 h-[450px] rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq-IfhRVG1eGrwsdgsoNA0sBWPQoLK10H15Z_oBooe5VUyYt4X9f1FXK_F0bTqZ4ABzK92MEP1DHKDUPX5gqAFelnb-2Sqkd8Z3_2KwY1JD3NgH0bNKcUaZP1Qz8VTA7aWowvseXfkrNIHjcde1okAY6dedGtCiwoVhYZ4bQTehmDWv-da44QCIPuYdg7EBHdetrcA7wxhBA_vN6uKjnYvEntpHwEhGG9mrMS3Xii5f_xUvt8FZ_iuG8ulia6Uo0WKZZwzU2oNCwhG"
                                alt="Bespoke Wedding"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col items-start justify-end h-full">
                                <div className="mb-4 size-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-primary-gold shadow-lg">
                                    <span className="material-symbols-outlined font-light text-3xl">diamond</span>
                                </div>
                                <h4 className="text-white text-3xl font-serif mb-2">Bespoke Wedding Planning</h4>
                                <p className="text-white/80 text-sm md:text-base font-light max-w-lg mb-6 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    Every detail meticulously planned to create the wedding of your dreams, from floral design to guest
                                    management.
                                </p>
                                <span className="text-white text-xs font-bold uppercase tracking-widest border-b border-white/50 pb-1 group-hover:border-primary-gold group-hover:text-primary-gold transition-colors">
                                    Discover More
                                </span>
                            </div>
                        </div>
                        {/* Additional cards could be added here similar to the HTML */}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 px-4 sm:px-10 lg:px-20 bg-white border-y border-neutral-100">
                <div className="container mx-auto">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-6">From Concept to Celebration</h2>
                        <p className="text-text-muted text-lg font-light">
                            We handle every detail to ensure your event is seamless and spectacular. Our four-step process guarantees
                            perfection.
                        </p>
                    </div>
                    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="hidden md:block absolute top-10 left-[12%] w-[76%] h-[1px] bg-gradient-to-r from-primary-gold/20 via-primary-gold to-primary-gold/20 z-0"></div>
                        {[
                            { title: "Consultation", desc: "We listen to your vision and needs.", icon: "chat_bubble" },
                            { title: "Design", desc: "Our creative team crafts a unique aesthetic.", icon: "edit_note" },
                            { title: "Execution", desc: "Flawless coordination on the big day.", icon: "settings_suggest" },
                            { title: "Memory", desc: "Creating moments that last a lifetime.", icon: "photo_camera" },
                        ].map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                                <div className="w-20 h-20 rounded-full bg-background-light border border-primary-gold/30 flex items-center justify-center mb-8 group-hover:border-primary-gold group-hover:bg-white group-hover:shadow-[0_10px_30px_-10px_rgba(197,160,89,0.3)] transition-all duration-300">
                                    <span className="material-symbols-outlined text-primary-gold text-3xl font-light">{step.icon}</span>
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-wider text-text-main mb-3">{step.title}</h3>
                                <p className="text-sm text-text-muted leading-relaxed px-2 font-light">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

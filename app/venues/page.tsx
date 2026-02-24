import Image from "next/image";

export default function VenuesPage() {
    return (
        <div className="relative flex flex-col min-h-screen w-full">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCn1uycBfkz3vKDEPBEJvigqYOTl1luhGml53EJ4LRq5f3D4XjNiutK5Q0NPBh70wk6W6cAXlStdV7XsoDZMMKCOZdRLXLjqGLMLyqQroA-8pP314yisWqsn5SREuNBNqDPE6VLX_xU1msPzCRAtW0t4zJkRwt8sIcUEakSqcXkcYdPYLyhJiX_yzBknoi8qLqkWozQxMEU83u_qY7Db1g4MPut1hZ4t8z1dWc5Z1XU_wjYhIkO5TlC1eg3KvUww47jTraAew6Icue')",
                    }}
                ></div>
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/10 to-white/90"></div>
                <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto space-y-6 mt-12">
                    <span className="text-primary-gold uppercase tracking-[0.2em] text-xs font-bold bg-white/90 px-4 py-1.5 rounded-sm shadow-sm backdrop-blur-sm">
                        Our Collection
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight drop-shadow-sm">
                        Premium Event Spaces
                    </h1>
                    <p className="text-text-main text-lg md:text-xl font-light max-w-2xl leading-relaxed drop-shadow-sm bg-white/60 p-4 backdrop-blur-sm rounded-lg">
                        Curated architectural masterpieces designed for your most memorable moments. Discover a venue that
                        transcends expectation.
                    </p>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="sticky top-[80px] z-40 w-full border-b border-border-subtle bg-white/95 backdrop-blur-sm shadow-sm">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4 overflow-x-auto w-full sm:w-auto no-scrollbar pb-2 sm:pb-0">
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background-offwhite border border-border-subtle cursor-pointer hover:border-primary-gold/50 transition-colors group">
                            <span className="material-symbols-outlined text-text-muted group-hover:text-primary-gold text-[20px]">
                                filter_list
                            </span>
                            <span className="text-sm font-medium text-text-main whitespace-nowrap">Filter By</span>
                        </div>
                        <div className="h-6 w-px bg-border-subtle mx-2 hidden sm:block"></div>
                        <button className="px-5 py-2 rounded-full bg-primary-gold text-white text-sm font-medium transition-all shadow-md shadow-primary-gold/20 whitespace-nowrap">
                            All Spaces
                        </button>
                        <button className="px-5 py-2 rounded-full bg-transparent border border-border-subtle hover:border-primary-gold hover:text-primary-gold text-text-muted text-sm font-medium transition-all whitespace-nowrap">
                            Weddings
                        </button>
                        <button className="px-5 py-2 rounded-full bg-transparent border border-border-subtle hover:border-primary-gold hover:text-primary-gold text-text-muted text-sm font-medium transition-all whitespace-nowrap">
                            Corporate
                        </button>
                        <button className="px-5 py-2 rounded-full bg-transparent border border-border-subtle hover:border-primary-gold hover:text-primary-gold text-text-muted text-sm font-medium transition-all whitespace-nowrap">
                            Galas
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-text-muted uppercase tracking-wider font-semibold">Showing 3 Venues</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-10 py-20 flex flex-col gap-32">
                {/* Venue 1 */}
                <section className="group">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[450px] lg:h-[550px] w-full overflow-hidden rounded-sm shadow-xl">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBt0ih77ryHmwxBf9V88plinA73HQL9Yn-Dld-oQZonWSi0J87K3SGFi0DKGNsVEggzeA1d7dzqE-CpP_jLvoQjSdRuOZeD774kGf8jLH4tyAzaZ3YTKOjpkUMLvErnU_jKv-G6v_U_J7YA24q67hwHrKrTRqAjHthrxDRMnGGlN5atKJcxSoKFq63RB4O9DdmoMm1cy9-lKnvpvQdgkedI060oZkmZHXoK5F6fCl6hHsnbhTo4Ko6xCrKN3SOXDTVSBgy87T7y84t')",
                                }}
                            ></div>
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-sm border-l-4 border-primary-gold flex items-center gap-2 shadow-sm">
                                <span className="material-symbols-outlined text-primary-gold text-[18px]">star</span>
                                <span className="text-xs font-bold text-text-main uppercase tracking-wider">Signature Venue</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 lg:pl-4">
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3 text-primary-gold mb-1">
                                    <span className="h-px w-12 bg-primary-gold"></span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Large Capacity</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-text-main leading-tight">The Grand Ballroom</h2>
                                <p className="text-text-muted text-lg leading-relaxed mt-2 font-light">
                                    Our signature venue featuring soaring 24-foot ceilings, bespoke crystal chandeliers, and
                                    state-of-the-art acoustics. Perfect for large-scale galas, luxury weddings, and keynote conferences.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-y-6 gap-x-8 py-8 border-y border-border-subtle">
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary-gold text-[28px]">groups</span>
                                    <div>
                                        <p className="text-text-main font-semibold text-lg">500 Guests</p>
                                        <p className="text-text-muted text-xs uppercase tracking-wide">Seated Capacity</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary-gold text-[28px]">square_foot</span>
                                    <div>
                                        <p className="text-text-main font-semibold text-lg">8,500 sq ft</p>
                                        <p className="text-text-muted text-xs uppercase tracking-wide">Total Area</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-5 pt-2">
                                <button className="flex-1 sm:flex-none h-14 px-8 bg-primary-gold hover:bg-primary-dark rounded-sm text-white text-sm font-bold tracking-widest uppercase transition-all shadow-lg shadow-primary-gold/20">
                                    Check Availability
                                </button>
                                <button className="flex-1 sm:flex-none h-14 px-8 bg-transparent border border-text-main hover:bg-text-main hover:text-white rounded-sm text-text-main text-sm font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 group/btn">
                                    <span className="material-symbols-outlined text-[20px]">photo_library</span>
                                    View Gallery
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Venue 2 */}
                <section className="group">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-8 lg:order-1 lg:pr-4 order-2">
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3 text-primary-gold mb-1">
                                    <span className="h-px w-12 bg-primary-gold"></span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Rooftop Views</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-text-main leading-tight">The Sky Lounge</h2>
                                <p className="text-text-muted text-lg leading-relaxed mt-2 font-light">
                                    A modern sanctuary perched above the city offering 360-degree panoramic views. Ideal for sophisticated
                                    cocktail receptions, networking events, and intimate celebrations under the stars.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-y-6 gap-x-8 py-8 border-y border-border-subtle">
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary-gold text-[28px]">groups</span>
                                    <div>
                                        <p className="text-text-main font-semibold text-lg">150 Guests</p>
                                        <p className="text-text-muted text-xs uppercase tracking-wide">Cocktail Style</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary-gold text-[28px]">deck</span>
                                    <div>
                                        <p className="text-text-main font-semibold text-lg">Terrace</p>
                                        <p className="text-text-muted text-xs uppercase tracking-wide">Outdoor Access</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-5 pt-2">
                                <button className="flex-1 sm:flex-none h-14 px-8 bg-primary-gold hover:bg-primary-dark rounded-sm text-white text-sm font-bold tracking-widest uppercase transition-all shadow-lg shadow-primary-gold/20">
                                    Check Availability
                                </button>
                                <button className="flex-1 sm:flex-none h-14 px-8 bg-transparent border border-text-main hover:bg-text-main hover:text-white rounded-sm text-text-main text-sm font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 group/btn">
                                    <span className="material-symbols-outlined text-[20px]">photo_library</span>
                                    View Gallery
                                </button>
                            </div>
                        </div>
                        <div className="relative h-[450px] lg:h-[550px] w-full overflow-hidden rounded-sm shadow-xl lg:order-2 order-1">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-7JjVZu0TDbK4kzdUn_kyjh59qxYsE5c4IsaeeH77Bpkf_haXkepRbkLSTV-1FHmrSWHJ6tmxjn-bPcH3tYm_lJnK55sXBq7x4lbhMtBaL4dPLkDyRreBA83xpuvR-YE2ewMgrLGOZeBIZEZZWebt_QZQTp-1oEJZZWJUNtdJmI_SqnNIIEZnaU0BM9UNHn6-1lCt57C6bCbJwVWU3btpP4enBARSD30VcH3Ksee8pIYMybrE-DgmrzXyyJzotTufGkrvwYsXfFp1')",
                                }}
                            ></div>
                        </div>
                    </div>
                </section>

                {/* Concierge CTA */}
                <section className="mt-12 rounded-lg bg-background-offwhite border border-primary-gold/20 p-12 md:p-20 text-center relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 right-0 p-32 bg-primary-gold/5 blur-[100px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 p-32 bg-primary-gold/10 blur-[100px] rounded-full"></div>
                    <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl mx-auto">
                        <div className="size-20 rounded-full bg-white border border-primary-gold/20 flex items-center justify-center shadow-sm">
                            <span className="material-symbols-outlined text-primary-gold text-[40px]">support_agent</span>
                        </div>
                        <h2 className="text-4xl font-bold text-text-main font-serif">Not sure which space fits?</h2>
                        <p className="text-text-muted text-lg">
                            Our dedicated event concierge team is here to help you select the perfect venue and curate a bespoke
                            experience for your guests.
                        </p>
                        <button className="mt-6 px-10 py-4 bg-text-main text-white hover:bg-black rounded-sm text-sm font-bold tracking-widest uppercase transition-all shadow-xl font-sans">
                            Contact Concierge
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

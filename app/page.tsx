import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background-offwhite/90 z-10"></div>
          <div className="absolute inset-0 bg-black/10 z-10"></div>
          <div
            className="w-full h-full bg-cover bg-center animate-kenburns brightness-110 saturate-[0.8]"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmCfOAVvbFJmKjF9m40j5Hp3g7APP5nIXFcvz4kjpQXOxTRYz5cWREjQiwuVe3MRHIaEJ8Lxza-_QoQ31R0_qxs9eDaKfz9s46kiouYs0RBzNaIdDl8UqApw9DoJOXRQKk9UhYAvDOhEu7QWj9sx7wNwmCy2JVUEmW0Wuf2h2fkFlqmQJoMuWtqr1LOzz4e9k9ieTXEMs_50K3ko8l3awi-YRSOeRRekp1J2hP5Ijx2EhEVBm1sbxsPlj3UnaMLGDa3NLHX-dpIJQY')",
            }}
          ></div>
        </div>
        <div className="relative z-20 text-center max-w-5xl px-6 pt-24">
          <div className="inline-block border-b border-primary-gold/50 pb-1 mb-6">
            <span className="text-white text-xs font-bold tracking-[0.3em] uppercase drop-shadow-md">
              Welcome to Atheva
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-none mb-8 drop-shadow-lg">
            Luxury Hospitality & <br />{" "}
            <span className="italic font-light text-white/90">Premium Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
            Crafting unforgettable weddings and corporate gatherings in the heart of the city, where elegance meets
            exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button className="min-w-[220px] bg-primary-gold hover:bg-primary-dark text-white h-14 px-8 rounded-sm text-sm font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-primary-gold">
              Book Your Experience
            </button>
            <button className="min-w-[220px] bg-white/10 hover:bg-white/20 border border-white text-white h-14 px-8 rounded-sm text-sm font-bold uppercase tracking-widest transition-all backdrop-blur-md hover:shadow-lg">
              Explore Our Spaces
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/60">
          <span className="material-symbols-outlined text-4xl font-light">keyboard_arrow_down</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative grid grid-cols-2 gap-6">
            <div className="aspect-[3/4] rounded-sm overflow-hidden translate-y-8 shadow-2xl transition-transform hover:scale-105 duration-700">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuGOW54kq93PQPjpWW75tGZjgo9tliGopgu8y-7O6oj4oL0C-lyIMcRyEtYkjcPP5HKZM9_s6iEnJ3F3OpyAxLDSyptX6PUmZmakcICoFV125fIY-2O0RMHa3aPJ52O2tsybYpTG1edxuJ4Blj90PW4YWCsmsAKnaf6rZ3o4HV2aM6YA3h5V9aeSwYJsHob-Wysbwqmzapif5Y1Oxm_BMktcPliY41cMiZHA7z8uRsk7C8C7JCn-kwcigdvFBDp6FgKvy-UxoM7jzl"
                alt="Elegant waiter"
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </div>
            <div className="aspect-[3/4] rounded-sm overflow-hidden -translate-y-8 shadow-2xl transition-transform hover:scale-105 duration-700">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDymQx_o-WJ7SBegaTFGei8Yf-b5B-dbfAYYhFn434nW2QVwSl3g3Y9XZTezgrNuvdd6dRLl8hlx336U-ChJ5GxTel8anDsv6_hPSYLlhNloxFDRbsPbYevKSdDQ_KZQy4kuy2HWlZFwnpRx5tH7mBJASXOvkubonNZ0AW0QsDZ7gKDIggOXLv-m6yULaecyBY3S6g7lwVIlACTUMnt9i-3zGw0ak6qta9B52qkpW4JBgQoxUzZuBng6t0l4cGF3ZFzD55z-KeYsl11"
                alt="Modern architecture"
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-16 bg-primary-gold"></span>
              <span className="text-primary-dark text-xs font-bold tracking-[0.25em] uppercase">About Us</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-text-main leading-tight">
              Redefining Luxury in <br /> <span className="italic text-primary-gold">Every Detail</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed font-light">
              At ATHEVA, we believe that true luxury lies in the nuances. From the architectural grandeur of our venues
              to the meticulous planning of our events, every element is curated to evoke a sense of wonder and
              exclusivity.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-6 font-light">
              Whether it's an intimate gathering or a grand celebration, our dedicated team ensures your vision is
              brought to life with unparalleled sophistication and grace.
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
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 px-6 md:px-12 bg-background-offwhite border-y border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl text-text-main mb-6">Our Curated Offerings</h2>
              <p className="text-text-muted text-lg font-light">
                Discover our diverse range of premium spaces tailored for every distinct occasion.
              </p>
            </div>
            <a
              className="hidden md:flex items-center gap-2 text-primary-gold hover:text-primary-dark transition-colors text-xs font-bold uppercase tracking-widest border-b border-transparent hover:border-primary-gold pb-1"
              href="#"
            >
              View All Services
              <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Weddings & Celebrations",
                desc: "Elegant ballrooms and scenic outdoor venues designed to make your special day truly magical.",
                icon: "favorite",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgyULf2jUDCHqEEu0bqEj_Vofjdnt8Zx2aMajZzQzYGX3MS8JWSDAOPm0-zxQI_4kDYrNUay4vg22MQUesIuLEVEgnJseAX2ct_ZfcVXnLy7keNzkKYQO0Pg42HfaLHZfz3BlAmihW9CIK85CgsckdvVHiAfmTw98MPOHoutwCYtTvb2CyUb3KFx66m49fclRgQnmwqxb2kq26fZ-yJDq61o1E6C5H3z8cCk_XJw9TJ2JyUqF6DHC3uPDa-My7fNNLvFHII1WgQRIM",
              },
              {
                title: "Corporate Events",
                desc: "State-of-the-art facilities and impeccable service for impactful conferences and executive meetings.",
                icon: "meeting_room",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCxFs6UlYnBlNvQA-BkqHTGD6QvYfT8nxGIkNzeLwu22HqKALeXjCTQ4AnQqGsPVLiPKg8H_ZL875_EMjAGJrLE4xW_oq8R2Ihm-DfiypSzvXQrHxMfMtP0nR-0YSND_y9aRPg5EuuNQRBa0V958i2US79zjm4uJ5zeaeWJydOkd_0B_oausxS-lxxW2mEngJ7LO0vIZOOEuV0EtOqlUE9hZ2kVUOMaEydPkNvojyAg7IJLNsYUuxPnsSihDsHZbdiavJo6txaNGZ_",
              },
              {
                title: "Private Parties",
                desc: "Intimate lounges and exclusive dining areas for sophisticated gatherings and social soirees.",
                icon: "local_bar",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx8osFPriDVOKiMmFHnTyLTNRAzAsQQ5WbWD849Kv2-lA0pVNDwnYzH6MQCi0dvk9v9PN40JE1j0vlEmOj1KjSeVsS8GYVHnCsqYB3vgvX0WCEB5vgt7HhZkM7aVOXdbuz9BqgHsPOQU4j18GEEofqcs15wB31_s4MlhN_P07GGBU3eQA_HpcR4DCyP_PahM1etaQYVoUgvk_4kUkLKoy-QRnFaJrSI6Nke5ZlGKTjZD2OTir099_ltUd9SACWg80cFuK8NRq_Zgqt",
              },
            ].map((item, i) => (
              <div
                key={i}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary-dark text-xs font-bold tracking-[0.25em] uppercase mb-6 block">
              The ATHEVA Standard
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-text-main leading-tight">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Premium Design",
                desc: "Architecturally stunning spaces meticulously designed to impress the most discerning guests with timeless elegance.",
                icon: "diamond",
              },
              {
                title: "Custom Solutions",
                desc: "Tailored event planning services that adapt to your specific vision, ensuring a unique and personalized experience.",
                icon: "handshake",
              },
              {
                title: "World-Class Amenities",
                desc: "Top-tier catering partnerships, advanced audio-visual technology, and white-glove support staff at your disposal.",
                icon: "hotel_class",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-10 rounded-sm bg-background-offwhite border border-transparent hover:border-primary-gold/20 hover:bg-white transition-all duration-500 group shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-15px_rgba(197,160,89,0.15)]"
              >
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border border-primary-gold/20 mb-8 group-hover:scale-110 transition-transform shadow-md text-primary-gold">
                  <span className="material-symbols-outlined text-4xl font-light">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-text-main mb-4 font-serif">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
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
            <div className="order-2 md:order-1 relative">
              <div className="absolute -top-16 -left-10 text-primary-gold/10 pointer-events-none">
                <span className="material-symbols-outlined text-9xl">format_quote</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-4xl font-serif text-text-main italic leading-relaxed mb-10">
                  "The venue was absolutely breathtaking. The attention to detail and the level of service we received
                  made our gala night unforgettable. ATHEVA truly defines luxury."
                </h3>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden shadow-md ring-2 ring-primary-gold/20">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYNhVqR-WmyshUO9blSf8vU1k1JTYPZtho8XTMmUGDW9fjEY8qSBDAdzXZLb0XtfXUsfiO8TmYGurY5dJn0YEe0ZAqNSkuNOlLlywijzT-k99rKA-jlAxvalYx_Tjx97L3TeGuzf_yIvaHUfhHA5ByM15a6l9bxWFObuU8wYSdXKaTlTqGVEIBDHid6PXBjjCnuVa3eN9JEHDAJJa7tnLKpUippNLrmm99iAembxwxaiarT85-u5B9vLunnNHWveWFKKjRU6ClqauM"
                      alt="Sarah Jenkins"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-text-main font-bold text-lg font-serif">Sarah Jenkins</p>
                    <p className="text-primary-dark text-xs uppercase tracking-widest font-semibold">
                      CEO, The Gala Group
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 h-full flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] md:aspect-square rounded-sm overflow-hidden border-[8px] border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm6An_FGopcgbBJyWbaZStIuP2RxepKDWI11Q-KNTU4uYxcygSssIxTsJpFPPlnbw9jhxzjHvs_4gESaWCkrtgg5eN55_85Uea7IATdgo7obD9BIh9xpfbS7ePmm7tIsb4wp1wE82Vtnm8hno6mRtquzzbO7_JL0NJU3fpbq2yCz2vWLQobxbpsbKBt_XIvn7AO2uUcjsLUeq22X-5Uq-4xFXyILV1qBtS5BllX1ajKApsi86z_jesUKZay35FxxXJZhEQMn6EwDxz"
                  alt="Elegant event"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white border-t border-border-subtle relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-light via-primary-gold to-primary-light opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-5xl md:text-6xl text-text-main mb-6">Ready to create memories?</h2>
          <p className="text-text-muted mb-10 text-lg font-light">
            Book your tour today and see why ATHEVA is the city's premier event destination.
          </p>
          <button className="bg-primary-gold hover:bg-primary-dark text-white h-16 px-12 rounded-sm text-sm font-bold tracking-widest transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 uppercase">
            Schedule a Private Tour
          </button>
        </div>
      </section>
    </div>
  );
}

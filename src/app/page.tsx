"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin, Phone, Clock, Star, ChevronDown, Menu as MenuIcon, X,
  Mail, MessageCircle, Fish, UtensilsCrossed,
  Waves, Heart, Users, Sparkles, Navigation, ExternalLink
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Menú", href: "#menu" },
  { label: "Sucursales", href: "#sucursales" },
  { label: "Contacto", href: "#contacto" },
];

/* ─── HEADER ─── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className="text-white font-display text-2xl font-bold tracking-tight">
          La Jaiba <span className="text-coral">Locca</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-white/80 hover:text-coral transition text-sm font-medium">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/527444810407?text=Hola%2C%20quiero%20reservar%20una%20mesa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-coral hover:bg-coral/90 text-white px-5 py-2 rounded-full text-sm font-semibold transition"
          >
            Reservar Mesa
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Menu">
          {open ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-navy/95 backdrop-blur border-t border-white/10"
        >
          <div className="flex flex-col items-center gap-4 py-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-coral transition text-lg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/527444810407?text=Hola%2C%20quiero%20reservar%20una%20mesa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-coral text-white px-6 py-2.5 rounded-full font-semibold"
            >
              Reservar Mesa
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#243656] to-[#1a3a5c]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10" />

      {/* Wave decoration */}
      <div className="absolute bottom-20 left-0 right-0 opacity-10">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path fill="#2D9B83" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L0,120Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 text-seafoam text-sm font-medium tracking-widest uppercase">
              <Fish size={18} /> Mariscos Gourmet en Acapulco
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-4">
            La Jaiba <span className="text-coral">Locca</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-4">
            Tradición, sazón y las mejores delicias del mar
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-1.5 mb-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className={i < 4 ? "fill-coral text-coral" : "fill-coral/50 text-coral/50"} />
            ))}
            <span className="text-white/60 text-sm ml-2">4.4 / 5 — 550+ reseñas en Google</span>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="bg-coral hover:bg-coral/90 text-white px-8 py-3.5 rounded-full font-semibold text-lg transition shadow-lg shadow-coral/30"
            >
              Ver Menú
            </a>
            <a
              href="https://wa.me/527444810407?text=Hola%2C%20quiero%20reservar%20una%20mesa"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/30 hover:border-seafoam text-white hover:text-seafoam px-8 py-3.5 rounded-full font-semibold text-lg transition flex items-center gap-2"
            >
              <MessageCircle size={20} /> Reservar Mesa
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-white/30" />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── NOSOTROS ─── */
function Nosotros() {
  const features = [
    { icon: Fish, title: "Mariscos Frescos", desc: "Productos del mar seleccionados diariamente" },
    { icon: Heart, title: "Sazón Inigualable", desc: "Décadas de tradición culinaria acapulqueña" },
    { icon: Users, title: "Para Toda la Familia", desc: "Área de juegos, ambiente relajado y espacioso" },
    { icon: Sparkles, title: "Experiencia Única", desc: "Servicio cálido con el sabor de la costa" },
  ];

  return (
    <section id="nosotros" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-seafoam font-medium text-sm tracking-widest uppercase">
            Nuestra Historia
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl text-navy font-bold mt-3 mb-6">
            Un Clásico de Acapulco
          </motion.h2>
          <motion.p variants={fadeUp} className="text-navy/60 text-lg max-w-3xl mx-auto leading-relaxed">
            Por décadas, La Jaiba Locca ha sido el punto de encuentro para los amantes de los mariscos en Acapulco. 
            Nacimos en Costa Azul con una misión simple: ofrecer las mejores delicias del mar con una sazón que no 
            encontrarás en ningún otro lugar. Hoy, con dos sucursales y miles de clientes satisfechos, seguimos 
            cocinando con la misma pasión del primer día.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition group"
            >
              <div className="w-14 h-14 bg-seafoam/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-seafoam/20 transition">
                <f.icon size={28} className="text-seafoam" />
              </div>
              <h3 className="font-display text-xl text-navy font-bold mb-2">{f.title}</h3>
              <p className="text-navy/50 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── MENÚ ─── */
const MENU_DATA = [
  {
    category: "Entradas",
    icon: Sparkles,
    items: [
      { name: "Mousse de Salmón Ahumado", desc: "Con ajo, acompañado de tostadas" },
      { name: "Chalupitas de Marlín", desc: "Tradicional antojito con marlín desmenuzado" },
      { name: "Ceviche Vuelve a la Vida", desc: "Mezcla de mariscos frescos en jugo de limón" },
      { name: "Coctel de Camarón", desc: "Camarones frescos en salsa de la casa" },
    ],
  },
  {
    category: "Especialidades de la Casa",
    icon: Star,
    items: [
      { name: "Moronga de Mariscos", desc: "Nuestra creación estrella — mezcla única de mariscos" },
      { name: "Camarones al Mango", desc: "Camarones bañados en salsa dulce de mango" },
      { name: "Brocheta de Mariscos", desc: "Selección del mar a la parrilla" },
      { name: "Filete a la Plancha", desc: "Pescado fresco con guarnición" },
    ],
  },
  {
    category: "Tacos y Antojitos",
    icon: UtensilsCrossed,
    items: [
      { name: "Tacos de Camarón", desc: "Con salsa de la casa y guarniciones" },
      { name: "Pescadillas", desc: "Quesadillas rellenas de pescado fresco" },
      { name: "Quesadillas de Mariscos", desc: "Con queso fundido y mariscos selectos" },
      { name: "Tostadas de Ceviche", desc: "Crujientes con ceviche fresco" },
    ],
  },
  {
    category: "Del Mar",
    icon: Fish,
    items: [
      { name: "Pulpo en Diferentes Preparaciones", desc: "A la plancha, al ajillo o a la diabla" },
      { name: "Camarones al Gusto", desc: "Al agua chile, a la diabla, empanizados o al ajillo" },
      { name: "Filete de Pescado", desc: "A la veracruzana, empanizado o al mojo de ajo" },
      { name: "Torre de Mariscos", desc: "Espectacular combinación de lo mejor del mar" },
    ],
  },
  {
    category: "Bebidas",
    icon: Waves,
    items: [
      { name: "Micheladas de la Casa", desc: "Preparadas con nuestra receta secreta" },
      { name: "Margarita de Tamarindo", desc: "Refrescante con un toque tropical" },
      { name: "Cervezas Nacionales e Importadas", desc: "Amplia selección fría" },
      { name: "Aguas Frescas", desc: "Del día, naturales y refrescantes" },
    ],
  },
];

function MenuSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="menu" className="py-20 md:py-28 bg-gradient-to-b from-cream via-white to-cream">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="text-coral font-medium text-sm tracking-widest uppercase">
            Nuestros Platillos
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl text-navy font-bold mt-3 mb-4">
            Menú
          </motion.h2>
          <motion.p variants={fadeUp} className="text-navy/50 max-w-xl mx-auto">
            Cada platillo es preparado con ingredientes frescos del mar y nuestra sazón que nos distingue
          </motion.p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {MENU_DATA.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition ${
                activeTab === i
                  ? "bg-navy text-white shadow-lg"
                  : "bg-white text-navy/60 hover:text-navy hover:bg-sand/50 border border-navy/10"
              }`}
            >
              <cat.icon size={16} />
              {cat.category}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {MENU_DATA[activeTab].items.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl p-6 border border-navy/5 hover:border-coral/20 hover:shadow-md transition group"
            >
              <h4 className="font-display text-lg text-navy font-bold group-hover:text-coral transition">
                {item.name}
              </h4>
              <p className="text-navy/50 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <p className="text-navy/40 text-sm">Rango de precios: $180 – $600 MXN por persona</p>
        </div>
      </div>
    </section>
  );
}

/* ─── ESPECIALIDADES ─── */
function Especialidades() {
  const dishes = [
    {
      name: "Moronga de Mariscos",
      desc: "Nuestra creación más icónica. Una mezcla audaz de mariscos selectos que te hará volver por más. El platillo que nos puso en el mapa.",
      gradient: "from-coral to-[#d4543a]",
    },
    {
      name: "Camarones al Mango",
      desc: "Camarones frescos bañados en una salsa dulce de mango que combina perfectamente lo tropical con lo marino. Un favorito de la casa.",
      gradient: "from-seafoam to-[#1d7a65]",
    },
    {
      name: "Ceviche Vuelve a la Vida",
      desc: "La receta clásica que revive los sentidos. Mariscos mixtos marinados en limón con el toque secreto de La Jaiba Locca.",
      gradient: "from-navy to-[#2a3f6b]",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 Q25 30 50 50 Q75 70 100 50" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-coral font-medium text-sm tracking-widest uppercase">
            Lo Mejor de Nuestra Cocina
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl text-white font-bold mt-3">
            Especialidades de la Casa
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {dishes.map((d) => (
            <motion.div
              key={d.name}
              variants={fadeUp}
              className="group"
            >
              <div className={`bg-gradient-to-br ${d.gradient} rounded-2xl p-8 h-full flex flex-col justify-between min-h-[280px] shadow-xl hover:scale-[1.02] transition-transform`}>
                <div>
                  <Star size={24} className="text-white/40 mb-4" />
                  <h3 className="font-display text-2xl text-white font-bold mb-3">{d.name}</h3>
                  <p className="text-white/70 leading-relaxed">{d.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-white/50 text-sm flex items-center gap-1">
                    <Heart size={14} /> Favorito de nuestros clientes
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── RESEÑAS ─── */
function Resenas() {
  const reviews = [
    { name: "María G.", text: "El mejor restaurante de mariscos en Acapulco, sin duda. La moronga de mariscos es espectacular y el servicio siempre atento.", stars: 5 },
    { name: "Carlos R.", text: "Llevamos años viniendo en familia. Los camarones al mango son increíbles y el área de juegos para los niños es perfecta.", stars: 5 },
    { name: "Ana L.", text: "Excelente relación calidad-precio. El ceviche vuelve a la vida es de los mejores que he probado. Muy recomendado.", stars: 4 },
    { name: "Roberto M.", text: "La sucursal de Diamante tiene un ambiente increíble. Los platillos siempre frescos y con una sazón que no encuentras en otro lado.", stars: 5 },
  ];

  return (
    <section className="py-20 md:py-28 bg-sand/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="text-seafoam font-medium text-sm tracking-widest uppercase">
            Lo Que Dicen Nuestros Clientes
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl text-navy font-bold mt-3">
            Reseñas
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reviews.map((r) => (
            <motion.div
              key={r.name}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < r.stars ? "fill-coral text-coral" : "text-navy/15"} />
                ))}
              </div>
              <p className="text-navy/70 leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
              <p className="text-navy font-semibold text-sm">— {r.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── SUCURSALES ─── */
function Sucursales() {
  const locations = [
    {
      name: "Costa Azul",
      address: "Rivadavia #402, local C, Esq. Fernando de Magallanes, Fracc. Costa Azul, C.P. 39850",
      phone: "744 481 0407",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.5!2d-99.8697!3d16.8531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca5e5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sLa+Jaiba+Locca!5e0!3m2!1ses!2smx!4v1",
    },
    {
      name: "Diamante",
      address: "Blvd. de las Naciones #1801-A, Col. La Zanja, C.P. 39906",
      phone: "744 462 1582",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.5!2d-99.7897!3d16.7931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca5e5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sLa+Jaiba+Locca+Diamante!5e0!3m2!1ses!2smx!4v1",
    },
  ];

  return (
    <section id="sucursales" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="text-coral font-medium text-sm tracking-widest uppercase">
            Visítanos
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl text-navy font-bold mt-3 mb-4">
            Nuestras Sucursales
          </motion.h2>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 text-navy/50 text-sm">
            <Clock size={16} />
            <span>Lun–Jue: 12:00–21:00 | Vie–Sáb: 12:00–22:00 | Dom: 12:00–21:00</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {locations.map((loc) => (
            <motion.div key={loc.name} variants={fadeUp} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
              {/* Map placeholder */}
              <div className="h-48 bg-gradient-to-br from-navy/10 to-seafoam/10 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin size={40} className="text-coral mx-auto mb-2" />
                  <p className="text-navy/50 text-sm">Sucursal {loc.name}</p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/La+Jaiba+Locca+${loc.name}+Acapulco`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full p-2 hover:bg-white transition"
                >
                  <ExternalLink size={16} className="text-navy" />
                </a>
              </div>

              <div className="p-8">
                <h3 className="font-display text-2xl text-navy font-bold mb-3">
                  Sucursal {loc.name}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-coral mt-0.5 shrink-0" />
                    <p className="text-navy/60 text-sm">{loc.address}, Acapulco, Gro.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-coral shrink-0" />
                    <a href={`tel:+52${loc.phone.replace(/\s/g, "")}`} className="text-navy/60 hover:text-coral text-sm transition">
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-coral shrink-0" />
                    <p className="text-navy/60 text-sm">12:00 – 21:00 (Vie–Sáb hasta 22:00)</p>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <a
                    href={`https://wa.me/52${loc.phone.replace(/\s/g, "")}?text=Hola%2C%20quiero%20reservar%20en%20sucursal%20${loc.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-seafoam hover:bg-seafoam/90 text-white py-2.5 rounded-xl text-sm font-semibold text-center transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                  <a
                    href={`tel:+52${loc.phone.replace(/\s/g, "")}`}
                    className="flex-1 border border-navy/15 hover:border-coral text-navy hover:text-coral py-2.5 rounded-xl text-sm font-semibold text-center transition flex items-center justify-center gap-2"
                  >
                    <Phone size={16} /> Llamar
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CONTACTO / CTA ─── */
function Contacto() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-gradient-to-br from-navy via-[#243656] to-[#1a3a5c] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
            ¿Listo para disfrutar?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Reserva tu mesa y vive la experiencia de los mejores mariscos de Acapulco. Te esperamos con los brazos abiertos.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="https://wa.me/527444810407?text=Hola%2C%20quiero%20reservar%20una%20mesa%20en%20La%20Jaiba%20Locca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-coral hover:bg-coral/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition shadow-lg shadow-coral/30 flex items-center gap-3"
            >
              <MessageCircle size={22} /> Reservar por WhatsApp
            </a>
            <a
              href="tel:+527444810407"
              className="border-2 border-white/20 hover:border-white/40 text-white px-10 py-4 rounded-full font-semibold text-lg transition flex items-center gap-3"
            >
              <Phone size={22} /> Llamar Ahora
            </a>
          </motion.div>

          {/* Social + info */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-6">
            <a href="https://www.instagram.com/lajaibaloccaacapulco" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-coral transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/lajaibalocca.acapulco" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-coral transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="mailto:contacto@lajaibalocca.com.mx" className="text-white/40 hover:text-coral transition">
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="text-white/20 text-sm mt-8">
            contacto@lajaibalocca.com.mx
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="bg-navy py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} La Jaiba Locca — Mariscos Gourmet en Acapulco
        </p>
        <div className="flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-white/30 hover:text-white/60 text-xs transition">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─── FLOATING WHATSAPP ─── */
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/527444810407?text=Hola%2C%20quiero%20información%20sobre%20La%20Jaiba%20Locca"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Nosotros />
      <MenuSection />
      <Especialidades />
      <Resenas />
      <Sucursales />
      <Contacto />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

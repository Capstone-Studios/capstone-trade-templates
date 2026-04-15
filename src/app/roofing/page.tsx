import {
  Phone,
  Star,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Hammer,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Quote,
} from "lucide-react";

export const metadata = {
  title: "Roberts Roofing | Premium Roofing in Gurnee, IL",
  description:
    "GAF Master Elite certified roofers serving Gurnee & Lake County since 2003. Lifetime warranties, free drone inspections, and 24hr storm response.",
};

/* ── Data ── */

const PHONE = "(847) 555-0199";
const PHONE_HREF = "tel:8475550199";

const STATS = [
  { value: "20+", label: "Years" },
  { value: "142", label: "Reviews" },
  { value: "4.9", label: "Rating" },
];

const TRUST_BAR = [
  "Licensed & Bonded Illinois Roofing Contractor",
  "Insurance Claims Specialists",
  "Storm Damage Experts",
  "Free Inspections Available",
];

const ABOUT_CHECKLIST = [
  "Residential & commercial expertise",
  "Licensed Illinois contractors",
  "Insurance claim assistance",
  "GAF Master Elite certified",
];

const SERVICES = [
  {
    title: "Roof Replacement",
    desc: "Complete tear-offs with GAF and Owens Corning architectural shingles. Lifetime workmanship warranty on every replacement.",
    img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80&auto=format",
  },
  {
    title: "Storm Damage Repair",
    desc: "24-hour emergency tarping and full insurance claim walk-through. We document every hail strike and fight for the full replacement you deserve.",
    img: "https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?w=800&q=80&auto=format",
  },
  {
    title: "Roof Repair",
    desc: "Fast, precise repair for leaks, missing shingles, flashing failures, and worn valleys. Most repairs completed same-day.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format",
  },
  {
    title: "Gutter Systems",
    desc: "Seamless aluminum gutters, oversized downspouts, and leaf-guard systems sized for Illinois rainfall.",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80&auto=format",
  },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80&auto=format",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80&auto=format",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80&auto=format",
];

const REVIEWS = [
  {
    name: "Sarah M.",
    stars: 5,
    text: "After a hailstorm totaled our roof, Roberts handled everything — met the insurance adjuster, documented every panel, and replaced the whole thing in two days. The crew was respectful and the new roof looks incredible.",
  },
  {
    name: "Mike T.",
    stars: 5,
    text: "Called them on a Sunday during a rainstorm. They had a tarp up within two hours and the repair done by Tuesday. Honest pricing, no upsell.",
  },
  {
    name: "Jennifer L.",
    stars: 5,
    text: "We interviewed five companies before choosing Roberts. The owner walked us through every material option and the crew finished on schedule. Couldn't be happier.",
  },
];

/* ══════════════════════════════════════════════════════════ */

export default function RoofingPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#181818]" style={{ fontFamily: "var(--font-barlow), var(--font-body), system-ui, sans-serif" }}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#0c0c0c]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="text-white text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
            Roberts Roofing
          </a>
          <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-white/60">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a
            href={PHONE_HREF}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c41017] text-white text-[13px] font-semibold hover:bg-[#a80d14] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            {PHONE}
          </a>
        </div>
      </nav>

      {/* ── HERO (Dark photo background) ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1632759145351-1d592919f522?w=2400&q=80&auto=format)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/92 via-[#0a0a0a]/80 to-[#0a0a0a]/50" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-32 w-full">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="fade-up inline-flex items-center gap-2 mb-8">
              <span className="w-8 h-[2px] bg-[#c41017]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c41017]">
                Quality Roofing Since 2003
              </span>
            </div>

            {/* Headline — serif */}
            <h1
              className="fade-up-1 text-[clamp(2.75rem,6.5vw,5.5rem)] font-bold tracking-[-0.02em] leading-[0.95] text-white"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Premium Roofing
              <br />
              in <span className="italic text-[#c41017]">Gurnee</span>
            </h1>

            <p className="fade-up-2 mt-8 text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.7] text-white/65 max-w-lg">
              Family-owned, GAF-certified roofers protecting Lake County homes for over two decades. Lifetime warranties, transparent pricing, and crews that treat your property like their own.
            </p>

            {/* CTAs */}
            <div className="fade-up-3 mt-10 flex flex-wrap gap-4">
              <a
                href={PHONE_HREF}
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#c41017] text-white font-semibold text-[15px] hover:bg-[#a80d14] transition-all hover:shadow-2xl hover:shadow-red-900/30"
              >
                <Phone className="w-4 h-4" />
                Request Inspection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium text-[15px] hover:bg-white/10 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Stats row */}
            <div className="fade-up-4 mt-14 flex gap-8">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-[32px] font-bold text-white tracking-tight leading-none">{s.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/40">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR (dark) ── */}
      <section className="bg-[#0c0c0c] border-y border-[#c41017]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {TRUST_BAR.map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] text-white/50 font-medium">
                <Shield className="w-3.5 h-3.5 text-[#c41017]" strokeWidth={2} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 md:py-36 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Images — layered */}
            <div className="md:col-span-5 relative">
              <div
                className="reveal-rise rounded-2xl aspect-[4/5] shadow-2xl"
                style={{
                  backgroundImage: "url(https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80&auto=format)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#c41017] text-white rounded-2xl p-5 shadow-xl">
                <div className="text-[28px] font-bold leading-none">20+</div>
                <div className="text-[11px] uppercase tracking-[0.12em] mt-1 text-white/70">Years Experience</div>
              </div>
            </div>

            {/* Copy */}
            <div className="md:col-span-7 reveal">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[#c41017]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c41017]">Who We Are</span>
              </div>
              <h2
                className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.02em] leading-[1.08]"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Trusted <span className="italic text-[#c41017]">Roofing</span> Experts Since 2003
              </h2>
              <p className="mt-8 text-[17px] leading-[1.8] text-[#181818]/65">
                At Roberts Roofing, every project is supervised by a master craftsman, finished by hand, and backed by a lifetime workmanship warranty. We don&apos;t cut corners, we don&apos;t sub out to day crews, and we don&apos;t leave until the job is right. For over twenty years, Lake County families have trusted us with their homes.
              </p>

              {/* Checklist */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ABOUT_CHECKLIST.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[14px] font-medium text-[#181818]">
                    <CheckCircle2 className="w-5 h-5 text-[#c41017] shrink-0" strokeWidth={2} />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={PHONE_HREF}
                className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#c41017] text-white font-semibold text-[14px] hover:bg-[#a80d14] transition-colors"
              >
                Get Your Free Estimate
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 md:py-36 bg-[#f4f1ea]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16 reveal">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#c41017]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c41017]">What We Do</span>
              <span className="w-8 h-[2px] bg-[#c41017]" />
            </div>
            <h2
              className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Our <span className="italic text-[#c41017]">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className="reveal-rise group bg-white rounded-2xl overflow-hidden border border-[#181818]/8 hover:border-[#c41017]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div
                  className="aspect-[4/3] relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${svc.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Hammer className="w-8 h-8 text-white/80" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[18px] font-bold tracking-[-0.01em] mb-2">{svc.title}</h3>
                  <p className="text-[13px] leading-[1.7] text-[#181818]/60">{svc.desc}</p>
                  <a href={PHONE_HREF} className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-[#c41017] hover:gap-2 transition-all">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-24 md:py-36 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16 reveal">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#c41017]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c41017]">Our Work</span>
              <span className="w-8 h-[2px] bg-[#c41017]" />
            </div>
            <h2
              className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Recent <span className="italic text-[#c41017]">Projects</span>
            </h2>
            <p className="mt-4 text-[16px] text-[#181818]/55 max-w-xl mx-auto">
              Every roof we finish protects a family in Lake County. Here are a few recent projects from around the neighborhood.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* First image — tall, spans 2 rows */}
            <div
              className="reveal-rise rounded-2xl col-span-1 row-span-2 aspect-auto min-h-[400px] overflow-hidden group"
              style={{
                backgroundImage: `url(${GALLERY[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {GALLERY.slice(1).map((img, i) => (
              <div
                key={i}
                className="reveal-rise rounded-2xl aspect-square overflow-hidden group"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-24 md:py-36 bg-[#f4f1ea]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16 reveal">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#c41017]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c41017]">Testimonials</span>
              <span className="w-8 h-[2px] bg-[#c41017]" />
            </div>
            <h2
              className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              What Homeowners <span className="italic text-[#c41017]">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="reveal-rise bg-white rounded-2xl p-8 border border-[#181818]/8 hover:border-[#c41017]/20 hover:-translate-y-1 transition-all duration-500"
              >
                <Quote className="w-8 h-8 text-[#c41017]/20 mb-4" strokeWidth={1.5} />
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(r.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[14px] leading-[1.75] text-[#181818]/65 mb-6">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-[#181818]/8">
                  <p className="text-[13px] font-semibold">{r.name}</p>
                  <p className="text-[11px] text-[#181818]/40 mt-0.5">Verified Homeowner</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ── */}
      <section id="contact" className="relative py-32 md:py-40 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1600573472591-ee6981cf81d6?w=2400&q=80&auto=format)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/85" />

        <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-8 h-[2px] bg-[#c41017]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c41017]">Ready When You Are</span>
            <span className="w-8 h-[2px] bg-[#c41017]" />
          </div>
          <h2
            className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold tracking-[-0.02em] leading-[1.02] text-white"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Let&apos;s Protect Your <br />
            <span className="italic text-[#c41017]">Biggest Investment</span>
          </h2>
          <p className="mt-8 text-[17px] leading-[1.7] text-white/55 max-w-xl mx-auto">
            Roberts Roofing is standing by to help with your roofing needs in Gurnee and Lake County. Free inspections. Honest pricing. Roofs that last.
          </p>
          <div className="mt-12">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 h-16 px-10 rounded-full bg-[#c41017] text-[17px] font-bold text-white hover:bg-[#a80d14] transition-all hover:shadow-2xl hover:shadow-red-900/30"
            >
              <Phone className="w-5 h-5" />
              Call {PHONE}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <p className="mt-8 text-[12px] text-white/30 flex items-center justify-center gap-2 uppercase tracking-[0.14em]">
            <MapPin className="w-3 h-3" />
            Proudly Serving Gurnee, IL & Lake County
          </p>
        </div>
      </section>

      {/* ── FOOTER (dark) ── */}
      <footer className="bg-[#0c0c0c] border-t border-[#c41017]/20 py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3
                className="text-white text-lg font-semibold mb-4"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Roberts Roofing
              </h3>
              <p className="text-[13px] leading-[1.7] text-white/40">
                Premium roofing for homeowners in Gurnee and Lake County. Licensed, insured, and proudly local.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/30 mb-4">Navigation</p>
              <div className="space-y-2.5">
                {["About", "Services", "Gallery", "Reviews", "Contact"].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="block text-[13px] text-white/50 hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/30 mb-4">Contact</p>
              <div className="space-y-2.5 text-[13px] text-white/50">
                <a href={PHONE_HREF} className="block text-white font-medium hover:text-[#c41017] transition-colors">{PHONE}</a>
                <p>Gurnee, IL</p>
              </div>
            </div>

            {/* Service area */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/30 mb-4">Service Area</p>
              <p className="text-[13px] text-white/50 leading-[1.7]">
                Gurnee · Lake Forest · Libertyville · Vernon Hills · Wadsworth · Waukegan · Mundelein · Lindenhurst
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[12px] text-white/25">
              © {new Date().getFullYear()} Roberts Roofing. All rights reserved.
            </div>
            <div className="text-[11px] text-white/25 uppercase tracking-[0.14em]">
              Site by <span className="text-[#c41017]">Capstone Studios</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ── MOBILE STICKY CTA ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-[#0c0c0c]/95 backdrop-blur-xl border-t border-white/5">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 h-12 rounded-full bg-[#c41017] text-[15px] font-bold text-white shadow-lg"
        >
          <Phone className="w-4 h-4" />
          Call {PHONE}
        </a>
      </div>
    </div>
  );
}

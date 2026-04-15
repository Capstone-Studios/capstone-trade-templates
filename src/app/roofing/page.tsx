import {
  Phone,
  Star,
  ArrowRight,
  Shield,
  Clock,
  Award,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Quote,
  Zap,
  Umbrella,
  FileCheck,
  Mail,
  Wrench,
  PaintBucket,
  Droplets,
  Fence,
  CloudLightning,
  Search,
  Snowflake,
  Home,
} from "lucide-react";

export const metadata = {
  title: "Robert's Exterior Services LLC | Roofing, Siding & Storm Damage Repair",
  description:
    "Professional roofing, siding, gutters & more serving McHenry County since 1989. Licensed Illinois Public Adjusters. Free inspections. (815) 653-7663.",
};

/* ── Data — exact Roberts site content ── */

const PHONE = "(815) 653-7663";
const PHONE_HREF = "tel:8156537663";
const EMAIL = "robertsexteriorservicesllc@gmail.com";
const ADDRESS = "7207 Delaware Rd, Wonder Lake, IL 60097";
const HOURS = "Mon–Fri 7am–6pm | Sat 8am–4pm";
const LICENSE = "Licensed IL Roofing Contractor #104.015895";

const STATS = [
  { value: "35+", sublabel: "Years", label: "Industry Experience" },
  { value: "500+", sublabel: "Projects", label: "Projects Completed" },
  { value: "4.6★", sublabel: "Rating", label: "Average Rating" },
];

const TRUST_BAR = [
  { icon: Shield, title: "Licensed & Insured", desc: "Illinois roofing & siding licenses" },
  { icon: Clock, title: "Same-Day Estimates", desc: "Free inspections & quotes" },
  { icon: Zap, title: "Emergency Services", desc: "Storm damage & urgent repairs" },
  { icon: FileCheck, title: "Insurance Specialists", desc: "Public adjuster certified" },
];

const ABOUT_CHECKLIST = [
  "Fully licensed & insured contractors",
  "Free estimates & inspections",
  "Certified public adjusters",
  "24/7 emergency response",
  "Warranty on all work",
  "Local family-owned business",
];

const SERVICES = [
  { title: "Roofing", desc: "Repairs, replacement & maintenance", icon: Home },
  { title: "Siding", desc: "Vinyl, fiber cement & composite options", icon: PaintBucket },
  { title: "Gutters & Downspouts", desc: "Installation, repair & cleaning", icon: Droplets },
  { title: "Soffit & Fascia", desc: "Protection & aesthetic upgrades", icon: Wrench },
  { title: "Decks", desc: "Design, build & restoration", icon: Fence },
  { title: "Storm Damage", desc: "Emergency response & repairs", icon: CloudLightning },
  { title: "Inspections", desc: "Comprehensive roof assessments", icon: Search },
  { title: "Snow Removal", desc: "Safe seasonal clearance", icon: Snowflake },
];

const GALLERY = [
  "https://robertsexteriorservices.com/images/hero.jpg",
  "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=600&q=80&auto=format",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80&auto=format",
];

const REVIEWS = [
  {
    name: "Sarah M.",
    stars: 5,
    text: "Outstanding service from start to finish. The team was professional, clean, and finished ahead of schedule.",
  },
  {
    name: "Mike T.",
    stars: 5,
    text: "Called them on a Sunday during a rainstorm. They had a tarp up within two hours and the repair done by Tuesday. Honest pricing, no upsell.",
  },
  {
    name: "Jennifer L.",
    stars: 5,
    text: "We interviewed five companies before choosing Roberts. The owner walked us through every material option and the crew finished on schedule.",
  },
];

const SERVICE_AREAS = [
  "Wonder Lake", "Crystal Lake", "Woodstock", "McHenry",
  "Algonquin", "Lakemoor", "Johnsburg",
];

/* ══════════════════════════════════════════════════════════ */

export default function RoofingPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#181818]" style={{ fontFamily: "var(--font-barlow), var(--font-body), system-ui, sans-serif" }}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#0c0c0c]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="text-white text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
            Robert&apos;s Exterior Services
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
            Request Estimate
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.62) 55%, rgba(10,10,10,0.88) 100%), url(https://robertsexteriorservices.com/images/hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-32 w-full">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="fade-up inline-flex items-center gap-2 mb-8">
              <span className="w-8 h-[2px] bg-[#c41017]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c41017]">
                Trusted Local Contractor
              </span>
            </div>

            <h1
              className="fade-up-1 text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.02em] leading-[0.95] text-white"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Quality Roofing &amp; Exterior Work You Can{" "}
              <span className="italic text-[#c41017]">Count On</span>
            </h1>

            <p className="fade-up-2 mt-6 text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.7] text-white/60 max-w-lg">
              Professional roofing, siding, gutters &amp; more serving McHenry County since 1989
            </p>

            <p className="fade-up-2 mt-3 text-[13px] text-white/35 italic">
              Est. 1989 | Licensed Illinois Public Adjusters
            </p>

            {/* CTAs */}
            <div className="fade-up-3 mt-10 flex flex-wrap gap-4">
              <a
                href={PHONE_HREF}
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#c41017] text-white font-semibold text-[15px] hover:bg-[#a80d14] transition-all hover:shadow-2xl hover:shadow-red-900/30"
              >
                Get Free Inspection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium text-[15px] hover:bg-white/10 transition-all"
              >
                Schedule Consultation
              </a>
            </div>

            {/* Stats */}
            <div className="fade-up-4 mt-14 flex gap-10">
              {STATS.map((s) => (
                <div key={s.sublabel}>
                  <div className="text-[32px] font-bold text-white tracking-tight leading-none">{s.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-white/35">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[#0c0c0c] border-y border-[#c41017]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_BAR.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-[#c41017] shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <div className="text-[13px] font-semibold text-white/80">{item.title}</div>
                    <div className="text-[11px] text-white/35 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 md:py-36 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Image */}
            <div className="md:col-span-5 relative">
              <div
                className="reveal-rise rounded-2xl aspect-[4/5] shadow-2xl"
                style={{
                  backgroundImage: "url(https://robertsexteriorservices.com/images/hero.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center 30%",
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-[#c41017] text-white rounded-2xl p-5 shadow-xl">
                <div className="text-[28px] font-bold leading-none">35+</div>
                <div className="text-[11px] uppercase tracking-[0.12em] mt-1 text-white/70">Years Experience</div>
              </div>
            </div>

            {/* Copy */}
            <div className="md:col-span-7 reveal">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[#c41017]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c41017]">Our Story</span>
              </div>
              <h2
                className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.02em] leading-[1.08]"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Experience You Can Trust, Quality You Can{" "}
                <span className="italic text-[#c41017]">See</span>
              </h2>
              <p className="mt-8 text-[17px] leading-[1.8] text-[#181818]/65">
                For over three decades, Robert&apos;s Exterior Services has been the trusted choice for homeowners and businesses throughout McHenry County. Our team combines expert craftsmanship with genuine care for every project.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ABOUT_CHECKLIST.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[14px] font-medium text-[#181818]">
                    <CheckCircle2 className="w-5 h-5 text-[#c41017] shrink-0" strokeWidth={2} />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-[#c41017]/8 border border-[#c41017]/15">
                <p className="text-[13px] text-[#c41017] font-medium flex items-center gap-2">
                  <FileCheck className="w-4 h-4 shrink-0" />
                  Insurance claim specialists on staff to maximize your settlement
                </p>
              </div>

              <a
                href={PHONE_HREF}
                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#c41017] text-white font-semibold text-[14px] hover:bg-[#a80d14] transition-colors"
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
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c41017]">What We Offer</span>
              <span className="w-8 h-[2px] bg-[#c41017]" />
            </div>
            <h2
              className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Our <span className="italic text-[#c41017]">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <a
                  key={i}
                  href={PHONE_HREF}
                  className="reveal-rise group bg-white rounded-2xl p-6 border border-[#181818]/8 hover:border-[#c41017]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#c41017]/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c41017] transition-colors">
                    <Icon className="w-6 h-6 text-[#c41017] group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[16px] font-bold tracking-[-0.01em] mb-2">{svc.title}</h3>
                  <p className="text-[12px] leading-[1.6] text-[#181818]/50">{svc.desc}</p>
                </a>
              );
            })}
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
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              className="reveal-rise rounded-2xl col-span-1 row-span-2 min-h-[400px] overflow-hidden"
              style={{
                backgroundImage: `url(${GALLERY[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {GALLERY.slice(1).map((img, i) => (
              <div
                key={i}
                className="reveal-rise rounded-2xl aspect-square overflow-hidden"
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
              What Our Customers <span className="italic text-[#c41017]">Say</span>
            </h2>
            <p className="mt-3 text-[14px] text-[#181818]/40">4.6 out of 5 stars · 10+ verified reviews</p>
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
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://robertsexteriorservices.com/images/hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/88" />

        <div className="relative max-w-4xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left — CTA copy */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-[2px] bg-[#c41017]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c41017]">Get In Touch</span>
              </div>
              <h2
                className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold tracking-[-0.02em] leading-[1.05] text-white"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Get Your Free Estimate{" "}
                <span className="italic text-[#c41017]">Today</span>
              </h2>
              <p className="mt-6 text-[16px] leading-[1.7] text-white/50">
                Contact us for a no-obligation inspection and quote. Available for same-day estimates on most projects.
              </p>

              <div className="mt-8 space-y-4">
                <a href={PHONE_HREF} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#c41017]" />
                  <span className="text-[14px]">{PHONE}</span>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[#c41017]" />
                  <span className="text-[14px] break-all">{EMAIL}</span>
                </a>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin className="w-4 h-4 text-[#c41017] shrink-0" />
                  <span className="text-[14px]">{ADDRESS}</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Clock className="w-4 h-4 text-[#c41017] shrink-0" />
                  <span className="text-[14px]">{HOURS}</span>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/25 mb-2">Service Areas</p>
                <p className="text-[13px] text-white/45">{SERVICE_AREAS.join(" · ")}</p>
              </div>
            </div>

            {/* Right — CTA button */}
            <div className="text-center md:text-left">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-3 h-16 px-10 rounded-full bg-[#c41017] text-[17px] font-bold text-white hover:bg-[#a80d14] transition-all hover:shadow-2xl hover:shadow-red-900/30"
              >
                <Phone className="w-5 h-5" />
                Call {PHONE}
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="mt-6 text-[12px] text-white/30">
                Same-day estimates available · No obligation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0c0c0c] border-t border-[#c41017]/20 py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12">
            <div>
              <h3
                className="text-white text-lg font-semibold mb-2"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Robert&apos;s Exterior Services LLC
              </h3>
              <p className="text-[12px] text-white/30 italic mb-4">Est. 1989</p>
              <p className="text-[13px] leading-[1.7] text-white/40">
                Professional roofing, siding, and exterior services serving McHenry County for over 35 years.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/30 mb-4">Navigation</p>
              <div className="space-y-2.5">
                {["Home", "About", "Services", "Gallery", "Reviews", "Contact"].map((link) => (
                  <a key={link} href={link === "Home" ? "#" : `#${link.toLowerCase()}`} className="block text-[13px] text-white/50 hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/30 mb-4">Contact</p>
              <div className="space-y-2.5 text-[13px] text-white/50">
                <a href={PHONE_HREF} className="block text-white font-medium hover:text-[#c41017] transition-colors">{PHONE}</a>
                <a href={`mailto:${EMAIL}`} className="block hover:text-white transition-colors break-all">{EMAIL}</a>
                <p>{ADDRESS}</p>
                <p className="text-white/35">{HOURS}</p>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/30 mb-4">Service Areas</p>
              <p className="text-[13px] text-white/50 leading-[1.7]">
                {SERVICE_AREAS.join(" · ")}
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[12px] text-white/25">
              © {new Date().getFullYear()} Robert&apos;s Exterior Services LLC · All rights reserved
            </div>
            <div className="text-[11px] text-white/20 font-mono">
              {LICENSE}
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

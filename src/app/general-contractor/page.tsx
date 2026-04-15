import {
  Phone,
  Star,
  MapPin,
  Mail,
  ChevronRight,
  ArrowRight,
  Menu,
  Clock,
  CheckCircle2,
  Shield,
  Award,
  Users,
  Home,
  Ruler,
  Hammer,
  PaintBucket,
  TreePine,
  ArrowDown,
  Quote,
  Calendar,
  Eye,
  Palette,
  ClipboardCheck,
  HardHat,
  Handshake,
  X,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keystone Design + Build | Premium Remodeling Hinsdale, IL",
  description:
    "Hinsdale's premier design-build remodeling firm. Fixed-price contracts, in-house designer + PM, 22 years experience. Kitchen, bathroom, whole-home renovations. (630) 555-0789.",
};

const PHONE = "(630) 555-0789";
const PHONE_TEL = "tel:6305550789";

const NAV_LINKS = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "340+", label: "Projects" },
  { value: "22", label: "Years" },
  { value: "98%", label: "Satisfaction" },
  { value: "NARI", label: "Certified" },
];

const CERTS = [
  "NARI Certified Remodeler",
  "GuildQuality Member",
  "Houzz Best of Design",
  "Licensed GC #104-567890",
  "Bonded & Insured",
];

const PORTFOLIO = [
  {
    title: "The Harrison Kitchen",
    location: "Highland Park",
    category: "Kitchen",
    budget: "$85k – $120k",
    label: "Harrison kitchen remodel · 800×600",
  },
  {
    title: "The Chen Primary Bath",
    location: "Hinsdale",
    category: "Bathroom",
    budget: "$55k – $80k",
    label: "Chen primary bath · 800×600",
  },
  {
    title: "The Mueller Whole-Home",
    location: "Western Springs",
    category: "Whole-Home",
    budget: "$280k – $350k",
    label: "Mueller whole-home · 800×600",
  },
  {
    title: "The Park Addition",
    location: "Clarendon Hills",
    category: "Addition",
    budget: "$120k – $180k",
    label: "Park addition · 800×600",
  },
];

const SERVICES = [
  {
    title: "Kitchen Remodels",
    budget: "$60k – $250k",
    desc: "Full gut renovations to cosmetic refreshes. Custom cabinetry, stone countertops, professional-grade appliance integration.",
    label: "Kitchen remodel · 800×600",
  },
  {
    title: "Bathroom Remodels",
    budget: "$35k – $120k",
    desc: "Primary suites, guest baths, powder rooms. Heated floors, frameless glass, custom tile work.",
    label: "Bathroom remodel · 800×600",
  },
  {
    title: "Whole-Home Renovations",
    budget: "$150k – $500k",
    desc: "Comprehensive transformations that reimagine your entire living space. Open concepts, structural modifications, systems upgrades.",
    label: "Whole-home renovation · 800×600",
  },
  {
    title: "Room Additions",
    budget: "$80k – $200k",
    desc: "Expand your footprint with seamless additions that look like they were always part of the original home.",
    label: "Room addition · 800×600",
  },
  {
    title: "Basement Finishing",
    budget: "$45k – $120k",
    desc: "Transform unused square footage into entertainment spaces, home offices, guest suites, or home gyms.",
    label: "Basement finishing · 800×600",
  },
  {
    title: "Outdoor Living",
    budget: "$40k – $150k",
    desc: "Covered patios, outdoor kitchens, three-season rooms. Extend your living space beyond four walls.",
    label: "Outdoor living · 800×600",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery Meeting",
    desc: "We tour your home, discuss your vision, and understand how you live. This is where great projects begin.",
  },
  {
    num: "02",
    title: "Schematic Design",
    desc: "Our in-house designer creates floor plans, 3D renderings, and a preliminary budget so you can see it before we build it.",
  },
  {
    num: "03",
    title: "Material Selections",
    desc: "Visit our showroom to touch and compare finishes. We guide every selection so nothing is left to chance.",
  },
  {
    num: "04",
    title: "Build Phase",
    desc: "Your dedicated project manager and superintendent keep everything on track. Weekly updates, clean site, no surprises.",
  },
  {
    num: "05",
    title: "Final Walkthrough",
    desc: "We walk every inch together. Nothing is complete until you are completely satisfied with the result.",
  },
];

const TEAM = [
  {
    name: "Sarah Chen",
    title: "Lead Designer",
    years: 14,
    ask: "Ask me about: kitchen layouts",
    label: "Sarah Chen portrait · 400×500",
  },
  {
    name: "Mike Torres",
    title: "Project Manager",
    years: 11,
    ask: "Ask me about: timelines & budgets",
    label: "Mike Torres portrait · 400×500",
  },
  {
    name: "Dave Wilson",
    title: "Superintendent",
    years: 18,
    ask: "Ask me about: structural work",
    label: "Dave Wilson portrait · 400×500",
  },
  {
    name: "Lisa Park",
    title: "Client Relations",
    years: 8,
    ask: "Ask me about: getting started",
    label: "Lisa Park portrait · 400×500",
  },
];

const REVIEWS = [
  {
    name: "Michael & Sarah T.",
    stars: 5,
    text: "Keystone transformed our 1960s kitchen into a modern masterpiece. The fixed-price contract meant zero surprises — exactly what they quoted is exactly what we paid.",
  },
  {
    name: "The Johnsons",
    stars: 5,
    text: "Our whole-home renovation took 14 weeks — exactly what they said. Weekly updates, clean site, and the result exceeded our dreams.",
  },
  {
    name: "Elizabeth R.",
    stars: 5,
    text: "Sarah's design eye is incredible. She saw possibilities in our bathroom we never imagined. The heated floors were her idea.",
  },
  {
    name: "David & Anne P.",
    stars: 5,
    text: "We toured their showroom, met the team, and knew immediately. Three other contractors gave us vague quotes — Keystone gave us a fixed number and stuck to it.",
  },
];

/* ─── CSS variable overrides for this page ─── */
const ROOT_STYLE = {
  "--bg-base": "#FAF7F2",
  "--bg-surface": "#FFFFFF",
  "--bg-elevated": "#F2EDE5",
  "--bg-contrast": "#1A1814",
  "--brand-primary": "#1A1814",
  "--brand-accent": "#8B6F3E",
  "--brand-soft": "rgba(139,111,62,0.08)",
  "--text-primary": "#1A1814",
  "--text-secondary": "rgba(26,24,20,0.68)",
  "--text-muted": "rgba(26,24,20,0.42)",
  "--text-inverse": "#FAF7F2",
  "--border-subtle": "rgba(26,24,20,0.08)",
  "--border-medium": "rgba(26,24,20,0.14)",
  "--border-strong": "rgba(26,24,20,0.22)",
} as React.CSSProperties;

export default function GeneralContractorPage() {
  return (
    <div style={ROOT_STYLE} className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] font-sans">

      {/* ═══════════════════════ NAV ═══════════════════════ */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[var(--bg-base)]/90 border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#8B6F3E] rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold tracking-wider">K</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Keystone</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium tracking-wide uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="#consultation"
              className="hidden sm:inline-flex items-center gap-2 bg-[#8B6F3E] text-white text-[13px] font-semibold tracking-wide uppercase px-5 py-2.5 rounded-sm hover:bg-[#7A6236] transition-colors"
            >
              Start Your Project
            </Link>
            <button className="md:hidden w-10 h-10 flex items-center justify-center" aria-label="Menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="pt-16">
        {/* Hero image slot */}
        <div className="photo-slot aspect-[21/9] w-full" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="fade-up-1 text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8B6F3E] mb-5">
              Design + Build Remodeling
            </p>
            <h1 className="fade-up-2 text-5xl sm:text-6xl md:text-7xl font-light leading-[1.05] tracking-tight mb-6">
              Your Home,
              <br />
              <span className="italic text-[var(--text-muted)]">Reimagined.</span>
            </h1>
            <p className="fade-up-3 text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl mb-10">
              Fixed-price contracts. In-house designer and project manager. 22 years of transforming homes across Chicago&rsquo;s western suburbs.
            </p>
            <div className="fade-up-4 flex flex-wrap items-center gap-4">
              <Link
                href="#consultation"
                className="inline-flex items-center gap-2 bg-[#8B6F3E] text-white text-[13px] font-semibold tracking-wide uppercase px-7 py-3.5 rounded-sm hover:bg-[#7A6236] transition-colors"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 border border-[var(--border-strong)] text-[var(--text-primary)] text-[13px] font-semibold tracking-wide uppercase px-7 py-3.5 rounded-sm hover:bg-[var(--brand-soft)] transition-colors"
              >
                See Our Portfolio
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-[var(--border-subtle)]">
            {STATS.map((s) => (
              <div key={s.label} className="reveal">
                <p className="text-3xl md:text-4xl font-light tracking-tight text-[#8B6F3E]">{s.value}</p>
                <p className="text-[13px] font-medium tracking-wide uppercase text-[var(--text-muted)] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CERTS STRIP ═══════════════════════ */}
      <section className="border-y border-[var(--border-subtle)] bg-[var(--brand-soft)]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {CERTS.map((c, i) => (
            <span key={c} className="flex items-center gap-x-8">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)] whitespace-nowrap">
                {c}
              </span>
              {i < CERTS.length - 1 && (
                <span className="text-[var(--text-muted)]">&middot;</span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ PORTFOLIO ═══════════════════════ */}
      <section id="portfolio" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="reveal text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8B6F3E] mb-4">Portfolio</p>
          <h2 className="reveal text-4xl md:text-5xl font-light tracking-tight mb-16">
            Recent transformations.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {PORTFOLIO.map((p) => (
              <div
                key={p.title}
                className="reveal-rise group cursor-pointer rounded-sm overflow-hidden border border-[var(--border-subtle)] hover:shadow-xl hover:shadow-[rgba(139,111,62,0.08)] transition-all duration-500"
              >
                <div className="photo-slot aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-700" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-[var(--brand-soft)] text-[#8B6F3E] px-3 py-1 rounded-full">
                      {p.category}
                    </span>
                    <span className="text-[12px] text-[var(--text-muted)]">{p.location}</span>
                  </div>
                  <h3 className="text-xl font-medium tracking-tight mb-1">{p.title}</h3>
                  <p className="text-[13px] text-[var(--text-secondary)]">{p.budget}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ BEFORE / DURING / AFTER ═══════════════════════ */}
      <section className="py-24 md:py-32 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="reveal text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8B6F3E] mb-4">Transformation</p>
          <h2 className="reveal text-4xl md:text-5xl font-light tracking-tight mb-16">
            The transformation
            <br />
            <span className="italic text-[var(--text-muted)]">in three acts.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Before */}
            <div className="reveal-rise">
              <div className="photo-slot aspect-[4/3] rounded-sm" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />
              <p className="text-center text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mt-4">Before</p>
            </div>

            {/* During */}
            <div className="reveal-rise relative">
              {/* Arrows on desktop */}
              <div className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 -translate-x-full">
                <ArrowRight className="w-5 h-5 text-[#8B6F3E]" />
              </div>
              <div className="photo-slot aspect-[4/3] rounded-sm" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />
              <p className="text-center text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mt-4">During Construction</p>
              <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 translate-x-full">
                <ArrowRight className="w-5 h-5 text-[#8B6F3E]" />
              </div>
            </div>

            {/* After */}
            <div className="reveal-rise">
              <div className="photo-slot aspect-[4/3] rounded-sm" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />
              <p className="text-center text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mt-4">After</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SERVICES ═══════════════════════ */}
      <section id="services" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="reveal text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8B6F3E] mb-4">Services</p>
          <h2 className="reveal text-4xl md:text-5xl font-light tracking-tight mb-16">
            What we build.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="reveal-rise group rounded-sm overflow-hidden border border-[var(--border-subtle)] hover:border-[var(--border-medium)] transition-all"
              >
                <div className="photo-slot aspect-[4/3]" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />
                <div className="p-6">
                  <h3 className="text-lg font-medium tracking-tight mb-1">{s.title}</h3>
                  <p className="text-[13px] font-semibold text-[#8B6F3E] mb-3">{s.budget}</p>
                  <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PROCESS ═══════════════════════ */}
      <section id="process" className="py-24 md:py-32 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="reveal text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8B6F3E] mb-4">Process</p>
          <h2 className="reveal text-4xl md:text-5xl font-light tracking-tight mb-16">
            How we work.
          </h2>

          <div className="grid md:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((s) => (
              <div key={s.num} className="reveal-rise">
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#8B6F3E] mb-3">
                  Step {s.num}
                </p>
                <h3 className="text-lg font-medium tracking-tight mb-2">{s.title}</h3>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TEAM ═══════════════════════ */}
      <section id="team" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="reveal text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8B6F3E] mb-4">Team</p>
          <h2 className="reveal text-4xl md:text-5xl font-light tracking-tight mb-16">
            The people behind
            <br />
            <span className="italic text-[var(--text-muted)]">your project.</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((t) => (
              <div key={t.name} className="reveal-rise group">
                <div className="photo-slot aspect-[4/5] rounded-sm mb-5" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />
                <h3 className="text-lg font-medium tracking-tight">{t.name}</h3>
                <p className="text-[13px] text-[#8B6F3E] font-medium">{t.title}</p>
                <p className="text-[12px] text-[var(--text-muted)] mt-1">{t.years} years experience</p>
                <p className="text-[12px] text-[var(--text-secondary)] italic mt-2">{t.ask}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FIXED-PRICE PROMISE ═══════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal-rise bg-[#1A1814] rounded-sm p-12 md:p-16 text-center">
            <Shield className="w-10 h-10 text-[#8B6F3E] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#FAF7F2] mb-6">
              Our Price Is Our Price.
            </h2>
            <p className="text-[16px] md:text-[18px] text-[rgba(250,247,242,0.72)] leading-relaxed max-w-2xl mx-auto">
              Fixed-price contract. No change orders unless you change the scope. Weekly progress updates. One point of contact from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ ABOUT ═══════════════════════ */}
      <section className="py-24 md:py-32 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="reveal-rise photo-slot aspect-[4/3] rounded-sm" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />

            <div className="reveal">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8B6F3E] mb-4">About</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                On time. On budget.
                <br />
                <span className="italic text-[var(--text-muted)]">On point.</span>
              </h2>
              <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mb-6">
                Keystone Design + Build is a full-service design-build remodeling firm based in Hinsdale, Illinois. Everything is in-house — your designer, your project manager, your carpenters. One company. One contract. One point of accountability.
              </p>
              <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mb-8">
                Visit our 3,200 sq ft showroom to see materials, meet the team, and get inspired. We take on 24 projects per year — by design. Every client gets our full attention.
              </p>

              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Star className="w-4 h-4 text-[#CA8A04] fill-[#CA8A04]" />
                    <span className="text-2xl font-light">4.9</span>
                  </div>
                  <p className="text-[12px] text-[var(--text-muted)] tracking-wide uppercase">Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-light">78</p>
                  <p className="text-[12px] text-[var(--text-muted)] tracking-wide uppercase">Reviews</p>
                </div>
                <div>
                  <p className="text-2xl font-light">340</p>
                  <p className="text-[12px] text-[var(--text-muted)] tracking-wide uppercase">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ REVIEWS ═══════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="reveal text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8B6F3E] mb-4">Reviews</p>
          <h2 className="reveal text-4xl md:text-5xl font-light tracking-tight mb-16">
            What clients say.
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="reveal-rise border border-[var(--border-subtle)] rounded-sm p-8"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#CA8A04] fill-[#CA8A04]" />
                  ))}
                </div>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mb-6 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="text-[13px] font-semibold">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CONSULTATION CTA ═══════════════════════ */}
      <section id="consultation" className="py-24 md:py-32 bg-[var(--bg-elevated)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="reveal-rise">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8B6F3E] mb-4">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3">
              $250 Design Consultation
            </h2>
            <p className="text-lg text-[#8B6F3E] font-medium mb-8">
              Credited to Your Project
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {[
                { icon: Eye, label: "Site Visit" },
                { icon: Palette, label: "Concept Sketches" },
                { icon: ClipboardCheck, label: "Preliminary Budget" },
                { icon: Calendar, label: "Timeline Estimate" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2 py-4 px-3 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
                  <item.icon className="w-5 h-5 text-[#8B6F3E]" />
                  <span className="text-[13px] font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <p className="text-[14px] text-[var(--text-muted)] italic mb-8">
              Serious projects only — we take on 24 per year.
            </p>

            <Link
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 bg-[#8B6F3E] text-white text-[13px] font-semibold tracking-wide uppercase px-8 py-4 rounded-sm hover:bg-[#7A6236] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Schedule Your Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CONTACT ═══════════════════════ */}
      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="reveal">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8B6F3E] mb-4">Contact</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-10">
                Visit our showroom.
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#8B6F3E] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">789 Hinsdale Ave</p>
                    <p className="text-[14px] text-[var(--text-secondary)]">Hinsdale, IL 60521</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#8B6F3E] mt-0.5 shrink-0" />
                  <div>
                    <Link href={PHONE_TEL} className="font-medium hover:text-[#8B6F3E] transition-colors">{PHONE}</Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#8B6F3E] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Mon – Fri: 8am – 5pm</p>
                    <p className="text-[14px] text-[var(--text-secondary)]">Showroom by appointment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-5 h-5 text-[#8B6F3E] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[14px] text-[var(--text-secondary)]">Consultation fee: $250 (credited to project)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map slot */}
            <div className="reveal-rise photo-slot aspect-[4/3] rounded-sm" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════ DREAMING CTA ═══════════════════════ */}
      <section className="py-24 md:py-32 bg-[var(--brand-soft)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Dreaming of
              <br />
              <span className="italic text-[var(--text-muted)]">a better home?</span>
            </h2>
            <p className="text-[15px] text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
              Let&rsquo;s talk about what&rsquo;s possible. Book your design consultation today.
            </p>
            <Link
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 bg-[#8B6F3E] text-white text-[13px] font-semibold tracking-wide uppercase px-8 py-4 rounded-sm hover:bg-[#7A6236] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {PHONE}
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FOOTER ═══════════════════════ */}
      <footer className="bg-[#1A1814] text-[rgba(250,247,242,0.72)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-[#8B6F3E] rounded-sm flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold tracking-wider">K</span>
                </div>
                <span className="text-[#FAF7F2] text-lg font-semibold tracking-tight">Keystone</span>
              </div>
              <p className="text-[13px] leading-relaxed">
                Design + Build Remodeling
                <br />
                Hinsdale, Illinois
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[rgba(250,247,242,0.42)] mb-4">Navigation</p>
              <div className="space-y-2">
                {NAV_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} className="block text-[14px] hover:text-[#FAF7F2] transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[rgba(250,247,242,0.42)] mb-4">Contact</p>
              <div className="space-y-2 text-[14px]">
                <p>789 Hinsdale Ave</p>
                <p>Hinsdale, IL 60521</p>
                <Link href={PHONE_TEL} className="block hover:text-[#FAF7F2] transition-colors">{PHONE}</Link>
              </div>
            </div>

            {/* Credentials */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[rgba(250,247,242,0.42)] mb-4">Credentials</p>
              <div className="space-y-2 text-[13px]">
                <p>GC License #104-567890</p>
                <p>NARI Certified Remodeler</p>
                <p>Bonded & Insured</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[rgba(250,247,242,0.1)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[12px] text-[rgba(250,247,242,0.42)]">
              &copy; {new Date().getFullYear()} Keystone Design + Build. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-[#CA8A04] fill-[#CA8A04]" />
              <span className="text-[12px]">4.9 &middot; 78 reviews</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══════════════════════ MOBILE STICKY ═══════════════════════ */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-[#1A1814] border-t border-[rgba(250,247,242,0.1)] safe-area-bottom">
        <div className="flex items-stretch">
          <Link
            href={PHONE_TEL}
            className="flex-1 flex items-center justify-center gap-2 py-4 text-[#FAF7F2] text-[13px] font-semibold tracking-wide uppercase"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </Link>
          <div className="w-px bg-[rgba(250,247,242,0.1)]" />
          <Link
            href="#consultation"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#8B6F3E] text-white text-[13px] font-semibold tracking-wide uppercase"
          >
            <Calendar className="w-4 h-4" />
            Book Consult
          </Link>
        </div>
      </div>
    </div>
  );
}

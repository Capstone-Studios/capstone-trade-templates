import {
  Phone,
  Star,
  Shield,
  Award,
  Clock,
  Hammer,
  ChevronRight,
  MapPin,
  Mail,
  CreditCard,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Roberts Roofing | Premium Roofing in Gurnee, IL",
  description:
    "GAF Master Elite certified roofers serving Gurnee & Lake County since 2003. Lifetime warranties, free drone inspections, and 24hr storm response.",
};

/* ── Reviews ── */
const REVIEWS = [
  {
    name: "Sarah M.",
    stars: 5,
    text: "After a hailstorm totaled our roof, Roberts handled everything \u2014 met the insurance adjuster, documented every panel, and replaced the whole thing in two days.",
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
  {
    name: "David R.",
    stars: 5,
    text: "Best roofing company in Lake County. Fair prices, quality materials, and they stand behind every nail.",
  },
];

/* ── Services ── */
const SERVICES = [
  {
    num: "01",
    title: "Roof Replacement",
    desc: "Full tear-off and install with GAF architectural shingles. Lifetime manufacturer warranty backed by our 25-year workmanship guarantee.",
    label: "Roof replacement · 1600\u00d71000",
  },
  {
    num: "02",
    title: "Storm Damage Repair",
    desc: "24-hour emergency tarping and full insurance claim walkthrough. We document, file, and rebuild so you don\u2019t have to.",
    label: "Storm damage repair · 1600\u00d71000",
  },
  {
    num: "03",
    title: "Roof Repair",
    desc: "Same-day leak repair and maintenance with a 2-year labor warranty. No patch is too small when it protects your home.",
    label: "Roof repair · 1600\u00d71000",
  },
  {
    num: "04",
    title: "Gutter Systems",
    desc: "Seamless aluminum gutters with integrated leaf guard systems. Custom-fabricated on-site for a perfect fit every time.",
    label: "Gutter install · 1600\u00d71000",
  },
  {
    num: "05",
    title: "Free Inspections",
    desc: "27-point drone-assisted photo report delivered same day. Know exactly what\u2019s up there before you spend a dollar.",
    label: "Drone inspection · 1600\u00d71000",
  },
  {
    num: "06",
    title: "Flat & Low-Slope",
    desc: "TPO, EPDM, and modified bitumen systems for commercial and residential flat roofs. Fully warranted.",
    label: "Flat roof install · 1600\u00d71000",
  },
];

/* ── Warranty Tiers ── */
const WARRANTIES = [
  {
    tier: "Standard",
    material: "25-year",
    workmanship: "5-year",
    transferable: false,
    mfgBacked: false,
    popular: false,
  },
  {
    tier: "System Plus",
    material: "50-year",
    workmanship: "10-year",
    transferable: true,
    mfgBacked: false,
    popular: true,
  },
  {
    tier: "Golden Pledge",
    material: "Lifetime",
    workmanship: "25-year",
    transferable: true,
    mfgBacked: true,
    popular: false,
  },
];

/* ── Process Steps ── */
const STEPS = [
  {
    num: "01",
    title: "Free Inspection",
    desc: "We send a certified inspector with a drone to document every square foot of your roof \u2014 no ladders, no guesswork.",
  },
  {
    num: "02",
    title: "Transparent Quote",
    desc: "Line-item pricing with material options, warranty tiers, and financing laid out clearly. No hidden fees, ever.",
  },
  {
    num: "03",
    title: "Expert Install",
    desc: "GAF-certified crews with 10+ years average experience. We protect your landscaping, clean daily, and finish on schedule.",
  },
  {
    num: "04",
    title: "Lifetime Warranty",
    desc: "Your roof is backed by manufacturer and workmanship warranties. We\u2019re a phone call away for the life of your roof.",
  },
];

const SERVICE_AREAS = [
  "Gurnee",
  "Lake Forest",
  "Libertyville",
  "Vernon Hills",
  "Wadsworth",
  "Waukegan",
  "Mundelein",
  "Lindenhurst",
];

const CERTS = [
  "GAF Master Elite",
  "Owens Corning Preferred",
  "HAAG Certified",
  "A+ BBB Rated",
  "Licensed & Bonded",
];

/* ══════════════════════════════════════════════════════════ */

export default function RoofingPage() {
  return (
    <div
      style={
        {
          "--brand-primary": "#0B0F19",
          "--brand-accent": "#C8342B",
          "--brand-soft": "rgba(200,52,43,0.08)",
          "--bg-base": "#F7F4EC",
          "--bg-surface": "#FFFFFF",
          "--bg-elevated": "#F0EDE4",
          "--text-primary": "#0B0F19",
          "--text-secondary": "rgba(11,15,25,0.68)",
          "--text-muted": "rgba(11,15,25,0.42)",
          "--border-subtle": "rgba(11,15,25,0.08)",
          "--border-medium": "rgba(11,15,25,0.14)",
          "--border-strong": "rgba(11,15,25,0.22)",
        } as React.CSSProperties
      }
      className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]"
    >
      {/* ── 1. Fixed Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#F7F4EC]/78 border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-accent)]" />
            Roberts Roofing
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
            <a href="#services" className="link-underline hover:text-[var(--text-primary)] transition-colors">Services</a>
            <a href="#work" className="link-underline hover:text-[var(--text-primary)] transition-colors">Our Work</a>
            <a href="#about" className="link-underline hover:text-[var(--text-primary)] transition-colors">About</a>
            <a href="#reviews" className="link-underline hover:text-[var(--text-primary)] transition-colors">Reviews</a>
            <a href="#contact" className="link-underline hover:text-[var(--text-primary)] transition-colors">Contact</a>
          </div>
          <a
            href="tel:8475550199"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--brand-accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Phone className="w-3.5 h-3.5" />
            (847) 555-0199
          </a>
        </div>
      </nav>

      {/* ── 2. Hero ── */}
      <section className="min-h-[94vh] pt-28 pb-24 md:pt-36 md:pb-36 grain">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Left */}
            <div className="md:col-span-7 space-y-8">
              {/* Trust pill */}
              <div className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold">4.9</span>
                <span className="text-[var(--text-muted)]">&middot; 142 Google reviews</span>
              </div>

              <h1 className="fade-up-1 text-[clamp(2.8rem,6.5vw,5.2rem)] font-semibold tracking-[-0.035em] leading-[0.95]">
                Premium Roofing
                <br />
                in Gurnee
                <span className="block mt-2 italic font-normal text-[var(--text-muted)] text-[clamp(1.4rem,3vw,2.4rem)]">
                  built for every Illinois winter.
                </span>
              </h1>

              <p className="fade-up-2 text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.7] text-[var(--text-secondary)] max-w-lg">
                GAF-certified family roofers protecting Lake County homes since 2003.
                Lifetime warranties, transparent pricing, and crews that treat your
                property like their own.
              </p>

              {/* CTAs */}
              <div className="fade-up-3 flex flex-wrap gap-4">
                <a
                  href="tel:8475550199"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[var(--brand-accent)] text-white font-medium hover:opacity-90 transition-opacity"
                >
                  <Phone className="w-4 h-4" />
                  Free Drone Inspection
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--border-strong)] font-medium hover:bg-[var(--bg-surface)] transition-colors"
                >
                  See recent roofs
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Value Props */}
              <div className="fade-up-4 flex flex-wrap gap-x-6 gap-y-3 pt-4 text-sm text-[var(--text-secondary)]">
                {["Licensed & Bonded", "Lifetime Warranty", "GAF Master Elite", "Family Since 2003"].map((v) => (
                  <span key={v} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--brand-accent)]" />
                    {v}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Photo */}
            <div className="md:col-span-5 relative fade-up-2">
              <div
                className="photo-slot aspect-[4/5] rounded-2xl"
                data-label="Hero portrait · roofing crew · 800×1000"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-[var(--bg-surface)] rounded-2xl shadow-xl border border-[var(--border-subtle)] px-5 py-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[var(--brand-accent)] flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold leading-none">4.9</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">142 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Certifications Strip ── */}
      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium text-[var(--text-secondary)]">
            {CERTS.map((c, i) => (
              <span key={c} className="flex items-center gap-3">
                {c}
                {i < CERTS.length - 1 && (
                  <span className="hidden md:inline text-[var(--border-medium)]">&middot;</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Services Grid ── */}
      <section id="services" className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="eyebrow mb-4 reveal">What We Do</p>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.05] reveal">
            Roofing services built
            <br />
            <span className="italic font-normal text-[var(--text-muted)]">for Lake County homes.</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.num}
                className="reveal-rise group bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-[var(--border-strong)] transition-all duration-500"
              >
                <div
                  className="photo-slot aspect-[16/10]"
                  data-label={s.label}
                />
                <div className="p-7">
                  <p className="eyebrow mb-3">{s.num} / SERVICE</p>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm leading-[1.7] text-[var(--text-secondary)]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Warranty Comparison ── */}
      <section className="py-24 md:py-36 bg-[var(--bg-elevated)] grain">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4 reveal">Warranty Tiers</p>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.05] reveal">
              Protection that lasts
              <br />
              <span className="italic font-normal text-[var(--text-muted)]">as long as your roof.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WARRANTIES.map((w) => (
              <div
                key={w.tier}
                className={`reveal-rise relative rounded-2xl p-8 md:p-10 border transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  w.popular
                    ? "bg-[var(--brand-primary)] text-white border-transparent shadow-2xl scale-[1.02]"
                    : "bg-[var(--bg-surface)] border-[var(--border-subtle)]"
                }`}
              >
                {w.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--brand-accent)] text-white text-xs font-semibold tracking-wide uppercase">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-6">{w.tier}</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className={w.popular ? "text-white/70" : "text-[var(--text-muted)]"}>Material</span>
                    <span className="font-semibold">{w.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={w.popular ? "text-white/70" : "text-[var(--text-muted)]"}>Workmanship</span>
                    <span className="font-semibold">{w.workmanship}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={w.popular ? "text-white/70" : "text-[var(--text-muted)]"}>Transferable</span>
                    <span className="font-semibold">{w.transferable ? "Yes" : "\u2014"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={w.popular ? "text-white/70" : "text-[var(--text-muted)]"}>Manufacturer-backed</span>
                    <span className="font-semibold">{w.mfgBacked ? "Yes" : "\u2014"}</span>
                  </div>
                </div>
                <a
                  href="tel:8475550199"
                  className={`mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-90 ${
                    w.popular
                      ? "bg-[var(--brand-accent)] text-white"
                      : "bg-[var(--brand-primary)] text-white"
                  }`}
                >
                  Get a Quote
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Process Timeline ── */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4 reveal">Our Process</p>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.05] reveal">
              From inspection to warranty
              <br />
              <span className="italic font-normal text-[var(--text-muted)]">in four simple steps.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {STEPS.map((s, i) => (
              <div key={s.num} className="reveal-rise relative">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-[var(--border-medium)]" />
                )}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brand-accent)] text-white text-sm font-bold mb-5">
                    {s.num}
                  </div>
                  <p className="eyebrow mb-3">STEP {s.num}</p>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm leading-[1.7] text-[var(--text-secondary)]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Recent Work Gallery ── */}
      <section id="work" className="py-24 md:py-36 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="eyebrow mb-4 reveal">Recent Work</p>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.05] mb-16 reveal">
            Roofs we&apos;re proud of
            <span className="italic font-normal text-[var(--text-muted)]"> across Lake County.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[240px]">
            {/* First item spans 2 rows */}
            <div className="reveal-rise md:row-span-2">
              <div className="photo-slot w-full h-full rounded-2xl" data-label="Full replacement · Gurnee · 600\u00d7960" />
            </div>
            <div className="reveal-rise">
              <div className="photo-slot w-full h-full rounded-2xl" data-label="Cedar shake tear-off · 600\u00d7400" />
            </div>
            <div className="reveal-rise">
              <div className="photo-slot w-full h-full rounded-2xl" data-label="Storm damage repair · 600\u00d7400" />
            </div>
            <div className="reveal-rise">
              <div className="photo-slot w-full h-full rounded-2xl" data-label="Gutter install · 600\u00d7400" />
            </div>
            <div className="reveal-rise">
              <div className="photo-slot w-full h-full rounded-2xl" data-label="Flat roof TPO · 600\u00d7400" />
            </div>
            <div className="reveal-rise">
              <div className="photo-slot w-full h-full rounded-2xl" data-label="Drone inspection · 600\u00d7400" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Financing Callout ── */}
      <section className="py-24 md:py-36">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="reveal-rise rounded-3xl bg-[var(--brand-soft)] border border-[rgba(200,52,43,0.12)] p-10 md:p-14 text-center">
            <CreditCard className="w-10 h-10 text-[var(--brand-accent)] mx-auto mb-6" />
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-semibold tracking-[-0.02em] leading-[1.1] mb-4">
              0% financing on full replacements
            </h2>
            <p className="text-[var(--text-secondary)] max-w-lg mx-auto leading-[1.7] mb-6">
              12-month same-as-cash financing available on qualifying roof replacements.
              No money down, no prepayment penalties. Approval takes minutes.
            </p>
            <a
              href="tel:8475550199"
              className="inline-flex items-center gap-2 text-[var(--brand-accent)] font-semibold link-underline"
            >
              Ask about financing
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── 9. About Section ── */}
      <section id="about" className="py-24 md:py-36 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="reveal-rise">
              <div
                className="photo-slot aspect-[3/4] rounded-2xl"
                data-label="Owner portrait · Roberts family · 600\u00d7800"
              />
            </div>

            {/* Content */}
            <div className="reveal">
              <p className="eyebrow mb-4">About Roberts Roofing</p>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.05] mb-6">
                Local. Trusted.
                <br />
                <span className="italic font-normal text-[var(--text-muted)]">Built to last.</span>
              </h2>
              <p className="text-[var(--text-secondary)] leading-[1.8] mb-10">
                Roberts Roofing started in 2003 when Jim Roberts left a national franchise
                to do things the right way \u2014 honest pricing, premium materials, and crews
                that treat every home like their own. Two decades later, we&apos;re still
                family-owned, still local, and still answering the phone ourselves. We\u2019ve
                replaced over 3,000 roofs across Lake County and earned every one of our
                142 five-star reviews the hard way.
              </p>

              {/* Icon grid */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { icon: Shield, label: "Licensed & Insured" },
                  { icon: Award, label: "GAF Master Elite" },
                  { icon: Clock, label: "20+ Years Experience" },
                  { icon: Hammer, label: "3,000+ Roofs Installed" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--brand-soft)] flex items-center justify-center shrink-0">
                      <Icon className="w-4.5 h-4.5 text-[var(--brand-accent)]" />
                    </div>
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-8 pt-6 border-t border-[var(--border-subtle)]">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-2xl font-bold">4.9</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)]">Average rating</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">142+</p>
                  <p className="text-xs text-[var(--text-muted)]">Google reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Reviews Section ── */}
      <section id="reviews" className="py-24 md:py-36 bg-[var(--bg-elevated)] grain relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4 reveal">Reviews</p>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.05] reveal">
              Trusted by homeowners
              <br />
              <span className="italic font-normal text-[var(--text-muted)]">across Lake County.</span>
            </h2>
          </div>

          {/* Featured review */}
          <div className="reveal-rise max-w-3xl mx-auto text-center mb-16">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="text-[clamp(1.2rem,2.2vw,1.7rem)] leading-[1.6] font-medium tracking-[-0.01em] mb-6">
              &ldquo;{REVIEWS[0].text}&rdquo;
            </blockquote>
            <p className="text-sm text-[var(--text-muted)] font-medium">{REVIEWS[0].name}</p>
          </div>

          {/* Supporting reviews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(1).map((r) => (
              <div
                key={r.name}
                className="reveal-rise bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm leading-[1.7] text-[var(--text-secondary)] mb-4">
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="text-sm font-semibold">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. Contact Section ── */}
      <section id="contact" className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="eyebrow mb-4 reveal">Contact</p>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.05] mb-16 reveal">
            Get in Touch.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact info */}
            <div className="reveal space-y-8">
              <div className="space-y-5">
                <a href="tel:8475550199" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-full bg-[var(--brand-soft)] flex items-center justify-center shrink-0">
                    <Phone className="w-4.5 h-4.5 text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-0.5">Phone</p>
                    <p className="font-semibold group-hover:text-[var(--brand-accent)] transition-colors">(847) 555-0199</p>
                  </div>
                </a>

                <a href="mailto:info@robertsroofing.com" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-full bg-[var(--brand-soft)] flex items-center justify-center shrink-0">
                    <Mail className="w-4.5 h-4.5 text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-0.5">Email</p>
                    <p className="font-semibold group-hover:text-[var(--brand-accent)] transition-colors">info@robertsroofing.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[var(--brand-soft)] flex items-center justify-center shrink-0">
                    <MapPin className="w-4.5 h-4.5 text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-0.5">Address</p>
                    <p className="font-semibold">1234 Grand Ave, Gurnee, IL 60031</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[var(--brand-soft)] flex items-center justify-center shrink-0">
                    <Clock className="w-4.5 h-4.5 text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-0.5">Hours</p>
                    <p className="font-semibold">Mon\u2013Fri 7am\u20136pm, Sat 8am\u20132pm</p>
                  </div>
                </div>
              </div>

              {/* Service areas */}
              <div>
                <p className="eyebrow mb-3">Service Areas</p>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((a) => (
                    <span
                      key={a}
                      className="px-3 py-1.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-medium text-[var(--text-secondary)]"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="reveal-rise">
              <div
                className="photo-slot aspect-[3/2] rounded-2xl w-full h-full min-h-[400px]"
                data-label="Google Maps embed \u00b7 600\u00d7400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. CTA Section ── */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="photo-slot w-full h-full" data-label="Aerial roof shot \u00b7 1920\u00d7800" />
        </div>
        <div className="absolute inset-0 bg-[#F7F4EC]/88" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="reveal text-[clamp(2.2rem,5vw,3.8rem)] font-semibold tracking-[-0.035em] leading-[1.02]">
            Let&apos;s protect your
            <br />
            <span className="italic font-normal text-[var(--brand-accent)]">biggest investment.</span>
          </h2>
          <div className="mt-8 reveal">
            <a
              href="tel:8475550199"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[var(--brand-accent)] text-white font-medium text-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              (847) 555-0199
            </a>
          </div>
          <p className="reveal mt-6 flex items-center justify-center gap-2 text-sm text-[var(--text-muted)]">
            <MapPin className="w-4 h-4" />
            Serving Gurnee &amp; Lake County since 2003
          </p>
        </div>
      </section>

      {/* ── 13. Footer ── */}
      <footer className="bg-[var(--brand-primary)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 text-lg font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--brand-accent)]" />
                Roberts Roofing
              </div>
              <p className="text-sm text-white/50 leading-[1.7] max-w-xs">
                GAF Master Elite certified roofing contractor serving Gurnee and
                Lake County since 2003. Licensed, bonded, and insured.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.16em] uppercase text-white/40 mb-5">Contact</h4>
              <div className="space-y-3 text-sm text-white/70">
                <p>(847) 555-0199</p>
                <p>info@robertsroofing.com</p>
                <p>1234 Grand Ave, Gurnee, IL 60031</p>
                <p>Mon\u2013Fri 7am\u20136pm, Sat 8am\u20132pm</p>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.16em] uppercase text-white/40 mb-5">Service Areas</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-white/70">
                {SERVICE_AREAS.map((a) => (
                  <span key={a}>{a}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} Roberts Roofing. All rights reserved.</p>
            <p>
              Site by{" "}
              <span className="text-white/60 font-medium">Capstone Studios</span>
            </p>
          </div>
        </div>
      </footer>

      {/* ── 14. Mobile Sticky CTA ── */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden p-4 bg-gradient-to-t from-[#F7F4EC] via-[#F7F4EC] to-transparent">
        <a
          href="tel:8475550199"
          className="flex items-center justify-center gap-2.5 w-full py-4 rounded-full bg-[var(--brand-accent)] text-white font-semibold shadow-xl"
        >
          <Phone className="w-5 h-5" />
          Call (847) 555-0199
        </a>
      </div>
    </div>
  );
}

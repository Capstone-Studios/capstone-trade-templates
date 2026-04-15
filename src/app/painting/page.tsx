import {
  Phone,
  Star,
  Shield,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Mail,
  Paintbrush,
  Droplets,
  SprayCan,
  Palette,
  Eye,
  Home,
  TreePine,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "Fineline Painting Co. | Premium Painting in Evanston, IL",
  description:
    "Prep-obsessed residential & commercial painting in Evanston. Sherwin-Williams preferred, Benjamin Moore Color Expert on staff. PDCA certified, 10-year warranty.",
};

/* ── Reviews ── */
const REVIEWS = [
  {
    name: "Nancy W.",
    stars: 5,
    text: "The prep work was incredible \u2014 they spent two full days just prepping before a drop of paint went on. The trim lines are razor sharp.",
  },
  {
    name: "Brian M.",
    stars: 5,
    text: "Had our kitchen cabinets spray-finished in SW Alabaster. They look like brand new custom cabinets for a third of the price.",
  },
  {
    name: "Julie K.",
    stars: 5,
    text: "The free color consultation was a game-changer. Their BM Color Expert helped us pick colors we never would have found on our own.",
  },
  {
    name: "Steven R.",
    stars: 5,
    text: "Third time hiring Fineline. Same crew, same quality, same respect for our home every time.",
  },
];

/* ── Gallery Projects ── */
const PROJECTS = [
  { room: "Kitchen Cabinets", color: "SW Alabaster", category: "Cabinets", labelBefore: "Before \u00b7 Kitchen Cabinets", labelAfter: "After \u00b7 Kitchen Cabinets" },
  { room: "Living Room", color: "BM White Dove", category: "Living Rooms", labelBefore: "Before \u00b7 Living Room", labelAfter: "After \u00b7 Living Room" },
  { room: "Exterior", color: "SW Iron Ore", category: "Exteriors", labelBefore: "Before \u00b7 Exterior", labelAfter: "After \u00b7 Exterior" },
  { room: "Bathroom", color: "BM Hale Navy", category: "Kitchens", labelBefore: "Before \u00b7 Bathroom", labelAfter: "After \u00b7 Bathroom" },
  { room: "Deck", color: "Cabot Australian Timber Oil", category: "Decks", labelBefore: "Before \u00b7 Deck", labelAfter: "After \u00b7 Deck" },
  { room: "Nursery", color: "SW Agreeable Gray", category: "Living Rooms", labelBefore: "Before \u00b7 Nursery", labelAfter: "After \u00b7 Nursery" },
];

const GALLERY_TABS = ["All", "Kitchens", "Living Rooms", "Exteriors", "Cabinets", "Decks"];

/* ── 14-Step Prep Process ── */
const PREP_STEPS = [
  { num: 1, name: "Drop cloths", detail: "Canvas cloths on every surface, taped at baseboards to catch every drip." },
  { num: 2, name: "Tape & mask", detail: "FrogTape on trim, outlets, switches, and hardware for clean separation." },
  { num: 3, name: "Scrape & remove", detail: "All loose, peeling, or failing paint removed to bare substrate." },
  { num: 4, name: "Sand surfaces", detail: "120-grit on all existing paint to create a mechanical bond for new coats." },
  { num: 5, name: "Spot prime", detail: "Shellac-based primer on stains, knots, and bare wood to prevent bleed-through." },
  { num: 6, name: "Caulk gaps", detail: "Paintable silicone caulk on every gap, seam, and joint for a sealed finish." },
  { num: 7, name: "Fill holes", detail: "Lightweight spackle on nail holes, dents, and imperfections." },
  { num: 8, name: "Sand smooth", detail: "220-grit over all filled and primed areas for a glass-smooth surface." },
  { num: 9, name: "Full prime coat", detail: "Full coat of bonding primer on entire surface for uniform adhesion." },
  { num: 10, name: "Cut-in first coat", detail: "Brush work on all edges, corners, and trim lines before rolling." },
  { num: 11, name: "Roll first coat", detail: "High-density roller cover applied in long, even strokes for uniform build." },
  { num: 12, name: "Cut-in second coat", detail: "Second pass on all cut lines for depth, opacity, and razor-sharp edges." },
  { num: 13, name: "Roll second coat", detail: "Final roll coat for full hide, even sheen, and manufacturer-spec mil thickness." },
  { num: 14, name: "Inspect & touch-up", detail: "Walk-through with project manager under raking light to catch every detail." },
];

/* ── Warranty Tiers ── */
const WARRANTIES = [
  { tier: "Standard", duration: "2-Year", coverage: "Labor warranty on all painted surfaces.", includes: ["Labor coverage", "Touch-up guidance", "Color records on file"] },
  { tier: "Premium", duration: "5-Year", coverage: "Labor + paint warranty with annual check-in.", includes: ["Labor + paint coverage", "Annual condition check", "Priority scheduling"], popular: true },
  { tier: "Craftsman", duration: "10-Year", coverage: "Labor + paint + annual touch-up visit.", includes: ["Full labor + paint", "Annual touch-up visit", "Lifetime color records", "Priority emergency service"] },
];

/* ── Brand Certifications ── */
const CERTS = [
  "PDCA Member",
  "Sherwin-Williams Preferred",
  "Benjamin Moore Authorized",
  "EPA Lead-Safe",
  "$2M Liability Insured",
];

/* ── Cabinet Finish Tiers ── */
const CABINET_TIERS = [
  { name: "Painted", tag: "Most Popular", desc: "Premium acrylic enamel spray finish. Durable, washable, beautiful." },
  { name: "Lacquered", tag: "Premium", desc: "Catalyzed lacquer for a factory-smooth, ultra-hard finish." },
  { name: "Conversion Varnish", tag: "Commercial-Grade", desc: "Chemical-cure finish with maximum durability and chemical resistance." },
];

/* ══════════════════════════════════════════════════════════ */

export default function PaintingPage() {
  return (
    <div
      style={
        {
          "--brand-primary": "#4A4A6A",
          "--brand-accent": "#6B8F71",
          "--brand-soft": "rgba(107,143,113,0.08)",
          "--bg-base": "#FAF7F0",
          "--bg-surface": "#FFFFFF",
          "--bg-elevated": "#F3F0E7",
          "--text-primary": "#1A1A2E",
          "--text-secondary": "rgba(26,26,46,0.68)",
          "--text-muted": "rgba(26,26,46,0.42)",
          "--text-inverse": "#FAF7F0",
          "--border-subtle": "rgba(26,26,46,0.08)",
          "--border-medium": "rgba(26,26,46,0.14)",
          "--border-strong": "rgba(26,26,46,0.22)",
          "--violet": "#8B5CF6",
        } as React.CSSProperties
      }
      className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]"
    >
      {/* ── 1. Fixed Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#FAF7F0]/78 border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            Fineline Painting
            <span className="w-2 h-2 rounded-full bg-[var(--brand-accent)]" />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
            <a href="#services" className="link-underline hover:text-[var(--text-primary)] transition-colors">Services</a>
            <a href="#gallery" className="link-underline hover:text-[var(--text-primary)] transition-colors">Gallery</a>
            <a href="#process" className="link-underline hover:text-[var(--text-primary)] transition-colors">Our Process</a>
            <a href="#about" className="link-underline hover:text-[var(--text-primary)] transition-colors">About</a>
            <a href="#reviews" className="link-underline hover:text-[var(--text-primary)] transition-colors">Reviews</a>
            <a href="#contact" className="link-underline hover:text-[var(--text-primary)] transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--brand-accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Free Color Consult
          </a>
        </div>
      </nav>

      {/* ── 2. Hero — Transformation-First ── */}
      <section className="min-h-[94vh] pt-28 pb-24 md:pt-36 md:pb-36 grain">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Before/After Photo Pair */}
          <div className="fade-up grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
            <div className="relative">
              <div
                className="photo-slot aspect-[16/10] rounded-2xl"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-xs font-medium tracking-wide uppercase text-[var(--text-secondary)]">
                Before
              </span>
            </div>
            <div className="relative">
              <div
                className="photo-slot aspect-[16/10] rounded-2xl"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[var(--brand-accent)]/90 backdrop-blur-sm text-xs font-medium tracking-wide uppercase text-white">
                After
              </span>
            </div>
          </div>

          {/* Headline Block */}
          <div className="max-w-3xl">
            <h1 className="fade-up-1 text-[clamp(2.8rem,6.5vw,5.2rem)] font-semibold tracking-[-0.035em] leading-[0.95]">
              Prep Obsessed.
              <br />
              Finish Driven.
              <span className="italic font-normal text-[var(--text-muted)]">&thinsp;</span>
            </h1>

            <p className="fade-up-2 mt-8 text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.7] text-[var(--text-secondary)] max-w-lg">
              Sherwin-Williams Preferred contractor with a Benjamin Moore Color Expert on staff.
              14-step prep process. Meticulous cut lines. The kind of finish that stops you in the doorway.
            </p>

            {/* CTAs */}
            <div className="fade-up-3 flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[var(--brand-accent)] text-white font-medium hover:opacity-90 transition-opacity"
              >
                <Palette className="w-4 h-4" />
                Free Color Consultation
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--border-strong)] font-medium hover:bg-[var(--bg-surface)] transition-colors"
              >
                See Transformations
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust signals */}
            <div className="fade-up-4 flex flex-wrap gap-x-6 gap-y-3 pt-8 text-sm text-[var(--text-secondary)]">
              {["PDCA Certified", "Sherwin-Williams Preferred", "10-Year Warranty"].map((v) => (
                <span key={v} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--brand-accent)]" />
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Brand / Certification Strip ── */}
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

      {/* ── 4. Room-by-Room Gallery ── */}
      <section id="gallery" className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="eyebrow mb-4 reveal" style={{ color: "var(--violet)" }}>Portfolio</p>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.05] reveal">
            Transformations
            <br />
            <span className="italic font-normal text-[var(--text-muted)]">that speak for themselves.</span>
          </h2>

          {/* Category Tabs */}
          <div className="mt-10 flex flex-wrap gap-2 reveal">
            {GALLERY_TABS.map((tab, i) => (
              <span
                key={tab}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  i === 0
                    ? "bg-[var(--brand-primary)] text-white"
                    : "bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Project Cards 3x2 */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <div
                key={p.room}
                className="reveal-rise group bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-[var(--border-strong)] transition-all duration-500"
              >
                {/* Before / After pair inside card */}
                <div className="grid grid-cols-2 gap-0.5">
                  <div
                    className="photo-slot aspect-[4/3]"
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
                  />
                  <div
                    className="photo-slot aspect-[4/3]"
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
                  />
                </div>
                <div className="px-5 py-4">
                  <p className="font-semibold text-sm">{p.room}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{p.color}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Cabinet Refinishing Spotlight ── */}
      <section className="py-24 md:py-36 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Photo */}
            <div className="reveal">
              <div
                className="photo-slot aspect-[4/3] rounded-2xl"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?w=800&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
              />
            </div>

            {/* Right — Content */}
            <div className="reveal">
              <p className="eyebrow mb-4" style={{ color: "var(--violet)" }}>Specialty Service</p>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.05]">
                Cabinet Refinishing
                <br />
                <span className="italic font-normal text-[var(--text-muted)]">at a fraction of replacement cost.</span>
              </h2>
              <p className="mt-6 text-[var(--text-secondary)] leading-[1.7] max-w-md">
                Professional spray-finish in our controlled booth environment. Conversion varnish top coat,
                any color from any manufacturer. Your existing cabinets, transformed to look factory-new.
              </p>

              {/* Finish Tiers */}
              <div className="mt-8 space-y-3">
                {CABINET_TIERS.map((t) => (
                  <div
                    key={t.name}
                    className="flex items-start gap-4 bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] px-5 py-4"
                  >
                    <SprayCan className="w-5 h-5 text-[var(--brand-accent)] mt-0.5 shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm">{t.name}</p>
                        <span className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--brand-soft)] text-[var(--brand-accent)]">
                          {t.tag}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] mt-1">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-[var(--text-muted)]">
                Average kitchen: $4,500 &ndash; $12,000 depending on size and finish tier.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--brand-accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Get a cabinet quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. 14-Step Prep Process ── */}
      <section id="process" className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="eyebrow mb-4 reveal" style={{ color: "var(--violet)" }}>Our Process</p>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.05] reveal max-w-2xl">
            The finish you see
            <br />
            <span className="italic font-normal text-[var(--text-muted)]">is the prep you don&rsquo;t.</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {PREP_STEPS.map((s) => (
              <div
                key={s.num}
                className="reveal-rise flex items-start gap-5 bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] px-5 py-4 hover:border-[var(--border-strong)] transition-colors"
              >
                <span className="text-2xl font-bold text-[var(--brand-accent)] tabular-nums leading-none mt-0.5 shrink-0 w-8 text-right">
                  {String(s.num).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold text-sm">{s.name}</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Services ── */}
      <section id="services" className="py-24 md:py-36 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="eyebrow mb-4 reveal" style={{ color: "var(--violet)" }}>Services</p>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.05] reveal">
            Interior &amp; exterior
            <br />
            <span className="italic font-normal text-[var(--text-muted)]">painting done right.</span>
          </h2>

          {/* Two-column: Interior / Exterior */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Interior */}
            <div className="reveal-rise bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden">
              <div
                className="photo-slot aspect-[16/9]"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold">Interior Painting</h3>
                <p className="mt-3 text-[var(--text-secondary)] leading-[1.7] text-sm">
                  Walls, ceilings, trim, doors, and cabinets. Our 14-step prep process ensures
                  flawless adhesion and razor-sharp lines on every surface. We move furniture,
                  mask everything, and leave your home cleaner than we found it.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
                  {["Walls & ceilings", "Trim & baseboards", "Doors & frames", "Cabinet refinishing", "Drywall repair & skim coating"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--brand-accent)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Exterior */}
            <div className="reveal-rise bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden">
              <div
                className="photo-slot aspect-[16/9]"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?w=800&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold">Exterior Painting</h3>
                <p className="mt-3 text-[var(--text-secondary)] leading-[1.7] text-sm">
                  Full exterior prep including pressure washing, scraping, caulking, and priming
                  before two coats of premium exterior paint. We protect your landscaping and
                  work around weather to deliver a finish that lasts.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
                  {["Siding & fascia", "Trim & soffits", "Front doors & shutters", "Deck & fence staining", "Pressure washing"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--brand-accent)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Smaller 3-col: Deck, Drywall, Pressure Washing */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Deck Staining", desc: "Semi-transparent and solid stains with proper prep for maximum penetration and UV protection.", icon: TreePine },
              { title: "Drywall Repair", desc: "Skim coating, crack repair, water damage restoration, and texture matching before paint.", icon: Home },
              { title: "Pressure Washing", desc: "Soft-wash and high-pressure cleaning for siding, driveways, patios, and decks.", icon: Droplets },
            ].map((s) => (
              <div
                key={s.title}
                className="reveal-rise bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] p-6 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--border-strong)] transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-soft)] flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-[var(--brand-accent)]" />
                </div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)] leading-[1.7]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Warranty Tiers ── */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="eyebrow mb-4 reveal" style={{ color: "var(--violet)" }}>Warranty</p>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.05] reveal">
            We stand behind
            <br />
            <span className="italic font-normal text-[var(--text-muted)]">every brushstroke.</span>
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {WARRANTIES.map((w) => (
              <div
                key={w.tier}
                className={`reveal-rise rounded-2xl border p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                  w.popular
                    ? "bg-[var(--brand-primary)] text-white border-[var(--brand-primary)] relative"
                    : "bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]"
                }`}
              >
                {w.popular && (
                  <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-[var(--brand-accent)] text-white text-[10px] font-medium uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <p className={`text-sm font-medium ${w.popular ? "text-white/70" : "text-[var(--text-muted)]"}`}>
                  {w.tier}
                </p>
                <p className="text-3xl font-bold mt-2">{w.duration}</p>
                <p className={`mt-3 text-sm leading-[1.7] ${w.popular ? "text-white/80" : "text-[var(--text-secondary)]"}`}>
                  {w.coverage}
                </p>
                <ul className="mt-6 space-y-3">
                  {w.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${w.popular ? "text-[var(--brand-accent)]" : "text-[var(--brand-accent)]"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. About ── */}
      <section id="about" className="py-24 md:py-36 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal">
              <div
                className="photo-slot aspect-[4/3] rounded-2xl"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
              />
            </div>
            <div className="reveal">
              <p className="eyebrow mb-4" style={{ color: "var(--violet)" }}>About Us</p>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.05]">
                Prep obsessed
                <br />
                <span className="italic font-normal text-[var(--text-muted)]">since 2008.</span>
              </h2>
              <p className="mt-6 text-[var(--text-secondary)] leading-[1.7]">
                Fineline Painting Co. runs W-2 crews &mdash; no subs, no day labor. Every project
                has a named project manager who&rsquo;s on-site daily. We built our reputation on
                clean-work culture: drop cloths down before boots come off, music stays low, and
                your home is left cleaner than we found it.
              </p>
              <p className="mt-4 text-[var(--text-secondary)] leading-[1.7]">
                Our Benjamin Moore Color Expert provides complimentary in-home consultations
                with large-format samples so you see the color in your light, on your walls,
                before a single can is opened.
              </p>

              {/* Stats */}
              <div className="mt-8 flex gap-10">
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-3xl font-bold">4.8</span>
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                  <p className="text-sm text-[var(--text-muted)] mt-1">Average rating</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">156</p>
                  <p className="text-sm text-[var(--text-muted)] mt-1">Google reviews</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">18</p>
                  <p className="text-sm text-[var(--text-muted)] mt-1">Years in business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Reviews ── */}
      <section id="reviews" className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="eyebrow mb-4 reveal" style={{ color: "var(--violet)" }}>Reviews</p>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.05] reveal">
            Homeowners trust
            <br />
            <span className="italic font-normal text-[var(--text-muted)]">the Fineline difference.</span>
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="reveal-rise bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] p-6 md:p-8 hover:border-[var(--border-strong)] transition-colors"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[var(--text-secondary)] leading-[1.7] text-sm">
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="mt-4 font-semibold text-sm">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. Contact ── */}
      <section id="contact" className="py-24 md:py-36 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Info */}
            <div className="reveal">
              <p className="eyebrow mb-4" style={{ color: "var(--violet)" }}>Contact</p>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.05]">
                Let&rsquo;s talk color.
              </h2>
              <p className="mt-6 text-[var(--text-secondary)] leading-[1.7] max-w-md">
                Every project starts with a free in-home color consultation. We bring large-format
                samples, measure your space, and provide a detailed written estimate within 48 hours.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--brand-soft)] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <a href="tel:8475550567" className="text-sm text-[var(--text-secondary)] hover:text-[var(--brand-accent)] transition-colors">
                      (847) 555-0567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--brand-soft)] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Address</p>
                    <p className="text-sm text-[var(--text-secondary)]">321 Central St, Evanston, IL 60201</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--brand-soft)] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Hours</p>
                    <p className="text-sm text-[var(--text-secondary)]">Mon &ndash; Fri: 7am &ndash; 5pm</p>
                    <p className="text-sm text-[var(--text-secondary)]">Sat: 8am &ndash; 12pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--brand-soft)] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <p className="text-sm text-[var(--text-secondary)]">hello@finelinepainting.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="reveal">
              <div
                className="photo-slot aspect-[4/3] rounded-2xl"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. Final CTA ── */}
      <section className="py-24 md:py-36 grain">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="reveal text-[clamp(2.2rem,5vw,4rem)] font-semibold tracking-[-0.035em] leading-[1]">
            Ready to fall in love
            <br />
            <span className="italic font-normal text-[var(--text-muted)]">with your home again?</span>
          </h2>
          <p className="reveal mt-6 text-[var(--text-secondary)] max-w-lg mx-auto leading-[1.7]">
            Book your free color consultation today. We&rsquo;ll bring the samples, measure your space,
            and show you what&rsquo;s possible.
          </p>
          <div className="reveal mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:8475550567"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[var(--brand-accent)] text-white font-medium text-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              (847) 555-0567
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--border-strong)] font-medium text-lg hover:bg-[var(--bg-surface)] transition-colors"
            >
              Schedule Online
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── 13. Footer ── */}
      <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <p className="text-lg font-semibold tracking-tight flex items-center gap-2">
                Fineline Painting
                <span className="w-2 h-2 rounded-full bg-[var(--brand-accent)]" />
              </p>
              <p className="mt-3 text-sm text-[var(--text-secondary)] leading-[1.7] max-w-sm">
                Prep-obsessed residential and commercial painting in Evanston, IL.
                Sherwin-Williams Preferred. Benjamin Moore Authorized. PDCA Certified.
              </p>
              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 text-sm font-medium">4.8</span>
                <span className="text-sm text-[var(--text-muted)] ml-1">({`156 reviews`})</span>
              </div>
            </div>

            {/* Links */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)] mb-4">Services</p>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                {["Interior Painting", "Exterior Painting", "Cabinet Refinishing", "Deck Staining", "Drywall Repair"].map((l) => (
                  <li key={l}>
                    <a href="#services" className="hover:text-[var(--text-primary)] transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)] mb-4">Contact</p>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li>
                  <a href="tel:8475550567" className="hover:text-[var(--text-primary)] transition-colors">(847) 555-0567</a>
                </li>
                <li>hello@finelinepainting.com</li>
                <li>321 Central St, Evanston, IL 60201</li>
                <li>Mon&ndash;Fri 7am&ndash;5pm, Sat 8am&ndash;12pm</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--text-muted)]">
            <p>&copy; {new Date().getFullYear()} Fineline Painting Co. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Mobile Sticky CTA ── */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 p-4 bg-[#FAF7F0]/90 backdrop-blur-xl border-t border-[var(--border-subtle)]">
        <a
          href="tel:8475550567"
          className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full bg-[var(--brand-accent)] text-white font-medium hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          (847) 555-0567 &mdash; Free Estimate
        </a>
      </div>
    </div>
  );
}

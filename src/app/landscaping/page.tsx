import {
  Phone,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  ChevronRight,
  Flame,
  Trees,
  Flower2,
  Home,
  Droplets,
  UtensilsCrossed,
  Award,
  CheckCircle2,
  Quote,
  Mail,
  Menu,
} from "lucide-react";

/* ── Override palette for landscaping ── */
const palette = {
  "--bg-base": "#FAF7F0",
  "--bg-surface": "#FFFFFF",
  "--bg-elevated": "#F2EDE3",
  "--bg-contrast": "#1B3A2D",
  "--brand-primary": "#1B3A2D",
  "--brand-accent": "#8B6F3E",
  "--brand-soft": "rgba(139,111,62,0.08)",
  "--text-primary": "#1B3A2D",
  "--text-secondary": "rgba(27,58,45,0.68)",
  "--text-muted": "rgba(27,58,45,0.42)",
  "--text-inverse": "#FAF7F0",
  "--border-subtle": "rgba(27,58,45,0.08)",
  "--border-medium": "rgba(27,58,45,0.14)",
  "--border-strong": "rgba(27,58,45,0.22)",
} as React.CSSProperties;

/* ── Data ── */

const NAV_LINKS = ["Portfolio", "Services", "Process", "About", "Contact"];

const AWARDS = [
  "ICPI Advanced Certified",
  "Unilock Authorized",
  "Belgard Authorized",
  "Houzz Best of Design",
  "NALP Member",
];

const PROJECTS = [
  { title: "The Morrison Residence", location: "Highland Park, IL", category: "Patio + Fire Feature", label: "Project photo" },
  { title: "The Whitfield Estate", location: "Lake Forest, IL", category: "Outdoor Kitchen", label: "Project photo" },
  { title: "The Chen Garden", location: "Winnetka, IL", category: "Garden + Pergola", label: "Project photo" },
  { title: "The Novak Terrace", location: "Glencoe, IL", category: "Pool Deck", label: "Project photo" },
  { title: "The Blackwell Retreat", location: "Northbrook, IL", category: "Full Landscape", label: "Project photo" },
  { title: "The Hartley Courtyard", location: "Deerfield, IL", category: "Patio + Planting", label: "Project photo" },
];

const SERVICES = [
  { title: "Patios & Terraces", icon: Home, desc: "Hand-laid natural stone and premium paver installations designed as true extensions of your home. Every joint aligned, every grade pitched to perfection." },
  { title: "Outdoor Kitchens", icon: UtensilsCrossed, desc: "Full outdoor culinary suites with built-in grills, countertops, refrigeration, and lighting. Designed for the way you actually entertain." },
  { title: "Fire Features", icon: Flame, desc: "Custom fire pits, linear fire tables, and full masonry fireplaces that anchor your outdoor room and extend your season into fall." },
  { title: "Pool Decks", icon: Droplets, desc: "Slip-resistant, heat-reflective hardscape surrounding your pool. Integrated coping, drainage, and seamless transitions to lawn." },
  { title: "Gardens & Planting", icon: Flower2, desc: "Four-season planting plans with native cultivars, specimen trees, and perennial borders. Designed by horticulturists, installed by craftsmen." },
  { title: "Pergolas & Structures", icon: Trees, desc: "Cedar, ipe, and aluminum shade structures with optional motorized louvers, integrated lighting, and climbing vine trellises." },
];

const PROCESS_STEPS = [
  { num: "01", title: "Discovery Consultation", desc: "We walk your property together. You share how you live; we listen and take notes." },
  { num: "02", title: "Custom Design", desc: "Hand-drawn concepts evolve into scaled plans with material selections and planting palettes." },
  { num: "03", title: "3D Visualization", desc: "Photorealistic renderings let you walk through your project before a single paver is laid." },
  { num: "04", title: "Expert Build", desc: "Our in-house crew — no subcontractors — builds with ICPI-certified precision and daily communication." },
  { num: "05", title: "Seasonal Care", desc: "Optional maintenance programs keep your investment pristine through every Midwest season." },
];

const MATERIALS = [
  { brand: "Unilock", type: "Premium Pavers", label: "Unilock product" },
  { brand: "Belgard", type: "Natural Stone", label: "Belgard product" },
  { brand: "Trex", type: "Composite Decking", label: "Trex product" },
  { brand: "Rainbird", type: "Smart Irrigation", label: "Rainbird product" },
];

const REVIEWS = [
  { name: "Catherine H.", text: "Greenstone transformed our flat, boring backyard into an outdoor living room we use every single day. The 3D rendering was exactly what they built." },
  { name: "Mark & Susan D.", text: "From the first sketch to the finished firepit, every detail was thoughtful. Their in-house crew did everything — no subs." },
  { name: "Alexandra P.", text: "The design consultation alone was worth it. They saw possibilities we never imagined." },
  { name: "Robert N.", text: "Our patio project came in on budget and two days ahead of schedule. The Unilock pavers look incredible." },
];

export default function LandscapingPage() {
  return (
    <div style={palette} className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">

      {/* ═══════════════ NAV ═══════════════ */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[var(--bg-base)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-14">
          <a href="#" className="text-lg font-semibold tracking-tight text-[var(--brand-primary)]">
            Greenstone
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[13px] font-medium tracking-wide uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors link-underline"
              >
                {link}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-[13px] font-medium tracking-wide bg-[#8B6F3E] text-white rounded-full hover:bg-[#7A6035] transition-colors"
          >
            Start Your Project
          </a>
          <button className="md:hidden text-[var(--text-primary)]" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="pt-14">
        {/* Giant photo slot */}
        <div className="w-full aspect-[21/9] photo-slot" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />

        <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
          <p className="eyebrow mb-6 fade-up" style={{ color: "#8B6F3E" }}>Design + Build</p>
          <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-semibold tracking-[-0.04em] leading-[0.95] fade-up-1">
            The Outdoor Rooms
            <br />
            <span className="italic font-normal text-[var(--text-muted)]">You&rsquo;ll Never Want to Leave</span>
          </h1>
          <p className="mt-8 text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.7] text-[var(--text-secondary)] max-w-2xl mx-auto fade-up-2">
            ICPI-certified craftsmen. Award-winning portfolio. One team from sketch to maintenance —
            designing and building the North Shore&rsquo;s finest outdoor living spaces for 18 years.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 fade-up-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-medium tracking-wide bg-[#8B6F3E] text-white rounded-full hover:bg-[#7A6035] transition-colors"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-medium tracking-wide border border-[var(--border-strong)] text-[var(--text-primary)] rounded-full hover:bg-[var(--brand-soft)] transition-colors"
            >
              View Portfolio
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 fade-up-4">
            {[
              { value: "127", label: "Projects Completed" },
              { value: "18", label: "Years" },
              { value: "ICPI", label: "Advanced Certified" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--brand-primary)]">{stat.value}</p>
                <p className="mt-1 text-[12px] font-medium tracking-widest uppercase text-[var(--text-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ AWARDS STRIP ═══════════════ */}
      <section className="border-y border-[var(--border-subtle)] py-6 bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {AWARDS.map((a, i) => (
            <span key={a} className="flex items-center gap-3 text-[12px] font-medium tracking-widest uppercase text-[var(--text-muted)]">
              {i > 0 && <span className="hidden sm:inline text-[var(--border-medium)]">·</span>}
              <Award className="w-3.5 h-3.5 text-[#8B6F3E]" />
              {a}
            </span>
          ))}
        </div>
      </section>

      {/* ═══════════════ PORTFOLIO ═══════════════ */}
      <section id="portfolio" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16 reveal">
            <p className="eyebrow mb-4" style={{ color: "#8B6F3E" }}>Selected Work</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-[-0.03em] leading-[1.05]">
              Our work
              <br />
              <span className="italic font-normal text-[var(--text-muted)]">speaks for itself.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <div key={p.title} className="group reveal-rise">
                <div className="aspect-[4/3] photo-slot rounded-lg overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.02]" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />
                <div className="mt-4">
                  <h3 className="text-[17px] font-semibold tracking-tight">{p.title}</h3>
                  <p className="text-[13px] text-[var(--text-secondary)] mt-0.5">{p.location}</p>
                  <span className="inline-block mt-2 px-3 py-1 text-[11px] font-medium tracking-wider uppercase bg-[var(--brand-soft)] text-[#8B6F3E] rounded-full">
                    {p.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 3D RENDERING TRIPTYCH ═══════════════ */}
      <section className="py-24 md:py-32 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16 reveal">
            <p className="eyebrow mb-4" style={{ color: "#8B6F3E" }}>Design Process</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-[-0.03em] leading-[1.05]">
              From sketch
              <br />
              <span className="italic font-normal text-[var(--text-muted)]">to reality.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center reveal-rise">
            {/* Sketch */}
            <div className="text-center">
              <div className="aspect-square photo-slot rounded-lg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />
              <p className="mt-4 text-[13px] font-medium tracking-widest uppercase text-[var(--text-muted)]">Plan Sketch</p>
            </div>
            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center -mx-8 relative">
              <ChevronRight className="absolute left-0 w-5 h-5 text-[#8B6F3E]" />
              <div className="flex-1 mx-6">
                <div className="aspect-square photo-slot rounded-lg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />
                <p className="mt-4 text-[13px] font-medium tracking-widest uppercase text-[var(--text-muted)] text-center">3D Rendering</p>
              </div>
              <ChevronRight className="absolute right-0 w-5 h-5 text-[#8B6F3E]" />
            </div>
            {/* Mobile: middle column without arrows */}
            <div className="md:hidden text-center">
              <div className="flex items-center justify-center py-2">
                <ChevronRight className="w-5 h-5 text-[#8B6F3E] rotate-90" />
              </div>
              <div className="aspect-square photo-slot rounded-lg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />
              <p className="mt-4 text-[13px] font-medium tracking-widest uppercase text-[var(--text-muted)]">3D Rendering</p>
              <div className="flex items-center justify-center py-2">
                <ChevronRight className="w-5 h-5 text-[#8B6F3E] rotate-90" />
              </div>
            </div>
            {/* Completed */}
            <div className="text-center">
              <div className="aspect-square photo-slot rounded-lg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />
              <p className="mt-4 text-[13px] font-medium tracking-widest uppercase text-[var(--text-muted)]">Completed Project</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section id="services" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16 reveal">
            <p className="eyebrow mb-4" style={{ color: "#8B6F3E" }}>What We Build</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-[-0.03em] leading-[1.05]">
              Services organized by
              <br />
              <span className="italic font-normal text-[var(--text-muted)]">how you live outside.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="group reveal-rise bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl overflow-hidden hover:border-[var(--border-medium)] hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[4/3] photo-slot" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-[var(--brand-soft)] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#8B6F3E]" />
                      </div>
                      <h3 className="text-[17px] font-semibold tracking-tight">{s.title}</h3>
                    </div>
                    <p className="text-[14px] leading-[1.65] text-[var(--text-secondary)]">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ PROCESS TIMELINE ═══════════════ */}
      <section id="process" className="py-24 md:py-32 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16 reveal">
            <p className="eyebrow mb-4" style={{ color: "#8B6F3E" }}>How It Works</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-[-0.03em] leading-[1.05]">
              A proven process
              <br />
              <span className="italic font-normal text-[var(--text-muted)]">from vision to reality.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 reveal-rise">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num} className="relative">
                {/* Connector line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-[var(--border-medium)]" />
                )}
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8B6F3E]">Step {step.num}</p>
                <h3 className="mt-2 text-[16px] font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-[var(--text-secondary)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ MATERIAL LIBRARY ═══════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16 reveal">
            <p className="eyebrow mb-4" style={{ color: "#8B6F3E" }}>Trusted Partners</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-[-0.03em] leading-[1.05]">
              Materials
              <span className="italic font-normal text-[var(--text-muted)]"> we trust.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 reveal-rise">
            {MATERIALS.map((m) => (
              <div key={m.brand} className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl overflow-hidden hover:border-[var(--border-medium)] hover:shadow-md transition-all duration-300">
                <div className="aspect-[4/3] photo-slot" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />
                <div className="p-5">
                  <h3 className="text-[16px] font-semibold tracking-tight">{m.brand}</h3>
                  <p className="text-[13px] text-[var(--text-muted)] mt-0.5">{m.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CONSULTATION CTA ═══════════════ */}
      <section className="py-24 md:py-32 bg-[#1B3A2D] grain">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center reveal">
          <p className="eyebrow mb-6" style={{ color: "#8B6F3E" }}>Design Consultation</p>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.08] text-[#FAF7F0]">
            $250 Design Consultation
            <br />
            <span className="italic font-normal text-[#FAF7F0]/60">Credited to Your Project</span>
          </h2>
          <div className="mt-10 max-w-xl mx-auto text-left grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "On-site property walkthrough",
              "Hand-drawn concept sketch",
              "3D render preview",
              "Material recommendations",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#8B6F3E] shrink-0" />
                <span className="text-[14px] leading-[1.5] text-[#FAF7F0]/80">{item}</span>
              </div>
            ))}
          </div>
          <a
            href="tel:8475550456"
            className="mt-10 inline-flex items-center gap-2 px-8 py-4 text-[14px] font-medium tracking-wide bg-[#8B6F3E] text-white rounded-full hover:bg-[#7A6035] transition-colors"
          >
            Schedule Your Consultation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/5] photo-slot rounded-xl reveal-rise" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1599629954294-14df9ec47f94?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />
            <div className="reveal">
              <p className="eyebrow mb-4" style={{ color: "#8B6F3E" }}>Our Story</p>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.03em] leading-[1.08]">
                Rooted in
                <br />
                <span className="italic font-normal text-[var(--text-muted)]">craftsmanship.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                Greenstone Design + Build was founded on a simple conviction: the best outdoor spaces come from one team
                that designs, builds, and maintains every detail. No subcontracted hardscape. No disconnected design handoffs.
                Just a passionate in-house crew of designers, masons, and horticulturists who take your project from first
                sketch to seasonal care.
              </p>
              <p className="mt-4 text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                Based on the North Shore for 18 years, we specialize in the kind of work that turns properties into retreats —
                and neighbors into referrals.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-semibold tracking-tight">4.9</span>
                    <Star className="w-4 h-4 fill-[#8B6F3E] text-[#8B6F3E]" />
                  </div>
                  <p className="text-[12px] font-medium tracking-widest uppercase text-[var(--text-muted)] mt-1">Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight">67</p>
                  <p className="text-[12px] font-medium tracking-widest uppercase text-[var(--text-muted)] mt-1">Reviews</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight">127</p>
                  <p className="text-[12px] font-medium tracking-widest uppercase text-[var(--text-muted)] mt-1">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ REVIEWS ═══════════════ */}
      <section className="py-24 md:py-32 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16 reveal">
            <p className="eyebrow mb-4" style={{ color: "#8B6F3E" }}>Client Voices</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-[-0.03em] leading-[1.05]">
              Words from
              <span className="italic font-normal text-[var(--text-muted)]"> our clients.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-rise">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-xl p-8">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#8B6F3E] text-[#8B6F3E]" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-[var(--border-medium)] mb-3" />
                <p className="text-[15px] leading-[1.7] text-[var(--text-secondary)]">{r.text}</p>
                <p className="mt-5 text-[13px] font-semibold tracking-tight">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="reveal">
              <p className="eyebrow mb-4" style={{ color: "#8B6F3E" }}>Get in Touch</p>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-[-0.03em] leading-[1.05]">
                Let&rsquo;s design something
                <br />
                <span className="italic font-normal text-[var(--text-muted)]">beautiful.</span>
              </h2>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--brand-soft)] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#8B6F3E]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium tracking-widest uppercase text-[var(--text-muted)]">Phone</p>
                    <a href="tel:8475550456" className="text-[16px] font-semibold tracking-tight hover:text-[#8B6F3E] transition-colors">(847) 555-0456</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--brand-soft)] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#8B6F3E]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium tracking-widest uppercase text-[var(--text-muted)]">Address</p>
                    <p className="text-[16px] font-semibold tracking-tight">456 Sheridan Rd, Highland Park, IL 60035</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--brand-soft)] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#8B6F3E]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium tracking-widest uppercase text-[var(--text-muted)]">Hours</p>
                    <p className="text-[15px] text-[var(--text-secondary)]">Mon – Fri: 8am – 5pm</p>
                    <p className="text-[15px] text-[var(--text-secondary)]">Sat: By appointment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--brand-soft)] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#8B6F3E]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium tracking-widest uppercase text-[var(--text-muted)]">Project Minimum</p>
                    <p className="text-[16px] font-semibold tracking-tight">$25,000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-[4/3] lg:aspect-auto photo-slot rounded-xl reveal-rise" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="py-24 md:py-32 bg-[var(--bg-elevated)] grain">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center reveal">
          <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-semibold tracking-[-0.035em] leading-[1]">
            Ready to love
            <br />
            <span className="italic font-normal text-[var(--text-muted)]">your outdoor space?</span>
          </h2>
          <a
            href="tel:8475550456"
            className="mt-10 inline-flex items-center gap-2 px-8 py-4 text-[14px] font-medium tracking-wide bg-[#8B6F3E] text-white rounded-full hover:bg-[#7A6035] transition-colors"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </a>
          <p className="mt-4 text-[13px] text-[var(--text-muted)]">Projects starting at $25,000.</p>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="py-12 border-t border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-lg font-semibold tracking-tight">Greenstone</p>
              <p className="text-[13px] text-[var(--text-muted)] mt-1">Design + Build &middot; Highland Park, IL</p>
            </div>
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[12px] font-medium tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-3.5 h-3.5 fill-[#8B6F3E] text-[#8B6F3E]" />
              <span className="text-[13px] font-medium">4.9 &middot; 67 reviews</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[var(--border-subtle)] text-center">
            <p className="text-[12px] text-[var(--text-muted)]">
              &copy; {new Date().getFullYear()} Greenstone Design + Build. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ═══════════════ MOBILE STICKY CTA ═══════════════ */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-[var(--bg-surface)]/95 backdrop-blur-md border-t border-[var(--border-subtle)] p-3">
        <a
          href="tel:8475550456"
          className="flex items-center justify-center gap-2 w-full py-3.5 text-[14px] font-medium tracking-wide bg-[#8B6F3E] text-white rounded-full"
        >
          <Phone className="w-4 h-4" />
          (847) 555-0456
        </a>
      </div>
    </div>
  );
}

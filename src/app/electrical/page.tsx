import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Zap,
  Star,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Battery,
  Lightbulb,
  Home,
  Cpu,
  Wrench,
  PlugZap,
  ClipboardCheck,
  HardHat,
  FileCheck,
  Award,
  Users,
  Camera,
  Menu,
} from "lucide-react";

/* ─── palette overrides ─── */
const CSS_VARS = {
  "--brand-primary": "#1A1A1A",
  "--brand-accent": "#F59E0B",
  "--brand-soft": "rgba(245,158,11,0.10)",
  "--brand-blue": "#3B82F6",
  "--bg-base": "#FAF9F7",
  "--text-primary": "#1A1A1A",
  "--text-secondary": "rgba(26,26,26,0.68)",
  "--text-muted": "rgba(26,26,26,0.42)",
  "--border-subtle": "rgba(26,26,26,0.08)",
  "--border-medium": "rgba(26,26,26,0.14)",
} as React.CSSProperties;

const PHONE = "(847) 555-0234";
const PHONE_HREF = "tel:8475550234";
const BIZ = "Volt Electric";
const LICENSE = "Master Electrician License #E-789012";
const ADDR = "567 Technology Blvd, Schaumburg, IL 60173";
const RATING = "4.7";
const REVIEWS_COUNT = "89";

/* ─── data ─── */
const NAV_LINKS = ["Services", "EV Chargers", "About", "Reviews", "Contact"];

const CERTS = [
  "Master Electrician",
  "Tesla Certified Installer",
  "Generac PowerPro",
  "NECA Member",
  "OSHA Trained",
];

const DANGER_PANELS = [
  {
    name: "Federal Pacific Stab-Lok",
    badge: "REPLACE IMMEDIATELY",
    badgeColor: "#DC2626",
    desc: "One in four Stab-Lok breakers fails to trip during overcurrent. These panels have been linked to thousands of house fires. The CPSC confirmed failure rates far exceeding industry standards. If your home was built between 1950-1990, check your panel immediately.",
  },
  {
    name: "Zinsco / Sylvania",
    badge: "REPLACE IMMEDIATELY",
    badgeColor: "#DC2626",
    desc: "Zinsco breakers fuse to the bus bar when they overheat, making them impossible to trip. Aluminum bus bars corrode and arc. These panels were recalled but many remain in homes built in the 1970s-80s. They are a documented fire and electrocution hazard.",
  },
  {
    name: "Challenger (GFCI models)",
    badge: "HIGH RISK",
    badgeColor: "#EA580C",
    desc: "Select Challenger panels have bus bar connection failures and breaker recalls. GFCI breakers in these panels have higher-than-normal failure rates. While not all Challenger panels are dangerous, specific model numbers warrant immediate professional inspection.",
  },
];

const EV_CHARGERS = [
  { name: "Tesla Wall Connector", price: "$1,200 installed", spec: "Level 2 · 48A · 240V" },
  { name: "ChargePoint Home Flex", price: "$1,350 installed", spec: "Level 2 · 48A · 240V" },
  { name: "JuiceBox 48", price: "$1,250 installed", spec: "Level 2 · 48A · 240V" },
  { name: "Wallbox Pulsar Plus", price: "$1,100 installed", spec: "Level 2 · 48A · 240V" },
];

const SERVICES = [
  { num: "01", title: "Panel Upgrades", desc: "100A to 200A+ upgrades for modern electrical demands. Code-compliant, permit-included, inspection-guaranteed.", icon: Zap },
  { num: "02", title: "Whole-Home Rewire", desc: "Replace outdated knob-and-tube or aluminum wiring with modern copper. Protect your family from hidden fire risks.", icon: Home },
  { num: "03", title: "Generator Install", desc: "Generac and Kohler automatic standby generators. Never lose power during Illinois storms again.", icon: Battery },
  { num: "04", title: "Smart Home", desc: "Lutron, Control4, and Ring integration. Smart switches, automated lighting, and whole-home connectivity.", icon: Cpu },
  { num: "05", title: "Troubleshooting", desc: "Flickering lights, tripped breakers, burning smells — we diagnose and fix the root cause, not just the symptom.", icon: Wrench },
  { num: "06", title: "Outlets & Switches", desc: "GFCI outlets, USB outlets, dimmer switches, and dedicated circuits. Small jobs done right the first time.", icon: PlugZap },
];

const GENERATORS = [
  {
    tier: "Essential",
    kw: "12kW",
    price: "$6,500 – $8,500",
    covers: ["Refrigerator & freezer", "Sump pump", "Furnace / AC circuit", "Lights & outlets (select)", "Garage door"],
  },
  {
    tier: "Managed",
    kw: "20kW",
    price: "$9,500 – $12,000",
    covers: ["Everything in Essential", "Full HVAC system", "Kitchen appliances", "Laundry", "Home office"],
  },
  {
    tier: "Whole-Home",
    kw: "24kW+",
    price: "$14,000 – $18,000",
    covers: ["Every circuit in your home", "EV charger", "Hot tub / pool equipment", "Workshop / basement", "Zero lifestyle interruption"],
  },
];

const PROCESS = [
  { step: "01", title: "Free Assessment", desc: "We inspect your panel, wiring, and load requirements. No cost, no obligation.", icon: ClipboardCheck },
  { step: "02", title: "Detailed Quote", desc: "Transparent line-item pricing. Permits, materials, labor — everything itemized.", icon: FileCheck },
  { step: "03", title: "Expert Install", desc: "Licensed master electricians. Clean worksite, code-compliant, on schedule.", icon: HardHat },
  { step: "04", title: "Inspection Passed", desc: "We schedule the municipal inspection and guarantee it passes the first time.", icon: Shield },
];

const REVIEWS = [
  { name: "Karen W.", text: "They upgraded our panel from 100 to 200 amps and it passed inspection the first time. Permits handled, no surprises." },
  { name: "Robert J.", text: "Best EV charger install experience. They did the load calc, pulled the permit, and had it running same-week." },
  { name: "Patricia D.", text: "Found out we had a Federal Pacific panel — they replaced it the next day. Could have prevented a house fire." },
  { name: "Michael S.", text: "Smart home wiring throughout our new build. Every outlet, switch, and panel exactly where we needed it." },
];

export default function ElectricalPage() {
  return (
    <div style={CSS_VARS} className="min-h-screen bg-[var(--bg-base)] font-[system-ui,Inter,sans-serif]">
      {/* ══════ NAV ══════ */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#FAF9F7]/90 backdrop-blur-lg border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-[-0.02em]">
            <span className="text-[#1A1A1A]">Volt</span>
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block" />
            <span className="text-[#1A1A1A]">Electric</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                className="link-underline text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
          <a
            href={PHONE_HREF}
            className="hidden md:flex items-center gap-2 bg-[#F59E0B] text-white text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#D97706] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
            {PHONE}
          </a>
          <button className="md:hidden p-2" aria-label="Menu">
            <Menu className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
        </div>
      </nav>

      {/* ══════ HERO ══════ */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 grain overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="eyebrow mb-4 fade-up" style={{ color: "#F59E0B" }}>
                Licensed &middot; Insured &middot; Schaumburg, IL
              </div>
              <h1 className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-semibold tracking-[-0.035em] leading-[1.02] fade-up-1">
                Master Electricians
                <br />
                Schaumburg Trusts
              </h1>
              <p className="mt-2 text-[clamp(1.1rem,1.6vw,1.4rem)] italic font-normal text-[var(--text-muted)] fade-up-2">
                safe, certified, inspection-ready.
              </p>
              <p className="mt-6 text-[15px] leading-[1.7] text-[var(--text-secondary)] max-w-lg fade-up-3">
                Every wire pulled to code. Every panel inspected and permitted. From 200-amp upgrades
                to EV charger installs, Volt Electric delivers work that passes inspection the first
                time — because cutting corners on electrical is never an option.
              </p>
              <div className="flex flex-wrap gap-3 mt-8 fade-up-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#F59E0B] text-white text-[14px] font-semibold px-7 py-3.5 rounded-full hover:bg-[#D97706] transition-colors"
                >
                  Free Estimate
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </a>
                <a
                  href="#ev-chargers"
                  className="inline-flex items-center gap-2 border-2 border-[var(--border-strong)] text-[var(--text-primary)] text-[14px] font-semibold px-7 py-3.5 rounded-full hover:bg-[var(--text-primary)] hover:text-white transition-colors"
                >
                  See EV Chargers
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3 fade-up-4">
                <Shield className="w-4 h-4 text-[#F59E0B]" strokeWidth={2.5} />
                <span className="text-[12px] font-medium tracking-[0.04em] text-[var(--text-secondary)]">
                  {LICENSE}
                </span>
              </div>
              {/* Stat badges */}
              <div className="flex flex-wrap gap-4 mt-6">
                {[
                  { val: "2,400+", label: "Jobs Completed" },
                  { val: "100%", label: "Inspection Pass Rate" },
                  { val: "4.7★", label: `${REVIEWS_COUNT} Reviews` },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/70 backdrop-blur border border-[var(--border-subtle)] rounded-xl px-5 py-3"
                  >
                    <div className="text-[20px] font-bold tracking-[-0.02em]" style={{ color: "#1A1A1A" }}>
                      {s.val}
                    </div>
                    <div className="text-[11px] text-[var(--text-muted)] font-medium tracking-[0.04em] uppercase">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="photo-slot rounded-2xl aspect-[4/5] md:aspect-[3/4]" data-label="Tech at panel box" />
          </div>
        </div>
      </section>

      {/* ══════ CERTS STRIP ══════ */}
      <section className="border-y border-[var(--border-subtle)] bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {CERTS.map((c, i) => (
            <span key={c} className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.08em] uppercase text-[var(--text-secondary)]">
              {i > 0 && <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />}
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ══════ PANEL SAFETY ══════ */}
      <section id="services" className="py-20 md:py-28 bg-[#1A1A1A] grain">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 reveal">
            <p className="eyebrow mb-3" style={{ color: "#F59E0B" }}>
              Safety Alert
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.06] text-white">
              Is your electrical panel
              <br />
              <span className="italic font-normal text-[rgba(255,255,255,0.5)]">a fire risk?</span>
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-[rgba(255,255,255,0.55)] max-w-2xl mx-auto">
              Three panel brands are responsible for a disproportionate number of residential electrical fires.
              If your home has one of these, replacement is not optional — it is urgent.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {DANGER_PANELS.map((p) => (
              <div
                key={p.name}
                className="reveal-rise bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden hover:border-[rgba(255,255,255,0.16)] transition-colors"
              >
                <div className="photo-slot aspect-[4/3]" data-label={p.name} />
                <div className="p-6">
                  <span
                    className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full mb-3"
                    style={{ backgroundColor: `${p.badgeColor}20`, color: p.badgeColor }}
                  >
                    {p.badge}
                  </span>
                  <h3 className="text-[18px] font-semibold text-white tracking-[-0.01em] mb-2">
                    {p.name}
                  </h3>
                  <p className="text-[13px] leading-[1.7] text-[rgba(255,255,255,0.5)]">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#F59E0B] text-white text-[14px] font-semibold px-7 py-3.5 rounded-full hover:bg-[#D97706] transition-colors"
            >
              <Shield className="w-4 h-4" strokeWidth={2.5} />
              Free Panel Safety Inspection
            </a>
          </div>
        </div>
      </section>

      {/* ══════ EV CHARGERS ══════ */}
      <section id="ev-chargers" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 reveal">
            <p className="eyebrow mb-3" style={{ color: "#F59E0B" }}>
              EV Charging
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.06]">
              EV charger installation
              <br />
              <span className="italic font-normal text-[var(--text-muted)]">done right.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EV_CHARGERS.map((c) => (
              <div
                key={c.name}
                className="reveal-rise bg-white border border-[var(--border-subtle)] rounded-2xl overflow-hidden hover:border-[var(--border-medium)] hover:shadow-lg transition-all group"
              >
                <div className="photo-slot aspect-square" data-label={c.name} />
                <div className="p-5">
                  <h3 className="text-[16px] font-semibold tracking-[-0.01em] mb-1">{c.name}</h3>
                  <div className="text-[22px] font-bold text-[#F59E0B] tracking-[-0.02em]">{c.price}</div>
                  <p className="text-[12px] text-[var(--text-muted)] font-medium mt-1">{c.spec}</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.04em] text-[#16A34A] bg-[rgba(22,163,74,0.08)] px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" strokeWidth={2.5} />
                    30% Federal Tax Credit
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#F59E0B] hover:underline"
            >
              Which charger is right for you?
              <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </section>

      {/* ══════ SERVICES GRID ══════ */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 reveal">
            <p className="eyebrow mb-3" style={{ color: "#F59E0B" }}>
              What We Do
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.06]">
              Full-service electrical
              <br />
              <span className="italic font-normal text-[var(--text-muted)]">for every need.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.num}
                  className="reveal-rise bg-white border border-[var(--border-subtle)] rounded-2xl overflow-hidden hover:border-[var(--border-medium)] hover:shadow-lg transition-all group"
                >
                  <div className="photo-slot aspect-[16/10]" data-label={s.title} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[12px] font-bold text-[#F59E0B] tracking-[0.06em]">{s.num}</span>
                      <Icon className="w-4 h-4 text-[var(--text-muted)]" strokeWidth={2} />
                    </div>
                    <h3 className="text-[17px] font-semibold tracking-[-0.01em] mb-2">{s.title}</h3>
                    <p className="text-[13px] leading-[1.7] text-[var(--text-secondary)]">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ GENERATOR SIZING ══════ */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 reveal">
            <p className="eyebrow mb-3" style={{ color: "#F59E0B" }}>
              Backup Power
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.06]">
              Whole-home backup power.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-[var(--text-secondary)] max-w-xl mx-auto">
              Generac and Kohler automatic standby generators, professionally sized and installed.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {GENERATORS.map((g, i) => (
              <div
                key={g.tier}
                className={`reveal-rise rounded-2xl border overflow-hidden transition-all hover:shadow-lg ${
                  i === 2
                    ? "bg-[#1A1A1A] border-[#F59E0B]/30 text-white"
                    : "bg-white border-[var(--border-subtle)]"
                }`}
              >
                <div className="p-7">
                  <p
                    className="text-[11px] font-bold tracking-[0.12em] uppercase mb-1"
                    style={{ color: "#F59E0B" }}
                  >
                    {g.tier}
                  </p>
                  <div className="text-[36px] font-bold tracking-[-0.03em] leading-none">{g.kw}</div>
                  <div
                    className={`text-[15px] font-semibold mt-2 ${
                      i === 2 ? "text-[rgba(255,255,255,0.7)]" : "text-[var(--text-secondary)]"
                    }`}
                  >
                    {g.price}
                  </div>
                  <div className="mt-5 space-y-2.5">
                    {g.covers.map((c) => (
                      <div key={c} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color: "#F59E0B" }}
                          strokeWidth={2.5}
                        />
                        <span
                          className={`text-[13px] leading-[1.5] ${
                            i === 2 ? "text-[rgba(255,255,255,0.6)]" : "text-[var(--text-secondary)]"
                          }`}
                        >
                          {c}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className={`mt-6 w-full inline-flex items-center justify-center gap-2 text-[13px] font-semibold py-3 rounded-full transition-colors ${
                      i === 2
                        ? "bg-[#F59E0B] text-white hover:bg-[#D97706]"
                        : "border-2 border-[var(--border-strong)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-white"
                    }`}
                  >
                    Get a Quote
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-8 mt-8 reveal">
            {["Generac", "Kohler"].map((b) => (
              <span
                key={b}
                className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--text-muted)]"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PROCESS TIMELINE ══════ */}
      <section className="py-20 md:py-28 bg-[#FAFAF8] border-y border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 reveal">
            <p className="eyebrow mb-3" style={{ color: "#F59E0B" }}>
              How It Works
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.06]">
              From call to inspection
              <br />
              <span className="italic font-normal text-[var(--text-muted)]">in four steps.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.step}
                  className="reveal-rise bg-white border border-[var(--border-subtle)] rounded-2xl p-6 text-center hover:border-[var(--border-medium)] hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-[rgba(245,158,11,0.10)] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-[#F59E0B]" strokeWidth={2} />
                  </div>
                  <div className="text-[11px] font-bold tracking-[0.12em] text-[#F59E0B] uppercase mb-2">
                    Step {p.step}
                  </div>
                  <h3 className="text-[16px] font-semibold tracking-[-0.01em] mb-2">{p.title}</h3>
                  <p className="text-[13px] leading-[1.7] text-[var(--text-secondary)]">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ RECENT WORK GALLERY ══════ */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 reveal">
            <p className="eyebrow mb-3" style={{ color: "#F59E0B" }}>
              Recent Work
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.06]">
              Quality you can see.
            </h2>
          </div>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {[
              { label: "200A Panel Upgrade", aspect: "aspect-[3/4]" },
              { label: "Tesla Wall Connector", aspect: "aspect-square" },
              { label: "Generac 24kW Install", aspect: "aspect-[4/5]" },
              { label: "Smart Home Wiring", aspect: "aspect-square" },
              { label: "Commercial Panel", aspect: "aspect-[4/5]" },
              { label: "EV Charger Garage", aspect: "aspect-[3/4]" },
            ].map((p) => (
              <div
                key={p.label}
                className={`reveal-rise photo-slot ${p.aspect} rounded-xl break-inside-avoid`}
                data-label={p.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════ ABOUT ══════ */}
      <section id="about" className="py-20 md:py-28 bg-[#FAFAF8] border-y border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="photo-slot aspect-[4/5] rounded-2xl reveal-rise" data-label="Team / Owner photo" />
            <div className="reveal">
              <p className="eyebrow mb-3" style={{ color: "#F59E0B" }}>
                About {BIZ}
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-semibold tracking-[-0.03em] leading-[1.06]">
                Safety first.
                <br />
                <span className="italic font-normal text-[var(--text-muted)]">Always.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                Volt Electric was founded on a simple principle: electrical work should never be rushed,
                cut short, or done without a permit. Every job we take gets the same treatment — proper
                load calculations, code-compliant installation, and a passed inspection before we call it
                done. We serve Schaumburg and the surrounding suburbs with a team of master and journeyman
                electricians who take pride in clean, safe work.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Shield, label: "Licensed & Insured" },
                  { icon: Award, label: "Master Electricians" },
                  { icon: FileCheck, label: "Permits Included" },
                  { icon: Users, label: "Family Owned" },
                ].map((v) => {
                  const Icon = v.icon;
                  return (
                    <div key={v.label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[rgba(245,158,11,0.10)] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#F59E0B]" strokeWidth={2} />
                      </div>
                      <span className="text-[13px] font-medium text-[var(--text-secondary)]">{v.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-6 mt-8 pt-6 border-t border-[var(--border-subtle)]">
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4"
                        fill={i < 4 ? "#F59E0B" : "none"}
                        stroke={i < 4 ? "#F59E0B" : "#F59E0B"}
                        strokeWidth={2}
                      />
                    ))}
                    <span className="ml-2 text-[18px] font-bold tracking-[-0.02em]">{RATING}</span>
                  </div>
                  <p className="text-[12px] text-[var(--text-muted)] mt-0.5">{REVIEWS_COUNT} reviews on Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ REVIEWS ══════ */}
      <section id="reviews" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 reveal">
            <p className="eyebrow mb-3" style={{ color: "#F59E0B" }}>
              Reviews
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.06]">
              What homeowners say.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="reveal-rise bg-white border border-[var(--border-subtle)] rounded-2xl p-6 hover:border-[var(--border-medium)] hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5" fill="#F59E0B" stroke="#F59E0B" strokeWidth={2} />
                  ))}
                </div>
                <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)] mb-4">
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="text-[13px] font-semibold">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CONTACT ══════ */}
      <section id="contact" className="py-20 md:py-28 bg-[#FAFAF8] border-y border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="reveal">
              <p className="eyebrow mb-3" style={{ color: "#F59E0B" }}>
                Contact
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-semibold tracking-[-0.03em] leading-[1.06] mb-6">
                Get your free estimate.
              </h2>
              <div className="space-y-5">
                <a href={PHONE_HREF} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(245,158,11,0.10)] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#F59E0B]" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold group-hover:text-[#F59E0B] transition-colors">{PHONE}</p>
                    <p className="text-[12px] text-[var(--text-muted)]">Call or text</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(245,158,11,0.10)] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#F59E0B]" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold">info@voltelectric.com</p>
                    <p className="text-[12px] text-[var(--text-muted)]">Email us anytime</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(245,158,11,0.10)] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#F59E0B]" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold">{ADDR}</p>
                    <p className="text-[12px] text-[var(--text-muted)]">Serving Schaumburg &amp; suburbs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(245,158,11,0.10)] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#F59E0B]" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold">Mon – Fri: 7am – 5pm</p>
                    <p className="text-[12px] text-[var(--text-muted)]">Sat: 8am – 12pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal-rise photo-slot rounded-2xl min-h-[320px]" data-label="Map / service area" />
          </div>
        </div>
      </section>

      {/* ══════ FINAL CTA ══════ */}
      <section className="py-20 md:py-28 bg-[#1A1A1A] grain text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-10 reveal">
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-semibold tracking-[-0.03em] leading-[1.06] text-white">
            Let&apos;s power your home
            <br />
            <span className="italic font-normal text-[rgba(255,255,255,0.5)]">the right way.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-[rgba(255,255,255,0.5)] max-w-lg mx-auto">
            Licensed master electricians. Permits pulled. Inspections passed. Every time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[#F59E0B] text-white text-[14px] font-semibold px-8 py-4 rounded-full hover:bg-[#D97706] transition-colors"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              {PHONE}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-[rgba(255,255,255,0.2)] text-white text-[14px] font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Free Estimate
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer className="border-t border-[var(--border-subtle)] bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 text-lg font-semibold tracking-[-0.02em] mb-3">
                <span>Volt</span>
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block" />
                <span>Electric</span>
              </div>
              <p className="text-[13px] leading-[1.7] text-[var(--text-secondary)]">
                Master electricians serving Schaumburg, IL and surrounding suburbs since 2009.
              </p>
              <p className="text-[11px] text-[var(--text-muted)] mt-2">{LICENSE}</p>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[var(--text-muted)] mb-3">
                Services
              </h4>
              <div className="space-y-2">
                {["Panel Upgrades", "EV Chargers", "Generators", "Smart Home", "Rewiring", "Troubleshooting"].map(
                  (s) => (
                    <a key={s} href="#services" className="block text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                      {s}
                    </a>
                  )
                )}
              </div>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[var(--text-muted)] mb-3">
                Service Area
              </h4>
              <div className="space-y-2">
                {["Schaumburg", "Hoffman Estates", "Elk Grove Village", "Arlington Heights", "Palatine", "Rolling Meadows"].map(
                  (a) => (
                    <p key={a} className="text-[13px] text-[var(--text-secondary)]">{a}</p>
                  )
                )}
              </div>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[var(--text-muted)] mb-3">
                Contact
              </h4>
              <div className="space-y-2">
                <a href={PHONE_HREF} className="block text-[13px] text-[var(--text-secondary)] hover:text-[#F59E0B] transition-colors">
                  {PHONE}
                </a>
                <p className="text-[13px] text-[var(--text-secondary)]">info@voltelectric.com</p>
                <p className="text-[13px] text-[var(--text-secondary)]">{ADDR}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[var(--border-subtle)] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-[var(--text-muted)]">
              &copy; {new Date().getFullYear()} {BIZ}. All rights reserved.
            </p>
            <p className="text-[11px] text-[var(--text-muted)]">
              Schaumburg, IL &middot; {LICENSE}
            </p>
          </div>
        </div>
      </footer>

      {/* ══════ MOBILE STICKY ══════ */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/90 backdrop-blur-lg border-t border-[var(--border-subtle)] px-4 py-3 flex items-center gap-3">
        <a
          href={PHONE_HREF}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F59E0B] text-white text-[14px] font-semibold py-3 rounded-full"
        >
          <Phone className="w-4 h-4" strokeWidth={2.5} />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-[var(--border-strong)] text-[var(--text-primary)] text-[14px] font-semibold py-3 rounded-full"
        >
          Free Estimate
        </a>
      </div>
    </div>
  );
}

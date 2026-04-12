import {
  Phone,
  ArrowRight,
  Sparkles,
  Shield,
  Star,
  Clock,
  CheckCircle,
  Thermometer,
  Wind,
  Snowflake,
  Sun,
  Wrench,
  Gauge,
  Zap,
  CreditCard,
  Crown,
  MapPin,
  Mail,
  ChevronRight,
  Award,
  Users,
  Flame,
  Fan,
  Droplets,
  Wifi,
  Camera,
  Quote,
  Menu,
} from "lucide-react";

/* ─── data ─── */

const NAV_LINKS = ["Services", "Systems", "Financing", "Membership", "Reviews", "Contact"];

const BRANDS = [
  { name: "Carrier", cert: "Factory Authorized Dealer", label: "Carrier logo" },
  { name: "Trane", cert: "Comfort Specialist", label: "Trane logo" },
  { name: "Lennox", cert: "Premier Dealer", label: "Lennox logo" },
  { name: "Rheem", cert: "Pro Partner", label: "Rheem logo" },
  { name: "Mitsubishi", cert: "Diamond Contractor", label: "Mitsubishi logo" },
];

const SERVICES = [
  { title: "AC Repair", desc: "Same-day diagnostics and repairs for all makes and models. We stock common parts on every truck.", icon: Snowflake, label: "Tech repairing AC unit" },
  { title: "Furnace Service", desc: "Complete furnace repair, maintenance, and safety inspections. Gas and electric systems.", icon: Flame, label: "Furnace service photo" },
  { title: "New System Install", desc: "Factory-trained installation crews. Carrier, Trane, Lennox, and more. Load calcs included.", icon: Wrench, label: "New system installation" },
  { title: "Tune-Ups & Maintenance", desc: "21-point seasonal inspections that catch problems early and keep warranties valid.", icon: Gauge, label: "Maintenance tune-up" },
  { title: "Indoor Air Quality", desc: "HEPA filtration, UV purifiers, humidifiers, and whole-home ventilation solutions.", icon: Wind, label: "Air quality testing" },
  { title: "Mini-Split Systems", desc: "Ductless heating and cooling for additions, garages, and problem rooms. Mitsubishi Diamond Contractor.", icon: Fan, label: "Mini-split installation" },
];

const TIERS = [
  {
    name: "Good",
    seer: "14 SEER",
    price: "$6,500 – $8,500",
    savings: "~$120/yr estimated savings vs 10 SEER",
    features: ["Single-stage compressor", "Standard air handler", "10-year parts warranty", "Programmable thermostat"],
    popular: false,
  },
  {
    name: "Better",
    seer: "17 SEER",
    price: "$9,500 – $12,500",
    savings: "~$280/yr estimated savings vs 10 SEER",
    features: ["Two-stage compressor", "Variable-speed blower", "10-year parts + labor warranty", "Smart thermostat included", "Whole-home dehumidification"],
    popular: true,
  },
  {
    name: "Best",
    seer: "20+ SEER",
    price: "$14,000 – $18,000",
    savings: "~$420/yr estimated savings vs 10 SEER",
    features: ["Variable-speed inverter compressor", "Modulating gas furnace", "12-year parts + labor warranty", "Smart thermostat + zoning", "HEPA filtration included", "Lifetime workmanship guarantee"],
    popular: false,
  },
];

const FINANCING = [
  { rate: "0% APR", term: "12 months", monthly: "$1,000/mo", note: "No interest if paid in full" },
  { rate: "5.9% APR", term: "60 months", monthly: "$232/mo", note: "Most popular option" },
  { rate: "9.9% APR", term: "120 months", monthly: "$158/mo", note: "Lowest monthly payment" },
];

const MEMBERSHIP_TIERS = [
  {
    name: "Silver",
    price: "$14.95/mo",
    features: ["2 tune-ups per year (spring AC + fall furnace)", "10% off all repairs", "Priority scheduling", "No overtime charges"],
  },
  {
    name: "Gold",
    price: "$24.95/mo",
    features: ["2 tune-ups per year (spring AC + fall furnace)", "15% off all repairs", "Priority + same-day scheduling", "No overtime charges", "Annual duct inspection", "Dedicated account manager"],
  },
];

const AIR_QUALITY = [
  { title: "HEPA Filtration", desc: "Hospital-grade filtration removes 99.97% of airborne particles, allergens, and pet dander.", icon: Shield, label: "HEPA filter unit" },
  { title: "UV Air Purifiers", desc: "Germicidal UV-C light neutralizes mold, bacteria, and viruses inside your ductwork.", icon: Zap, label: "UV purifier installed" },
  { title: "Whole-Home Humidifiers", desc: "Maintain optimal 40-60% humidity. Reduces dry skin, static, and protects hardwood floors.", icon: Droplets, label: "Humidifier system" },
  { title: "Smart Thermostats", desc: "Ecobee and Nest Pro installation. Zoning, scheduling, and energy reporting built in.", icon: Wifi, label: "Smart thermostat on wall" },
];

const REVIEWS = [
  { name: "Steve L.", stars: 5, text: "AC died at 3pm on the hottest day of the year. Comfort Air had a tech here by 5pm and it was running by 7. No overtime charge." },
  { name: "Maria G.", stars: 5, text: "The financing made a $14,000 Carrier system affordable. 0% for 12 months and our energy bills dropped 40%." },
  { name: "Dan K.", stars: 5, text: "Their Comfort Club membership is worth every penny. Two tune-ups a year and we haven\u2019t had a breakdown in three years." },
  { name: "Rachel T.", stars: 5, text: "They explained every option honestly. Didn\u2019t try to upsell us on a system we didn\u2019t need." },
];

/* ─── component ─── */

export default function HVACPage() {
  const P = "#0E3C6C";
  const A = "#E25822";
  const S = "rgba(226,88,34,0.08)";
  const B = "#2563EB";

  return (
    <div
      className="min-h-screen"
      style={{
        ["--brand-primary" as string]: P,
        ["--brand-accent" as string]: A,
        ["--brand-soft" as string]: S,
        ["--brand-secondary" as string]: B,
      }}
    >
      {/* ═══ 1. EMERGENCY BAR ═══ */}
      <div className="w-full py-2.5 px-4 text-center" style={{ backgroundColor: A }}>
        <p className="text-[13px] font-medium text-white tracking-wide flex items-center justify-center gap-3 flex-wrap">
          <Clock className="w-3.5 h-3.5 shrink-0" />
          <span>Same-Day Service Available — No Overtime Charges, Ever.</span>
          <a href="tel:6305550312" className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity">(630) 555-0312</a>
        </p>
      </div>

      {/* ═══ 2. NAV ═══ */}
      <nav className="w-full bg-[var(--bg-base)] border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-[20px] font-semibold tracking-[-0.02em]" style={{ color: P }}>
              Comfort Air Systems
            </span>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: A }} />
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                className="text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors link-underline"
              >
                {link}
              </a>
            ))}
          </div>
          <a
            href="tel:6305550312"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: A }}
          >
            <Phone className="w-3.5 h-3.5" />
            (630) 555-0312
          </a>
          <button className="lg:hidden p-2" aria-label="Menu">
            <Menu className="w-5 h-5" style={{ color: P }} />
          </button>
        </div>
      </nav>

      {/* ═══ 3. HERO ═══ */}
      <section className="relative grain overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4 fade-up" style={{ color: A }}>Carrier Factory Authorized Dealer</p>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold tracking-[-0.035em] leading-[0.98] fade-up-1" style={{ color: P }}>
              Comfort in
              <br />
              Every Season
            </h1>
            <p className="mt-3 text-[clamp(1.05rem,1.4vw,1.25rem)] italic font-normal text-[var(--text-secondary)] fade-up-2">
              honest pricing, certified techs.
            </p>
            <p className="mt-6 text-[15px] leading-[1.7] text-[var(--text-secondary)] max-w-lg fade-up-3">
              Aurora&apos;s trusted Carrier Factory Authorized Dealer. NATE-certified technicians, transparent pricing, and systems backed by manufacturer warranties you can actually use.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 fade-up-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-white transition-all hover:opacity-90 hover:translate-y-[-1px] shadow-lg"
                style={{ backgroundColor: A }}
              >
                Schedule Service
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#systems"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold border-2 transition-all hover:translate-y-[-1px]"
                style={{ borderColor: P, color: P }}
              >
                Get a Quote
              </a>
            </div>
            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8 fade-up-4">
              {[
                { label: "NATE Certified", icon: Shield },
                { label: "1,200+ Systems Installed", icon: CheckCircle },
                { label: "4.8\u2605 Google", icon: Star },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <stat.icon className="w-4 h-4" style={{ color: A }} />
                  <span className="text-[13px] font-medium text-[var(--text-secondary)]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Hero photo-slot */}
          <div className="photo-slot rounded-2xl aspect-[4/3] lg:aspect-[3/4]" data-label="Tech at outdoor condenser unit" />
        </div>
      </section>

      {/* ═══ 4. SEASONAL PROMO ═══ */}
      <section className="reveal">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
          <div className="rounded-2xl px-8 py-5 flex items-center justify-center gap-3 flex-wrap text-center" style={{ backgroundColor: S }}>
            <Sparkles className="w-5 h-5 shrink-0" style={{ color: A }} />
            <p className="text-[15px] font-medium" style={{ color: P }}>
              Spring AC Tune-Up Special: <span className="font-bold" style={{ color: A }}>$89 full inspection</span> — book before May.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 5. BRAND WALL ═══ */}
      <section className="py-20 md:py-28 reveal">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3" style={{ color: A }}>Factory-Authorized Dealer</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold tracking-[-0.03em]" style={{ color: P }}>
              Brands That Trust Us to Represent Them
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] p-6 flex flex-col items-center gap-4 hover:border-[var(--border-strong)] hover:shadow-lg transition-all"
              >
                <div className="photo-slot w-full aspect-[3/2] rounded-xl" data-label={brand.label} />
                <div className="text-center">
                  <p className="text-[16px] font-semibold" style={{ color: P }}>{brand.name}</p>
                  <p className="text-[12px] font-medium mt-1" style={{ color: A }}>{brand.cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. SERVICES GRID ═══ */}
      <section id="services" className="py-20 md:py-28 reveal" style={{ backgroundColor: "var(--bg-elevated)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3" style={{ color: A }}>What We Do</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold tracking-[-0.03em]" style={{ color: P }}>
              Full-Service HVAC for Every Need
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden hover:border-[var(--border-strong)] hover:shadow-lg hover:-translate-y-1 transition-all duration-500 reveal-rise"
              >
                <div className="photo-slot w-full aspect-[16/10]" data-label={svc.label} />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: S }}>
                      <svc.icon className="w-4.5 h-4.5" style={{ color: A }} />
                    </div>
                    <h3 className="text-[18px] font-semibold" style={{ color: P }}>{svc.title}</h3>
                  </div>
                  <p className="text-[14px] leading-[1.65] text-[var(--text-secondary)]">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. SYSTEM TIER CARDS ═══ */}
      <section id="systems" className="py-20 md:py-28 reveal">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3" style={{ color: A }}>New System Pricing</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold tracking-[-0.03em]" style={{ color: P }}>
              The right system
            </h2>
            <p className="text-[clamp(1.2rem,2vw,1.6rem)] italic text-[var(--text-secondary)] mt-1">
              at the right price.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className="relative bg-[var(--bg-surface)] rounded-2xl border-2 overflow-hidden hover:shadow-xl transition-all duration-500 reveal-rise"
                style={{ borderColor: tier.popular ? A : "var(--border-subtle)" }}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl text-[11px] font-bold text-white uppercase tracking-wider" style={{ backgroundColor: A }}>
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <p className="text-[13px] font-semibold uppercase tracking-wider" style={{ color: A }}>{tier.seer}</p>
                  <h3 className="text-[28px] font-bold mt-2" style={{ color: P }}>{tier.name}</h3>
                  <p className="text-[22px] font-semibold mt-3 text-[var(--text-primary)]">{tier.price}</p>
                  <p className="text-[13px] text-[var(--text-secondary)] mt-2 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" style={{ color: B }} />
                    {tier.savings}
                  </p>
                  <div className="mt-6 space-y-3">
                    {tier.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: tier.popular ? A : B }} />
                        <span className="text-[14px] text-[var(--text-secondary)]">{f}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[14px] font-semibold transition-all hover:opacity-90"
                    style={{
                      backgroundColor: tier.popular ? A : "transparent",
                      color: tier.popular ? "#fff" : P,
                      border: tier.popular ? "none" : `2px solid ${P}`,
                    }}
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8. FINANCING ═══ */}
      <section id="financing" className="py-20 md:py-28 reveal" style={{ backgroundColor: "var(--bg-elevated)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3" style={{ color: A }}>Flexible Financing</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold tracking-[-0.03em]" style={{ color: P }}>
              Payments That Fit Your Budget
            </h2>
            <p className="text-[15px] text-[var(--text-secondary)] mt-3">Monthly estimates based on a $12,000 system</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FINANCING.map((plan) => (
              <div
                key={plan.rate}
                className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] p-8 text-center hover:border-[var(--border-strong)] hover:shadow-lg transition-all reveal-rise"
              >
                <div className="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center mb-5" style={{ backgroundColor: S }}>
                  <CreditCard className="w-5 h-5" style={{ color: A }} />
                </div>
                <p className="text-[28px] font-bold" style={{ color: P }}>{plan.rate}</p>
                <p className="text-[14px] text-[var(--text-secondary)] mt-1">{plan.term}</p>
                <div className="mt-5 py-4 rounded-xl" style={{ backgroundColor: S }}>
                  <p className="text-[24px] font-bold" style={{ color: A }}>{plan.monthly}</p>
                  <p className="text-[12px] text-[var(--text-secondary)] mt-1">estimated monthly</p>
                </div>
                <p className="text-[13px] text-[var(--text-muted)] mt-4">{plan.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. COMFORT CLUB ═══ */}
      <section id="membership" className="py-20 md:py-28 reveal">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3" style={{ color: A }}>Comfort Club</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold tracking-[-0.03em]" style={{ color: P }}>
              Membership That Pays for Itself
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {MEMBERSHIP_TIERS.map((tier, i) => (
              <div
                key={tier.name}
                className="bg-[var(--bg-surface)] rounded-2xl border-2 p-8 hover:shadow-xl transition-all reveal-rise"
                style={{ borderColor: i === 1 ? A : "var(--border-subtle)" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Crown className="w-5 h-5" style={{ color: i === 1 ? A : B }} />
                  <h3 className="text-[22px] font-bold" style={{ color: P }}>{tier.name}</h3>
                </div>
                <p className="text-[32px] font-bold" style={{ color: A }}>
                  {tier.price}
                </p>
                <div className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: i === 1 ? A : B }} />
                      <span className="text-[14px] text-[var(--text-secondary)]">{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[14px] font-semibold transition-all hover:opacity-90"
                  style={{
                    backgroundColor: i === 1 ? A : "transparent",
                    color: i === 1 ? "#fff" : P,
                    border: i === 1 ? "none" : `2px solid ${P}`,
                  }}
                >
                  Join {tier.name}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 10. INDOOR AIR QUALITY ═══ */}
      <section className="py-20 md:py-28 reveal" style={{ backgroundColor: "var(--bg-elevated)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3" style={{ color: A }}>Indoor Air Quality</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold tracking-[-0.03em]" style={{ color: P }}>
              Breathe easier at home.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AIR_QUALITY.map((item) => (
              <div
                key={item.title}
                className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden hover:border-[var(--border-strong)] hover:shadow-lg transition-all reveal-rise"
              >
                <div className="photo-slot w-full aspect-[4/3]" data-label={item.label} />
                <div className="p-6">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: S }}>
                    <item.icon className="w-4.5 h-4.5" style={{ color: A }} />
                  </div>
                  <h3 className="text-[16px] font-semibold mb-2" style={{ color: P }}>{item.title}</h3>
                  <p className="text-[13px] leading-[1.65] text-[var(--text-secondary)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 11. RECENT WORK GALLERY ═══ */}
      <section className="py-20 md:py-28 reveal">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3" style={{ color: A }}>Our Work</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold tracking-[-0.03em]" style={{ color: P }}>
              Recent Installations
            </h2>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {[
              { h: "aspect-[4/3]", label: "Carrier Infinity install — Aurora" },
              { h: "aspect-[3/4]", label: "Dual-zone mini-split — Naperville" },
              { h: "aspect-[4/3]", label: "Furnace replacement — Oswego" },
              { h: "aspect-[3/4]", label: "Commercial rooftop unit — Plainfield" },
              { h: "aspect-[4/3]", label: "Ductwork redesign — Batavia" },
              { h: "aspect-[3/4]", label: "Indoor air quality upgrade — Geneva" },
            ].map((item, i) => (
              <div key={i} className={`photo-slot rounded-2xl ${item.h} break-inside-avoid`} data-label={item.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 12. ABOUT ═══ */}
      <section className="py-20 md:py-28 reveal" style={{ backgroundColor: "var(--bg-elevated)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="photo-slot rounded-2xl aspect-[4/3]" data-label="Owner and team photo" />
            <div>
              <p className="eyebrow mb-3" style={{ color: A }}>About Comfort Air Systems</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold tracking-[-0.03em]" style={{ color: P }}>
                NATE Certified. Honestly Priced.
              </h2>
              <p className="mt-6 text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                Founded in Aurora by a second-generation HVAC technician, Comfort Air Systems was built on a simple idea: charge fairly, show up on time, and never recommend a system someone doesn&apos;t need. Every technician on our team is NATE certified, drug tested, and background checked. We&apos;re a Carrier Factory Authorized Dealer, which means factory-trained installers, genuine parts, and extended warranty coverage most contractors can&apos;t offer.
              </p>
              <div className="mt-8 flex flex-wrap gap-8">
                <div>
                  <p className="text-[28px] font-bold" style={{ color: A }}>4.8<Star className="w-5 h-5 inline ml-1 -mt-1" style={{ color: A }} /></p>
                  <p className="text-[13px] text-[var(--text-muted)] mt-1">Google Rating</p>
                </div>
                <div>
                  <p className="text-[28px] font-bold" style={{ color: P }}>198</p>
                  <p className="text-[13px] text-[var(--text-muted)] mt-1">Reviews</p>
                </div>
                <div>
                  <p className="text-[28px] font-bold" style={{ color: P }}>1,200+</p>
                  <p className="text-[13px] text-[var(--text-muted)] mt-1">Systems Installed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 13. REVIEWS ═══ */}
      <section id="reviews" className="py-20 md:py-28 reveal">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3" style={{ color: A }}>Testimonials</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold tracking-[-0.03em]" style={{ color: P }}>
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] p-8 hover:border-[var(--border-strong)] hover:shadow-lg transition-all reveal-rise"
              >
                <Quote className="w-8 h-8 mb-4" style={{ color: S.replace("0.08", "0.3") }} />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#FBBF24" }} />
                  ))}
                </div>
                <p className="text-[15px] leading-[1.7] text-[var(--text-secondary)] mb-5">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-[14px] font-semibold" style={{ color: P }}>{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 14. CONTACT ═══ */}
      <section id="contact" className="py-20 md:py-28 reveal" style={{ backgroundColor: "var(--bg-elevated)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="eyebrow mb-3" style={{ color: A }}>Contact Us</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold tracking-[-0.03em]" style={{ color: P }}>
                Get in Touch
              </h2>
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: S }}>
                    <MapPin className="w-5 h-5" style={{ color: A }} />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold" style={{ color: P }}>Address</p>
                    <p className="text-[14px] text-[var(--text-secondary)] mt-0.5">234 Commerce Dr, Aurora, IL 60502</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: S }}>
                    <Phone className="w-5 h-5" style={{ color: A }} />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold" style={{ color: P }}>Phone</p>
                    <a href="tel:6305550312" className="text-[14px] text-[var(--text-secondary)] mt-0.5 link-underline">(630) 555-0312</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: S }}>
                    <Mail className="w-5 h-5" style={{ color: A }} />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold" style={{ color: P }}>Email</p>
                    <p className="text-[14px] text-[var(--text-secondary)] mt-0.5">service@comfortairsystems.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: S }}>
                    <Clock className="w-5 h-5" style={{ color: A }} />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold" style={{ color: P }}>Hours</p>
                    <p className="text-[14px] text-[var(--text-secondary)] mt-0.5">24/7 Emergency Service</p>
                    <p className="text-[13px] text-[var(--text-muted)]">Office: Mon-Fri 7am-6pm, Sat 8am-2pm</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Map placeholder */}
            <div className="photo-slot rounded-2xl aspect-[4/3] lg:aspect-auto lg:min-h-[400px]" data-label="Google Maps — 234 Commerce Dr, Aurora IL" />
          </div>
        </div>
      </section>

      {/* ═══ 15. CTA ═══ */}
      <section className="py-20 md:py-28 grain reveal" style={{ backgroundColor: P }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-[-0.03em] leading-[1.05] text-white">
            Too hot? Too cold?
          </h2>
          <p className="text-[clamp(1.2rem,2.5vw,1.8rem)] italic text-white/60 mt-2">
            We&apos;re on it.
          </p>
          <a
            href="tel:6305550312"
            className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold text-white transition-all hover:opacity-90 hover:translate-y-[-1px] shadow-xl"
            style={{ backgroundColor: A }}
          >
            <Phone className="w-4 h-4" />
            Call (630) 555-0312
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ═══ 16. FOOTER ═══ */}
      <footer className="border-t border-[var(--border-subtle)] py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[18px] font-semibold" style={{ color: P }}>Comfort Air Systems</span>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: A }} />
              </div>
              <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)] max-w-sm">
                Carrier Factory Authorized Dealer serving Aurora, Naperville, Oswego, Plainfield, and the greater Fox Valley area.
              </p>
              <p className="text-[13px] text-[var(--text-muted)] mt-4">IL License #055-XXXXXX</p>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wider mb-4" style={{ color: P }}>Services</p>
              <div className="space-y-2.5">
                {["AC Repair", "Furnace Service", "New Systems", "Tune-Ups", "Air Quality", "Mini-Splits"].map((s) => (
                  <a key={s} href="#services" className="block text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">{s}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wider mb-4" style={{ color: P }}>Company</p>
              <div className="space-y-2.5">
                {["About", "Reviews", "Financing", "Comfort Club", "Careers", "Contact"].map((s) => (
                  <a key={s} href={`#${s.toLowerCase().replace(/ /g, "-")}`} className="block text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">{s}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[12px] text-[var(--text-muted)]">
              &copy; 2026 Comfort Air Systems. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service"].map((link) => (
                <a key={link} href="#" className="text-[12px] text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ═══ MOBILE STICKY BAR ═══ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-3 flex items-center justify-between gap-3">
        <a
          href="tel:6305550312"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-[14px] font-semibold text-white"
          style={{ backgroundColor: A }}
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-[14px] font-semibold border-2"
          style={{ borderColor: P, color: P }}
        >
          Get a Quote
        </a>
      </div>

      {/* Bottom padding for mobile sticky bar */}
      <div className="h-20 md:h-0" />
    </div>
  );
}

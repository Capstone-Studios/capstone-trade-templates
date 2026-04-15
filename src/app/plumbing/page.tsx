import {
  AlertCircle,
  Phone,
  Shield,
  Clock,
  Truck,
  Star,
  Droplets,
  Wrench,
  Flame,
  Search,
  PipetteIcon,
  ShowerHead,
  MapPin,
  Mail,
  ChevronRight,
  CheckCircle2,
  BadgeCheck,
  Zap,
  ArrowRight,
  Menu,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blue Line Plumbing | 24/7 Emergency Plumber Naperville, IL",
  description:
    "Naperville's trusted plumber — 32-min avg response, flat-rate pricing, master plumber licensed. Emergency plumbing 24/7. Call (630) 555-0187.",
};

const PHONE = "(630) 555-0187";
const PHONE_TEL = "tel:6305550187";

const PRICES = [
  { service: "Service Call", price: "$89", desc: "Diagnostic visit — credited toward any repair we perform same-day." },
  { service: "Drain Cleaning", price: "$295", desc: "Main line or secondary. Snaking, hydro-jetting, camera verification." },
  { service: "Water Heater Install", price: "$1,850", desc: "50-gal tank or tankless conversion. Permit, haul-away, 6-yr warranty." },
  { service: "Faucet Replacement", price: "$385", desc: "Supply your own or choose from our truck stock. Includes shut-off valve check." },
  { service: "Toilet Repair", price: "$195", desc: "Fill valve, flapper, wax ring, or full rebuild. Parts included." },
  { service: "Sewer Camera Inspection", price: "$295", desc: "HD sewer camera with recorded footage. USB copy for your records." },
];

const SERVICES = [
  { title: "Emergency Plumbing", desc: "Burst pipes, sewer backups, no hot water, gas leaks — we roll trucks 24/7/365 with 32-min average response across Naperville.", label: "Emergency dispatch · 800×600" },
  { title: "Drain Cleaning", desc: "Stubborn clogs, slow drains, gurgling pipes. We use hydro-jetting and motorized snakes — no harsh chemicals that damage your pipes.", label: "Hydro-jet clearing · 800×600" },
  { title: "Water Heaters", desc: "Tank and tankless installs, repairs, and maintenance. We carry Bradford White, Rinnai, and Navien on every truck.", label: "Water heater install · 800×600" },
  { title: "Leak Detection", desc: "Non-invasive acoustic and thermal leak detection. We find the leak without tearing up your walls or foundation.", label: "Thermal imaging · 800×600" },
  { title: "Repipe & Replace", desc: "Whole-home copper and PEX repiping. We work room-by-room to minimize disruption — most homes done in 2 days.", label: "Copper repipe · 800×600" },
  { title: "Fixture Install", desc: "Sinks, faucets, toilets, garbage disposals, dishwashers, ice makers. We install anything that connects to a water line.", label: "Fixture installation · 800×600" },
];

const SERVICE_AREAS = [
  "Naperville", "Aurora", "Lisle", "Wheaton", "Glen Ellyn",
  "Warrenville", "Winfield", "West Chicago", "Bolingbrook", "Plainfield",
  "Oswego", "Yorkville", "Downers Grove", "Woodridge",
];

const MEMBERSHIPS = [
  {
    name: "Drip Club",
    price: "$9.95",
    color: "#0C2340",
    features: ["1 maintenance visit/yr", "10% off all repairs", "Priority scheduling", "No overtime charges"],
  },
  {
    name: "Pipe Pro",
    price: "$19.95",
    color: "#D62828",
    popular: true,
    features: ["2 maintenance visits/yr", "15% off all repairs", "Priority + same-day", "No overtime charges", "Free camera inspection"],
  },
  {
    name: "Platinum",
    price: "$29.95",
    color: "#F5A623",
    features: ["4 maintenance visits/yr", "20% off all repairs", "Priority + guaranteed 2hr", "No overtime charges", "Free camera inspection", "Water heater flush included"],
  },
];

const REVIEWS = [
  { name: "Tom K.", text: "Called at 2am with a burst pipe. Derek showed up in 28 minutes — in uniform, with shoe covers, and fixed it before my kids woke up." },
  { name: "Amanda S.", text: "The flat-rate pricing is exactly what it says. No surprises. The tech showed me the price book before starting." },
  { name: "James P.", text: "Had three plumbers quote my water heater. Blue Line was the most honest about what I actually needed." },
  { name: "Lisa M.", text: "Their membership saved us $400 this year. Priority scheduling means they come the same day." },
];

export default function PlumbingPage() {
  return (
    <div
      style={{
        "--bg-base": "#F0F4F8",
        "--bg-surface": "#FFFFFF",
        "--bg-elevated": "#E8EEF4",
        "--bg-contrast": "#0C2340",
        "--brand-primary": "#0C2340",
        "--brand-accent": "#D62828",
        "--brand-soft": "rgba(214,40,40,0.08)",
        "--text-primary": "#0C2340",
        "--text-secondary": "rgba(12,35,64,0.68)",
        "--text-muted": "rgba(12,35,64,0.42)",
        "--text-inverse": "#F0F4F8",
        "--border-subtle": "rgba(12,35,64,0.08)",
        "--border-medium": "rgba(12,35,64,0.14)",
        "--border-strong": "rgba(12,35,64,0.22)",
      } as React.CSSProperties}
      className="min-h-screen bg-[var(--bg-base)]"
    >
      {/* ═══════════════════════════════════════════════════════
          1. STICKY 24/7 EMERGENCY BAR
      ═══════════════════════════════════════════════════════ */}
      <div className="sticky top-0 z-50 bg-[#D62828] text-white">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 text-[13px] md:text-[14px] font-medium tracking-wide">
          <AlertCircle className="w-4 h-4 shrink-0 animate-pulse" />
          <span>24/7 Emergency Plumbing — Real people answering right now.</span>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 rounded-full px-4 py-1 text-[13px] font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            {PHONE}
          </a>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          2. NAV
      ═══════════════════════════════════════════════════════ */}
      <nav className="bg-[var(--bg-base)] border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-[72px]">
          <Link href="/plumbing" className="flex items-center gap-2">
            <span className="text-[20px] md:text-[22px] font-bold tracking-[-0.03em] text-[var(--brand-primary)]">
              Blue Line
            </span>
            <span className="w-2 h-2 rounded-full bg-[#D62828] -ml-0.5 mt-0.5" />
            <span className="text-[20px] md:text-[22px] font-light tracking-[-0.02em] text-[var(--text-secondary)]">
              Plumbing
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[var(--text-secondary)]">
            <a href="#pricing" className="link-underline hover:text-[var(--brand-primary)] transition-colors">Pricing</a>
            <a href="#services" className="link-underline hover:text-[var(--brand-primary)] transition-colors">Services</a>
            <a href="#membership" className="link-underline hover:text-[var(--brand-primary)] transition-colors">Membership</a>
            <a href="#about" className="link-underline hover:text-[var(--brand-primary)] transition-colors">About</a>
            <a href="#reviews" className="link-underline hover:text-[var(--brand-primary)] transition-colors">Reviews</a>
            <a href="#contact" className="link-underline hover:text-[var(--brand-primary)] transition-colors">Contact</a>
          </div>

          <a
            href={PHONE_TEL}
            className="bg-[#D62828] hover:bg-[#b82222] text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-red-900/20"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════
          3. HERO — Dispatch-ops tactical
      ═══════════════════════════════════════════════════════ */}
      <section className="relative grain overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="eyebrow mb-5 fade-up text-[#D62828]">Naperville, IL &mdash; Dispatch Active</p>

              {/* Big phone number treatment */}
              <div className="fade-up-1 mb-2">
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-2 text-[clamp(1.1rem,2vw,1.4rem)] font-mono font-bold text-[#D62828] tracking-wide hover:underline"
                >
                  <Phone className="w-5 h-5" />
                  {PHONE}
                </a>
              </div>

              <h1 className="text-[clamp(2.8rem,6.5vw,5.2rem)] font-bold tracking-[-0.04em] leading-[0.95] text-[var(--brand-primary)] fade-up-1">
                Plumbers Naperville
                <br />
                Trusts
              </h1>
              <p className="mt-2 text-[clamp(1.2rem,2.5vw,1.8rem)] italic font-light text-[var(--text-secondary)] fade-up-2">
                day or night, 365 days a year.
              </p>
              <p className="mt-6 text-[clamp(0.95rem,1.2vw,1.1rem)] leading-[1.7] text-[var(--text-secondary)] max-w-xl fade-up-2">
                Fast dispatch. Honest diagnosis. Upfront, published pricing — you see the price book before we start.
                Master plumber-led crews with background checks, shoe covers, and drop cloths. Every time.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mt-8 fade-up-3">
                <a
                  href={PHONE_TEL}
                  className="bg-[#D62828] hover:bg-[#b82222] text-white font-semibold px-8 py-4 rounded-lg text-[15px] flex items-center gap-2 transition-colors shadow-xl shadow-red-900/20"
                >
                  <Phone className="w-5 h-5" />
                  Call Now — 24/7
                </a>
                <a
                  href="#pricing"
                  className="border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white font-semibold px-8 py-4 rounded-lg text-[15px] flex items-center gap-2 transition-colors"
                >
                  See Our Rates
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust stats */}
              <div className="flex flex-wrap gap-6 md:gap-10 mt-10 fade-up-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#D62828]" />
                  <div>
                    <div className="text-[20px] font-bold font-mono text-[var(--brand-primary)]">32 min</div>
                    <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider">avg response</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#D62828]" />
                  <div>
                    <div className="text-[20px] font-bold font-mono text-[var(--brand-primary)]">12</div>
                    <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider">trucks on the road</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#F5A623]" fill="#F5A623" />
                  <div>
                    <div className="text-[20px] font-bold font-mono text-[var(--brand-primary)]">4.8★</div>
                    <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider">on Google</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero photo */}
            <div
              className="photo-slot rounded-2xl aspect-[4/5] lg:aspect-[3/4]"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. TRUST STRIP
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[var(--brand-primary)] text-white/80 py-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] md:text-[13px] font-medium tracking-wide uppercase">
          {[
            "Master Plumber License #058-123456",
            "PHCC Member",
            "A+ BBB Rated",
            "Background Checked Crews",
            "Shoe Covers Always",
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/30">·</span>}
              <BadgeCheck className="w-4 h-4 text-[#F5A623]" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. FLAT-RATE PRICING MENU
      ═══════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 reveal">
            <p className="eyebrow mb-3 text-[#D62828]">Published Prices</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-[-0.035em] text-[var(--brand-primary)]">
              Honest, Published Prices
            </h2>
            <p className="text-[clamp(1.1rem,1.6vw,1.4rem)] italic font-light text-[var(--text-secondary)] mt-1">
              no surprises, ever.
            </p>
            <p className="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto text-[15px] leading-relaxed">
              Every tech carries the same price book. You see it before we start.
              These are real prices — not &ldquo;starting at&rdquo; bait.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRICES.map((item, i) => (
              <div
                key={i}
                className="reveal-rise bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] p-7 hover:border-[var(--border-strong)] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-[13px] font-semibold text-[var(--brand-primary)] uppercase tracking-wider mb-3">
                  {item.service}
                </div>
                <div
                  className="text-[clamp(2.2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-[#D62828] leading-none mb-3"
                  style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
                >
                  {item.price}
                </div>
                <p className="text-[13px] leading-[1.6] text-[var(--text-secondary)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-[12px] text-[var(--text-muted)] uppercase tracking-wider">
            All prices include parts & labor unless noted · No overtime surcharges for members
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. SERVICES GRID
      ═══════════════════════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 bg-[var(--bg-elevated)] grain">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 reveal">
            <p className="eyebrow mb-3 text-[#D62828]">What We Do</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-[-0.035em] text-[var(--brand-primary)]">
              Full-Service Plumbing
            </h2>
            <p className="text-[clamp(1.1rem,1.6vw,1.4rem)] italic font-light text-[var(--text-secondary)] mt-1">
              residential &amp; light commercial.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className="reveal-rise bg-[var(--bg-surface)] rounded-xl overflow-hidden border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:shadow-lg transition-all duration-300"
              >
                <div className="photo-slot aspect-[4/3]" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format)`, backgroundSize: "cover", backgroundPosition: "center" }} />
                <div className="p-6">
                  <h3 className="text-[17px] font-bold text-[var(--brand-primary)] mb-2">{svc.title}</h3>
                  <p className="text-[13px] leading-[1.65] text-[var(--text-secondary)]">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. RESPONSE ZONE
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 reveal">
            <p className="eyebrow mb-3 text-[#D62828]">Coverage Area</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-[-0.035em] text-[var(--brand-primary)]">
              Are we near you?
            </h2>
          </div>

          <div className="reveal-rise mb-10">
            <div
              className="photo-slot rounded-2xl aspect-[2/1] w-full"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 mb-8 reveal">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-full px-4 py-1.5 text-[13px] font-medium text-[var(--brand-primary)] hover:border-[#D62828] hover:bg-[var(--brand-soft)] transition-colors cursor-default"
              >
                <MapPin className="w-3 h-3 inline-block mr-1 -mt-0.5 text-[#D62828]" />
                {area}
              </span>
            ))}
          </div>

          <p className="text-center text-[14px] text-[var(--text-secondary)] reveal">
            <span className="font-medium text-[var(--brand-primary)]">Enter your ZIP to check coverage.</span>{" "}
            Call us at{" "}
            <a href={PHONE_TEL} className="text-[#D62828] font-semibold hover:underline">{PHONE}</a>{" "}
            and we&apos;ll confirm in seconds.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          8. MEMBERSHIP TIERS
      ═══════════════════════════════════════════════════════ */}
      <section id="membership" className="py-24 md:py-32 bg-[var(--bg-elevated)] grain">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 reveal">
            <p className="eyebrow mb-3 text-[#D62828]">Membership Plans</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-[-0.035em] text-[var(--brand-primary)]">
              Join the Club
            </h2>
            <p className="text-[clamp(1.1rem,1.6vw,1.4rem)] italic font-light text-[var(--text-secondary)] mt-1">
              priority service, real savings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {MEMBERSHIPS.map((tier, i) => (
              <div
                key={i}
                className={`reveal-rise bg-[var(--bg-surface)] rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-xl ${
                  tier.popular
                    ? "border-[#D62828] shadow-lg scale-[1.02] relative"
                    : "border-[var(--border-subtle)] hover:border-[var(--border-strong)]"
                }`}
              >
                {/* Colored top border */}
                <div className="h-1.5" style={{ backgroundColor: tier.color }} />
                {tier.popular && (
                  <div className="bg-[#D62828] text-white text-[11px] font-bold uppercase tracking-widest text-center py-1.5">
                    Most Popular
                  </div>
                )}
                <div className="p-7">
                  <h3 className="text-[18px] font-bold text-[var(--brand-primary)] mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-5">
                    <span
                      className="text-[32px] font-bold text-[#D62828]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {tier.price}
                    </span>
                    <span className="text-[13px] text-[var(--text-muted)]">/mo</span>
                  </div>
                  <ul className="space-y-2.5">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-[13px] text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#D62828]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={PHONE_TEL}
                    className={`mt-6 block text-center font-semibold text-[14px] py-3 rounded-lg transition-colors ${
                      tier.popular
                        ? "bg-[#D62828] text-white hover:bg-[#b82222]"
                        : "border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white"
                    }`}
                  >
                    Join Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          9. ABOUT
      ═══════════════════════════════════════════════════════ */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal-rise">
              <div
                className="photo-slot rounded-2xl aspect-[4/3]"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
              />
            </div>
            <div className="reveal">
              <p className="eyebrow mb-4 text-[#D62828]">About Blue Line</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-[-0.035em] text-[var(--brand-primary)] leading-tight">
                Upfront pricing.
                <br />
                Real humans.
                <br />
                Real fast.
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                <p>
                  Blue Line Plumbing started in a single truck in 2009. Today we run 12 fully-stocked
                  service vehicles across the western suburbs — but we still answer our own phones.
                </p>
                <p>
                  Every technician is a <span className="font-semibold text-[var(--brand-primary)]">W-2 employee</span>,
                  not a subcontractor. Every crew is led by a <span className="font-semibold text-[var(--brand-primary)]">master plumber</span>.
                  Background checked, drug tested, and trained on our flat-rate system so there are
                  never any surprises on your invoice.
                </p>
                <p>
                  We publish our prices because we believe you shouldn&apos;t need three quotes to know
                  if you&apos;re getting a fair deal. You are.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-[var(--brand-soft)] rounded-lg px-5 py-3 text-center">
                  <div className="text-[22px] font-bold font-mono text-[#D62828]">15+</div>
                  <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Years in business</div>
                </div>
                <div className="bg-[var(--brand-soft)] rounded-lg px-5 py-3 text-center">
                  <div className="text-[22px] font-bold font-mono text-[#D62828]">12</div>
                  <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Service trucks</div>
                </div>
                <div className="bg-[var(--brand-soft)] rounded-lg px-5 py-3 text-center">
                  <div className="text-[22px] font-bold font-mono text-[#D62828]">28</div>
                  <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Employees</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          10. REVIEWS
      ═══════════════════════════════════════════════════════ */}
      <section id="reviews" className="py-24 md:py-32 bg-[var(--bg-elevated)] grain">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 reveal">
            <p className="eyebrow mb-3 text-[#D62828]">Reviews</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-[-0.035em] text-[var(--brand-primary)]">
              4.8 Stars — 234 Reviews
            </h2>
            <p className="text-[clamp(1.1rem,1.6vw,1.4rem)] italic font-light text-[var(--text-secondary)] mt-1">
              real customers, unfiltered.
            </p>
          </div>

          {/* Featured review */}
          <div className="reveal-rise bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] p-8 md:p-10 mb-6 shadow-sm">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#F5A623]" fill="#F5A623" />
              ))}
            </div>
            <blockquote className="text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.6] text-[var(--brand-primary)] font-medium italic">
              &ldquo;{REVIEWS[0].text}&rdquo;
            </blockquote>
            <div className="mt-4 text-[13px] font-semibold text-[var(--text-secondary)]">{REVIEWS[0].name}</div>
          </div>

          {/* Supporting reviews */}
          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.slice(1).map((review, i) => (
              <div
                key={i}
                className="reveal-rise bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] p-6"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-[#F5A623]" fill="#F5A623" />
                  ))}
                </div>
                <p className="text-[14px] leading-[1.6] text-[var(--text-secondary)] italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-3 text-[12px] font-semibold text-[var(--brand-primary)]">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          11. CONTACT
      ═══════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 reveal">
            <p className="eyebrow mb-3 text-[#D62828]">Contact</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-[-0.035em] text-[var(--brand-primary)]">
              Get In Touch
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="reveal space-y-6">
              <a
                href={PHONE_TEL}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#D62828] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-0.5">Phone — 24/7</div>
                  <div
                    className="text-[clamp(1.4rem,3vw,2rem)] font-bold font-mono text-[var(--brand-primary)] group-hover:text-[#D62828] transition-colors"
                  >
                    {PHONE}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-[16px] font-medium text-[var(--brand-primary)]">service@bluelineplumbing.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-0.5">Address</div>
                  <div className="text-[16px] font-medium text-[var(--brand-primary)]">789 Main St, Naperville, IL 60540</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-0.5">Hours</div>
                  <div className="text-[16px] font-medium text-[var(--brand-primary)]">24/7 Emergency</div>
                  <div className="text-[13px] text-[var(--text-secondary)]">Office: Mon&ndash;Fri 7am&ndash;7pm, Sat 8am&ndash;4pm</div>
                </div>
              </div>
            </div>

            <div className="reveal-rise">
              <div
                className="photo-slot rounded-2xl aspect-[4/3] w-full"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          12. CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[var(--brand-primary)] grain text-white text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-10 reveal">
          <h2 className="text-[clamp(2rem,5vw,3.4rem)] font-bold tracking-[-0.035em] leading-tight">
            Got a plumbing emergency?
          </h2>
          <p className="mt-3 text-[clamp(1.1rem,2vw,1.5rem)] italic text-[#F5A623]">
            We&apos;re 32 minutes away.
          </p>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 mt-8 bg-[#D62828] hover:bg-[#b82222] text-white font-semibold px-10 py-4 rounded-lg text-[16px] transition-colors shadow-xl shadow-red-900/30"
          >
            <Phone className="w-5 h-5" />
            Call {PHONE} — 24/7
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          13. FOOTER
      ═══════════════════════════════════════════════════════ */}
      <footer className="bg-[#071628] text-white/60 py-14">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[18px] font-bold text-white">Blue Line</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
                <span className="text-[18px] font-light text-white/50">Plumbing</span>
              </div>
              <p className="text-[13px] leading-relaxed">
                Master plumber-led crews serving Naperville &amp; the western suburbs since 2009.
              </p>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-2 text-[13px]">
                <li><a href="#services" className="hover:text-white transition-colors">Emergency Plumbing</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Drain Cleaning</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Water Heaters</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Leak Detection</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2 text-[13px]">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#membership" className="hover:text-white transition-colors">Membership</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-2 text-[13px]">
                <li><a href={PHONE_TEL} className="hover:text-white transition-colors">{PHONE}</a></li>
                <li>service@bluelineplumbing.com</li>
                <li>789 Main St, Naperville, IL 60540</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-wrap items-center justify-between gap-4 text-[12px]">
            <p>&copy; {new Date().getFullYear()} Blue Line Plumbing. All rights reserved.</p>
            <p>Master Plumber License #058-123456 &middot; Naperville, IL</p>
          </div>
        </div>
      </footer>

      {/* ═══════════════════════════════════════════════════════
          MOBILE STICKY CTA
      ═══════════════════════════════════════════════════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#D62828] safe-area-bottom">
        <a
          href={PHONE_TEL}
          className="flex items-center justify-center gap-2 text-white font-semibold text-[15px] py-4"
        >
          <Phone className="w-5 h-5" />
          Call Now — 24/7 Emergency
        </a>
      </div>
    </div>
  );
}

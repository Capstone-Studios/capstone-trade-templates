import {
  Wrench,
  Tv,
  ShowerHead,
  Clock,
  Shield,
  Star,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  CheckCircle2,
  BadgeCheck,
  ArrowRight,
  Menu,
  CalendarCheck,
  Hammer,
  DoorOpen,
  Paintbrush,
  MonitorSmartphone,
  Thermometer,
  Fan,
  BookOpen,
  Users,
  FileText,
  Home,
  Bookmark,
  Award,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FixRight Handyman | Flat-Rate Handyman Service Arlington Heights, IL",
  description:
    "Arlington Heights' trusted handyman — flat-rate pricing, same-week scheduling, background-checked employees. Book online today. (847) 555-0891.",
};

const PHONE = "(847) 555-0891";
const PHONE_TEL = "tel:8475550891";

/* ── Color overrides ── */
const navy = "#0F172A";
const orange = "#EA580C";
const orangeSoft = "rgba(234,88,12,0.08)";
const green = "#16A34A";
const bone = "#FAF9F7";
const orangeHover = "#C2410C";

/* ── Service Menu ── */
const INTERIOR_FIXES = [
  { name: "Drywall Patch & Paint", price: "$125", time: "1–2 hrs" },
  { name: "Door Repair / Adjustment", price: "$95", time: "45–90 min" },
  { name: "Caulking & Sealing", price: "$85", time: "30–60 min" },
  { name: "Squeaky Floor Fix", price: "$115", time: "1–2 hrs" },
];

const MOUNTING = [
  { name: "TV Mounting (up to 65\")", price: "$149", time: "1–1.5 hrs" },
  { name: "Shelf / Mirror Install", price: "$95", time: "30–60 min" },
  { name: "Ceiling Fan Install", price: "$175", time: "1.5–2 hrs" },
  { name: "Smart Thermostat Install", price: "$125", time: "45–90 min" },
];

const BATHROOM = [
  { name: "Faucet Replacement", price: "$185", time: "1–2 hrs" },
  { name: "Toilet Repair", price: "$145", time: "1–1.5 hrs" },
  { name: "Caulk & Grout Refresh", price: "$165", time: "1.5–2 hrs" },
  { name: "Shower Door Install", price: "$225", time: "2–3 hrs" },
];

const TIME_PACKAGES = [
  {
    name: "Hourly",
    price: "$85",
    unit: "/hr",
    desc: "1-hour minimum",
    best: "Best for quick, single fixes under an hour.",
    popular: false,
  },
  {
    name: "Half-Day",
    price: "$325",
    unit: "",
    desc: "Up to 4 hours",
    best: "Best for a short to-do list — 3 to 5 fixes.",
    popular: true,
  },
  {
    name: "Full Day",
    price: "$625",
    unit: "",
    desc: "Up to 8 hours",
    best: "Best for move-in prep, renovation punch lists, or a long honey-do list.",
    popular: false,
  },
];

const MEMBERSHIPS = [
  {
    name: "Basic",
    price: "$14.95",
    features: [
      "2 maintenance visits/yr",
      "10% off parts",
      "Priority scheduling",
    ],
  },
  {
    name: "Plus",
    price: "$24.95",
    popular: true,
    features: [
      "4 maintenance visits/yr",
      "15% off parts",
      "Priority + same-day",
      "Annual home inspection",
    ],
  },
  {
    name: "Pro",
    price: "$39.95",
    features: [
      "6 maintenance visits/yr",
      "20% off parts",
      "Priority + same-day",
      "Annual inspection + seasonal prep",
    ],
  },
];

const REVIEWS = [
  {
    name: "Janet M.",
    stars: 5,
    text: "Booked online Tuesday, they came Thursday. Mounted two TVs and fixed a squeaky door in under 3 hours. Flat-rate, no surprises.",
  },
  {
    name: "Derek K.",
    stars: 5,
    text: "Their membership saves us calling random handymen. Same guy comes every time, knows our house, and always does clean work.",
  },
  {
    name: "Pam S.",
    stars: 5,
    text: "We manage 12 rental units. FixRight handles all our tenant maintenance requests. The monthly reports are a godsend.",
  },
  {
    name: "Chris L.",
    stars: 5,
    text: "Assembled an entire IKEA kitchen in one day. $625 flat rate, done perfectly. Would have taken me a week and three arguments.",
  },
];

const GALLERY = [
  "TV mount installation · 400×300",
  "Shelf install · 400×300",
  "Drywall patch & paint · 400×300",
  "Faucet replacement · 400×300",
  "Fence repair · 400×300",
  "Furniture assembly · 400×300",
];

const TRUST_ITEMS = [
  "Employees, Not Subs",
  "Background Checked",
  "Drug Tested",
  "Bonded & Insured",
  "1-Year Done Right Guarantee",
];

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Membership", href: "#membership" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

/* ── Helpers ── */
function StarRow({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill={orange} stroke={orange} />
      ))}
    </span>
  );
}

function ServiceCard({ name, price, time }: { name: string; price: string; time: string }) {
  return (
    <div
      className="reveal-rise rounded-xl p-6 flex flex-col gap-2"
      style={{ background: "#fff", border: `1px solid rgba(15,23,42,0.08)` }}
    >
      <p className="text-sm font-medium" style={{ color: navy }}>{name}</p>
      <p className="text-2xl font-bold tracking-tight" style={{ color: orange }}>{price}</p>
      <p className="text-xs" style={{ color: "rgba(15,23,42,0.5)" }}>
        <Clock size={11} className="inline mr-1 -mt-px" />
        {time}
      </p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-3"
      style={{ color: orange }}
    >
      {children}
    </p>
  );
}

/* ══════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════ */
export default function HandymanPage() {
  return (
    <div
      style={{
        "--bg-base": bone,
        "--bg-surface": "#FFFFFF",
        "--bg-elevated": "#F4F2EE",
        "--brand-primary": navy,
        "--brand-accent": orange,
        "--brand-soft": orangeSoft,
        "--text-primary": navy,
        "--text-secondary": "rgba(15,23,42,0.68)",
        "--text-muted": "rgba(15,23,42,0.42)",
        "--text-inverse": bone,
        "--border-subtle": "rgba(15,23,42,0.08)",
        "--border-medium": "rgba(15,23,42,0.14)",
      } as React.CSSProperties}
    >
      {/* ── NAV ── */}
      <nav
        className="fixed top-0 inset-x-0 z-50 backdrop-blur-md"
        style={{ background: "rgba(250,249,247,0.92)", borderBottom: "1px solid rgba(15,23,42,0.06)" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
          <Link href="#" className="flex items-center gap-1.5 font-bold text-lg tracking-tight" style={{ color: navy }}>
            Fix<span style={{ color: orange }}>Right</span>
            <span className="w-1.5 h-1.5 rounded-full inline-block -mt-2" style={{ background: orange }} />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium transition-colors hover:opacity-70"
                style={{ color: navy }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#book"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all hover:opacity-90"
              style={{ background: orange, color: "#fff" }}
            >
              <CalendarCheck size={15} />
              Book Online
            </Link>
            <button className="md:hidden p-2" aria-label="Menu">
              <Menu size={22} style={{ color: navy }} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Arlington Heights Handyman</SectionLabel>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.08] fade-up" style={{ color: navy }}>
              Your Handyman<br />
              <span className="italic font-normal" style={{ color: "rgba(15,23,42,0.42)" }}>
                in Arlington Heights.
              </span>
            </h1>
            <p className="mt-2 text-lg italic fade-up-1" style={{ color: "rgba(15,23,42,0.42)" }}>
              one call, dozens of fixes.
            </p>
            <p className="mt-6 text-base leading-relaxed max-w-lg fade-up-2" style={{ color: "rgba(15,23,42,0.68)" }}>
              Flat-rate pricing on every service. Same-week scheduling. Background-checked,
              drug-tested employees — never subcontractors. Your home deserves better than
              &ldquo;some guy from the internet.&rdquo;
            </p>

            <div className="flex flex-wrap gap-3 mt-8 fade-up-3">
              <Link
                href="#book"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: orange, color: "#fff" }}
              >
                <CalendarCheck size={16} />
                Book Online
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
                style={{ border: `1.5px solid ${navy}`, color: navy }}
              >
                See Service Menu
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-10 fade-up-4">
              {["Employees, Not Subs", "Background Checked", "1-Year Guarantee", "Same-Week Scheduling"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "rgba(15,23,42,0.55)" }}>
                  <CheckCircle2 size={13} style={{ color: green }} />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Photo slot */}
          <div
            className="photo-slot rounded-2xl aspect-[4/5] lg:aspect-[3/4] fade-up-2"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
          />
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section style={{ background: navy }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {TRUST_ITEMS.map((item) => (
            <span key={item} className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase" style={{ color: "rgba(250,249,247,0.85)" }}>
              <Shield size={13} style={{ color: orange }} />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── FLAT-RATE SERVICE MENU ── */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Flat-Rate Pricing</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight reveal" style={{ color: navy }}>
            Honest pricing<br />
            <span className="italic font-normal" style={{ color: "rgba(15,23,42,0.42)" }}>
              for every fix.
            </span>
          </h2>
          <p className="mt-4 text-base max-w-xl reveal" style={{ color: "rgba(15,23,42,0.6)" }}>
            No hourly surprises. Every service has a flat rate — you know the price before we start.
          </p>

          {/* Interior Fixes */}
          <div className="mt-16">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 reveal" style={{ color: navy }}>
              <Paintbrush size={15} className="inline mr-2 -mt-0.5" style={{ color: orange }} />
              Interior Fixes
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {INTERIOR_FIXES.map((s) => <ServiceCard key={s.name} {...s} />)}
            </div>
          </div>

          {/* Mounting & Installation */}
          <div className="mt-14">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 reveal" style={{ color: navy }}>
              <Tv size={15} className="inline mr-2 -mt-0.5" style={{ color: orange }} />
              Mounting & Installation
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {MOUNTING.map((s) => <ServiceCard key={s.name} {...s} />)}
            </div>
          </div>

          {/* Bathroom Fixes */}
          <div className="mt-14">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 reveal" style={{ color: navy }}>
              <ShowerHead size={15} className="inline mr-2 -mt-0.5" style={{ color: orange }} />
              Bathroom Fixes
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {BATHROOM.map((s) => <ServiceCard key={s.name} {...s} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── TIME PACKAGE RATE CARDS ── */}
      <section id="pricing" className="py-24 px-6" style={{ background: "rgba(15,23,42,0.025)" }}>
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel>Time-Based Rates</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight reveal" style={{ color: navy }}>
            Prefer hourly?
          </h2>
          <p className="mt-3 text-base max-w-lg mx-auto reveal" style={{ color: "rgba(15,23,42,0.6)" }}>
            For mixed tasks or custom work, book by time instead.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {TIME_PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className="reveal-rise relative rounded-2xl p-8 text-center flex flex-col"
                style={{
                  background: "#fff",
                  border: pkg.popular ? `2px solid ${orange}` : "1px solid rgba(15,23,42,0.08)",
                }}
              >
                {pkg.popular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: orange, color: "#fff" }}
                  >
                    Most Popular
                  </span>
                )}
                <p className="text-sm font-bold uppercase tracking-widest" style={{ color: navy }}>{pkg.name}</p>
                <p className="mt-4">
                  <span className="text-4xl font-bold" style={{ color: navy }}>{pkg.price}</span>
                  <span className="text-sm" style={{ color: "rgba(15,23,42,0.5)" }}>{pkg.unit}</span>
                </p>
                <p className="text-sm mt-1 font-medium" style={{ color: "rgba(15,23,42,0.5)" }}>{pkg.desc}</p>
                <p className="text-sm mt-4 leading-relaxed flex-1" style={{ color: "rgba(15,23,42,0.6)" }}>{pkg.best}</p>
                <Link
                  href="#book"
                  className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
                  style={{
                    background: pkg.popular ? orange : "transparent",
                    color: pkg.popular ? "#fff" : navy,
                    border: pkg.popular ? "none" : `1.5px solid ${navy}`,
                  }}
                >
                  <CalendarCheck size={15} />
                  Book Online
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONLINE BOOKING CTA ── */}
      <section id="book" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionLabel>Online Booking</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight reveal" style={{ color: navy }}>
              Book your visit<br />online.
            </h2>
            <p className="mt-5 text-base leading-relaxed max-w-md reveal" style={{ color: "rgba(15,23,42,0.6)" }}>
              Pick your service, choose a date, select a 2-hour arrival window. Done.
              No phone tag, no waiting on hold. Confirmation and tech details sent to your inbox instantly.
            </p>
            <Link
              href="#"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:opacity-90 reveal"
              style={{ background: orange, color: "#fff" }}
            >
              <CalendarCheck size={16} />
              Book Now — Pick Your Date
            </Link>
          </div>
          <div
            className="photo-slot rounded-2xl aspect-[4/3] reveal-rise"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
          />
        </div>
      </section>

      {/* ── MEMBERSHIP TIERS ── */}
      <section id="membership" className="py-24 px-6" style={{ background: "rgba(15,23,42,0.025)" }}>
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel>Save More</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight reveal" style={{ color: navy }}>
            Home Care Club.
          </h2>
          <p className="mt-3 text-base max-w-lg mx-auto reveal" style={{ color: "rgba(15,23,42,0.6)" }}>
            Regular maintenance keeps your home in shape and saves you money on every visit.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {MEMBERSHIPS.map((tier) => (
              <div
                key={tier.name}
                className="reveal-rise relative rounded-2xl p-8 text-left flex flex-col"
                style={{
                  background: "#fff",
                  border: tier.popular ? `2px solid ${orange}` : "1px solid rgba(15,23,42,0.08)",
                }}
              >
                {tier.popular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: orange, color: "#fff" }}
                  >
                    Most Popular
                  </span>
                )}
                <p className="text-sm font-bold uppercase tracking-widest" style={{ color: navy }}>{tier.name}</p>
                <p className="mt-3">
                  <span className="text-3xl font-bold" style={{ color: navy }}>{tier.price}</span>
                  <span className="text-sm" style={{ color: "rgba(15,23,42,0.5)" }}>/mo</span>
                </p>
                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "rgba(15,23,42,0.7)" }}>
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: green }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#book"
                  className="mt-8 inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
                  style={{
                    background: tier.popular ? orange : "transparent",
                    color: tier.popular ? "#fff" : navy,
                    border: tier.popular ? "none" : `1.5px solid ${navy}`,
                  }}
                >
                  Join {tier.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROPERTY MANAGER ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-10 sm:p-14 reveal-rise"
            style={{ background: navy }}
          >
            <div className="grid sm:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: orange }}>
                  Multi-Unit & Commercial
                </p>
                <h3 className="text-3xl font-bold tracking-tight" style={{ color: bone }}>
                  Property Managers & Landlords.
                </h3>
                <p className="mt-4 text-sm leading-relaxed max-w-lg" style={{ color: "rgba(250,249,247,0.7)" }}>
                  Recurring visits, multi-unit pricing, key-holding service, detailed work reports.
                  We handle your tenant maintenance requests so you don&apos;t have to.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90 shrink-0"
                style={{ background: orange, color: "#fff" }}
              >
                <FileText size={15} />
                Request a Property Management Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON FIXES GALLERY ── */}
      <section className="py-24 px-6" style={{ background: "rgba(15,23,42,0.025)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-12 reveal" style={{ color: navy }}>
            Common fixes we handle.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY.map((label, i) => (
              <div
                key={label}
                className="photo-slot rounded-xl reveal-rise"
                style={{ aspectRatio: i % 3 === 0 ? "4/5" : "4/3", backgroundImage: "url(https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div
            className="photo-slot rounded-2xl aspect-[4/3] reveal-rise"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div>
            <SectionLabel>About FixRight</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight reveal" style={{ color: navy }}>
              Reliable. On time.<br />
              <span className="italic font-normal" style={{ color: "rgba(15,23,42,0.42)" }}>
                On budget.
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed max-w-lg reveal" style={{ color: "rgba(15,23,42,0.6)" }}>
              FixRight is a team of full-time, W-2 employees — not a network of random subcontractors.
              Every technician is background checked, drug tested, and trained in-house.
              We guarantee every repair for a full year. If something isn&apos;t right, we come back free.
            </p>
            <p className="mt-4 text-base leading-relaxed max-w-lg reveal" style={{ color: "rgba(15,23,42,0.6)" }}>
              We started FixRight because homeowners deserve transparent pricing, reliable scheduling,
              and work they can actually trust. No more guessing, no more ghosting.
            </p>

            <div className="flex gap-10 mt-10 reveal">
              <div>
                <p className="text-3xl font-bold" style={{ color: navy }}>4.7<Star size={18} fill={orange} stroke={orange} className="inline ml-1 -mt-1" /></p>
                <p className="text-xs mt-1" style={{ color: "rgba(15,23,42,0.5)" }}>Google Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: navy }}>312</p>
                <p className="text-xs mt-1" style={{ color: "rgba(15,23,42,0.5)" }}>Verified Reviews</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: navy }}>1 yr</p>
                <p className="text-xs mt-1" style={{ color: "rgba(15,23,42,0.5)" }}>Work Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-24 px-6" style={{ background: "rgba(15,23,42,0.025)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Reviews</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-12 reveal" style={{ color: navy }}>
            From our customers.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="reveal-rise rounded-2xl p-7 flex flex-col"
                style={{ background: "#fff", border: "1px solid rgba(15,23,42,0.08)" }}
              >
                <StarRow count={r.stars} />
                <p className="mt-4 text-sm leading-relaxed flex-1" style={{ color: "rgba(15,23,42,0.7)" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="mt-5 text-xs font-semibold" style={{ color: navy }}>{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight reveal" style={{ color: navy }}>
              Get in touch.
            </h2>

            <div className="mt-8 space-y-5 reveal">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" style={{ color: orange }} />
                <div>
                  <p className="text-sm font-semibold" style={{ color: navy }}>Address</p>
                  <p className="text-sm" style={{ color: "rgba(15,23,42,0.6)" }}>456 Prospect Ave, Arlington Heights, IL 60004</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0" style={{ color: orange }} />
                <div>
                  <p className="text-sm font-semibold" style={{ color: navy }}>Phone</p>
                  <Link href={PHONE_TEL} className="text-sm hover:underline" style={{ color: "rgba(15,23,42,0.6)" }}>{PHONE}</Link>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0" style={{ color: orange }} />
                <div>
                  <p className="text-sm font-semibold" style={{ color: navy }}>Hours</p>
                  <p className="text-sm" style={{ color: "rgba(15,23,42,0.6)" }}>Mon – Sat: 7:00 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0" style={{ color: orange }} />
                <div>
                  <p className="text-sm font-semibold" style={{ color: navy }}>Email</p>
                  <p className="text-sm" style={{ color: "rgba(15,23,42,0.6)" }}>hello@fixrighthandyman.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map slot */}
          <div
            className="photo-slot rounded-2xl aspect-[4/3] reveal-rise"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }}
          />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 text-center" style={{ background: navy }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight" style={{ color: bone }}>
            Got a to-do list<br />
            <span className="italic font-normal" style={{ color: "rgba(250,249,247,0.45)" }}>
              that&apos;s been growing?
            </span>
          </h2>
          <p className="mt-5 text-base" style={{ color: "rgba(250,249,247,0.65)" }}>
            Book online in 60 seconds. Pick a date, pick a window, done.
          </p>
          <Link
            href="#book"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: orange, color: "#fff" }}
          >
            <CalendarCheck size={16} />
            Book Your Visit
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-14 px-6" style={{ borderTop: "1px solid rgba(15,23,42,0.08)" }}>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-10">
          <div>
            <p className="font-bold text-lg tracking-tight" style={{ color: navy }}>
              Fix<span style={{ color: orange }}>Right</span>
              <span className="w-1.5 h-1.5 rounded-full inline-block -mt-2 ml-0.5" style={{ background: orange }} />
            </p>
            <p className="text-xs mt-2 leading-relaxed" style={{ color: "rgba(15,23,42,0.5)" }}>
              Arlington Heights&apos; trusted handyman service.<br />
              Employees, not subs. Guaranteed work.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: navy }}>Quick Links</p>
            <div className="space-y-2">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="block text-sm hover:underline" style={{ color: "rgba(15,23,42,0.6)" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: navy }}>Contact</p>
            <p className="text-sm" style={{ color: "rgba(15,23,42,0.6)" }}>456 Prospect Ave</p>
            <p className="text-sm" style={{ color: "rgba(15,23,42,0.6)" }}>Arlington Heights, IL 60004</p>
            <Link href={PHONE_TEL} className="text-sm block mt-1 hover:underline" style={{ color: "rgba(15,23,42,0.6)" }}>{PHONE}</Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderTop: "1px solid rgba(15,23,42,0.08)" }}>
          <p className="text-xs" style={{ color: "rgba(15,23,42,0.4)" }}>&copy; {new Date().getFullYear()} FixRight Handyman. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="text-xs hover:underline" style={{ color: "rgba(15,23,42,0.4)" }}>Privacy</Link>
            <Link href="#" className="text-xs hover:underline" style={{ color: "rgba(15,23,42,0.4)" }}>Terms</Link>
            <Link href="#" className="text-xs hover:underline" style={{ color: "rgba(15,23,42,0.4)" }}>Sitemap</Link>
          </div>
        </div>
      </footer>

      {/* ── MOBILE STICKY ── */}
      <div
        className="fixed bottom-0 inset-x-0 z-50 sm:hidden p-3"
        style={{ background: "rgba(250,249,247,0.95)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(15,23,42,0.08)" }}
      >
        <Link
          href="#book"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg text-sm font-semibold"
          style={{ background: orange, color: "#fff" }}
        >
          <CalendarCheck size={16} />
          Book Online
        </Link>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

/* ── Data ── */

const PHONE = '815-653-ROOF (7663)';
const PHONE_HREF = 'tel:8156537663';
const EMAIL = 'robertsexteriorservicesllc@gmail.com';
const ADDRESS = '7207 Delaware Rd, Wonder Lake, IL 60097';
const IMG = (name: string) => `https://robertsexteriorservices.com/images/${name}`;

const SERVICE_AREAS = [
  'Wonder Lake', 'Crystal Lake', 'Woodstock', 'McHenry', 'Johnsburg',
  'Lakemoor', 'Algonquin', 'Spring Grove', 'Fox Lake',
];

const TRUST_BAR = [
  { emoji: '\u{1F6E1}\uFE0F', title: 'Fully Licensed & Insured', desc: 'Your home is protected' },
  { emoji: '\u26A1', title: 'Same-Day Emergency Repairs', desc: 'We come when you need us' },
  { emoji: '\u{1F4CB}', title: 'Licensed IL Public Adjusters', desc: 'Storm damage claims handled' },
  { emoji: '\u{1F4CD}', title: 'McHenry County & Surrounding Areas', desc: 'In business since 1989' },
];

const ABOUT_CHECKLIST = [
  'Roofing/siding/soffit & fascia',
  'Gutters & gutter repair',
  'Decks & repair work',
  'Snow removal',
  'Free written estimates for every project',
];

const SERVICES = [
  { emoji: '\u{1F3E0}', title: 'Roofing', desc: 'Full replacements, repairs, and inspections. Quality shingles, proper underlayment, and expert flashing \u2014 built to last decades.', img: IMG('roofing-job.jpg') },
  { emoji: '\u{1F9F1}', title: 'Siding', desc: 'New siding installation and replacement. We improve your home\u2019s curb appeal and insulation in one shot.', img: IMG('siding-lakefront.jpg') },
  { emoji: '\u{1FA9F}', title: 'Soffit & Fascia', desc: 'Damaged soffit and fascia leads to rot, pests, and bigger problems. We replace it cleanly and correctly.', img: IMG('soffit-fascia.jpg') },
  { emoji: '\u{1F327}\uFE0F', title: 'Gutters', desc: 'New gutter installation, seamless gutters, guards, and repairs. We solve drainage problems and protect your foundation.', img: IMG('gutters.jpg') },
  { emoji: '\u{1F527}', title: 'Repair Work', desc: 'Leaks, storm damage, rot, or wear \u2014 we diagnose the problem and fix it right. Same-day emergency service available.', img: IMG('repair-work.jpg') },
  { emoji: '\u2744\uFE0F', title: 'Snow Removal', desc: 'Keep your property safe and accessible all winter. We handle residential snow removal so you don\u2019t have to.', img: IMG('snow-removal.jpg') },
  { emoji: '\u{1FAB5}', title: 'Decks', desc: 'New deck builds and deck repairs. We design and construct outdoor spaces built to handle Illinois weather year after year.', img: IMG('decks.jpg') },
  { emoji: '\u26C8\uFE0F', title: 'Storm Damage', desc: 'Hail, wind, fallen branches \u2014 we respond fast and, as licensed IL public adjusters, we can work directly with your insurance company.', img: IMG('storm-damage.jpg') },
];

const GALLERY_IMAGES = Array.from({ length: 13 }, (_, i) => IMG(`gallery-${i + 1}.jpg`));

const REVIEWS = [
  { name: 'Patricia Taylor', time: '1 year ago', badge: '', text: 'My roof leaked during the storm Sunday night. I called Monday morning. They came to look at the problem and were able to repair it that day. I will definitely recommend this company.' },
  { name: 'Carol Henry', time: '1 year ago', badge: '', text: 'Mitch came to our house and gave us a very fair quote on gutter replacement and offered a way to solve a problem area we had over the porch. Also gave us good advice on another area. Going with him for sure.' },
  { name: 'Mike Duffy', time: '6 years ago', badge: 'Local Guide', text: 'Had them redo my roof and could not be happier with the awesome job that they did. Great price and fantastic result \u2014 would absolutely recommend to anyone in the area.' },
  { name: 'Dan Sitkie', time: '5 years ago', badge: '', text: 'I got 3 quotes for getting three roofs done and over 180 feet of gutters installed. This company not only met all the things I asked for in the quote, they went above and beyond on every detail.' },
  { name: 'John Adams', time: '1 year ago', badge: 'Local Guide', text: 'They put my gutters in a couple years ago. Did a great job \u2014 solid work, no complaints. Would call them again for any future work without hesitation.' },
  { name: 'Susan Smith', time: '2 years ago', badge: 'Local Guide', text: 'Excellent service and fast! They handled everything professionally from start to finish. Highly recommend for any exterior work.' },
];

const SERVICE_OPTIONS = [
  'Roofing', 'Siding', 'Soffit & Fascia', 'Gutters', 'Repair Work',
  'Snow Removal', 'Decks', 'Storm Damage / Insurance Claim', 'Other',
];

const NAV_LINKS = ['About', 'Services', 'Gallery', 'Reviews'];

/* ── Helpers ── */

function Eyebrow({ children, center }: { children: string; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2 mb-4 ${center ? 'justify-center' : ''}`}>
      <span className="w-8 h-[2px] bg-[#c41017]" />
      <span
        className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c41017]"
        style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
      >
        {children}
      </span>
      {center && <span className="w-8 h-[2px] bg-[#c41017]" />}
    </div>
  );
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.7l5.34-.78L10 1z" />
        </svg>
      ))}
    </span>
  );
}

/* ══════════════════════════════════════════════════════════ */

export default function RoofingPage() {
  const [showAll, setShowAll] = useState(false);
  const visibleGallery = showAll ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, 6);

  return (
    <div
      className="min-h-screen bg-[#faf9f6] text-[#181818]"
      style={{ fontFamily: 'var(--font-barlow), var(--font-body), system-ui, sans-serif' }}
    >
      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#0c0c0c] border-b-2 border-[#c41017]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3 text-white"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://robertsexteriorservices.com/images/roberts_logo.jpg"
              alt="Robert's Exterior Services Logo"
              className="w-10 h-10 rounded-sm object-cover"
            />
            <div
              className="text-[17px] font-bold leading-[1.15] tracking-tight"
              style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
            >
              Robert&apos;s <span className="text-[#c41017] italic font-normal">Exterior</span>
              <br />
              <span className="text-[14px]">Services, LLC</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/60 hover:text-white transition-colors"
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-sm border-2 border-[#c41017] bg-[#c41017] text-white text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-[#dc1219] hover:border-[#dc1219] transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Decorative vertical red line */}
        <div className="absolute left-8 md:left-16 top-0 bottom-0 w-[3px] bg-[#c41017]/30 z-10" />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.62) 55%, rgba(10,10,10,0.88) 100%), url(${IMG('hero.jpg')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-32 w-full">
          <div className="max-w-2xl">
            <Eyebrow>McHenry County &amp; Surrounding Areas</Eyebrow>

            <h1
              className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.02em] leading-[0.95] text-white"
              style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
            >
              Built to<br />
              <span className="italic text-[#c41017]">Last.</span><br />
              Built Right.
            </h1>

            <p className="mt-6 text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.7] text-white/60 max-w-lg">
              Robert&apos;s Exterior Services, LLC has protected homes across McHenry County with honest workmanship, fair pricing, and service you can count on &mdash; rain or shine.
            </p>

            <p className="mt-3 text-[13px] text-white/35 italic">
              In Business Since 1989 &nbsp;&middot;&nbsp; Licensed IL Public Adjusters for Storm Damage Claims
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#c41017] text-white font-semibold text-[15px] hover:bg-[#dc1219] transition-all hover:shadow-2xl hover:shadow-red-900/30"
              >
                Get a Free Estimate
                <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium text-[15px] hover:bg-white/10 transition-all"
              >
                <span role="img" aria-label="phone">&#x1F4DE;</span> 815-653-ROOF
              </a>
            </div>

          </div>

          {/* Stats — boxes positioned bottom-right */}
          <div className="absolute bottom-10 right-6 md:right-10 hidden md:flex gap-4">
            {[
              { value: '4.6★', label: 'Google Rating' },
              { value: '35+', label: 'Years in Business' },
              { value: 'Same', label: 'Day Repairs' },
            ].map((s) => (
              <div key={s.label} className="bg-[#0c0c0c]/70 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-4 text-center">
                <div
                  className="text-[28px] font-bold text-[#c41017] tracking-tight leading-none"
                  style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                >
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/50 font-semibold">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Stats — mobile (inline) */}
          <div className="md:hidden mt-14 flex gap-8 flex-wrap">
            {[
              { value: '4.6★', label: 'Google Rating' },
              { value: '35+', label: 'Years in Business' },
              { value: '⚡', label: 'Same Day Repairs' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-[28px] font-bold text-white tracking-tight leading-none">{s.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-white/35">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[#0c0c0c] border-y border-[#c41017]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_BAR.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-lg shrink-0 mt-0.5">{item.emoji}</span>
                <div>
                  <div className="text-[13px] font-semibold text-white/80">{item.title}</div>
                  <div className="text-[11px] text-white/35 mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Strip */}
      <div className="bg-[#181818] py-3 text-center">
        <p className="text-[12px] text-white/40 tracking-wide">
          Serving {SERVICE_AREAS.join(' \u00B7 ')}
        </p>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 md:py-36 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Images */}
            <div className="md:col-span-5 relative">
              <div
                className="rounded-2xl aspect-[4/5] shadow-2xl"
                style={{
                  backgroundImage: `url(${IMG('overall.jpg')})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 30%',
                }}
              />
              {/* Accent image */}
              <div
                className="absolute -bottom-6 -right-6 w-36 h-36 rounded-2xl shadow-xl border-4 border-[#faf9f6]"
                style={{
                  backgroundImage: `url(${IMG('roofing-job.jpg')})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              {/* Year badge */}
              <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-2xl bg-[#c41017]/90 flex flex-col items-center justify-center text-white shadow-xl">
                <div className="text-[11px] uppercase tracking-[0.14em] text-white/70">Since</div>
                <div className="text-[32px] font-bold leading-none">1989</div>
                <div className="text-[11px] text-white/70 mt-1">Wonder Lake</div>
              </div>
            </div>

            {/* Copy */}
            <div className="md:col-span-7">
              <Eyebrow>About Us</Eyebrow>
              <h2
                className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.02em] leading-[1.08]"
                style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
              >
                Neighbors You Can{' '}
                <span className="italic text-[#c41017]">Trust</span>{' '}
                With Your Home
              </h2>
              <p className="mt-8 text-[16px] leading-[1.8] text-[#383838]">
                Robert&apos;s Exterior Services, LLC has been a trusted name in Wonder Lake and McHenry County since 1989. We&apos;re not a big national chain &mdash; we&apos;re your neighbors, and we treat every home like it&apos;s our own.
              </p>
              <p className="mt-4 text-[16px] leading-[1.8] text-[#383838]">
                From emergency storm repairs to full exterior overhauls, our crew shows up on time, does the job right, and leaves your property cleaner than we found it. Straight answers and fair quotes &mdash; always.
              </p>

              <div className="mt-10 space-y-3">
                {ABOUT_CHECKLIST.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[14px] font-medium text-[#181818]">
                    <svg className="w-5 h-5 text-[#c41017] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-[#fdf1f1] border border-[#c41017]/15">
                <p className="text-[13px] text-[#c41017] font-medium flex items-center gap-2">
                  <span>&#x1F4CB;</span>
                  Licensed IL Public Adjusters &mdash; we handle storm damage insurance claims for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 md:py-36 bg-[#f7f5f1]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <Eyebrow center>What We Do</Eyebrow>
            <h2
              className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.02em]"
              style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
            >
              Our <span className="italic text-[#c41017]">Services</span>
            </h2>
            <p className="mt-4 text-[15px] text-[#686868] max-w-2xl mx-auto leading-[1.7]">
              From a single repair to a full exterior transformation, we bring the same care and craftsmanship to every job &mdash; big or small.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-[#d8d4cd] hover:border-[#c41017]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${svc.img})` }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{svc.emoji}</span>
                    <h3 className="text-[16px] font-bold tracking-[-0.01em]">{svc.title}</h3>
                  </div>
                  <p className="text-[13px] leading-[1.7] text-[#686868] mb-4">{svc.desc}</p>
                  <a href="#contact" className="text-[13px] font-semibold text-[#c41017] hover:text-[#dc1219] transition-colors">
                    Get a Quote &rarr;
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
          <div className="text-center mb-16">
            <Eyebrow center>Our Work</Eyebrow>
            <h2
              className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.02em]"
              style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
            >
              Projects We&apos;re <span className="italic text-[#c41017]">Proud Of</span>
            </h2>
            <p className="mt-4 text-[15px] text-[#686868] max-w-2xl mx-auto leading-[1.7]">
              A look at some of the work we&apos;ve done for homeowners across McHenry County and the surrounding area.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {visibleGallery.map((img, i) => (
              <div
                key={i}
                className="rounded-2xl aspect-[4/3] overflow-hidden bg-[#e8e4dd]"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))}
          </div>

          {!showAll && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3.5 rounded-full border border-[#d8d4cd] text-[14px] font-semibold text-[#383838] hover:border-[#c41017] hover:text-[#c41017] transition-colors"
              >
                Show All Photos (13) &darr;
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-24 md:py-36 bg-[#f7f5f1]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <Eyebrow center>What Customers Say</Eyebrow>
            <h2
              className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.02em]"
              style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
            >
              Real Reviews from <span className="italic text-[#c41017]">Real Neighbors</span>
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <Stars />
              <span className="text-[14px] text-[#686868]">4.6 out of 5 &middot; 10 Google Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-[#d8d4cd] hover:border-[#c41017]/20 hover:-translate-y-1 transition-all duration-500"
              >
                <span className="text-[48px] leading-none text-[#c41017]/20 font-serif">&ldquo;</span>
                <p className="text-[14px] leading-[1.75] text-[#383838] mb-6 -mt-4">
                  {r.text}
                </p>
                <div className="pt-4 border-t border-[#d8d4cd]">
                  <p className="text-[13px] font-semibold">{r.name}</p>
                  <p className="text-[11px] text-[#a0a0a0] mt-0.5">
                    {r.time}{r.badge && ` \u00B7 ${r.badge}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 md:py-36 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <Eyebrow>Reach Out</Eyebrow>
              <h2
                className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.02em] leading-[1.08]"
                style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
              >
                Get Your <span className="italic text-[#c41017]">Free Estimate</span>
              </h2>
              <p className="mt-6 text-[16px] leading-[1.7] text-[#686868]">
                Ready to talk about your project? Reach out and we&apos;ll get back to you fast &mdash; usually the same day. No pressure, no obligation.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  { emoji: '\u{1F4DE}', label: 'Phone', value: '815-653-ROOF (7663)', href: PHONE_HREF },
                  { emoji: '\u2709\uFE0F', label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
                  { emoji: '\u{1F4CD}', label: 'Address', value: ADDRESS },
                  { emoji: '\u{1F5FA}\uFE0F', label: 'Service Area', value: 'McHenry County & Surrounding Areas' },
                  { emoji: '\u26A1', label: 'Emergency Service', value: 'Same-day response available for urgent repairs' },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <span className="text-lg shrink-0">{c.emoji}</span>
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.12em] text-[#a0a0a0] mb-0.5">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="text-[14px] font-medium text-[#181818] hover:text-[#c41017] transition-colors">
                          {c.value}
                        </a>
                      ) : (
                        <div className="text-[14px] text-[#383838]">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-[#d8d4cd]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.123!2d-88.391!3d42.384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s7207+Delaware+Rd+Wonder+Lake+IL!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Robert's Exterior Services Location"
                />
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <form
                className="bg-white rounded-2xl p-8 md:p-10 border border-[#d8d4cd] shadow-sm"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-5">
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-[#686868] mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full h-12 px-4 rounded-xl border border-[#d8d4cd] bg-[#faf9f6] text-[14px] text-[#181818] placeholder:text-[#a0a0a0] focus:outline-none focus:border-[#c41017] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-[#686868] mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full h-12 px-4 rounded-xl border border-[#d8d4cd] bg-[#faf9f6] text-[14px] text-[#181818] placeholder:text-[#a0a0a0] focus:outline-none focus:border-[#c41017] transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-[#686868] mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full h-12 px-4 rounded-xl border border-[#d8d4cd] bg-[#faf9f6] text-[14px] text-[#181818] placeholder:text-[#a0a0a0] focus:outline-none focus:border-[#c41017] transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-[#686868] mb-2">Service</label>
                    <select className="w-full h-12 px-4 rounded-xl border border-[#d8d4cd] bg-[#faf9f6] text-[14px] text-[#181818] focus:outline-none focus:border-[#c41017] transition-colors">
                      <option value="">Select a service...</option>
                      {SERVICE_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-[#686868] mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-[#d8d4cd] bg-[#faf9f6] text-[14px] text-[#181818] placeholder:text-[#a0a0a0] focus:outline-none focus:border-[#c41017] transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-12 rounded-full bg-[#c41017] text-white font-semibold text-[15px] hover:bg-[#dc1219] transition-colors"
                  >
                    Send Message &rarr;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0c0c0c] border-t border-[#c41017]/20 py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h3
            className="text-white text-xl font-semibold mb-2"
            style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
          >
            Robert&apos;s Exterior Services, LLC
          </h3>
          <p className="text-[13px] text-white/40 mb-3">
            In Business Since 1989 &middot; Wonder Lake, IL
          </p>
          <p className="text-[12px] text-white/25 mb-6">
            IL Residential License: 104.015895 &nbsp;&middot;&nbsp; IL Commercial License: 105.004239
          </p>

          <div className="flex items-center justify-center gap-6 mb-8">
            {['About', 'Services', 'Gallery', 'Reviews', 'Contact'].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-[13px] text-white/50 hover:text-white transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/8">
            <p className="text-[12px] text-white/25">
              &copy; 2025 Robert&apos;s Exterior Services, LLC &middot; McHenry County &amp; Surrounding Areas
            </p>
          </div>
        </div>
      </footer>

      {/* ── MOBILE STICKY CTA ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-[#0c0c0c]/95 backdrop-blur-xl border-t border-white/5">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 h-12 rounded-full bg-[#c41017] text-[15px] font-bold text-white shadow-lg"
        >
          <span>&#x1F4DE;</span> 815-653-ROOF
        </a>
      </div>
    </div>
  );
}

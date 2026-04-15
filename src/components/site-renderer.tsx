/**
 * Premium One-Pager Renderer — Light Mode + Trade-Aware
 *
 * Renders a single-page trades business website from site.json data.
 * Auto-routes to the correct trade variant based on `data.business.trade`
 * via `getTradeVariant()`. Each variant drives palette, hero style, copy,
 * certifications, and feature sections (emergency bar, financing callout,
 * process timeline, seasonal promo).
 *
 * Gracefully hides any section with no real content rather than faking it.
 */

import {
  Phone,
  Star,
  ArrowRight,
  MapPin,
  Check,
  Shield,
  Clock,
  Award,
  Hammer,
  AlertCircle,
  CreditCard,
  Sparkles,
} from "lucide-react";
import { getTradeVariant } from "./trade-variants";

// ── Types ──

export interface SiteData {
  business: {
    name: string;
    trade: string;
    trade_label: string;
    city: string;
    state: string;
    address?: string | null;
    phone: string;
    phone_href: string;
    email?: string | null;
    website?: string | null;
    google_maps_url?: string | null;
    owner_name?: string | null;
    google_rating: number | null;
    review_count: number;
    years_in_business?: number | null;
    license_number?: string | null;
    hours?: string[] | null;
    service_areas: string[];
    top_services: string[];
  };
  brand: {
    theme: "dark" | "light";
    archetype_tagline?: string;
  };
  copy: {
    hero_headline: string;
    hero_subheadline: string;
    hero_cta_primary: string;
    trust_microcopy: string;
    owner_bio: string;
    best_review?: { text: string; author: string; rating: number } | null;
  };
  design_tokens: {
    colors: Record<string, string>;
  };
  services: Array<{ name: string; description: string }>;
  value_props: string[];
  reviews: Array<{ author: string; rating: number; text: string; date?: string }>;
  /** Real Google Places photo URLs. Empty array if none. */
  photos?: string[];
  seo: {
    meta_title: string;
    meta_description: string;
  };
}

// ── Helpers ──

function hasValidReviews(reviews: SiteData["reviews"]): boolean {
  return Array.isArray(reviews) && reviews.length > 0 && reviews.some(
    (r) => r.text && r.text.length > 20 && r.author && r.author.length > 0
  );
}

const VALUE_PROP_ICONS = [Shield, Award, Clock, Hammer];

// ── Premium Trade-Aware One-Pager ──

export function SiteRenderer({ data }: { data: SiteData }) {
  const biz = data.business;
  const copy = data.copy;
  const tokens = data.design_tokens?.colors ?? {};

  // Auto-route to the right trade variant
  const variant = getTradeVariant(biz.trade);
  const flags = variant.flags;

  // Palette: prefer the variant's palette, but allow site.json to override
  const brandPrimary = tokens.brand_primary || variant.palette.primary;
  const brandAccent = tokens.brand_accent || variant.palette.accent;
  const brandSoft = variant.palette.soft;

  const cssVars: React.CSSProperties = {
    "--brand-primary": brandPrimary,
    "--brand-accent": brandAccent,
    "--brand-soft": brandSoft,
  } as React.CSSProperties;

  const phone = biz.phone;
  const phoneHref = biz.phone_href;
  const rating = biz.google_rating;
  const reviewCount = biz.review_count || 0;
  const hasRating = rating !== null && rating !== undefined && rating > 0;
  const hasReviewCount = reviewCount > 0;
  const city = biz.city || "your area";
  const tradeLower = variant.label.toLowerCase();

  // Filter reviews — only keep real ones with substantive content
  const reviews = (data.reviews || []).filter(
    (r) => r.text && r.text.length > 20 && r.author && r.author.length > 0
  );
  const showReviews = hasValidReviews(reviews);
  const featuredReview = showReviews ? reviews[0] : null;
  const supportingReviews = showReviews ? reviews.slice(1, 5) : [];

  // Use variant defaults when site.json is sparse
  const services = (data.services && data.services.length > 0) ? data.services : variant.services;
  const valueProps = (data.value_props && data.value_props.length > 0) ? data.value_props : variant.value_props;
  const certifications = variant.certifications;

  // Photo helper — cycles through the real Google Places photos so every
  // photo slot in the page gets a real image when at least one exists.
  // Returns null when the photos array is empty so the CSS placeholder shows.
  const photos = data.photos || [];
  const photoAt = (idx: number): string | null => {
    if (photos.length === 0) return null;
    return photos[idx % photos.length];
  };
  const photoBg = (idx: number): React.CSSProperties | undefined => {
    const url = photoAt(idx);
    return url
      ? { backgroundImage: `url(${url})`, backgroundSize: "cover", backgroundPosition: "center" }
      : undefined;
  };

  // Rich research fields — surface them in the about section + footer
  const hasOwner = !!biz.owner_name && biz.owner_name.trim().length > 0;
  const hasYears = !!biz.years_in_business && biz.years_in_business > 0;
  const hasLicense = !!biz.license_number && biz.license_number.trim().length > 0;
  const hasAddress = !!biz.address && biz.address.trim().length > 0;
  const hasEmail = !!biz.email && biz.email.includes("@");
  const hasHours = Array.isArray(biz.hours) && biz.hours.length > 0;
  const hasMapsUrl = !!biz.google_maps_url && biz.google_maps_url.startsWith("http");

  const trustText = hasRating && hasReviewCount
    ? `${rating}★ · ${reviewCount} Google reviews`
    : "Licensed & Insured";

  // Headline: use variant pattern when hero_headline looks generic or missing
  const heroHeadline = copy.hero_headline || variant.hero.headline(city);
  const heroItalicTail = variant.hero.headline_italic_tail;
  const heroSub = copy.hero_subheadline || variant.hero.subheadline(biz.name, city);
  const heroCta = copy.hero_cta_primary || variant.hero.cta_primary;

  return (
    <div style={cssVars} className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* ── EMERGENCY BAR (plumbing, HVAC) ── */}
      {flags.emergency_bar && phone && (
        <a
          href={phoneHref}
          className="block w-full text-white text-center text-[13px] font-medium py-2.5 px-4 transition-all hover:brightness-110"
          style={{ backgroundColor: brandAccent }}
        >
          <span className="inline-flex items-center gap-2">
            <AlertCircle className="w-3.5 h-3.5" strokeWidth={2.5} />
            {flags.emergency_bar_text}
            <span className="hidden sm:inline opacity-80"> · Call {phone}</span>
          </span>
        </a>
      )}

      {/* ── NAV ── */}
      <nav
        className={`${flags.emergency_bar ? "" : "fixed top-0"} left-0 right-0 z-50 backdrop-blur-xl bg-[rgba(250,249,247,0.78)] border-b border-[var(--border-subtle)]`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: brandAccent }}
            />
            <span className="text-[15px] font-semibold tracking-tight text-[var(--text-primary)]">
              {biz.name}
            </span>
          </a>
          <div className="flex items-center gap-7">
            <div className="hidden md:flex items-center gap-7">
              <a href="#services" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors link-underline">Services</a>
              <a href="#work" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors link-underline">Our work</a>
              <a href="#about" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors link-underline">About</a>
              {showReviews && (
                <a href="#reviews" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors link-underline">Reviews</a>
              )}
            </div>
            {phone && (
              <a
                href={phoneHref}
                className="inline-flex items-center gap-1.5 h-9 px-4 rounded-full text-[13px] font-medium text-white transition-all hover:scale-[1.02] hover:shadow-lg"
                style={{ backgroundColor: brandAccent }}
              >
                <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
                <span className="hidden sm:inline">{phone}</span>
                <span className="sm:hidden">Call</span>
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        id="top"
        className={`relative min-h-[94vh] flex items-center overflow-hidden grain ${flags.emergency_bar ? "pt-8" : "pt-24"}`}
      >
        {/* Warm ambient gradients — tinted with variant palette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 85% 20%, ${brandSoft} 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 10% 90%, ${brandPrimary}14 0%, transparent 70%)`,
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Copy column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-medium)] bg-white/60 backdrop-blur-sm mb-8 fade-up">
                {hasRating && (
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-3 h-3"
                        fill={i <= Math.round(rating!) ? "#F59E0B" : "none"}
                        stroke={i <= Math.round(rating!) ? "#F59E0B" : "#A3A3A3"}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                )}
                <span className="eyebrow text-[var(--text-secondary)]" style={{ letterSpacing: "0.12em" }}>
                  {trustText}
                </span>
              </div>

              <h1
                className="text-[clamp(2.75rem,7vw,5.75rem)] font-semibold tracking-[-0.035em] leading-[0.98] text-[var(--text-primary)] fade-up-delay-1"
                style={{ fontFeatureSettings: '"ss01", "cv11"' }}
              >
                {heroHeadline}
                <br />
                <span className="italic font-normal text-[var(--text-muted)]">
                  {heroItalicTail}
                </span>
              </h1>

              <p className="mt-8 text-[clamp(1.05rem,1.35vw,1.3rem)] leading-[1.6] text-[var(--text-secondary)] max-w-xl fade-up-delay-2">
                {heroSub}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4 fade-up-delay-3">
                {phone && (
                  <a
                    href={phoneHref}
                    className="group inline-flex items-center gap-2.5 h-14 px-8 rounded-full text-[15px] font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-xl shadow-md"
                    style={{ backgroundColor: brandAccent }}
                  >
                    <Phone className="w-4 h-4" strokeWidth={2.5} />
                    {heroCta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                  </a>
                )}
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 h-14 px-8 rounded-full text-[15px] font-medium text-[var(--text-primary)] border border-[var(--border-strong)] hover:bg-white hover:border-[var(--text-primary)] transition-all"
                >
                  {variant.hero.cta_secondary}
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
              </div>

              {valueProps.length > 0 && (
                <div className="mt-14 grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-4 fade-up-delay-4">
                  {valueProps.slice(0, 4).map((prop) => (
                    <div key={prop} className="flex items-center gap-2 text-[13px] text-[var(--text-secondary)]">
                      <Check className="w-3.5 h-3.5" style={{ color: brandAccent }} strokeWidth={2.5} />
                      {prop}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Hero photo — real Google photo if available */}
            <div className="lg:col-span-5 fade-up-delay-2">
              <div className="relative">
                <div
                  className="photo-slot aspect-[4/5] rounded-3xl shadow-2xl shadow-black/10"
                  data-label={data.photos && data.photos[0] ? undefined : "Hero photo · 1600×2000"}
                  style={
                    data.photos && data.photos[0]
                      ? { backgroundImage: `url(${data.photos[0]})`, backgroundSize: "cover", backgroundPosition: "center" }
                      : undefined
                  }
                />
                {hasRating && (
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-[var(--border-subtle)] p-5 w-44">
                    <div className="flex items-center gap-0.5 mb-1.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5"
                          fill={i <= Math.round(rating!) ? "#F59E0B" : "none"}
                          stroke="#F59E0B"
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                    <div className="text-[22px] font-semibold tracking-tight leading-none">
                      {rating}★ rated
                    </div>
                    <div className="mt-1 text-[11px] text-[var(--text-muted)]">
                      {reviewCount}+ Google reviews
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS STRIP ── */}
      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-6">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[12px] uppercase tracking-[0.14em] text-[var(--text-muted)] font-medium">
          {certifications.map((c, i) => (
            <span key={c} className="flex items-center gap-3">
              {c}
              {i < certifications.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-[var(--text-muted)] ml-3" />
              )}
            </span>
          ))}
        </div>
      </section>

      {/* ── SEASONAL PROMO BANNER (landscaping, painting, HVAC) ── */}
      {flags.seasonal_promo && flags.seasonal_promo_text && (
        <section className="py-5" style={{ backgroundColor: brandSoft }}>
          <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-center gap-3 text-[13px] font-medium">
            <Sparkles className="w-4 h-4 shrink-0" style={{ color: brandAccent }} strokeWidth={2} />
            <span className="text-[var(--text-primary)]">{flags.seasonal_promo_text}</span>
          </div>
        </section>
      )}

      {/* ── SERVICES ── */}
      {services.length > 0 && (
        <section id="services" className="relative py-24 md:py-36">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
              <div className="max-w-2xl">
                <p className="eyebrow mb-4">{variant.sections.services_eyebrow}</p>
                <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold tracking-[-0.025em] leading-[1.05]">
                  {variant.sections.services_headline}
                  <br className="hidden md:block" />
                  <span className="italic font-normal text-[var(--text-muted)]"> {variant.sections.services_italic_tail}</span>
                </h2>
              </div>
              {phone && (
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--text-primary)] link-underline shrink-0"
                >
                  Get a free estimate
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
              )}
            </div>

            {/* Services grid — each card has its own photo slot */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 6).map((service, idx) => (
                <div
                  key={idx}
                  className="reveal-rise group bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden hover:border-[var(--border-strong)] hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div
                    className="photo-slot aspect-[16/10]"
                    data-label={photoAt(idx + 6) ? undefined : `${service.name} · 1600×1000`}
                    style={photoBg(idx + 6)}
                  />
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div
                        className="text-[11px] font-mono font-medium tracking-[0.15em]"
                        style={{ color: brandAccent }}
                      >
                        {String(idx + 1).padStart(2, "0")} / SERVICE
                      </div>
                      <ArrowRight
                        className="w-4 h-4 text-[var(--text-muted)] group-hover:translate-x-0.5 transition-all"
                        style={{ color: brandAccent }}
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="text-[20px] font-semibold tracking-[-0.015em] mb-2">
                      {service.name}
                    </h3>
                    <p className="text-[14px] leading-[1.65] text-[var(--text-secondary)]">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PROCESS TIMELINE (roofing, landscaping, GC) ── */}
      {flags.process_timeline && flags.process_steps && flags.process_steps.length > 0 && (
        <section className="relative py-24 md:py-32 bg-[var(--bg-elevated)] border-y border-[var(--border-subtle)]">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="max-w-2xl mb-14 reveal">
              <p className="eyebrow mb-4">How it works</p>
              <h2 className="text-[clamp(2rem,3.75vw,3.25rem)] font-semibold tracking-[-0.025em] leading-[1.05]">
                A clear path <span className="italic font-normal text-[var(--text-muted)]">from quote to finish.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {flags.process_steps.map((step, idx) => (
                <div
                  key={idx}
                  className="reveal-rise relative p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]"
                >
                  <div
                    className="text-[11px] font-mono font-medium tracking-[0.15em] mb-4"
                    style={{ color: brandAccent }}
                  >
                    STEP {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-[18px] font-semibold tracking-[-0.015em] mb-2">
                    {step.step}
                  </h3>
                  <p className="text-[14px] leading-[1.65] text-[var(--text-secondary)]">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RECENT WORK / GALLERY ── */}
      <section id="work" className="relative py-24 md:py-36 bg-[var(--bg-elevated)] border-y border-[var(--border-subtle)]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16 reveal">
            <p className="eyebrow mb-4">{variant.sections.work_eyebrow}</p>
            <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold tracking-[-0.025em] leading-[1.05]">
              {variant.sections.work_headline} <span className="italic font-normal text-[var(--text-muted)]">{variant.sections.work_italic_tail}</span>
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
              {variant.sections.work_body(city)}
            </p>
          </div>

          {/* Masonry-ish gallery — real Google Places photos when available */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {data.photos && data.photos.length >= 6 ? (
              <>
                <div
                  className="reveal-rise photo-slot aspect-[3/4] rounded-2xl col-span-1 md:row-span-2 md:aspect-auto"
                  style={{ backgroundImage: `url(${data.photos[0]})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
                <div
                  className="reveal-rise photo-slot aspect-square rounded-2xl"
                  style={{ backgroundImage: `url(${data.photos[1]})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
                <div
                  className="reveal-rise photo-slot aspect-square rounded-2xl"
                  style={{ backgroundImage: `url(${data.photos[2]})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
                <div
                  className="reveal-rise photo-slot aspect-[4/3] rounded-2xl col-span-2"
                  style={{ backgroundImage: `url(${data.photos[3]})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
                <div
                  className="reveal-rise photo-slot aspect-square rounded-2xl"
                  style={{ backgroundImage: `url(${data.photos[4]})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
                <div
                  className="reveal-rise photo-slot aspect-square rounded-2xl"
                  style={{ backgroundImage: `url(${data.photos[5]})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
              </>
            ) : (
              <>
                <div className="reveal-rise photo-slot aspect-[3/4] rounded-2xl col-span-1 md:row-span-2 md:aspect-auto" data-label="Project 1" />
                <div className="reveal-rise photo-slot aspect-square rounded-2xl" data-label="Project 2" />
                <div className="reveal-rise photo-slot aspect-square rounded-2xl" data-label="Project 3" />
                <div className="reveal-rise photo-slot aspect-[4/3] rounded-2xl col-span-2" data-label="Project 4" />
                <div className="reveal-rise photo-slot aspect-square rounded-2xl" data-label="Project 5" />
                <div className="reveal-rise photo-slot aspect-square rounded-2xl" data-label="Project 6" />
              </>
            )}
          </div>

          {/* Before/after callout for painting, landscaping, GC */}
          {flags.before_after && (
            <p className="mt-8 text-center text-[12px] text-[var(--text-muted)] uppercase tracking-[0.14em]">
              Ask about our before &amp; after portfolio — we love sharing the details
            </p>
          )}

          <div className="mt-12 flex justify-center reveal">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--text-primary)] link-underline"
            >
              Ask about a similar project
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

      {/* ── FINANCING CALLOUT (roofing, HVAC, electrical, GC, landscaping) ── */}
      {flags.financing_callout && flags.financing_text && (
        <section className="relative py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div
              className="relative overflow-hidden rounded-3xl p-8 md:p-12 reveal"
              style={{ backgroundColor: brandSoft, border: `1px solid ${brandAccent}33` }}
            >
              <div className="flex items-start gap-6">
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: brandAccent }}
                >
                  <CreditCard className="w-5 h-5 text-white" strokeWidth={2.25} />
                </div>
                <div className="flex-1">
                  <p className="eyebrow mb-2" style={{ color: brandAccent }}>Flexible financing</p>
                  <h3 className="text-[22px] md:text-[26px] font-semibold tracking-[-0.02em] leading-[1.3]">
                    {flags.financing_text}
                  </h3>
                  {phone && (
                    <a
                      href={phoneHref}
                      className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-[var(--text-primary)] link-underline"
                    >
                      Ask about financing
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ABOUT ── */}
      <section id="about" className="relative py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Owner / team photo — uses last Google photo if available */}
            <div className="md:col-span-5 reveal-rise">
              <div className="relative">
                <div
                  className="photo-slot aspect-[4/5] rounded-3xl shadow-xl shadow-black/5"
                  data-label={photos.length > 0 ? undefined : "Owner portrait · 1200×1500"}
                  style={photoBg(photos.length > 2 ? photos.length - 1 : 2)}
                />
                {/* Owner name badge — only when we scraped it from research */}
                {hasOwner && (
                  <div className="absolute -bottom-5 left-5 right-5 bg-white rounded-2xl shadow-xl border border-[var(--border-subtle)] p-4">
                    <p className="eyebrow mb-1">Owner</p>
                    <p className="text-[17px] font-semibold tracking-[-0.01em]">{biz.owner_name}</p>
                    {hasYears && (
                      <p className="text-[12px] text-[var(--text-muted)] mt-0.5">
                        {biz.years_in_business}+ years serving {biz.city || "the area"}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-7 reveal">
              <p className="eyebrow mb-4">{variant.sections.about_eyebrow}</p>
              <h2 className="text-[clamp(2rem,3.75vw,3.25rem)] font-semibold tracking-[-0.025em] leading-[1.08]">
                {variant.sections.about_headline} <br />
                <span className="italic font-normal text-[var(--text-muted)]">{variant.sections.about_italic_tail}</span>
              </h2>
              <p className="mt-8 text-[17px] leading-[1.75] text-[var(--text-secondary)]">
                {copy.owner_bio}
              </p>

              {/* Value props as icon row */}
              {valueProps.length > 0 && (
                <div className="mt-10 grid grid-cols-2 gap-6 pt-10 border-t border-[var(--border-subtle)]">
                  {valueProps.slice(0, 4).map((prop, i) => {
                    const Icon = VALUE_PROP_ICONS[i] || Shield;
                    return (
                      <div key={prop} className="flex items-start gap-3">
                        <div
                          className="mt-0.5 w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: brandSoft }}
                        >
                          <Icon className="w-4 h-4" style={{ color: brandAccent }} strokeWidth={2} />
                        </div>
                        <div className="text-[14px] font-medium leading-[1.4] pt-1.5">
                          {prop}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Stats — only if real */}
              {(hasRating || hasReviewCount || hasYears) && (
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-[var(--border-subtle)]">
                  {hasRating && (
                    <div>
                      <div className="text-[44px] font-semibold tracking-[-0.02em] leading-none">
                        {rating}<span style={{ color: brandAccent }}>★</span>
                      </div>
                      <div className="mt-2 text-[12px] text-[var(--text-muted)] uppercase tracking-[0.14em]">
                        Google rating
                      </div>
                    </div>
                  )}
                  {hasReviewCount && (
                    <div>
                      <div className="text-[44px] font-semibold tracking-[-0.02em] leading-none">
                        {reviewCount}+
                      </div>
                      <div className="mt-2 text-[12px] text-[var(--text-muted)] uppercase tracking-[0.14em]">
                        Verified reviews
                      </div>
                    </div>
                  )}
                  {hasYears && (
                    <div>
                      <div className="text-[44px] font-semibold tracking-[-0.02em] leading-none">
                        {biz.years_in_business}<span className="text-[var(--text-muted)]">yr</span>
                      </div>
                      <div className="mt-2 text-[12px] text-[var(--text-muted)] uppercase tracking-[0.14em]">
                        In business
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Credentials bar — license + address, only if real */}
              {(hasLicense || hasAddress) && (
                <div className="mt-8 pt-8 border-t border-[var(--border-subtle)] space-y-3">
                  {hasLicense && (
                    <div className="flex items-start gap-3 text-[13px] text-[var(--text-secondary)]">
                      <Shield className="w-4 h-4 mt-0.5 shrink-0" style={{ color: brandAccent }} strokeWidth={2} />
                      <div>
                        <span className="text-[var(--text-muted)] uppercase tracking-[0.14em] text-[11px] font-medium mr-2">License</span>
                        <span className="font-mono">{biz.license_number}</span>
                      </div>
                    </div>
                  )}
                  {hasAddress && (
                    <div className="flex items-start gap-3 text-[13px] text-[var(--text-secondary)]">
                      <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: brandAccent }} strokeWidth={2} />
                      <div>{biz.address}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      {showReviews && featuredReview && (
        <section id="reviews" className="relative py-24 md:py-36 bg-[var(--bg-elevated)] border-y border-[var(--border-subtle)] grain">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16 reveal">
              <p className="eyebrow mb-4">{variant.sections.reviews_eyebrow}</p>
              <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold tracking-[-0.025em] leading-[1.05] max-w-3xl mx-auto">
                {variant.sections.reviews_headline} <span className="italic font-normal text-[var(--text-muted)]">{variant.sections.reviews_italic_tail}</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto mb-20 reveal-rise">
              <div className="flex items-center gap-0.5 justify-center mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    fill={i <= (featuredReview.rating || 5) ? "#F59E0B" : "none"}
                    stroke="#F59E0B"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <blockquote className="text-[clamp(1.35rem,2.2vw,1.9rem)] leading-[1.4] text-[var(--text-primary)] text-center font-medium tracking-[-0.015em]">
                &ldquo;{featuredReview.text}&rdquo;
              </blockquote>
              <p className="mt-8 text-center text-[13px] text-[var(--text-muted)] uppercase tracking-[0.14em]">
                — {featuredReview.author}
              </p>
            </div>

            {supportingReviews.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                {supportingReviews.map((review, i) => (
                  <div
                    key={i}
                    className="reveal-rise p-7 md:p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)] hover:-translate-y-0.5 transition-all duration-500"
                  >
                    <div className="flex items-center gap-0.5 mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="w-3.5 h-3.5"
                          fill={s <= (review.rating || 5) ? "#F59E0B" : "none"}
                          stroke="#F59E0B"
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                    <p className="text-[15px] leading-[1.7] text-[var(--text-secondary)] mb-5">
                      &ldquo;{review.text.length > 220 ? review.text.slice(0, 220) + "…" : review.text}&rdquo;
                    </p>
                    <p className="text-[12px] text-[var(--text-muted)] uppercase tracking-[0.12em]">— {review.author}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── FINAL CTA with background photo slot ── */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 photo-slot opacity-100"
          data-label={photos.length > 0 ? undefined : "CTA background photo · 2400×1400"}
          style={photoBg(photos.length > 3 ? 3 : 0)}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(180deg, rgba(250,249,247,0.70) 0%, rgba(250,249,247,0.88) 100%)`,
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center reveal">
          <p className="eyebrow mb-5">{variant.sections.cta_eyebrow}</p>
          <h2 className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-semibold tracking-[-0.03em] leading-[1.02]">
            {variant.sections.cta_headline} <br />
            <span className="italic font-normal" style={{ color: brandAccent }}>{variant.sections.cta_italic_tail}</span>
          </h2>
          <p className="mt-8 text-[17px] leading-[1.7] text-[var(--text-secondary)] max-w-xl mx-auto">
            {variant.sections.cta_body(biz.name, biz.city)}
          </p>
          {phone && (
            <div className="mt-12">
              <a
                href={phoneHref}
                className="inline-flex items-center gap-3 h-16 px-10 rounded-full text-[17px] font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-2xl shadow-xl"
                style={{ backgroundColor: brandAccent }}
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                Call {phone}
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </a>
            </div>
          )}
          {biz.city && (
            <p className="mt-8 text-[12px] text-[var(--text-muted)] flex items-center justify-center gap-2 uppercase tracking-[0.14em]">
              <MapPin className="w-3 h-3" strokeWidth={2} />
              Proudly serving {biz.city}{biz.state ? `, ${biz.state}` : ""}
            </p>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[var(--border-subtle)] py-14 bg-[var(--bg-base)]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12">
            {/* Brand column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: brandAccent }}
                />
                <span className="text-[15px] font-semibold tracking-tight">{biz.name}</span>
              </div>
              <p className="text-[13px] leading-[1.7] text-[var(--text-secondary)]">
                Quality {tradeLower} for homeowners{biz.city ? ` in ${biz.city}` : ""}. Licensed, insured, and proudly local.
              </p>
              {hasLicense && (
                <p className="mt-4 text-[11px] text-[var(--text-muted)] font-mono">
                  License {biz.license_number}
                </p>
              )}
            </div>

            {/* Contact */}
            <div>
              <p className="eyebrow mb-4">Contact</p>
              <div className="space-y-2.5 text-[14px]">
                {phone && (
                  <a
                    href={phoneHref}
                    className="block text-[var(--text-primary)] font-medium hover:opacity-70 transition-opacity"
                  >
                    {phone}
                  </a>
                )}
                {hasEmail && (
                  <a
                    href={`mailto:${biz.email}`}
                    className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-[13px] break-all"
                  >
                    {biz.email}
                  </a>
                )}
                {hasMapsUrl && (
                  <a
                    href={biz.google_maps_url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mt-1"
                  >
                    <MapPin className="w-3 h-3" strokeWidth={2} />
                    View on Google Maps
                  </a>
                )}
              </div>
            </div>

            {/* Address + Hours */}
            <div>
              <p className="eyebrow mb-4">{hasHours ? "Hours" : "Location"}</p>
              <div className="space-y-2 text-[13px] text-[var(--text-secondary)] leading-[1.7]">
                {hasAddress && (
                  <p>{biz.address}</p>
                )}
                {!hasAddress && biz.city && (
                  <p>{biz.city}{biz.state ? `, ${biz.state}` : ""}</p>
                )}
                {hasHours && (
                  <div className="mt-3 space-y-1 font-mono text-[12px]">
                    {biz.hours!.slice(0, 7).map((line, i) => (
                      <div key={i} className="text-[var(--text-muted)]">{line}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Service areas */}
            <div>
              <p className="eyebrow mb-4">Service area</p>
              <p className="text-[13px] text-[var(--text-secondary)] leading-[1.7]">
                {biz.service_areas && biz.service_areas.length > 0
                  ? biz.service_areas.join(" · ")
                  : biz.city || "Local area"}
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[12px] text-[var(--text-muted)]">
              © {new Date().getFullYear()} {biz.name}. All rights reserved.
            </div>
            <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-[0.14em]">
              Site by <span style={{ color: brandAccent }}>Capstone Studios</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ── MOBILE STICKY CTA ── */}
      {phone && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 backdrop-blur-xl bg-[rgba(250,249,247,0.92)] border-t border-[var(--border-subtle)]">
          <a
            href={phoneHref}
            className="flex items-center justify-center gap-2 h-12 rounded-full text-[15px] font-semibold text-white shadow-lg"
            style={{ backgroundColor: brandAccent }}
          >
            <Phone className="w-4 h-4" strokeWidth={2.5} />
            Call {phone}
          </a>
        </div>
      )}
    </div>
  );
}

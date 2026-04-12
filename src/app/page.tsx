import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TRADES = [
  { slug: "roofing", label: "Roofing", color: "#C8342B", desc: "Storm-ready craftsman. Shingle library, warranty tiers, drone inspections." },
  { slug: "plumbing", label: "Plumbing", color: "#0891B2", desc: "Dispatch-ops tactical. 24/7 emergency bar, flat-rate menu, response zones." },
  { slug: "electrical", label: "Electrical", color: "#F59E0B", desc: "Tech-modern safety. Panel identifier, EV charger picker, generator sizer." },
  { slug: "hvac", label: "HVAC", color: "#E25822", desc: "Dual-path seasonal. Quote builder, rebate calculator, brand wall." },
  { slug: "landscaping", label: "Landscaping", color: "#65A30D", desc: "AD-magazine editorial. Portfolio case studies, 3D renders, design consultation." },
  { slug: "painting", label: "Painting", color: "#8B5CF6", desc: "Transformation gallery. Before/after hero slider, prep process, cabinet spotlight." },
  { slug: "general-contractor", label: "General Contractor", color: "#CA8A04", desc: "Magazine case-study book. Team bios, budget tiers, showroom tours." },
  { slug: "handyman", label: "Handyman", color: "#EA580C", desc: "Service menu + booking. Flat-rate menu, online calendar, membership tiers." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      {/* Hero */}
      <section className="relative py-24 md:py-36 grain">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <p className="eyebrow mb-4 fade-up">Capstone Studios</p>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold tracking-[-0.035em] leading-[0.98] fade-up-1">
            Premium Templates
            <br />
            <span className="italic font-normal text-[var(--text-muted)]">for every trade.</span>
          </h1>
          <p className="mt-8 text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.6] text-[var(--text-secondary)] max-w-2xl mx-auto fade-up-2">
            8 completely different websites — each built from deep research into what makes that specific trade convert. Not color swaps. Different layouts, sections, interactions, and conversion paths.
          </p>
        </div>
      </section>

      {/* Trade Grid */}
      <section className="pb-24 md:pb-36">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TRADES.map((trade) => (
              <Link
                key={trade.slug}
                href={`/${trade.slug}`}
                className="group relative bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden hover:border-[var(--border-strong)] hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                {/* Color accent bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: trade.color }}
                />
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div
                        className="text-[11px] font-mono font-medium tracking-[0.15em] mb-2"
                        style={{ color: trade.color }}
                      >
                        TEMPLATE
                      </div>
                      <h2 className="text-[28px] font-semibold tracking-[-0.02em]">
                        {trade.label}
                      </h2>
                    </div>
                    <ArrowRight
                      className="w-5 h-5 mt-2 text-[var(--text-muted)] group-hover:translate-x-1 transition-transform"
                      style={{ color: trade.color }}
                      strokeWidth={2}
                    />
                  </div>
                  <p className="text-[14px] leading-[1.65] text-[var(--text-secondary)]">
                    {trade.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border-subtle)] py-10 text-center">
        <p className="text-[11px] text-[var(--text-muted)] uppercase tracking-[0.14em]">
          Built by <span style={{ color: "var(--brand-accent)" }}>Capstone Studios</span>
        </p>
      </footer>
    </div>
  );
}

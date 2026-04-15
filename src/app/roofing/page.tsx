import { SiteRenderer, type SiteData } from "@/components/site-renderer";
import siteData from "@/data/site.json";

export const metadata = {
  title: (siteData as unknown as SiteData).seo?.meta_title || "Premium Roofing",
  description: (siteData as unknown as SiteData).seo?.meta_description || "",
};

export default function RoofingPage() {
  return <SiteRenderer data={siteData as unknown as SiteData} />;
}

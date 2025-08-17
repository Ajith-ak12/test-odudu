import { TwoColumnHeroWithImage } from "@/components/heros/two-column-hero-with-image";
import { NumberedBadgeCards } from "@/components/feature/numbered-badge-cards";
import { SocialTeamProfiles } from "@/components/teams/social-team-profiles";
import { InteractiveGraphStats } from "@/components/stats/interactive-graph-stats";
import { CompanyLogoTestimonials } from "@/components/testimonials/company-logo-testimonials";
import CoreDomainsGrid from "@/components/custom/core-domains-grid";
import TimelineRoadmap from "@/components/custom/timeline-roadmap";
import GovernanceModel from "@/components/custom/governance-model";
import { FullwidthBackgroundCta } from "@/components/cta/fullwidth-background-cta";
import { SplitScreenContact } from "@/components/contact/split-screen-contact";

export default function HomePage() {
  return (
    <main>
      <TwoColumnHeroWithImage />
      <NumberedBadgeCards />
      <CoreDomainsGrid />
      <SocialTeamProfiles />
      <InteractiveGraphStats />
      <TimelineRoadmap />
      <GovernanceModel />
      <CompanyLogoTestimonials />
      <FullwidthBackgroundCta />
      <SplitScreenContact />
    </main>
  );
}
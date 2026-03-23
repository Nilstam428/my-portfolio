import Hero from '@/components/hero/Hero';
import CredibilityBar from '@/components/sections/CredibilityBar';
import Problem from '@/components/sections/Problem';
import SolutionOverview from '@/components/sections/SolutionOverview';
import WorkflowTimeline from '@/components/sections/WorkflowTimeline';
import FeatureBlocks from '@/components/sections/FeatureBlocks';
import BusinessImpact from '@/components/sections/BusinessImpact';
import ComingSoon from '@/components/sections/ComingSoon';
import Pricing from '@/components/sections/Pricing';
import Comparison from '@/components/sections/Comparison';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      {/* 01 */}
      <Hero />
      {/* 02 */}
      <CredibilityBar />
      {/* 03 */}
      <Problem />
      {/* 04 */}
      <SolutionOverview />
      {/* 05 */}
      <WorkflowTimeline />
      {/* 06–11 */}
      <FeatureBlocks />
      {/* 12 */}
      <BusinessImpact />
      {/* 13 */}
      <ComingSoon />
      {/* 14 */}
      <Pricing />
      {/* 15 */}
      <Comparison />
      {/* 16 */}
      <Testimonials />
      {/* 17 */}
      <FAQ />
      {/* 18 */}
      <FinalCTA />
    </>
  );
}

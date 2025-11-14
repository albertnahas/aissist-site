import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/hero/Hero';
import { QuickActions } from '@/components/features/QuickActions';
import { ValueProposition } from '@/components/content/ValueProposition';
import { FeatureGrid } from '@/components/features/FeatureGrid';
import { WorkflowSection } from '@/components/features/WorkflowSection';
import { PrivacySection } from '@/components/content/PrivacySection';
import { InstallSection } from '@/components/install/InstallSection';
import { StructuredData } from '@/components/seo/StructuredData';

export default function Home() {
  return (
    <div className="min-h-screen">
      <StructuredData />
      <Navigation />

      <main>
        <Hero />
        <QuickActions />
        <ValueProposition />
        <FeatureGrid />
        <WorkflowSection />
        <PrivacySection />
        <InstallSection />
      </main>

      <Footer />
    </div>
  );
}

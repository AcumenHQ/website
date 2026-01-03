import {
  Header,
  Hero,
  ValueProps,
  Courses,
  Reputation,
  Roadmap,
  CTA,
  Footer,
  AmbientBackground,
} from "@/components/landing";

export default function HomePage() {
  return (
    <>
      {/* Ambient Background */}
      <AmbientBackground />

      {/* Navigation */}
      <Header />

      <main className="relative z-10 pt-24 pb-12">
        {/* Hero Section */}
        <Hero />

        {/* Value Proposition Grid */}
        <ValueProps />

        {/* Course Catalog */}
        <Courses />

        {/* Reputation System */}
        <Reputation />

        {/* Roadmap */}
        <Roadmap />

        {/* Call to Action */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

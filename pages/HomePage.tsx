import {
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  UsersIcon,
  ClockIcon,
  StarIcon,
  ChevronRightIcon,
  HeartPulseIcon,
  BarChart3Icon,
  FileTextIcon,
  ZapIcon } from
'lucide-react';
import Link from 'next/link';
import { ROUTES } from '../constants';
type Page = 'home' | 'services' | 'careers' | 'contact';
interface HomePageProps {
  onNavigate?: (page: Page) => void;
}
export function HomePage({ onNavigate }: HomePageProps) {
  const handleNav = (page: Page) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <main className="w-full">
      {/* ── HERO SECTION ── */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden pt-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#2D7A3A]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#243F7A]/30 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-[#3A9447] animate-pulse" />
                <span className="text-white/90 text-sm font-body font-medium">
                  Trusted RCM Partner in the Middle East
                </span>
              </div>

              <h1 className="font-heading font-bold text-white leading-tight mb-6">
                <span className="block text-5xl md:text-6xl lg:text-7xl">
                  Streamlining
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl text-[#3A9447]">
                  Revenue.
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl mt-1">
                  Strengthening
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl text-white/80">
                  Healthcare.
                </span>
              </h1>

              <p className="text-white/70 text-lg leading-relaxed font-body mb-10 max-w-xl">
                We help healthcare organizations achieve financial clarity,
                operational efficiency, and sustainable growth through
                end-to-end Revenue Cycle Management solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={ROUTES.SERVICES}
                  onClick={() => handleNav('services')}
                  className="btn-primary text-base">

                  Explore Our Services
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link
                  href={ROUTES.CONTACT}
                  onClick={() => handleNav('contact')}
                  className="btn-outline-white text-base">

                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right: Image + Floating Stats */}
            <div className="relative hidden lg:block">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop"
                  alt="Healthcare professionals"
                  className="w-full h-[480px] object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/40 to-transparent" />
              </div>

              {/* Floating Stat Cards */}
              <div className="float-card absolute -left-12 top-12 bg-white rounded-2xl shadow-xl p-4 w-44">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#e8f5ea] flex items-center justify-center">
                    <UsersIcon className="w-5 h-5 text-[#2D7A3A]" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xl text-[#1B3A6B]">
                      500+
                    </p>
                    <p className="text-xs text-gray-500 font-body">Partners</p>
                  </div>
                </div>
                <div className="h-1 bg-gray-100 rounded-full">
                  <div className="h-1 bg-[#2D7A3A] rounded-full w-4/5" />
                </div>
              </div>

              <div className="float-card absolute -right-8 top-24 bg-white rounded-2xl shadow-xl p-4 w-44">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2F9] flex items-center justify-center">
                    <BarChart3Icon className="w-5 h-5 text-[#1B3A6B]" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xl text-[#1B3A6B]">
                      98%
                    </p>
                    <p className="text-xs text-gray-500 font-body">Accuracy</p>
                  </div>
                </div>
                <div className="h-1 bg-gray-100 rounded-full">
                  <div className="h-1 bg-[#1B3A6B] rounded-full w-[98%]" />
                </div>
              </div>

              <div className="float-card absolute -left-8 bottom-16 bg-white rounded-2xl shadow-xl p-4 w-44">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#e8f5ea] flex items-center justify-center">
                    <StarIcon className="w-5 h-5 text-[#2D7A3A]" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xl text-[#1B3A6B]">
                      15+
                    </p>
                    <p className="text-xs text-gray-500 font-body">
                      Years Exp.
                    </p>
                  </div>
                </div>
                <div className="h-1 bg-gray-100 rounded-full">
                  <div className="h-1 bg-[#2D7A3A] rounded-full w-3/4" />
                </div>
              </div>

              <div className="float-card absolute -right-4 bottom-8 bg-white rounded-2xl shadow-xl p-4 w-44">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2F9] flex items-center justify-center">
                    <ClockIcon className="w-5 h-5 text-[#1B3A6B]" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xl text-[#1B3A6B]">
                      24/7
                    </p>
                    <p className="text-xs text-gray-500 font-body">Support</p>
                  </div>
                </div>
                <div className="h-1 bg-gray-100 rounded-full">
                  <div className="h-1 bg-[#1B3A6B] rounded-full w-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 lg:hidden">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <p className="font-heading font-bold text-2xl text-white">500+</p>
              <p className="text-white/60 text-xs font-body mt-1">
                Healthcare Partners
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <p className="font-heading font-bold text-2xl text-white">98%</p>
              <p className="text-white/60 text-xs font-body mt-1">
                Claims Accuracy
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <p className="font-heading font-bold text-2xl text-white">15+</p>
              <p className="text-white/60 text-xs font-body mt-1">
                Years Experience
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <p className="font-heading font-bold text-2xl text-white">24/7</p>
              <p className="text-white/60 text-xs font-body mt-1">Support</p>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <path
              d="M0 80L1440 80L1440 40C1200 0 960 80 720 40C480 0 240 80 0 40L0 80Z"
              fill="white" />

          </svg>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&auto=format&fit=crop"
                  alt="Healthcare team"
                  className="w-full h-[450px] object-cover" />

              </div>
              {/* Accent card */}
              <div className="absolute -bottom-6 -right-6 bg-[#1B3A6B] text-white rounded-2xl p-6 shadow-xl w-52">
                <p className="font-heading font-bold text-3xl mb-1">10+</p>
                <p className="text-white/70 text-sm font-body">
                  Countries Served Across the Middle East
                </p>
              </div>
              {/* Green accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-[#2D7A3A]/10 -z-10" />
            </div>

            {/* Text Side */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#e8f5ea] rounded-full px-4 py-1.5 mb-5">
                <span className="text-[#2D7A3A] text-sm font-heading font-semibold">
                  About Us
                </span>
              </div>
              <h2 className="font-heading font-bold text-4xl text-[#1B3A6B] mb-5 leading-tight">
                About Streamline RCM
              </h2>
              <div className="accent-line mb-6" />
              <p className="text-gray-600 font-body leading-relaxed mb-5">
                Streamline RCM is a trusted Revenue Cycle Management solutions
                provider serving healthcare organizations across the Middle East
                and beyond. We partner with hospitals, clinics, and medical
                centers to deliver reliable, compliant, and performance-driven
                RCM services tailored to today's dynamic healthcare environment.
              </p>
              <p className="text-gray-600 font-body leading-relaxed mb-8">
                With a strong foundation in quality, compliance, and innovation,
                we have earned our position as a preferred RCM partner for
                healthcare providers seeking measurable financial results and
                long-term success.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#2D7A3A] flex-shrink-0" />
                  <span className="text-gray-700 font-body text-sm">
                    Experienced clinical coders & healthcare specialists
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#2D7A3A] flex-shrink-0" />
                  <span className="text-gray-700 font-body text-sm">
                    Strict adherence to HAAD/DHA regulations
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#2D7A3A] flex-shrink-0" />
                  <span className="text-gray-700 font-body text-sm">
                    Advanced analytics & automation tools
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#2D7A3A] flex-shrink-0" />
                  <span className="text-gray-700 font-body text-sm">
                    End-to-end revenue cycle coverage
                  </span>
                </div>
              </div>

              <Link
                href={ROUTES.SERVICES}
                onClick={() => handleNav('services')}
                className="btn-primary">

                Discover Our Services
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE / SERVICES PREVIEW ── */}
      <section className="py-20 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#e8f5ea] rounded-full px-4 py-1.5 mb-5">
              <span className="text-[#2D7A3A] text-sm font-heading font-semibold">
                Our Expertise
              </span>
            </div>
            <h2 className="font-heading font-bold text-4xl text-[#1B3A6B] mb-4">
              Comprehensive RCM Solutions
            </h2>
            <p className="text-gray-600 font-body max-w-2xl mx-auto leading-relaxed">
              We provide comprehensive, technology-enabled RCM solutions
              designed to optimize every stage of the revenue cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="service-card bg-white rounded-2xl p-6 shadow-card border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#EEF2F9] flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-[#1B3A6B]" />
              </div>
              <h3 className="font-heading font-semibold text-[#1B3A6B] text-base mb-2">
                Preauthorization
              </h3>
              <p className="text-gray-500 text-sm font-body leading-relaxed">
                Securing payer approval in advance to confirm coverage and
                prevent reimbursement delays.
              </p>
              <Link
                href={ROUTES.SERVICES}
                onClick={() => handleNav('services')}
                className="mt-4 flex items-center gap-1 text-[#2D7A3A] text-sm font-heading font-semibold hover:gap-2 transition-all">

                Learn more <ChevronRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="service-card bg-white rounded-2xl p-6 shadow-card border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#e8f5ea] flex items-center justify-center mb-4">
                <FileTextIcon className="w-6 h-6 text-[#2D7A3A]" />
              </div>
              <h3 className="font-heading font-semibold text-[#1B3A6B] text-base mb-2">
                Clinical Documentation
              </h3>
              <p className="text-gray-500 text-sm font-body leading-relaxed">
                Collaborating with physicians to strengthen documentation
                practices and safeguard revenue integrity.
              </p>
              <Link
                href={ROUTES.SERVICES}
                onClick={() => handleNav('services')}
                className="mt-4 flex items-center gap-1 text-[#2D7A3A] text-sm font-heading font-semibold hover:gap-2 transition-all">

                Learn more <ChevronRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="service-card bg-white rounded-2xl p-6 shadow-card border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#EEF2F9] flex items-center justify-center mb-4">
                <TrendingUpIcon className="w-6 h-6 text-[#1B3A6B]" />
              </div>
              <h3 className="font-heading font-semibold text-[#1B3A6B] text-base mb-2">
                Revenue Optimization
              </h3>
              <p className="text-gray-500 text-sm font-body leading-relaxed">
                Enhancing your team's capabilities to achieve sustainable
                revenue optimization.
              </p>
              <Link
                href={ROUTES.SERVICES}
                onClick={() => handleNav('services')}
                className="mt-4 flex items-center gap-1 text-[#2D7A3A] text-sm font-heading font-semibold hover:gap-2 transition-all">

                Learn more <ChevronRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="service-card bg-white rounded-2xl p-6 shadow-card border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#e8f5ea] flex items-center justify-center mb-4">
                <ZapIcon className="w-6 h-6 text-[#2D7A3A]" />
              </div>
              <h3 className="font-heading font-semibold text-[#1B3A6B] text-base mb-2">
                Denial Management
              </h3>
              <p className="text-gray-500 text-sm font-body leading-relaxed">
                Using innovative analytics and workflows to minimize denials
                while protecting and recovering revenue.
              </p>
              <Link
                href={ROUTES.SERVICES}
                onClick={() => handleNav('services')}
                className="mt-4 flex items-center gap-1 text-[#2D7A3A] text-sm font-heading font-semibold hover:gap-2 transition-all">

                Learn more <ChevronRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href={ROUTES.SERVICES}
              onClick={() => handleNav('services')}
              className="btn-outline">

              View All Services
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#EEF2F9] rounded-full px-4 py-1.5 mb-5">
              <span className="text-[#1B3A6B] text-sm font-heading font-semibold">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-heading font-bold text-4xl text-[#1B3A6B] mb-4">
              Why Choose Streamline RCM
            </h2>
            <p className="text-gray-600 font-body max-w-2xl mx-auto">
              We bring deep industry expertise, cutting-edge technology, and
              unwavering commitment to compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="relative bg-[#F0F4F8] rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-[#1B3A6B] flex items-center justify-center mb-6">
                <HeartPulseIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#1B3A6B] mb-3">
                Healthcare-Focused Excellence
              </h3>
              <p className="text-gray-600 font-body text-sm leading-relaxed">
                Our team consists of experienced professionals including
                clinical coders, healthcare operations specialists, financial
                experts, and IT professionals bringing deep industry knowledge
                to every engagement.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1B3A6B] to-[#243F7A] rounded-b-2xl" />
            </div>

            {/* Pillar 2 */}
            <div className="relative bg-[#F0F4F8] rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-[#2D7A3A] flex items-center justify-center mb-6">
                <ShieldCheckIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#1B3A6B] mb-3">
                Compliance You Can Trust
              </h3>
              <p className="text-gray-600 font-body text-sm leading-relaxed">
                We operate with strict adherence to regional and international
                healthcare regulations, ensuring accuracy, transparency, and
                data security at every step.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2D7A3A] to-[#3A9447] rounded-b-2xl" />
            </div>

            {/* Pillar 3 */}
            <div className="relative bg-[#F0F4F8] rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-[#1B3A6B] flex items-center justify-center mb-6">
                <BarChart3Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#1B3A6B] mb-3">
                Technology-Driven Performance
              </h3>
              <p className="text-gray-600 font-body text-sm leading-relaxed">
                We leverage advanced analytics, automation, and reporting tools
                to reduce denials, accelerate reimbursements, and improve cash
                flow.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1B3A6B] to-[#243F7A] rounded-b-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="py-20 bg-[#1B3A6B] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#2D7A3A]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="inline-flex items-center gap-2 bg-[#2D7A3A]/30 rounded-full px-4 py-1.5 mb-5">
                <span className="text-[#3A9447] text-sm font-heading font-semibold">
                  Our Vision
                </span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">
                Transforming Healthcare Financial Management
              </h3>
              <p className="text-white/70 font-body leading-relaxed">
                To shape a future where advanced technology and streamlined
                revenue cycle processes empower healthcare providers to operate
                efficiently, remain financially strong, and deliver the highest
                standards of patient care.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="inline-flex items-center gap-2 bg-[#2D7A3A]/30 rounded-full px-4 py-1.5 mb-5">
                <span className="text-[#3A9447] text-sm font-heading font-semibold">
                  Our Mission
                </span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">
                Revolutionizing Revenue Cycle Management
              </h3>
              <p className="text-white/70 font-body leading-relaxed">
                Our mission is to deliver innovative, comprehensive, and
                efficient RCM solutions that remove financial complexity —
                allowing healthcare providers to focus fully on healing, care
                delivery, and clinical excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNER CTA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#e8f5ea] rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#2D7A3A] text-sm font-heading font-semibold">
              Partner With Confidence
            </span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#1B3A6B] mb-6 leading-tight">
            Let's Build a Healthier
            <br />
            Financial Future
          </h2>
          <p className="text-gray-600 font-body text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
            At Streamline RCM, we don't just manage revenue — we strengthen
            healthcare systems. As we expand our global presence, our commitment
            remains unchanged: to protect the integrity of healthcare by
            refining financial processes.
          </p>
          <p className="text-gray-500 font-body mb-10">
            Empowering providers to deliver outstanding patient care.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={ROUTES.CONTACT}
              onClick={() => handleNav('contact')}
              className="btn-primary text-base px-8 py-3.5">

              📞 Contact Us Today
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href={ROUTES.SERVICES}
              onClick={() => handleNav('services')}
              className="btn-outline text-base px-8 py-3.5">

              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>);

}
export default HomePage;

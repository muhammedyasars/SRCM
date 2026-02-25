import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UsersIcon,
  TrendingUpIcon,
  HeartIcon,
  StarIcon } from
'lucide-react';
type Page = 'home' | 'services' | 'careers' | 'contact';
interface CareersPageProps {
  onNavigate: (page: Page) => void;
}
export function CareersPage({ onNavigate }: CareersPageProps) {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="hero-gradient py-24 pt-36 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#2D7A3A]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="text-white/90 text-sm font-body font-medium">
              Join Our Growing Team
            </span>
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
            Careers at
            <br />
            <span className="text-[#3A9447]">Streamline RCM</span>
          </h1>
          <p className="text-white/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Be part of a team that's transforming healthcare financial
            management across the Middle East. We're looking for passionate
            professionals to join our mission.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <path
              d="M0 60L1440 60L1440 30C1200 0 960 60 720 30C480 0 240 60 0 30L0 60Z"
              fill="#F0F4F8" />

          </svg>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-[#1B3A6B] mb-3">
              Why Work With Us
            </h2>
            <p className="text-gray-600 font-body max-w-xl mx-auto">
              Join a team of dedicated healthcare professionals making a real
              difference in the industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-card border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#EEF2F9] flex items-center justify-center mx-auto mb-4">
                <TrendingUpIcon className="w-6 h-6 text-[#1B3A6B]" />
              </div>
              <h3 className="font-heading font-semibold text-[#1B3A6B] mb-2">
                Career Growth
              </h3>
              <p className="text-gray-500 text-sm font-body">
                Clear career paths and continuous learning opportunities in
                healthcare RCM.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-card border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#e8f5ea] flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="w-6 h-6 text-[#2D7A3A]" />
              </div>
              <h3 className="font-heading font-semibold text-[#1B3A6B] mb-2">
                Expert Team
              </h3>
              <p className="text-gray-500 text-sm font-body">
                Work alongside certified coders, clinical specialists, and
                industry veterans.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-card border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#EEF2F9] flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-6 h-6 text-[#1B3A6B]" />
              </div>
              <h3 className="font-heading font-semibold text-[#1B3A6B] mb-2">
                Meaningful Work
              </h3>
              <p className="text-gray-500 text-sm font-body">
                Contribute to strengthening healthcare systems and improving
                patient outcomes.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-card border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#e8f5ea] flex items-center justify-center mx-auto mb-4">
                <StarIcon className="w-6 h-6 text-[#2D7A3A]" />
              </div>
              <h3 className="font-heading font-semibold text-[#1B3A6B] mb-2">
                Competitive Benefits
              </h3>
              <p className="text-gray-500 text-sm font-body">
                Attractive compensation, training programs, and professional
                certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#e8f5ea] rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#2D7A3A] text-sm font-heading font-semibold">
                Open Positions
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl text-[#1B3A6B]">
              Current Openings
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {/* RCM Supervisors */}
            <div className="bg-[#F0F4F8] rounded-2xl p-6 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1B3A6B] flex items-center justify-center flex-shrink-0">
                  <BriefcaseIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#1B3A6B] mb-1">
                    RCM Supervisor
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-1 text-gray-500 text-xs font-body">
                      <MapPinIcon className="w-3.5 h-3.5" /> Middle East
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs font-body">
                      <ClockIcon className="w-3.5 h-3.5" /> Full-time
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#e8f5ea] text-[#2D7A3A]">
                      Leadership
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm font-body mt-2">
                    Lead and manage RCM operations teams, ensuring quality
                    standards, compliance, and performance targets are met
                    across all revenue cycle functions.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      5+ years RCM experience
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      Leadership skills
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      HAAD/DHA knowledge
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleNav('contact')}
                className="btn-primary text-sm px-5 py-2.5 flex-shrink-0 self-start sm:self-center">

                Apply Now <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* IP Coder / OP Coder */}
            <div className="bg-[#F0F4F8] rounded-2xl p-6 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2D7A3A] flex items-center justify-center flex-shrink-0">
                  <BriefcaseIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#1B3A6B] mb-1">
                    IP Coder / OP Coder
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-1 text-gray-500 text-xs font-body">
                      <MapPinIcon className="w-3.5 h-3.5" /> Middle East
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs font-body">
                      <ClockIcon className="w-3.5 h-3.5" /> Full-time
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EEF2F9] text-[#1B3A6B]">
                      Clinical Coding
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm font-body mt-2">
                    Perform accurate inpatient and outpatient medical coding
                    using ICD-10, CPT, and DRG coding systems in compliance with
                    HAAD/DHA guidelines.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      CCS/CPC certification
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      ICD-10 proficiency
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      2+ years experience
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleNav('contact')}
                className="btn-primary text-sm px-5 py-2.5 flex-shrink-0 self-start sm:self-center">

                Apply Now <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Approval Coder */}
            <div className="bg-[#F0F4F8] rounded-2xl p-6 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1B3A6B] flex items-center justify-center flex-shrink-0">
                  <BriefcaseIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#1B3A6B] mb-1">
                    Approval Coder
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-1 text-gray-500 text-xs font-body">
                      <MapPinIcon className="w-3.5 h-3.5" /> Middle East
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs font-body">
                      <ClockIcon className="w-3.5 h-3.5" /> Full-time
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#e8f5ea] text-[#2D7A3A]">
                      Preauthorization
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm font-body mt-2">
                    Review and code preauthorization requests, ensuring accurate
                    clinical justification and compliance with payer
                    requirements for optimal approval rates.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      Preauth experience
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      Payer guidelines knowledge
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      Clinical background
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleNav('contact')}
                className="btn-primary text-sm px-5 py-2.5 flex-shrink-0 self-start sm:self-center">

                Apply Now <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Resubmission Officer */}
            <div className="bg-[#F0F4F8] rounded-2xl p-6 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2D7A3A] flex items-center justify-center flex-shrink-0">
                  <BriefcaseIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#1B3A6B] mb-1">
                    Resubmission Officer
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-1 text-gray-500 text-xs font-body">
                      <MapPinIcon className="w-3.5 h-3.5" /> Middle East
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs font-body">
                      <ClockIcon className="w-3.5 h-3.5" /> Full-time
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EEF2F9] text-[#1B3A6B]">
                      Denial Management
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm font-body mt-2">
                    Handle denied claims by analyzing denial reasons, preparing
                    appeals, and resubmitting claims within HAAD/DHA turnaround
                    time requirements.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      Denial analysis skills
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      Appeals writing
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      HAAD/DHA policies
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleNav('contact')}
                className="btn-primary text-sm px-5 py-2.5 flex-shrink-0 self-start sm:self-center">

                Apply Now <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Jr. Case Manager */}
            <div className="bg-[#F0F4F8] rounded-2xl p-6 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1B3A6B] flex items-center justify-center flex-shrink-0">
                  <BriefcaseIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#1B3A6B] mb-1">
                    Jr. Case Manager
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-1 text-gray-500 text-xs font-body">
                      <MapPinIcon className="w-3.5 h-3.5" /> Middle East
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs font-body">
                      <ClockIcon className="w-3.5 h-3.5" /> Full-time
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#e8f5ea] text-[#2D7A3A]">
                      Clinical
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm font-body mt-2">
                    Support senior case managers in reviewing clinical
                    documentation, coordinating with physicians, and ensuring
                    accurate representation of patient conditions.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      Clinical background
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      Documentation skills
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      Entry level welcome
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleNav('contact')}
                className="btn-primary text-sm px-5 py-2.5 flex-shrink-0 self-start sm:self-center">

                Apply Now <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Submission Officer */}
            <div className="bg-[#F0F4F8] rounded-2xl p-6 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2D7A3A] flex items-center justify-center flex-shrink-0">
                  <BriefcaseIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#1B3A6B] mb-1">
                    Submission Officer
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-1 text-gray-500 text-xs font-body">
                      <MapPinIcon className="w-3.5 h-3.5" /> Middle East
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs font-body">
                      <ClockIcon className="w-3.5 h-3.5" /> Full-time
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EEF2F9] text-[#1B3A6B]">
                      Claims
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm font-body mt-2">
                    Manage timely and accurate submission of medical claims to
                    insurance payers, ensuring all documentation is complete and
                    compliant with submission requirements.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      Claims experience
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      Detail-oriented
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-body">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D7A3A]" />{' '}
                      Insurance knowledge
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleNav('contact')}
                className="btn-primary text-sm px-5 py-2.5 flex-shrink-0 self-start sm:self-center">

                Apply Now <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F0F4F8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-[#1B3A6B] mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-gray-600 font-body mb-8 leading-relaxed">
            We're always looking for talented healthcare professionals. Send us
            your CV and we'll reach out when a suitable position opens.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="btn-primary text-base px-8 py-3.5">

            Send Your CV
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </section>
    </main>);

}
export default CareersPage;

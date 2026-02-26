import {
  ShieldCheckIcon,
  FileTextIcon,
  TrendingUpIcon,
  ClipboardListIcon,
  SearchCheckIcon,
  AlertCircleIcon,
  CheckSquareIcon,
  MicIcon,
  BriefcaseIcon,
  FileSignatureIcon,
  ArrowRightIcon,
  CheckCircleIcon } from
'lucide-react';
import Link from 'next/link';
import { ROUTES } from '../constants';
type Page = 'home' | 'services' | 'careers' | 'contact';
interface ServicesPageProps {
  onNavigate?: (page: Page) => void;
}
interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  color: 'navy' | 'green';
}
export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const handleNav = (page: Page) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const services: Service[] = [
  {
    id: 'preauth',
    icon: <ShieldCheckIcon className="w-7 h-7" />,
    title: 'Preauthorization',
    shortDesc:
    'Securing payer approval in advance to confirm coverage and prevent reimbursement delays or denials.',
    fullDesc:
    'Our preauthorization team secures payer approval in advance to confirm coverage and prevent reimbursement delays or denials. We have a team of well-experienced qualified professionals including insurance coordinators and coders to get optimum approvals for the patient care according to the medical necessity.',
    highlights: [
    'Insurance coordination',
    'Medical necessity review',
    'Optimum approval rates',
    'Experienced coders'],

    color: 'navy'
  },
  {
    id: 'cdi',
    icon: <FileTextIcon className="w-7 h-7" />,
    title: 'Clinical Documentation Improvement',
    shortDesc:
    'Collaborating with physicians to strengthen clinical documentation practices and safeguard revenue integrity.',
    fullDesc:
    'Our case managers collaborate with physicians to strengthen clinical documentation practices, safeguarding revenue integrity and supporting high-quality patient care. We ensure that clinical records accurately reflect the complexity and severity of patient conditions.',
    highlights: [
    'Physician collaboration',
    'Revenue integrity',
    'Quality patient care',
    'Case management'],

    color: 'green'
  },
  {
    id: 'revenue',
    icon: <TrendingUpIcon className="w-7 h-7" />,
    title: 'Revenue Optimization',
    shortDesc:
    "Enhancing your team's capabilities to achieve sustainable revenue optimization without compromising patient care.",
    fullDesc:
    "We enhance your team's capabilities to achieve sustainable revenue optimization without compromising patient care. Through process improvement, staff training, and performance analytics, we identify and close revenue leakage points across the entire cycle.",
    highlights: [
    'Process improvement',
    'Staff training',
    'Performance analytics',
    'Revenue leakage prevention'],

    color: 'navy'
  },
  {
    id: 'claims',
    icon: <ClipboardListIcon className="w-7 h-7" />,
    title: 'Claims Management',
    shortDesc:
    'Managing claims with accurate coding and timely submission to reduce denials and improve reimbursement outcomes.',
    fullDesc:
    'We manage claims with accurate coding and timely submission to reduce denials and improve reimbursement outcomes. Our dedicated claims team ensures every claim is properly coded, documented, and submitted within payer deadlines.',
    highlights: [
    'Accurate coding',
    'Timely submission',
    'Denial reduction',
    'Reimbursement optimization'],

    color: 'green'
  },
  {
    id: 'scrubbing',
    icon: <SearchCheckIcon className="w-7 h-7" />,
    title: 'Claim Scrubbing',
    shortDesc:
    'Leveraging advanced automated validation to ensure every claim meets accuracy and compliance standards.',
    fullDesc:
    'Leveraging advanced automated validation, we ensure every claim meets accuracy and compliance standards before submission. Our claim scrubbing process catches errors, inconsistencies, and compliance issues that could lead to denials or delays.',
    highlights: [
    'Automated validation',
    'Pre-submission review',
    'Error detection',
    'Compliance verification'],

    color: 'navy'
  },
  {
    id: 'denial',
    icon: <AlertCircleIcon className="w-7 h-7" />,
    title: 'Denial Management',
    shortDesc:
    'Using innovative analytics and workflows to minimize denials while protecting and recovering your revenue.',
    fullDesc:
    'Using innovative analytics and workflows, we minimize denials while protecting and recovering your revenue. We have well-experienced certified coders with a dedicated team for denial management. We always keep an eye on the remittance advice and maintain the turn-around time for resubmission as per the HAAD/DHA policy procedure and payer guidelines.',
    highlights: [
    'Certified coders',
    'HAAD/DHA compliance',
    'Remittance monitoring',
    'Timely resubmission'],

    color: 'green'
  },
  {
    id: 'qa',
    icon: <CheckSquareIcon className="w-7 h-7" />,
    title: 'Quality Assurance & Regulation Compliance',
    shortDesc:
    'Conducting meticulous audits to guarantee coding accuracy, service excellence, and compliance with industry standards.',
    fullDesc:
    'We conduct meticulous audits to guarantee coding accuracy, service excellence, and compliance with the highest industry standards. Our QA process includes regular internal audits, coding reviews, and compliance checks to ensure ongoing accuracy and regulatory adherence.',
    highlights: [
    'Meticulous audits',
    'Coding accuracy',
    'Regulatory compliance',
    'Service excellence'],

    color: 'navy'
  },
  {
    id: 'transcription',
    icon: <MicIcon className="w-7 h-7" />,
    title: 'Medical Transcription',
    shortDesc:
    'Converting clinical documentation into accurate records, ensuring compliance and supporting optimal patient outcomes.',
    fullDesc:
    'Our transcription services convert clinical documentation into accurate records, ensuring compliance and supporting optimal patient outcomes. We provide fast, accurate, and HIPAA-compliant transcription services for all types of medical documentation.',
    highlights: [
    'Accurate records',
    'HIPAA compliance',
    'Fast turnaround',
    'All documentation types'],

    color: 'green'
  },
  {
    id: 'consultancy',
    icon: <BriefcaseIcon className="w-7 h-7" />,
    title: 'RCM Consultancy',
    shortDesc:
    'Expert consultancy across the entire revenue cycle to optimize processes and improve financial performance.',
    fullDesc:
    'We provide expert consultancy across the entire revenue cycle, helping healthcare organizations optimize processes, improve financial performance, and enhance operational efficiency. Our consultants bring years of hands-on experience to deliver actionable insights and measurable results.',
    highlights: [
    'Process optimization',
    'Financial improvement',
    'Operational efficiency',
    'Actionable insights'],

    color: 'navy'
  },
  {
    id: 'insurance',
    icon: <FileSignatureIcon className="w-7 h-7" />,
    title: 'Insurance Contract Services',
    shortDesc:
    'Comprehensive insurance contract management to maximize reimbursement rates and ensure favorable terms.',
    fullDesc:
    'Our insurance contract services help healthcare organizations negotiate, manage, and optimize their payer contracts. We analyze contract terms, identify improvement opportunities, and ensure your organization receives fair reimbursement for the services provided.',
    highlights: [
    'Contract negotiation',
    'Rate optimization',
    'Payer relations',
    'Contract analysis'],

    color: 'green'
  }];

  return (
    <main className="w-full">
      {/* Hero */}
      <section className="hero-gradient py-24 pt-36 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#2D7A3A]/10 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="text-white/90 text-sm font-body font-medium">
              Comprehensive RCM Solutions
            </span>
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
            Our Services
          </h1>
          <p className="text-white/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Technology-enabled RCM solutions designed to optimize every stage of
            the revenue cycle — from preauthorization to final collections.
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

      {/* Services Grid */}
      <section className="py-16 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) =>
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 service-card">

                <div className="flex items-start gap-5">
                  <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${service.color === 'navy' ? 'bg-[#EEF2F9] text-[#1B3A6B]' : 'bg-[#e8f5ea] text-[#2D7A3A]'}`}>

                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-[#1B3A6B] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-body mb-4 leading-relaxed">
                      {service.fullDesc}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.highlights.map((h) =>
                    <div key={h} className="flex items-center gap-2">
                          <CheckCircleIcon
                        className={`w-4 h-4 flex-shrink-0 ${service.color === 'navy' ? 'text-[#1B3A6B]' : 'text-[#2D7A3A]'}`} />

                          <span className="text-gray-600 text-xs font-body">
                            {h}
                          </span>
                        </div>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl text-[#1B3A6B] mb-5">
            Ready to Optimize Your Revenue Cycle?
          </h2>
          <p className="text-gray-600 font-body text-lg mb-8 leading-relaxed">
            Partner with Streamline RCM to transform your financial operations
            and focus on what matters most — delivering exceptional patient
            care.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={ROUTES.CONTACT}
              onClick={() => handleNav('contact')}
              className="btn-primary text-base px-8 py-3.5">

              Get Started Today
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href={ROUTES.CAREERS}
              onClick={() => handleNav('careers')}
              className="btn-outline text-base px-8 py-3.5">

              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>);

}
export default ServicesPage;

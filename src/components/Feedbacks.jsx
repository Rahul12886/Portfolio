import React, { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiAward,
  FiCheckCircle,
  FiCalendar,
} from "react-icons/fi";
import { SectionWrapper } from "../hoc";
const certificates = [
  {
    id: 1,
    title: "Wipro TalentNext Training Program",
    subtitle: ".NET Full Stack Development",
    description:
      "Completed enterprise-focused training in C#, ASP.NET, SQL Server, and frontend technologies, gaining practical experience in scalable web development, backend integration, database management, responsive UI design, and modern software engineering practices.",
    href: "https://drive.google.com/file/d/1SYqP4xtmglAtaWeZO5H453YIe8MuibZQ/view?usp=drivesdk",
    issuedDate: "October 2025",
  },
  {
    id: 2,
    title: "In-House Training",
    subtitle: "DSA & Web Development",
    description:
      "Hands-on training focused on data structures, algorithms, problem-solving techniques, and scalable web application development, improving coding efficiency, logical thinking, software design understanding, and practical implementation skills through real-world projects.",
    href: "https://media.licdn.com/dms/image/v2/D4D22AQHBzZBhJ137Tg/feedshare-shrink_1280/feedshare-shrink_1280/0/1726835860406?e=1780531200&v=beta&t=G4hrLP26A0WXUjhBiEl01Z-LVmH521fyhxdFpN-SCls",
    issuedDate: "June 2024",
  },
  {
    id: 3,
    title: "Foundation of Cloud IOT Edge ML",
    subtitle: "NPTEL",
    description:
      "Completed NPTEL certification on Foundations of Cloud, IoT, Edge, and Machine Learning, gaining knowledge of cloud computing, connected devices, edge technologies, intelligent systems, and modern data-driven application development concepts.",
    href: "https://media.licdn.com/dms/image/v2/D4D22AQHRrJVXOQZoIQ/feedshare-shrink_1280/B4DZcL1Xp0GkAs-/0/1748250234977?e=1780531200&v=beta&t=jFJR_HuZU4nPtqgZgUs-TxMasQr5zTB4RJ5-0C7yagQ",
    issuedDate: "April 2025",
  },
  {
    id: 4,
    title: "Collaborative Task Management system for Teams",
    subtitle: "Research Paper",
    description:
      "Developed a collaborative task management system enabling real-time team coordination, task tracking, role-based access, secure authentication, and efficient workflow management using modern full stack technologies and scalable backend architecture.",
    href: "https://media.licdn.com/dms/image/v2/D4D22AQG3SOH1cKnScg/feedshare-shrink_800/B4DZb.GAk6GwAg-/0/1748019714130?e=1780531200&v=beta&t=UmXJ-_er0PD1B9c_QWRqslA75crV0e-vpjGwYSSfaDw",
    issuedDate: "May 2025",
  },
  {
    id: 5,
    title: "AWS Cloud Solutions Architect",
    subtitle: "AWS Cloud",
    description:
      "Worked on intelligent applications integrating AI automation, predictive systems, and enhanced user interaction flowsCompleted training in AWS cloud architecture, infrastructure deployment, networking, systems, and application services, gaining hands-on experience in scalable cloud solutions, real-world projects, and foundational preparation for AWS certification.",
    href: "https://media.licdn.com/dms/image/v2/D562DAQEI5Vy-MhfgGQ/profile-treasury-document-images_1280/B56Zyf8V_KJQAU-/1/1772209924755?e=1779321600&v=beta&t=_Qk7qklGVEDdc9fgxAXpOnD5vz03KAWFod8uvi9KOcw",
    issuedDate: "Feb 2026",
  },
  {
    id: 6,
    title: "Java FullStack Development",
    subtitle: "Java Developer",
    description:
      "Completed training in Java Full Stack Development, learning Java, Angular, HTML, CSS, Spring, and Spring Boot technologies. Gained practical experience in building scalable web applications, backend integration, responsive frontend interfaces, and full stack development through hands-on projects and real-world application development concepts.",
    href: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~U253239BSL4I/CERTIFICATE_LANDING_PAGE~U253239BSL4I.jpeg",
    issuedDate: "Jun 2025",
  },
];
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};
const CertificateCard = memo(
  ({ certificate, index, onViewDetails }) => {
    const {
      title,
      subtitle,
      description,
      href,
      issuedDate,
    } = certificate;
    const formattedDate = new Date(
      issuedDate
    ).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={index}
        whileHover={{
          y: -5,
        }}
        className="w-full"
      >
        <div className="group relative h-full overflow-hidden rounded-[24px] border border-white/[0.04] bg-[#0a0f1c]/95 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/20 hover:shadow-[0_8px_25px_rgba(0,0,0,0.22)]">

          {/* Top Border */}
          <div className="absolute top-0 left-0 h-[1px] w-full bg-cyan-400/20"></div>
          <div className="relative z-10 p-6 flex flex-col h-full">
            {/* Header */}
            <div className="flex items-start justify-between">
              {/* Left Side */}
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#111827]/80 border border-white/[0.04] flex items-center justify-center">
                  <FiAward className="text-cyan-400/90 text-[20px]" />
                </div>
                {/* Content */}
                <div>
                  {/* Title */}
                  <h3 className="text-slate-100 text-[20px] font-semibold leading-[28px]">
                    {title}
                  </h3>
                  {/* Subtitle */}
                  <p className="mt-1 text-cyan-400 text-[11px] uppercase tracking-[3px] font-medium">
                    {subtitle}
                  </p>
                  {/* Date */}
                  <div className="flex items-center gap-2 mt-3">
                    <FiCalendar className="text-slate-500 text-[11px]" />
                    <span className="text-slate-500 text-[12px]">
                      {formattedDate}
                    </span>
                  </div>
                </div>
              </div>
              {/* Link */}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#111827]/80 border border-white/[0.04] flex items-center justify-center hover:bg-cyan-500/10 transition-all duration-300"
              >
                <FiExternalLink className="text-cyan-400/90 text-[15px]" />
              </a>
            </div>

            {/* Description */}
            <div className="mt-6 flex-grow">
              <div className="w-full h-[1px] bg-white/[0.04] mb-5"></div>
              <p className="text-slate-400 text-[14px] leading-[28px]">
                {description}
              </p>
            </div>
            {/* Footer */}
            <div className="mt-7 flex items-center justify-between pt-5 border-t border-white/[0.04]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <span className="text-slate-500 text-[13px]">
                  Verified
                </span>
              </div>

              <button
                onClick={() =>
                  onViewDetails(certificate)
                }
                className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-400/10 text-cyan-300 text-[13px] font-medium hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);
CertificateCard.displayName = "CertificateCard";

const StatsSection = () => {
  const stats = [
    {
      label: "Total Certifications",
      value: "6",
      icon: FiAward,
    },
    {
      label: "Skills Acquired",
      value: "20+",
      icon: FiCheckCircle,
    },
    {
      label: "Learning Hours",
      value: "200+",
      icon: FiCalendar,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: idx * 0.1,
            duration: 0.6,
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -3,
          }}
          className="rounded-2xl border border-white/[0.04] bg-[#0a0f1c]/95 backdrop-blur-xl p-6 text-center transition-all duration-500 hover:border-cyan-400/20"
        >
          <stat.icon className="text-cyan-400/90 text-[24px] mx-auto mb-3" />
          <div className="text-3xl font-bold text-slate-100 mb-2">
            {stat.value}
          </div>
          <div className="text-slate-500 text-[11px] uppercase tracking-[2px]">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const DetailModal = ({
  certificate,
  onClose,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.95,
        }}
        transition={{
          duration: 0.35,
        }}
        onClick={(e) =>
          e.stopPropagation()
        }
        className="w-full max-w-2xl overflow-hidden rounded-[26px] border border-white/[0.05] bg-[#0a0f1c] shadow-2xl"
      >
        <div className="p-8">

          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#111827]/80 border border-white/[0.04] flex items-center justify-center">
                <FiAward className="text-cyan-400/90 text-[24px]" />
              </div>
              <div>
                <h3 className="text-slate-100 text-[22px] font-semibold">
                  {certificate.title}
                </h3>
                <p className="text-cyan-400 text-[12px] mt-1">
                  {certificate.subtitle}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-slate-500 hover:text-slate-300 text-3xl transition-all duration-300"
            >
              ×
            </button>
          </div>

          {/* Description */}
          <div>
            <p className="text-slate-500 text-[11px] uppercase tracking-[3px] mb-3">
              Description
            </p>
            <p className="text-slate-400 text-[15px] leading-[30px]">
              {certificate.description}
            </p>
          </div>
          {/* Date */}
          <div className="mt-6">
            <p className="text-slate-500 text-[11px] uppercase tracking-[3px] mb-2">
              Issue Date
            </p>
            <p className="text-slate-300 text-[14px]">
              {new Date(
                certificate.issuedDate
              ).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </p>
          </div>
          {/* Button */}
          <div className="mt-8 pt-6 border-t border-white/[0.04]">
            <a
              href={certificate.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/10 border border-cyan-400/10 text-cyan-300 text-[14px] font-medium hover:bg-cyan-500/10 transition-all duration-300"
            >
              <span>
                View Certificate
              </span>
              <FiExternalLink className="text-[13px]" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] =
    useState(null);
  const handleViewDetails =
    useCallback((certificate) => {
      setSelectedCertificate(certificate);
    }, []);
  const handleCloseModal =
    useCallback(() => {
      setSelectedCertificate(null);
    }, []);

  return (
    <div className="relative py-24 bg-[#020617] overflow-hidden">

      {/* Soft Background Blur */}
      <div className="absolute top-32 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl"></div>

      {/* Main Container */}
      <div className="relative max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-slate-500 uppercase tracking-[6px] text-[11px] font-semibold mb-4">
            PROFESSIONAL DEVELOPMENT
          </p>

          <h2 className="font-black leading-[1.05]">
            <span className="block text-slate-100 lg:text-[64px] md:text-[52px] sm:text-[44px] text-[36px]">
              Certifications &
            </span>

            <span className="block mt-1 text-cyan-400 lg:text-[64px] md:text-[52px] sm:text-[44px] text-[36px]">
              Achievements
            </span>
          </h2>
          <p className="mt-8 text-slate-500 text-[15px] leading-[32px] max-w-2xl mx-auto">
            Professional certifications and
            training programs completed to
            strengthen technical expertise,
            software engineering capabilities,
            and full stack development
            proficiency.
          </p>
        </motion.div>
        {/* Stats */}
        <StatsSection />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {certificates.map(
            (certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
                onViewDetails={
                  handleViewDetails
                }
              />
            )
          )}
        </div>
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-slate-600 text-[12px]">
            Verified certificates and
            credential links available for
            professional review.
          </p>
        </motion.div>
      </div>
      {/* Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <DetailModal
            certificate={
              selectedCertificate
            }
            onClose={
              handleCloseModal
            }
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default SectionWrapper(
  CertificatesSection,
  "certificates"
);
import "./S2MediaProject.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faFileInvoiceDollar,
  faUsers,
  faPhoneAlt,
  faMoneyCheckAlt,
  faChartBar,
  faUserShield,
  faCog,
  faLink,
  faComments,
  faTachometerAlt,
  faProjectDiagram,
  faUserTie,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

/* ───────── data ───────── */

const techTags = [
  { label: "CodeIgniter 3", color: "#dd4814" },
  { label: "MySQL", color: "#00758f" },
  { label: "CRM", color: "#9929fb" },
  { label: "mPDF / TCPDF", color: "#e6522c" },
  { label: "SMS API", color: "#16a34a" },
  { label: "Bootstrap", color: "#7952b3" },
  { label: "jQuery", color: "#0868ac" },
  { label: "Chart.js", color: "#ff6384" },
  { label: "CKEditor", color: "#4a90d9" },
];

const coreFeatures = [
  {
    icon: faFileInvoiceDollar,
    color: "#3b82f6",
    title: "Driller billing",
    desc: "Bill management for field drillers with balance tracking, credit/expense breakdown, and per-day vehicle ledger entries.",
  },
  {
    icon: faProjectDiagram,
    color: "#10b981",
    title: "Project tracking",
    desc: "Full project lifecycle management with status, priority, assignment, task tracking, and day-end task closure workflows.",
  },
  {
    icon: faUsers,
    color: "#f59e0b",
    title: "Client CRM",
    desc: "Clients with calls, appointments, notes, remarks, website, social links, partner history, and company associations.",
  },
  {
    icon: faUserTie,
    color: "#8b5cf6",
    title: "Employee management",
    desc: "Employee records per country/company, task assignment, service enquiry handling, and invoice + payment status updates.",
  },
  {
    icon: faMoneyCheckAlt,
    color: "#ef4444",
    title: "Accounts & daybook",
    desc: "Accounts transaction ledger (credit/debit) with category grouping, daybook credit expenses, and annual/monthly/weekly charts.",
  },
  {
    icon: faChartBar,
    color: "#06b6d4",
    title: "Reports & exports",
    desc: "PDF exports via mPDF/TCPDF; Excel via ExcelReader, vehicle fuel consumption reports, dividends, and manager bill reports.",
  },
  {
    icon: faUserShield,
    color: "#10b981",
    title: "Role-based access",
    desc: "User groups with granular permission keys (e.g. bill_view, project_view), IP whitelist, and access-denied redirection.",
  },
  {
    icon: faCog,
    color: "#f59e0b",
    title: "Admin settings",
    desc: "DB-driven constants (SMS, SMTP, app title, pagination, defaults), backup management, error log viewer, and menu editor.",
  },
  {
    icon: faLink,
    color: "#3b82f6",
    title: "Back-link tracker",
    desc: "Multi-client SEO back-link tracking with URL, source type, response status, and assignment to clients.",
  },
  {
    icon: faComments,
    color: "#8b5cf6",
    title: "Chat & SMS",
    desc: "In-app chat module plus configurable SMS API integration with template support and test number management.",
  },
  {
    icon: faTachometerAlt,
    color: "#ef4444",
    title: "Dashboard & charts",
    desc: "Live income/expense bar + pie charts filterable by week, month, or year. Country- and role-filtered employee summaries.",
  },
  {
    icon: faFileAlt,
    color: "#06b6d4",
    title: "Proposal generator",
    desc: "CKEditor-powered proposal builder with configurable optional content and notes, exported to PDF for client delivery.",
  },
];

/* ───────── component ───────── */

const SenthurProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="s2media-page">
      {/* ── Back Button ── */}
      <div className="content pt-8 pb-5">
        <Link to="/" className="s2-back-btn">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* ══════════════ HERO SECTION ══════════════ */}
      <section className="s2-hero">
        <div className="content">
          <p className="s2-hero-tagline">
            FULL-STACK WEB APPLICATION · CODEIGNITER 3 MVC
          </p>
          <h1 className="s2-hero-title">
            Senthur Africa
            <br />
            <span className="s2-hero-highlight">
              CRM &amp; Field Operations
            </span>
            <br />
            Management System
          </h1>
          <p className="s2-hero-desc">
            A comprehensive PHP/CodeIgniter MVC platform for managing field
            drilling operations across multiple African countries — covering
            employee billing, project tracking, client CRM, accounts, day-end
            reporting, and PDF/Excel exports.
          </p>

          {/* Tech tags */}
          <div className="s2-tags">
            {techTags.map((t) => (
              <span
                key={t.label}
                className="s2-tag"
                style={{ borderColor: t.color, color: t.color }}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CORE MODULES & FEATURES ══════════════ */}
      <section className="s2-features">
        <div className="content">
          <p className="s2-section-label">CORE MODULES &amp; FEATURES</p>
          <div className="s2-features-grid">
            {coreFeatures.map((f, i) => (
              <div className="s2-feature-card" key={i}>
                <span
                  className="s2-feature-icon"
                  style={{
                    color: f.color,
                    backgroundColor: `${f.color}14`,
                  }}
                >
                  <FontAwesomeIcon icon={f.icon} />
                </span>
                <h3 className="s2-feature-title">{f.title}</h3>
                <p className="s2-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SenthurProject;

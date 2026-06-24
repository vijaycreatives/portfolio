import "./S2MediaProject.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faFileAlt,
  faFileInvoiceDollar,
  faUsers,
  faPhoneAlt,
  faMoneyCheckAlt,
  faBell,
  faCalendarAlt,
  faNewspaper,
  faChartBar,
  faUserShield,
  faChevronRight,
  faPaperPlane,
  faTachometerAlt,
  faReceipt,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

/* ───────── data ───────── */

const techTags = [
  { label: "CodeIgniter 4", color: "#dd4814" },
  { label: "MySQL", color: "#00758f" },
  { label: "CRM", color: "#9929fb" },
  { label: "mPDF / TCPDF", color: "#e6522c" },
  { label: "SMS & Email", color: "#16a34a" },
  { label: "Bootstrap", color: "#7952b3" },
  { label: "jQuery", color: "#0868ac" },
  { label: "CKEditor", color: "#4a90d9" },
];

const coreFeatures = [
  {
    icon: faFileAlt,
    color: "#ef4444",
    title: "Release order management",
    desc: "Create, shift, cancel, and track ROs per media type. Work orders, calendar view, upcoming RO alerts, and PDF generation with email/SMS dispatch.",
  },
  {
    icon: faFileInvoiceDollar,
    color: "#3b82f6",
    title: "Invoicing",
    desc: "Single and group invoice generation, duplicate invoice PDF, revised invoice flow, email notification to clients, and Excel/PDF export.",
  },
  {
    icon: faUsers,
    color: "#f59e0b",
    title: "Client CRM",
    desc: "Client profiles with calls, appointments, remarks, GST, discount %, opening/current balance, sub-agent links, and business category tracking.",
  },
  {
    icon: faPhoneAlt,
    color: "#10b981",
    title: "Lead management",
    desc: "Leads with calls, appointments, referral tracking, data source, and one-click lead-to-client conversion.",
  },
  {
    icon: faMoneyCheckAlt,
    color: "#ef4444",
    title: "Accounts & receipts",
    desc: "Payment receipts, client ledger, group ledger, outstanding balance reports, invoice-by-days view, and receipt PDF/Excel export.",
  },
  {
    icon: faBell,
    color: "#8b5cf6",
    title: "Dashboard & reminders",
    desc: "Today/tomorrow/next 7-day RO calendar widget, advertisement expiry reminders (30, 60-day, yearly), and general reminder notifications.",
  },
  {
    icon: faCalendarAlt,
    color: "#06b6d4",
    title: "Press meet management",
    desc: "Press meet events with gallery, type classification, and export to PDF/Excel.",
  },
  {
    icon: faNewspaper,
    color: "#3b82f6",
    title: "Advt. provider & sub-agents",
    desc: "Newspaper/channel provider profiles with contacts, email, screen/timing data. Sub-agent management with client association.",
  },
  {
    icon: faChartBar,
    color: "#f59e0b",
    title: "Reports & exports",
    desc: "Ledger, outstanding, receipt, and invoice reports — all exportable to PDF (mPDF/TCPDF) and Excel, with date-range filtering.",
  },
  {
    icon: faUserShield,
    color: "#10b981",
    title: "Role-based access",
    desc: "User groups, granular permission keys, IP whitelist, authorised access check, and user activity audit log.",
  },
];

const lifecycleSteps = [
  { icon: faBookOpen, color: "#10b981", label: "Ad booking /\nRO created" },
  { icon: faPaperPlane, color: "#22c55e", label: "PDF sent via\nemail & SMS" },
  {
    icon: faTachometerAlt,
    color: "#f59e0b",
    label: "Upcoming RO\ntracked on\ndashboard",
  },
  {
    icon: faFileInvoiceDollar,
    color: "#8b5cf6",
    label: "Invoice\ngenerated",
  },
  {
    icon: faReceipt,
    color: "#ef4444",
    label: "Payment\nreceipt &\nledger updated",
  },
];

/* ───────── component ───────── */

const S2MediaProject = () => {
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
          <p className="s2-hero-tagline">FULL-STACK WEB APPLICATION · CODEIGNITER 4 MVC</p>
          <h1 className="s2-hero-title">
            S2 Media
            <br />
            <span className="s2-hero-highlight">Advertising &amp; Release</span>
            <br />
            Order Management
          </h1>
          <p className="s2-hero-desc">
            A CodeIgniter 4 platform built for media advertising agencies —
            managing release orders across FM radio, newspaper, TV channels, bus
            ads, SMS, theatre, and train media; with full invoicing, client CRM,
            accounts, lead tracking, and press meet management.
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

      {/* ══════════════ CORE FEATURES ══════════════ */}
      <section className="s2-features">
        <div className="content">
          <p className="s2-section-label">CORE FEATURES</p>
          <div className="s2-features-grid">
            {coreFeatures.map((f, i) => (
              <div className="s2-feature-card" key={i}>
                <span
                  className="s2-feature-icon"
                  style={{ color: f.color, backgroundColor: `${f.color}14` }}
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

      {/* ══════════════ LIFECYCLE ══════════════ */}
      <section className="s2-lifecycle">
        <div className="content">
          <p className="s2-section-label">RELEASE ORDER LIFECYCLE</p>
          <div className="s2-lifecycle-track">
            {lifecycleSteps.map((step, i) => (
              <div className="s2-lifecycle-step" key={i}>
                <span
                  className="s2-lifecycle-icon"
                  style={{
                    color: step.color,
                    backgroundColor: `${step.color}14`,
                    border: `2px solid ${step.color}30`,
                  }}
                >
                  <FontAwesomeIcon icon={step.icon} />
                </span>
                <p className="s2-lifecycle-label">{step.label}</p>

                {i < lifecycleSteps.length - 1 && (
                  <span className="s2-lifecycle-arrow">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default S2MediaProject;

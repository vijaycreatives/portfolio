import "./S2MediaProject.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChartPie,
  faFileInvoiceDollar,
  faUsers,
  faMoneyCheckAlt,
  faBell,
  faCalendarAlt,
  faNewspaper,
  faChartBar,
  faUserShield,
  faChevronRight,
  faClipboardList,
  faTachometerAlt,
  faCheckDouble,
  faBalanceScale,
  faLayerGroup,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

/* ───────── data ───────── */

const techTags = [
  { label: "React", color: "#61dafb" },
  { label: "Node.js", color: "#68a063" },
  { label: "MySQL", color: "#00758f" },
  { label: "Budget Planning", color: "#f59e0b" },
  { label: "CMS", color: "#9929fb" },
  { label: "Bootstrap", color: "#7952b3" },
  { label: "jQuery", color: "#0868ac" },
];

const coreFeatures = [
  {
    icon: faChartPie,
    color: "#f59e0b",
    title: "Year-wise budget plan",
    desc: "The standout module unique to this project. Each client gets a year-wise budget plan with hierarchical P&L categories, comparing actual vs. budgeted figures across all 12 months.",
  },
  {
    icon: faChartBar,
    color: "#3b82f6",
    title: "Plan-level summary fields",
    desc: "Each budget plan stores opening stock, closing stock, gross profit (actual & budget), net profit (actual & budget), growth in sales %, and growth in profit %.",
  },
  {
    icon: faFileInvoiceDollar,
    color: "#10b981",
    title: "Dedicated budget planning",
    desc: "Dedicated budget planning module with P&L structure. Month-by-month (Apr–Mar) budget vs. actual comparison.",
  },
  {
    icon: faTachometerAlt,
    color: "#ef4444",
    title: "Growth ratio tracking",
    desc: "Detailed gross profit, net profit & growth ratio tracking per client giving management a complete P&L snapshot per financial year.",
  },
  {
    icon: faUserShield,
    color: "#8b5cf6",
    title: "Client-scoped data",
    desc: "Users see only their assigned clients, ensuring data privacy and properly scoped access control.",
  },
  {
    icon: faLayerGroup,
    color: "#06b6d4",
    title: "Template system",
    desc: "Built-in template system on the client record for consistent reporting and structured data entry.",
  },
  {
    icon: faCogs,
    color: "#3b82f6",
    title: "CMS-style content management",
    desc: "Features a pages master table for an intuitive, CMS-style content management experience.",
  },
];

const lifecycleSteps = [
  {
    icon: faClipboardList,
    color: "#3b82f6",
    label: "Annual budget\nplan created",
  },
  {
    icon: faLayerGroup,
    color: "#8b5cf6",
    label: "Monthly\nallocations\nset",
  },
  {
    icon: faTachometerAlt,
    color: "#f59e0b",
    label: "Actuals\ntracked in\nreal-time",
  },
  {
    icon: faChartBar,
    color: "#10b981",
    label: "Variance\nanalysis &\nP&L review",
  },
  {
    icon: faCheckDouble,
    color: "#ef4444",
    label: "Audit sign-off\n& report\nexport",
  },
];

/* ───────── component ───────── */

const AarcProject = () => {
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
            FULL-STACK WEB APPLICATION · REACT + NODE.JS
          </p>
          <h1 className="s2-hero-title">
            AARC Management
            <br />
            <span className="s2-hero-highlight">
              Budget Planning &amp;
            </span>
            <br />
            Management System
          </h1>
          <p className="s2-hero-desc">
            A React + Node.js platform featuring a dedicated financial budget planning engine.
            The standout module provides each client with a year-wise budget plan, hierarchical P&amp;L categories, and month-by-month actual vs. budgeted comparisons.
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

      {/* ══════════════ BUDGET LIFECYCLE ══════════════ */}
      <section className="s2-lifecycle">
        <div className="content">
          <p className="s2-section-label">BUDGET PLANNING LIFECYCLE</p>
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

export default AarcProject;

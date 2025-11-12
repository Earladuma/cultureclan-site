// src/index.jsx
import React, { useEffect, useState } from "react";

/**
 * Culture Clan - Premium Public Website (single-file)
 * - Injects CSS into document head so this is a single self-contained file.
 * - Public site only (admin/dashboard left for later).
 * - Uses company data from CultureClan Consultants profile & registration docs.
 *
 * Usage:
 * - Place in src/, ensure React app renders <CultureClan />.
 * - Replace placeholder media URLs with real assets when available.
 */

const CultureClan = () => {
  // UI state
  const [showContactModal, setShowContactModal] = useState(false);
  const [showCoursePreview, setShowCoursePreview] = useState(null);
  const [newsletter, setNewsletter] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [profilePicPreview, setProfilePicPreview] = useState(null);

  // Company info from uploaded docs
  const company = {
    name: "Culture Clan Consultants Limited",
    short: "Culture Clan",
    domain: "www.cultureclan.co.ke",
    email: "info@cultureclan.co.ke",
    phone: "+254 715 100 000", // from pptx
    addressLines: [
      "Kindaruma House, Nairobi, Kenya",
      "P.O. BOX 37527 - 00100",
    ],
    registration: {
      companyNumber: "PVT-Y2UL5B7L",
      dateOfRegistration: "4 Aug 2023",
    },
  };

  // Inject CSS on mount
  useEffect(() => {
    const css = `
/* ===========================
   Culture Clan - Premium Theme
   Palette: Black / Gold / White
   Single-file CSS injected
   =========================== */

:root{
  --bg:#0b0f1a;
  --card:#0f1724;
  --muted:#9aa4b2;
  --accent:#f5c33b; /* gold */
  --accent-2:#ffd86b;
  --glass: rgba(255,255,255,0.03);
  --radius:14px;
  --shadow: 0 12px 30px rgba(3,7,18,0.6);
  --max-width:1200px;
  --gap:20px;
  --glass-2: rgba(255,255,255,0.02);
  --glass-3: rgba(255,255,255,0.04);
  --ease: cubic-bezier(.2,.9,.3,1);
}
*{box-sizing:border-box}
html,body,#root{height:100%}
body{
  margin:0;
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  background: radial-gradient(1200px 600px at 10% 10%, rgba(245,195,59,0.04), transparent 10%),
              linear-gradient(180deg,#05060a 0%, #0b0f1a 100%);
  color: #e8eefb;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  line-height:1.5;
  -webkit-touch-callout:none;
}

/* layout container */
.container{
  max-width:var(--max-width);
  margin:0 auto;
  padding:28px;
}

/* header */
.header{
  position: sticky;
  top: 0;
  z-index: 120;
  backdrop-filter: blur(6px);
  background: linear-gradient(180deg, rgba(3,6,12,0.6), rgba(3,6,12,0.45));
  border-bottom: 1px solid rgba(255,255,255,0.03);
}
.header-inner{
  max-width:var(--max-width);
  margin:0 auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:12px 28px;
  gap:12px;
}
.brand{
  display:flex;
  gap:12px;
  align-items:center;
  text-decoration:none;
  color:var(--accent);
}
.logo{
  width:52px;
  height:52px;
  border-radius:12px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:800;
  font-family: "Poppins",sans-serif;
  background: linear-gradient(135deg,#1f2937,#0f1724);
  box-shadow: 0 8px 30px rgba(15,23,42,0.5);
  color:var(--accent);
  border: 1px solid rgba(255,255,255,0.03);
}
.brand h1{margin:0;font-size:18px; letter-spacing:0.4px}
.nav{
  display:flex;
  gap:12px;
  align-items:center;
}
.nav a{
  color: #dbe7ff;
  text-decoration:none;
  padding:8px 10px;
  border-radius:8px;
  font-size:14px;
  transition: all 180ms var(--ease);
}
.nav a:hover{ transform: translateY(-2px); color: var(--accent-2) }
.cta{
  background: linear-gradient(90deg,var(--accent),#ffcf66);
  color:#071026;
  padding:10px 14px;
  border-radius:10px;
  font-weight:700;
  box-shadow: 0 12px 34px rgba(245,195,59,0.12);
  border: none;
  cursor:pointer;
}

/* mobile */
.mobile-toggle{
  display:none;
  background:transparent;
  border:1px solid rgba(255,255,255,0.04);
  color:var(--accent-2);
  padding:8px 10px;
  border-radius:8px;
}
@media (max-width:900px){
  .nav{display:none}
  .mobile-toggle{display:inline-flex}
}

/* HERO */
.hero{
  display:flex;
  gap:28px;
  align-items:center;
  justify-content:space-between;
  padding:64px 28px;
  margin-bottom:18px;
}
.hero-left{
  flex:1 1 640px;
}
.kicker{
  display:inline-block;
  background: linear-gradient(90deg, rgba(245,195,59,0.12), rgba(255,215,110,0.06));
  color:var(--accent);
  padding:6px 10px;
  border-radius:999px;
  font-weight:700;
  font-size:13px;
  margin-bottom:12px;
  border:1px solid rgba(245,195,59,0.06);
}
.hero h2{
  font-family:"Poppins",sans-serif;
  font-size:40px;
  margin:6px 0 12px 0;
  color: #fff;
  line-height:1.02;
  text-shadow: 0 8px 30px rgba(3,6,12,0.6);
}
.lead{
  color:var(--muted);
  font-size:17px;
  max-width:680px;
}
.hero-cta{
  display:flex;
  gap:12px;
  margin-top:18px;
}
.hero-stats{
  margin-top:18px;
  display:flex;
  gap:12px;
}
.stat{
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  padding:12px 16px;
  border-radius:12px;
  border:1px solid rgba(255,255,255,0.02);
  min-width:120px;
  text-align:center;
}
.stat strong{display:block; font-size:20px; color:var(--accent-2)}
.stat small{color:var(--muted)}

/* hero right */
.hero-right{
  width:420px;
  border-radius:18px;
  padding:18px;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border:1px solid rgba(255,255,255,0.03);
  box-shadow: var(--shadow);
}
.hero-card-title{font-weight:700; color:#fff}
.hero-card-sub{color:var(--muted); font-size:13px; margin-top:6px}

/* sections */
.section{
  padding:48px 0;
  border-top: 1px solid rgba(255,255,255,0.02);
}
.section .header-row{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  margin-bottom:18px;
}
.section h3{margin:0; font-size:22px; color:#fff}
.section p.lead-muted{color:var(--muted); margin:6px 0 0 0}

/* about cards */
.values-grid{
  display:grid;
  grid-template-columns: repeat(4,1fr);
  gap:12px;
  margin-top:18px;
}
.value-card{
  background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.015));
  padding:16px;
  border-radius:12px;
  border:1px solid rgba(255,255,255,0.02);
  transition: transform 300ms var(--ease), box-shadow 300ms var(--ease);
}
.value-card:hover{ transform: translateY(-6px); box-shadow: 0 18px 40px rgba(15,23,42,0.5) }
.value-card h4{margin:0 0 6px 0; color:var(--accent-2)}
.value-card p{margin:0; color:var(--muted); font-size:14px}

/* why work with us carousel-like */
.why-grid{
  display:flex;
  gap:12px;
  margin-top:18px;
  overflow:auto;
  padding-bottom:6px;
}
.why-card{
  min-width:260px;
  background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02));
  border-radius:12px;
  padding:18px;
  border:1px solid rgba(255,255,255,0.02);
  flex:0 0 auto;
  transition: transform 240ms var(--ease);
}
.why-card:hover{ transform: translateY(-8px) }
.why-card h4{margin:0; color:var(--accent-2)}
.why-card p{color:var(--muted); font-size:14px}

/* services grid */
.services-grid{
  display:grid;
  grid-template-columns: repeat(3,1fr);
  gap:14px;
  margin-top:18px;
}
.service{
  background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02));
  padding:18px;
  border-radius:12px;
  border:1px solid rgba(255,255,255,0.02);
  transition: transform 220ms var(--ease);
}
.service:hover{ transform: translateY(-6px); box-shadow: 0 18px 40px rgba(2,6,23,0.5) }
.service h4{margin:0 0 6px 0; color:var(--accent-2)}
.service p{color:var(--muted); font-size:14px}

/* approach timeline */
.timeline{
  margin-top:18px;
  display:flex;
  gap:14px;
  align-items:flex-start;
  justify-content:space-between;
}
.step{
  background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02));
  padding:14px;
  border-radius:12px;
  border:1px solid rgba(255,255,255,0.02);
  text-align:center;
  width:18%;
  transition: transform 300ms var(--ease);
}
.step:hover{ transform: translateY(-8px) }
.step strong{display:block; color:var(--accent-2); margin-bottom:6px}
.step small{color:var(--muted)}

/* team grid */
.team-grid{
  display:grid;
  grid-template-columns: repeat(4,1fr);
  gap:14px;
  margin-top:18px;
}
.team-card{
  background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02));
  padding:14px;
  border-radius:12px;
  border:1px solid rgba(255,255,255,0.02);
  text-align:center;
  transition: transform 240ms var(--ease), box-shadow 240ms var(--ease);
  position:relative;
  overflow:hidden;
}
.team-card:hover{ transform: translateY(-8px); box-shadow: 0 18px 40px rgba(2,6,23,0.45) }
.team-card img{
  width:100%;
  height:160px;
  object-fit:cover;
  border-radius:10px;
  display:block;
}
.team-card h4{margin:8px 0 4px 0}
.team-card p.role{margin:0; color:var(--muted); font-size:13px}
.team-card p.bio{margin-top:8px; color:var(--muted); font-size:13px}

/* projects / case studies */
.projects-grid{
  display:grid;
  grid-template-columns: repeat(3,1fr);
  gap:14px;
  margin-top:18px;
}
.project{
  border-radius:12px;
  overflow:hidden;
  border:1px solid rgba(255,255,255,0.02);
  background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02));
}
.project img{width:100%; height:180px; object-fit:cover}
.project .body{padding:12px}
.project h4{margin:0 0 6px 0}
.project p{color:var(--muted); font-size:14px}

/* courses */
.courses-grid{
  display:grid;
  grid-template-columns: repeat(4,1fr);
  gap:12px;
  margin-top:18px;
}
.course-card{
  padding:12px;
  border-radius:12px;
  background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02));
  border:1px solid rgba(255,255,255,0.02);
  transition: transform 220ms var(--ease);
}
.course-card:hover{ transform: translateY(-8px) }
.course-card h5{margin:0 0 6px 0; color:var(--accent-2)}
.course-card p{color:var(--muted); font-size:13px}

/* media */
.media-grid{
  display:grid;
  grid-template-columns: repeat(4,1fr);
  gap:10px;
  margin-top:12px;
}
.media-item{
  border-radius:10px;
  overflow:hidden;
  background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02));
  border:1px solid rgba(255,255,255,0.02);
}
.media-item img, .media-item video{width:100%; height:160px; object-fit:cover; display:block}

/* testimonials */
.testimonials{
  display:grid;
  grid-template-columns: repeat(3,1fr);
  gap:12px;
  margin-top:12px;
}
.test{
  padding:12px;
  border-radius:12px;
  background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02));
  border:1px solid rgba(255,255,255,0.02);
}

/* faq */
.faq-grid{
  display:grid;
  grid-template-columns: repeat(2,1fr);
  gap:12px;
  margin-top:12px;
}
.faq{ padding:12px; border-radius:10px; background: rgba(255,255,255,0.01); border:1px solid rgba(255,255,255,0.02)}

/* contact form */
.contact-card{
  padding:18px;
  border-radius:12px;
  background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02));
  border:1px solid rgba(255,255,255,0.02);
}
.input, textarea{
  width:100%;
  padding:10px 12px;
  border-radius:10px;
  border:1px solid rgba(255,255,255,0.04);
  background:transparent;
  color: #e8eefb;
  margin-top:8px;
}
textarea{ min-height:120px; resize:vertical }

/* footer */
.footer{
  margin-top:40px;
  padding:28px;
  border-radius:12px;
  background: linear-gradient(180deg,#050612,#071226);
  border:1px solid rgba(255,255,255,0.02);
}
.footer .inner{ display:flex; gap:20px; justify-content:space-between; align-items:flex-start; flex-wrap:wrap }
.footer small{ color:var(--muted) }
.socials a{ color:var(--accent-2); margin-right:12px; text-decoration:none }

/* modal */
.modal{
  position: fixed;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:center;
  background: rgba(1,2,6,0.6);
  z-index:400;
  padding:18px;
}
.modal-card{
  width:100%;
  max-width:900px;
  border-radius:14px;
  padding:18px;
  background: linear-gradient(180deg, #0b1016, #071220);
  border: 1px solid rgba(255,255,255,0.03);
  box-shadow: 0 30px 80px rgba(2,6,23,0.8);
}

/* tiny utilities */
.row{display:flex; gap:12px; align-items:center}
.col{display:flex; flex-direction:column; gap:8px}
.center{display:flex; align-items:center; justify-content:center}

/* animations */
@keyframes floaty {
  0%{ transform: translateY(0px) }
  50%{ transform: translateY(-10px) }
  100%{ transform: translateY(0px) }
}
.hero-right{ animation: floaty 6s var(--ease) infinite }

/* responsive */
@media (max-width:1100px){
  .team-grid{ grid-template-columns: repeat(3,1fr) }
  .projects-grid{ grid-template-columns: repeat(2,1fr) }
  .courses-grid{ grid-template-columns: repeat(2,1fr) }
  .media-grid{ grid-template-columns: repeat(2,1fr) }
  .testimonials{ grid-template-columns: repeat(2,1fr) }
}
@media (max-width:720px){
  .hero{ flex-direction:column; align-items:flex-start }
  .team-grid{ grid-template-columns: repeat(2,1fr) }
  .projects-grid{ grid-template-columns: 1fr }
  .courses-grid{ grid-template-columns: repeat(1,1fr) }
  .media-grid{ grid-template-columns: repeat(1,1fr) }
  .why-grid{ overflow:auto; padding-bottom:6px }
  .values-grid{ grid-template-columns: repeat(2,1fr) }
  .nav{ display:none }
  .mobile-toggle{ display:inline-flex }
}
`;
    const style = document.createElement("style");
    style.setAttribute("data-source", "culture-clan-premium-css");
    style.innerHTML = css;
    document.head.appendChild(style);

    // scroll listener for back to top
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (style && style.parentNode) style.parentNode.removeChild(style);
    };
  }, []);

  // Content arrays (tailored premium courses)
  const leadTeam = [
    { name: "Joseph V. Onyango, FHIRM, MBS", title: "Managing Partner", bio: "Seasoned people & leadership consultant with cross-border experience across Africa." },
    { name: "Ruth Koga", title: "Lead Consultant", bio: "Organizational development and culture change specialist." },
    { name: "Sharon Kisire", title: "Lead Consultant", bio: "Human capital and training expert." },
    { name: "Katleho Mohono", title: "Lead Consultant", bio: "Change management and strategy professional." },
  ];

  const technicalTeam = [
    { name: "Samuel Wambua", title: "Technical Lead - Data & Analytics", bio: "Data-driven approaches to measure culture and outcomes." },
    { name: "Earl T. Aduma", title: "Technical Lead - ICT & Infomatics", bio: "Technology solutions for HR and culture diagnostics." },
    { name: "Julian Mc Peggy", title: "Technical Lead - Communication & Networks", bio: "Communication systems and stakeholder engagement." },
    { name: "Peter Raburu", title: "Technical Lead - Contracts & Evaluations", bio: "Contract management and program evaluations." },
  ];

  const partners = [
    { name: "Kenya School of Government", logo: "https://via.placeholder.com/220x80?text=KSG" },
    { name: "Mount Kenya University", logo: "https://via.placeholder.com/220x80?text=MKU" },
    { name: "NIA DELTA - South Africa", logo: "https://via.placeholder.com/220x80?text=NIA-DELTA" },
    { name: "Institute of Human Resource Management", logo: "https://via.placeholder.com/220x80?text=IHRM" },
  ];

  const services = [
    { title: "Culture Transformation Consulting", desc: "Tailored programs to align strategy, leadership and people practices for sustainable culture change." },
    { title: "Organizational Health Benchmarking", desc: "Diagnostics & benchmarks to identify culture strengths, gaps and levers for change." },
    { title: "Leadership & People Management", desc: "Executive coaching, leadership development and succession planning." },
    { title: "Training & Capacity Building", desc: "Workshops, curricula and blended learning for teams and leaders." },
    { title: "HR Technology & Analytics", desc: "People analytics, HRIS advisory and data-driven decision making." },
    { title: "Change Strategy Implementation", desc: "From prototyping to scaling — practical implementation support." },
  ];

  const courses = [
    { id: 1, title: "Organizational Culture Design (Masterclass)", length: "8 weeks", level: "Advanced", desc: "Design, prototype and implement a culture architecture aligned to strategy." },
    { id: 2, title: "Leading Change & Transformation", length: "6 weeks", level: "Advanced", desc: "Practical change leadership: influence, coalition-building and sustaining momentum." },
    { id: 3, title: "Strategic HR Analytics", length: "5 weeks", level: "Intermediate", desc: "Build people analytics capability to measure culture and performance." },
    { id: 4, title: "People-Centered Performance Management", length: "4 weeks", level: "Intermediate", desc: "Design performance systems that motivate and develop talent." },
    { id: 5, title: "Cultural Intelligence for Leaders", length: "3 weeks", level: "Beginner", desc: "Practical skills to navigate and lead across cultures." },
    { id: 6, title: "Stakeholder Engagement & Communication", length: "4 weeks", level: "Intermediate", desc: "Techniques to design engagement strategies that win hearts and minds." },
    { id: 7, title: "Ethics, Governance & Integrity", length: "3 weeks", level: "Beginner", desc: "Embedding integrity and ethical standards into organisation routines." },
    { id: 8, title: "Designing Learning & Development Programs", length: "5 weeks", level: "Intermediate", desc: "From needs analysis to learning experience design and evaluation." },
    { id: 9, title: "Inclusive Workplaces & DEI Strategy", length: "4 weeks", level: "Intermediate", desc: "Policies and practices for diverse, equitable and inclusive workplaces." },
    { id: 10, title: "Digital HR Tools for Modern Workplaces", length: "4 weeks", level: "Beginner", desc: "HRIS, collaboration platforms and automation for HR efficiency." },
    { id: 11, title: "Projecting Culture Through Employer Brand", length: "3 weeks", level: "Beginner", desc: "Crafting employer value propositions aligned with culture." },
    { id: 12, title: "Monitoring & Evaluation for Culture Initiatives", length: "5 weeks", level: "Advanced", desc: "M&E frameworks, indicators and evaluation methods for culture programs." },
  ];

  const projects = [
    { title: "National Leadership Workshop Series", img: "https://via.placeholder.com/800x450?text=Leadership+Workshop", desc: "A national series convening leaders to redesign people practices." },
    { title: "Youth Creative Mentorship", img: "https://via.placeholder.com/800x450?text=Youth+Mentorship", desc: "Mentoring program linking emerging creatives with industry mentors." },
    { title: "Digital Storytelling for Culture", img: "https://via.placeholder.com/800x450?text=Digital+Storytelling", desc: "Multimedia storytelling initiative to showcase cultural narratives." },
  ];

  const faqs = [
    { q: "How do I engage Culture Clan for a consultancy?", a: "Contact us via the form or email info@cultureclan.co.ke — we typically start with an initial scoping call and diagnostic." },
    { q: "Do you offer tailored training?", a: "Yes — we design tailored workshops and learning programs based on organizational needs." },
    { q: "What sectors do you serve?", a: "We work across public, private and non-profit sectors with a focus on African organizations." },
    { q: "How long are your programs?", a: "Programs range from short 1-day workshops to 6–8 week deep-dive transformation programs." },
  ];

  const testimonials = [
    { who: "Kenyan County Executive", text: "Culture Clan helped us align our leadership and people practices — results were visible within months." },
    { who: "University HR Director", text: "Professional, evidence-based and deeply practical consultancy support." },
    { who: "NGO Program Lead", text: "Their approach combined empathy, strong diagnostics and implementation discipline." },
  ];

  // handlers
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletter || !newsletter.includes("@")) {
      alert("Please provide a valid email.");
      return;
    }
    alert(`Thanks — ${newsletter} subscribed to Culture Clan updates.`);
    setNewsletter("");
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // simulate sending
    alert("Thank you — your message has been received. We'll be in touch via email.");
    setShowContactModal(false);
  };

  const handleProfileUpload = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return setProfilePicPreview(null);
    const reader = new FileReader();
    reader.onload = () => setProfilePicPreview(reader.result);
    reader.readAsDataURL(f);
  };

  return (
    <div style={{minHeight:"100vh"}}>
      {/* Header */}
      <header className="header" role="banner">
        <div className="header-inner">
          <a className="brand" href="#home" onClick={(ev)=>{ev.preventDefault(); window.scrollTo({top:0, behavior:"smooth"})}}>
            <div className="logo">CC</div>
            <div>
              <h1>{company.short}</h1>
              <div style={{fontSize:12, color:"var(--muted)"}}>{company.domain}</div>
            </div>
          </a>

          <nav className="nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#learning">Learning Hub</a>
            <a href="#projects">Projects</a>
            <a href="#partners">Partners</a>
            <a href="#contact">Contact</a>
          </nav>

          <div style={{display:"flex", gap:8, alignItems:"center"}}>
            <button className="mobile-toggle" onClick={()=>setNavOpen(!navOpen)} aria-expanded={navOpen}>☰</button>
            <button className="cta" onClick={()=>setShowContactModal(true)}>Talk to Us</button>
          </div>
        </div>

        {/* mobile nav drawer */}
        {navOpen && (
          <div style={{background:"#071024", padding:14, borderTop:"1px solid rgba(255,255,255,0.02)"}}>
            <a href="#about" style={{display:"block", padding:8}} onClick={()=>setNavOpen(false)}>About</a>
            <a href="#services" style={{display:"block", padding:8}} onClick={()=>setNavOpen(false)}>Services</a>
            <a href="#learning" style={{display:"block", padding:8}} onClick={()=>setNavOpen(false)}>Learning Hub</a>
            <a href="#projects" style={{display:"block", padding:8}} onClick={()=>setNavOpen(false)}>Projects</a>
            <a href="#partners" style={{display:"block", padding:8}} onClick={()=>setNavOpen(false)}>Partners</a>
            <a href="#contact" style={{display:"block", padding:8}} onClick={()=>setNavOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      {/* MAIN */}
      <main className="container" id="home" role="main">
        {/* HERO */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-left">
            <div className="kicker">Your Transformative Culture Change Partner</div>
            <h2 id="hero-heading">Culture Clan — designing cultures that enable performance, integrity and impact</h2>
            <p className="lead">We are CultureClan Consultants — a Nairobi-based consultancy specializing in people-centered culture change, leadership development and HR technology across Africa. We combine deep sector expertise, data-driven diagnostics and practical implementation to deliver measurable transformation.</p>

            <div className="hero-cta" role="region" aria-label="Primary actions">
              <button className="cta" onClick={()=>document.getElementById("services").scrollIntoView({behavior:"smooth"})}>Explore Services</button>
              <button style={{background:"transparent", border:"1px solid rgba(255,255,255,0.04)", color:"#fff", padding:"10px 12px", borderRadius:10}} onClick={()=>document.getElementById("learning").scrollIntoView({behavior:"smooth"})}>View Learning Hub</button>
            </div>

            <div className="hero-stats" aria-hidden>
              <div className="stat"><strong>20+</strong><small>Active Programs</small></div>
              <div className="stat"><strong>2K+</strong><small>Professionals Trained</small></div>
              <div className="stat"><strong>50+</strong><small>Institutional Partners</small></div>
            </div>
          </div>

          <aside className="hero-right" aria-label="Highlights">
            <div>
              <div className="hero-card-title">Featured Program — Culture Transformation Sprint</div>
              <div className="hero-card-sub">A rapid, evidence-led 12-week intervention for leadership teams.</div>
            </div>

            <div style={{marginTop:14}}>
              <div style={{display:"flex", gap:8}}>
                <div style={{flex:1}}>
                  <div style={{fontSize:12, color:"var(--muted)"}}>Next Cohort</div>
                  <div style={{fontWeight:700}}>Jan 15 • 2026</div>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:12, color:"var(--muted)"}}>Investment</div>
                  <div style={{fontWeight:700}}>Tailored Pricing</div>
                </div>
              </div>
            </div>

            <div style={{marginTop:14, display:"flex", gap:8}}>
              <button style={{flex:1}} className="cta" onClick={()=>setShowContactModal(true)}>Request Proposal</button>
              <button style={{flex:1, background:"transparent", border:"1px solid rgba(255,255,255,0.04)", color:"#fff", borderRadius:10}} onClick={()=>document.getElementById("learning").scrollIntoView({behavior:"smooth"})}>Apply</button>
            </div>
          </aside>
        </section>

        {/* ABOUT */}
        <section id="about" className="section" aria-labelledby="about-heading">
          <div className="header-row">
            <div>
              <h3 id="about-heading">About Culture Clan</h3>
              <p className="lead-muted">We are a consultancy formed by professionals across Africa — focused on unlocking organizational potential through people and culture.</p>
            </div>
            <div>
              <small style={{color:"var(--muted)"}}>Registered: {company.registration.companyNumber} • {company.registration.dateOfRegistration}</small>
            </div>
          </div>

          <div style={{display:"flex", gap:20, alignItems:"flex-start", marginTop:12, flexWrap:"wrap"}}>
            <div style={{flex:"1 1 560px"}}>
              <h4 style={{marginTop:0}}>Opening Message</h4>
              <p style={{color:"var(--muted)"}}>
                At Culture Clan we believe future-ready organisations are built on values, communication, collaboration and continuous learning.
                We partner with leaders to design people-centred systems that enhance engagement, performance and sustainability.
              </p>

              <h4 style={{marginTop:12}}>Vision • Mission • Values</h4>
              <p style={{color:"var(--muted)"}}><strong>Vision:</strong> Prosperous people and organizations thriving in tandem with Culture Clan values.</p>
              <p style={{color:"var(--muted)"}}><strong>Mission:</strong> To empower organizations through exceptional people management consultancy services, guided by integrity, professionalism and innovation.</p>

              <div style={{marginTop:12}}>
                <h4>Core Values</h4>
                <div className="values-grid">
                  <div className="value-card"><h4>Integrity</h4><p>Highest standards of honesty, ethics and transparency.</p></div>
                  <div className="value-card"><h4>Collaboration</h4><p>Working inclusively with clients and partners to achieve shared success.</p></div>
                  <div className="value-card"><h4>Innovation</h4><p>Creative solutions grounded in practicality and impact.</p></div>
                  <div className="value-card"><h4>People-Centricity</h4><p>Putting people at the heart of every intervention.</p></div>
                </div>
              </div>
            </div>

            <aside style={{flex:"0 0 360px"}}>
              <div style={{background:"linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))", padding:16, borderRadius:12, border:"1px solid rgba(255,255,255,0.02)"}}>
                <div style={{fontSize:14, color:"var(--muted)"}}>Talk to us</div>
                <div style={{fontWeight:700, marginTop:6}}>{company.phone}</div>
                <div style={{color:"var(--muted)", marginTop:6}}>{company.email}</div>
                <div style={{marginTop:12}}>
                  <button className="cta" onClick={()=>setShowContactModal(true)}>Request a Call</button>
                </div>
              </div>

              <div style={{marginTop:12, background:"transparent", padding:14, borderRadius:12, border:"1px solid rgba(255,255,255,0.02)"}}>
                <div style={{fontWeight:700}}>Our Approach</div>
                <div style={{color:"var(--muted)", marginTop:8}}>Collaborative diagnostics → Prototype solutions → Implement & embed → Measure impact</div>
              </div>
            </aside>
          </div>
        </section>

        {/* WHY WORK WITH US */}
        <section className="section" id="why" aria-labelledby="why-heading">
          <div className="header-row">
            <div>
              <h3 id="why-heading">Why work with Culture Clan</h3>
              <p className="lead-muted">Experience, tailored solutions, and a results-driven approach.</p>
            </div>
            <div><small style={{color:"var(--muted)"}}>Tailored for African organisations • Evidence-led • People-first</small></div>
          </div>

          <div className="why-grid" role="list">
            <div className="why-card" role="listitem"><h4>Extensive Experience</h4><p>Over five decades of combined expertise in people and culture change.</p></div>
            <div className="why-card" role="listitem"><h4>Tailored Approach</h4><p>Custom solutions that reflect your strategy, context and values.</p></div>
            <div className="why-card" role="listitem"><h4>Holistic Perspective</h4><p>We integrate human and structural elements for sustainable change.</p></div>
            <div className="why-card" role="listitem"><h4>Collaborative Partnership</h4><p>We work side-by-side with your teams through all stages of change.</p></div>
            <div className="why-card" role="listitem"><h4>Results Driven</h4><p>Focus on measurable outcomes and long-term impact.</p></div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section" aria-labelledby="services-heading">
          <div className="header-row">
            <div>
              <h3 id="services-heading">Our Services</h3>
              <p className="lead-muted">Comprehensive consultancy services for organizational and cultural transformation.</p>
            </div>
            <div>
              <button className="cta" onClick={()=>setShowContactModal(true)}>Get a proposal</button>
            </div>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service" key={i}>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <div style={{marginTop:10, display:"flex", gap:8}}>
                  <button style={{border:"1px solid rgba(255,255,255,0.04)", padding:"8px 10px", borderRadius:8, background:"transparent"}} onClick={()=>alert("Learn more: " + s.title)}>Learn more</button>
                  <button className="cta" onClick={()=>setShowContactModal(true)}>Engage</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* APPROACH TIMELINE */}
        <section id="approach" className="section" aria-labelledby="approach-heading">
          <div className="header-row">
            <div>
              <h3 id="approach-heading">Our Approach</h3>
              <p className="lead-muted">A practical, prototyping-led approach to culture change.</p>
            </div>
            <div><small style={{color:"var(--muted)"}}>From diagnosis to embedded practice</small></div>
          </div>

          <div className="timeline" role="list">
            <div className="step" role="listitem">
              <strong>Collaborative Scoping</strong>
              <small>Co-design the engagement with leadership</small>
            </div>
            <div className="step" role="listitem">
              <strong>Benchmarking</strong>
              <small>Organizational health & culture diagnostics</small>
            </div>
            <div className="step" role="listitem">
              <strong>Find Leverage</strong>
              <small>Identify high-impact interventions</small>
            </div>
            <div className="step" role="listitem">
              <strong>Prototyping</strong>
              <small>Test solutions with small cohorts</small>
            </div>
            <div className="step" role="listitem">
              <strong>Scale & Embed</strong>
              <small>Roll out and institutionalize changes</small>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="section" aria-labelledby="team-heading">
          <div className="header-row">
            <div>
              <h3 id="team-heading">Our Lead Team & Technical Experts</h3>
              <p className="lead-muted">A multidisciplinary team of consultants and technical leads.</p>
            </div>
            <div><small style={{color:"var(--muted)"}}>Experienced across public, private, and NGO sectors</small></div>
          </div>

          <div style={{marginTop:12}}>
            <h4>Lead Team</h4>
            <div className="team-grid">
              {leadTeam.map((t, i) => (
                <div className="team-card" key={i}>
                  <img src={`https://via.placeholder.com/600x360?text=${encodeURIComponent(t.name.split(" ")[0])}`} alt={t.name} />
                  <h4>{t.name}</h4>
                  <p className="role">{t.title}</p>
                  <p className="bio">{t.bio}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{marginTop:24}}>
            <h4>Technical Team</h4>
            <div className="team-grid">
              {technicalTeam.map((t, i) => (
                <div className="team-card" key={i}>
                  <img src={`https://via.placeholder.com/600x360?text=${encodeURIComponent(t.name.split(" ")[0])}`} alt={t.name} />
                  <h4>{t.name}</h4>
                  <p className="role">{t.title}</p>
                  <p className="bio">{t.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEARNING HUB */}
        <section id="learning" className="section" aria-labelledby="learning-heading">
          <div className="header-row">
            <div>
              <h3 id="learning-heading">Learning Hub — Tailored Courses</h3>
              <p className="lead-muted">Premium short courses and masterclasses designed for culture & HR practitioners.</p>
            </div>
            <div>
              <small style={{color:"var(--muted)"}}>Certificates available • Cohorts & corporate programs</small>
            </div>
          </div>

          <div className="courses-grid" role="list">
            {courses.map((c) => (
              <div className="course-card" key={c.id}>
                <h5>{c.title}</h5>
                <p style={{color:"var(--muted)"}}>{c.length} • {c.level}</p>
                <p style={{color:"var(--muted)", marginTop:8}}>{c.desc}</p>
                <div style={{display:"flex", gap:8, marginTop:10}}>
                  <button style={{border:"1px solid rgba(255,255,255,0.04)", padding:"8px 10px", borderRadius:8}} onClick={()=>setShowCoursePreview(c)}>Preview</button>
                  <button className="cta" onClick={()=>alert("Enrollment request sent for: " + c.title)}>Enroll</button>
                </div>
              </div>
            ))}
          </div>

          {/* course preview modal */}
          {showCoursePreview && (
            <div className="modal" role="dialog" aria-modal>
              <div className="modal-card">
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                  <div>
                    <h3 style={{margin:0}}>{showCoursePreview.title}</h3>
                    <div style={{color:"var(--muted)", fontSize:13}}>{showCoursePreview.length} • {showCoursePreview.level}</div>
                  </div>
                  <div>
                    <button className="cta" onClick={()=>setShowCoursePreview(null)}>Close</button>
                  </div>
                </div>

                <div style={{marginTop:12}}>
                  <p style={{color:"var(--muted)"}}>{showCoursePreview.desc}</p>
                  <ul style={{color:"var(--muted)"}}>
                    <li>Practical modules with real organisational case studies</li>
                    <li>Weekly live sessions and recorded content</li>
                    <li>Practical assignments and final project</li>
                    <li>Certificate of completion</li>
                  </ul>
                  <div style={{marginTop:12, display:"flex", gap:8}}>
                    <button className="cta" onClick={()=>{alert("Enrolled (mock) in " + showCoursePreview.title); setShowCoursePreview(null);}}>Enroll now</button>
                    <button style={{border:"1px solid rgba(255,255,255,0.04)", padding:"8px 10px", borderRadius:8}} onClick={()=>setShowCoursePreview(null)}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* PROJECTS / CASE STUDIES */}
        <section id="projects" className="section" aria-labelledby="projects-heading">
          <div className="header-row">
            <div>
              <h3 id="projects-heading">Highlighted Projects & Case Studies</h3>
              <p className="lead-muted">Selected projects showcasing our approach and impact.</p>
            </div>
            <div><small style={{color:"var(--muted)"}}>Available upon request: full case studies & impact reports</small></div>
          </div>

          <div className="projects-grid">
            {projects.map((p, i) => (
              <div className="project" key={i}>
                <img src={p.img} alt={p.title} />
                <div className="body">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  <div style={{marginTop:10, display:"flex", gap:8}}>
                    <button style={{border:"1px solid rgba(255,255,255,0.04)", padding:"8px 10px", borderRadius:8}} onClick={()=>alert("Request case study: " + p.title)}>Request case study</button>
                    <button className="cta" onClick={()=>setShowContactModal(true)}>Discuss partnership</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PARTNERS */}
        <section id="partners" className="section" aria-labelledby="partners-heading">
          <div className="header-row">
            <div>
              <h3 id="partners-heading">Clients & Partners</h3>
              <p className="lead-muted">Proud partners and clients we've worked with.</p>
            </div>
            <div><small style={{color:"var(--muted)"}}>Institutional partners and collaborators</small></div>
          </div>

          <div style={{display:"flex", gap:12, flexWrap:"wrap", marginTop:14}}>
            {partners.map((p, i) => (
              <div key={i} style={{background:"rgba(255,255,255,0.02)", padding:10, borderRadius:10, border:"1px solid rgba(255,255,255,0.02)", minWidth:180, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img src={p.logo} alt={p.name} style={{maxWidth:160, height:60, objectFit:"contain"}} />
              </div>
            ))}
          </div>
        </section>

        {/* MEDIA */}
        <section id="media" className="section" aria-labelledby="media-heading">
          <div className="header-row">
            <div>
              <h3 id="media-heading">Media & Highlights</h3>
              <p className="lead-muted">Selected media from workshops, events and campaigns.</p>
            </div>
            <div><small style={{color:"var(--muted)"}}>Video & photo highlights</small></div>
          </div>

          <div className="media-grid">
            <div className="media-item"><video controls src="https://www.w3schools.com/html/mov_bbb.mp4" /></div>
            <div className="media-item"><img src="https://via.placeholder.com/800x450?text=Event+Photo+1" alt="Event 1" /></div>
            <div className="media-item"><img src="https://via.placeholder.com/800x450?text=Event+Photo+2" alt="Event 2" /></div>
            <div className="media-item"><img src="https://via.placeholder.com/800x450?text=Event+Photo+3" alt="Event 3" /></div>
          </div>
        </section>

        {/* COMMUNITY / TESTIMONIALS / FAQ */}
        <section id="community" className="section" aria-labelledby="community-heading">
          <div className="header-row">
            <div>
              <h3 id="community-heading">Community, Testimonials & FAQs</h3>
              <p className="lead-muted">Feedback from partners, clients and members of our community.</p>
            </div>
            <div><small style={{color:"var(--muted)"}}>Trusted by institutions and leaders</small></div>
          </div>

          <div style={{display:"flex", gap:16, flexWrap:"wrap"}}>
            <div style={{flex:"1 1 520px"}}>
              <div className="testimonials">
                {testimonials.map((t, i) => (
                  <div className="test" key={i}>
                    <p style={{fontStyle:"italic"}}>“{t.text}”</p>
                    <p style={{fontWeight:700, marginTop:8}}>- {t.who}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside style={{flex:"1 1 320px"}}>
              <div>
                <h4>FAQs</h4>
                <div className="faq-grid">
                  {faqs.map((f, i) => (
                    <div className="faq" key={i}>
                      <strong>{f.q}</strong>
                      <p style={{color:"var(--muted)", marginTop:8}}>{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{marginTop:12}} className="contact-card">
                <h4 style={{margin:0}}>Newsletter</h4>
                <p style={{color:"var(--muted)"}}>Get updates on programs, calls for proposals and resources.</p>
                <form onSubmit={handleNewsletterSubmit} style={{display:"flex", gap:8, marginTop:8}}>
                  <input className="input" placeholder="you@company.com" value={newsletter} onChange={(e)=>setNewsletter(e.target.value)} />
                  <button className="cta" type="submit">Subscribe</button>
                </form>
              </div>
            </aside>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section" aria-labelledby="contact-heading">
          <div className="header-row">
            <div>
              <h3 id="contact-heading">Contact & Talk to Us</h3>
              <p className="lead-muted">For proposals, partnerships, training or media inquiries — reach out.</p>
            </div>
            <div>
              <small style={{color:"var(--muted)"}}>{company.addressLines.join(" • ")}</small>
            </div>
          </div>

          <div style={{display:"flex", gap:18, flexWrap:"wrap"}}>
            <div style={{flex:"1 1 540px"}}>
              <form className="contact-card" onSubmit={handleContactSubmit}>
                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8}}>
                  <div>
                    <label style={{fontSize:13, color:"var(--muted)"}}>Name</label>
                    <input className="input" placeholder="Your full name" required />
                  </div>
                  <div>
                    <label style={{fontSize:13, color:"var(--muted)"}}>Organization</label>
                    <input className="input" placeholder="Your organization (optional)" />
                  </div>
                </div>

                <div style={{marginTop:8}}>
                  <label style={{fontSize:13, color:"var(--muted)"}}>Email</label>
                  <input className="input" type="email" placeholder="you@domain.com" required />
                </div>

                <div style={{marginTop:8}}>
                  <label style={{fontSize:13, color:"var(--muted)"}}>Message</label>
                  <textarea placeholder="Briefly tell us about your need" required />
                </div>

                <div style={{marginTop:10, display:"flex", gap:8}}>
                  <button className="cta" type="submit">Send Message</button>
                  <button style={{border:"1px solid rgba(255,255,255,0.04)", padding:"10px 12px", borderRadius:8}} type="button" onClick={()=>{setShowContactModal(true); alert("We will contact you shortly")}}>Request Call</button>
                </div>
              </form>
            </div>

            <aside style={{flex:"1 1 320px"}}>
              <div className="contact-card">
                <strong>Head Office</strong>
                <div style={{color:"var(--muted)", marginTop:6}}>{company.addressLines[0]}</div>
                <div style={{color:"var(--muted)"}}>{company.addressLines[1]}</div>
                <div style={{color:"var(--muted)", marginTop:8}}>Phone: {company.phone}</div>
                <div style={{color:"var(--muted)"}}>Email: {company.email}</div>
                <div style={{marginTop:12}}>
                  <button className="cta" onClick={()=>window.open(`mailto:${company.email}`)}>Email us</button>
                </div>
              </div>

              <div style={{marginTop:12, padding:12, borderRadius:12, border:"1px solid rgba(255,255,255,0.02)"}}>
                <div style={{fontWeight:700}}>Business Details</div>
                <small style={{color:"var(--muted)"}}>Company Number: {company.registration.companyNumber}</small>
                <div style={{color:"var(--muted)", marginTop:6}}>Incorporated: {company.registration.dateOfRegistration}</div>
              </div>
            </aside>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer" role="contentinfo">
          <div className="inner">
            <div style={{flex:"1 1 320px"}}>
              <div style={{display:"flex", gap:12, alignItems:"center"}}>
                <div className="logo" style={{width:64, height:64, borderRadius:14}}>CC</div>
                <div>
                  <div style={{fontWeight:700}}>{company.short}</div>
                  <small style={{color:"var(--muted)"}}>{company.domain}</small>
                </div>
              </div>
              <div style={{marginTop:12, color:"var(--muted)"}}>
                <small>{company.addressLines.join(" • ")}</small><br/>
                <small>Phone: {company.phone} • Email: {company.email}</small>
              </div>
            </div>

            <div style={{display:"flex", gap:24, flexWrap:"wrap"}}>
              <div>
                <strong>Explore</strong>
                <div style={{marginTop:8}}>
                  <a href="#about">About</a><br/>
                  <a href="#services">Services</a><br/>
                  <a href="#learning">Learning Hub</a>
                </div>
              </div>

              <div>
                <strong>Legal</strong>
                <div style={{marginTop:8}}>
                  <a href="#terms" onClick={(e)=>{e.preventDefault(); alert("Terms (mock)")}}>Terms</a><br/>
                  <a href="#privacy" onClick={(e)=>{e.preventDefault(); alert("Privacy (mock)")}}>Privacy</a><br/>
                  <a href="#cookies" onClick={(e)=>{e.preventDefault(); alert("Cookies (mock)")}}>Cookies</a>
                </div>
              </div>

              <div>
                <strong>Follow</strong>
                <div style={{marginTop:8}} className="socials">
                  <a href="#facebook" onClick={(e)=>{e.preventDefault(); alert("Facebook (mock)")}}>Facebook</a>
                  <a href="#linkedin" onClick={(e)=>{e.preventDefault(); alert("LinkedIn (mock)")}}>LinkedIn</a>
                  <a href="#instagram" onClick={(e)=>{e.preventDefault(); alert("Instagram (mock)")}}>Instagram</a>
                </div>
              </div>
            </div>
          </div>

          <div style={{marginTop:16, borderTop:"1px solid rgba(255,255,255,0.02)", paddingTop:12, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
            <small style={{color:"var(--muted)"}}>&copy; {new Date().getFullYear()} Culture Clan Consultants Limited. All rights reserved.</small>
            <div style={{display:"flex", gap:12}}>
              <a href="#privacy" style={{color:"var(--muted)"}}>Privacy</a>
              <a href="#terms" style={{color:"var(--muted)"}}>Terms</a>
              <a href="#contact" style={{color:"var(--muted)"}}>Contact</a>
            </div>
          </div>
        </footer>
      </main>

      {/* Contact Modal (large) */}
      {showContactModal && (
        <div className="modal" role="dialog" aria-modal>
          <div className="modal-card">
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <div>
                <h3 style={{margin:0}}>Request a Proposal</h3>
                <div style={{color:"var(--muted)", fontSize:13}}>Tell us briefly about your need and we will follow up.</div>
              </div>
              <div>
                <button className="cta" onClick={()=>setShowContactModal(false)}>Close</button>
              </div>
            </div>

            <form onSubmit={(e)=>{e.preventDefault(); alert("Proposal request received — we'll contact you soon."); setShowContactModal(false);}} style={{marginTop:12}}>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8}}>
                <div>
                  <label style={{fontSize:13, color:"var(--muted)"}}>Full name</label>
                  <input className="input" placeholder="Your full name" required />
                </div>
                <div>
                  <label style={{fontSize:13, color:"var(--muted)"}}>Organization</label>
                  <input className="input" placeholder="Organization (optional)" />
                </div>
              </div>

              <div style={{marginTop:8}}>
                <label style={{fontSize:13, color:"var(--muted)"}}>Email</label>
                <input className="input" type="email" placeholder="you@domain.com" required />
              </div>

              <div style={{marginTop:8}}>
                <label style={{fontSize:13, color:"var(--muted)"}}>Scope / Message</label>
                <textarea placeholder="Brief description of scope or inquiry" required />
              </div>

              <div style={{marginTop:8, display:"flex", gap:8, alignItems:"center"}}>
                <label style={{display:"flex", gap:8, alignItems:"center"}}>
                  <input type="file" accept="image/*,application/pdf" onChange={handleProfileUpload} />
                  <span style={{color:"var(--muted)"}}>Attach brief (optional)</span>
                </label>
                {profilePicPreview && <div style={{width:68, height:68, borderRadius:8, overflow:"hidden"}}><img src={profilePicPreview} alt="preview" style={{width:"100%", height:"100%", objectFit:"cover"}}/></div>}
              </div>

              <div style={{marginTop:12, display:"flex", gap:8, justifyContent:"flex-end"}}>
                <button type="button" style={{border:"1px solid rgba(255,255,255,0.04)", padding:"10px 12px", borderRadius:8}} onClick={()=>setShowContactModal(false)}>Cancel</button>
                <button className="cta" type="submit">Send Request</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Scroll to top button */}
      {showScrollTop && (
        <button onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} style={{position:"fixed", right:18, bottom:18, background:"var(--accent)", color:"#071026", border:"none", padding:12, borderRadius:999, boxShadow:"0 12px 30px rgba(245,195,59,0.12)", cursor:"pointer", zIndex:500}}>↑</button>
      )}
    </div>
  );
};

export default CultureClan;

import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Landing() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title">
            Build ATS-Proof Resumes with Calm, Powerful AI
          </h1>
          <p className="hero-sub">
            Generate recruiter-ready summaries, tailor bullets to job descriptions, simulate recruiter skims, and export ATS-safe PDFs — all in one minimalist workspace.
          </p>

          <div className="hero-ctas">
            <Button asLink to="/editor" className="btn-primary">Start Building</Button>
            <Link to="/dashboard" className="btn-ghost">Open Dashboard</Link>
          </div>

          <div className="features">
            <div className="feature">
              <strong>AI Resume Writer</strong>
              <span>Auto-generate summaries & bullets</span>
            </div>
            <div className="feature">
              <strong>ATS Analyzer</strong>
              <span>Score & highlight missing keywords</span>
            </div>
            <div className="feature">
              <strong>Mock Interviews</strong>
              <span>Practice role-specific & behavioral questions</span>
            </div>
          </div>
        </div>

        <div className="hero-preview">
          <div className="card-preview">
            <div className="pv-header">
              <div className="pv-name">Jane Doe</div>
              <div className="pv-title">Frontend Engineer</div>
            </div>

            <div className="pv-section">
              <div className="pv-heading">Summary</div>
              <div className="pv-text">
                Results-driven frontend engineer with 3+ years building performant React applications, improving load times by up to 40%, and mentoring junior developers.
              </div>
            </div>

            <div className="pv-section">
              <div className="pv-heading">Experience</div>
              <div className="pv-text">• Built a component library used across 10+ teams.</div>
              <div className="pv-text">• Improved test coverage and reduced regressions.</div>
            </div>

            <div className="pv-footer">
              <span>Skills: React · TypeScript · CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

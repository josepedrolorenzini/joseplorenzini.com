import { Suspense } from "react";
import FetchGithub from "../components/FetchGithub";

export default function Home() {
  return (
    <>
      <div className="bg-white/5 backdrop-blur-lg shadow-xl rounded-tl-sm p-8 border border-white/10 text-gray-200">
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#b4fb51" }}>
            Full Stack Web Developer + DevOps
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Real-world experience in DevOps, Full Stack Development, Cloud
            Computing, and Web Application Security.
          </p>
        </div>

        <div className="border-t border-white/10 pt-6 m-5">
          <h3 className="text-lg font-semibold mb-3 text-gray-100">
            About My Journey
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Originally from Chile, I've been living and working as a digital
            nomad since 2008, currently based in Latin America. <br></br>My
            passion for web development has taken to different continents,
            allowing me to collaborate with diverse teams and adapt to different
            working cultures.
          </p>
        </div>

        <div className="border-t border-white/10 pt-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-100">
            Technical Expertise
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p
                className="text-sm font-medium mb-2"
                style={{ color: "#b4fb51" }}
              >
                Frontend
              </p>
              <p className="text-gray-400 text-sm">
                JavaScript + React + TypeScript + next.js + TailwindCSS + HTML +
                CSS
              </p>
            </div>
            <div>
              <p
                className="text-sm font-medium mb-2"
                style={{ color: "#b4fb51" }}
              >
                Backend
              </p>
              <p className="text-gray-400 text-sm">
                PHP + Laravel + Node.js + Python + Bash + Git
              </p>
            </div>
            <div>
              <p
                className="text-sm font-medium mb-2"
                style={{ color: "#b4fb51" }}
              >
                Database
              </p>
              <p className="text-gray-400 text-sm">
                SQL + PostgreSQL + MongoDB{" "}
              </p>
            </div>
            <div>
              <p
                className="text-sm font-medium mb-2"
                style={{ color: "#b4fb51" }}
              >
                Tools & Marketing
              </p>
              <p className="text-gray-400 text-sm mb-5">
                Google Merchant + AdWords + Tag Manager + Facebook Pixel +
                Google Analytics + SEO + AWS + Cloudflare + Vercel + Railway
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-gray-400 text-sm italic">
            16+ years of remote work experience • Adaptable across time zones •
            Fluent in English & Spanish .
          </p>
        </div>
      </div>
      <div>
        <Suspense fallback={<p>Loading component...</p>}>
          <FetchGithub />
        </Suspense>
      </div>
    </>
  );
}

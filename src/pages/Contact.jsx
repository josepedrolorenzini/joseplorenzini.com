import { Mail, MapPin, Globe } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function Contact({ header }) {
  return (
    <>
      {header}

      <div className="flex justify-center px-4 py-10">
        <div className="w-full max-w-3xl bg-white/5 backdrop-blur-lg shadow-xl rounded-lg p-6 sm:p-8 border border-white/10 text-gray-200">

          <div className="space-y-10">

            {/* --- HEADER --- */}
            <div className="text-center px-2">
              <h2
                className="text-2xl sm:text-3xl font-bold mb-3"
                style={{ color: "#b4fb51" }}
              >
                Let's Connect
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Available for freelance projects and collaborations worldwide
              </p>
            </div>

            {/* --- FORM AREA --- */}
            <ContactForm />
            {/* --- FORM AREA --- */}

            {/* --- CONTACT CARDS --- */}
            <div className="border-t border-white/10 pt-8 space-y-6">

              {/* Email */}
              <a
                href="mailto:josephlorenzini81@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 group"
              >
                <div
                  className="p-3 rounded-full bg-white/10 group-hover:bg-white/15 shrink-0"
                  style={{ color: "#b4fb51" }}
                >
                  <Mail className="w-6 h-6" />
                </div>

                <div className="flex-1 overflow-hidden">
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <p className="text-gray-200 font-medium break-all group-hover:text-white">
                    josephlorenzini81@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div
                  className="p-3 rounded-full bg-white/10 shrink-0"
                  style={{ color: "#b4fb51" }}
                >
                  <MapPin className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">Currently Based</p>
                  <p className="text-gray-200 font-medium">Sydney, Australia </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Remote • Digital Nomad • Flexible Time Zones
                  </p>
                </div>
              </div>

              {/* Username */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div
                  className="p-3 rounded-full bg-white/10 shrink-0"
                  style={{ color: "#b4fb51" }}
                >
                  <Globe className="w-6 h-6" />
                </div>
                
                <a href="https://github.com/josepedrolorenzini" target="_blank" rel="noopener noreferrer" className="flex-1">
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">Github</p>
                  <p className="text-gray-200 font-medium break-words">
                   josepedrolorenzini
                  </p>
                </div>
                </a>
              </div>
            </div>

            {/* --- STATS AREA (Responsive Grid) --- */}
            <div className="border-t border-white/10 pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
                  <p
                    className="text-3xl sm:text-4xl font-bold mb-2"
                    style={{ color: "#b4fb51" }}
                  >
                    16+
                  </p>
                  <p className="text-sm text-gray-400">
                    Years Remote Experience
                  </p>
                </div>

                <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
                  <p
                    className="text-3xl sm:text-4xl font-bold mb-2"
                    style={{ color: "#b4fb51" }}
                  >
                    ∞
                  </p>
                  <p className="text-sm text-gray-400">
                    Countries Worked From
                  </p>
                </div>

              </div>
            </div>

            {/* --- FOOTER TEXT --- */}
            <div className="text-center pt-4 px-3">
              <p className="text-gray-400 text-sm sm:text-base">
                Open to opportunities • Full Stack Development • DevOps • Cloud Solutions
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

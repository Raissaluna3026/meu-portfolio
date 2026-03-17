import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    type: "degree",
    title: "Bacharelado em Ciência da Computação",
    institution: "Universidade Federal",
    year: "2019 — 2023",
    description: "Foco em engenharia de software e inteligência artificial."
  },
  {
    type: "degree",
    title: "Técnico em Informática",
    institution: "Instituto Federal",
    year: "2016 — 2018",
    description: "Fundamentos de programação e infraestrutura de TI."
  }
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2024"
  },
  {
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta / Coursera",
    year: "2023"
  },
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google / Coursera",
    year: "2023"
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    year: "2022"
  }
];

export default function SecaoCertificacoes() {
  return (
    <section id="certificacoes" className="relative py-32 bg-[#0a0a0f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-400/60 text-sm font-mono tracking-widest uppercase">Formação</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Certificações &<br />
            <span className="text-gray-500">Educação</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/15">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Educação</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-6 border-l border-white/[0.06]"
                >
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-cyan-400 -translate-x-[5px]" />
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-gray-500" />
                    <span className="text-xs text-gray-500 font-mono">{item.year}</span>
                  </div>
                  <h4 className="text-white font-medium">{item.title}</h4>
                  <p className="text-sm text-cyan-300/50 mt-0.5">{item.institution}</p>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/15">
                <Award className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Certificações</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:border-violet-500/20 hover:bg-violet-500/[0.03] transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-white font-medium group-hover:text-violet-300 transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-gray-600 font-mono shrink-0 ml-4">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
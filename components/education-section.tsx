"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Smt. Kashibai Navale College of Engineering",
    degree: "Bachelor of Computer Engineering",
    affiliation: "Affiliated to Savitribai Phule Pune University",
    period: "2015 - 2019",
    location: "Pune, Maharashtra",
  },
  {
    institution: "Sanatan Dharam Public School",
    degree: "Intermediate (12th Standard)",
    affiliation: "C.B.S.E. Board",
    period: "2015",
    location: "Punjabi Bagh, New Delhi",
  },
  {
    institution: "Sanatan Dharam Public School",
    degree: "Matriculation (10th Standard)",
    affiliation: "C.B.S.E. Board",
    period: "2013",
    location: "Punjabi Bagh, New Delhi",
  },
];

const languages = [
  { name: "English", level: "Professional proficiency" },
  { name: "Hindi", level: "Native proficiency" },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <GraduationCap className="h-6 w-6 text-emerald-400" />
          <h2 className="text-3xl font-bold">Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
              Academic Background
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl border border-border bg-card/50 p-6"
                >
                  <h4 className="text-lg font-semibold text-foreground">
                    {edu.institution}
                  </h4>
                  <p className="text-emerald-400 font-medium">{edu.degree}</p>
                  <p className="text-muted-foreground text-sm">{edu.affiliation}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <span>{edu.location}</span>
                    <span>-</span>
                    <span>{edu.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
              Languages
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-border bg-card/50 p-6"
            >
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium text-foreground">
                      {lang.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

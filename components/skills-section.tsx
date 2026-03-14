"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "HTML & CSS", "SQL"],
  },
  {
    title: "Backend Frameworks",
    skills: ["Django", "Flask", "Jinja2", "REST APIs"],
  },
  {
    title: "Cloud & Databases",
    skills: ["Google Cloud Platform", "BigQuery", "Google Datastore (NoSQL)", "PostgreSQL", "MySQL", "Firebase", "Cloud Firestore"],
  },
  {
    title: "Tools & Others",
    skills: ["Software Sequence Diagrams", "Stripe", "Sendgrid", "Mixpanel", "Google Pub-Sub", "ETL Pipelines"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <Code2 className="h-6 w-6 text-emerald-400" />
          <h2 className="text-3xl font-bold">Tech Stack</h2>
        </motion.div>

        <p className="text-muted-foreground mb-8">
          Technologies I work with.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-border bg-card/50 p-6"
            >
              <h3 className="text-lg font-semibold mb-4 text-emerald-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground border border-border hover:border-emerald-500/50 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

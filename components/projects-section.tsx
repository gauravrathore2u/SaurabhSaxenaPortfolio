"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Property Management System (PMS)",
    description:
      "Developed from scratch for internal use and later commercialized. This software helps manage hotel and vacation rental operations. As of November 2024, used by 30+ hotels in 14 different countries on yearly subscription model.",
    tags: ["Python", "Django", "Stripe", "REST APIs", "SaaS"],
    link: null,
  },
  {
    title: "Cases & Maintenance Module",
    description:
      "An app connecting guests, apartment suppliers, and housekeeping teams to manage guest issues and escalations efficiently.",
    tags: ["Python", "Django", "Real-time", "Hospitality"],
    link: null,
  },
  {
    title: "Internal Ticketing System",
    description:
      "Enables internal teams to create and manage tickets, including recurring tasks. Integrated with Google Pub-Sub to automatically convert guest emails into tickets.",
    tags: ["Python", "Google Pub-Sub", "Automation"],
    link: null,
  },
  {
    title: "London Demand Analysis Module",
    description:
      "Leverages historical booking and inquiry data to recommend optimal postal codes in London for leasing or purchasing new units.",
    tags: ["Data Analysis", "Python", "Business Intelligence"],
    link: null,
  },
  {
    title: "Social Media Scheduler",
    description:
      "Designed a module allowing users to schedule posts across multiple social media accounts simultaneously. Integrated with Facebook, X (Twitter), LinkedIn, Instagram and Pinterest APIs.",
    tags: ["Python", "Django", "Social Media APIs", "Automation"],
    link: "https://creatosaurus.in",
  },
  {
    title: "Security Research",
    description:
      "Discovered XSS vulnerability on Deutsche Telekom website (Hall of Fame). Reported data disclosure vulnerabilities to Intel Security (3x Certificate of Acknowledgement).",
    tags: ["Security", "Bug Bounty", "Penetration Testing"],
    link: null,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <FolderGit2 className="h-6 w-6 text-emerald-400" />
          <h2 className="text-3xl font-bold">Projects</h2>
        </motion.div>

        <p className="text-muted-foreground mb-8">
          Some of the projects I&apos;ve built.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 hover:border-emerald-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 hover:text-emerald-400"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </a>
                  </Button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

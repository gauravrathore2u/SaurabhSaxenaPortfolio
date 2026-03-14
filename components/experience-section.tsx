"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "SmartQ - Compass Group",
    role: "Senior Software Engineer",
    period: "Mar 2025 - Present",
    location: "Bangalore, India",
    description: [
      "Working on a foodcourt meal combo & upselling feature used across thousands of foodcourts in the UK by multiple clients of Compass Group for Time2Eat application",
      "Working on internal ETL pipelines and data warehouse to provide data insights in real time",
      "Mixpanel Implementation for analyzing user lifecycle in the application",
      "Developed complex analytical SQL queries in Google BigQuery to process large-scale transactional datasets for financial reporting, audit validation, and operational insights",
      "Designed and maintained real-time backend services using Firebase and Cloud Firestore",
      "Developed and optimized RESTful APIs for mobile apps, POS systems, and web dashboards",
    ],
    tags: ["Python", "BigQuery", "Firebase", "REST APIs", "ETL", "Mixpanel"],
  },
  {
    company: "TheSquare Serviced Apartments",
    role: "SDE-2",
    period: "Feb 2020 - Mar 2025",
    duration: "5 years",
    location: "New Delhi Area, India",
    description: [
      "Developed Property Management System (PMS) from scratch for internal use and later commercialized - now used by 30+ hotels in 14 countries on yearly subscription",
      "Integrated multiple APIs: Stripe, Sendgrid, VRBO, Keynest, Nuki, PriceLabs, Channex",
      "Built Cases & Maintenance module connecting guests, suppliers, and housekeeping teams",
      "Developed Internal Ticketing System with Google Pub-Sub integration",
      "Created Concierge App for guest service requests",
      "Built Inspection Module for pre-check-in and post-checkout inspections",
      "Developed London Demand Analysis Module leveraging historical booking data",
      "Created Warehouse App for inventory management across hundreds of apartments",
    ],
    tags: ["Python", "Django", "REST APIs", "Stripe", "GCP", "PostgreSQL"],
  },
  {
    company: "Creatosaurus Pvt Ltd",
    role: "Python Developer",
    period: "Jun 2019 - Jan 2020",
    duration: "8 months",
    location: "Pune, India",
    description: [
      "Designed a module allowing users to schedule posts across multiple social media accounts simultaneously",
      "Worked on APIs of Facebook, X (Twitter), LinkedIn, Instagram and Pinterest",
      "Built React Native Applications for multiple clients with Django backend",
    ],
    tags: ["Python", "Django", "React Native", "Social Media APIs"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <Briefcase className="h-6 w-6 text-emerald-400" />
          <h2 className="text-3xl font-bold">Work Experience</h2>
        </motion.div>

        <p className="text-muted-foreground mb-8">
          My professional journey in tech.
        </p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl border border-border bg-card/50 p-6 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-emerald-400 transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-emerald-400 font-medium">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <div className="text-sm text-muted-foreground text-left md:text-right">
                  <p>{exp.period}</p>
                  {exp.duration && <p className="text-xs">{exp.duration}</p>}
                </div>
              </div>
              <ul className="text-muted-foreground mb-4 space-y-2 text-sm">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-emerald-400 mt-1.5 flex-shrink-0">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

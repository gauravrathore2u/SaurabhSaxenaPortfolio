"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const awards = [
  {
    title: "Rising Star - Certificate of Achievement",
    issuer: "SmartQ - Compass Group",
    date: "October 2025",
    description: "Recognized for exceptional performance and contributions.",
  },
  {
    title: "Employee of the Month",
    issuer: "TheSquare Ltd",
    date: "December 2023",
    description: "Awarded for outstanding dedication and work quality.",
  },
  {
    title: "WTM London Attendee",
    issuer: "World Travel Market",
    date: "November 2023",
    description: "Attended WTM London to meet business partners and potential clients.",
  },
  {
    title: "Employee of the Month",
    issuer: "TheSquare Ltd",
    date: "November 2020",
    description: "Recognized for exceptional contributions to the team.",
  },
  {
    title: "Innovate with Mahindra Winner",
    issuer: "Tech Mahindra",
    date: "2018",
    description: "1st Position (Team) in the Innovate with Mahindra competition.",
  },
  {
    title: "Hall of Fame",
    issuer: "Deutsche Telekom",
    date: "2018",
    description: "For finding XSS vulnerability in Deutsche Telekom website.",
  },
  {
    title: "3x Certificate of Acknowledgement",
    issuer: "Intel Security",
    date: "2017",
    description: "Reported data disclosure vulnerabilities through responsible disclosure process.",
  },
];

export function AwardsSection() {
  return (
    <section id="awards" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <Trophy className="h-6 w-6 text-emerald-400" />
          <h2 className="text-3xl font-bold">Honors & Awards</h2>
        </motion.div>

        <p className="text-muted-foreground mb-8">
          Recognition for my contributions.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold group-hover:text-emerald-400 transition-colors">
                  {award.title}
                </h3>
              </div>
              <p className="text-emerald-400 text-sm mb-1">{award.issuer}</p>
              <p className="text-muted-foreground text-xs mb-3">{award.date}</p>
              <p className="text-muted-foreground text-sm">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

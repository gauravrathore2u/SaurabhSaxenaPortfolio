"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-emerald-400 fill-emerald-400" />
            <span>by Saurabh Saxena</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/saurabh0x1a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-emerald-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:saurabh.0x1a@gmail.com"
              className="text-muted-foreground hover:text-emerald-400 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

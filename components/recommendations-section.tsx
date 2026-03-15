"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const recommendations = [
    {
        name: "Anamika Saxena",
        relationship: "Colleague",
        text: "It's rare to come across someone as motivated and enthusiastic as Saurabh. I've had the privilege of collaborating with him on several proof-of-concepts (POCs), and his expertise has been invaluable. Saurabh is an outstanding developer with excellent communication abilities and a strategic mindset. What impresses me most is his willingness to support and guide his colleagues professionally; he has been a tremendous help to me in my own growth. I highly recommend Saurabh for his technical prowess and collaborative spirit.",
    },
];

export function RecommendationsSection() {
    return (
        <section id="recommendations" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Recommendations
                    </h2>
                    <p className="text-muted-foreground">
                        What colleagues say about working with me.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {recommendations.map((rec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative bg-card/50 border border-border/50 rounded-2xl p-6 md:p-8"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-emerald-500/20" />

                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                                    <span className="text-emerald-400 font-semibold text-lg">
                                        {rec.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">
                                        {rec.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {rec.relationship}
                                    </p>
                                </div>
                            </div>

                            <blockquote className="text-muted-foreground leading-relaxed italic">
                                &ldquo;{rec.text}&rdquo;
                            </blockquote>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

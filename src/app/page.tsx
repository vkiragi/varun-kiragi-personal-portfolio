"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AngledSeparator } from "@/components/ui/AngledSeparator";
import { site } from "@/content/site";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="flex flex-col justify-center"
        style={{
          minHeight: "90vh",
          gap: "2rem",
        }}
      >
        <motion.p
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={fadeUp}
          style={{
            fontSize: "var(--font-size-extra-large)",
            margin: 0,
          }}
        >
          {site.hero.kicker}
        </motion.p>

        <motion.h1
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          variants={fadeUp}
          style={{ marginTop: 0 }}
        >
          {site.headline}
        </motion.h1>

        <motion.div
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          variants={fadeUp}
          className="flex flex-wrap gap-4"
        >
          <Button href={site.hero.primaryCta.href} variant="filled">
            {site.hero.primaryCta.label}
          </Button>
          <Button href={site.hero.secondaryCta.href} variant="outline">
            {site.hero.secondaryCta.label}
          </Button>
        </motion.div>
      </section>

      {/* Angled Separator */}
      <AngledSeparator wide />

      {/* Two-column bio */}
      <section
        className="grid gap-8 md:grid-cols-2"
        style={{ paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <p style={{ fontSize: "var(--font-size-medium)" }}>{site.shortBio}</p>
        <p style={{ fontSize: "var(--font-size-medium)" }}>{site.longBio}</p>
      </section>

      {/* Featured Items */}
      <section className="grid gap-6 md:grid-cols-3">
        {site.featuredItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3 + i * 0.15,
              ease: "easeOut",
            }}
            className="flex flex-col"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={804}
              height={603}
              className="w-full"
              style={{ borderRadius: 0 }}
            />
            <div
              className="flex flex-1 flex-col"
              style={{ gap: "1.5rem", paddingTop: "1.5rem" }}
            >
              <h6 style={{ lineHeight: 1, margin: 0 }}>{item.title}</h6>
              <p style={{ fontSize: "var(--font-size-small)", margin: 0 }}>
                {item.description}
              </p>
              <div>
                <Button href={item.cta.href} variant="filled">
                  {item.cta.label}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

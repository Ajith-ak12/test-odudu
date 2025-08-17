"use client"

import { ArrowRight, ArrowUpRight, Crown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const TwoColumnHeroWithImage = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-neutral-50 px-4 sm:px-6 md:px-8 lg:px-12">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/hero/heroBackground.mov"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <Image src="/logo/logo_white.svg" alt="Odudu DAO Logo" width={128} height={128} className="-ml-4 w-64 h-24" />
           {/*  <Badge
              variant="outline"
              className="bg-primary text-primary-foreground border-0 hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Crown className="mr-2 size-3.5 text-primary-foreground" />
              SOVEREIGN DIGITAL INFRASTRUCTURE
              <ArrowUpRight className="ml-2 size-4" />
            </Badge> */}

            <h1 className="text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl leading-tight text-white font-[var(--font-display)]">
              Uniting Kingship and Code to Build{" "}
              <span className="text-primary font-bold">
                Africa's Future
              </span>
            </h1>

            <p className="text-white max-w-xl lg:text-xl leading-relaxed">
              Odudu-DAO is a sovereign-grade digital infrastructure and tokenized capital platform, co-founded by royal leadership and experienced fintech builders, designed to transform African governance, capital markets, and public systems.
            </p>

            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start pt-2">
              <Button
                size="lg"
                className="w-full sm:w-auto group bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-full px-8"
              >
                Discover Our Vision
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="w-full sm:w-auto group bg-card hover:bg-muted text-neutral-800 border border-border rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View Platform
                <ArrowUpRight className="ml-2 size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </div>

          {/*  <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-30" />
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop"
              alt="Symbolic blend of traditional African royal imagery and modern technology"
              className="relative min-h-[500px] max-h-[800px] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-black/5"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export { TwoColumnHeroWithImage };
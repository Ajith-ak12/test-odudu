"use client";

import NumberFlow from "@number-flow/react";
import { motion, useInView } from "motion/react";
import { ArrowRight, ArrowLeftRight } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const InteractiveGraphStats = () => {
  const [showTargets2026, setShowTargets2026] = useState(true);
  const [stats, setStats] = useState({
    targets2026: {
      CoreDomains: 0,
      TokenizedCapacity: 0,
      FarmersEmpowered: 0,
      LandTitlesSecured: 0,
    },
    vision2030: {
      CoreDomains: 0,
      TokenizedCapacity: 0,
      FarmersEmpowered: 0,
      LandTitlesSecured: 0,
    },
  });

  const ref = useRef(null);
  const isInView = useInView(ref);

  const finalStats = useMemo(
    () => ({
      targets2026: {
        CoreDomains: 7,
        TokenizedCapacity: 20,
        FarmersEmpowered: 10,
        LandTitlesSecured: 5,
      },
      vision2030: {
        CoreDomains: 7,
        TokenizedCapacity: 100,
        FarmersEmpowered: 50,
        LandTitlesSecured: 25,
      },
    }),
    []
  );

  useEffect(() => {
    if (isInView) {
      setStats(finalStats);
    }
  }, [isInView, finalStats]);

  return (
    <section className="py-12 bg-background px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="container flex justify-center">
        <div className="flex w-full flex-col justify-between gap-4 lg:flex-row">
          <div className="w-full lg:w-1/3">
            <h1 className="w-full text-6xl font-medium text-neutral-800">
              Transforming Nations, Empowering People
            </h1>
            <div className="mt-10 lg:w-[115%]">
              <AfricanContinentGraph />
            </div>
          </div>
          <div ref={ref} className="flex w-full flex-col items-end lg:w-1/2">
            <h1 className="font-[var(--font-display)] text-8xl leading-0 lg:text-[10rem] text-primary">
              <NumberFlow
                value={
                  showTargets2026
                    ? stats.targets2026.TokenizedCapacity
                    : stats.vision2030.TokenizedCapacity
                }
                prefix="₦"
                suffix="B+"
                className="font-[var(--font-display)]"
              />
            </h1>
            <div className="mb-6 flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-17">
              <p className="text-neutral-600">Transforming Africa through sustainable digital infrastructure</p>
              <Button
                variant="secondary"
                className="group text-md flex w-fit items-center justify-center gap-2 rounded-full px-6 py-1 tracking-tight shadow-none transition-all duration-300 ease-out active:scale-95"
                onClick={() => setShowTargets2026(!showTargets2026)}
              >
                <span>{showTargets2026 ? "2026 Targets" : "2030 Vision"}</span>
                <ArrowLeftRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
              </Button>
            </div>
            <div className="mt-auto mb-10 grid grid-cols-2 gap-4">
              <div className="text-left">
                <h2 className="text-4xl font-medium lg:text-6xl text-neutral-800">
                  <NumberFlow
                    value={
                      showTargets2026
                        ? stats.targets2026.CoreDomains
                        : stats.vision2030.CoreDomains
                    }
                    suffix=""
                  />
                </h2>
                <p className="text-muted-foreground/70">Core Domains</p>
              </div>
              <div className="text-right">
                <h2 className="text-4xl font-medium lg:text-6xl text-neutral-800">
                  <NumberFlow
                    value={
                      showTargets2026
                        ? stats.targets2026.FarmersEmpowered
                        : stats.vision2030.FarmersEmpowered
                    }
                    suffix="K+"
                  />
                </h2>
                <p className="text-muted-foreground/70">Farmers to be Empowered</p>
              </div>
              <div className="text-left">
                <h2 className="text-4xl font-medium lg:text-6xl text-neutral-800">
                  <NumberFlow
                    value={
                      showTargets2026
                        ? stats.targets2026.LandTitlesSecured
                        : stats.vision2030.LandTitlesSecured
                    }
                    suffix="K+"
                  />
                </h2>
                <p className="text-muted-foreground/70">Land Titles to be Secured</p>
              </div>
              <div className="text-right">
                <h2 className="text-4xl font-medium lg:text-6xl text-neutral-800">
                  <NumberFlow
                    value={
                      showTargets2026
                        ? stats.targets2026.TokenizedCapacity
                        : stats.vision2030.TokenizedCapacity
                    }
                    prefix="₦"
                    suffix="B+"
                  />
                </h2>
                <p className="text-muted-foreground/70">Tokenized Infrastructure Capacity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { InteractiveGraphStats };

function AfricanContinentGraph() {
  return (
    <div className="wrapper flex items-center justify-center h-64 rounded-lg">
      {/* Simple Africa SVG */}
    {/*    <Image src="/africa_graph.png" alt="Odudu DAO Logo" width={128} height={128} className="-ml-4 w-64 h-64" />
       */}           
    </div>
  );
}
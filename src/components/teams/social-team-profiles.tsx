"use client";

import { Github, Twitter, Crown } from "lucide-react";

import { Badge } from "@/components/ui/badge";

// Use DiceBear API for avatars
const teamMembers = [
  {
    name: "His Imperial Majesty Oba Adeyeye Enitan Ogunwusi",
    role: "Royal Co-founder & Ooni of Ife",
    image: "/owners/king.png",
    bio: "Provides essential legitimacy, cultural stewardship, and institutional trust that forms the bedrock of Odudu-DAO.",
    social: { twitter: "#" },
  },
  {
    name: "Tosin Osunsanya",
    role: "Co-founder, Strategy & Business Development",
    image: "/owners/tosin.png",
    bio: "Responsible for strategic partnerships, capital formation strategy, and stakeholder alignment.",
    social: { twitter: "#", github: "#" },
  },
  {
    name: "Kunle Fadeyi",
    role: "Co-founder & Chief Technology Officer",
    image: "/owners/kunle.png",
    bio: "Leads technical vision, systems architecture, security, and blockchain infrastructure execution.",
    social: { twitter: "#", github: "#" },
  },
];

const SocialTeamProfiles = () => {
  return (
    <section className="py-12 bg-background px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="container">
        <div className="flex flex-col gap-6 py-4 lg:py-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <Crown className="size-4" />
            <span>LEADERSHIP</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            Founding Leadership
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            Our platform is led by a unique partnership between African royalty and experienced fintech builders.
          </p>
        </div>
        <div className="mt-10 grid gap-x-12 gap-y-16 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="group flex flex-col">
              <img
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full object-contain"
              />
              <div className="mt-6 flex flex-col tracking-[-0.32px]">
                <h3 className="text-lg">{member.name}</h3>
                <p className="text-muted-foreground-subtle">{member.role}</p>
                <p className="mt-4 text-sm tracking-[-0.36px] text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { SocialTeamProfiles };
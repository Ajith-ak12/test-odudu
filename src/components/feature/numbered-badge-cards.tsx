import { Layers, Brain, Coins, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface DataItem {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DATA: DataItem[] = [
  {
    id: 1,
    number: "01",
    title: "Blockchain",
    description:
      "Creating auditable public records, secure digital registries, and programmable, tamper-proof rules.",
    icon: Layers,
  },
  {
    id: 2,
    number: "02",
    title: "Artificial Intelligence",
    description:
      "Driving intelligent decision-making, strategic planning, and automated controls for efficient governance.",
    icon: Brain,
  },
  {
    id: 3,
    number: "03",
    title: "Tokenization",
    description:
      "Enabling sovereign bond issuance, innovative infrastructure financing, and unlocking diaspora investment.",
    icon: Coins,
  },
  {
    id: 4,
    number: "04",
    title: "Decentralized Governance (DAO)",
    description:
      "Ensuring transparency, deep cultural alignment, and shared control among stakeholders.",
    icon: Users,
  },
];

const NumberedBadgeCards = () => {
  return (
    <section className="py-12" style={{ backgroundColor: '#F5F2EC' }}>
      <div className="container">
        <div className="flex flex-col items-center pb-4 text-center">
          <div>
            <span className="my-3 mb-4 flex items-center justify-center">
              <Badge variant="outline" className="bg-background px-3 py-1">
                <Layers className="mr-2 h-4 w-4" />
                <p className="text-xs text-black">FOUNDATION</p>
              </Badge>
            </span>
          </div>
          <h1 className="pb-3 text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            Our Four Foundational Pillars
          </h1>
          <p className="text-muted-foreground max-w-md text-sm lg:max-w-2xl lg:text-lg">
            Odudu-DAO is built on a robust foundation of cutting-edge technologies that blend tradition with innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 px-4 sm:px-6 md:px-8 lg:px-12">
          {DATA.map((feature) => (
            <div
              key={feature.id}
              className="bg-background grid grid-cols-1 rounded-2xl border shadow-sm"
            >
              <div className="p-6">
                <div className="bg-primary text-primary-foreground inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                  {feature.number}
                </div>
                <p className="text-md my-4 font-semibold">{feature.title}</p>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
              <div className="mt-auto flex min-h-[200px] justify-center rounded-b-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="flex h-[200px] w-full items-center justify-center">
                  <feature.icon className="h-24 w-24 text-primary opacity-60" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { NumberedBadgeCards };
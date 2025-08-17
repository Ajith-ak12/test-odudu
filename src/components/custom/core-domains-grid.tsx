"use client"

import { 
  Banknote, 
  Shield, 
  Zap, 
  MapPin, 
  Wheat, 
  TrendingUp, 
  GraduationCap 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const domains = [
  {
    icon: Banknote,
    title: "Finance & Treasury",
    features: [
      "CBDC-ready payment rails",
      "Automated reconciliation",
      "Programmable disbursements"
    ]
  },
  {
    icon: Shield,
    title: "Digital Identity & Civil Records",
    features: [
      "Self-sovereign ID",
      "License issuance",
      "Blockchain-secured records"
    ]
  },
  {
    icon: Zap,
    title: "Power & Utilities",
    features: [
      "Smart-meter tokens",
      "Energy credits",
      "Transparent tracking"
    ]
  },
  {
    icon: MapPin,
    title: "Land & Property",
    features: [
      "Tamper-proof digital titles",
      "Zoning records",
      "Smart transfers"
    ]
  },
  {
    icon: Wheat,
    title: "Agriculture & Rural Development",
    features: [
      "Farmer registries",
      "Blockchain subsidies",
      "Export certification"
    ]
  },
  {
    icon: TrendingUp,
    title: "Capital Markets",
    features: [
      "Tokenized infrastructure bonds",
      "Diaspora investment",
      "ESG assets"
    ]
  },
  {
    icon: GraduationCap,
    title: "Education & Innovation",
    features: [
      "Royal Digital Innovation Academy",
      "Civil servant training",
      "Blockchain governance education"
    ]
  }
]

export default function CoreDomainsGrid() {
  return (
    <section className="py-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-neutral-800 mb-6 font-display">
            Seven Core Domains of Impact
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Transform society through comprehensive blockchain infrastructure across 
            essential sectors, delivering tangible value to citizens and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => {
            const IconComponent = domain.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* African-inspired geometric pattern background */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 10px,
                        var(--color-primary) 10px,
                        var(--color-primary) 12px
                      ),
                      repeating-linear-gradient(
                        -45deg,
                        transparent,
                        transparent 10px,
                        var(--color-secondary) 10px,
                        var(--color-secondary) 12px
                      )
                    `
                  }} />
                </div>

                <CardContent className="relative p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-800 mb-4 font-display group-hover:text-primary transition-colors duration-300">
                    {domain.title}
                  </h3>

                  <ul className="space-y-3">
                    {domain.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-start text-neutral-600 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
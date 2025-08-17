"use client"

import { motion, useInView } from "motion/react"
import { CheckCircle, Clock, Zap, Users, Building2, MapPin, Wallet, Leaf } from "lucide-react"
import { useRef } from "react"

interface TimelineItem {
  date: string
  title: string
  description: string
  deliverables: string[]
  status: "completed" | "in-progress" | "upcoming"
}

interface PilotProject {
  title: string
  description: string
  value: string
  impact: string
  icon: React.ComponentType<any>
  status: "active" | "planned"
}

const timelineData: TimelineItem[] = [
  {
    date: "Q2 2026",
    title: "Legal Setup and Pilot Buildout",
    description: "Establishing foundational legal frameworks and developing core infrastructure for pilot programs across Nigeria.",
    deliverables: [
      "Complete regulatory compliance framework",
      "Establish legal entity structures",
      "Build core platform infrastructure",
      "Partner onboarding and KYC systems"
    ],
    status: "upcoming"
  },
  {
    date: "Q3-Q4 2026",
    title: "Pilot Launch Phase",
    description: "Launch first bond/ID/land pilot programs while activating NODU testnet and implementing full DAO governance structures.",
    deliverables: [
      "First tokenized infrastructure bond issuance",
      "Digital identity system deployment",
      "Land registry blockchain integration",
      "NODU testnet activation",
      "Full DAO governance implementation"
    ],
    status: "upcoming"
  },
  {
    date: "Q4 2026+",
    title: "Regional Scaling",
    description: "Expand operations across Nigeria and establish regional DAO nodes in Ghana, Rwanda, and South Africa for continental impact.",
    deliverables: [
      "Scale across all Nigerian states",
      "Launch Ghana DAO node",
      "Establish Rwanda operations",
      "South Africa regional expansion",
      "Continental governance framework"
    ],
    status: "upcoming"
  }
]

const pilotProjects: PilotProject[] = [
  {
    title: "Tokenized Osun Infrastructure Bond",
    description: "Revolutionary blockchain-based infrastructure financing enabling transparent, efficient capital raising for critical development projects.",
    value: "₦5-₦20 Billion",
    impact: "Direct infrastructure investment",
    icon: Building2,
    status: "active"
  },
  {
    title: "Blockchain Land Registry",
    description: "Immutable, transparent land title system eliminating fraud and disputes while enabling property-backed financial products.",
    value: "5,000+ titles",
    impact: "Secure property rights",
    icon: MapPin,
    status: "active"
  },
  {
    title: "Smart Agri Subsidy Wallets",
    description: "Direct-to-farmer digital wallet system ensuring transparent, efficient distribution of agricultural subsidies and support.",
    value: "10,000+ farmers",
    impact: "Agricultural transformation",
    icon: Leaf,
    status: "planned"
  },
  {
    title: "Diaspora ESG Bond Issuance",
    description: "Connect global African diaspora with sustainable development projects through tokenized ESG investment opportunities.",
    value: "Global reach",
    impact: "Diaspora-homeland connection",
    icon: Users,
    status: "planned"
  }
]

export default function TimelineRoadmap() {
  const timelineRef = useRef(null)
  const projectsRef = useRef(null)
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" })
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-100px" })

  const getStatusIcon = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-accent" />
      case "in-progress":
        return <Zap className="w-6 h-6 text-secondary" />
      case "upcoming":
        return <Clock className="w-6 h-6 text-neutral-600" />
    }
  }

  const getStatusColor = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return "border-accent bg-accent/10"
      case "in-progress":
        return "border-secondary bg-secondary/10"
      case "upcoming":
        return "border-neutral-300 bg-neutral-100"
    }
  }

  return (
    <div className="bg-background py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-display font-bold text-neutral-800 mb-6"
          >
            Project Timeline & Roadmap
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Our strategic roadmap for transforming African digital sovereignty through blockchain innovation and DAO governance
          </motion.p>
        </div>

        {/* Timeline Section */}
        <div ref={timelineRef} className="mb-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-display font-bold text-neutral-800 mb-16 text-center"
          >
            Development Timeline
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex items-start pl-20"
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-0 w-16 h-16 rounded-full border-4 ${getStatusColor(item.status)} flex items-center justify-center z-10 shadow-lg`}>
                    {getStatusIcon(item.status)}
                  </div>

                  {/* Content Card */}
                  <div className="bg-card rounded-2xl p-8 shadow-lg border border-neutral-200 flex-1 ml-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-mono font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {item.date}
                      </span>
                      <div className={`w-3 h-3 rounded-full ${
                        item.status === 'completed' ? 'bg-accent' :
                        item.status === 'in-progress' ? 'bg-secondary' : 'bg-neutral-400'
                      }`}></div>
                    </div>

                    <h4 className="text-2xl font-display font-bold text-neutral-800 mb-4">
                      {item.title}
                    </h4>

                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    <div>
                      <h5 className="text-lg font-display font-semibold text-neutral-800 mb-3">
                        Key Deliverables:
                      </h5>
                      <ul className="space-y-2">
                        {item.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center text-neutral-600">
                            <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pilot Projects Section */}
        <div ref={projectsRef}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-display font-bold text-neutral-800 mb-16 text-center"
          >
            Pilot Projects Pipeline
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pilotProjects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      project.status === 'active' ? 'bg-primary/10' : 'bg-neutral-100'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-7 h-7 ${
                        project.status === 'active' ? 'text-primary' : 'text-neutral-600'
                      }`} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'active' 
                        ? 'bg-accent/10 text-accent' 
                        : 'bg-secondary/10 text-secondary'
                    }`}>
                      {project.status === 'active' ? 'Active' : 'Planned'}
                    </span>
                  </div>

                  <h4 className="text-xl font-display font-bold text-neutral-800 mb-4">
                    {project.title}
                  </h4>

                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                    <div>
                      <div className="text-2xl font-display font-bold text-primary mb-1">
                        {project.value}
                      </div>
                      <div className="text-sm text-neutral-600">
                        {project.impact}
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg"
                    >
                      <CheckCircle className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 border border-primary/10">
            <h4 className="text-3xl font-display font-bold text-neutral-800 mb-6">
              Be Part of Africa's Digital Future
            </h4>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Join us in building the infrastructure for African digital sovereignty. Every milestone brings us closer to transformational impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-secondary text-white px-12 py-4 rounded-full font-display font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Involved Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
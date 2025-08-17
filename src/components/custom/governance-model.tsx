"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Vote,
  Shield,
  Crown,
  GraduationCap,
  Building,
  ArrowRight,
  ArrowDown,
  Check,
  Settings,
  MapPin,
  TreePine,
  Layers
} from "lucide-react"

interface GovernanceEntity {
  name: string
  role: string
  description: string
  icon: any
  color: string
}

interface SubDAO {
  name: string
  location: string
  focus: string
  status: string
  participants: number
}

interface GovernanceProcess {
  title: string
  description: string
  steps: string[]
  icon: any
}

const foundingCouncil: GovernanceEntity[] = [
  {
    name: "Royal Entity",
    role: "Traditional Authority",
    description: "Represents ancestral wisdom and cultural preservation",
    icon: Crown,
    color: "text-primary"
  },
  {
    name: "Tosin Entity",
    role: "Technical Leadership",
    description: "Oversees platform development and innovation",
    icon: Settings,
    color: "text-accent"
  },
  {
    name: "Kunle Entity",
    role: "Strategic Operations",
    description: "Manages partnerships and community relations",
    icon: Users,
    color: "text-secondary"
  }
]

const subDAOs: SubDAO[] = [
  {
    name: "Lagos State DAO",
    location: "Lagos, Nigeria",
    focus: "Urban Digital Infrastructure",
    status: "Active",
    participants: 2847
  },
  {
    name: "Ogun State DAO",
    location: "Abeokuta, Nigeria",
    focus: "Agricultural Innovation",
    status: "Forming",
    participants: 1523
  },
  {
    name: "Oyo State DAO",
    location: "Ibadan, Nigeria",
    focus: "Educational Technology",
    status: "Planning",
    participants: 892
  },
  {
    name: "UK Diaspora DAO",
    location: "London, UK",
    focus: "International Relations",
    status: "Active",
    participants: 1204
  }
]

const governanceProcesses: GovernanceProcess[] = [
  {
    title: "Upgrade Voting",
    description: "Protocol improvements require multi-signature approval",
    steps: ["Proposal submission", "Technical review", "Community discussion", "Council vote", "Implementation"],
    icon: Vote
  },
  {
    title: "Treasury Authorization",
    description: "Fund allocation through transparent governance",
    steps: ["Budget proposal", "Impact assessment", "Stakeholder review", "Multi-sig approval", "Distribution"],
    icon: Shield
  },
  {
    title: "Academy Certification",
    description: "Training program validation and accreditation",
    steps: ["Curriculum design", "Expert review", "Pilot testing", "Quality assurance", "Certification"],
    icon: GraduationCap
  }
]

export default function GovernanceModel() {
  const [activeProcess, setActiveProcess] = useState(0)
  const [selectedEntity, setSelectedEntity] = useState<number | null>(null)

  return (
    <div className="bg-neutral-50 py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-neutral-800 mb-6">
            Governance Architecture
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            A sophisticated multi-layered governance system combining traditional authority with
            modern decentralized decision-making, ensuring cultural authenticity and technological innovation.
          </p>
        </motion.div>

        {/* Main Governance Structure */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Founding Council */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-card h-full border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl font-display font-bold text-neutral-800">
                  <Shield className="w-6 h-6 text-primary" />
                  Founding Council
                </CardTitle>
                <p className="text-sm text-neutral-600">
                  Multi-signature authority structure
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {foundingCouncil.map((entity, index) => {
                  const Icon = entity.icon
                  return (
                    <motion.div
                      key={entity.name}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${selectedEntity === index
                        ? 'border-primary bg-primary/5'
                        : 'border-neutral-100 bg-card hover:border-neutral-200'
                        }`}
                      onClick={() => setSelectedEntity(selectedEntity === index ? null : index)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className={`w-5 h-5 mt-1 ${entity.color}`} />
                        <div>
                          <h4 className="font-display font-semibold text-neutral-800 mb-1">
                            {entity.name}
                          </h4>
                          <Badge variant="secondary" className="mb-2 text-xs">
                            {entity.role}
                          </Badge>
                          <AnimatePresence>
                            {selectedEntity === index && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-sm text-neutral-600 leading-relaxed"
                              >
                                {entity.description}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}

                <div className="pt-4 border-t border-neutral-100">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Users className="w-4 h-4" />
                    <span>+ Advisory Board</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Technical experts and cultural advisors
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sub-DAOs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-card h-full border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl font-display font-bold text-neutral-800">
                  <Building className="w-6 h-6 text-accent" />
                  Regional Sub-DAOs
                </CardTitle>
                <p className="text-sm text-neutral-600">
                  Local implementation networks
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                {subDAOs.map((dao, index) => (
                  <motion.div
                    key={dao.name}
                    className="p-3 rounded-lg border border-neutral-100 bg-card hover:bg-neutral-50 transition-colors duration-200"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-display font-semibold text-neutral-800 text-sm">
                        {dao.name}
                      </h4>
                      <Badge
                        variant={dao.status === 'Active' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {dao.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-neutral-600 mb-1">
                      <MapPin className="w-3 h-3" />
                      <span>{dao.location}</span>
                    </div>
                    <p className="text-xs text-neutral-600 mb-2">{dao.focus}</p>
                    <div className="flex items-center gap-1 text-xs text-neutral-500">
                      <Users className="w-3 h-3" />
                      <span>{dao.participants.toLocaleString()} participants</span>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Innovation Academy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="bg-card h-full border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl font-display font-bold text-neutral-800">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                  Innovation Academy
                </CardTitle>
                <p className="text-sm text-neutral-600">
                  Training & certification hub
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                  <h4 className="font-display font-semibold text-neutral-800 mb-2">
                    Training Programs
                  </h4>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-accent" />
                      Blockchain Development
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-accent" />
                      Digital Governance
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-accent" />
                      Community Leadership
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-accent" />
                      Cultural Preservation
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-card border border-neutral-100">
                    <div className="text-lg font-display font-bold text-neutral-800">
                      1,247
                    </div>
                    <div className="text-xs text-neutral-600">Graduates</div>
                  </div>
                  <div className="p-3 rounded-lg bg-card border border-neutral-100">
                    <div className="text-lg font-display font-bold text-neutral-800">
                      23
                    </div>
                    <div className="text-xs text-neutral-600">Programs</div>
                  </div>
                </div>

                <Button className="w-full bg-secondary-foreground text-black hover:bg-secondary-foreground/90">
                  View Curriculum
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Governance Processes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-display font-bold text-neutral-800 text-center mb-8">
            Decision-Making Processes
          </h3>

          <Tabs value={activeProcess.toString()} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-card border border-neutral-100">
              {governanceProcesses.map((process, index) => {
                const Icon = process.icon
                return (
                  <TabsTrigger
                    key={index}
                    value={index.toString()}
                    onClick={() => setActiveProcess(index)}
                    className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{process.title}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {governanceProcesses.map((process, index) => (
              <TabsContent key={index} value={index.toString()} className="mt-6">
                <Card className="bg-card border border-neutral-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl font-display font-bold text-neutral-800">
                      <process.icon className="w-6 h-6 text-primary" />
                      {process.title}
                    </CardTitle>
                    <p className="text-neutral-600">{process.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap items-center gap-4">
                      {process.steps.map((step, stepIndex) => (
                        <motion.div
                          key={stepIndex}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: stepIndex * 0.1 }}
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                            {stepIndex + 1}
                          </div>
                          <span className="text-sm font-medium text-neutral-700 whitespace-nowrap">
                            {step}
                          </span>
                          {stepIndex < process.steps.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-neutral-400 ml-2" />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Interconnection Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-neutral-100 shadow-sm">
            <CardContent className="py-12">
              <h3 className="text-2xl font-display font-bold text-neutral-800 mb-6">
                Decentralized Accountability Framework
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-12 h-12 flex p-3 rounded-full bg-primary/20">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-neutral-800">
                    Transparent Voting
                  </h4>
                  <p className="text-sm text-neutral-600">All decisions on-chain</p>
                </div>

                {/* <ArrowDown className="w-6 h-6 text-neutral-400 md:rotate-90" /> */}

                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-12 h-12 flex p-3 rounded-full bg-accent/20">
                    <TreePine className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-display font-semibold text-neutral-800">
                    Cultural Consensus
                  </h4>
                  <p className="text-sm text-neutral-600">Traditional validation</p>

                </div>

                {/*   <ArrowDown className="w-6 h-6 text-neutral-400 md:rotate-90" /> */}

                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-12 h-12 flex p-3 rounded-full bg-secondary/20">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-display font-semibold text-neutral-800">
                    Community Impact
                  </h4>
                  <p className="text-sm text-neutral-600">Measurable outcomes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
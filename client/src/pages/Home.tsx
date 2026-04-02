import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/useMobile";
import { ArrowRight, Code2, Zap, BarChart3, MessageSquare, Github, Linkedin, Mail, Cpu, Workflow, Headphones, TrendingUp, CheckCircle2, Menu, X, ExternalLink, BarChart, Bot, Radio, Database } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { href: "#capabilities", label: "What I Build" },
    { href: "#projects", label: "Projects" },
    { href: "#expertise", label: "Expertise" },
    { href: "#contact", label: "Contact" },
  ];

  // Project links with actual URLs
  const projects = [
    {
      name: "Burn Rate",
      description: "AI Cost Observability Platform",
      url: "https://burn-rate-zeta.vercel.app/",
      icon: <BarChart className="w-4 h-4" />,
    },
    {
      name: "Eden Access",
      description: "Automation & Workflow Platform",
      url: "https://eden-access.vercel.app/",
      icon: <Bot className="w-4 h-4" />,
    },
    {
      name: "Japa Genie",
      description: "AI Knowledge System for Immigration",
      url: "https://www.japagenie.com",
      icon: <Database className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16 px-4 sm:px-6">
          <div className="text-lg font-bold text-primary">Prince Anyanwu</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} direction="right">
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="w-[280px] sm:w-[320px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <span className="text-lg font-bold text-primary">Menu</span>
                    <DrawerClose asChild>
                      <Button variant="ghost" size="icon" className="h-10 w-10">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </DrawerClose>
                  </div>
                  <nav className="flex flex-col p-4 gap-2">
                    {navLinks.map((link) => (
                      <DrawerClose key={link.href} asChild>
                        <a
                          href={link.href}
                          className="flex items-center px-4 py-3 text-base font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      </DrawerClose>
                    ))}
                  </nav>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-sm text-primary font-medium">AI Infrastructure Engineer</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Building tools that help companies <span className="text-primary">optimize AI costs</span> and scale efficiently
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Specializing in LLM observability, token cost monitoring, AI automation systems, and developer tooling. 
              Bridging traditional cost engineering with modern AI infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* View My Work Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" className="gap-2">
                    View My Work <ArrowRight className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  className="w-72 bg-background border-border shadow-xl"
                  sideOffset={8}
                >
                  <DropdownMenuLabel className="text-primary font-semibold">
                    My Projects
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-border" />
                  {projects.map((project) => (
                    <DropdownMenuItem key={project.name} asChild>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 py-3 px-2 cursor-pointer hover:bg-accent focus:bg-accent rounded-sm"
                      >
                        <div className="text-primary mt-0.5">{project.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground">{project.name}</span>
                            <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                          </div>
                          <span className="text-xs text-muted-foreground block truncate">
                            {project.description}
                          </span>
                        </div>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Get in Touch Button */}
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:anyanwuihueze@gmail.com">
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What I Build - Automation Capabilities */}
      <section id="capabilities" className="py-20 px-4 border-t border-border bg-secondary/20">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Build</h2>
            <p className="text-muted-foreground">Production AI automation systems that solve real business problems</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Cpu className="w-6 h-6" />,
                title: "AI Agent Systems",
                description: "Intelligent agents that understand context, make decisions, and take actions. From lead qualification to customer support to complex workflow automation."
              },
              {
                icon: <Workflow className="w-6 h-6" />,
                title: "API Orchestration Pipelines",
                description: "Connect disparate systems through intelligent API workflows. Automate data flow between CRM, databases, communication platforms, and business tools."
              },
              {
                icon: <Headphones className="w-6 h-6" />,
                title: "Voice AI Assistants",
                description: "Conversational AI that handles calls, answers questions, and manages customer interactions 24/7. No call center needed."
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "LLM Data Processing",
                description: "Automated pipelines that extract, transform, and analyze data using language models. From document processing to report generation."
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Cost Monitoring & Observability",
                description: "Real-time visibility into AI infrastructure spending. Know exactly what you're spending on AI, where it's going, and how to optimize."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Business Process Automation",
                description: "Streamline operations by automating repetitive tasks. Reduce manual work, eliminate errors, and scale without hiring."
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border border-border bg-card hover:bg-card/80 transition-colors">
                <div className="text-primary mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Systems I Can Automate */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Systems I Can Automate</h2>
            <p className="text-muted-foreground">Common automation opportunities I've built for startups and enterprises</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "Sales & Lead Generation",
                items: [
                  "Lead qualification pipelines with AI agents",
                  "Appointment scheduling and calendar integration",
                  "CRM automation and data enrichment",
                  "Follow-up email sequences and outreach"
                ]
              },
              {
                category: "Customer Support & Service",
                items: [
                  "AI voice receptionists answering calls 24/7",
                  "Support ticket triage and routing",
                  "FAQ chatbots and knowledge base integration",
                  "Customer inquiry automation"
                ]
              },
              {
                category: "Operations & Administration",
                items: [
                  "Data processing and ETL pipelines",
                  "Report generation and distribution",
                  "System integrations and data sync",
                  "Workflow automation and task management"
                ]
              },
              {
                category: "Finance & Cost Management",
                items: [
                  "AI infrastructure cost monitoring",
                  "Budget forecasting and alerts",
                  "Usage analytics and optimization",
                  "Financial reporting automation"
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xl font-bold text-primary">{section.category}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-4 border-t border-border bg-secondary/20">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">Tools and systems built to solve real problems in AI infrastructure</p>
          </div>

          <div className="space-y-6">
            {/* Burn Rate */}
            <Card 
              className="p-8 border border-border hover:border-primary/50 transition-all cursor-pointer group"
              onMouseEnter={() => setHoveredProject("burnrate")}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart3 className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">Burn Rate</h3>
                  </div>
                  <p className="text-primary font-medium text-sm">AI Cost Observability Platform</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Real-time monitoring and analysis of AI API costs. Tracks OpenAI and Anthropic token consumption, 
                provides cost dashboards, alerts on usage spikes, and delivers actionable insights for optimizing LLM spending.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">OpenAI API</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">Anthropic</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">Cost Analytics</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">Real-time Monitoring</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>Impact:</strong> Helps companies understand and optimize LLM spending, reduce token waste, and forecast AI infrastructure costs.
              </div>
              <div className="text-sm text-primary font-medium mt-4">
                <strong>Ideal For:</strong> Startups scaling AI features • Companies with multiple LLM integrations • Teams needing cost forecasting
              </div>
            </Card>

            {/* Voice AI Agents */}
            <Card 
              className="p-8 border border-border hover:border-primary/50 transition-all cursor-pointer"
              onMouseEnter={() => setHoveredProject("voiceai")}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">Voice AI Agents</h3>
                  </div>
                  <p className="text-primary font-medium text-sm">Conversational AI Infrastructure</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Automated voice assistants and call handling systems using Vapi and LLM orchestration. 
                Enables customer service automation, appointment booking, and complex business automation workflows through voice interactions.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">Vapi</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">Voice AI</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">LLM Orchestration</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">Automation</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>Applications:</strong> Customer service automation, appointment scheduling, voice-based business workflows, and interactive IVR systems.
              </div>
              <div className="text-sm text-primary font-medium mt-4">
                <strong>Ideal For:</strong> SaaS companies with customer support • Appointment-based businesses • Lead qualification automation
              </div>
            </Card>

            {/* Automation Agents */}
            <Card 
              className="p-8 border border-border hover:border-primary/50 transition-all cursor-pointer"
              onMouseEnter={() => setHoveredProject("automation")}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">Automation Agents</h3>
                  </div>
                  <p className="text-primary font-medium text-sm">Workflow Orchestration & Integration</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Automated data pipelines and AI workflow orchestration using n8n and advanced integrations. 
                Streamlines business processes, reduces manual work, and integrates disparate systems through intelligent automation.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">n8n</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">Workflow Automation</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">API Integration</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">Data Pipelines</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>Capabilities:</strong> Automated data processing, system integrations, business process automation, and intelligent workflow orchestration.
              </div>
              <div className="text-sm text-primary font-medium mt-4">
                <strong>Ideal For:</strong> Operational teams with manual workflows • Companies with legacy system integrations • Data-heavy processes
              </div>
            </Card>

            {/* AI Knowledge Systems */}
            <Card 
              className="p-8 border border-border hover:border-primary/50 transition-all cursor-pointer"
              onMouseEnter={() => setHoveredProject("knowledge")}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Code2 className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">AI Knowledge Systems</h3>
                  </div>
                  <p className="text-primary font-medium text-sm">Intelligent Information Platforms</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                AI-powered knowledge bases and guidance systems. Example: Japa Genie, an AI assistant helping African users navigate immigration pathways 
                with personalized recommendations, data insights dashboards, and comprehensive visa guidance.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">Knowledge Base</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">AI Guidance</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">Data Insights</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">Personalization</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>Use Cases:</strong> Immigration guidance, visa navigation, personalized recommendations, and complex decision support systems.
              </div>
              <div className="text-sm text-primary font-medium mt-4">
                <strong>Ideal For:</strong> Complex domain guidance • Personalized recommendation systems • Decision support platforms
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-muted-foreground">Tools and platforms I work with to build production systems</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "AI & LLM Systems",
                techs: ["OpenAI API", "Anthropic Claude", "LLM orchestration", "Prompt engineering", "RAG systems"]
              },
              {
                category: "Automation & Integration",
                techs: ["n8n", "Zapier", "Webhooks", "REST APIs", "Data pipelines"]
              },
              {
                category: "Voice AI & Communication",
                techs: ["Vapi", "Twilio", "Conversational AI", "Voice orchestration"]
              },
              {
                category: "Infrastructure & Monitoring",
                techs: ["Firebase", "Real-time databases", "Monitoring dashboards", "Cost analytics"]
              },
              {
                category: "Developer Tools",
                techs: ["Python", "JavaScript/TypeScript", "Node.js", "API design"]
              },
              {
                category: "Data & Analytics",
                techs: ["Data pipelines", "Analytics dashboards", "Real-time monitoring", "Cost forecasting"]
              }
            ].map((section, idx) => (
              <div key={idx} className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-lg font-bold text-primary mb-4">{section.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {section.techs.map((tech, techIdx) => (
                    <span key={techIdx} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 px-4 border-t border-border bg-secondary/20">
        <div className="container max-w-4xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Me</h2>
            <p className="text-muted-foreground">What sets me apart in AI infrastructure and automation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Rare Skill Combination",
                description: "10+ years of cost control expertise applied to AI infrastructure. Most engineers focus on performance; I focus on cost-efficiency."
              },
              {
                title: "Production Track Record",
                description: "Built and shipped real systems (Burn Rate, Voice AI, Automation Agents), not just tutorials. Proven execution ability."
              },
              {
                title: "Financial Optimization Mindset",
                description: "Understand both technical AND financial optimization. Can reduce your AI infrastructure costs by 30-40% through smart engineering."
              },
              {
                title: "Fast Execution",
                description: "Weeks, not months. Built production systems quickly. Can start immediately and deliver results fast."
              },
              {
                title: "Remote-First & Flexible",
                description: "Based in Nigeria (GMT+1), fully remote, timezone-flexible. Can overlap with US/EU business hours seamlessly."
              },
              {
                title: "End-to-End Ownership",
                description: "Handle architecture, implementation, deployment, and optimization. Don't hand off halfway through."
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border border-border bg-card">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section id="expertise" className="py-20 px-4 border-t border-border">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise</h2>
            <p className="text-muted-foreground">Specialized skills at the intersection of AI infrastructure, cost optimization, and automation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "AI Infrastructure",
                description: "LLM integrations, API monitoring, token usage analysis, and AI cost optimization strategies"
              },
              {
                title: "AI FinOps",
                description: "Cost monitoring dashboards, budget forecasting, usage analytics, and financial optimization for AI systems"
              },
              {
                title: "Automation Systems",
                description: "Workflow orchestration, agent systems, business process automation, and system integrations"
              },
              {
                title: "Developer Tooling",
                description: "SDK development, monitoring systems, API analytics, and tools for AI infrastructure observability"
              },
              {
                title: "Voice AI",
                description: "Voice agent systems, conversational AI infrastructure, and automated customer interaction platforms"
              },
              {
                title: "Product Development",
                description: "AI product design, startup product development, MVP creation, and developer-focused tools"
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border border-border bg-card hover:bg-card/80 transition-colors">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-20 px-4 border-t border-border bg-secondary/20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Professional Background</h2>
          
          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">Cost Control Engineer → AI Infrastructure Engineer</h3>
              <p className="text-muted-foreground mb-4">
                10+ years of experience in project controls, cost engineering, and operations across oil & gas and infrastructure sectors. 
                Successfully transitioned expertise to AI infrastructure financial optimization.
              </p>
              <div className="text-sm text-primary font-medium">
                <p><strong>Cost Engineering Skills:</strong> Budget tracking, cost forecasting, variance analysis, financial monitoring</p>
                <p className="mt-2"><strong>AI Infrastructure Mapping:</strong> Project burn rate → Token burn rate | Cost variance → API usage spikes | Budget forecasting → AI inference forecasting</p>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">AI Automation & Product Building</h3>
              <p className="text-muted-foreground mb-4">
                Designed and deployed AI-assisted operational systems, built application-based solutions, and led early-stage product design 
                and MVP development for operational platforms. Integrated CRM systems, workflow automation tools, and orchestration platforms.
              </p>
              <div className="text-sm text-primary font-medium">
                <p><strong>Key Skills:</strong> AI workflow design, agent systems, no-code/low-code development, backend integration, rapid prototyping</p>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">Education & Certifications</h3>
              <p className="text-muted-foreground">
                B.Sc. in Economics | Chevron Operational Excellence | Project Cost Engineering (J.K. Michaels) | 
                TEFL Certification | AACE Certified Cost Professional (In View)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 border-t border-border bg-gradient-to-br from-primary/10 to-transparent">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Build Something Great</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Looking for an AI Infrastructure & Cost Optimization Engineer to help scale your AI systems efficiently? 
            Let's discuss how I can help your team automate operations and optimize costs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:anyanwuihueze@gmail.com">
                <Mail className="w-4 h-4" />
                Send Me an Email
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://linkedin.com/in/anyanwuihueze" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="font-bold text-lg mb-2">Prince Anyanwu</h3>
              <p className="text-sm text-muted-foreground">AI Infrastructure & Cost Optimization Engineer</p>
            </div>
            
            <div className="flex gap-6">
              <a href="mailto:anyanwuihueze@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/anyanwuihueze" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/anyanwu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>

            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>© 2026 Prince Anyanwu. All rights reserved.</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

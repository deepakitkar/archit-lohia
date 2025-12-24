import { 
  CheckCircle2, 
  FileText, 
  Shield, 
  TrendingUp, 
  Users, 
  Building2,
  FileCheck,
  Upload,
  Send,
  Search,
  Award,
  Lock,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from "framer-motion";

const benefits = [
  {
    icon: TrendingUp,
    title: "Lower Investment Thresholds",
    description: "Invest in AIFs, PMS, SIFs with reduced minimum investment requirements"
  },
  {
    icon: Shield,
    title: "Regulatory Relaxations",
    description: "Benefit from relaxations in Investment Agreements, Prudential Norms and Investment Conditions"
  },
  {
    icon: Users,
    title: "Angel Fund Access",
    description: "Participate in Angel Funds and Co-Investment Vehicles (CIVs)"
  },
  {
    icon: FileText,
    title: "Customized Products",
    description: "Access investment products tailored to your specific risk-return profile"
  },
];

const eligibilityData = [
  {
    icon: Users,
    title: "Individuals / HUFs",
    criteria: [
      "Net worth ≥ ₹7.5 crore",
      "OR Annual income ≥ ₹2 crore",
      "OR Net worth ≥ ₹5 crore AND Annual income ≥ ₹1 crore",
    ],
    note: "50% of Net worth to be in Financial Assets"
  },
  {
    icon: Building2,
    title: "Trust",
    criteria: ["AUM ≥ ₹50 crore"],
  },
  {
    icon: Building2,
    title: "Company / LLP",
    criteria: ["Net worth ≥ ₹50 crore"],
  },
  {
    icon: Users,
    title: "Partnership Firm",
    criteria: ["Each partner to independently meet Individual criteria"],
  },
];

const processSteps = [
  {
    step: 1,
    icon: Upload,
    title: "Document Collection",
    description: "Gather Demat statements, ITRs, Bank statements, Balance Sheet"
  },
  {
    step: 2,
    icon: FileCheck,
    title: "Net Worth Certificate",
    description: "Issuance of Net Worth Certificate by our team of CAs"
  },
  {
    step: 3,
    icon: Send,
    title: "Application Submission to the Agency",
    description: "Application submission and verification to Accreditation Agency"
  },
  {
    step: 4,
    icon: Award,
    title: "Certificate Issued",
    description: "Receive your Accredited Investor Certificate"
  },
];


const features = [
  {
    icon: Shield,
    title: "Expert Team",
    description: "Team of Practising CAs and Reputed AIF Industry Specialists",
  },
  {
    icon: FileCheck,
    title: "Transparent Pricing",
    description: "No Hidden costs for uploading documents and processing the Application!",
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Digital Process to protect Data Confidentiality",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Time-bound Process of 1 day for our Net Worth Certificate",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const documents = [
  "Latest Demat Statements",
  "Net Worth Certificate issued by our Team of CAs",
  "Income Tax Returns",
  "Copy of PAN and Aadhar",
  "Latest Balance Sheet OR Self-declaration of Assets/Liabilities",
  "Signed Letter of Authority",
  "Proof of Ready Reckoner Rate, when Real Estate is considered",
  "Signed Undertakings, as per SEBI-approved templates",
];

const AccreditationSection = () => {
  return (
    <div id="accreditation">
      {/* Section 1: Why Accreditation - White with blue gradient overlay */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-background">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(210_55%_25%/0.03)_0%,transparent_50%)]" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(hsl(210 55% 25% / 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        
        <div className="container relative z-10 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Why Accreditation?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Unlock Premium Investment Opportunities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Accreditation opens doors to exclusive investment vehicles and regulatory benefits
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="bg-card border border-border/50 shadow-sm hover-lift group transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Eligibility Norms - Light blue tinted background */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-secondary/50">
        {/* Decorative wave divider at top */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-background" style={{
          clipPath: 'ellipse(70% 100% at 50% 0%)'
        }} />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10 px-4 pt-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-accent/15 text-accent text-sm font-medium rounded-full mb-4 shadow-sm">
                Eligibility Norms
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Who Can Apply?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Check if you meet the criteria to become an Accredited Investor
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {eligibilityData.map((item, index) => (
                <Card key={index} className="bg-card border border-border/50 shadow-sm hover-lift transition-all duration-300 hover:border-accent/30 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.criteria.map((criterion, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{criterion}</span>
                        </li>
                      ))}
                    </ul>
                    {item.note && (
                      <p className="mt-4 text-sm text-accent bg-accent/10 px-3 py-2 rounded-lg border border-accent/20">
                        Note: {item.note}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Process - White with orange accent decorations */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-background">
        {/* Decorative wave divider at top */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-secondary/50" style={{
          clipPath: 'ellipse(70% 100% at 50% 0%)'
        }} />
        
        {/* Orange accent decorations */}
        <div className="absolute top-1/3 right-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(hsl(28 92% 54% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(28 92% 54% / 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container relative z-10 px-4 pt-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                The Process
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                4-Step Journey to Accreditation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A streamlined process to unlock exclusive investment opportunities
              </p>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative text-center group">
                    <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-2xl bg-card border-2 border-primary/20 flex items-center justify-center group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                      <step.icon className="w-7 h-7 text-primary" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-accent to-accent/80 text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Documentation - Light blue with subtle pattern */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-secondary/50">
        {/* Decorative wave divider at top */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-background" style={{
          clipPath: 'ellipse(70% 100% at 50% 0%)'
        }} />
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        {/* Hexagon pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20V40L30 55L5 40V20L30 5z' fill='none' stroke='%231e3a5f' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        
        <div className="container relative z-10 px-4 pt-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-accent/15 text-accent text-sm font-medium rounded-full mb-4 shadow-sm">
                Documentation
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Required Documents
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Prepare these documents for a smooth application process
              </p>
            </div>

            <Card className="bg-card border border-border/50 shadow-lg">
              <CardContent className="p-8">
                <ul className="grid md:grid-cols-2 gap-2">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
	  
	  {/* Section 5: Why Us? */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-subtle">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Our Advantages
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Why <span className="text-gradient">Choose Us</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, transparency, and efficiency to deliver exceptional service
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1">
                {/* Icon container */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-accent text-primary-foreground shadow-icon group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 font-display">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
	  
    </div>
  );
};

export default AccreditationSection;

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedText from './AnimatedText';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern - Enhanced gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(210_30%_95%)_50%,hsl(210_35%_92%)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(210_55%_25%/0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(28_92%_54%/0.05)_0%,transparent_50%)]" />
      
      {/* Subtle mesh grid pattern */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'radial-gradient(hsl(210 55% 25% / 0.08) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />
      
      {/* Decorative Elements - Enhanced */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-32 right-1/4 w-20 h-20 border border-primary/10 rounded-2xl rotate-12 animate-float" />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-accent/15 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-accent/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">		 
          {/* Animated Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border/50 rounded-full mb-8 shadow-card animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Accredited Investor Certification
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Your Gateway to
          </h1>

          {/* Animated Text */}
          <div 
            className="mb-8 opacity-0 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <AnimatedText />
          </div>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            End-to-end documentation for Accredited Investor Certificate. 
            Invest in AIFs, PMS, SIFs with reduced minimum thresholds.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up"
            style={{ animationDelay: '0.5s' }}
          >
            <Link to="/register">
              <Button variant="hero" size="xl" className="group">
                Become an Accredited Investor
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="#accreditation">
              <Button variant="hero-outline" size="xl">
                Learn More
              </Button>
            </a>
          </div>
		  <br/>
		<div class="bg-gradient-to-r from-orange-50 to-blue-50 border border-orange-200 rounded-lg px-4 py-3 text-center hover:shadow-sm transition-shadow duration-200">
		<p class="text-xs sm:text-sm text-orange-700 font-medium whitespace-nowrap overflow-hidden">🎊 Get Accredited in India and GIFT City 🎊
		</p>
		</div>	  
        </div>
		
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

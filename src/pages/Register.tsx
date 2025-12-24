import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, CheckCircle2, Building2, Briefcase, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import logo from '@/assets/logo.png';

const benefits = [
  "Invest in AIFs, PMS, SIFs with reduced minimums",
  "Access Angel Funds and Co-Investment Vehicles",
  "Customized products for your risk profile",
  "Expert CA support throughout the process",
];

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both passwords are identical.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate registration
    setTimeout(() => {
      toast({
        title: "Registration Successful",
        description: "Welcome to Archit Lohia. Please check your email to verify your account.",
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Register | Archit Lohia</title>
        <meta name="description" content="Create your account to start your journey as an Accredited Investor with expert CA guidance." />
      </Helmet>

      <div className="min-h-screen flex">
        {/* Left Panel - Decorative */}
        <div className="hidden lg:flex flex-1 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(28_92%_54%/0.15)_0%,transparent_70%)]" />
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col justify-center p-12">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                Start Your Accreditation Journey
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Join hundreds of investors who have unlocked premium investment opportunities.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-primary-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="flex-1 flex items-center justify-center px-4 py-12 overflow-y-auto bg-white">
          <div className="w-full max-w-md">
            {/* Logo */}
            <Link to="/" className="inline-block mb-8">
              <img src={logo} alt="Archit Lohia" className="h-12 w-auto" />
            </Link>

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Create your account</h1>
              <p className="text-muted-foreground">
                Start your journey to become an Accredited Investor
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
			  {/* Grid Container: 1 column on mobile, 2 columns on small screens and up */}
			  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				
				{/* Full Name */}
				<div className="space-y-2">
				  <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
				  <div className="relative">
					<User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
					<Input id="name" name="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} className="pl-12" required />
				  </div>
				</div>
				
				{/* Organization */}
				<div className="space-y-2">
				  <label htmlFor="organization" className="text-sm font-medium text-foreground">Organization</label>
				  <div className="relative">
					<Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
					<Input id="organization" name="organization" type="text" placeholder="Company ABC" value={formData.email} onChange={handleChange} className="pl-12" required />
				  </div>
				</div>
				
				{/* Role */}
				<div className="space-y-2 sm:col-span-2">
				  <label htmlFor="role" className="text-sm font-medium text-foreground">Role in Industry</label>
				  <div className="relative">
					{/* Icon on the left */}
					<Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
					<select id="role" name="role" value={formData.role} onChange={handleChange} required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-12 appearance-none">
					  <option value="" disabled>Select your role</option>
					  <option value="fund-manager">Fund Manager</option>
					  <option value="distributor">Distributor</option>
					  <option value="custodian">Custodian</option>
					  <option value="trustee">Trustee</option>
					  <option value="rta">RTA</option>
					  <option value="legal-firm">Legal Firm</option>
					  <option value="auditor">Auditor/Chartered Accountant</option>
					  <option value="regulator">Regulator/SRO</option>
					  <option value="other">Other</option>
					</select>

					{/* Custom Dropdown Arrow on the right since we used appearance-none */}
					<ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
				  </div>
				</div>

				{/* Email Address */}
				<div className="space-y-2">
				  <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
				  <div className="relative">
					<Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
					<Input id="email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} className="pl-12" required />
				  </div>
				</div>

				{/* Phone Number */}
				<div className="space-y-2">
				  <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
				  <div className="relative">
					<Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
					<Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} className="pl-12" required />
				  </div>
				</div>
				
				{/* Password */}
				<div className="space-y-2">
				  <label htmlFor="password" className="text-sm font-medium text-foreground">Password</label>
				  <div className="relative">
					<Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
					<Input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={formData.password} onChange={handleChange} className="pl-12 pr-12" required />
					<button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
					  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
					</button>
				  </div>
				</div>

				{/* Confirm Password - Col Span makes this full width or you can keep it in one col */}
				<div className="space-y-2">
				  <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">Confirm Password</label>
				  <div className="relative">
					<Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
					<Input id="confirmPassword" name="confirmPassword" type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={formData.confirmPassword} onChange={handleChange} className="pl-12" required />
				  </div>
				</div>
			  </div>

			  {/* Button and Footer remain outside the grid */}
			  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
				{isLoading ? (
				  <div className="flex items-center gap-2">
					<div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
					Creating account...
				  </div>
				) : (
				  <div className="flex items-center gap-2">
					Create Account <ArrowRight className="w-4 h-4" />
				  </div>
				)}
			  </Button>

			  <p className="text-xs text-muted-foreground text-center">
				By creating an account, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
			  </p>
			</form>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              <li>Team of Practicing Chartered Accountants, specializing in AIF-SIF-PMS domain.</li>
              <li>Empanelled with KRAs in India. Active co-investors in Listed Equities, Pre-IPO shares and Start-ups.</li>
            </p>
            <div className="mb-6">
              <p className="font-semibold text-lg">Mr. Archit Lohia</p>
              <p className="text-primary-foreground/80">CFA, CA, CAIA, LLB</p>
            </div>            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#accreditation" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Accreditation
                </a>
              </li>
              <li>
                <Link to="/login" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">
                  525, Arun Chambers, Tardeo, Mumbai 400034
                </span>
              </li>
              <li>
                <a href="tel:+919321306866" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                  +91-9321306866
                </a>
              </li>
              <li>
                <a href="mailto:info@architlohia.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                  info@architlohia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Archit Lohia. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Smarter Alternatives, Greater Relevance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

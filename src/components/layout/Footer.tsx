import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050706] pt-12 sm:pt-16 pb-10 sm:pb-12" id="footer">
      <div className="max-w-[1300px] mx-auto px-4 xs:px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 pb-12 sm:pb-16">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="inline-flex items-center tracking-tight mb-3.5 group focus:outline-none">
              <span className="text-xl font-black text-white tracking-tight uppercase">
                CHARGE
              </span>
              <span className="text-xl font-medium text-[#8CF06B] tracking-tight lowercase ml-1">
                undo
              </span>
            </Link>

            <p className="text-[#A0A5A1] text-xs sm:text-sm max-w-sm leading-relaxed mb-5">
              Find a Charge. Anywhere. The unified EV charging discovery network and community charging marketplace for Kerala and India.
            </p>

            <div className="space-y-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8CF06B] flex-shrink-0" />
                <span>Kochi, Kerala, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8CF06B] flex-shrink-0" />
                <span>contact@chargeundo.in</span>
              </div>
            </div>
          </div>

          {/* Column 1: Explore & Discovery */}
          <div className="col-span-1">
            <h4 className="text-[11px] sm:text-xs uppercase font-semibold text-white tracking-wider mb-3 sm:mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A0A5A1]">
              <li>
                <Link to="/app/explore" className="hover:text-white transition-colors">
                  Explore Stations
                </Link>
              </li>
              <li>
                <Link to="/app/explore?filter=fast" className="hover:text-white transition-colors">
                  Fast DC Hubs
                </Link>
              </li>
              <li>
                <Link to="/app/explore?filter=community" className="hover:text-white transition-colors">
                  Community Chargers
                </Link>
              </li>
              <li>
                <a href="/#search" className="hover:text-white transition-colors">
                  Search Location
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Community & Hosts */}
          <div className="col-span-1">
            <h4 className="text-[11px] sm:text-xs uppercase font-semibold text-white tracking-wider mb-3 sm:mb-4">
              Community
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A0A5A1]">
              <li>
                <Link to="/app/list-charger" className="hover:text-white transition-colors">
                  List Your Charger
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-[11px] sm:text-xs uppercase font-semibold text-white tracking-wider mb-3 sm:mb-4">
              Legal &amp; Policy
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A0A5A1]">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Host Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Minimal Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3">
          <div>
            © {new Date().getFullYear()} CHARGE undo. All rights reserved.
          </div>
          <div className="text-zinc-500 text-[11px] sm:text-xs">
            Kerala &amp; India EV Platform
          </div>
        </div>
      </div>
    </footer>
  );
};
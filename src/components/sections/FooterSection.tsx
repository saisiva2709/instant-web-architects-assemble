
import { Link } from "react-router-dom";
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Instant Web</h3>
            <p className="text-slate-300 mb-4">
              We build fast, reliable, and secure web applications that help businesses grow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-slate-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="#" className="text-slate-300 hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link to="#" className="text-slate-300 hover:text-white transition-colors">Cloud Hosting</Link></li>
              <li><Link to="#" className="text-slate-300 hover:text-white transition-colors">E-commerce Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-slate-300 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="#" className="text-slate-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-slate-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="text-slate-300 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-slate-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center md:flex md:justify-between">
          <p className="text-slate-400">© 2025 Instant Web. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link to="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="text-slate-400 hover:text-white transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

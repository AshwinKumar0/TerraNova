import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, TreePine, Phone, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans text-stone-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link 
              to="/"
              className="flex items-center gap-2 no-underline" 
            >
              <div className="bg-emerald-800 p-2 rounded-lg">
                <TreePine className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-emerald-900 tracking-tight">RedKnox</h1>
                <p className="text-xs text-stone-500 tracking-widest uppercase">Estates</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-emerald-700' 
                      : 'text-stone-600 hover:text-emerald-800'
                  }`}
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink 
                to="/admin"
                className={({ isActive }) => `text-sm font-medium transition-colors ${
                  isActive ? 'text-emerald-700' : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                Admin
              </NavLink>
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden md:block">
              <Link 
                to="/contact"
                className="bg-emerald-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-900 transition-all shadow-md hover:shadow-lg no-underline inline-block"
              >
                Book Site Visit
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6 text-stone-800" /> : <Menu className="h-6 w-6 text-stone-800" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 absolute w-full left-0 top-20 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `block w-full text-left px-3 py-2 rounded-md text-base font-medium no-underline ${
                    isActive
                      ? 'bg-stone-100 text-emerald-800' 
                      : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/admin"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `block w-full text-left px-3 py-2 rounded-md text-base font-medium no-underline ${
                  isActive ? 'bg-stone-100 text-emerald-800' : 'text-stone-400 hover:bg-stone-50'
                }`}
              >
                Admin Login
              </NavLink>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-emerald-950 text-stone-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                 <div className="bg-white/10 p-2 rounded-lg">
                    <TreePine className="h-6 w-6 text-white" />
                 </div>
                 <span className="text-xl font-bold text-white">RedKnox</span>
              </div>
              <p className="text-sm leading-relaxed text-stone-400">
                Curating premium countryside living experiences. We connect you with nature without compromising on luxury.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition no-underline">Home</Link></li>
                <li><Link to="/projects" className="hover:text-white transition no-underline">All Projects</Link></li>
                <li><Link to="/about" className="hover:text-white transition no-underline">Our Story</Link></li>
                <li><Link to="/contact" className="hover:text-white transition no-underline">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span>Redknox Estates Pvt Ltd.<br />Pune, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span>+971 557000545</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span>sujitsin@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-emerald-600 transition"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-emerald-600 transition"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-emerald-600 transition"><Twitter className="h-5 w-5" /></a>
              </div>
            </div>
          </div>

          <div className="border-t border-emerald-900 mt-12 pt-8 text-center text-xs text-stone-500">
            © {new Date().getFullYear()} RedKnox Estates. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

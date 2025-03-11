import React from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: '#' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:hello@example.com' }
  ];

  const quickLinks = [
    { label: 'About', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Experience', href: '#' },
    { label: 'Blog', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Together</h2>
          <p className="text-gray-400 mb-6 max-w-md">
            Open for collaborations and exciting projects. Reach out and let's create something amazing.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all"
          >
            Get in Touch <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-3">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>© {currentYear} All rights reserved. Built with passion.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
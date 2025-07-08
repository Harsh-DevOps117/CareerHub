import React from "react";

import {
  Briefcase,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500  flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-2xl font-bold text-white">
                Career<span className="text-green-400">HUB</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Your ultimate platform for discovering professional opportunities
              and connecting with top talent.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#jobs"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#recruiters"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Recruiters
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Career Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                <a
                  href="mailto:info@careerhub.com"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  info@careerhub.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-2" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  98767890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-1" />
                <span className="text-gray-300">Doge to moon</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CareerHUB. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

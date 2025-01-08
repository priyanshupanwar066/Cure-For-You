import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold">Cure For You</h3>
            <p className="mt-4 text-gray-400">
              Providing quality healthcare services with compassion and excellence.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:priyanshupanwar841@gmail.com" className="text-gray-400 hover:text-white">
                  priyanshupanwar841@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <a href="tel:7078041562" className="text-gray-400 hover:text-white">
                  +91 7078041562
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white">Services</a>
              </li>
              <li>
                <a href="/appointments" className="text-gray-400 hover:text-white">Book Appointment</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} CureForYou. All rights reserved. | Developed by Priyanshu Panwar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
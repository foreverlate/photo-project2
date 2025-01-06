import { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';

    export default function Navbar() {
      const [isGalleryOpen, setIsGalleryOpen] = useState(false);

      const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 }
      };

      return (
        <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-light">
              <a href="/" className="text-gray-800 hover:text-gray-600">
                Home
              </a>
            </div>
            <ul className="flex space-x-8">
              <li>
                <a href="/about" className="text-gray-800 hover:text-gray-600">
                  About
                </a>
              </li>
              <li className="relative">
                <button
                  onMouseEnter={() => setIsGalleryOpen(true)}
                  onMouseLeave={() => setIsGalleryOpen(false)}
                  className="text-gray-800 hover:text-gray-600 focus:outline-none"
                >
                  Gallery
                </button>
                <AnimatePresence>
                  {isGalleryOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setIsGalleryOpen(true)}
                      onMouseLeave={() => setIsGalleryOpen(false)}
                      className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg overflow-hidden"
                    >
                      <a
                        href="/gallery/travel"
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                      >
                        Travel
                      </a>
                      <a
                        href="/gallery/events"
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                      >
                        Events
                      </a>
                      <a
                        href="/gallery/nature"
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                      >
                        Nature
                      </a>
                      <a
                        href="/gallery/portrait"
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                      >
                        Portrait
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <a href="/contact" className="text-gray-800 hover:text-gray-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      );
    }

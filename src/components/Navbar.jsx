import { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Link } from 'react-router-dom';

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
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <Link to="/" className="text-xl font-light text-gray-800 hover:text-gray-600">
                BeyondJJ
              </Link>
            </div>
            <ul className="flex space-x-8">
              <li>
                <Link to="/about" className="text-gray-800 hover:text-gray-600">
                  About
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="/gallery"
                  onMouseEnter={() => setIsGalleryOpen(true)}
                  onMouseLeave={() => setIsGalleryOpen(false)}
                  className="text-gray-800 hover:text-gray-600 focus:outline-none"
                >
                  Gallery
                </Link>
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
                      <Link
                        to="/gallery/travel"
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                      >
                        Travel
                      </Link>
                      <Link
                        to="/gallery/nature"
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                      >
                        Nature
                      </Link>
                      <Link
                        to="/gallery/events"
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                      >
                        Events
                      </Link>
                      <Link
                        to="/gallery/portrait"
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                      >
                        Portrait
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <Link to="/contact" className="text-gray-800 hover:text-gray-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }

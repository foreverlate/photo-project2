import { motion } from 'framer-motion';
    import Navbar from '../components/Navbar';

    export default function AboutPage() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="pt-20">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
              <section className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <img
                    src="https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg"
                    alt="Photographer Portrait"
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                  />
                </div>

                <div>
                  <h1 className="text-4xl font-bold mb-6 text-gray-800">
                    BeyondJJ Photography
                  </h1>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      I'm a professional photographer passionate about capturing 
                      moments that tell unique stories through visual narratives.
                    </p>
                    <p>
                      With over 10 years of experience, I specialize in travel, 
                      landscape, and portrait photography, exploring the world 
                      through my lens.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-2xl font-semibold mb-4">My Specialties</h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Travel Photography</li>
                      <li>Landscape Compositions</li>
                      <li>Portrait Sessions</li>
                      <li>Event Documentation</li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-2xl font-semibold mb-4">Awards</h2>
                    <ul className="space-y-2">
                      <li>🏆 National Geographic Photographer of the Year (2022)</li>
                      <li>🌟 International Photography Awards - Honorable Mention</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mt-12 text-center">
                <h2 className="text-3xl font-bold mb-6">My Equipment</h2>
                <div className="grid md:grid-cols-4 gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-100 p-4 rounded-lg"
                  >
                    <h3>Camera</h3>
                    <p>Sony A7R IV</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-100 p-4 rounded-lg"
                  >
                    <h3>Lens</h3>
                    <p>24-70mm f/2.8</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-100 p-4 rounded-lg"
                  >
                    <h3>Drone</h3>
                    <p>DJI Mavic 3</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-100 p-4 rounded-lg"
                  >
                    <h3>Lighting</h3>
                    <p>Profoto B10</p>
                  </motion.div>
                </div>
              </section>
            </div>
          </main>
        </div>
      );
    }

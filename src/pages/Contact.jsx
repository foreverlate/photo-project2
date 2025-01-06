import { motion } from 'framer-motion';
    import Navbar from '../components/Navbar';

    export default function ContactPage() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="pt-20">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p>contact@beyondjj.com</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p>+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p>San Francisco, California</p>
                    </div>
                  </div>

                  <div className="mt-8 flex space-x-4">
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      href="#"
                      className="text-2xl hover:text-gray-600"
                    >
                      📷 Instagram
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      href="#"
                      className="text-2xl hover:text-gray-600"
                    >
                      🌐 Portfolio
                    </motion.a>
                  </div>
                </div>

                <form className="space-y-4">
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type="text" 
                    placeholder="Full Name"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type="email" 
                    placeholder="Email Address"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                  <motion.textarea 
                    whileFocus={{ scale: 1.02 }}
                    placeholder="Your Message"
                    rows={5}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </main>
        </div>
      );
    }

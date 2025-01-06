import Head from 'next/head';

    export default function About() {
      return (
        <div className="font-sans text-gray-800">
          <Head>
            <title>About - Apple Inspired Website</title>
            <meta name="description" content="About page of the Apple-inspired website" />
          </Head>
          <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <div className="text-xl font-semibold">
                <a href="/" className="text-gray-800 hover:text-gray-600">
                  Home
                </a>
              </div>
              <ul className="flex space-x-6">
                <li>
                  <a href="/about" className="text-gray-800 hover:text-gray-600">
                    About
                  </a>
                </li>
                <li className="relative">
                  <a href="/" className="text-gray-800 hover:text-gray-600">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-800 hover:text-gray-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg">
              This is the about page of the Apple-inspired website.
            </p>
          </main>
        </div>
      );
    }

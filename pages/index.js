import Head from 'next/head';
    import Navbar from '../components/Navbar';

    export default function Home() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Head>
            <title>Apple Inspired Website</title>
            <meta name="description" content="An Apple-inspired website with smooth animations" />
          </Head>
          <Navbar />
          <main className="pt-20">
            <div className="container mx-auto px-6 py-8">
              <h1 className="text-4xl font-light text-gray-800 mb-6">Welcome</h1>
              <p className="text-lg text-gray-600">
                This is a simple website inspired by Apple's design.
              </p>
            </div>
          </main>
        </div>
      );
    }

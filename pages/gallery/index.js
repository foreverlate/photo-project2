import Navbar from '../../components/Navbar';
    import Link from 'next/link';

    const categories = [
      {
        name: 'travel',
        image: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
        title: 'Travel Photography'
      },
      {
        name: 'nature',
        image: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
        title: 'Nature Photography'
      },
      {
        name: 'events',
        image: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
        title: 'Event Photography'
      },
      {
        name: 'portrait',
        image: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
        title: 'Portrait Photography'
      }
    ];

    export default function Gallery() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="pt-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-light text-gray-800 mb-8">Gallery</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={`/gallery/${category.name}`}
                    className="relative group overflow-hidden rounded-lg shadow-lg"
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h2 className="absolute bottom-4 left-4 text-white text-2xl font-light">
                        {category.title}
                      </h2>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </main>
        </div>
      );
    }

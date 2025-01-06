import GalleryGrid from '../../components/GalleryGrid';
    import Navbar from '../../components/Navbar';

    const travelImages = [
      {
        src: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
        alt: 'Travel Image 1',
        title: 'Mountain Adventure',
        location: 'Switzerland'
      },
      {
        src: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
        alt: 'Travel Image 2',
        title: 'Cityscape',
        location: 'Tokyo'
      }
    ];

    export default function Travel() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="pt-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-light text-gray-800 mb-8">Travel Gallery</h1>
              <GalleryGrid images={travelImages} />
            </div>
          </main>
        </div>
      );
    }

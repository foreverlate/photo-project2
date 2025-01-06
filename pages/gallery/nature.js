import GalleryGrid from '../../components/GalleryGrid';
    import Navbar from '../../components/Navbar';

    const natureImages = [
      {
        src: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
        alt: 'Nature Image 1',
        title: 'Forest Trail',
        location: 'Canada'
      },
      {
        src: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
        alt: 'Nature Image 2',
        title: 'Waterfall',
        location: 'Iceland'
      }
    ];

    export default function Nature() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="pt-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-light text-gray-800 mb-8">Nature Gallery</h1>
              <GalleryGrid images={natureImages} />
            </div>
          </main>
        </div>
      );
    }

import GalleryGrid from '../../components/GalleryGrid';
    import Navbar from '../../components/Navbar';

    const portraitImages = [
      {
        src: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
        alt: 'Portrait Image 1',
        title: 'Urban Portrait',
        location: 'New York'
      },
      {
        src: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
        alt: 'Portrait Image 2',
        title: 'Studio Portrait',
        location: 'Paris'
      }
    ];

    export default function Portrait() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="pt-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-light text-gray-800 mb-8">Portrait Gallery</h1>
              <GalleryGrid images={portraitImages} />
            </div>
          </main>
        </div>
      );
    }

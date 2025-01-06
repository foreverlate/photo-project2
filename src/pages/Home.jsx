import Navbar from '../components/Navbar';
    import GalleryGrid from '../components/GalleryGrid';

    const images = [
      {
        src: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
        alt: 'Travel Image 1',
        title: 'Mountain Adventure',
        location: 'Switzerland'
      },
      {
        src: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
        alt: 'Nature Image 1',
        title: 'Forest Trail',
        location: 'Canada'
      },
      {
        src: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
        alt: 'Event Image 1',
        title: 'Wedding Ceremony',
        location: 'Italy'
      },
      {
        src: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
        alt: 'Portrait Image 1',
        title: 'Urban Portrait',
        location: 'New York'
      }
    ];

    export default function Home() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="pt-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-light text-gray-800 mb-8">Welcome to BeyondJJ</h1>
              <GalleryGrid images={images} />
            </div>
          </main>
        </div>
      );
    }

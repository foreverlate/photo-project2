import GalleryGrid from '../../components/GalleryGrid';
    import Navbar from '../../components/Navbar';

    const eventsImages = [
      {
        src: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
        alt: 'Event Image 1',
        title: 'Wedding Ceremony',
        location: 'Italy'
      },
      {
        src: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
        alt: 'Event Image 2',
        title: 'Music Festival',
        location: 'California'
      }
    ];

    export default function Events() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="pt-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-light text-gray-800 mb-8">Events Gallery</h1>
              <GalleryGrid images={eventsImages} />
            </div>
          </main>
        </div>
      );
    }

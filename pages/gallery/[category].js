import { useRouter } from 'next/router';
    import GalleryGrid from '../../components/GalleryGrid';
    import Navbar from '../../components/Navbar';

    const images = {
      travel: [
        {
          src: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
          alt: 'Travel Image 1',
          title: 'Mountain Adventure',
          location: 'Switzerland'
        },
        // Add more travel images
      ],
      nature: [
        {
          src: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
          alt: 'Nature Image 1',
          title: 'Forest Trail',
          location: 'Canada'
        },
        // Add more nature images
      ],
      events: [
        {
          src: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
          alt: 'Event Image 1',
          title: 'Wedding Ceremony',
          location: 'Italy'
        },
        // Add more event images
      ],
      portrait: [
        {
          src: 'https://wp.jjblog.xyz/wp-content/uploads/2022/11/TW-8-of-1-1024x621.jpg',
          alt: 'Portrait Image 1',
          title: 'Urban Portrait',
          location: 'New York'
        },
        // Add more portrait images
      ]
    };

    export default function GalleryCategory() {
      const router = useRouter();
      const { category } = router.query;

      if (!category || !images[category]) {
        return <div>Loading...</div>;
      }

      return (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="pt-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-light text-gray-800 mb-8 capitalize">
                {category} Gallery
              </h1>
              <GalleryGrid images={images[category]} />
            </div>
          </main>
        </div>
      );
    }

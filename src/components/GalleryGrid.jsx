import { motion } from 'framer-motion';

    const imageVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
      hover: { scale: 1.02 }
    };

    export default function GalleryGrid({ images }) {
      return (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={imageVariants}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid relative group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-light">{image.title}</h3>
                  <p className="text-sm">{image.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      );
    }

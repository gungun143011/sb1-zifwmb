import { motion } from 'framer-motion';

const stories = [
  {
    id: '1',
    title: 'The Lost City',
    author: 'Jane Doe',
    coverUrl: 'https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?auto=format&fit=crop&w=800&q=80',
    genre: 'Adventure',
    likes: 1234,
  },
  {
    id: '2',
    title: 'Midnight Tales',
    author: 'John Smith',
    coverUrl: 'https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?auto=format&fit=crop&w=800&q=80',
    genre: 'Horror',
    likes: 856,
  },
  {
    id: '3',
    title: 'Beyond the Stars',
    author: 'Mike Wilson',
    coverUrl: 'https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?auto=format&fit=crop&w=800&q=80',
    genre: 'Sci-Fi',
    likes: 2341,
  },
  // Add more stories as needed
];

export function StoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {stories.map((story, index) => (
        <motion.div
          key={story.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="relative aspect-[3/4]">
            <img
              src={story.coverUrl}
              alt={story.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-semibold text-lg mb-1">{story.title}</h3>
              <p className="text-sm text-gray-300">by {story.author}</p>
            </div>
          </div>
          <div className="p-4 flex justify-between items-center">
            <span className="text-sm text-gray-400">{story.genre}</span>
            <span className="text-sm text-gray-400">❤️ {story.likes}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
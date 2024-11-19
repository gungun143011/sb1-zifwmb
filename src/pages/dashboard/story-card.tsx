import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

interface StoryCardProps {
  title: string;
  author: string;
  coverUrl: string;
  progress?: number;
}

export function StoryCard({ title, author, coverUrl, progress }: StoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative aspect-[3/4]">
        <img
          src={coverUrl}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {progress !== undefined && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <Progress value={progress} className="h-1" />
            <p className="text-sm text-gray-300 mt-2">{progress}% completed</p>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-400">by {author}</p>
      </div>
    </motion.div>
  );
}
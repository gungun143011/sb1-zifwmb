import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { StoryGrid } from './story-grid';

export function Discover() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold">Discover Stories</h1>
          <div className="relative w-full md:w-96">
            <Input
              type="search"
              placeholder="Search stories..."
              className="pl-10 bg-gray-900 border-gray-700"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <StoryGrid />
      </motion.div>
    </div>
  );
}
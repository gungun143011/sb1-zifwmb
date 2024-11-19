import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Image, Save } from 'lucide-react';

export function Write() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Write Your Story</h1>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button size="sm">Publish</Button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Enter your story title..."
                className="text-2xl font-bold bg-transparent border-0 border-b border-gray-700 rounded-none px-0 focus:ring-0"
              />
            </div>

            <div className="relative h-64 bg-gray-900 rounded-lg border-2 border-dashed border-gray-700 flex items-center justify-center">
              <div className="text-center">
                <Image className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-400">
                  Drag and drop your cover image here, or{' '}
                  <button className="text-purple-500 hover:text-purple-400">
                    browse
                  </button>
                </p>
              </div>
            </div>

            <textarea
              placeholder="Start writing your story..."
              className="w-full min-h-[500px] bg-transparent border-0 text-lg resize-none focus:ring-0"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
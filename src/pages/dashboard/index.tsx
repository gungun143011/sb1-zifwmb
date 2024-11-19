import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { StoryCard } from './story-card';

export function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8">Welcome back, {user?.displayName || 'Reader'}!</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Continue Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StoryCard
              title="The Lost City"
              author="Jane Doe"
              coverUrl="https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?auto=format&fit=crop&w=800&q=80"
              progress={65}
            />
            <StoryCard
              title="Midnight Tales"
              author="John Smith"
              coverUrl="https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?auto=format&fit=crop&w=800&q=80"
              progress={30}
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StoryCard
              title="The Last Dream"
              author="Alice Johnson"
              coverUrl="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80"
            />
            <StoryCard
              title="Beyond the Stars"
              author="Mike Wilson"
              coverUrl="https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?auto=format&fit=crop&w=800&q=80"
            />
            <StoryCard
              title="Silent Whispers"
              author="Sarah Brown"
              coverUrl="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </section>
      </motion.div>
    </div>
  );
}
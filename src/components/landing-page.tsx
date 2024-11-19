import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Book, Feather, Star, Users, Globe } from 'lucide-react';
import { SpotlightText } from '@/components/ui/spotlight-text';
import { HeroCanvas } from '@/components/hero-canvas';
import { FeatureSection } from '@/components/feature-section';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold">Novela</h1>
          </motion.div>
          <div className="flex gap-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        />
        <HeroCanvas />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Welcome to <SpotlightText>Novela</SpotlightText>
            </h2>
            <p className="text-xl md:text-2xl mb-8">Where stories transcend languages</p>
            <Link to="/register">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Start Your Journey
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Sections */}
      <FeatureSection
        title="Discover Diverse Stories"
        description="Explore tales from around the world, all in your preferred language."
        icon={Book}
        imageUrl="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80"
        isReversed={false}
      />

      <FeatureSection
        title="Write Your Masterpiece"
        description="Craft your story and share it with a global audience."
        icon={Feather}
        imageUrl="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"
        isReversed={true}
      />

      <FeatureSection
        title="Connect with Readers"
        description="Build a following and engage with readers from across the globe."
        icon={Users}
        imageUrl="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
        isReversed={false}
      />

      {/* Call to Action */}
      <motion.section
        className="py-20 bg-gradient-to-r from-purple-600 to-blue-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Tell Your Story?</h2>
          <p className="text-xl mb-8">Join Novela today and let your words reach readers worldwide.</p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Sign Up Now
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">Novela</h4>
              <p className="text-sm text-gray-400">Where stories come alive</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Discover</li>
                <li>Write</li>
                <li>Connect</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Copyright</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© 2024 Novela. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
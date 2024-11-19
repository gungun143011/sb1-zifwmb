import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Book, Feather, LogOut, Menu, User, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { auth } from '@/lib/firebase';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.nav
        className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/dashboard" className="text-2xl font-bold">Novela</Link>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/discover">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Book className="w-4 h-4" />
                <span>Discover</span>
              </Button>
            </Link>
            <Link to="/write">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Feather className="w-4 h-4" />
                <span>Write</span>
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Profile</span>
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>

        <motion.div 
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-2 space-y-2 bg-black/90">
            <Link to="/discover" className="block">
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                <Book className="w-4 h-4" />
                <span>Discover</span>
              </Button>
            </Link>
            <Link to="/write" className="block">
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                <Feather className="w-4 h-4" />
                <span>Write</span>
              </Button>
            </Link>
            <Link to="/profile" className="block">
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                <User className="w-4 h-4" />
                <span>Profile</span>
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="w-full justify-start gap-2">
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </div>
        </motion.div>
      </motion.nav>

      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}
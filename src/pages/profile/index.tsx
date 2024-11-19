import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Camera } from 'lucide-react';

export function Profile() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-800">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'Profile'}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl text-gray-400">
                  {user?.displayName?.[0] || '?'}
                </div>
              )}
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-purple-600 rounded-full shadow-lg">
              <Camera className="w-4 h-4" />
            </button>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Display Name
            </label>
            <Input
              type="text"
              defaultValue={user?.displayName || ''}
              className="bg-gray-900 border-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <Input
              type="email"
              defaultValue={user?.email || ''}
              disabled
              className="bg-gray-900 border-gray-700 opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Bio
            </label>
            <textarea
              rows={4}
              className="w-full rounded-md bg-gray-900 border-gray-700 text-white resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <Button type="submit" className="w-full">
            Save Changes
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
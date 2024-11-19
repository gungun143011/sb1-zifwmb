import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Layout } from '@/components/layout';
import { LandingPage } from '@/pages/landing';
import { Dashboard } from '@/pages/dashboard';
import { Profile } from '@/pages/profile';
import { Write } from '@/pages/write';
import { Discover } from '@/pages/discover';
import { Login } from '@/pages/auth/login';
import { Register } from '@/pages/auth/register';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  
  if (loading) return null;
  
  return user ? <>{children}</> : <Navigate to="/login" />;
}

export default function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Layout>
            <Dashboard />
          </Layout>
        </PrivateRoute>
      } />
      
      <Route path="/profile" element={
        <PrivateRoute>
          <Layout>
            <Profile />
          </Layout>
        </PrivateRoute>
      } />
      
      <Route path="/write" element={
        <PrivateRoute>
          <Layout>
            <Write />
          </Layout>
        </PrivateRoute>
      } />
      
      <Route path="/discover" element={
        <PrivateRoute>
          <Layout>
            <Discover />
          </Layout>
        </PrivateRoute>
      } />
    </Routes>
  );
}
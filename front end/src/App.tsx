import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthCard } from './components/AuthCard';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { Users } from './pages/Users';
import { Settings } from './pages/Settings';

export function App() {
  return <BrowserRouter>
      <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <Routes>
          <Route path="/auth" element={<div className="w-full min-h-screen flex justify-center items-center p-4">
                <AuthCard />
              </div>} />
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>;
}
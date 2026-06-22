import { Route, Routes } from 'react-router-dom';
import { LandingPage } from '@/pages/LandingPage';
import { LegalPage } from '@/pages/LegalPage';
import { NotFound } from '@/pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/legal/:slug" element={<LegalPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

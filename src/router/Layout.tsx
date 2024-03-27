import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function Layout() {
  return (
    <div className="flex h-full flex-col">
      <Header />

      <main className="mx-auto mt-32 max-w-[600px] flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

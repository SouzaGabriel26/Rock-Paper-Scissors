import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export function Layout() {
  return (
    <div className="h-full">
      <Header />

      <main className="mx-auto mt-32 max-w-[600px]">
        <Outlet />
      </main>
    </div>
  );
}

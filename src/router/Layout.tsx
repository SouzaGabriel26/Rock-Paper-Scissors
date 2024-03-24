import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export function Layout() {
  return (
    <main>
      <Header />

      <div className="mx-auto max-w-[600px]">
        <Outlet />
      </div>
    </main>
  );
}

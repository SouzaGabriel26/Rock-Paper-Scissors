import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from '../pages/Game';
import { Play } from '../pages/Play';
import { Layout } from './Layout';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Play />} />
          <Route path="/game" element={<Game />} />
        </Route>

        <Route path="*" element={<h1>Path not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

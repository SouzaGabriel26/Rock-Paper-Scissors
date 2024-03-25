import { Toaster } from 'react-hot-toast';
import { GameProvider } from './contexts/GameContext';
import { Router } from './router';

export function App() {
  return (
    <GameProvider>
      <Router />
      <Toaster />
    </GameProvider>
  );
}

export default App;

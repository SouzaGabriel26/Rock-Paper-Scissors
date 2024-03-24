import { GameProvider } from './contexts/GameContext';
import { Router } from './router';

export function App() {
  return (
    <GameProvider>
      <Router />
    </GameProvider>
  );
}

export default App;

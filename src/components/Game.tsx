import { useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../hooks/useGameContext';

export default function Game() {
  const { dispatch, machineChoice, playerChoice, state } = useGameContext();
  const resultAlreadyCalculated = useRef(false);

  const navigate = useNavigate();

  const getResult = useCallback(() => {
    if (resultAlreadyCalculated.current) return;

    resultAlreadyCalculated.current = true;

    console.log('getResult');
    if (playerChoice === 'paper' && machineChoice === 'paper') {
      dispatch({ type: 'SET_WINNER', winner: 'draw' });
    } else if (playerChoice === 'paper' && machineChoice === 'rock') {
      dispatch({ type: 'INCREMENT_PLAYER_SCORE' });
      dispatch({ type: 'SET_WINNER', winner: 'player' });
    } else if (playerChoice === 'paper' && machineChoice === 'scissors') {
      dispatch({ type: 'INCREMENT_MACHINE_SCORE' });
      dispatch({ type: 'SET_WINNER', winner: 'machine' });
    } else if (playerChoice === 'rock' && machineChoice === 'rock') {
      dispatch({ type: 'SET_WINNER', winner: 'draw' });
    } else if (playerChoice === 'rock' && machineChoice === 'paper') {
      dispatch({ type: 'INCREMENT_MACHINE_SCORE' });
      dispatch({ type: 'SET_WINNER', winner: 'machine' });
    } else if (playerChoice === 'rock' && machineChoice === 'scissors') {
      dispatch({ type: 'INCREMENT_PLAYER_SCORE' });
      dispatch({ type: 'SET_WINNER', winner: 'player' });
    } else if (playerChoice === 'scissors' && machineChoice === 'scissors') {
      dispatch({ type: 'SET_WINNER', winner: 'draw' });
    } else if (playerChoice === 'scissors' && machineChoice === 'rock') {
      dispatch({ type: 'INCREMENT_MACHINE_SCORE' });
      dispatch({ type: 'SET_WINNER', winner: 'machine' });
    } else if (playerChoice === 'scissors' && machineChoice === 'paper') {
      dispatch({ type: 'INCREMENT_PLAYER_SCORE' });
      dispatch({ type: 'SET_WINNER', winner: 'player' });
    } else {
      dispatch({ type: 'SET_WINNER', winner: 'draw' });
    }
  }, [dispatch, playerChoice, machineChoice]);

  useEffect(() => {
    if (!playerChoice || !machineChoice) navigate('/', { replace: true });

    getResult();
  }, [getResult, navigate, playerChoice, machineChoice]);

  return (
    <div className="text-center">
      <div>
        Player 1:
        <span>{playerChoice}</span>
      </div>

      <div>
        Machine:
        <span>{machineChoice}</span>
      </div>

      <div>{state.winner && <p>{state.winner}</p>}</div>

      <button
        onClick={() => {
          dispatch({ type: 'TRY_AGAIN' });
          navigate('/');
        }}
      >
        Try again
      </button>
    </div>
  );
}

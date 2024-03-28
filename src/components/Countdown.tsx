import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export function CountDown() {
  return (
    <div className="relative mt-16 flex items-center justify-center">
      <CountdownCircleTimer
        isPlaying
        duration={3}
        colors="#E2E8F0"
        size={50}
        strokeWidth={6}
        isSmoothColorTransition
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}

import ReactDOM from 'react-dom';
import { cn } from '../utils/cn';

type ModalProps = {
  shouldRender: boolean;
  onClose: () => void;
} & JSX.IntrinsicElements['dialog'];

export function Modal({ className, shouldRender, onClose }: ModalProps) {
  if (!shouldRender) return null;

  return (
    <ReactPortal>
      <dialog
        open
        className={cn(
          `
        fixed
        inset-0
        z-20
        h-screen
        w-screen
        place-content-center
        bg-black/60
        `,
          className,
        )}
      >
        <div className="relative mx-auto w-[500px] animate-show-content-up rounded-md bg-slate-100 p-4">
          <h2 className="text-center text-2xl">⚠️ Rules</h2>

          <button
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 p-2 transition-all hover:bg-slate-300"
            onClick={onClose}
          >
            X
          </button>

          <div className="mt-2 flex flex-col items-center justify-center gap-4 rounded-md bg-slate-200 py-4">
            <span className="text-slate-800">
              - Rock wins against Scissors.
            </span>

            <span className="text-slate-800">
              - Scissors wins against Paper.
            </span>

            <span className="text-slate-800">- Paper wins against Rock.</span>

            <span className="text-slate-800">
              - If both players select the same option, it's a draw.
            </span>

            <p className="font-bold text-slate-800">
              **It's not permited to select rock twice in a row.**
            </p>
          </div>
        </div>
      </dialog>
    </ReactPortal>
  );
}

function ReactPortal({ children }: { children: React.ReactNode }) {
  const containerId = 'portal-root';
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(children, container);
}

import { useState } from 'react';
import { Modal } from './Modal';

export function Footer() {
  const [shouldModalRender, setShouldModalRender] = useState(false);

  return (
    <footer className="flex h-24 items-center justify-center bg-slate-200">
      <div className="flex h-full flex-col items-center justify-between">
        <button
          onClick={() => setShouldModalRender(true)}
          className="mt-4 rounded-md bg-slate-300 px-4 py-2 text-slate-800 transition-all hover:bg-slate-400"
        >
          View Rules
        </button>

        <small>
          Developed by{' '}
          <a
            className="transition-all hover:text-slate-600"
            href="https://www.github.com/souzagabriel26"
            target="_blank"
          >
            Gabriel Souza
          </a>
        </small>
      </div>

      <Modal
        shouldRender={shouldModalRender}
        onClose={() => setShouldModalRender(false)}
      />
    </footer>
  );
}

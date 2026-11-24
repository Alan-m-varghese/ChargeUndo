import React from 'react';

export const RollingText: React.FC = () => {
  return (
    <span className="inline-flex flex-col h-[1.3em] rolling-word-mask align-top text-left text-[#8CF06B] relative select-none">
      <span
        className="flex flex-col animate-roll-word will-change-transform"
        aria-label="Anywhere. Anytime."
      >
        <span className="h-[1.3em] flex items-center overflow-hidden">Anywhere.</span>
        <span className="h-[1.3em] flex items-center overflow-hidden">Anytime.</span>
        <span className="h-[1.3em] flex items-center overflow-hidden" aria-hidden="true">Anywhere.</span>
      </span>
    </span>
  );
};

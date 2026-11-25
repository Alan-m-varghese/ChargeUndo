import React, { useState, useEffect } from 'react';

const WORDS = ['Anywhere.', 'Anytime.'];

export const RollingText: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => {
        setPrevIndex(current);
        setIsTransitioning(true);
        return (current + 1) % WORDS.length;
      });

      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setPrevIndex(null);
      }, 550);

      return () => clearTimeout(timer);
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-grid relative overflow-hidden align-baseline text-left text-[#8CF06B] select-none py-[0.1em]">
      {/* Invisible anchor establishing the exact bounding box and true font baseline */}
      <span className="invisible col-start-1 row-start-1 pointer-events-none select-none" aria-hidden="true">
        Anywhere.
      </span>

      {/* Outgoing Word */}
      {isTransitioning && prevIndex !== null && (
        <span
          key={`out-${prevIndex}-${WORDS[prevIndex]}`}
          className="col-start-1 row-start-1 animate-roll-out"
          aria-hidden="true"
        >
          {WORDS[prevIndex]}
        </span>
      )}

      {/* Active Word */}
      <span
        key={`in-${index}-${WORDS[index]}`}
        className={`col-start-1 row-start-1 ${isTransitioning ? 'animate-roll-in' : ''}`}
        aria-label={WORDS[index]}
      >
        {WORDS[index]}
      </span>
    </span>
  );
};

import { useState, useEffect } from 'react';

const phrases = [
  "Smarter Alternatives",
  "Greater Relevance",
  "Accredited Investing",
  "Expert Guidance",
];

const AnimatedText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <div className="min-h-[1.5em] flex items-center justify-center">
      <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
        {displayText}
        <span className="inline-block w-[3px] h-[1em] bg-accent ml-1 animate-pulse" />
      </span>
    </div>
  );
};

export default AnimatedText;

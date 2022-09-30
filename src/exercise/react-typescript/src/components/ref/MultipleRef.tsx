import { useState, useRef, useEffect } from 'react';

const MultipleRef = () => {
  const [timer, setTimer] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return <div>Hook Timer - {timer}</div>;
};

export default MultipleRef;

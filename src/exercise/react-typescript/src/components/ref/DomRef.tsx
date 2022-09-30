import { useEffect, useRef } from 'react';

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type='text' ref={inputRef} />
    </div>
  );
};

export default DomRef;

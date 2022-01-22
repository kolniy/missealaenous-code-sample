import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY,
      });
    };

    console.log('Setting up event');
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      // returning a function from a useEffect is similar to the component unMount functionality, used to specify what to do when a component unmounts
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};

export { useMousePosition as default };

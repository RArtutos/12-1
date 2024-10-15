import React, { useEffect, useState } from 'react';

function App() {
  const [color, setColor] = useState('#00ffff');

  useEffect(() => {
    const interval = setInterval(() => {
      const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0000', '#0000ff'];
      const newColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(newColor);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-radial from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      <div 
        className="text-[15rem] font-bold relative"
        style={{
          color: color,
          textShadow: `
            0 0 5px ${color}88,
            0 0 10px ${color}66,
            0 0 15px ${color}44,
            0 0 20px ${color}22
          `,
          transition: 'color 1s ease, text-shadow 1s ease'
        }}
      >
        <span className="relative z-10">13</span>
        <span 
          className="absolute inset-0 blur-[2px] opacity-50 led-glow"
          style={{ color: color }}
          aria-hidden="true"
        >
          13
        </span>
      </div>
    </div>
  );
}

export default App;
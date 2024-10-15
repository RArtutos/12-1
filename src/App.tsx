import React, { useEffect, useState } from 'react';
import backgroundGif from './recursos/background.gif'; // Asegúrate de que la ruta sea correcta

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
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="relative z-10"> {/* Este contenedor se asegura de que el texto esté en el frente */}
        <div 
          className="text-[15rem] font-bold"
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
          <span>13 Team</span>
          <span 
            className="absolute inset-0 blur-[2px] opacity-50 led-glow"
            style={{ color: color }}
            aria-hidden="true"
          >
            13
          </span>
        </div>
      </div>
      <img 
        src={backgroundGif} 
        alt="Background" 
        className="absolute inset-0 object-cover w-full h-full" 
        style={{ zIndex: -1, marginTop: '20rem' }} // Ajusta el marginTop según sea necesario
      />
    </div>
  );
}

export default App;

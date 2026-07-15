import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import UnlockScreen from './components/UnlockScreen';
import Hero from './components/Hero';
import Details from './components/Details';
import Countdown from './components/Countdown';
import Venue from './components/Venue';
import Gift from './components/Gift';
import MusicPlayer from './components/MusicPlayer';
import { ConfigContext } from './ConfigContext';
import './index.css';

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}config.json`)
      .then(res => res.json())
      .then(data => setConfig(data))
      .catch(err => console.error("Error loading config:", err));
  }, []);

  const handleUnlock = () => {
    setUnlocked(true);
    setIsMusicPlaying(true);
  };

  const togglePlay = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  if (!config) return null; // Or a loading spinner

  return (
    <ConfigContext.Provider value={config}>
      <div className="app-container">
        <div className="bg-ornament" />
        
        <AnimatePresence>
          {!unlocked && <UnlockScreen onUnlock={handleUnlock} />}
        </AnimatePresence>

        {unlocked && (
          <>
            <MusicPlayer isPlaying={isMusicPlaying} togglePlay={togglePlay} />
            <Hero />
            <Details />
            <Countdown />
            <Venue />
            <Gift />
            

          </>
        )}
      </div>
    </ConfigContext.Provider>
  );
}

export default App;

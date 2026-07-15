import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Music, Pause } from 'lucide-react';

export default function MusicPlayer({ isPlaying, togglePlay }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set sound lower
    }
    if (isPlaying) {
      audioRef.current.play().catch(e => console.log("Audio play failed", e));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src={`${import.meta.env.BASE_URL}skripka-music.mp3`} loop />
      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 50,
          background: 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(197, 161, 115, 0.4)',
          cursor: 'pointer'
        }}
      >
        {isPlaying ? <Pause size={24} /> : <Music size={24} />}
      </motion.button>
    </>
  );
}

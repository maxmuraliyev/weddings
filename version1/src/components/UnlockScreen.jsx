import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export default function UnlockScreen({ onUnlock }) {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'var(--bg-color)', zIndex: 100,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '2rem', textAlign: 'center'
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>SIZGA</h1>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>TAKLIFNOMA</h1>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '3rem', letterSpacing: '0.1em' }}>KELDI</h1>
      </motion.div>

      <motion.button
        onClick={onUnlock}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="float-animation"
        style={{
          background: 'var(--primary)',
          border: 'none',
          borderRadius: '50%',
          width: '80px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'white',
          boxShadow: '0 10px 25px rgba(197, 161, 115, 0.4)',
          marginBottom: '2rem'
        }}
      >
        <Lock size={32} />
      </motion.button>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: '1.5' }}
      >
        <p>Qulfchani bosib,</p>
        <p>taklifnomani oching</p>
      </motion.div>
    </motion.div>
  );
}

import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ConfigContext } from '../ConfigContext';

export default function Hero() {
  const config = useContext(ConfigContext);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
      position: 'relative'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div style={{
          width: '280px',
          height: '400px',
          borderRadius: '150px 150px 0 0',
          overflow: 'hidden',
          margin: '0 auto 2rem',
          border: '4px solid var(--primary)',
          padding: '4px',
          boxShadow: '0 20px 40px rgba(197, 161, 115, 0.2)'
        }}>
          <img 
            src={`${import.meta.env.BASE_URL}couples-photo.jpg`}
            alt={`${config.couple.groom} and ${config.couple.bride}`} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '146px 146px 0 0',
            }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
      >
        <p style={{ color: 'var(--text-light)', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
          Aziz va qadrdon insonimiz!
        </p>
        <h2 className="script-text" style={{ fontSize: '4rem', lineHeight: '1.2', marginBottom: '0.5rem' }}>
          {config.couple.groom}
        </h2>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--primary-dark)', margin: '0 1rem' }}>va</span>
        <h2 className="script-text" style={{ fontSize: '4rem', lineHeight: '1.2' }}>
          {config.couple.bride}
        </h2>
      </motion.div>
    </section>
  );
}

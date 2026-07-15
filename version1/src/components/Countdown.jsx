import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { ConfigContext } from '../ConfigContext';

export default function Countdown() {
  const config = useContext(ConfigContext);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(config.weddingDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'Kun', value: timeLeft.days },
    { label: 'Soat', value: timeLeft.hours },
    { label: 'Daqiqa', value: timeLeft.minutes },
    { label: 'Soniya', value: timeLeft.seconds }
  ];

  return (
    <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--primary-dark)' }}>
        Har lahzani sanayapmiz
      </h3>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        {timeBlocks.map((block, index) => (
          <motion.div 
            key={block.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="glass"
            style={{
              padding: '1.5rem 1rem',
              borderRadius: '16px',
              minWidth: '80px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <span style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--primary)' }}>
              {block.value.toString().padStart(2, '0')}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem' }}>
              {block.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { ConfigContext } from '../ConfigContext';

export default function Gift() {
  const config = useContext(ConfigContext);
  const [copied, setCopied] = useState(false);
  const cardNumber = config.gift.cardNumber;

  const handleCopy = () => {
    navigator.clipboard.writeText(config.gift.cardNumberValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section style={{ padding: '2rem 2rem 6rem' }}>
      <motion.div 
        className="glass"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          padding: '3rem 2rem',
          borderRadius: '24px',
          textAlign: 'center'
        }}
      >
        <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
          To'yona
        </h3>
        
        <p style={{ color: 'var(--text-light)', marginBottom: '2rem', lineHeight: '1.6' }}>
          Agar istasangiz, to'yonani kuyov kartasiga yuborishingiz mumkin.
        </p>

        <div style={{
          background: 'linear-gradient(135deg, #d0ac74, #ae8348)',
          borderRadius: '16px',
          padding: '2rem',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '2rem'
        }}>
          {/* Card background styling */}
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
          <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
          
          <div style={{ textAlign: 'left', position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Karta raqami</p>
            <h4 style={{ fontSize: '1.5rem', letterSpacing: '2px', marginBottom: '1.5rem', fontFamily: 'monospace' }}>
              {cardNumber}
            </h4>
            <p style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '0.2rem', textTransform: 'uppercase' }}>Qabul qiluvchi</p>
            <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>{config.gift.recipientName}</p>
          </div>
        </div>

        <button 
          onClick={handleCopy}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2rem',
            borderRadius: '999px',
            border: 'none',
            background: 'var(--primary)',
            color: 'white',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background 0.3s'
          }}
        >
          {copied ? <Check size={20} /> : <Copy size={20} />}
          {copied ? 'Raqam nusxalandi' : 'Raqamni nusxalash'}
        </button>

      </motion.div>
    </section>
  );
}

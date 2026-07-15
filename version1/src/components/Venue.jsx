import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { ConfigContext } from '../ConfigContext';

export default function Venue() {
  const config = useContext(ConfigContext);

  return (
    <section style={{ padding: '2rem 2rem 4rem' }}>
      <motion.div 
        className="glass"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          padding: '3rem 2rem',
          borderRadius: '24px',
          textAlign: 'center'
        }}
      >
        <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary-dark)' }}>
          To'y manzili
        </h3>
        
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            {config.venue.name}
          </h4>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--text-light)' }}>
            <Clock size={18} color="var(--primary)" />
            <span>Vaqti: {config.venue.time}</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-light)' }}>
            <MapPin size={18} color="var(--primary)" />
            <span>Manzil: {config.venue.address}</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a 
            href={config.venue.yandexMapLink}
            target="_blank" rel="noreferrer"
            style={{
              padding: '1rem 2rem',
              borderRadius: '999px',
              backgroundColor: '#fff',
              color: '#FF0000',
              textDecoration: 'none',
              fontWeight: '500',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              border: '1px solid #ffe5e5'
            }}
          >
            Yandex xaritasi
          </a>
          
          <a 
            href={config.venue.googleMapLink}
            target="_blank" rel="noreferrer"
            style={{
              padding: '1rem 2rem',
              borderRadius: '999px',
              backgroundColor: '#fff',
              color: '#4285F4',
              textDecoration: 'none',
              fontWeight: '500',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              border: '1px solid #e5eeff'
            }}
          >
            Google Maps
          </a>
        </div>
      </motion.div>
    </section>
  );
}

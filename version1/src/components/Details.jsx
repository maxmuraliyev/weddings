import React from 'react';
import { motion } from 'framer-motion';

export default function Details() {
  return (
    <section className="glass" style={{
      margin: '2rem',
      padding: '3rem 2rem',
      borderRadius: '24px',
      textAlign: 'center'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div style={{ marginBottom: '2rem', color: 'var(--primary)' }}>
          {/* Decorative element */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        </div>
        
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
          Hayotimizdagi eng baxtli kunlardan biri - nikoh to'yimizni siz bilan birga nishonlashni niyat qildik.
        </p>
        
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
          Sizni ushbu kechamizga samimiy taklif etamiz.
        </p>
        
        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: 'var(--primary-dark)', marginTop: '2rem' }}>
          "Quvonchli kunimizda aziz mehmonimiz bo'lishingizni intizorlik bilan kutamiz."
        </p>
      </motion.div>
    </section>
  );
}

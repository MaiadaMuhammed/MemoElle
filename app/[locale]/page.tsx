'use client';

export default function TestPage() {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: 'column',
      background: '#f0f9ff' 
    }}>
      <h1 style={{ color: '#0369a1', fontSize: '3rem' }}>Success! 🎉</h1>
      <p style={{ color: '#0c4a6e' }}>The routing is working perfectly.</p>
    </div>
  );
}
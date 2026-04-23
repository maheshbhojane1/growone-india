import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ visible: false, msg: '', bg: '#25D366' });

  const showToast = useCallback((msg, bg = '#25D366') => {
    setToast({ visible: true, msg, bg });
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 3400);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div style={{
        position: 'fixed', bottom: 24, right: 24,
        background: toast.bg, color: 'white',
        padding: '14px 22px', borderRadius: 10,
        fontWeight: 600, fontSize: '0.9rem',
        zIndex: 9999, display: 'flex', alignItems: 'center', gap: 8,
        boxShadow: '0 6px 24px rgba(37,211,102,0.35)',
        transform: toast.visible ? 'translateY(0)' : 'translateY(120px)',
        opacity: toast.visible ? 1 : 0,
        transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {toast.msg}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}

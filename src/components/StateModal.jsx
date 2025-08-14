// src/components/StateModal.jsx
import React from "react";

export default function StateModal({ state, onClose }) {
  if (!state) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <h2>{state.name}</h2>
        <p>{state.tagline}</p>
        <p>{state.details}</p>

        {/* Show map only if mapUrl exists */}
        {state.mapUrl && (
          <iframe
            src={state.mapUrl}
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "12px", marginTop: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </div>
  );
}

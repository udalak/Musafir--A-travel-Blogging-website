import React from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const loc = useLocation();
  const focus = loc.state?.focus;

  return (
    <div className="container page">
      <h2>About MUSAFIR</h2>
      <p className="lead">
        MUSAFIR is a minimal, dark-themed travel blogging site celebrating the diverse beauty of India’s Northeast.
        We curate stories, photography, and practical guides for eight states — from Sikkim’s snow peaks to
        Meghalaya’s living root bridges. Our goal is to help you plan soulful, sustainable journeys.
      </p>

      {focus && (
        <div className="card" style={{marginTop: 18, padding: 18}}>
          <strong>Jumped here from:</strong> {focus}
        </div>
      )}

      <div className="card" style={{marginTop: 22, padding: 18}}>
        <h3 style={{marginTop: 0}}>What you’ll find here</h3>
        <ul>
          <li>Destination spotlights with maps, seasons, and must-see places.</li>
          <li>Offbeat experiences, homestays, and culture-forward itineraries.</li>
          <li>Photography showcases and lightweight packing tips for the hills.</li>
        </ul>
      </div>
    </div>
  );
}

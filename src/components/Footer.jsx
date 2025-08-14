import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <small>© {year} MUSAFIR • Explore Northeast India</small>
        <div className="socials">
          <a href="#" aria-label="Twitter" title="Twitter">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.9-2.6 1.1A4 4 0 0 0 12 8.9c0 .3 0 .6.1.9-3.3-.2-6.3-1.8-8.3-4.3-.4.7-.6 1.4-.6 2.2 0 1.5.8 2.8 2 3.6-.6 0-1.2-.2-1.7-.5v.1c0 2.1 1.5 3.9 3.5 4.3-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 1.8 2.3 3.1 4.3 3.1A8.1 8.1 0 0 1 2 19.5a11.4 11.4 0 0 0 6.2 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.5 1.4-1.2 1.9-2z" fill="currentColor"/></svg>
          </a>
          <a href="#" aria-label="Instagram" title="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm6-1.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z" fill="currentColor"/></svg>
          </a>
          <a href="#" aria-label="YouTube" title="YouTube">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 7.6a3 3 0 0 0-2.1-2.1C18.7 5 12 5 12 5s-6.7 0-8.4.5A3 3 0 0 0 1.5 7.6 31 31 0 0 0 1 12a31 31 0 0 0 .5 4.4 3 3 0 0 0 2.1 2.1C5.3 19 12 19 12 19s6.7 0 8.4-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.4 31 31 0 0 0-.5-4.4zM10 15.5v-7l6 3.5-6 3.5z" fill="currentColor"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

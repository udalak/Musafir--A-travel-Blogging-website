import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    // demo only — replace with real endpoint if needed
    setSent(true);
  };

  return (
    <div className="container page">
      <h2>Contact Us</h2>
      <p className="lead">Questions, collaboration ideas, or a travel story to share? Drop us a message.</p>

      {sent ? (
        <div className="card" style={{padding: 18, marginTop: 18}}>
          <strong>Thanks!</strong> We received your message and will get back soon.
        </div>
      ) : (
        <form className="form" onSubmit={onSubmit}>
          <input className="input" name="name" placeholder="Your name" value={form.name} onChange={onChange} required />
          <input className="input" type="email" name="email" placeholder="Email address" value={form.email} onChange={onChange} required />
          <textarea className="textarea" name="message" placeholder="Your message" value={form.message} onChange={onChange} required />
          <div style={{display:'flex', gap: 10}}>
            <button className="btn btn-primary" type="submit">Send Message</button>
            <button className="btn btn-outline" type="reset" onClick={() => setForm({name:"", email:"", message:""})}>Clear</button>
          </div>
        </form>
      )}
    </div>
  );
}

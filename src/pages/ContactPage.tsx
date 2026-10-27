import { useState } from 'react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="panel p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#63F542]">Contact</p>
          <h1 className="mt-3 text-4xl font-black text-white">Let’s talk running</h1>
          <p className="mt-4 text-[#c8d3ce]">
            Reach out for event partnerships, media requests, or support with your MilesNation profile and registrations.
          </p>
          <div className="mt-8 space-y-4 text-sm text-[#dfe7e3]">
            <div>Email: hello@milesnation.fit</div>
            <div>Support: support@milesnation.fit</div>
            <div>Social: @milesnation</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="panel p-8">
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#dfe7e3]">Name</label>
              <input className="input-shell" placeholder="Your name" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[#dfe7e3]">Email</label>
              <input type="email" className="input-shell" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[#dfe7e3]">Subject</label>
              <input className="input-shell" placeholder="How can we help?" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[#dfe7e3]">Message</label>
              <textarea rows={5} className="input-shell" placeholder="Tell us more..." required />
            </div>
            <button type="submit" className="btn-primary w-full">Send message</button>
            {submitted && <p className="text-sm text-[#63F542]">Your message has been queued for review.</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

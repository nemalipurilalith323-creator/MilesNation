import { CalendarDays, Check, MapPin, TimerReset } from 'lucide-react';
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { mockEvents } from '../data/mockData';
import { formatCurrency, formatDate } from '../lib/utils';

const EventDetailsPage = () => {
  const { slug } = useParams();
  const event = useMemo(() => mockEvents.find((item) => item.slug === slug), [slug]);

  if (!event) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-white">Event not found</h1>
        <Link to="/events" className="btn-primary mt-6">Back to events</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[28px] border border-[#22312d] bg-[#101817]">
        <div className="relative h-80 md:h-96">
          <img src={event.coverImage} alt={event.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-[#050807]/30 to-transparent" />
          <div className="absolute left-6 top-6 flex gap-2">
            <span className="rounded-full border border-[#63F542]/40 bg-[#0d1714] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#63F542]">
              {event.type}
            </span>
            <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
              {event.priceType}
            </span>
          </div>
        </div>

        <div className="grid gap-10 p-6 lg:grid-cols-[1.5fr_0.8fr] lg:p-8">
          <div>
            <h1 className="text-4xl font-black text-white md:text-5xl">{event.title}</h1>
            <p className="mt-5 text-lg text-[#c8d3ce]">{event.description}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-[#22312d] bg-[#0b1110] p-4">
                <div className="flex items-center gap-2 text-[#63F542]"><CalendarDays size={18} /> <span className="font-semibold">Date</span></div>
                <p className="mt-2 text-sm text-white">{formatDate(event.eventDate)}</p>
              </div>
              <div className="rounded-2xl border border-[#22312d] bg-[#0b1110] p-4">
                <div className="flex items-center gap-2 text-[#63F542]"><MapPin size={18} /> <span className="font-semibold">Location</span></div>
                <p className="mt-2 text-sm text-white">{event.location}</p>
              </div>
              <div className="rounded-2xl border border-[#22312d] bg-[#0b1110] p-4">
                <div className="flex items-center gap-2 text-[#63F542]"><TimerReset size={18} /> <span className="font-semibold">Distance</span></div>
                <p className="mt-2 text-sm text-white">{event.distances.map((d) => d.label).join(', ')}</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-white">Distance options</h2>
              <div className="mt-5 space-y-3">
                {event.distances.map((distance) => (
                  <div key={distance.label} className="flex items-center justify-between rounded-2xl border border-[#22312d] bg-[#0b1110] p-4">
                    <div>
                      <div className="text-lg font-bold text-white">{distance.label}</div>
                      <div className="text-sm text-[#a7b0ac]">{distance.currency === 'INR' ? 'Indian Rupees' : distance.currency}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-black text-[#63F542]">
                        {distance.price === 0 ? 'Free' : formatCurrency(distance.price, distance.currency)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-[24px] border border-[#22312d] bg-[#0b1110] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#63F542]">Registration</p>
            <div className="mt-5 space-y-3 text-sm text-[#dfe7e3]">
              <div className="flex justify-between"><span>Registration opens</span><strong>{formatDate(event.registrationOpensAt)}</strong></div>
              <div className="flex justify-between"><span>Registration closes</span><strong>{formatDate(event.registrationClosesAt)}</strong></div>
              <div className="flex justify-between"><span>Capacity</span><strong>{event.capacity}</strong></div>
              <div className="flex justify-between"><span>Confirmed</span><strong>{event.registrationCount}</strong></div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#25302b] bg-[#101817] p-4">
              <p className="text-sm text-[#a7b0ac]">Event status</p>
              <p className="mt-2 text-lg font-bold text-white">{event.status}</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-[#63F542]">
                <Check size={16} />
                <span>Eligibility checks are enforced on the trusted backend.</span>
              </div>
            </div>

            <Link to="/signup" className="btn-primary mt-6 w-full">Register for this event</Link>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;

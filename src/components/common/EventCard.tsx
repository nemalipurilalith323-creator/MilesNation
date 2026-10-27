import { CalendarDays, MapPin, TimerReset } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { EventItem } from '../../types';
import { formatCurrency, formatDate } from '../../lib/utils';

interface EventCardProps {
  event: EventItem;
}

const EventCard = ({ event }: EventCardProps) => {
  const cheapestDistance = event.distances[0];

  return (
    <article className="panel overflow-hidden transition duration-200 hover:-translate-y-1 hover:border-[#63F542]/60">
      <div className="relative h-52 overflow-hidden">
        <img src={event.coverImage} alt={event.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full border border-[#63F542]/40 bg-[#0d1714]/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#63F542]">
            {event.type}
          </span>
          <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
            {event.priceType}
          </span>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-white">{event.title}</h3>
            <p className="mt-1 text-sm text-[#a7b0ac]">{event.location}</p>
          </div>
          <span className="rounded-full border border-[#243129] bg-[#0b1110] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#63F542]">
            {event.status}
          </span>
        </div>

        <div className="space-y-2 text-sm text-[#dfe7e3]">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} className="text-[#63F542]" />
            <span>{formatDate(event.eventDate)}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#63F542]" />
            <span>{event.venueAddress || event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <TimerReset size={16} className="text-[#63F542]" />
            <span>{event.distances.map((d) => d.label).join(' • ')}</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#22312d] pt-3">
          <div>
            <div className="text-[11px] uppercase tracking-[0.12em] text-[#7d8c87]">From</div>
            <div className="mt-1 text-lg font-bold text-[#63F542]">
              {cheapestDistance.price === 0 ? 'Free' : formatCurrency(cheapestDistance.price, event.currency)}
            </div>
          </div>
          <Link to={`/events/${event.slug}`} className="btn-primary">
            Register Now
          </Link>
        </div>
      </div>
    </article>
  );
};

export default EventCard;

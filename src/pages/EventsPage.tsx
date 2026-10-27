import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import EventCard from '../components/common/EventCard';
import { mockEvents } from '../data/mockData';

const EventsPage = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredEvents = useMemo(() => {
    return mockEvents.filter((event) => {
      const matchesQuery = event.title.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filter === 'All' || event.type === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#63F542]">Discover</p>
          <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">Upcoming events</h1>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-3.5 text-[#7d8c87]" size={16} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search events"
              placeholder="Search events"
              className="input-shell pl-10 md:w-64"
            />
          </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="input-shell md:w-40">
            <option>All</option>
            <option>Offline</option>
            <option>Virtual</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="panel mt-8 p-12 text-center">
          <h3 className="text-xl font-bold text-white">No events match your filters.</h3>
          <p className="mt-3 text-[#a7b0ac]">Try a different search term or browse all upcoming races.</p>
        </div>
      )}
    </div>
  );
};

export default EventsPage;

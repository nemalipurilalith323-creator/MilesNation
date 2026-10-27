import { ArrowRight, Award, Flag, MapPinned, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EventCard from '../components/common/EventCard';
import { mockEvents, mockLeaderboard } from '../data/mockData';

const stats = [
  { label: 'Total runners', value: '18.4K' },
  { label: 'Upcoming events', value: '42' },
  { label: 'Cities reached', value: '21' },
  { label: 'Total km', value: '4.8M' }
];

const benefits = [
  { icon: Flag, title: 'Register for Events', text: 'Join city races, trail events, and community challenges with simple onboarding.' },
  { icon: Trophy, title: 'Track Your Progress', text: 'Monitor completed distances and stay consistent with your running goals.' },
  { icon: Users, title: 'Compete and Connect', text: 'Challenge friends, join clubs, and celebrate milestones with your community.' },
  { icon: Award, title: 'Earn Rewards', text: 'Unlock medals, badges, and recognition for verified milestones and achievements.' }
];

const HomePage = () => {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050807] via-[#050807]/75 to-[#050807]/35" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[#63F542]/40 bg-[#0d1714]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#63F542]">
              Community-powered running
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
              Every Mile Counts.
            </h1>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">Every Runner Matters.</h2>
            <p className="mt-6 max-w-xl text-lg text-[#c8d3ce]">
              MilesNation is a community for runners. Discover marathons, challenge yourself, track your progress, and become part of a stronger, healthier world.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/events" className="btn-primary">
                Explore Events <ArrowRight className="ml-2" size={16} />
              </Link>
              <Link to="/signup" className="btn-secondary">
                Join MilesNation
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#25302b] bg-[#101817]/85 px-4 py-4 backdrop-blur-sm">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.14em] text-[#9ca8a1]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#63F542]">Featured events</p>
            <h3 className="mt-2 text-3xl font-black text-white md:text-4xl">Run your next milestone</h3>
          </div>
          <Link to="/events" className="hidden text-sm font-semibold text-[#63F542] md:inline-flex">
            View All Events
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mockEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="border-y border-[#22312d] bg-[#0b1110]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#63F542]">Community</p>
              <h3 className="mt-3 text-3xl font-black text-white md:text-5xl">Join the MilesNation Community</h3>
              <p className="mt-4 max-w-xl text-lg text-[#c8d3ce]">
                Whether you run for fitness, for fun, or for a better tomorrow — you belong here.
              </p>
              <button className="btn-primary mt-8">Create account</button>
            </div>
            <div className="rounded-[30px] border border-[#25302b] bg-[#101817] p-6">
              <div className="flex items-center justify-between rounded-2xl border border-[#25302b] bg-[#0b1110] p-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-[#9aa9a3]">Leaderboard</div>
                  <div className="mt-2 text-2xl font-black text-white">Top runners</div>
                </div>
                <MapPinned className="text-[#63F542]" />
              </div>
              <div className="mt-4 space-y-3">
                {mockLeaderboard.map((entry) => (
                  <div key={entry.displayName} className="flex items-center justify-between rounded-xl border border-[#25302b] bg-[#0b1110] p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#63F542] text-sm font-black text-[#09110d]">
                        {entry.rank}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{entry.displayName}</div>
                        <div className="text-xs text-[#9aa9a3]">{entry.badge}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-[#63F542]">{entry.verifiedDistance} km</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#63F542]">Platform benefits</p>
          <h3 className="mt-3 text-3xl font-black text-white md:text-5xl">Built for momentum</h3>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="panel p-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0b1110] text-[#63F542] shadow-[0_0_20px_rgba(99,245,66,0.12)]">
                <Icon size={26} />
              </div>
              <h4 className="text-xl font-bold text-white">{title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-[#a7b0ac]">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

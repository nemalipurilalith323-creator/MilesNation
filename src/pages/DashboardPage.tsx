import { Clock3, Trophy, Users } from 'lucide-react';
import { mockRegistrations, mockUser } from '../data/mockData';

const stats = [
  { label: 'Events joined', value: '04' },
  { label: 'Verified distance', value: '186 km' },
  { label: 'Completed challenges', value: '02' },
  { label: 'Badges', value: '09' }
];

const DashboardPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <img src={mockUser.photoURL} alt={mockUser.displayName} className="h-16 w-16 rounded-full object-cover" />
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#63F542]">Dashboard</p>
            <h1 className="mt-2 text-3xl font-black text-white">Hello, {mockUser.displayName}</h1>
          </div>
        </div>
        <button className="btn-primary">Quick action</button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="panel p-5">
            <div className="text-3xl font-black text-white">{stat.value}</div>
            <div className="mt-2 text-sm text-[#a7b0ac]">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="panel p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Upcoming events</h2>
            <span className="text-xs uppercase tracking-[0.14em] text-[#63F542]">This month</span>
          </div>
          <div className="mt-6 space-y-3">
            {mockRegistrations.map((registration) => (
              <div key={registration.id} className="rounded-2xl border border-[#22312d] bg-[#0b1110] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-bold text-white">{registration.selectedDistance}</div>
                    <div className="text-sm text-[#a7b0ac]">Registration status: {registration.registrationStatus}</div>
                  </div>
                  <div className="text-right text-sm text-[#63F542]">{registration.paymentStatus}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="panel p-6">
            <div className="flex items-center gap-3 text-[#63F542]">
              <Trophy size={20} />
              <h2 className="text-xl font-bold text-white">Achievements</h2>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {['First Run', '5K Complete', 'Half Marathon', 'Marathon Finisher'].map((badge) => (
                <span key={badge} className="rounded-full border border-[#25302b] bg-[#0b1110] px-3 py-2 text-xs font-semibold text-[#dfe7e3]">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="panel p-6">
            <div className="flex items-center gap-3 text-[#63F542]">
              <Clock3 size={20} />
              <h2 className="text-xl font-bold text-white">Recent activity</h2>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-[#dfe7e3]">
              <li>5K completed with verified proof.</li>
              <li>Registration confirmed for Bangalore City Marathon.</li>
              <li>Virtual challenge goal updated.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 panel p-6">
        <div className="flex items-center gap-3 text-[#63F542]">
          <Users size={20} />
          <h2 className="text-xl font-bold text-white">Registration history</h2>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#22312d]">
          <table className="w-full text-left text-sm text-[#dfe7e3]">
            <thead className="bg-[#0b1110] text-[#9ea9a4]">
              <tr>
                <th className="px-4 py-3">Event</th>
                <th className="px-4 py-3">Distance</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockRegistrations.map((registration) => (
                <tr key={registration.id} className="border-t border-[#22312d]">
                  <td className="px-4 py-3">Bangalore City Marathon</td>
                  <td className="px-4 py-3">{registration.selectedDistance}</td>
                  <td className="px-4 py-3">{registration.registrationStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

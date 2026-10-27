import { Activity, BarChart3, ClipboardList, ShieldCheck, Users } from 'lucide-react';

const stats = [
  { label: 'Published events', value: '18' },
  { label: 'Total registrations', value: '2.4K' },
  { label: 'Paid registrations', value: '1.6K' },
  { label: 'Pending submissions', value: '42' }
];

const AdminDashboardPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#63F542]">Admin</p>
          <h1 className="mt-2 text-4xl font-black text-white">Operations dashboard</h1>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[#63F542]/30 bg-[#0d1714] px-4 py-2 text-sm font-semibold text-[#63F542]">
          <ShieldCheck size={16} />
          Access verified
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="panel p-5">
            <div className="text-3xl font-black text-white">{stat.value}</div>
            <div className="mt-2 text-sm text-[#a7b0ac]">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: BarChart3, label: 'Dashboard' },
          { icon: ClipboardList, label: 'Events' },
          { icon: Users, label: 'Registrations' },
          { icon: Activity, label: 'Leaderboard' }
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="panel flex items-center gap-4 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b1110] text-[#63F542]">
              <Icon size={20} />
            </div>
            <div className="font-bold text-white">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboardPage;

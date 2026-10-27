import { ArrowUpRight, CheckCircle2, ImageIcon } from 'lucide-react';
import { mockChallenges, mockSubmissions } from '../data/mockData';

const VirtualRunsPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#63F542]">Virtual runs</p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">Challenge yourself anywhere</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {mockChallenges.map((challenge) => (
          <div key={challenge.id} className="panel overflow-hidden">
            <div className="h-52 overflow-hidden">
              <img src={challenge.coverImage} alt={challenge.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-black text-white">{challenge.title}</h2>
                  <p className="mt-2 text-sm text-[#a7b0ac]">{challenge.description}</p>
                </div>
                <div className="rounded-full border border-[#63F542]/30 bg-[#0d1714] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#63F542]">
                  {challenge.status}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#22312d] bg-[#0b1110] p-4">
                <div className="flex items-center justify-between text-sm text-[#dfe7e3]">
                  <span>Goal</span>
                  <span className="font-black text-[#63F542]">{challenge.goalKm} km</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-[#1a2523]">
                  <div className="h-2 w-1/3 rounded-full bg-[#63F542]" />
                </div>
                <div className="mt-2 text-right text-xs uppercase tracking-[0.14em] text-[#9ea9a4]">33% complete</div>
              </div>

              <button className="btn-primary mt-6 w-full">
                Join challenge <ArrowUpRight className="ml-2" size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-black text-white">Recent submissions</h2>
        <div className="mt-6 space-y-4">
          {mockSubmissions.map((submission) => (
            <div key={submission.id} className="panel flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#25302b] bg-[#0b1110] text-[#63F542]">
                  <ImageIcon size={18} />
                </div>
                <div>
                  <div className="font-bold text-white">{submission.distanceKm} km run</div>
                  <div className="text-sm text-[#a7b0ac]">Activity date: {new Date(submission.activityDate).toLocaleDateString()}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[#25302b] bg-[#0b1110] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#c8d3ce]">
                  {submission.status}
                </span>
                <CheckCircle2 className="text-[#63F542]" size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualRunsPage;

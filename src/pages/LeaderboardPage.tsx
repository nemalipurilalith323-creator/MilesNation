import { mockLeaderboard } from '../data/mockData';

const LeaderboardPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#63F542]">Leaderboard</p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">Verified results</h1>
      </div>

      <div className="panel overflow-hidden">
        <div className="grid grid-cols-[0.6fr_1.8fr_1fr_1fr] gap-4 border-b border-[#22312d] bg-[#0b1110] px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#9ea9a4]">
          <span>Rank</span>
          <span>Runner</span>
          <span>Distance</span>
          <span>Badge</span>
        </div>

        {mockLeaderboard.map((entry) => (
          <div key={entry.displayName} className="grid grid-cols-[0.6fr_1.8fr_1fr_1fr] items-center gap-4 border-b border-[#22312d] px-5 py-4 last:border-b-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#63F542] font-black text-[#09110d]">
              #{entry.rank}
            </div>
            <div>
              <div className="font-bold text-white">{entry.displayName}</div>
            </div>
            <div className="font-black text-[#63F542]">{entry.verifiedDistance} km</div>
            <div className="text-sm text-[#c8d3ce]">{entry.badge}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardPage;

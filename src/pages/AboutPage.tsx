const AboutPage = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[28px] border border-[#22312d] bg-[#101817]">
        <img
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80"
          alt="Trail runner"
          className="h-72 w-full object-cover"
        />
        <div className="p-8 md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#63F542]">About MilesNation</p>
          <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">A better way to run together.</h1>
          <p className="mt-6 text-lg text-[#c8d3ce]">
            MilesNation brings together runners from every stage of the journey — from first-time racers to marathon veterans, from weekend trail lovers to professional athletes. We believe in creating events and tools that make progress visible, community meaningful, and every finish line feel supported.
          </p>
          <p className="mt-4 text-lg text-[#c8d3ce]">
            Whether you are joining an in-person race or competing in a virtual challenge, our platform is designed to help you build momentum, verify your progress, and celebrate milestones with a healthier community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Events', to: '/events' },
  { label: 'Virtual Runs', to: '/virtual-runs' },
  { label: 'Leaderboard', to: '/leaderboard' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
];

const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050807] text-white">
      <header className="sticky top-0 z-40 border-b border-[#22312d] bg-[#050807]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#63F542] bg-[#0d1714] text-[#63F542] shadow-[0_0_20px_rgba(99,245,66,0.25)]">
              <span className="text-lg font-black">M</span>
            </div>
            <div>
              <div className="text-lg font-black tracking-[0.18em] text-white">MILESNATION</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? 'text-[#63F542]' : 'text-[#d7e0dd] hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-full border border-[#22312d] bg-[#0b1110] px-4 py-2 text-sm font-medium text-white transition hover:border-[#63F542]">
              Search
            </button>
            <Link to="/login" className="rounded-full border border-[#22312d] px-4 py-2 text-sm font-medium text-white hover:border-[#63F542]">
              Login
            </Link>
            <Link to="/signup" className="rounded-full bg-[#63F542] px-4 py-2 text-sm font-bold text-[#09110d] transition hover:bg-[#8ef76d]">
              Sign Up
            </Link>
          </div>

          <button
            className="rounded-md border border-[#22312d] p-2 md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-[#22312d] bg-[#050807] md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-[#0d1714] text-[#63F542]' : 'text-white'}`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-2 flex gap-3">
                <Link to="/login" className="flex-1 rounded-full border border-[#22312d] px-4 py-2 text-center text-sm font-medium">
                  Login
                </Link>
                <Link to="/signup" className="flex-1 rounded-full bg-[#63F542] px-4 py-2 text-center text-sm font-bold text-[#09110d]">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-[#22312d] bg-[#0b1110]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#63F542] bg-[#0d1714] text-[#63F542]">
                <span className="text-lg font-black">M</span>
              </div>
              <div className="text-lg font-black tracking-[0.18em] text-white">MILESNATION</div>
            </div>
            <p className="max-w-md text-sm text-[#a7b0ac]">
              Every mile counts. Every runner matters. Discover life-changing races, verified challenges, and a stronger community of athletes.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[#63F542]">Navigation</h3>
            <ul className="space-y-2 text-sm text-[#a7b0ac]">
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/virtual-runs">Virtual Runs</Link></li>
              <li><Link to="/leaderboard">Leaderboard</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[#63F542]">Policies</h3>
            <ul className="space-y-2 text-sm text-[#a7b0ac]">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[#63F542]">Contact</h3>
            <ul className="space-y-2 text-sm text-[#a7b0ac]">
              <li>Email: hello@milesnation.fit</li>
              <li>Instagram: @milesnation</li>
              <li>Twitter: @milesnation</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;

import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="mx-auto max-w-md px-4 py-20 sm:px-6 lg:px-8">
      <div className="panel p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#63F542]">Welcome back</p>
        <h1 className="mt-2 text-3xl font-black text-white">Login to MilesNation</h1>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#dfe7e3]">Email</label>
            <input type="email" className="input-shell" placeholder="runner@email.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[#dfe7e3]">Password</label>
            <input type="password" className="input-shell" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn-primary w-full">Login</button>
        </form>

        <div className="mt-6 text-sm text-[#a7b0ac]">
          Need an account?{' '}
          <Link to="/signup" className="font-semibold text-[#63F542]">Create one</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

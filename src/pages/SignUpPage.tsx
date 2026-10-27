import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="panel p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#63F542]">Join the community</p>
        <h1 className="mt-2 text-3xl font-black text-white">Create your account</h1>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#dfe7e3]">Full name</label>
            <input className="input-shell" placeholder="Your full name" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[#dfe7e3]">Email</label>
            <input type="email" className="input-shell" placeholder="runner@email.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[#dfe7e3]">Password</label>
            <input type="password" className="input-shell" placeholder="Create a password" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[#dfe7e3]">Confirm password</label>
            <input type="password" className="input-shell" placeholder="Re-enter your password" />
          </div>
          <label className="flex items-start gap-3 rounded-xl border border-[#25302b] bg-[#0b1110] p-3 text-sm text-[#dfe7e3]">
            <input type="checkbox" className="mt-1 h-4 w-4 accent-[#63F542]" />
            <span>I accept the terms and privacy policy.</span>
          </label>
          <button type="submit" className="btn-primary w-full">Create account</button>
        </form>

        <div className="mt-6 text-sm text-[#a7b0ac]">
          Already registered?{' '}
          <Link to="/login" className="font-semibold text-[#63F542]">Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

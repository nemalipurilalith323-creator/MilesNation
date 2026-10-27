import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
      <h1 className="text-5xl font-black text-white">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-white">Page not found</h2>
      <p className="mt-3 text-[#a7b0ac]">The route you requested doesn’t exist in MilesNation.</p>
      <Link to="/" className="btn-primary mt-8">Back home</Link>
    </div>
  );
};

export default NotFoundPage;

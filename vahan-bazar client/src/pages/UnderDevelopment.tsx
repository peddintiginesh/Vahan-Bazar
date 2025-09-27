// src/pages/UnderDevelopment.tsx
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const UnderDevelopment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-lg text-center animate-fadeIn">
        <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-6 animate-pulse" />
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          404 - Under Development
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Oops! The page you are looking for is not ready yet. We are working hard to bring it to life soon! 🚀
        </p>
        <p className="text-gray-500 mb-6 italic">
          Stay tuned for updates and explore other features meanwhile.
        </p>
        <Link to="/" className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default UnderDevelopment;

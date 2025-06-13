export default function Navbar() {
    return (
      <nav className="bg-gray px-4 py-2 rounded-xl shadow-lg shadow-yellow/30 mt-5 w-full max-w-2xl md:max-w-6xl ">
        <div className="flex items-center justify-between space-x-5">
  
          {/* Logo */}
          <div className="text-yellow font-bold text-xl cursor-pointer hover:scale-105 transition">
            Kappa
          </div>
  
          {/* Nav Links */}
          <div className="hidden md:flex gap-6 text-white text-sm font-medium">
            <a href="/" className="hover:text-yellow transition">Why Kappa ?</a>
            <a href="/" className="hover:text-yellow transition">Features</a>
            <a href="/" className="hover:text-yellow transition">FAQ</a>
          </div>
  
          {/* Call to Action */}
          <a
            href="/signup"
            className="bg-yellow text-black px-4 py-1.5 rounded-lg font-semibold text-sm transition hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500"
          >
            Get Started
          </a>
        </div>
      </nav>
    );
  }
  
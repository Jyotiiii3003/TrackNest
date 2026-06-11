function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-5">
        <div className="bg-white/70 backdrop-blur-xl border border-black/5 rounded-full px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div>
            <h1
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "Outfit" }}
            >
             TrackNest
            </h1>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#">Features</a>
            <a href="#">Dashboard</a>
            <a href="#">Roadmap</a>
            <a href="#">About</a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">

            <button className="text-sm">
              Sign In
            </button>

            <button className="px-4 py-2 rounded-full bg-black text-white text-sm">
              Get Started
            </button>

          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;
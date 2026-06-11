function Home() {
  return (
    <div className="min-h-screen bg-[#FFFDF8] overflow-hidden relative">
      
      {/* Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#FFD6E0] rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#B8C0FF] rounded-full blur-3xl opacity-40"></div>

      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#CDEAC0] rounded-full blur-3xl opacity-40"></div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>

            <h1
              className="text-5xl md:text-7xl font-bold"
              style={{ fontFamily: "Poppins" }}
            >
              Track your
              <br />
              opportunities
            </h1>

            <p
              className="mt-4 text-5xl text-[#B56576]"
              style={{ fontFamily: "Dancing Script" }}
            >
              beautifully 
            </p>

            <p className="mt-8 text-lg text-gray-600 max-w-xl">
              Never miss an internship, hackathon,
              scholarship, placement drive or open-source
              opportunity again.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="px-6 py-3 rounded-xl bg-black text-white">
                Get Started
              </button>

              <button className="px-6 py-3 rounded-xl border">
                View Demo
              </button>
            </div>
          </div>

          {/* Right */}
          <div>

            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-xl border">

              <div className="flex justify-between mb-6">
                <h3 className="font-bold">
                  Dashboard Overview
                </h3>

                <span className="text-green-600">
                  Active
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-[#FFD6E0] p-4 rounded-xl">
                  <p>Total Applications</p>
                  <h2 className="text-3xl font-bold">48</h2>
                </div>

                <div className="bg-[#B8C0FF] p-4 rounded-xl">
                  <p>Interviews</p>
                  <h2 className="text-3xl font-bold">6</h2>
                </div>

                <div className="bg-[#CDEAC0] p-4 rounded-xl">
                  <p>Offers</p>
                  <h2 className="text-3xl font-bold">2</h2>
                </div>

                <div className="bg-[#FFF4C2] p-4 rounded-xl">
                  <p>Deadlines</p>
                  <h2 className="text-3xl font-bold">5</h2>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
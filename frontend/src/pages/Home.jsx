import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6">

        <section className="min-h-[85vh] flex items-center">

          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

            {/* Left Content */}
            <div>

              <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-8">
                Student Opportunity CRM
              </p>

              <h1
                className="text-6xl md:text-8xl leading-none font-semibold"
                style={{ fontFamily: "Outfit" }}
              >
                Never lose
                <br />
                an opportunity
              </h1>

              <h2
                className="text-6xl md:text-8xl italic mt-2"
                style={{ fontFamily: "Cormorant Garamond" }}
              >
                again.
              </h2>

              <p className="mt-8 max-w-lg text-gray-600 text-lg">
                Track internships, hackathons, scholarships,
                open-source programs and placement drives
                from a single dashboard.
              </p>

              <div className="flex gap-4 mt-10">

                <button className="px-6 py-3 rounded-full bg-black text-white">
                  Start Tracking
                </button>

                <button className="px-6 py-3 rounded-full border">
                  View Demo
                </button>

              </div>

            </div>

            {/* Right Side */}
            <div className="relative">

              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#C7B8EA] blur-3xl opacity-30"></div>

              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-semibold">
                    Dashboard
                  </h3>

                  <span className="text-green-600 text-sm">
                    Active
                  </span>
                </div>

                <div className="space-y-4">

                  <div className="border rounded-2xl p-4">
                    <p className="text-sm text-gray-500">
                      Applications
                    </p>

                    <h2 className="text-4xl font-bold">
                      84
                    </h2>
                  </div>

                  <div className="border rounded-2xl p-4">
                    <p className="font-medium">
                      Upcoming Deadlines
                    </p>

                    <div className="mt-3 space-y-2">

                      <div className="flex justify-between">
                        <span>Google SWE</span>
                        <span>Tomorrow</span>
                      </div>

                      <div className="flex justify-between">
                        <span>GSSoC</span>
                        <span>3 Days</span>
                      </div>

                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">

                    <div className="rounded-2xl p-4 bg-[#EAD7D1]">
                      <p>Interviews</p>
                      <h3 className="text-2xl font-bold">
                        10
                      </h3>
                    </div>

                    <div className="rounded-2xl p-4 bg-[#C7B8EA]">
                      <p>Offers</p>
                      <h3 className="text-2xl font-bold">
                        2
                      </h3>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Home;
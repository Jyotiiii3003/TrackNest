import Reveal from "./Reveal";

function ProductShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        <Reveal>
          <div>

            <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
              Product
            </p>

            <h2
              className="heading text-6xl md:text-7xl mt-6 leading-none"
            >
              Everything.
            </h2>

            <h2
              className="accent text-6xl md:text-7xl"
            >
              organized.
            </h2>

            <p className="mt-8 text-gray-600 max-w-md text-lg">
              Manage internships, hackathons,
              scholarships and placement drives
              from a single workspace.
            </p>

          </div>
        </Reveal>

        <Reveal>
          <div className="bg-white rounded-[32px] border border-gray-200 p-6 shadow-sm">

            <div className="mb-6">
              <h3 className="font-semibold">
                Opportunity Pipeline
              </h3>
            </div>

            <div className="grid grid-cols-4 gap-4">

              <div>
                <h4 className="font-medium mb-3">
                  Wishlist
                </h4>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-gray-100">
                    Google SWE
                  </div>

                  <div className="p-3 rounded-xl bg-gray-100">
                    Uber
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">
                  Applied
                </h4>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-[#EAD7D1]">
                    Deepvue
                  </div>

                  <div className="p-3 rounded-xl bg-[#EAD7D1]">
                    GSSoC
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">
                  Interview
                </h4>

                <div className="p-3 rounded-xl bg-[#C7B8EA]">
                  Infosys
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">
                  Offer
                </h4>

                <div className="p-3 rounded-xl bg-green-100">
                  Microsoft
                </div>
              </div>

            </div>

          </div>
        </Reveal>

      </div>

    </section>
  );
}

export default ProductShowcase;
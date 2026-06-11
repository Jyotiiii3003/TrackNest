import AppLayout from "../layouts/AppLayout";

import KanbanColumn from "../components/opportunities/KanbanColumn";

import { opportunities } from "../data/mockOpportunities";

function Opportunities() {

  const wishlist =
    opportunities.filter(
      (item) => item.stage === "wishlist"
    );

  const applied =
    opportunities.filter(
      (item) => item.stage === "applied"
    );

  const interview =
    opportunities.filter(
      (item) => item.stage === "interview"
    );

  const offer =
    opportunities.filter(
      (item) => item.stage === "offer"
    );

  return (
    <AppLayout>

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1
            className="text-5xl font-bold"
            style={{
              fontFamily: "Outfit",
            }}
          >
            Opportunities
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all applications.
          </p>

        </div>

        <button
          className="
          px-5
          py-3
          rounded-full
          bg-black
          text-white
          "
        >
          + Add Opportunity
        </button>

      </div>

      <div className="grid lg:grid-cols-4 gap-6">

        <KanbanColumn
          title="Wishlist"
          opportunities={wishlist}
        />

        <KanbanColumn
          title="Applied"
          opportunities={applied}
        />

        <KanbanColumn
          title="Interview"
          opportunities={interview}
        />

        <KanbanColumn
          title="Offer"
          opportunities={offer}
        />

      </div>

    </AppLayout>
  );
}

export default Opportunities;
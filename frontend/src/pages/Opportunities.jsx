import { useState } from "react";
import AppLayout from "../layouts/AppLayout";
import KanbanColumn from "../components/opportunities/KanbanColumn";
import { opportunities } from "../data/mockOpportunities";
import AddOpportunityModal from "../components/opportunities/AddOpportunityModal";

function Opportunities() {
  const [opportunitiesList, setOpportunitiesList] =
    useState(opportunities);

  const wishlist = opportunitiesList.filter(
    (item) => item.status === "Wishlist"
  );

  const applied = opportunitiesList.filter(
    (item) => item.status === "Applied"
  );

  const interview = opportunitiesList.filter(
    (item) => item.status === "Interview"
  );

  const offer = opportunitiesList.filter(
    (item) => item.status === "Offer"
  );


    const [isModalOpen, setIsModalOpen] =
  useState(false);

  const handleAddOpportunity = (newOpportunity) => {
  setOpportunitiesList([
    ...opportunitiesList,
    newOpportunity,
  ]);
};
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
            onClick={() => setIsModalOpen(true)}
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

        <AddOpportunityModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAdd={handleAddOpportunity}
        />

    </AppLayout>
  );
}

export default Opportunities;
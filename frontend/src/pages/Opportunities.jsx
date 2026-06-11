import { useState,useEffect } from "react";
import AppLayout from "../layouts/AppLayout";
import KanbanColumn from "../components/opportunities/KanbanColumn";
import { opportunities } from "../data/mockOpportunities";
import AddOpportunityModal from "../components/opportunities/AddOpportunityModal";

function Opportunities() {
  const [opportunitiesList, setOpportunitiesList] =
    useState(()=>{
        const saved= localStorage.getItem("opportunities");
        return saved ? JSON.parse(saved) : opportunities;
    });
    
     const [isModalOpen, setIsModalOpen] =
    useState(false);

    const [searchTerm, setSearchTerm] =
     useState("");

    useEffect(() => {
        localStorage.setItem("opportunities", JSON.stringify(opportunitiesList));
    }, [opportunitiesList]);

  const filteredOpportunities =
  opportunitiesList.filter((item) =>
    `${item.title} ${item.organization} ${item.category}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

    const wishlist = filteredOpportunities.filter(
    (item) => item.status === "Wishlist"
  );

  const applied = filteredOpportunities.filter(
    (item) => item.status === "Applied"
  );

  const interview = filteredOpportunities.filter(
    (item) => item.status === "Interview"
  );

  const offer = filteredOpportunities.filter(
    (item) => item.status === "Offer"
  );
    
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
            className="text-7xl italic leading-none"
            style={{
            fontFamily: "Cormorant Garamond",
            }}
        >
            Opportunities
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
             Manage internships, hackathons and career opportunities.
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

    {/* Search */}
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search opportunities..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
        w-full
        md:w-[420px]
        bg-white
        rounded-full
        px-6
        py-4
        shadow-sm
        border
        border-black/5
        outline-none
        "
      />
    </div>

    {/* Kanban Board */}
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

    {/* Modal */}
    <AddOpportunityModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onAdd={handleAddOpportunity}
    />
  </AppLayout>
);
}
export default Opportunities;
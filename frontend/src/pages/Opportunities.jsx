import { useState,useEffect } from "react";
import AppLayout from "../layouts/AppLayout";
import KanbanColumn from "../components/opportunities/KanbanColumn";
import { opportunities } from "../data/mockOpportunities";
import AddOpportunityModal from "../components/opportunities/AddOpportunityModal";
import OpportunityDetailModal from "../components/opportunities/OpportunityDetailModal";
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


  const [selectedCategory, setSelectedCategory] =
  useState("");

  const [selectedStatus, setSelectedStatus] =
  useState("");

  const [sortOrder, setSortOrder] =
  useState(""); 
  const filteredOpportunities =
  opportunitiesList
    .filter((item) =>
      `${item.title} ${item.organization} ${item.category} ${item.notes || ""}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .filter((item) =>
      selectedCategory
        ? item.category === selectedCategory
        : true
    )
    .filter((item) =>
      selectedStatus
        ? item.status === selectedStatus
        : true
    )
    .sort((a, b) => {
      if (sortOrder === "nearest") {
        return (
          new Date(a.deadline) -
          new Date(b.deadline)
        );
      }

      if (sortOrder === "latest") {
        return (
          new Date(b.deadline) -
          new Date(a.deadline)
        );
      }

      return 0;
    });

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

  const handleDeleteOpportunity = (id) => {
  setOpportunitiesList(
    opportunitiesList.filter(
      (item) => item.id !== id
    )
  );
  };

  const handleMoveOpportunity = (id) => {
  const statusFlow = [
    "Wishlist",
    "Applied",
    "Interview",
    "Offer",
    "Completed",
  ];

  const updated =
    opportunitiesList.map((item) => {
      if (item.id === id) {
        const currentIndex =
          statusFlow.indexOf(item.status);

        if (
          currentIndex <
          statusFlow.length - 1
        ) {
         return {
          ...item,
          status:
          statusFlow[currentIndex + 1],
          history: [
          ...(item.history || []),
          {
          action: `Moved to ${
          statusFlow[currentIndex + 1]
          }`,
          date: new Date().toLocaleString(),
           },
          ],
          };
        }
      }

      return item;
    });

  setOpportunitiesList(updated);
  };

  const [editingOpportunity, setEditingOpportunity] =
  useState(null);

  const handleEditOpportunity = (updatedOpportunity) => {
  const updated =
    opportunitiesList.map((item) =>
      item.id === updatedOpportunity.id
    ? {
      ...updatedOpportunity,
      history: [
        ...(item.history || []),
        {
          action: "Edited",
          date: new Date().toLocaleString(),
        },
      ],
    }
    : item
    );

  setOpportunitiesList(updated);
  setEditingOpportunity(null);
  };

  const openEditModal = (opportunity) => {
    setEditingOpportunity(opportunity);
    setIsModalOpen(true);
    };

  const completed =
  filteredOpportunities.filter(
    (item) => item.status === "Completed"
  );

  const rejected =
  filteredOpportunities.filter(
    (item) => item.status === "Rejected"
  );    

  const [selectedOpportunity, setSelectedOpportunity] =
  useState(null);

  const openDetails = (opportunity) => {
  setSelectedOpportunity(opportunity);
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


    <div className="flex gap-4 mb-6 flex-wrap">
  <select
    value={selectedCategory}
    onChange={(e) =>
      setSelectedCategory(e.target.value)
    }
    className="rounded-xl px-4 py-2 border"
  >
    <option value="">
      All Categories
    </option>
    <option>Internship</option>
    <option>Hackathon</option>
    <option>Scholarship</option>
    <option>Open Source</option>
    <option>Competition</option>
    <option>Event</option>
  </select>

  <select
    value={selectedStatus}
    onChange={(e) =>
      setSelectedStatus(e.target.value)
    }
    className="rounded-xl px-4 py-2 border"
  >
    <option value="">
      All Status
    </option>
    <option>Wishlist</option>
    <option>Applied</option>
    <option>Interview</option>
    <option>Offer</option>
    <option>Completed</option>
    <option>Rejected</option>
  </select>

  <select
    value={sortOrder}
    onChange={(e) =>
      setSortOrder(e.target.value)
    }
    className="rounded-xl px-4 py-2 border"
  >
    <option value="">
      Sort by Deadline
    </option>
    <option value="nearest">
      Nearest First
    </option>
    <option value="latest">
      Latest First
    </option>
  </select>
</div>


    {/* Kanban Board */}
    <div className="grid lg:grid-cols-4 gap-6">
      <KanbanColumn
        title="Wishlist"
        opportunities={wishlist}
        onDelete={handleDeleteOpportunity}
        onMove={handleMoveOpportunity}
        onEdit={openEditModal}
        onView={openDetails}
      />

      <KanbanColumn
        title="Applied"
        opportunities={applied}
        onDelete={handleDeleteOpportunity}
        onMove={handleMoveOpportunity}
        onEdit={openEditModal}
        onView={openDetails}
      />

      <KanbanColumn
        title="Interview"
        opportunities={interview}
        onDelete={handleDeleteOpportunity}
        onMove={handleMoveOpportunity}
        onEdit={openEditModal}
        onView={openDetails}
      />

      <KanbanColumn
        title="Offer"
        opportunities={offer}
        onDelete={handleDeleteOpportunity}
        onMove={handleMoveOpportunity}
        onEdit={openEditModal}
        onView={openDetails}
      />

      <KanbanColumn
        title="Completed"
        opportunities={completed}
        onDelete={handleDeleteOpportunity}
        onMove={handleMoveOpportunity}
        onEdit={openEditModal}
        onView={openDetails}
      />

      <KanbanColumn
        title="Rejected"
        opportunities={rejected}
        onDelete={handleDeleteOpportunity}
        onMove={handleMoveOpportunity}
        onEdit={openEditModal}
        onView={openDetails}
      />
    </div>

    {/* Modal */}
    <AddOpportunityModal
      isOpen={isModalOpen}
      onClose={() => {setIsModalOpen(false)
        setEditingOpportunity(null);
      }}
      existingData={editingOpportunity}
      onAdd={editingOpportunity
        ?handleEditOpportunity
        : handleAddOpportunity}
    />

    <OpportunityDetailModal
    isOpen={!!selectedOpportunity}
    opportunity={selectedOpportunity}
    onClose={() =>
    setSelectedOpportunity(null)
    }
    />
  </AppLayout>
);
}
export default Opportunities;
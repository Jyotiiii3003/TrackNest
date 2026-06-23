import { useState,useEffect } from "react";
import AppLayout from "../layouts/AppLayout";
import KanbanColumn from "../components/opportunities/KanbanColumn";
import {
  getOpportunities,
  createOpportunity,
  updateOpportunity,
  deleteOpportunity,
} from "../services/opportunityService";
import AddOpportunityModal from "../components/opportunities/AddOpportunityModal";
import OpportunityDetailModal from "../components/opportunities/OpportunityDetailModal";
function Opportunities() {
  const [deletingId, setDeletingId] =
  useState(null);
  const [opportunitiesList, setOpportunitiesList] =
  useState([]);
    
  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [searchTerm, setSearchTerm] =
     useState("");

     const fetchOpportunities =
  async () => {
    try {
      const { data } =
        await getOpportunities();

      setOpportunitiesList(
        data
      );
    } catch (error) {
      console.log(error);
    }
  };
    useEffect(() => {
      fetchOpportunities();
    }, []);


  const [selectedCategory, setSelectedCategory] =
  useState("");

  const [selectedStatus, setSelectedStatus] =
  useState("");

  const [sortOrder, setSortOrder] =
  useState(""); 
  const filteredOpportunities =
  opportunitiesList
    .filter((item) =>
      `${item.title} ${item.organization} ${item.category} ${item.notes || ""} ${item.importantLinks || ""} ${item.referralContact || ""} ${item.strategyNotes || ""} ${item.prepNotes || ""}`
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
    
  const handleAddOpportunity =
  async (
    newOpportunity
  ) => {
    try {
      const { data } =
        await createOpportunity(
          newOpportunity
        );

      setOpportunitiesList([
        ...opportunitiesList,
        data,
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteOpportunity =
  async (id) => {
    try {
      setDeletingId(id);
      await deleteOpportunity(id);

      setOpportunitiesList(
        opportunitiesList.filter(
          (item) =>
            item._id !== id
        )
      );
      setDeletingId(null);
    } catch (error) {
      setDeletingId(null);
      console.log(error);
    }
  };
  const handleMoveOpportunity = async (id) => {
  const statusFlow = [
    "Wishlist",
    "Applied",
    "Interview",
    "Offer",
    "Completed",
  ];

  const currentOpportunity =
    opportunitiesList.find(
      (item) => item._id === id
    );

  if (!currentOpportunity) return;

  const currentIndex =
    statusFlow.indexOf(
      currentOpportunity.status
    );

  if (
    currentIndex <
    statusFlow.length - 1
  ) {
    const updatedData = {
      ...currentOpportunity,
      status:
        statusFlow[currentIndex + 1],
      history: [
        ...(currentOpportunity.history || []),
        {
          action: `Moved to ${
            statusFlow[currentIndex + 1]
          }`,
          date: new Date().toLocaleString(),
        },
      ],
    };

    try {
      const { data } =
        await updateOpportunity(
          id,
          updatedData
        );

      const updated =
        opportunitiesList.map((item) =>
          item._id === data._id
            ? data
            : item
        );

      setOpportunitiesList(updated);
    } catch (error) {
      console.log(error);
    }
  }
};

  const [editingOpportunity, setEditingOpportunity] =
  useState(null);

  const handleEditOpportunity = async (
  updatedOpportunity
) => {
  try {
    const updatedData = {
      ...updatedOpportunity,
      history: [
        ...(updatedOpportunity.history || []),
        {
          action: "Edited",
          date: new Date().toLocaleString(),
        },
      ],
    };

    const { data } =
      await updateOpportunity(
        updatedOpportunity._id,
        updatedData
      );

    const updated =
      opportunitiesList.map((item) =>
        item._id === data._id
          ? data
          : item
      );

    setOpportunitiesList(updated);
    setEditingOpportunity(null);
  } catch (error) {
    console.log(error);
  }
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
        deletingId={deletingId}
      />

      <KanbanColumn
        title="Applied"
        opportunities={applied}
        onDelete={handleDeleteOpportunity}
        onMove={handleMoveOpportunity}
        onEdit={openEditModal}
        onView={openDetails}
        deletingId={deletingId}
      />

      <KanbanColumn
        title="Interview"
        opportunities={interview}
        onDelete={handleDeleteOpportunity}
        onMove={handleMoveOpportunity}
        onEdit={openEditModal}
        onView={openDetails}
        deletingId={deletingId}
      />

      <KanbanColumn
        title="Offer"
        opportunities={offer}
        onDelete={handleDeleteOpportunity}
        onMove={handleMoveOpportunity}
        onEdit={openEditModal}
        onView={openDetails}
        deletingId={deletingId}
      />

      <KanbanColumn
        title="Completed"
        opportunities={completed}
        onDelete={handleDeleteOpportunity}
        onMove={handleMoveOpportunity}
        onEdit={openEditModal}
        onView={openDetails}
        deletingId={deletingId}
      />

      <KanbanColumn
        title="Rejected"
        opportunities={rejected}
        onDelete={handleDeleteOpportunity}
        onMove={handleMoveOpportunity}
        onEdit={openEditModal}
        onView={openDetails}
        deletingId={deletingId}
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
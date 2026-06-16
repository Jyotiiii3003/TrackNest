import OpportunityCard from "./OpportunityCard";

function KanbanColumn({
  title,
  opportunities,
  onDelete,
  onMove,
  onEdit,
  onView,
}) {
  return (
    <div
      className="
      bg-gray-50
      rounded-3xl
      p-4
      min-h-[500px]
      "
    >
      <h3 className="font-semibold mb-4">
        {title} ({opportunities.length})
      </h3>

      {opportunities.length > 0 ? (
         opportunities.map((opportunity) => (
        <OpportunityCard
      key={opportunity.id}
      opportunity={opportunity}
      onDelete={onDelete}
      onMove={onMove}
      onEdit={onEdit}
      onView={onView}
    />
  ))
      ) : (
  <div
    className="
    bg-white
    rounded-2xl
    p-5
    text-center
    text-gray-400
    text-sm
    mt-3
    "
  >
    No opportunities here yet.
  </div>
)}
    </div>
  );
}

export default KanbanColumn;
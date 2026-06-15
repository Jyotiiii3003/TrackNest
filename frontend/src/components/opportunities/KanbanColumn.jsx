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

      {opportunities.map((item) => (
        <OpportunityCard
          key={item.id}
          opportunity={item}
          onDelete={onDelete}
          onMove={onMove}
          onEdit={onEdit}
          onView={onView}
        />
      ))}
    </div>
  );
}

export default KanbanColumn;
import OpportunityCard from "./OpportunityCard";

function KanbanColumn({
  title,
  opportunities,
  onDelete,
  onMove,
}) {
  return (
    <div
      className="
      bg-white
        backdrop-blur-sm
        border
        border-black/5
        shadow-sm
      rounded-3xl
      p-4
      min-h-[500px]
      "
    >
      <h3
  className="mb-5 text-lg"
  style={{
    fontFamily: "Outfit",
    fontWeight: 600,
  }}
>
        {title}
        <span className="ml-2 text-gray-400">
        ({opportunities.length})
        </span>
    </h3>

      {opportunities.map((item) => (
        <OpportunityCard
          key={item.id}
          opportunity={item}
          onDelete={onDelete}
          onMove={onMove}
        />
      ))}
    </div>
  );
}

export default KanbanColumn;
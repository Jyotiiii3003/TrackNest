import OpportunityCard from "./OpportunityCard";

function KanbanColumn({
  title,
  opportunities,
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
        {title}
      </h3>

      {opportunities.map((item) => (
        <OpportunityCard
          key={item.id}
          company={item.company}
        />
      ))}
    </div>
  );
}

export default KanbanColumn;
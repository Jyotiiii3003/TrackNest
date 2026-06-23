function OpportunityCard({
  opportunity,
  onDelete,
  onMove,
  onEdit,
  onView,
  deletingId
}) {
  const categoryColors = {
    Internship: "bg-purple-100 text-purple-600",
    Hackathon: "bg-orange-100 text-orange-600",
    Scholarship: "bg-yellow-100 text-yellow-600",
    "Open Source": "bg-green-100 text-green-600",
    Competition: "bg-pink-100 text-pink-600",
    Fellowship: "bg-blue-100 text-blue-600",
    Event: "bg-indigo-100 text-indigo-600",
    "Campus Ambassador":
      "bg-red-100 text-red-600",
  };

  return (
    <div
      className="
      bg-white
      rounded-3xl
      p-5
      mb-3
      shadow-sm
      hover:shadow-lg
      hover:-translate-y-1
      hover:scale-[1.01]
      transition-all
      duration-300
      "
    >
      <h3
        className="tracking-tight text-xl leading-tight"
        style={{
          fontFamily: "Outfit",
          fontWeight: 600,
        }}
      >
        {opportunity.title}
      </h3>

      <p
        className="text-md mt-1 text-gray-500"
        style={{
          fontFamily: "Inter",
        }}
      >
        {opportunity.organization}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span
          className={`
          text-xs
          px-2
          py-1
          rounded-full
          ${
            categoryColors[
              opportunity.category
            ] || "bg-gray-100"
          }
          `}
        >
          {opportunity.category}
        </span>

        <span className="text-xs text-gray-400">
          {new Date(
            opportunity.deadline
          ).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
          })}
        </span>
      </div>

      <div className="flex gap-4 mt-4 flex-wrap">
        <button
          onClick={() =>
            onDelete(opportunity._id)
          }
          className="text-xs text-red-500 hover:text-red-700"
        >
          {deletingId === opportunity._id
          ?"Deleting..."
          :"Delete"}
        </button>

        <button
          onClick={() =>
            onMove(opportunity.id)
          }
          className="text-xs text-blue-500 hover:text-blue-700"
        >
          Move →
        </button>

        <button
          onClick={() =>
            onEdit(opportunity)
          }
          className="text-xs text-black hover:text-gray-600"
        >
          Edit
        </button>

        <button
          onClick={() =>
            onView(opportunity)
          }
          className="text-xs text-purple-500 hover:text-purple-700"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default OpportunityCard;
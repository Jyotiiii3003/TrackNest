function OpportunityCard({ opportunity,onDelete }) {

    const categoryColors = {
  Internship: "bg-purple-100 text-purple-700",
  Hackathon: "bg-orange-100 text-orange-700",
  Scholarship: "bg-yellow-100 text-yellow-700",
  "Open Source": "bg-green-100 text-green-700",
  Fellowship: "bg-blue-100 text-blue-700",
  Competition: "bg-pink-100 text-pink-700",
  Event: "bg-indigo-100 text-indigo-700",
  "Campus Ambassador": "bg-red-100 text-red-700",
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
  className="text-base leading-tight"
  style={{
    fontFamily: "Outfit",
    fontWeight: 600,
  }}
>
        {opportunity.title}
      </h3>

     <p
  className="text-sm mt-1 text-gray-500"
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
         ${categoryColors[opportunity.category] || "bg-gray-100"}
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
        <button
         onClick={() => onDelete(opportunity.id)}
        className="
        mt-4
        text-xs
        text-red-500
        hover:text-red-700
        transition
        "
        >
  Delete
</button>
      </div>
    </div>
  );
}

export default OpportunityCard;
function OpportunityCard({ opportunity }) {
  return (
    <div
      className="
      bg-white
      border
      border-gray-200
      rounded-2xl
      p-4
      mb-3
      hover:shadow-md
      transition-all
      "
    >
      {/* Title */}
      <h3 className="font-semibold text-sm">
        {opportunity.title}
      </h3>

      {/* Organization */}
      <p className="text-sm text-gray-500 mt-1">
        {opportunity.organization}
      </p>

      {/* Bottom Row */}
      <div className="flex justify-between items-center mt-4">
        <span
          className="
          text-xs
          px-2
          py-1
          rounded-full
          bg-gray-100
          "
        >
          {opportunity.category}
        </span>

        <span className="text-xs text-gray-400">
          {opportunity.deadline}
        </span>
      </div>
    </div>
  );
}

export default OpportunityCard;
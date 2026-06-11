function OpportunityCard({ company }) {
  return (
    <div
      className="
      bg-white
      border
      border-gray-200
      rounded-2xl
      p-4
      mb-3
      cursor-pointer
      hover:shadow-md
      transition-all
      "
    >
      {company}
    </div>
  );
}

export default OpportunityCard;
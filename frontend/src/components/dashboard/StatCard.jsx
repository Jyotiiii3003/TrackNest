function StatCard({ title, value }) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      border
      border-gray-200
      p-6
      hover:-translate-y-1
      transition-all
      "
    >
      <p className="text-gray-500">
        {title}
      </p>

      <h2
        className="text-4xl font-bold mt-3"
        style={{ fontFamily: "Outfit" }}
      >
        {value}
      </h2>
    </div>
  );
}

export default StatCard;
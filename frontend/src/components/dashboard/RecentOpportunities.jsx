function RecentOpportunities({
  opportunities,
}) {
  const recent =
    [...opportunities].reverse().slice(0, 3);

  return (
    <div
      className="
      bg-white
      rounded-3xl
      p-6
      shadow-sm
      "
    >
      <h2
        className="text-2xl mb-5"
        style={{
          fontFamily: "Outfit",
          fontWeight: 600,
        }}
      >
        Recent Opportunities
      </h2>

      <div className="space-y-4">
        {recent.map((item) => (
          <div
            key={item._id}
            className="border-b border-black/5 pb-3"
          >
            <h3 className="font-medium">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {item.organization}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentOpportunities;
function UpcomingDeadlines({
  opportunities,
}) {
  const upcoming =
    [...opportunities]
      .filter(
        (item) =>
          new Date(item.deadline) > new Date()
      )
      .sort(
        (a, b) =>
          new Date(a.deadline) -
          new Date(b.deadline)
      )
      .slice(0, 3);

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
        Upcoming Deadlines
      </h2>

      <div className="space-y-4">
        {upcoming.map((item) => (
          <div
            key={item.id}
            className="border-b border-black/5 pb-3"
          >
            <h3 className="font-medium">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {new Date(
                item.deadline
              ).toLocaleDateString(
                "en-IN",
                {
                  day: "numeric",
                  month: "short",
                }
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingDeadlines;
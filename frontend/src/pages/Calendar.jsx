import { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";

function Calendar() {
  const [opportunities, setOpportunities] =
    useState([]);

  useEffect(() => {
    const saved =
      localStorage.getItem("opportunities");

    if (saved) {
      setOpportunities(JSON.parse(saved));
    }
  }, []);

  const sortedDeadlines =
    [...opportunities].sort(
      (a, b) =>
        new Date(a.deadline) -
        new Date(b.deadline)
    );

  return (
    <AppLayout>
      <div className="space-y-10">

        <div>
          <h1
            className="text-7xl italic leading-none"
            style={{
              fontFamily:
                "Cormorant Garamond",
            }}
          >
            Calendar
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Track all your upcoming deadlines.
          </p>
        </div>

        <div className="space-y-4">

          {sortedDeadlines.map((item) => (
            <div
              key={item.id}
              className="
              bg-white
              rounded-3xl
              p-5
              shadow-sm
              flex
              justify-between
              items-center
              "
            >
              <div>
                <h3
                  className="text-xl"
                  style={{
                    fontFamily: "Outfit",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-1">
                  {item.organization}
                </p>
              </div>

              <div
                className="
                text-right
                "
              >
                <p className="text-lg font-medium">
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
            </div>
          ))}

        </div>
      </div>
    </AppLayout>
  );
}

export default Calendar;
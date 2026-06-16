import { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarPage() {
  const [value, setValue] =
    useState(new Date());

  const [opportunities, setOpportunities] =
    useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "opportunities"
        )
      ) || [];

    setOpportunities(saved);
  }, []);

  const selectedDateOpportunities =
    opportunities.filter((item) => {
      return (
        new Date(
          item.deadline
        ).toDateString() ===
        value.toDateString()
      );
    });

  return (
    <AppLayout>
      <div className="space-y-10">
        <div>
          <h1
            className="text-6xl italic"
            style={{
              fontFamily:
                "Cormorant Garamond",
            }}
          >
            Calendar
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Track all your deadlines
            visually.
          </p>
        </div>

        {opportunities.length === 0 ? (
          <div
            className="
            bg-white
            rounded-3xl
            p-8
            text-center
            shadow-sm
            "
          >
            No deadlines available yet.
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <ReactCalendar
                onChange={setValue}
                value={value}
              />
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                Deadlines on{" "}
                {value.toLocaleDateString(
                  "en-IN",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }
                )}
              </h2>

              {selectedDateOpportunities.length >
              0 ? (
                <div className="space-y-4">
                  {selectedDateOpportunities.map(
                    (item) => (
                      <div
                        key={item.id}
                        className="
                        border
                        rounded-2xl
                        p-4
                        "
                      >
                        <h3 className="font-semibold">
                          {item.title}
                        </h3>

                        <p className="text-gray-500 mt-1">
                          {
                            item.organization
                          }
                        </p>

                        <p className="text-sm text-gray-400 mt-2">
                          {item.category}
                        </p>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <p className="text-gray-400">
                  No deadlines on this
                  date.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}

export default CalendarPage;
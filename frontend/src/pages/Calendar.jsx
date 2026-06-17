import { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getOpportunities } from "../services/opportunityService";

function CalendarPage() {
  const [value, setValue] =
    useState(new Date());

  const [opportunities, setOpportunities] =
    useState([]);

  const fetchCalendarData =
    async () => {
      try {
        const { data } =
          await getOpportunities();

        setOpportunities(data);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchCalendarData();
  }, []);

  const selectedDateOpportunities =
    opportunities.filter((item) => {
      if (!item.deadline)
        return false;

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
            {/* Calendar */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <ReactCalendar
                onChange={setValue}
                value={value}
              />
            </div>

            {/* Selected Date Details */}
            <div className="bg-white rounded-3xl p-6 shadow-sm max-h-[600px] overflow-y-auto">
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
                        key={item._id}
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
                          {
                            item.category
                          }
                        </p>

                        <p className="text-sm text-gray-400 mt-1">
                          Status:{" "}
                          {item.status}
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
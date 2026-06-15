import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useEffect, useState } from "react";

function AppLayout({ children }) {
  const [searchTerm, setSearchTerm] =
  useState("");

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

  const filteredResults =
  opportunities.filter((item) =>
    `
    ${item.title}
    ${item.organization}
    ${item.notes || ""}
    ${item.strategyNotes || ""}
    ${item.prepNotes || ""}
    ${item.referralContact || ""}
    ${item.resumeName || ""}
    ${item.coverLetterName || ""}
    `
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    );
  return (
  <div className="flex bg-[#faf8f5] min-h-screen">
    <Sidebar />

    <div className="flex-1 flex flex-col">

      {/* Topbar + Global Search */}
      <div className="h-20 border-b px-8 flex items-center justify-between bg-[#faf8f5]">

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search everything..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="
            w-[320px]
            bg-white
            rounded-full
            px-5
            py-3
            border
            border-black/5
            shadow-sm
            outline-none
            "
          />

          {searchTerm && (
            <div
              className="
              absolute
              top-14
              left-0
              w-full
              bg-white
              rounded-2xl
              shadow-lg
              p-4
              z-50
              max-h-[400px]
              overflow-y-auto
              "
            >
              {filteredResults.length > 0 ? (
                filteredResults.map((item) => (
                  <div
                    key={item.id}
                    className="
                    border-b
                    py-3
                    last:border-none
                    "
                  >
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.organization}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">
                  No results found.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Right Side Topbar */}
        <Topbar />
      </div>

      {/* Main Content */}
      <main className="px-12 py-10">
        {children}
      </main>

    </div>
  </div>
);
}

export default AppLayout;
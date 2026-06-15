import { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";

function Documents() {
  const [opportunities, setOpportunities] =
    useState([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "opportunities"
        )
      ) || [];

    setOpportunities(saved);
  }, []);

  // Resume Library
  const resumes =
    opportunities.filter(
      (item) =>
        item.resumeName &&
        item.resumeName
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );

  // Cover Letter Library
  const covers =
    opportunities.filter(
      (item) =>
        item.coverLetterName &&
        item.coverLetterName
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );

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
            Documents
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Manage all resumes and
            cover letters used in your
            applications.
          </p>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search documents..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(
              e.target.value
            )
          }
          className="
          w-full
          md:w-[420px]
          bg-white
          rounded-full
          px-6
          py-4
          shadow-sm
          border
          border-black/5
          outline-none
          "
        />

        {/* Resume Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">
            Resume Library
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {resumes.map((item) => (
              <div
                key={item.id}
                className="
                bg-white
                rounded-3xl
                p-5
                shadow-sm
                "
              >
                <h3 className="font-semibold text-lg">
                  {item.resumeName}
                </h3>

                <p className="text-gray-500 mt-2">
                  Used for:{" "}
                  {item.title}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  {
                    item.organization
                  }
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cover Letter Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">
            Cover Letter Library
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {covers.map((item) => (
              <div
                key={item.id}
                className="
                bg-white
                rounded-3xl
                p-5
                shadow-sm
                "
              >
                <h3 className="font-semibold text-lg">
                  {
                    item.coverLetterName
                  }
                </h3>

                <p className="text-gray-500 mt-2">
                  Used for:{" "}
                  {item.title}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  {
                    item.organization
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Documents;
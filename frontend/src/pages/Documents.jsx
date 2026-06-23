import { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import {
  getOpportunities,
} from "../services/opportunityService";


function Documents() {
  const [opportunities, setOpportunities] =
    useState([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  useEffect(() => {
  const fetchDocuments =
    async () => {
      try {
        const { data } =
          await getOpportunities();

        setOpportunities(data);
      } catch (error) {
        console.log(error);
      }
    };

  fetchDocuments();
}, []);

  const groupDocuments = (type) => {
    const grouped = {};

    opportunities.forEach((item) => {
      const docName = item[type];

      if (!docName) return;

      if (!grouped[docName]) {
        grouped[docName] = [];
      }

      grouped[docName].push({
        title: item.title,
        organization:
          item.organization,
      });
    });

    return Object.entries(grouped).filter(
      ([docName]) =>
        docName
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );
  };

  const resumes =
    groupDocuments("resumeName");

  const covers =
    groupDocuments(
      "coverLetterName"
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
            Your application document
            vault.
          </p>
        </div>

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

        {/* Resume Library */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">
            Resume Library
          </h2>

          {resumes.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {resumes.map(
                ([name, usage]) => (
                  <div
                    key={name}
                    className="
                    bg-white
                    rounded-3xl
                    p-5
                    shadow-sm
                    "
                  >
                    <h3 className="font-semibold text-lg">
                      {name}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Used in{" "}
                      {usage.length}{" "}
                      application(s)
                    </p>

                    <div className="mt-3 space-y-2">
                      {usage.map(
                        (
                          app,
                          index
                        ) => (
                          <p
                            key={index}
                            className="text-sm text-gray-400"
                          >
                            {app.title} •{" "}
                            {
                              app.organization
                            }
                          </p>
                        )
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <div
              className="
              bg-white
              rounded-2xl
              p-5
              text-gray-400
              "
            >
              No resumes uploaded yet.
            </div>
          )}
        </div>

        {/* Cover Library */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">
            Cover Letter Library
          </h2>

          {covers.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {covers.map(
                ([name, usage]) => (
                  <div
                    key={name}
                    className="
                    bg-white
                    rounded-3xl
                    p-5
                    shadow-sm
                    "
                  >
                    <h3 className="font-semibold text-lg">
                      {name}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Used in{" "}
                      {usage.length}{" "}
                      application(s)
                    </p>

                    <div className="mt-3 space-y-2">
                      {usage.map(
                        (
                          app,
                          index
                        ) => (
                          <p
                            key={index}
                            className="text-sm text-gray-400"
                          >
                            {app.title} •{" "}
                            {
                              app.organization
                            }
                          </p>
                        )
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <div
              className="
              bg-white
              rounded-2xl
              p-5
              text-gray-400
              "
            >
              No cover letters uploaded yet.
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}

export default Documents;
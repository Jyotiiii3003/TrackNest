import { useState } from "react";
import AppLayout from "../layouts/AppLayout";
import API from "../api";

function ResumeAnalyzer() {
  const [resume, setResume] =
    useState(null);

  const [targetRole, setTargetRole] =
    useState("");

  const [result, setResult] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const handleAnalyze =
    async () => {
      if (!resume || !targetRole) return;

      const formData =
        new FormData();

      formData.append(
        "resume",
        resume
      );

      formData.append(
        "targetRole",
        targetRole
      );

      try {
        setLoading(true);

        const { data } =
          await API.post(
            "/resume/analyze",
            formData,
            {
              headers: {
                "Content-Type":
                  "multipart/form-data",
              },
            }
          );

        setResult(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1
            className="text-6xl italic"
            style={{
              fontFamily:
                "Cormorant Garamond",
            }}
          >
            Resume Analyzer
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Analyze your resume for ATS readiness.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm space-y-4">
          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setResume(
                e.target.files[0]
              )
            }
            className="w-full border rounded-xl p-3"
          />

          <input
            type="text"
            placeholder="Target Role (e.g Frontend Developer)"
            value={targetRole}
            onChange={(e) =>
              setTargetRole(
                e.target.value
              )
            }
            className="w-full border rounded-xl p-3"
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="px-6 py-3 bg-black text-white rounded-xl"
          >
            {loading
              ? "Analyzing..."
              : "Analyze Resume"}
          </button>
        </div>

        {result && (
          <div className="bg-white rounded-3xl p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-3xl font-bold">
                ATS Score:{" "}
                {result.atsScore}/100
              </h2>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">
                Missing Skills
              </h3>

              {result.missingSkills
                ?.length > 0 ? (
                <ul className="list-disc pl-6">
                  {result.missingSkills.map(
                    (
                      skill,
                      index
                    ) => (
                      <li key={index}>
                        {skill}
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <p>
                  No missing skills 🎉
                </p>
              )}
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">
                Suggestions
              </h3>

              {result.suggestions
                ?.length > 0 ? (
                <ul className="list-disc pl-6">
                  {result.suggestions.map(
                    (
                      suggestion,
                      index
                    ) => (
                      <li key={index}>
                        {suggestion}
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <p>
                  Resume looks strong 🚀
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}

export default ResumeAnalyzer;
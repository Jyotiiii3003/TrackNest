import { useState, useEffect } from "react";
import { uploadFile } from "../../services/uploadService";

function AddOpportunityModal({
  isOpen,
  onClose,
  onAdd,
  existingData,
}) {
  const [uploading, setUploading] =
    useState(false);

  const initialState = {
    title: "",
    organization: "",
    category: "Internship",
    status: "Wishlist",
    deadline: "",
    reminderDays: 3,
    resumeName: "",
    resumeUrl: "",
    coverLetterName: "",
    coverLetterUrl: "",
    notes: "",
    importantLinks: "",
    referralContact: "",
    strategyNotes: "",
    prepNotes: "",
    followUpDate: "",
    followUpStatus: "Pending",
  };

  const [formData, setFormData] =
    useState(
      existingData || initialState
    );

  useEffect(() => {
    setFormData(
      existingData || initialState
    );
  }, [existingData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({
      ...formData,
      history:
        existingData?.history || [
          {
            action: "Created",
            date: new Date().toLocaleString(),
          },
        ],
    });

    setFormData(initialState);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-3xl p-6 w-[550px] max-h-[90vh] overflow-y-auto shadow-xl">
        <h2 className="text-2xl font-bold mb-6">
          {existingData
            ? "Edit Opportunity"
            : "Add Opportunity"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Title"
            className="w-full border rounded-xl p-3"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title:
                  e.target.value,
              })
            }
            required
          />

          <input
            type="text"
            placeholder="Organization"
            className="w-full border rounded-xl p-3"
            value={
              formData.organization
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                organization:
                  e.target.value,
              })
            }
            required
          />

          {/* Resume Upload */}
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full border rounded-xl p-3"
            onChange={async (e) => {
              const file =
                e.target.files[0];

              if (!file) return;

              try {
                setUploading(true);

                const uploaded =
                  await uploadFile(
                    file
                  );

                setFormData({
                  ...formData,
                  resumeName:
                    uploaded.originalName,
                  resumeUrl:
                    uploaded.url,
                });

                setUploading(false);
              } catch (error) {
                console.log(error);
                setUploading(false);
              }
            }}
          />

          {formData.resumeName && (
            <p className="text-sm text-gray-400">
              Selected:{" "}
              {formData.resumeName}
            </p>
          )}

          {/* Cover Letter Upload */}
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full border rounded-xl p-3"
            onChange={async (e) => {
              const file =
                e.target.files[0];

              if (!file) return;

              try {
                setUploading(true);

                const uploaded =
                  await uploadFile(
                    file
                  );

                setFormData({
                  ...formData,
                  coverLetterName:
                    uploaded.originalName,
                  coverLetterUrl:
                    uploaded.url,
                });

                setUploading(false);
              } catch (error) {
                console.log(error);
                setUploading(false);
              }
            }}
          />

          {formData.coverLetterName && (
            <p className="text-sm text-gray-400">
              Selected:{" "}
              {
                formData.coverLetterName
              }
            </p>
          )}

          <textarea
            placeholder="Notes"
            className="w-full border rounded-xl p-3"
            rows="4"
            value={formData.notes}
            onChange={(e) =>
              setFormData({
                ...formData,
                notes:
                  e.target.value,
              })
            }
          />

          <input
            type="date"
            className="w-full border rounded-xl p-3"
            value={
              formData.deadline
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                deadline:
                  e.target.value,
              })
            }
          />

          <div className="sticky bottom-0 bg-white pt-4 flex justify-end gap-3 pb-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-xl"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={uploading}
              className="px-4 py-2 bg-black text-white rounded-xl"
            >
              {uploading
                ? "Uploading..."
                : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddOpportunityModal;
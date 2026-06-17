import { useState,useEffect} from "react";
import { uploadFile } from "../../services/uploadService";
function AddOpportunityModal({
  isOpen,
  onClose,
  onAdd,
  existingData
}) {
  const [formData, setFormData] = useState(
  existingData || {
    title: "",
    organization: "",
    category: "Internship",
    status: "Wishlist",
    deadline: "",
    reminderDays:3,
    resumeName: "",
    resumeURL:"",
    coverLetterName: "",
    coverLetterURL:"",
    notes: "",
    importantLinks: "",
    referralContact: "",
    strategyNotes: "",
    prepNotes: "",
    followUpDate: "",
    folloUpStatus: ""
  }
);

    useEffect(() => {
  setFormData(
    existingData || {
      title: "",
      organization: "",
      category: "Internship",
      status: "Wishlist",
      deadline: "",
      reminderDays: 3,
      resumeName: "",
      resumeURL: "",
      coverLetterName: "",
      coverLetterURL: "",
      notes: "",
      importantLinks: "",
      referralContact: "",
      strategyNotes: "",
      prepNotes: "",
      followUpDate: "",
      followUpStatus: ""
    }
  );
}, [existingData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({
    id: existingData?.id || Date.now(),
    ...formData,
    history: existingData?.history || [
    {
      action: "Created",
      date: new Date().toLocaleString(),
    },
    ],
    });

    setFormData({
      title: "",
      organization: "",
      category: "Internship",
      status: "Wishlist",
      deadline: "",
      reminderDays: 3
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-3xl p-6 w-[550px] max-h-[90vh] overflow-y-auto shadow-xl">

        <h2 className="text-2xl font-bold mb-6">
          Add Opportunity
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
                title: e.target.value,
              })
            }
            required
          />

          <input
            type="text"
            placeholder="Organization"
            className="w-full border rounded-xl p-3"
            value={formData.organization}
            onChange={(e) =>
              setFormData({
                ...formData,
                organization: e.target.value,
              })
            }
            required
          />

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full border rounded-xl p-3"
            onChange={async (e) => {
              const file =
              e.target.files[0];

              if (!file) return;

              try {
              const uploaded =
                await uploadFile(file);

                setFormData({
                ...formData,
                resumeName:
                uploaded.originalName,
                resumeUrl:
                 uploaded.url,
                });
               } catch (error) {
              console.log(error);
                }
              }}
          />
          {formData.resumeName && (
          <p className="text-sm text-gray-400">
          Selected: {formData.resumeName}
          </p>
          )}


          <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full border rounded-xl p-3"
          onChange={async (e) => {
            const file =
            e.target.files[0];

            if (!file) return;

            try {
            const uploaded =
            await uploadFile(file);

            setFormData({
            ...formData,
            coverLetterName:
              uploaded.originalName,
            coverLetterUrl:
              uploaded.url,
            });
            } catch (error) {
              console.log(error);
           }
          }}
          />
          {formData.coverLetterName && (
          <p className="text-sm text-gray-400">
          Selected: {formData.coverLetterName}
          </p>
          )}


          <textarea
            placeholder="Notes (referral, strategy, important links...)"
            className="w-full border rounded-xl p-3"
            rows="4"
            value={formData.notes}
            onChange={(e) =>
            setFormData({
            ...formData,
            notes: e.target.value,
            })
            }
          />

          <textarea
            placeholder="Important Links"
            className="w-full border rounded-xl p-3"
            rows="2"
            value={formData.importantLinks}
            onChange={(e) =>
            setFormData({
            ...formData,
            importantLinks: e.target.value,
            })
            }
          />
          <input
            type="text"
            placeholder="Referral Contact"
            className="w-full border rounded-xl p-3"
            value={formData.referralContact}
            onChange={(e) =>
            setFormData({
            ...formData,
            referralContact: e.target.value,
            })
            }
          />

          <textarea
            placeholder="Strategy Notes"
            className="w-full border rounded-xl p-3"
            rows="3"
            value={formData.strategyNotes}
            onChange={(e) =>
            setFormData({
            ...formData,
            strategyNotes: e.target.value,
            })
            }
          />

          <textarea
            placeholder="Preparation Notes"
            className="w-full border rounded-xl p-3"
            rows="3"
            value={formData.prepNotes}
            onChange={(e) =>
            setFormData({ 
            ...formData,
            prepNotes: e.target.value,
            })
            }
          />

          <input
          type="date"
          className="w-full border rounded-xl p-3"
          value={formData.followUpDate}
          onChange={(e) =>
            setFormData({
            ...formData,
            followUpDate: e.target.value,
            })
          }
          />

          <select
            className="w-full border rounded-xl p-3"
            value={formData.followUpStatus}
            onChange={(e) =>
              setFormData({
              ...formData,
              followUpStatus: e.target.value,
            })
          }
          >
          <option>Pending</option>
          <option>Done</option>
          <option>Skipped</option>
          <option>Responded</option>
        </select>

          <select
              className="w-full border rounded-xl p-3"
              value={formData.category}
              onChange={(e) =>
              setFormData({
              ...formData,
              category: e.target.value,
              })
            }
          >
          <option>Internship</option>
          <option>Hackathon</option>
          <option>Scholarship</option>
          <option>Open Source</option>
          <option>Campus Ambassador</option>
          <option>Competition</option>
          <option>Fellowship</option>
          <option>Placement Drive</option>
          <option>Event</option>
          </select>

          <select
                className="w-full border rounded-xl p-3"
                value={formData.reminderDays}
                onChange={(e) =>
                  setFormData({
                  ...formData,
                  reminderDays: Number(e.target.value),
                 })
                  }
                  >
              <option value={1}>
                 Remind 1 day before
              </option>

              <option value={3}>
                 Remind 3 days before
              </option>

              <option value={7}>
                 Remind 7 days before
              </option>
          </select>


          <select
            className="w-full border rounded-xl p-3"
            value={formData.status}
            onChange={(e) =>
              setFormData({
                ...formData,
                status: e.target.value,
              })
            }
          >
            <option>Wishlist</option>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
            <option>Completed</option>
          </select>

          <input
            type="date"
            className="w-full border rounded-xl p-3"
            value={formData.deadline}
            onChange={(e) =>
              setFormData({
                ...formData,
                deadline: e.target.value,
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
              className="px-4 py-2 bg-black text-white rounded-xl"
            >
              Save
            </button>

          </div>
        </form>

      </div>
    </div>
  );
}

export default AddOpportunityModal;
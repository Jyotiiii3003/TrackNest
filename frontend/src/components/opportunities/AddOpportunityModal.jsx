import { useState,useEffect} from "react";

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
    reminderDays:3
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
      reminderDays: 3
    }
  );
}, [existingData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({
      id: Date.now(),
      ...formData,
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
      <div className="bg-white rounded-3xl p-6 w-[500px]">

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
            <option>Accepted</option>
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

          <div className="flex justify-end gap-3 pt-4">

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
function OpportunityDetailModal({
  isOpen,
  onClose,
  opportunity,
}) {
  if (!isOpen || !opportunity)
    return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-end z-50">
      <div
        className="
        w-[500px]
        h-full
        bg-white
        p-8
        shadow-xl
        overflow-y-auto
        "
      >
        <div className="flex justify-between items-center mb-8">
          <h2
            className="text-3xl"
            style={{
              fontFamily: "Outfit",
              fontWeight: 600,
            }}
          >
            Opportunity Details
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500"
          >
            Close
          </button>
        </div>

        <div className="space-y-6">

          <div>
            <p className="text-sm text-gray-400">
              Title
            </p>
            <h3 className="text-xl font-medium">
              {opportunity.title}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-400">
              Organization
            </p>
            <h3>{opportunity.organization}</h3>
          </div>

          <div>
            <p className="text-sm text-gray-400">
              Resume Used
            </p>
            <h3>
              {opportunity.resumeName || "N/A"}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-400">
              Cover Letter
            </p>
            <h3>
              {opportunity.coverLetterName || "N/A"}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-400">
              Notes
            </p>
            <p>
              {opportunity.notes || "No notes"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">
              Reminder
            </p>
            <h3>
              {opportunity.reminderDays} day(s)
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-400">
              Deadline
            </p>
            <h3>
              {opportunity.deadline}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-400">
              Status
            </p>
            <h3>{opportunity.status}</h3>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OpportunityDetailModal;
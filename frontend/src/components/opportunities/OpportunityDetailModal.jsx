import { motion } from "framer-motion";

function OpportunityDetailModal({
  isOpen,
  onClose,
  opportunity,
}) {
  if (!isOpen || !opportunity)
    return null;

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/50
      backdrop-blur-sm
      flex
      justify-center
      items-center
      z-50
      "
    >
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
          y: 30,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        exit={{
          scale: 0.8,
          opacity: 0,
          y: 30,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
        bg-white
        rounded-3xl
        p-8
        w-[600px]
        max-h-[90vh]
        overflow-y-auto
        shadow-xl
        "
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2
              className="text-3xl"
              style={{
                fontFamily: "Outfit",
                fontWeight: 600,
              }}
            >
              {opportunity.title}
            </h2>

            <p className="text-gray-500 mt-1">
              {opportunity.organization}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500"
          >
            Close
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">
              Application Info
            </h3>

            <p>
              Status: {opportunity.status}
            </p>

            <p>
              Deadline:{" "}
              {new Date(
                opportunity.deadline
              ).toLocaleDateString(
                "en-IN",
                {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }
              )}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Documents
            </h3>

            <p>
              Resume:{" "}
              {opportunity.resumeName ||
                "N/A"}
            </p>

            <p>
              Cover Letter:{" "}
              {opportunity.coverLetterName ||
                "N/A"}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Notes
            </h3>

            <div className="bg-gray-50 p-4 rounded-2xl">
              {opportunity.notes ||
                "No notes"}
            </div>
          </div>

            <div>
                <h3 className="font-semibold mb-2">
                Important Links
                </h3>

                <div className="bg-gray-50 p-4 rounded-2xl">
                {opportunity.importantLinks || "No links"}
                </div>
            </div> 

            <div>
                    <h3 className="font-semibold mb-2">
                    Referral Contact
                    </h3>

                <p>
                 {opportunity.referralContact || "None"}
                </p>
            </div>

            <div>
                <h3 className="font-semibold mb-2">
                Strategy Notes
                 </h3>

                <div className="bg-gray-50 p-4 rounded-2xl">
                    {opportunity.strategyNotes || "No strategy notes"}
                </div>
            </div>

            <div>
                <h3 className="font-semibold mb-2">
                Interview Prep
                 </h3>

                <div className="bg-gray-50 p-4 rounded-2xl">
                {opportunity.prepNotes || "No prep notes"}
                </div>
            </div>

            <div>
                 <h3 className="font-semibold mb-2">
                    Follow-up Tracker
                </h3>

                <p>
                 Date: {opportunity.followUpDate || "Not set"}
                 </p>

                <p>
                     Status: {opportunity.followUpStatus}
                </p>
            </div>


          <div>
            <h3 className="font-semibold mb-2">
              Reminder
            </h3>

            <p>
              {opportunity.reminderDays} day(s)
              before
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
                Activity Timeline
            </h3>

            <div className="space-y-3">
                {opportunity.history?.map(
                (entry, index) => (
            <div
                key={index}
                className="
                bg-gray-50
                rounded-2xl
                p-3
                "
                >
                <p className="font-medium">
                    {entry.action}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                    {entry.date}
                </p>
                </div>
                )
                )}
            </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
}

export default OpportunityDetailModal;
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function OpportunityDetailModal({
  isOpen,
  onClose,
  opportunity,
}) {
  const [rounds, setRounds] =
    useState([]);

  useEffect(() => {
    if (opportunity?.interviewRounds) {
      setRounds(
        opportunity.interviewRounds
      );
    }
  }, [opportunity]);

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
          {/* Application Info */}
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

          {/* Documents */}
          <div>
            <h3 className="font-semibold mb-2">
              Documents
            </h3>

            <div className="space-y-3">
              {opportunity.resumeUrl ? (
                <a
                  href={`${opportunity.resumeUrl}?fl_attachment`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  block
                  bg-gray-50
                  p-4
                  rounded-2xl
                  hover:bg-gray-100
                  transition
                  "
                >
                  📄 Resume —{" "}
                  {opportunity.resumeName}
                </a>
              ) : (
                <p>No Resume Uploaded</p>
              )}

              {opportunity.coverLetterUrl ? (
                <a
                  href={`${opportunity.coverLetterUrl}?fl_attachment`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  block
                  bg-gray-50
                  p-4
                  rounded-2xl
                  hover:bg-gray-100
                  transition
                  "
                >
                  📄 Cover Letter —{" "}
                  {
                    opportunity.coverLetterName
                  }
                </a>
              ) : (
                <p>
                  No Cover Letter Uploaded
                </p>
              )}
            </div>
          </div>

          {/* Notes */}
          <div>
            <h3 className="font-semibold mb-2">
              Notes
            </h3>

            <div className="bg-gray-50 p-4 rounded-2xl">
              {opportunity.notes ||
                "No notes"}
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-semibold mb-2">
              Important Links
            </h3>

            <div className="bg-gray-50 p-4 rounded-2xl">
              {opportunity.importantLinks ||
                "No links"}
            </div>
          </div>

          {/* Referral Contact */}
          <div>
            <h3 className="font-semibold mb-2">
              Referral Contact
            </h3>

            <p>
              {opportunity.referralContact ||
                "None"}
            </p>
          </div>

          {/* Strategy Notes */}
          <div>
            <h3 className="font-semibold mb-2">
              Strategy Notes
            </h3>

            <div className="bg-gray-50 p-4 rounded-2xl">
              {opportunity.strategyNotes ||
                "No strategy notes"}
            </div>
          </div>

          {/* Interview Prep */}
          <div>
            <h3 className="font-semibold mb-2">
              Interview Prep
            </h3>

            <div className="bg-gray-50 p-4 rounded-2xl">
              {opportunity.prepNotes ||
                "No prep notes"}
            </div>
          </div>

          {/* Follow-up Tracker */}
          <div>
            <h3 className="font-semibold mb-2">
              Follow-up Tracker
            </h3>

            <p>
              Date:{" "}
              {opportunity.followUpDate ||
                "Not set"}
            </p>

            <p>
              Status:{" "}
              {opportunity.followUpStatus}
            </p>
          </div>

          {/* Reminder */}
          <div>
            <h3 className="font-semibold mb-2">
              Reminder
            </h3>

            <p>
              {opportunity.reminderDays} day(s)
              before
            </p>
          </div>

          {/* Interview Tracker */}
          <div>
            <h3 className="font-semibold mb-2">
              Interview Tracker
            </h3>

            <div className="space-y-3">
              {rounds?.map(
                (round, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl p-4"
                  >
                    <p className="font-medium">
                      {round.roundName}
                    </p>

                    <select
                      className="mt-2 border rounded-xl p-2 w-full"
                      value={round.status}
                      onChange={(e) => {
                        const updatedRounds =
                          [...rounds];

                        updatedRounds[
                          index
                        ].status =
                          e.target.value;

                        setRounds(
                          updatedRounds
                        );
                      }}
                    >
                      <option>
                        Pending
                      </option>
                      <option>
                        Cleared
                      </option>
                      <option>
                        Rejected
                      </option>
                      <option>
                        Scheduled
                      </option>
                    </select>

                    <p className="text-sm text-gray-400 mt-1">
                      {round.notes ||
                        "No notes"}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Activity Timeline */}
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
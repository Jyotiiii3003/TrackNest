const cron = require("node-cron");
const Opportunity = require("../models/Opportunity");
const User = require("../models/User");
const transporter = require("../config/mailer");

const startDeadlineNotifier = () => {
  cron.schedule("0 9 * * *", async () => {
    console.log(
      "Checking deadlines..."
    );

    const opportunities =
      await Opportunity.find();

    const today = new Date();

    for (const opportunity of opportunities) {
      const diff =
        Math.ceil(
          (
            new Date(
              opportunity.deadline
            ) - today
          ) /
            (1000 * 60 * 60 * 24)
        );

      if (
        diff ===
          opportunity.reminderDays ||
        diff === 1 ||
        diff === 0
      ) {
        const user =
          await User.findById(
            opportunity.user
          );

        if (!user) continue;

        await transporter.sendMail({
          from:
            process.env.EMAIL_USER,
          to: user.email,
          subject:
            "TrackNest Deadline Alert 🚨",
          text: `Reminder: ${opportunity.title} at ${opportunity.organization} deadline is in ${diff} day(s).`,
        });

        console.log(
          `Reminder sent to ${user.email}`
        );
      }
    }
  });
};

module.exports =
  startDeadlineNotifier;
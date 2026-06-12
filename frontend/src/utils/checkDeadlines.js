export function checkDeadlines(
  opportunities
) {
  if (
    Notification.permission !== "granted"
  )
    return;

  opportunities.forEach((item) => {
    const deadline =
      new Date(item.deadline);

    const today = new Date();

    const diffTime =
      deadline - today;

    const diffDays = Math.ceil(
      diffTime /
        (1000 * 60 * 60 * 24)
    );

    if (diffDays >= 0 && diffDays <= item.reminderDays) {
      new Notification(
        `${item.title} deadline approaching`,
        {
          body: `${item.organization} ends in ${diffDays} day(s)!`,
        }
      );
    }
  });
}
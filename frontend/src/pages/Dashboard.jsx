import AppLayout from "../layouts/AppLayout";
import StatCard from "../components/dashboard/StatCard";
import { checkDeadlines } from "../utils/checkDeadlines";
import { useState, useEffect } from "react";
import RecentOpportunities from "../components/dashboard/RecentOpportunities";
import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";

function Dashboard() {
  const [opportunities, setOpportunities] =
    useState([]);

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "opportunities"
      );

    if (saved) {
      const parsed =
        JSON.parse(saved);

      setOpportunities(parsed);

      checkDeadlines(parsed);
    }
  }, []);

  // Analytics
  const total =
    opportunities.length;

  const completed =
    opportunities.filter(
      (item) =>
        item.status === "Completed"
    ).length;

  const rejected =
    opportunities.filter(
      (item) =>
        item.status === "Rejected"
    ).length;

  const successRate =
    total > 0
      ? Math.round(
          (completed / total) * 100
        )
      : 0;

  const rejectionRate =
    total > 0
      ? Math.round(
          (rejected / total) * 100
        )
      : 0;

  // Most applied category
  const categoryCount = {};

  opportunities.forEach((item) => {
    categoryCount[item.category] =
      (categoryCount[item.category] ||
        0) + 1;
  });

  const mostApplied =
    Object.keys(categoryCount)
      .length > 0
      ? Object.keys(
          categoryCount
        ).reduce((a, b) =>
          categoryCount[a] >
          categoryCount[b]
            ? a
            : b
        )
      : "N/A";

  // Urgent deadlines
  const urgentCount =
    opportunities.filter(
      (item) => {
        const diff =
          Math.ceil(
            (new Date(
              item.deadline
            ) -
              new Date()) /
              (1000 *
                60 *
                60 *
                24)
          );

        return (
          diff >= 0 &&
          diff <= 3
        );
      }
    ).length;

  const stats = [
    {
      title: "Total Applications",
      value: total,
    },
    {
      title: "Success Rate",
      value: `${successRate}%`,
    },
    {
      title: "Rejection Rate",
      value: `${rejectionRate}%`,
    },
    {
      title: "Urgent Deadlines",
      value: urgentCount,
    },
    {
      title: "Most Applied",
      value: mostApplied,
    },
  ];

  return (
    <AppLayout>
      <div className="space-y-10">
        <div>
          <h1
            className="text-5xl font-bold"
            style={{
              fontFamily: "Outfit",
            }}
          >
            Welcome back
          </h1>

          <p className="text-gray-500 mt-2">
            Here's what's happening
            today.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </div>

        {/* Widgets */}
        <div className="grid lg:grid-cols-2 gap-6">
          <RecentOpportunities
            opportunities={
              opportunities
            }
          />

          <UpcomingDeadlines
            opportunities={
              opportunities
            }
          />
        </div>
      </div>
    </AppLayout>
  );
}

export default Dashboard;
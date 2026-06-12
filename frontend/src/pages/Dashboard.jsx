import AppLayout from "../layouts/AppLayout";

import StatCard from "../components/dashboard/StatCard";
import { checkDeadlines } from "../utils/checkDeadlines";
import {useState, useEffect} from "react";
import RecentOpportunities from "../components/dashboard/RecentOpportunities";
import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";

function Dashboard() {
  const [opportunities, setOpportunities] =
  useState([]);

  useEffect(() => {
    const saved =
    localStorage.getItem("opportunities");

    if (saved) {
      const parsed=JSON.parse(saved);
    setOpportunities(parsed);
    checkDeadlines(parsed);
    }
  }, []);


   const stats = [
  {
    title: "Applications",
    value: opportunities.length,
  },
  {
    title: "Interviews",
    value: opportunities.filter(
      (item) => item.status === "Interview"
    ).length,
  },
  {
    title: "Offers",
    value: opportunities.filter(
      (item) => item.status === "Offer"
    ).length,
  },
  {
    title: "Upcoming Deadlines",
    value: opportunities.filter(
      (item) =>
        new Date(item.deadline) > new Date()
    ).length,
  },
];

  return (
    <AppLayout>

      <div className="space-y-10">

        <div>
          <h1
            className="text-5xl font-bold"
            style={{ fontFamily: "Outfit" }}
          >
            Welcome back 
          </h1>

          <p className="text-gray-500 mt-2">
            Here's what's happening today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
            />
          ))}

        </div>

        <div className="grid lg:grid-cols-2 gap-6">
        <RecentOpportunities
        opportunities={opportunities}
        />

        <UpcomingDeadlines
        opportunities={opportunities}
       />
      </div>

      </div>

    </AppLayout>
  );
}

export default Dashboard;
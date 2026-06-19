import AppLayout from "../layouts/AppLayout";
import StatCard from "../components/dashboard/StatCard";
import { checkDeadlines } from "../utils/checkDeadlines";
import { useState, useEffect } from "react";
import RecentOpportunities from "../components/dashboard/RecentOpportunities";
import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";
import { getOpportunities } from "../services/opportunityService";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function Dashboard() {
  const [opportunities, setOpportunities] =
    useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData =
    async () => {
      try {
        const { data } =
          await getOpportunities();

        setOpportunities(data);
        checkDeadlines(data);
      } catch (error) {
        console.log(error);
      }
    };

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

  const interviews =
    opportunities.filter(
      (item) =>
        item.status === "Interview"
    ).length;

  const offers =
    opportunities.filter(
      (item) =>
        item.status === "Offer"
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

  // Category count
  const categoryCount = {};

  opportunities.forEach((item) => {
    categoryCount[item.category] =
      (categoryCount[item.category] || 0) + 1;
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
      title: "Interviews",
      value: interviews,
    },
    {
      title: "Offers",
      value: offers,
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

  // Pie Chart Data
  const statusChartData = {
    labels: [
      "Wishlist",
      "Applied",
      "Interview",
      "Offer",
      "Rejected",
      "Completed",
    ],
    datasets: [
      {
        data: [
          opportunities.filter(
            (item) =>
              item.status ===
              "Wishlist"
          ).length,
          opportunities.filter(
            (item) =>
              item.status ===
              "Applied"
          ).length,
          interviews,
          offers,
          rejected,
          completed,
        ],
      },
    ],
  };

  // Bar Chart Data
  const categoryChartData = {
    labels:
      Object.keys(
        categoryCount
      ),
    datasets: [
      {
        label: "Applications",
        data:
          Object.values(
            categoryCount
          ),
      },
    ],
  };

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

        {opportunities.length ===
          0 && (
          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
            <h2 className="text-2xl font-semibold">
              No opportunities yet
            </h2>

            <p className="text-gray-500 mt-2">
              Start tracking your first
              opportunity to unlock
              analytics.
            </p>
          </div>
        )}

        {/* Stats */}
        {opportunities.length >
          0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
              />
            ))}
          </div>
        )}

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

        {/* Charts */}
        {opportunities.length >
          0 && (
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Application Status
              </h3>

              <Pie
                data={
                  statusChartData
                }
              />
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Category Distribution
              </h3>

              <Bar
                data={
                  categoryChartData
                }
              />
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}

export default Dashboard;
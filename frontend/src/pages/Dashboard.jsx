import AppLayout from "../layouts/AppLayout";

import StatCard from "../components/dashboard/StatCard";

import { dashboardData } from "../data/mockDashboard";

function Dashboard() {
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

          {dashboardData.stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
            />
          ))}

        </div>

      </div>

    </AppLayout>
  );
}

export default Dashboard;
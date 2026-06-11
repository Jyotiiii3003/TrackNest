import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AppLayout({ children }) {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default AppLayout;
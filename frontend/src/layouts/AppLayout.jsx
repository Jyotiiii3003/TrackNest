import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AppLayout({ children }) {
  return (
    <div className="flex bg-[#faf8f5]">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <main className="px-12 py-10">
          {children}
        </main>

      </div>

    </div>
  );
}

export default AppLayout;
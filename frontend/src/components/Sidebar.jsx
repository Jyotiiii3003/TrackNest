import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Opportunities", path: "/opportunities" },
    { name: "Calendar", path: "/calendar" },
    { name: "Documents", path: "/documents" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 h-screen bg-[#faf8f5] border-r border-black/5 p-6">

      <div className="mb-12">
        <h1
          className="text-4xl font-bold tracking-tight"
          style={{ fontFamily: "Outfit" }}
        >
          TrackNest
        </h1>

        <p className="text-sm italic text-gray-500 mt-1"
        style={{ fontFamily: "Cormorant Garamond" }}>
          organize every opportunity
        </p>
      </div>

      <nav className="space-y-2">
        {links.map((link) => {
          const active =
            location.pathname === link.path;

          return (
            <Link
              key={link.path}
              to={link.path}
              className={`
                block
                px-4
                py-3
                rounded-2xl
                transition-all
                ${
                  active
                    ? "bg-black text-white"
                    : "hover:bg-white"
                }
              `}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
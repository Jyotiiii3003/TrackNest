import { Link } from "react-router-dom";

function Sidebar() {
  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Opportunities", path: "/opportunities" },
    { name: "Calendar", path: "/calendar" },
    { name: "Documents", path: "/documents" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 border-r border-gray-200 bg-white h-screen p-6">

      <h1
        className="text-2xl font-bold mb-10"
        style={{ fontFamily: "Outfit" }}
      >
        TrackNest
      </h1>

      <nav className="space-y-2">

        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="
              block
              px-4
              py-3
              rounded-xl
              hover:bg-gray-100
              transition
            "
          >
            {link.name}
          </Link>
        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;
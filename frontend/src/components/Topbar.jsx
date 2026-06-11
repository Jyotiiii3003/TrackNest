import { useLocation } from "react-router-dom";

function Topbar() {
  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/opportunities": "Opportunities",
    "/calendar": "Calendar",
    "/documents": "Documents",
    "/settings": "Settings",
  };

  return (
    <header
      className="
      h-20
      border-b
      border-black/5
      flex
      items-center
      justify-between
      px-8
      bg-[#faf8f5]
      "
    >
      <h2
        className="text-xl font-semibold"
        style={{ fontFamily: "Outfit" }}
      >
        {pageTitles[location.pathname] || "TrackNest"}
      </h2>

      <div
        className="
        w-12
        h-12
        rounded-full
        bg-[#c7b8ea]
        flex
        items-center
        justify-center
        font-semibold
        "
      >
        JM
      </div>
    </header>
  );
}

export default Topbar;
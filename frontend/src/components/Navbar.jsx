import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token =
    localStorage.getItem("token");

  return (
    <header
      className="
      w-full
      border-b
      border-black/5
      bg-[#faf8f5]
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-5
        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}
        <h1
          className="text-2xl font-bold"
          style={{
            fontFamily: "Outfit",
          }}
        >
          TrackNest
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {token ? (
            <button
              onClick={() =>
                navigate("/dashboard")
              }
              className="
              px-5
              py-2
              rounded-full
              bg-black
              text-white
              "
            >
              Dashboard
            </button>
          ) : (
            <>
              <button
                onClick={() =>
                  navigate("/login")
                }
                className="
                px-5
                py-2
                rounded-full
                border
                "
              >
                Sign In
              </button>

              <button
                onClick={() =>
                  navigate("/register")
                }
                className="
                px-5
                py-2
                rounded-full
                bg-black
                text-white
                "
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;